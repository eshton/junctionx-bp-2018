pragma solidity ^0.4.1;

contract Rainsurance {
    address public bank;
    address public customer;
    address public trusted_weather_source;
    
    uint256 public startTime;
    
    uint256 public money_bank;
    uint256 public money_customer;
    
    uint256 public customer_required_amount;
    
    uint256 public rain_mm_threshold;
    string public city;
    
    uint256 public end_timestamp;
    
    function Rainsurance(
            address customer_address, 
            address trusted_weather_address, 
            uint256 customer_required, 
            uint256 rain_mm,
            string city_name,
            uint256 end_ts) payable public {
        bank = msg.sender;
        money_bank = msg.value;
        customer = customer_address;
        trusted_weather_source = trusted_weather_address;
        customer_required_amount = customer_required;
        rain_mm_threshold = rain_mm;
        city = city_name;
        end_timestamp = end_ts;
    }
    
    function receiveMoneyFromCustomer() payable public {
        require(msg.sender == customer);
        require(msg.value == customer_required_amount);
        require(money_customer == 0);
        
        money_customer = msg.value;
    }
    
    function updateRain(uint256 rain_mm) {
        require(money_customer == customer_required_amount);
        require(msg.sender == trusted_weather_source);
        require(this.balance > 0);
        require(now > end_timestamp);
        
        bank.transfer(money_customer);
        if (rain_mm >= rain_mm_threshold) {
            customer.transfer(money_bank);
        } else {
            bank.transfer(money_bank);
        }
    }
    
    function rollback() {
        require(now > end_timestamp);
        require(money_customer == 0);
        
        bank.transfer(money_bank);
    }
}

contract RainsuranceProvider {
    address owner;
    
    address[] public insurances;
    
    function RainsuranceProvider() {
        owner = msg.sender;
    }
    
    function getDiagnosesCount() public constant returns(uint count) {
        return insurances.length;
    }
    
    function createRainsurence(
        address customer_address, 
        address trusted_weather_address, 
        uint256 customer_required, 
        uint256 rain_mm,
        string city_name,
        uint256 end_ts) payable public {
        require(msg.sender == owner);
        address r_i = (new Rainsurance).value(msg.value)(customer_address, trusted_weather_address, customer_required, rain_mm, city_name, end_ts);
        insurances.push(r_i);
    }
}