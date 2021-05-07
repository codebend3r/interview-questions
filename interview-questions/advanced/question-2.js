// QUESTION
// Build the following page using React:
// - a text input and a button to submit the values entered in such input.
// - a table to show the submitted values. It should have two columns:
//    -  id
//    -  value entered
// - a button to toggle/reverse the order in which the table rows are shown

// BONUS
// how can we maintain one array in memory and only reverse the data within the render logic?
// how can you persist the data, so if the user refreshes the data will remain?

// ANSWER
const SAVED_VALUES_KEY = "savedSubmittedValues";

const App = () => {
  const [submittedValues, setSubmittedValues] = useState([]);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const savedSubmittedValues = localStorage.getItem(SAVED_VALUES_KEY);

    if (!!savedSubmittedValues) {
      setSubmittedValues(savedSubmittedValues);
    }

    return () => localStorage.setItem(SAVED_VALUES_KEY, submittedValues);
  }, []);

  const onReverseData = () => setIsReversed(!isReversed);

  const onSubmit = (formData) => {
    const { value = null } = formData;

    if (!!value) {
      setSubmittedValues([
        ...submittedValues,
        {
          id: Math.round(Math.random() * 1000),
          value,
        },
      ]);
    }
  };

  const renderRows = ({ id, value }) => (
    <li>
      <p>{id}</p>
      <p>{value}</p>
    </li>
  );

  return (
    <>
      <form onSubmit={onSubmit}>
        Value: <input type="text" name="value" />
        <button type="submit">SUBMIT</button>
      </form>

      <ul>
        {isReversed
          ? submittedValues.reverse().map(renderRows)
          : submittedValues.map(renderRows)}
      </ul>

      <button onClick={onReverseData()}>REVERSE</button>
    </>
  );
};
