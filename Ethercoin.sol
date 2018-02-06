pragma solidity ^0.4.11;

interface IERC20 {
	function totalSupply() constant returns (uint256 totalSupply);
	function balanceOf(address _owner) constant returns (uint256 balance);
	function transfer(address _to, uint256 _value) returns (bool success);
	function transferFrom(address _from, address _to, uint256 _value) returns (bool success);
	function approve(address _spender, uint256 _value) returns (bool success);
	function allowance(address _owner, address _spender) constant returns (uint256 remaining);
	event Transfer(address indexed _from, address indexed _to, uint256 _value);
	event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}


/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath {
  function mul(uint256 a, uint256 b) internal constant returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal constant returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal constant returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal constant returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}


contract VrbtcToken is IERC20{
    
    using SafeMath for uint256;
    
    uint public _totalSupply = 30000000e18;
    
    uint public _initialSupply = 13000000e18; // crowdsale

    uint public _futureSupply = 17000000e18; // futureUse
    
    string public constant symbol = "Ethercoin";
    string public constant name = "EITG";
    uint8 public constant decimals = 18;

    // 1 ether = 300 VRBTC
    uint256 public constant RATE = 2000;
    
    address public owner;
    
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowed;
    
    function() payable {
        createTokens();
    }
    
	function VrbtcToken(){
		//TODO
		//balances[msg.sender] = _totalSupply;
		owner = msg.sender;
	}
	function setPrice() returns(uint256 RATE){
	    if(_initialSupply >= 11400000e18)
	        RATE = 2000;
	    else if(_initialSupply >= 9800000e18)
	        RATE = 1111;
	    else if(_initialSupply >= 8200000e18)
	        RATE = 1053;
	    else if(_initialSupply >= 6600000e18)
	        RATE = 1000;
	    else if(_initialSupply >= 5000000e18)
	        RATE = 952;
	    else if(_initialSupply >= 3400000e18)
	        RATE = 909;
	    else if(_initialSupply >= 1800000e18)
	        RATE = 870;
	    else
	        RATE = 833;
	}
	function createTokens() payable {
	    
	    //require(msg.value > 0);
	    
	    require(_initialSupply >= tokens);
	    
	    uint256 tokens = msg.value.mul(setPrice());
	    balances[msg.sender] = balances[msg.sender].add(tokens);
	    _initialSupply = _initialSupply.sub(tokens);
	    
	    owner.transfer(msg.value);
	}
	
	function totalSupply() constant returns (uint256 totalSupply){
	   //TODO
	   return _totalSupply;
	}
	function balanceOf(address _owner) constant returns (uint256 balance){
	    //TODO
	    return balances[_owner];
    }
    
    
	function transfer(address _to, uint256 _value) returns (bool success){
	    //TODO
	    require(
        	balances[msg.sender] >= _value
        	&& _value > 0
        );
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        Transfer(msg.sender, _to, _value);
        return true;
    }
    function transferFrom(address _from, address _to, uint256 _value) returns (bool success){
        //TODO
        require(
        	allowed[_from][msg.sender] >= _value
        	&& balances[_from] >= _value
        	&& _value > 0
        );
        balances[_from] = balances[_from].sub(_value);
        balances[_to] = balances[_to].add(_value);
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        Transfer(_from, _to, _value);
        return true;
    }
    function approve(address _spender, uint256 _value) returns (bool success){
        //TODO
        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }
    function allowance(address _owner, address _spender) constant returns (uint256 remaining){
        //TODO
        return allowed[_owner][_spender];
    }
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}