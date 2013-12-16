
# scrumcard-view

Scrumcard for an interactive storyboard

## Installation

  Install with [component(1)](http://component.io):

    $ component install hkjels/scrumcard-view

## API

```JavaScript
var task = new Task({
  'id': 1,
  'title': 'Move lawn',
  'assignee': 'Henrik Kjelsberg',
  'priority': 'high',
  'email': 'hkjels@me.com',
  'estimate': 3
});
var scrumcard = new Scrumcard(task);

document.body.appendChild(scrumcard.el);
```

