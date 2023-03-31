import { useState } from "react";

function List({ listContacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = listContacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{"Ad Soyad: " + contact.fullname}</span>{" "}
            {"Telefon: " + contact.phone_number}
          </li>
        ))}
      </ul>
      <p>Total Contacts({filtered.length})</p>
    </div>
  );
}

export default List;
