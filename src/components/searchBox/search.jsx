import "./search.css";

export const Search = () => {
  return (
    <form className="form-wrapper">
      <input type="text" id="search" placeholder="Search for..." required />
      <input type="submit" value="go" id="submit" />
    </form>
  );
};
