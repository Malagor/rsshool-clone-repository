export function parseNodeInnerText(text) {
  const regTag = /[a-z]+(\s||>)/;
  const regId = /id="(.*?)"/;
  const regClass = /class="(.*?)"/;

  const tag = text.match(regTag)[0];
  const id = text.match(regId);
  const cls = text.match(regClass);

  const result = {
    tag
  };

  if (id) {
    // eslint-disable-next-line prefer-destructuring
    result.id = id[1];
  }

  if (cls) {
    // eslint-disable-next-line prefer-destructuring
    result.cls = cls[1];
  }

  return result;
}

export function createStringForSearch(obj) {
  const {tag, id, cls} = obj;
  let resultStr = tag.trim();

  if (id) {
    resultStr += `#${id}`;
  }

  if (cls) {
    cls.split(' ').forEach(c => {
      resultStr += `.${c}`
    });
  }

  return resultStr;
}


export function convertToNodeInnerText(obj) {
  const {tag, id, child} = obj;
  let {className} = obj;

  let result = `<${tag}`;

  if (id) {
    result += ` id="${id}"`;
  }

  if (className && className.includes('highlight')) {
    className = className.replace('highlight', '').trim();
  }
  if (className) {
    className = className.replace('highlight', '').trim();
    const clsArray = className.split(' ');
    result += ' class="';
    clsArray.forEach(cls => {
      result += `${cls}`;
    });
    result = result.trim();
    result += '"'
  }

  if (child){
    result += '>';
  } else {
    result += ' />'
  }

  return result;
}
