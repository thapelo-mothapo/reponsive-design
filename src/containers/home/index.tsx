import PageFooter from "../../components/footer";
import PageHeader from "../../components/header";
import Aside from "../../components/navigation/aside";
import Menu from "../../components/navigation/menu";
import globalStyles from "../../global.module.css";
const Home = () => {
  return (
    <>
      <PageHeader />

      <main className={globalStyles.row}>
        <Menu />
        <section className={`${globalStyles.col6} ${globalStyles.cols9}`}>
          <h1>The City</h1>
          <p>
            Chania is the capital of the Chania region on the island of Crete.
            The city can be divided in two parts, the old town and the modern
            city.
          </p>
        </section>
        <Aside />
      </main>

      <PageFooter />
    </>
  );
};

export default Home;
