import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Guest');
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [textIncome, setTextIncome] = useState('');
  const [textExpense, setTextExpense] = useState('');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const addIncome = () => {
    if (textIncome === '') {
      alert('Please enter income amount');
    } else {
      const amount = parseFloat(textIncome);
      setIncomeTotal(incomeTotal + amount);
      setIncomeList([...incomeList, { id: Math.random().toString(), amount }]);
      setTextIncome('');
    }
  };

  const addExpense = () => {
    if (textExpense === '') {
      alert('Please enter expense amount');
    } else {
      const amount = parseFloat(textExpense);
      setExpenseTotal(expenseTotal + amount);
      setExpenseList([...expenseList, { id: Math.random().toString(), amount }]);
      setTextExpense('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Expense Manager</Text>

      <Text style={styles.welcome}>Welcome, {name}!</Text>
      <Text style={styles.time}>Time: {time}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.total}>Total Income: ${incomeTotal.toFixed(2)}</Text>
      <Text style={styles.total}>Total Expense: ${expenseTotal.toFixed(2)}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Income"
        keyboardType="numeric"
        value={textIncome}
        onChangeText={setTextIncome}
      />
      <TouchableOpacity style={styles.button} onPress={addIncome}>
        <Text style={styles.buttonText}>Add Income</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Enter Expense"
        keyboardType="numeric"
        value={textExpense}
        onChangeText={setTextExpense}
      />
      <TouchableOpacity style={styles.button} onPress={addExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>

      <View style={styles.listSection}>
        <Text style={styles.listTitle}>Income List</Text>
        {incomeList.map((item) => (
          <Text key={item.id} style={styles.listItem}>+ ${item.amount.toFixed(2)}</Text>
        ))}
      </View>

      <View style={styles.listSection}>
        <Text style={styles.listTitle}>Expense List</Text>
        {expenseList.map((item) => (
          <Text key={item.id} style={styles.listItem}>- ${item.amount.toFixed(2)}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f0f8ff',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  total: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  listSection: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e6f2ff',
    borderRadius: 8,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 2,
  },
});
