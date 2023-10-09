import React, { useEffect, useRef, useState } from "react";
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
import triangular from "@stdlib/random-base-triangular";

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
  const [taxes, setTaxes] = useState(10);
  const [buyerWallet, setBuyerWallet] = useState([500, 2_000]);
  const [incidentCost, setIncidentCost] = useState([50_000, 200_000]);
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
  const [isFirstStarted, setIsFirstStarted] = useState(false);
  const [day, setDay] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);
  const [popularity, setPopularity] = useState(0);

  const [expensesData, setExpensesData] = useState([] as number[]);
  const [incomeData, setIncomeData] = useState([] as number[]);
  const [revenueData, setRevenueData] = useState([] as number[]);
  const [totalRevenueData, setTotalRevenueData] = useState([] as number[]);

  const getTodayClientsAmount = (popularity: number) => {
    return Math.floor(popularity * 300);
  };

  const getRevenue = (income: number, expenses: number) => {
    return income - expenses;
  };

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFirstStarted) {
      setPopularity(startPopularity);
      setIncome(startCapital);
      setIsFirstStarted(true);
    }

    setIsStarted(true);
  };

  const handleStop = () => {
    setIsStarted(false);
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

  const todayExpenses = expensesData[expensesData.length - 1] ?? 0;
  const todayIncome = incomeData[incomeData.length - 1] ?? 0;
  const todayRevenue = getRevenue(todayIncome, todayExpenses);

  useEffect(() => {
    const getTodayIncome = () => {
      const clientsAmount = getTodayClientsAmount(popularity);
      const sortedProductsByPrice = [...products].sort(
        (a, b) => b.price - a.price
      );

      let res = 0;

      for (let i = 0; i < clientsAmount; i++) {
        const mode = buyerWallet[0] + (buyerWallet[1] - buyerWallet[0]) * 0.2;
        let clientMoneyAmount = triangular(
          buyerWallet[0],
          buyerWallet[1],
          mode
        );

        for (const product of sortedProductsByPrice) {
          while (clientMoneyAmount >= product.price) {
            res += product.price;
            clientMoneyAmount -= product.price;
          }
        }
      }

      return res;
    };

    const getTodayExpenses = (todayIncome: number) => {
      let result = 0;

      // Стоимость продуктов
      result += todayIncome * 0.5; // Тут не учтена динамическая наценка

      // Зарплата и аренда
      if (day % 30 === 0) {
        result += salary;
        result += rent;

        if (day !== 0) {
          const monthRevenueData = revenueData.slice(day - 29, day);
          const monthRevenue = monthRevenueData.reduce((acc, cur) => acc + cur);

          result += monthRevenue * (taxes / 100);
        }
      }

      // Тут стоимость инцидентов
      if (day % 7 === 0) {
        const mode =
          incidentCost[0] + (incidentCost[1] - incidentCost[0]) * 0.3;
        const weekIncidentCost = triangular(
          incidentCost[0],
          incidentCost[1],
          mode
        );

        result += weekIncidentCost;
      }

      return result;
    };

    if (isStarted) {
      timerRef.current = setTimeout(() => {
        const todayIncome = getTodayIncome() + (day === 0 ? startCapital : 0);
        const todayExpenses = getTodayExpenses(todayIncome);
        const todayRevenue = getRevenue(todayIncome, todayExpenses);

        flushSync(() => {
          setDay((p) => p + 1);
          setPopularity((p) => +(p + getRandomInt(-1, 1) / 100).toFixed(2));
          setExpenses((p) => p + todayExpenses);
          setIncome((p) => p + todayIncome);

          setExpensesData((p) => [...p, todayExpenses]);
          setIncomeData((p) => [...p, todayIncome]);
          setRevenueData((p) => [...p, todayRevenue]);
        });

        const totalRevenue = getRevenue(income, expenses);

        setTotalRevenueData((p) => [...p, totalRevenue]);

        if (
          totalRevenue > 0 &&
          totalRevenue > advertisingCost * 10 &&
          day % 120 === 0
        ) {
          setPopularity((p) => +(p + 0.1).toFixed(2));
          setExpenses((p) => p + advertisingCost);
        }
      }, daySpeed);
    } else {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
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
    products,
    buyerWallet,
    incidentCost,
    startCapital,
  ]);

  return (
    <div className="main-container">
      <header className="mb-10">
        <h1 className="text-2xl py-4">Цифровой двойник пиццерии</h1>
      </header>

      <form onSubmit={handleStart} className="mb-10">
        <div className="grid grid-cols-2 gap-20 mb-4">
          <div className="flex flex-col gap-4">
            <label className="flex items-center whitespace-nowrap gap-4">
              Стартовый капитал:
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={100_000}
                  max={1_000_000}
                  values={[startCapital]}
                  onChange={(v) => setStartCapital(v[0])}
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
                  values={[startPopularity]}
                  onChange={(v) => setStartPopularity(v[0])}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Аренда помещения (раз в месяц):
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={50_000}
                  max={1_000_000}
                  values={[rent]}
                  onChange={(v) => setRent(v[0])}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Зарплата сотрудников, всего (раз в месяц):
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={50_000}
                  max={1_000_000}
                  values={[salary]}
                  onChange={(v) => setSalary(v[0])}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Налоги (%):
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={0}
                  max={100}
                  values={[taxes]}
                  onChange={(v) => setTaxes(v[0])}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Кошелёк покупателя:
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={500}
                  max={15_000}
                  values={buyerWallet}
                  onChange={setBuyerWallet}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Стоимость разрешения инцидентов:
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={50_000}
                  max={300_000}
                  values={incidentCost}
                  onChange={setIncidentCost}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Стоимость одной рекламы:
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={50_000}
                  max={2_000_000}
                  values={[advertisingCost]}
                  onChange={(v) => setAdvertisingCost(v[0])}
                />
              </div>
            </label>

            <label className="flex items-center whitespace-nowrap gap-4">
              Скорость дня (мс):
              <div className="max-w-xs w-full">
                <RangeSlider
                  min={1}
                  max={10_000}
                  values={[daySpeed]}
                  onChange={(v) => setDaySpeed(v[0])}
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
        <p>Расходы всего: {format(expenses)}</p>
        <p>Доходы всего: {format(income)}</p>
        <p>Прибыль всего: {format(getRevenue(income, expenses))}</p>
        <p>Популярность: {popularity}</p>
        <p>Клиентов сегодня: {getTodayClientsAmount(popularity)}</p>
        <p>Расходы сегодня: {format(todayExpenses)}</p>
        <p>Доходы сегодня: {format(todayIncome)}</p>
        <p>Прибыль сегодня: {format(todayRevenue)}</p>
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
                  data: totalRevenueData,
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
