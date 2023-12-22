import { os } from "@neutralinojs/lib";

export async function getHyprValue(name, type) {
  try {
    const res = await os.execCommand(`hyprctl getoption -j ${name}`);
    const data = JSON.parse(res.stdOut);
    return type === 'int' || type === 'bool' ? data.int
      : type === 'float' ? data.float
        : type === 'text' ? data.text : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function setHyprValue(name, value) {
  try {
    await os.execCommand(`hyprctl --batch "keyword ${name} ${value}"`);
  } catch (error) {
    console.log(error);
  }
}


