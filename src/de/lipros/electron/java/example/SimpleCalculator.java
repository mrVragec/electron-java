package de.lipros.electron.java.example;

import java.util.ArrayList;
import java.util.List;

public class SimpleCalculator {

	public static String calculate(List<String> formated) {

		// if there is only one item in input list we don't have anything to
		// calculate.
		if (formated.size() == 1) {
			return formated.get(0).toString();
		} else if (formated.size() > 1) {

			// get index for '*' and '/'
			int multiply = formated.indexOf("*");
			int devide = formated.indexOf("/");

			//
			if (multiply > 0) {
				double calculation = Double.valueOf(formated.get(multiply - 1))
						* Double.valueOf(formated.get(multiply + 1));
				updateList(formated, calculation, multiply);
				return calculate(formated);
			} else if (devide > 0) {
				double calculation = Double.valueOf(formated.get(devide - 1))
						/ Double.valueOf(formated.get(devide + 1));
				updateList(formated, calculation, devide);
				return calculate(formated);
			} else if ("+".equals(formated.get(1))) {
				double calculation = Double.valueOf(formated.get(0)) + Double.valueOf(formated.get(2));
				updateList(formated, calculation, 1);
				return calculate(formated);
			} else if ("-".equals(formated.get(1))) {
				double calculation = Double.valueOf(formated.get(0)) - Double.valueOf(formated.get(2));
				updateList(formated, calculation, 1);
				return calculate(formated);
			}
		}

		return "";
	}

	private static void updateList(List<String> formated, double calculation, int newValueIndex) {
		formated.set(newValueIndex, String.valueOf(calculation));
		formated.remove(newValueIndex - 1);
		formated.remove(newValueIndex);
	}

	/**
	 * @param inputString
	 *            - input string which should be 'formatted' to have each value
	 *            and each operator as one element in list
	 * @return list of all values and all operators
	 */
	public static List<String> getFormatedList(String inputString) {
		List<String> returnValue = new ArrayList<String>();
		String value = "";
		for (int i = 0; i < inputString.length(); i++) {
			try {
				String inputValue = String.valueOf(inputString.charAt(i));
				if (".".equalsIgnoreCase(inputValue)) {
					value += inputValue;
				} else {
					value += Integer.valueOf(inputValue);
				}
			} catch (NumberFormatException nfe) {
				returnValue.add(value.toString());
				value = "";
				returnValue.add(String.valueOf(inputString.charAt(i)));
			}
		}
		returnValue.add(value);
		return returnValue;
	}
}
