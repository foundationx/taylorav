import Link from 'next/link';

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {item.href ? (
              <Link href={item.href} itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={(index + 1).toString()} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
