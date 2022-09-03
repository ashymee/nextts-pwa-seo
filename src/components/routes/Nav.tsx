import Link from 'node_modules/next/link';
import { useRouter } from 'node_modules/next/router';

const links = [
  { title: 'home', slug: '/' },
  { title: 'about', slug: '/about' },
  { title: 'help', slug: '/help' },
];

const Nav = () => {
  const { asPath } = useRouter();

  return (
    <div className="flex space-x-3 bg-slate-900/10 rounded-lg py-2 px-5">
      {links.map(
        (link, index) =>
          link.slug !== asPath && (
            <Link href={link.slug} key={index}>
              <a className="uppercase hover:text-sky-500">{link.title}</a>
            </Link>
          )
      )}
    </div>
  );
};

export default Nav;
