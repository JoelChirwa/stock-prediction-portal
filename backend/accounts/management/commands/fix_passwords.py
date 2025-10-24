from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model


KNOWN_ALGORITHMS = {
    'pbkdf2_sha256',
    'argon2',
    'bcrypt_sha256',
    'bcrypt',
    'sha1',
    'md5',
    'unsalted_md5',
    'unsalted_sha1',
}


class Command(BaseCommand):
    help = (
        'Detect password fields that look like plain text (or unknown format) '
        'and re-hash them using the default Django hasher by calling '
        'set_password(current_value). Use with caution and backup your DB first.'
    )

    def handle(self, *args, **options):
        User = get_user_model()
        users = User.objects.all()
        fixed = 0
        skipped = 0

        for u in users:
            pw = u.password or ''
            # Django hashed passwords use the form: algorithm$salt$hash
            if '$' in pw:
                algo = pw.split('$', 1)[0]
                if algo in KNOWN_ALGORITHMS:
                    skipped += 1
                    continue

            if not pw:
                self.stdout.write(f"Skipping {u.username}: empty password")
                skipped += 1
                continue

            # Treat current password value as plaintext and re-hash it
            u.set_password(pw)
            u.save()
            fixed += 1
            self.stdout.write(f"Re-hashed password for user: {u.username}")

        self.stdout.write(self.style.SUCCESS(f"Done. Re-hashed: {fixed}. Skipped: {skipped}"))
