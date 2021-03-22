import Form from './domains/Form';
import Select from './components/Select';

function App() {
  return (
    <div className="mt-20 mb-16 sm:mx-auto sm:w-full max-w-2xl">
      <div className="bg-white py-8 px-6 shadow rounded sm:px-10 shadow-xl">
        <Form />
      </div><br />
      <div className="bg-white py-8 px-6 shadow rounded sm:px-10 shadow-xl">
        <Select />
      </div>
    </div>
  );
}

export default App;
