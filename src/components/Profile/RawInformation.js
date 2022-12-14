import SuitCase from './icons/suitCase.js';
import RSS from './icons/Rss.js';
import Pin from './icons/Pin.js';
import HomeAlt from './icons/HomeAlt.js';
import Hat from './icons/Hat.js';

export default function RawInformation() {
  return (
    <div className="shadow-fb rounded w-full bg-white p-4">
      <div className="text-xl font-bold text-fBlack">Intro</div>
      <div className="mt-4 flex items-center">
        <SuitCase />
        <span className="ml-2">
          Massa eros etiam diam massa gravida nullam urna{' '}
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <Hat />
        <span className="ml-2">Gravida nullam urna</span>
      </div>
      <div className="mt-4 flex items-center">
        <Hat />
        <span className="ml-2">Etiam diam massa </span>
      </div>
      <div className="mt-4 flex items-center">
        <HomeAlt />
        <span className="ml-2">
          Lives in <b>Lutsk</b>{' '}
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <Pin />
        <span className="ml-2">
          From <b>Lutsk</b>{' '}
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <RSS />
        <span className="ml-2">
          Followed by <b>97 people</b>{' '}
        </span>
      </div>
    </div>
  );
}