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
		{id: "rec2", name: "Food"},
		{id: "rec3", name: "Pro Bono"},
		{id: "rec4", name: "Immigration Representation"},
		{id: "rec5", name: "Adult Education"}
	];
}

function dummyProviders() {
	return [
		{id: "rec1", name: "Eugene Mission"},
		{id: "rec2", name: "Lane Food Pantry"},
		{id: "rec3", name: "James Law Firm"},
		{id: "rec4", name: "Cody Law Firm"},
		{id: "rec5", name: "Lane Community College"},
		{id: "rec6", name: "Jimmys Soup Kitchen"},
		{id: "rec7", name: "Creswell Community College"}
	];
}

function updateDom() {

}

function App() {
  return (
    <div className="App">
      <PageHeader cities={dummyCities()}
      	categories={dummyCategories()} 
      	subcategories={dummySubcategories()}
      	providers={dummyProviders()} />
      	
    </div>
  );
}

export default App;