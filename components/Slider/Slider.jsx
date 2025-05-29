import Card from "./Card/Card";
import "./styles.modules.css";
import contacts from "./contacts";

function createEntry(contacts) {
    return (
        <Card
            key={contacts.id}
            img={contacts.imgURL}
            title={contacts.title}
            date={contacts.date}
            location={contacts.location}
        />
    );
}
function App() {
    return (
        <div className="body">
            <h1 className="heading">What's Ahead</h1>
            <dl className="ak">{contacts.map(createEntry)}</dl>
        </div>
    );
}

export default App;
