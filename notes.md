function LoginForm() {
const [form, setState] = useState({
username: '',
password: ''
});

Goal:

1. Frontend: Understand how to useState in React

How do I bridge the frontend and backend with CRUD?

2. Backend: Understand how to take state from Frontend and put it in MongoDB

const printValues = e => {
e.preventDefault();
console.log(form.username, form.password);
};

const updateField = e => {
setState({
...form,
[e.target.name]: e.target.value
});
};

return (

<form onSubmit={printValues}>
<label>
Username:
<input
          value={form.username}
          name="username"
          onChange={updateField}
        />
</label>
<br />
<label>
Password:
<input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        />
</label>
<br />
<button>Submit</button>
</form>
);
}
