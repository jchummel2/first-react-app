import React from "react";

type RegistryItem = {
  name: string;
  url: string;
  note?: string;
};

type Store = {
  name: string;
  url: string;
  items: RegistryItem[];
};

const stores: Store[] = [
  {
    name: "Amazon",
    url: "https://www.amazon.com/your-amazon-registry-link",
    items: [
      {
        name: "Cast Iron Skillet Set",
        url: "https://www.amazon.com/example-product",
        note: "Weekend breakfast essential.",
      },
    ],
  },
  {
    name: "Target",
    url: "https://www.target.com/gift-registry/your-target-link",
    items: [
      {
        name: "Bath Towels (Set of 4)",
        url: "https://www.target.com/example-product",
        note: "White or light gray.",
      },
    ],
  },
];

const Registry: React.FC = () => {
  return (
    <main className="page">
      <h1 className="page-title">Registry</h1>
      <p className="page-intro">
        Your presence is the greatest gift. If you&apos;d like to help us start
        our life together, we&apos;ve put together a few ideas below.
      </p>

      <div className="section-list">
        {stores.map((store) => (
          <section key={store.name} className="section">
            <div className="section-header">
              <h2>{store.name}</h2>
              <a
                href={store.url}
                target="_blank"
                rel="noreferrer"
                className="section-link"
              >
                View full registry →
              </a>
            </div>

            <div className="grid-2">
              {store.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card card-link"
                >
                  <h3>{item.name}</h3>
                  {item.note && <p>{item.note}</p>}
                  <p className="card-note">
                    Purchased status is managed on {store.name}.
                  </p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Registry;
