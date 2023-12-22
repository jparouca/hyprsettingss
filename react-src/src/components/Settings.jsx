import { Radio } from "./Radio";
import { Slider } from "./Slider";


const IInputMethod = {
  bool: ({ name }) => (
    <Radio name={name} />
  ),
  int: ({ name, defaultValue }) => (
    <Slider defaultValue={defaultValue} name={name} type='int' />
  ),
  float: ({ name, defaultValue }) => (
    <Slider defaultValue={defaultValue} name={name} type='float' />
  ),
  text: ({ placeholder = "default" }) => (
    <input type="text" placeholder={placeholder} className="input input-bordered input-xs w-full max-w-xs" />
  ),
};


export const Settings = ({ title, name, description, type, defaultValue }) => {
  const InputMethod = IInputMethod[type];

  return (
    <div className="card card-compact flex flex-col w-[95%] bg-neutral-100 mb-4 md:w-1/2 md:flex-row lg:w-1/3 lg:flex-row">
      <div className="card-body text-center">
        <div>
          <h2 className="text-sm card-title justify-center items-center">{title}</h2>
          <p className="italic text-xs text-start" >{description}</p>
          <div className="divider"></div>
        </div>
        <div>
          {InputMethod && <InputMethod name={name} defaultValue={defaultValue} />}
        </div>
        <div className="card-actions justify-end mt-4">
          <div className="badge badge-outline badge-sm">{name.split(":")[0].toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};

