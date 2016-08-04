$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sample banking acceptance criteria.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Sample feature file for Behavior-Driven Testing and Development training"
    },
    {
      "line": 2,
      "value": "#Author: Fernanda Menks - fernanda.menks@accenture.com"
    },
    {
      "line": 3,
      "value": "#Creation date: July 31, 2016"
    }
  ],
  "line": 5,
  "name": "Manage simple transactions in a banking account",
  "description": "       In order to manage my money more efficiently\r\n       As a bank client\r\n       TC_001: I want to make a deposit and withdraw money whenever I need to\r\n       TC_002: I want to make a transfer to another bank account whenever I need to\r\n       TC_003: I want to make a transfer to an international bank account",
  "id": "manage-simple-transactions-in-a-banking-account",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 12,
      "value": "#Login information for generic user so all scenarios will use the same starting point"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a user account owned by generic user",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "bank url is \u003c\u003c\u003cURL\u003e\u003e\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "username is \u003c\u003c\u003cusername\u003e\u003e\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "password is \u003c\u003c\u003cpassword\u003e\u003e\u003e",
  "rows": [
    {
      "cells": [
        "URL",
        "username",
        "password"
      ],
      "line": 19
    },
    {
      "cells": [
        "http://12345.mykidsbank.org",
        "client",
        "pwd123"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.a_user_account_owned_by_generic_user()"
});
formatter.result({
  "duration": 789931253,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.accenture.shahid_BDD.AC001_SampleBankingproject_step_Definition.a_user_account_owned_by_generic_user(AC001_SampleBankingproject_step_Definition.java:13)\r\n\tat ✽.Given a user account owned by generic user(Sample banking acceptance criteria.feature:14)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.bank_url_is_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.username_is_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.password_is_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Make a deposit",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-deposit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@TC_001"
    },
    {
      "line": 22,
      "name": "@in_progress"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "my checking account has a balance of 1000",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I deposit 500 to my checking account",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should have 1500 as balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 37
    }
  ],
  "location": "AC001_SampleBankingproject_step_Definition.my_checking_account_has_a_balance_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 10
    }
  ],
  "location": "AC001_SampleBankingproject_step_Definition.i_deposit_to_my_checking_account(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 14
    }
  ],
  "location": "AC001_SampleBankingproject_step_Definition.i_should_have_as_balance(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 27,
      "value": "# Include here the parametrization and data for positive and negative test"
    }
  ],
  "line": 30,
  "name": "Make a withdrawn",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-withdrawn",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@TC002"
    },
    {
      "line": 29,
      "name": "@signed-off"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "my checking account has a balance of \u003c\u003c\u003cinitial_balance\u003e\u003e\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I withdrawn \u003c\u003c\u003cwithdrawn_amount\u003e\u003e\u003e from my checking account",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should have \u003c\u003c\u003cfinal_balance\u003e\u003e\u003e as balance",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-withdrawn;",
  "rows": [
    {
      "cells": [
        "initial_balance",
        "withdrawn_amount",
        "final_balance"
      ],
      "line": 36,
      "id": "manage-simple-transactions-in-a-banking-account;make-a-withdrawn;;1"
    },
    {
      "cells": [
        "1500",
        "200",
        "1300"
      ],
      "line": 37,
      "id": "manage-simple-transactions-in-a-banking-account;make-a-withdrawn;;2"
    },
    {
      "cells": [
        "1300",
        "0",
        "1300"
      ],
      "line": 38,
      "id": "manage-simple-transactions-in-a-banking-account;make-a-withdrawn;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 12,
      "value": "#Login information for generic user so all scenarios will use the same starting point"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a user account owned by generic user",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "bank url is \u003c\u003c\u003cURL\u003e\u003e\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "username is \u003c\u003c\u003cusername\u003e\u003e\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "password is \u003c\u003c\u003cpassword\u003e\u003e\u003e",
  "rows": [
    {
      "cells": [
        "URL",
        "username",
        "password"
      ],
      "line": 19
    },
    {
      "cells": [
        "http://12345.mykidsbank.org",
        "client",
        "pwd123"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.a_user_account_owned_by_generic_user()"
});
formatter.result({
  "duration": 775915,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.accenture.shahid_BDD.AC001_SampleBankingproject_step_Definition.a_user_account_owned_by_generic_user(AC001_SampleBankingproject_step_Definition.java:13)\r\n\tat ✽.Given a user account owned by generic user(Sample banking acceptance criteria.feature:14)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.bank_url_is_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.username_is_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.password_is_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 37,
  "name": "Make a withdrawn",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-withdrawn;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@TC002"
    },
    {
      "line": 29,
      "name": "@signed-off"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "my checking account has a balance of \u003c\u003c1500\u003e\u003e",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I withdrawn \u003c\u003c200\u003e\u003e from my checking account",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should have \u003c\u003c1300\u003e\u003e as balance",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "AC001_SampleBankingproject_step_Definition.i_withdrawn_from_my_checking_account(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "comments": [
    {
      "line": 12,
      "value": "#Login information for generic user so all scenarios will use the same starting point"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a user account owned by generic user",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "bank url is \u003c\u003c\u003cURL\u003e\u003e\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "username is \u003c\u003c\u003cusername\u003e\u003e\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "password is \u003c\u003c\u003cpassword\u003e\u003e\u003e",
  "rows": [
    {
      "cells": [
        "URL",
        "username",
        "password"
      ],
      "line": 19
    },
    {
      "cells": [
        "http://12345.mykidsbank.org",
        "client",
        "pwd123"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.a_user_account_owned_by_generic_user()"
});
formatter.result({
  "duration": 640386,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.accenture.shahid_BDD.AC001_SampleBankingproject_step_Definition.a_user_account_owned_by_generic_user(AC001_SampleBankingproject_step_Definition.java:13)\r\n\tat ✽.Given a user account owned by generic user(Sample banking acceptance criteria.feature:14)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.bank_url_is_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.username_is_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AC001_SampleBankingproject_step_Definition.password_is_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 38,
  "name": "Make a withdrawn",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-withdrawn;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@TC002"
    },
    {
      "line": 29,
      "name": "@signed-off"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "my checking account has a balance of \u003c\u003c1300\u003e\u003e",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I withdrawn \u003c\u003c0\u003e\u003e from my checking account",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should have \u003c\u003c1300\u003e\u003e as balance",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    }
  ],
  "location": "AC001_SampleBankingproject_step_Definition.i_withdrawn_from_my_checking_account(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});