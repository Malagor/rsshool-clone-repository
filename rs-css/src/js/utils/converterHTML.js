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

export const convertTag = (tag, inner = '', child) => {
  let result = `&lt;${tag} ${inner}`;

  if (child){
    result += `&gt;
    ${child}
    &lt;/${tag}&gt;`
  } else {
    result += ` /&gt;`
  }
  return result;
};

export const convertId = (id) => {
  if (id){
    return `id="${id}"`;
  }
  return '';
};
