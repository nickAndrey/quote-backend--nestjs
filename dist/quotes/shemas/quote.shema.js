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
exports.QuoteShema = exports.QuoteShemaDefinition = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let QuoteShemaDefinition = class QuoteShemaDefinition {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], QuoteShemaDefinition.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], QuoteShemaDefinition.prototype, "quote", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], QuoteShemaDefinition.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], QuoteShemaDefinition.prototype, "isEditable", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], QuoteShemaDefinition.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], QuoteShemaDefinition.prototype, "deletedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], QuoteShemaDefinition.prototype, "updatedAt", void 0);
QuoteShemaDefinition = __decorate([
    (0, mongoose_1.Schema)()
], QuoteShemaDefinition);
exports.QuoteShemaDefinition = QuoteShemaDefinition;
const QuoteShema = mongoose_1.SchemaFactory.createForClass(QuoteShemaDefinition);
exports.QuoteShema = QuoteShema;
//# sourceMappingURL=quote.shema.js.map