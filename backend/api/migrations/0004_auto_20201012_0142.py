# Generated by Django 3.1.1 on 2020-10-12 01:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20201012_0134'),
    ]

    operations = [
        migrations.AlterField(
            model_name='to_learn',
            name='cats',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.category'),
        ),
    ]
