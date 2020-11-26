export function parseNodeInnerText(text) {
  const regTag = /[a-z]+\s/;
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

  if (id){
    resultStr += `#${id}`;
  }

  if (cls){
    cls.split(' ').forEach(c => {
      resultStr += `.${c}`
    });
  }

  return resultStr;
}
