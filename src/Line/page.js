import Image from 'next/image';
import Link from 'next/link';
import { trackButtonClick } from '@/utils/gtag';

export default function Line() {
    return <div>
         {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <Link
          href="https://lin.ee/zzks4rF"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackButtonClick('LINE Contact Button', 'floating-button', 'https://lin.ee/zzks4rF')}
          className="group relative flex items-center justify-center w-16 h-16 bg-[#00C300] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          <Image
            src="/1.webp"
            alt="LINE"
            width={35} height={35}
            className=" rounded-2xl"
          />
          <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-black bg-opacity-80 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            แชทผ่าน LINE
          </span>
        </Link>
      </div>
    </div>
 }