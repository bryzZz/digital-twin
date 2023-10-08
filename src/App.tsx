import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { RangeSlider } from "./components/RangeSlider";
import { flushSync } from "react-dom";

const getRandomInt = (min: number, max: number) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const format = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
}).format;

export const App: React.FC = () => {
  const [startCapital, setStartCapital] = useState(100_000);
  const [startPopularity, setStartPopularity] = useState(0.2);
  const [rent, setRent] = useState(50_000);
  const [salary, setSalary] = useState(50_000);
  const [advertisingCost, setAdvertisingCost] = useState(50_000);
  const [daySpeed, setDaySpeed] = useState(100);

  const [products, setProducts] = useState([
    {
      name: "Пицца Гавайская",
      price: 300,
    },
    {
      name: "Пицца Сырная",
      price: 200,
    },
    {
      name: "Пицца Ветчина и сыр",
      price: 400,
    },
    {
      name: "Пицца Мясная",
      price: 450,
    },
    {
      name: "Пицца Мясная",
      price: 450,
    },
  ]);

  const timerRef = useRef<number | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [day, setDay] = useState(1);
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);
  const [popularity, setPopularity] = useState(0);

  const [expensesData, setExpensesData] = useState([] as number[]);
  const [incomeData, setIncomeData] = useState([] as number[]);
  const [revenueData, setRevenueData] = useState([] as number[]);

  const getTodayClientsAmount = (popularity: number) => {
    return Math.floor(popularity * 300);
  };

  // Считать по продажам
  const getTodaySales = useCallback(
    (popularity: number) => {
      const clientsAmount = getTodayClientsAmount(popularity);
      const sortedProductsByPrice = [...products].sort(
        (a, b) => b.price - a.price
      );
      const productsMinPrice =
        sortedProductsByPrice[sortedProductsByPrice.length - 1].price;
      const productsMaxPrice = sortedProductsByPrice[0].price;

      let res = 0;

      for (let i = 0; i < clientsAmount; i++) {
        let clientMoneyAmount = getRandomInt(
          productsMinPrice,
          4 * productsMaxPrice
        );

        for (const product of sortedProductsByPrice) {
          while (clientMoneyAmount >= product.price) {
            res += product.price;
            clientMoneyAmount -= product.price;
          }
        }
      }

      return res;
      // return getRandomInt(10_000, 20_000);
    },
    [products]
  );

  // Считать по аренде, зарплате, инцидентам
  const getTodayExpenses = useCallback(
    (day: number, todaySales: number, salary: number, rent: number) => {
      let result = 0;

      result += todaySales * 0.5; // Тут не учтена динамическая наценка

      if (day % 30 === 0) {
        result += salary;
        result += rent;
      }

      return result;
    },
    []
  );

  const getRevenue = (income: number, expenses: number) => {
    return income - expenses;
  };

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();

    setPopularity(startPopularity);
    setIncome(startCapital);
    setIsStarted(true);
  };

  const handleStop = () => {
    setIsStarted(false);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
  };

  const handleChangeProductPrice = (name: string, value: string) => {
    const price = Number(value);

    if (isNaN(price)) return;

    setProducts((prev) =>
      prev.map((p) => {
        if (p.name !== name) return p;

        return { name, price };
      })
    );
  };

  useEffect(() => {
    if (isStarted) {
      timerRef.current = setTimeout(() => {
        const todaySales = getTodaySales(popularity);
        const todayExpenses = getTodayExpenses(day, todaySales, salary, rent);
        const revenue = getRevenue(income, expenses);

        flushSync(() => {
          setDay((p) => p + 1);
          setPopularity((p) => +(p + getRandomInt(-1, 1) / 100).toFixed(2));
          setExpenses((p) => p + todayExpenses);
          setIncome((p) => p + todaySales);

          if (
            revenue > 0 &&
            revenue > advertisingCost * 10 &&
            day % 120 === 0
          ) {
            setPopularity((p) => +(p + 0.1).toFixed(2));
            setExpenses((p) => p + advertisingCost);
          }
        });

        setExpensesData((p) => [...p, todayExpenses]);
        setIncomeData((p) => [...p, todaySales]);
        setRevenueData((p) => [...p, revenue]);
      }, daySpeed);
    }

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [
    day,
    daySpeed,
    popularity,
    salary,
    rent,
    income,
    expenses,
    advertisingCost,
    isStarted,
    getTodayExpenses,
    getTodaySales,
  ]);

  return (
    <div className="container mx-auto">
      <header className="mb-10">
        <h1 className="text-2xl py-4">Цифровой двойник пиццерии</h1>
      </header>

      <form onSubmit={handleStart} className="mb-10">
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="flex flex-col gap-4">
            <label className="flex items-center whitespace-nowrap gap-4">
              Стартовый капитал:
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={100_000}
                  max={1_000_000}
                  value={startCapital}
                  onChange={setStartCapital}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Стартовая популярность:
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={0.1}
                  max={1}
                  step={0.1}
                  value={startPopularity}
                  onChange={setStartPopularity}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Аренда помещения (раз в месяц):
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={50_000}
                  max={1_000_000}
                  value={rent}
                  onChange={setRent}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Зарплата сотрудников, всего (раз в месяц):
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={50_000}
                  max={1_000_000}
                  value={salary}
                  onChange={setSalary}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Стоимость одной рекламы:
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={50_000}
                  max={2_000_000}
                  value={advertisingCost}
                  onChange={setAdvertisingCost}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Скорость дня (мс):
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={1}
                  max={10_000}
                  value={daySpeed}
                  onChange={setDaySpeed}
                />
              </div>
            </label>
          </div>

          <div className="flex flex-col gap-1">
            {products.map(({ name, price }, i) => (
              <label key={i}>
                {name}:{" "}
                <input
                  type="text"
                  value={price}
                  onChange={(e) =>
                    handleChangeProductPrice(name, e.target.value)
                  }
                />
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-[#548BF4] px-6 py-2 rounded text-white font-semibold">
            Начать
          </button>

          {isStarted && (
            <button
              className="bg-red-500 px-6 py-2 rounded text-white font-semibold"
              onClick={handleStop}
              type="button"
            >
              Стоп
            </button>
          )}
        </div>
      </form>

      <div className="mb-10">
        <p>День: {day}</p>
        <p>Расходы: {format(expenses)}</p>
        <p>Доходы: {format(income)}</p>
        <p>Прибыль: {format(getRevenue(income, expenses))}</p>
        <p>Популярность: {popularity}</p>
        <p>Клиентов сегодня: {getTodayClientsAmount(popularity)}</p>
        <p>Продажи сегодня: {format(getTodaySales(popularity))}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 px-10 pb-32">
        <div>
          <Line
            options={{
              responsive: true,
            }}
            data={{
              labels: new Array(day).fill(0).map((_, i) => i),
              datasets: [
                {
                  label: "Расходы",
                  data: expensesData,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
              ],
            }}
          />
        </div>

        <div>
          <Line
            options={{
              responsive: true,
            }}
            data={{
              labels: new Array(day).fill(0).map((_, i) => i),
              datasets: [
                {
                  label: "Доходы",
                  data: incomeData,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
              ],
            }}
          />
        </div>

        <div>
          <Line
            options={{
              responsive: true,
            }}
            data={{
              labels: new Array(day).fill(0).map((_, i) => i),
              datasets: [
                {
                  label: "Прибыль",
                  data: revenueData,
                  borderColor: "rgb(53, 162, 53)",
                  backgroundColor: "rgba(53, 162, 53, 0.5)",
                },
              ],
            }}
          />
        </div>

        <div>
          <Line
            options={{
              responsive: true,
            }}
            data={{
              labels: new Array(day).fill(0).map((_, i) => i),
              datasets: [
                {
                  label: "Расходы",
                  data: expensesData,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                  label: "Доходы",
                  data: incomeData,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Пиццерия
 * Входные данные:
 * - Аренда помещения (раз в месяц)
 * - Зарплата сотрудникам
 * - Стартовый капитал
 * - Стартовая популярность
 *
 * Что будет происходить:
 * - Продажа пиццы, напитков, салатов, закусок
 *
 * Выходные данные:
 * - Расходы expenses
 * - Доходы income
 * - Прибыль revenue
 * - Количество посетителей (популярность)
 *
 */
