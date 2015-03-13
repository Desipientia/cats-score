CATS.Model.Contest = Classify(CATS.Model.Entity, {
    init: function () {
        this.$$parent();
        this.type = "contest";
        this.name = null;
        this.url = null;
        this.problems_url = null;
        this.full_name = null;
        this.affiliation = null;
        this.start_time = null;
        this.finish_time = null;
        this.freeze_time = null;
        this.unfreeze_time = null;
        this.is_open_registration = null;
        this.scoring = null;//*: "acm", "school"
        this.is_all_results_visible = true;
        this.problems = [];
        this.users = [];
        this.prizes = [];
        this.runs = [];
    },

    add_object: function (obj) {
        if ($.inArray(obj.id, this[obj.type + "s"]) == -1)
            this[obj.type + "s"].push(obj.id);
    },

    get_problem_index: function (p_id) {
        for(var i = 0; i < this.problems.length; ++i)
            if (this.problems[i] == p_id)
                return i;

        return null;
    }
});