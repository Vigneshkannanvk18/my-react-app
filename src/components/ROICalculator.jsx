import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const services = {
  "Data Analytics": 20,
  "Digital Marketing": 25,
  "Website Development": 15,
  "IoT Services": 30,
  "Cloud Consulting": 10,
};

const COLORS = ['#0088FE', '#00C49F'];

const ROICalculator = () => {
  const [investment, setInvestment] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [returnAmount, setReturnAmount] = useState(null);

  const calculateROI = () => {
    const profitPercent = services[selectedService];
    const returnVal = (investment * profitPercent) / 100;
    setReturnAmount(returnVal);
  };

  const pieData = returnAmount
    ? [
        { name: 'Investment', value: Number(investment) - returnAmount },
        { name: 'Profit', value: returnAmount },
      ]
    : [];

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.heading}>📈 ROI Calculator</h2>

        <div style={styles.formGroup}>
          <label style={styles.label}>Investment Amount (₹):</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            style={styles.input}
            placeholder="Enter amount"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Select a Service:</label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            style={styles.select}
          >
            <option value="">-- Choose Service --</option>
            {Object.keys(services).map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={calculateROI}
          disabled={!investment || !selectedService}
          style={styles.button}
        >
          Calculate ROI
        </button>

        {returnAmount !== null && (
          <div style={styles.result}>
            Estimated Return: <strong>₹{returnAmount.toFixed(2)}</strong>
          </div>
        )}
      </div>

      <div style={styles.chartBox}>
        {pieData.length > 0 && (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    padding: '2rem',
  },
  container: {
    width: '350px',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#f4f8fc',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  chartBox: {
    width: '400px',
    minHeight: '350px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '1rem',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  select: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '0.7rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    color: '#2e7d32',
    textAlign: 'center',
  },
};

export default ROICalculator;
