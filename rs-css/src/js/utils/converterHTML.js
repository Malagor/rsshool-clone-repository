export const convertClasses = (classes) => {
  if (classes && classes.length){
    let result = 'class="';

    classes.forEach(cls => {
      result += `${cls} `;
    });

    result = result.trim();
    result += '"';

    return result;
  }
  return '';
};

export const convertTagForHtmlBlock = (tag, inner = '', child) => {
  let result = `&lt;${tag}`;
  if (inner) {
    result += ` ${inner}`
  }

  if (child){
    result += `&gt;
    ${child}
    &lt;/${tag}&gt;`
  } else {
    result += ` /&gt;`
  }
  return result;
};

export const convertTagForScreenBlock = (tag, inner = '', child) => {
  let result = `<${tag} ${inner}>`;

  if (child){
    result += `${child} </${tag}>`;
  } else {
     result += `</${tag}>`;
  }
  return result;
};

export const convertId = (id) => {
  if (id){
    return `id="${id}"`;
  }
  return '';
};
