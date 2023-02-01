function Greeting(props) {
  function renderGreeting(lang) {
    const cases = {
      de: 'Hallo!',
      en: 'Hello!',
      es: 'Hola!',
      fr: 'Bonjour!',
    };
    return cases[lang];
  }

  return (
    <div className="box-container">
      {` ${renderGreeting(props.lang)} ${props.children}`}
    </div>
  );
}

export default Greeting;
