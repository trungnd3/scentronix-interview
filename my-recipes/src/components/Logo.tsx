import Image from 'next/image';
import { useRouter } from 'next/navigation';

type LogoProps = {
  size: number;
};

export default function Logo({ size }: LogoProps) {
  const router = useRouter();

  return (
    <Image
      src='/burger.png'
      alt='Logo'
      width={size}
      height={size}
      onClick={() => router.push('/')}
    />
  );
}
