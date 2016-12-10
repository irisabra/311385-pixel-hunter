const getElementFromTemplate = (template) => {
  let node = document.createElement('div');
  node.innerHTML = template;
  return node;
};

export default getElementFromTemplate;
