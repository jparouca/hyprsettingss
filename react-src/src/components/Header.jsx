// example of importing a svg icon
import { ReactComponent as UndoIcon } from '../assets/refresh.svg';
import { ReactComponent as SaveIcon } from '../assets/floppy-disk-arrow-in.svg';
import { os } from '@neutralinojs/lib';

export const Header = () => {
  return (


    <div className="navbar bg-base-300 text-primary-content">

      <div className="navbar-start">
        <div className='flex flex-row'>
          <button className="btn btn-md" onClick={() => { os.execCommand('hyprctl reload') }}><UndoIcon className="w-6 h-6" /></button>
        </div>
      </div>
      <div className="navbar-center">
        <div className="join">
          <input type="text" placeholder="color border..." className="input focus:outline-none input-md input-bordered w-full" />
          <select className="select select-bordered join-item select-md focus:outline-none">
            <option></option>
            <option>General</option>
            <option>Appearance</option>
            <option>Blur</option>
          </select>
        </div>
      </div>
      <div className="gap-2 flex navbar-end">
        <button className="btn btn-md"><SaveIcon className='w-6 h-6' /></button>
      </div>
    </div>


  );
}
