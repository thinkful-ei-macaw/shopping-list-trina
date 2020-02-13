'use strict';
function shoppingList() {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    //form values into variable
    const listItem = $(this)
    .find('input[name="shopping-list-entry"]')
    .val();
    //when item is entered into form, add new item to shoppint list
    if (listItem !== '') {
      $('.shopping-list').append(
        `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      //value of form entry...why is this here?
      $('.js-shopping-list-entry').val('');
    }
  });
  //when check button is clicked, item becomes crossed off (or uncrossed)
  $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
  });
  //when delete buttom is clickes, lits item is removed
  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    $(this).closest('li').remove();
  });
}
$(shoppingList);