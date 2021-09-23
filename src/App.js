import React, { PureComponent } from "react";
import "./App.css";

class App extends PureComponent {
  state = {
    people: [
      { name: "Timur", surname: "Zhanov" },
      { name: "Maria", surname: "Ochirova" },
      { name: "Olga", surname: "Bulanova" },
    ],

    arr: ["b", "n", "a", "z", "m", "y", "c"],
  };

  updateState(idx) {
    const copy = this.state.people.slice();
    const copy2 = this.state.people.slice();
    copy2.push({ name: "Anna", Surname: "Bondar" });
    //this.setState({people: copy});
    copy[1] = {
      ...copy[1],
      name: "Lyubov",
    };
    copy2[3] = {
      ...copy[1],
      name: "Lyubov",
    };
    console.log("-----------------");
    console.log("Нажали на кнопку");

    console.log(this.state.people);
    console.log(copy);
    console.log(copy2);
    const copy3 = this.state.arr.slice().sort();

    console.log("Обратная сортировка массива");
    console.log(copy3);
    console.log("Исходный массив");
    console.log(this.state.arr);

    this.setState({ arr: copy3 });
    console.log("Изменили исходный массив работает после 2 клика");
    console.log(this.state.arr);

    const result = this.state.people.map((el) => {
      if (el.name === "Timur") {
        return { ...el, surname: "Petrov" };
      }

      return el;
    });
    //this.setState({ people: result }); //без этой строчки все тоже работает
    console.log('Поменяли у Тимура фамилию');
    console.log(result);

    const result2=result.map((el,i)=>{
idx=1;
return idx===i ? {...el, surname: 'Boldureva'}: el;

    })
    console.log('Поменяли у 2 айдишника');
    console.log(result2);
 this.setState({ people: result2 }); //без этой строчки все тоже работает
 console.log('конечный пипл меняется после 2 клика');
 console.log(this.state.people);

  }




  render() {
    return (
      <div>
        <button onClick={this.updateState.bind(this)}> нажми меня и посмотри консоль</button>
      </div>
    );
  }
}

export default App;
