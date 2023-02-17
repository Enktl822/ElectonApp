export default function Register() {
  function regsiterHandler(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.password.value);
  }
  return (
    <div className="p-5">
      <form onSubmit={regsiterHandler}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="enter name"
            className="mb-2"
          />
        </div>
        <div>
          <input
            name="password"
            type="text"
            placeholder="enter password"
            className="mb-2"
          />
        </div>
        <button>register</button>
      </form>
    </div>
  );
}
