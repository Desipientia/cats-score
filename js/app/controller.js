var CATS = {
    Model: {},
    Adapter: {},
    Rule: {},
    App: null,
    Test: {},
    View: null,
    Controller: Classify({
        init: function () {
            //other
            this.adapters = {};
            this.rules = {};
            //models
            this.users = {};
            this.problems = {};
            this.prizes = {};
            this.contests = {};
            this.chats = {};
            this.runs = {};
            this.compilers = {};
            this.result_tables = {};

            this.last_id = 0;
        },

        add_object: function(obj) {
            this[obj.type + 's'][obj.id] = obj;
        },

        get_new_id: function() {
            return 'id_' + this.last_id++;
        },

        regist_adapter: function(adapter) {
            this.adapters[adapter.name] = adapter;
        },

        regist_rule: function(rule) {
            this.rules[rule.name] = rule;
        },

        process_adapter: function(adapter_name, start_time) {
            var contest = CATS.Model.Contest();
            var result_table = CATS.Model.Results_table();
            contest.start_time = start_time;
            this.adapters[adapter_name].parse(contest, result_table);
            CATS.App.rules[contest.scoring].process(contest, result_table);
            CATS.App.add_object(contest);
            CATS.App.add_object(result_table);
            return {contests : [contest.id], table : result_table.id };
        },

        get_problem_by_code: function(code) {
            var prob = null;
            $.each(this.problems, function (k, v) {
                if (v['code'] == code)
                    prob = v;
            });
            return prob;
        }
    })
};
