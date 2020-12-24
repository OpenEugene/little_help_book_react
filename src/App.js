import PageHeader from './components/header_comps/PageHeader';
import './App.css';

function dummyCities() {
	return [
		{id: "rec1", name: "Eugene/Springfield"},
		{id: "rec2", name: "Creswell"},
		{id: "rec3", name: "Junction City"}
	];
}

function dummyCategories() {
	return [
		{id: "rec1", name: "Basic Needs"},
		{id: "rec2", name: "Legal"},
		{id: "rec3", name: "Education"}
	];
}

function dummySubcategories() {
	return [
		{id: "rec1", name: "Bedding"},
		{id: "rec2", name: "Pro Bono"},
		{id: "rec3", name: "Adult Education"}
	];
}

function App() {
  return (
    <div className="App">
      <PageHeader cities={dummyCities()} categories={dummyCategories()} subcategories={dummySubcategories()} />
    </div>
  );
}

export default App;