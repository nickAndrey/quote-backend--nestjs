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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const quote_shema_1 = require("./shemas/quote.shema");
let QuotesService = class QuotesService {
    constructor(model) {
        this.model = model;
    }
    async getAllQuotes() {
        return {
            message: 'success',
            results: await this.model.find().exec(),
        };
    }
    async getQuoteById(id) {
        return {
            message: 'success',
            results: await this.model.findById(id).exec(),
        };
    }
    async createQuote(quote) {
        return {
            message: 'success',
            results: await new this.model(Object.assign(Object.assign({}, quote), { createdAt: new Date() })).save(),
        };
    }
    async updateQuoteById(id, updatedQuote) {
        return {
            message: 'success',
            results: await this.model
                .findByIdAndUpdate(id, Object.assign(Object.assign({}, updatedQuote), { updatedAt: new Date() }))
                .exec(),
        };
    }
    async deleteQuoteById(id) {
        return {
            message: 'success',
            results: await this.model.findByIdAndDelete(id).exec(),
        };
    }
};
QuotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(quote_shema_1.QuoteShemaDefinition.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QuotesService);
exports.QuotesService = QuotesService;
//# sourceMappingURL=quotes.service.js.map