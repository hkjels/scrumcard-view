
/**
 * Module dependencies.
 */

var View = require('view')
  , domify = require('domify')
  , templ = domify(require('./template.html'));

/**
 * Expose `ScrumcardView`.
 */

module.exports = ScrumcardView;

/**
 * ScrumcardView.
 *
 * @param {Model} task.
 */

function ScrumcardView(task) {
  View.call(this, task, templ.cloneNode(true));
}

/**
 * Inherit from `View.prototype`.
 */

ScrumcardView.prototype.__proto__ = View.prototype;

/**
 * Mark task as completed.
 */

ScrumcardView.prototype.complete = function(){
  this.obj.complete = true;
  this.el.classList.add('complete');
};

