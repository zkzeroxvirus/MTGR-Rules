from pathlib import Path

# Normalize legacy Event terminology across Markdown docs.
for path in Path('.').rglob('*.md'):
    text = path.read_text(encoding='utf-8')
    updated = text.replace('Bad Stuff Event', 'Bad Event (Ambush counts as Bad)')
    if updated != text:
        path.write_text(updated, encoding='utf-8')

# Field Surgeon: the temporary over-max life persists through the next encounter.
wanderers = Path('WANDERERS-V1.0.md')
text = wanderers.read_text(encoding='utf-8')
old = '> *(You may exceed your maximum life this way. This excess life lasts only until the next encounter begins.)*'
new = '> *(You may exceed your maximum life this way. This excess life lasts only for the next encounter.)*'
if old not in text:
    raise SystemExit('Field Surgeon wording anchor not found')
text = text.replace(old, new, 1)
wanderers.write_text(text, encoding='utf-8')

# Great Thwack: once per turn, usable during combat.
trinkets = Path('TRINKET-SYSTEM-V1.0.md')
text = trinkets.read_text(encoding='utf-8')
old = '''### 💪 GREAT THWACK

> *Once each combat: target creature gets +2/+2 and gains trample until end of turn.*

**Timing:** Any time during combat phase, at instant speed.  
**Limit:** Once each combat.  
**Resolution:** Choose target creature. It gets +2/+2 and gains trample until end of turn.'''
new = '''### 💪 GREAT THWACK

> *Once per turn during combat: Target creature gets +2/+2 and gains trample until end of turn.*

**Timing:** During combat, at instant speed.  
**Limit:** Once per turn.  
**Resolution:** Choose target creature. It gets +2/+2 and gains trample until end of turn.'''
if old not in text:
    raise SystemExit('Great Thwack wording anchor not found')
text = text.replace(old, new, 1)
trinkets.write_text(text, encoding='utf-8')

# Confirm stale terminology and old card wording are gone.
for path in Path('.').rglob('*.md'):
    text = path.read_text(encoding='utf-8')
    if 'Bad Stuff Event' in text:
        raise SystemExit(f'stale Bad Stuff Event wording remains in {path}')

if 'This excess life lasts only until the next encounter begins.' in wanderers.read_text(encoding='utf-8'):
    raise SystemExit('old Field Surgeon duration remains')
if 'Once each combat: target creature gets +2/+2' in trinkets.read_text(encoding='utf-8'):
    raise SystemExit('old Great Thwack wording remains')

print('Rules Event terminology and card text refreshed.')
