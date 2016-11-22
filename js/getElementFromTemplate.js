const getElementFromTemplate = (template) => {
  let node = document.createElement('span');
  node.innerHTML = template;
  return node;
};

export default getElementFromTemplate;
