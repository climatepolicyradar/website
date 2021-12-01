/** Dispatch event on click outside of node */
export function clickOutside(node, classToExclude = null) {

  const handleClick = event => {
    // only trigger when anything but a menu item is clicked
    // TODO: find a better way, this feels hacky
    if(event.target.classList.contains(classToExclude)) return;
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click_outside', node)
      )
    }
  }

	document.addEventListener('click', handleClick, true);
  
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
}