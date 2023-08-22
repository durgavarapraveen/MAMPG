// Function to be executed when a mutation is observed
function handleMutation(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'characterData') {
        const changedNode = mutation.target;
        const parentElement = changedNode.parentElement;
        const changedElementId = parentElement.id;
        console.log("Changed element id:", changedElementId);
      }
    }
}
  
  // Select the target nodes for observation (the editable paragraphs)
const targetNodes = document.querySelectorAll('[contenteditable="true"]');
  
  // Create an observer instance
const observer = new MutationObserver(handleMutation);
  
  // Start observing each target node for character data changes
targetNodes.forEach(node => {
    observer.observe(node, { characterData: true });
});
  