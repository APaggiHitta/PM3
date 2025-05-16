"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turn = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Activity_1 = require("./Activity");
var Turn = /** @class */ (function () {
    function Turn() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Turn.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "date",
        }),
        __metadata("design:type", Date)
    ], Turn.prototype, "date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Turn.prototype, "time", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Turn.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.turns; }),
        (0, typeorm_1.JoinColumn)({ name: "user_id" }),
        __metadata("design:type", User_1.User)
    ], Turn.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Activity_1.Activity; }, function (activity) { return activity.turns; }),
        (0, typeorm_1.JoinColumn)({ name: "activity_id" }),
        __metadata("design:type", Activity_1.Activity)
    ], Turn.prototype, "activity", void 0);
    Turn = __decorate([
        (0, typeorm_1.Entity)({
            name: "turns",
        })
    ], Turn);
    return Turn;
}());
exports.Turn = Turn;
