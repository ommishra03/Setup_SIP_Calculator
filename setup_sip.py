def set_up_sip_calculator(monthly_investment, yearly_increase_rate, expected_return, investment_period):
    monthly_investment = monthly_investment
    total_investment = 0
    final_amount = 0

    for year in range(1, investment_period + 1):

        for month in range(1, 13):
           
            total_investment += monthly_investment
            
            months_remaining = (investment_period - year) * 12 + (12 - month)
            final_amount += monthly_investment * (1 + expected_return / 12) ** months_remaining

        monthly_investment *= (1 + yearly_increase_rate)
    
    return total_investment, final_amount

monthly_investment = float(input("Enter the initial monthly investment amount (in rupees): "))
yearly_increase_rate = float(input("Enter the yearly increase rate (as a decimal, e.g., 0.10 for 10%): "))
expected_return = float(input("Enter the expected annual return rate (as a decimal, e.g., 0.15 for 15%): "))
investment_period = int(input("Enter the investment duration (in investment_period): "))

total_investment, final_amount = set_up_sip_calculator(monthly_investment, yearly_increase_rate, expected_return, investment_period)

print(f"Total amount invested: {total_investment:.2f} rupees")
print(f"Total return: {final_amount - total_investment:.2f} rupees")
print(f"Final amount after {investment_period} investment_period: {final_amount:.2f} rupees")
