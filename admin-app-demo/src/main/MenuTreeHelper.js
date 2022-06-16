import * as $ from 'jquery';
import * as AdminLte from 'admin-lte';

// function setActive(element) {
//   let menu_itens = $('a.nav-link')
  
//   Object.entries(menu_itens)
//     .forEach((item) => {
      
      
//       let ativo = item[1].parentElement ? item[1].parentElement.classList.value.includes('menu-open') ? 'active' : null : null
//       if (item[1].classList) {
//         if (item[1].parentElement && item[1].parentElement.classList.value.includes('menu-open')) {
//           item[1].classList += " active"
//         }
//         else {

//         }
//       }
//     })
// }
export function SideBarToggle(event){
  $('[data-widget="pushmenu"]').PushMenu('toggle')
}

export function ActiveMe(event) {
  let element = event.target
  
  if (element.classList.value.includes('nav-link')) {
    $('a.nav-link').removeClass('active')
    element.classList += " active"
  }
  else{
    
    $('a.nav-link').removeClass('active')
    element.parentElement.classList += " active"
  }
}

export function loadTree() {
  AdminLte.Layout._jQueryInterface.call($('body'));
  AdminLte.PushMenu._jQueryInterface.call($('[data-widget="pushmenu"]'));
  $('[data-widget="treeview"]').Treeview('init')

  // $('ul').on('expanded.lte.treeview', event => (setActive(event.target)))
  // $('ul').on('collapsed.lte.treeview', event => (setActive(event.target)))
}