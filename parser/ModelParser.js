// Generated from grammar/Model.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ModelVisitor = require('./ModelVisitor').ModelVisitor;

var grammarFileName = "Model.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003$\u00c4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003\u0002",
    "\u0006\u0002!\n\u0002\r\u0002\u000e\u0002\"\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003)\n\u0003\u0003\u0003\u0005\u0003",
    ",\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005<\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006B\n\u0006\u0003\u0006",
    "\u0005\u0006E\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007L\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\bR\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bZ\n\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bk\n\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bt\n\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0007\b\u008b\n\b\f\b\u000e\b\u008e\u000b\b\u0003",
    "\t\u0003\t\u0003\t\u0007\t\u0093\n\t\f\t\u000e\t\u0096\u000b\t\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u009b\n\n\f\n\u000e\n\u009e\u000b\n\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00a2\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0003\r\u0007\r\u00b1\n\r\f\r\u000e\r\u00b4\u000b\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00bf\n\u000f\f\u000f",
    "\u000e\u000f\u00c2\u000b\u000f\u0003\u000f\u0002\u0003\u000e\u0010\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u0002",
    "\b\u0004\u0002\u0007\u0007\u001c\u001d\u0003\u0002\u0014\u0015\u0003",
    "\u0002\u0016\u0017\u0003\u0002\u0018\u001b\u0004\u0002\u001c\u001c\u001e",
    "\u001e\u0003\u0002\u000e\u000f\u0002\u00d6\u0002 \u0003\u0002\u0002",
    "\u0002\u0004$\u0003\u0002\u0002\u0002\u0006-\u0003\u0002\u0002\u0002",
    "\b3\u0003\u0002\u0002\u0002\n=\u0003\u0002\u0002\u0002\fF\u0003\u0002",
    "\u0002\u0002\u000es\u0003\u0002\u0002\u0002\u0010\u008f\u0003\u0002",
    "\u0002\u0002\u0012\u0097\u0003\u0002\u0002\u0002\u0014\u009f\u0003\u0002",
    "\u0002\u0002\u0016\u00a6\u0003\u0002\u0002\u0002\u0018\u00ad\u0003\u0002",
    "\u0002\u0002\u001a\u00b5\u0003\u0002\u0002\u0002\u001c\u00bb\u0003\u0002",
    "\u0002\u0002\u001e!\u0005\u0004\u0003\u0002\u001f!\u0005\n\u0006\u0002",
    " \u001e\u0003\u0002\u0002\u0002 \u001f\u0003\u0002\u0002\u0002!\"\u0003",
    "\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002",
    "#\u0003\u0003\u0002\u0002\u0002$%\u0007 \u0002\u0002%(\u0007\u0003\u0002",
    "\u0002&)\u0005\u0012\n\u0002\')\u0005\u0006\u0004\u0002(&\u0003\u0002",
    "\u0002\u0002(\'\u0003\u0002\u0002\u0002)+\u0003\u0002\u0002\u0002*,",
    "\u0005\b\u0005\u0002+*\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",\u0005\u0003\u0002\u0002\u0002-.\u0007\u0004\u0002\u0002./\u0007 \u0002",
    "\u0002/0\u0007\u0017\u0002\u000201\u0007 \u0002\u000212\u0007\u0005",
    "\u0002\u00022\u0007\u0003\u0002\u0002\u00023;\u0007\u0006\u0002\u0002",
    "4<\u0007 \u0002\u000256\u0007\u0004\u0002\u000267\u0007 \u0002\u0002",
    "78\u0007\u0003\u0002\u000289\u0005\u0012\n\u00029:\u0007\u0005\u0002",
    "\u0002:<\u0003\u0002\u0002\u0002;4\u0003\u0002\u0002\u0002;5\u0003\u0002",
    "\u0002\u0002<\t\u0003\u0002\u0002\u0002=D\u0005\f\u0007\u0002>A\t\u0002",
    "\u0002\u0002?B\u0005\u000e\b\u0002@B\u0005\u001c\u000f\u0002A?\u0003",
    "\u0002\u0002\u0002A@\u0003\u0002\u0002\u0002BE\u0003\u0002\u0002\u0002",
    "CE\u0005\u0014\u000b\u0002D>\u0003\u0002\u0002\u0002DC\u0003\u0002\u0002",
    "\u0002DE\u0003\u0002\u0002\u0002E\u000b\u0003\u0002\u0002\u0002FK\u0007",
    " \u0002\u0002GH\u0007\b\u0002\u0002HI\u0005\u0012\n\u0002IJ\u0007\t",
    "\u0002\u0002JL\u0003\u0002\u0002\u0002KG\u0003\u0002\u0002\u0002KL\u0003",
    "\u0002\u0002\u0002L\r\u0003\u0002\u0002\u0002MN\b\b\u0001\u0002NO\u0007",
    " \u0002\u0002OQ\u0007\u0004\u0002\u0002PR\u0005\u0010\t\u0002QP\u0003",
    "\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002",
    "St\u0007\u0005\u0002\u0002TY\u0007 \u0002\u0002UV\u0007\b\u0002\u0002",
    "VW\u0005\u0012\n\u0002WX\u0007\t\u0002\u0002XZ\u0003\u0002\u0002\u0002",
    "YU\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002",
    "\u0002[\\\u0007\u0004\u0002\u0002\\]\u0005\u000e\b\u0002]^\u0007\u0005",
    "\u0002\u0002^t\u0003\u0002\u0002\u0002_`\u0007\n\u0002\u0002`t\u0005",
    "\u000e\b\u0011ab\u0007\u0017\u0002\u0002bt\u0005\u000e\b\u0010cd\u0007",
    "\u0016\u0002\u0002dt\u0005\u000e\b\u000fej\u0007 \u0002\u0002fg\u0007",
    "\b\u0002\u0002gh\u0005\u0012\n\u0002hi\u0007\t\u0002\u0002ik\u0003\u0002",
    "\u0002\u0002jf\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002kt\u0003",
    "\u0002\u0002\u0002lt\u0007!\u0002\u0002mt\u0007#\u0002\u0002nt\u0005",
    "\u0014\u000b\u0002op\u0007\u0004\u0002\u0002pq\u0005\u000e\b\u0002q",
    "r\u0007\u0005\u0002\u0002rt\u0003\u0002\u0002\u0002sM\u0003\u0002\u0002",
    "\u0002sT\u0003\u0002\u0002\u0002s_\u0003\u0002\u0002\u0002sa\u0003\u0002",
    "\u0002\u0002sc\u0003\u0002\u0002\u0002se\u0003\u0002\u0002\u0002sl\u0003",
    "\u0002\u0002\u0002sm\u0003\u0002\u0002\u0002sn\u0003\u0002\u0002\u0002",
    "so\u0003\u0002\u0002\u0002t\u008c\u0003\u0002\u0002\u0002uv\f\u000e",
    "\u0002\u0002vw\u0007\u000b\u0002\u0002w\u008b\u0005\u000e\b\u000fxy",
    "\f\r\u0002\u0002yz\t\u0003\u0002\u0002z\u008b\u0005\u000e\b\u000e{|",
    "\f\f\u0002\u0002|}\t\u0004\u0002\u0002}\u008b\u0005\u000e\b\r~\u007f",
    "\f\u000b\u0002\u0002\u007f\u0080\t\u0005\u0002\u0002\u0080\u008b\u0005",
    "\u000e\b\f\u0081\u0082\f\n\u0002\u0002\u0082\u0083\t\u0006\u0002\u0002",
    "\u0083\u008b\u0005\u000e\b\u000b\u0084\u0085\f\t\u0002\u0002\u0085\u0086",
    "\u0007\f\u0002\u0002\u0086\u008b\u0005\u000e\b\n\u0087\u0088\f\b\u0002",
    "\u0002\u0088\u0089\u0007\r\u0002\u0002\u0089\u008b\u0005\u000e\b\t\u008a",
    "u\u0003\u0002\u0002\u0002\u008ax\u0003\u0002\u0002\u0002\u008a{\u0003",
    "\u0002\u0002\u0002\u008a~\u0003\u0002\u0002\u0002\u008a\u0081\u0003",
    "\u0002\u0002\u0002\u008a\u0084\u0003\u0002\u0002\u0002\u008a\u0087\u0003",
    "\u0002\u0002\u0002\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u000f\u0003",
    "\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0094\u0005",
    "\u000e\b\u0002\u0090\u0091\u0007\u000e\u0002\u0002\u0091\u0093\u0005",
    "\u000e\b\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0093\u0096\u0003",
    "\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003",
    "\u0002\u0002\u0002\u0095\u0011\u0003\u0002\u0002\u0002\u0096\u0094\u0003",
    "\u0002\u0002\u0002\u0097\u009c\u0007 \u0002\u0002\u0098\u0099\u0007",
    "\u000e\u0002\u0002\u0099\u009b\u0007 \u0002\u0002\u009a\u0098\u0003",
    "\u0002\u0002\u0002\u009b\u009e\u0003\u0002\u0002\u0002\u009c\u009a\u0003",
    "\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u0013\u0003",
    "\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009f\u00a1\u0007",
    "\u0004\u0002\u0002\u00a0\u00a2\u0005\u0016\f\u0002\u00a1\u00a0\u0003",
    "\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0005\u0018\r\u0002\u00a4\u00a5\u0007",
    "\u0005\u0002\u0002\u00a5\u0015\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007",
    "\b\u0002\u0002\u00a7\u00a8\u0005\u001a\u000e\u0002\u00a8\u00a9\u0007",
    "\u0017\u0002\u0002\u00a9\u00aa\u0005\u001a\u000e\u0002\u00aa\u00ab\u0007",
    "\t\u0002\u0002\u00ab\u00ac\u0007\u000e\u0002\u0002\u00ac\u0017\u0003",
    "\u0002\u0002\u0002\u00ad\u00b2\u0005\u001a\u000e\u0002\u00ae\u00af\u0007",
    "\u000e\u0002\u0002\u00af\u00b1\u0005\u001a\u000e\u0002\u00b0\u00ae\u0003",
    "\u0002\u0002\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003",
    "\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u0019\u0003",
    "\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007",
    "\u0004\u0002\u0002\u00b6\u00b7\u0005\u000e\b\u0002\u00b7\u00b8\u0007",
    "\u000e\u0002\u0002\u00b8\u00b9\u0005\u000e\b\u0002\u00b9\u00ba\u0007",
    "\u0005\u0002\u0002\u00ba\u001b\u0003\u0002\u0002\u0002\u00bb\u00c0\u0005",
    "\u000e\b\u0002\u00bc\u00bd\t\u0007\u0002\u0002\u00bd\u00bf\u0005\u000e",
    "\b\u0002\u00be\u00bc\u0003\u0002\u0002\u0002\u00bf\u00c2\u0003\u0002",
    "\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002",
    "\u0002\u0002\u00c1\u001d\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002",
    "\u0002\u0002\u0015 \"(+;ADKQYjs\u008a\u008c\u0094\u009c\u00a1\u00b2",
    "\u00c0"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'('", "')'", "'->'", "':='", "'['", "']'", 
                     "':NOT:'", "'^'", "':AND:'", "':OR:'", "','", "';'", 
                     null, null, null, null, "'*'", "'/'", "'+'", "'-'", 
                     "'<'", "'<='", "'>'", "'>='", "'='", "'=='", "'<>'", 
                     "'!'", null, null, null, "':NA:'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "Encoding", "UnitsDoc", 
                      "Group", "Sketch", "Star", "Div", "Plus", "Minus", 
                      "Less", "LessEqual", "Greater", "GreaterEqual", "Equal", 
                      "TwoEqual", "NotEqual", "Exclamation", "Id", "Const", 
                      "StringLiteral", "Keyword", "Whitespace" ];

var ruleNames =  [ "model", "subscriptRange", "subscriptSequence", "subscriptMapping", 
                   "equation", "lhs", "expr", "exprList", "subscriptList", 
                   "lookup", "lookupRange", "lookupPointList", "lookupPoint", 
                   "constList" ];

function ModelParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ModelParser.prototype = Object.create(antlr4.Parser.prototype);
ModelParser.prototype.constructor = ModelParser;

Object.defineProperty(ModelParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ModelParser.EOF = antlr4.Token.EOF;
ModelParser.T__0 = 1;
ModelParser.T__1 = 2;
ModelParser.T__2 = 3;
ModelParser.T__3 = 4;
ModelParser.T__4 = 5;
ModelParser.T__5 = 6;
ModelParser.T__6 = 7;
ModelParser.T__7 = 8;
ModelParser.T__8 = 9;
ModelParser.T__9 = 10;
ModelParser.T__10 = 11;
ModelParser.T__11 = 12;
ModelParser.T__12 = 13;
ModelParser.Encoding = 14;
ModelParser.UnitsDoc = 15;
ModelParser.Group = 16;
ModelParser.Sketch = 17;
ModelParser.Star = 18;
ModelParser.Div = 19;
ModelParser.Plus = 20;
ModelParser.Minus = 21;
ModelParser.Less = 22;
ModelParser.LessEqual = 23;
ModelParser.Greater = 24;
ModelParser.GreaterEqual = 25;
ModelParser.Equal = 26;
ModelParser.TwoEqual = 27;
ModelParser.NotEqual = 28;
ModelParser.Exclamation = 29;
ModelParser.Id = 30;
ModelParser.Const = 31;
ModelParser.StringLiteral = 32;
ModelParser.Keyword = 33;
ModelParser.Whitespace = 34;

ModelParser.RULE_model = 0;
ModelParser.RULE_subscriptRange = 1;
ModelParser.RULE_subscriptSequence = 2;
ModelParser.RULE_subscriptMapping = 3;
ModelParser.RULE_equation = 4;
ModelParser.RULE_lhs = 5;
ModelParser.RULE_expr = 6;
ModelParser.RULE_exprList = 7;
ModelParser.RULE_subscriptList = 8;
ModelParser.RULE_lookup = 9;
ModelParser.RULE_lookupRange = 10;
ModelParser.RULE_lookupPointList = 11;
ModelParser.RULE_lookupPoint = 12;
ModelParser.RULE_constList = 13;

function ModelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_model;
    return this;
}

ModelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModelContext.prototype.constructor = ModelContext;

ModelContext.prototype.subscriptRange = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SubscriptRangeContext);
    } else {
        return this.getTypedRuleContext(SubscriptRangeContext,i);
    }
};

ModelContext.prototype.equation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EquationContext);
    } else {
        return this.getTypedRuleContext(EquationContext,i);
    }
};

ModelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitModel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.ModelContext = ModelContext;

ModelParser.prototype.model = function() {

    var localctx = new ModelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ModelParser.RULE_model);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 30;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 28;
                this.subscriptRange();
                break;

            case 2:
                this.state = 29;
                this.equation();
                break;

            }
            this.state = 32; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ModelParser.Id);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubscriptRangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_subscriptRange;
    return this;
}

SubscriptRangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubscriptRangeContext.prototype.constructor = SubscriptRangeContext;

SubscriptRangeContext.prototype.Id = function() {
    return this.getToken(ModelParser.Id, 0);
};

SubscriptRangeContext.prototype.subscriptList = function() {
    return this.getTypedRuleContext(SubscriptListContext,0);
};

SubscriptRangeContext.prototype.subscriptSequence = function() {
    return this.getTypedRuleContext(SubscriptSequenceContext,0);
};

SubscriptRangeContext.prototype.subscriptMapping = function() {
    return this.getTypedRuleContext(SubscriptMappingContext,0);
};

SubscriptRangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitSubscriptRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.SubscriptRangeContext = SubscriptRangeContext;

ModelParser.prototype.subscriptRange = function() {

    var localctx = new SubscriptRangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ModelParser.RULE_subscriptRange);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(ModelParser.Id);
        this.state = 35;
        this.match(ModelParser.T__0);
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ModelParser.Id:
            this.state = 36;
            this.subscriptList();
            break;
        case ModelParser.T__1:
            this.state = 37;
            this.subscriptSequence();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ModelParser.T__3) {
            this.state = 40;
            this.subscriptMapping();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubscriptSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_subscriptSequence;
    return this;
}

SubscriptSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubscriptSequenceContext.prototype.constructor = SubscriptSequenceContext;

SubscriptSequenceContext.prototype.Id = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ModelParser.Id);
    } else {
        return this.getToken(ModelParser.Id, i);
    }
};


SubscriptSequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitSubscriptSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.SubscriptSequenceContext = SubscriptSequenceContext;

ModelParser.prototype.subscriptSequence = function() {

    var localctx = new SubscriptSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ModelParser.RULE_subscriptSequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(ModelParser.T__1);
        this.state = 44;
        this.match(ModelParser.Id);
        this.state = 45;
        this.match(ModelParser.Minus);
        this.state = 46;
        this.match(ModelParser.Id);
        this.state = 47;
        this.match(ModelParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubscriptMappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_subscriptMapping;
    return this;
}

SubscriptMappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubscriptMappingContext.prototype.constructor = SubscriptMappingContext;

SubscriptMappingContext.prototype.Id = function() {
    return this.getToken(ModelParser.Id, 0);
};

SubscriptMappingContext.prototype.subscriptList = function() {
    return this.getTypedRuleContext(SubscriptListContext,0);
};

SubscriptMappingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitSubscriptMapping(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.SubscriptMappingContext = SubscriptMappingContext;

ModelParser.prototype.subscriptMapping = function() {

    var localctx = new SubscriptMappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ModelParser.RULE_subscriptMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(ModelParser.T__3);
        this.state = 57;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ModelParser.Id:
            this.state = 50;
            this.match(ModelParser.Id);
            break;
        case ModelParser.T__1:
            this.state = 51;
            this.match(ModelParser.T__1);
            this.state = 52;
            this.match(ModelParser.Id);
            this.state = 53;
            this.match(ModelParser.T__0);
            this.state = 54;
            this.subscriptList();
            this.state = 55;
            this.match(ModelParser.T__2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EquationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_equation;
    return this;
}

EquationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EquationContext.prototype.constructor = EquationContext;

EquationContext.prototype.lhs = function() {
    return this.getTypedRuleContext(LhsContext,0);
};

EquationContext.prototype.lookup = function() {
    return this.getTypedRuleContext(LookupContext,0);
};

EquationContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

EquationContext.prototype.constList = function() {
    return this.getTypedRuleContext(ConstListContext,0);
};

EquationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitEquation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.EquationContext = EquationContext;

ModelParser.prototype.equation = function() {

    var localctx = new EquationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ModelParser.RULE_equation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.lhs();
        this.state = 66;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ModelParser.T__4:
        case ModelParser.Equal:
        case ModelParser.TwoEqual:
        	this.state = 60;
        	_la = this._input.LA(1);
        	if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__4) | (1 << ModelParser.Equal) | (1 << ModelParser.TwoEqual))) !== 0))) {
        	this._errHandler.recoverInline(this);
        	}
        	else {
        		this._errHandler.reportMatch(this);
        	    this.consume();
        	}
        	this.state = 63;
        	this._errHandler.sync(this);
        	var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        	switch(la_) {
        	case 1:
        	    this.state = 61;
        	    this.expr(0);
        	    break;

        	case 2:
        	    this.state = 62;
        	    this.constList();
        	    break;

        	}
        	break;
        case ModelParser.T__1:
        	this.state = 65;
        	this.lookup();
        	break;
        case ModelParser.EOF:
        case ModelParser.Id:
        	break;
        default:
        	break;
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LhsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_lhs;
    return this;
}

LhsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LhsContext.prototype.constructor = LhsContext;

LhsContext.prototype.Id = function() {
    return this.getToken(ModelParser.Id, 0);
};

LhsContext.prototype.subscriptList = function() {
    return this.getTypedRuleContext(SubscriptListContext,0);
};

LhsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitLhs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.LhsContext = LhsContext;

ModelParser.prototype.lhs = function() {

    var localctx = new LhsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ModelParser.RULE_lhs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(ModelParser.Id);
        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ModelParser.T__5) {
            this.state = 69;
            this.match(ModelParser.T__5);
            this.state = 70;
            this.subscriptList();
            this.state = 71;
            this.match(ModelParser.T__6);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function CallContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CallContext.prototype = Object.create(ExprContext.prototype);
CallContext.prototype.constructor = CallContext;

ModelParser.CallContext = CallContext;

CallContext.prototype.Id = function() {
    return this.getToken(ModelParser.Id, 0);
};

CallContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};
CallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrContext.prototype = Object.create(ExprContext.prototype);
OrContext.prototype.constructor = OrContext;

ModelParser.OrContext = OrContext;

OrContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
OrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function KeywordContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

KeywordContext.prototype = Object.create(ExprContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

ModelParser.KeywordContext = KeywordContext;

KeywordContext.prototype.Keyword = function() {
    return this.getToken(ModelParser.Keyword, 0);
};
KeywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitKeyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulDivContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivContext.prototype = Object.create(ExprContext.prototype);
MulDivContext.prototype.constructor = MulDivContext;

ModelParser.MulDivContext = MulDivContext;

MulDivContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MulDivContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitMulDiv(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddSubContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubContext.prototype = Object.create(ExprContext.prototype);
AddSubContext.prototype.constructor = AddSubContext;

ModelParser.AddSubContext = AddSubContext;

AddSubContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AddSubContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitAddSub(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VarContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VarContext.prototype = Object.create(ExprContext.prototype);
VarContext.prototype.constructor = VarContext;

ModelParser.VarContext = VarContext;

VarContext.prototype.Id = function() {
    return this.getToken(ModelParser.Id, 0);
};

VarContext.prototype.subscriptList = function() {
    return this.getTypedRuleContext(SubscriptListContext,0);
};
VarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitVar(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParensContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(ExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

ModelParser.ParensContext = ParensContext;

ParensContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstContext.prototype = Object.create(ExprContext.prototype);
ConstContext.prototype.constructor = ConstContext;

ModelParser.ConstContext = ConstContext;

ConstContext.prototype.Const = function() {
    return this.getToken(ModelParser.Const, 0);
};
ConstContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitConst(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelationalContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalContext.prototype = Object.create(ExprContext.prototype);
RelationalContext.prototype.constructor = RelationalContext;

ModelParser.RelationalContext = RelationalContext;

RelationalContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
RelationalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitRelational(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LookupCallContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LookupCallContext.prototype = Object.create(ExprContext.prototype);
LookupCallContext.prototype.constructor = LookupCallContext;

ModelParser.LookupCallContext = LookupCallContext;

LookupCallContext.prototype.Id = function() {
    return this.getToken(ModelParser.Id, 0);
};

LookupCallContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LookupCallContext.prototype.subscriptList = function() {
    return this.getTypedRuleContext(SubscriptListContext,0);
};
LookupCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitLookupCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotContext.prototype = Object.create(ExprContext.prototype);
NotContext.prototype.constructor = NotContext;

ModelParser.NotContext = NotContext;

NotContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitNot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegativeContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegativeContext.prototype = Object.create(ExprContext.prototype);
NegativeContext.prototype.constructor = NegativeContext;

ModelParser.NegativeContext = NegativeContext;

NegativeContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NegativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitNegative(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PositiveContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PositiveContext.prototype = Object.create(ExprContext.prototype);
PositiveContext.prototype.constructor = PositiveContext;

ModelParser.PositiveContext = PositiveContext;

PositiveContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
PositiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitPositive(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndContext.prototype = Object.create(ExprContext.prototype);
AndContext.prototype.constructor = AndContext;

ModelParser.AndContext = AndContext;

AndContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualityContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityContext.prototype = Object.create(ExprContext.prototype);
EqualityContext.prototype.constructor = EqualityContext;

ModelParser.EqualityContext = EqualityContext;

EqualityContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
EqualityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitEquality(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LookupArgContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LookupArgContext.prototype = Object.create(ExprContext.prototype);
LookupArgContext.prototype.constructor = LookupArgContext;

ModelParser.LookupArgContext = LookupArgContext;

LookupArgContext.prototype.lookup = function() {
    return this.getTypedRuleContext(LookupContext,0);
};
LookupArgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitLookupArg(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowerContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerContext.prototype = Object.create(ExprContext.prototype);
PowerContext.prototype.constructor = PowerContext;

ModelParser.PowerContext = PowerContext;

PowerContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
PowerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitPower(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ModelParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, ModelParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            localctx = new CallContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 76;
            this.match(ModelParser.Id);
            this.state = 77;
            this.match(ModelParser.T__1);
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (ModelParser.T__1 - 2)) | (1 << (ModelParser.T__7 - 2)) | (1 << (ModelParser.Plus - 2)) | (1 << (ModelParser.Minus - 2)) | (1 << (ModelParser.Id - 2)) | (1 << (ModelParser.Const - 2)) | (1 << (ModelParser.Keyword - 2)))) !== 0)) {
                this.state = 78;
                this.exprList();
            }

            this.state = 81;
            this.match(ModelParser.T__2);
            break;

        case 2:
            localctx = new LookupCallContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 82;
            this.match(ModelParser.Id);
            this.state = 87;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ModelParser.T__5) {
                this.state = 83;
                this.match(ModelParser.T__5);
                this.state = 84;
                this.subscriptList();
                this.state = 85;
                this.match(ModelParser.T__6);
            }

            this.state = 89;
            this.match(ModelParser.T__1);
            this.state = 90;
            this.expr(0);
            this.state = 91;
            this.match(ModelParser.T__2);
            break;

        case 3:
            localctx = new NotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 93;
            this.match(ModelParser.T__7);
            this.state = 94;
            this.expr(15);
            break;

        case 4:
            localctx = new NegativeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 95;
            this.match(ModelParser.Minus);
            this.state = 96;
            this.expr(14);
            break;

        case 5:
            localctx = new PositiveContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 97;
            this.match(ModelParser.Plus);
            this.state = 98;
            this.expr(13);
            break;

        case 6:
            localctx = new VarContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 99;
            this.match(ModelParser.Id);
            this.state = 104;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 100;
                this.match(ModelParser.T__5);
                this.state = 101;
                this.subscriptList();
                this.state = 102;
                this.match(ModelParser.T__6);

            }
            break;

        case 7:
            localctx = new ConstContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 106;
            this.match(ModelParser.Const);
            break;

        case 8:
            localctx = new KeywordContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 107;
            this.match(ModelParser.Keyword);
            break;

        case 9:
            localctx = new LookupArgContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 108;
            this.lookup();
            break;

        case 10:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 109;
            this.match(ModelParser.T__1);
            this.state = 110;
            this.expr(0);
            this.state = 111;
            this.match(ModelParser.T__2);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 138;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 136;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
                    this.state = 115;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 116;
                    this.match(ModelParser.T__8);
                    this.state = 117;
                    this.expr(13);
                    break;

                case 2:
                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
                    this.state = 118;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 119;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ModelParser.Star || _la===ModelParser.Div)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 120;
                    this.expr(12);
                    break;

                case 3:
                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
                    this.state = 121;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 122;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ModelParser.Plus || _la===ModelParser.Minus)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 123;
                    this.expr(11);
                    break;

                case 4:
                    localctx = new RelationalContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
                    this.state = 124;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 125;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.Less) | (1 << ModelParser.LessEqual) | (1 << ModelParser.Greater) | (1 << ModelParser.GreaterEqual))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 126;
                    this.expr(10);
                    break;

                case 5:
                    localctx = new EqualityContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
                    this.state = 127;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 128;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ModelParser.Equal || _la===ModelParser.NotEqual)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 129;
                    this.expr(9);
                    break;

                case 6:
                    localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
                    this.state = 130;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 131;
                    this.match(ModelParser.T__9);
                    this.state = 132;
                    this.expr(8);
                    break;

                case 7:
                    localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
                    this.state = 133;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 134;
                    this.match(ModelParser.T__10);
                    this.state = 135;
                    this.expr(7);
                    break;

                } 
            }
            this.state = 140;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExprListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_exprList;
    return this;
}

ExprListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprListContext.prototype.constructor = ExprListContext;

ExprListContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitExprList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.ExprListContext = ExprListContext;

ModelParser.prototype.exprList = function() {

    var localctx = new ExprListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ModelParser.RULE_exprList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.expr(0);
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ModelParser.T__11) {
            this.state = 142;
            this.match(ModelParser.T__11);
            this.state = 143;
            this.expr(0);
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubscriptListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_subscriptList;
    return this;
}

SubscriptListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubscriptListContext.prototype.constructor = SubscriptListContext;

SubscriptListContext.prototype.Id = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ModelParser.Id);
    } else {
        return this.getToken(ModelParser.Id, i);
    }
};


SubscriptListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitSubscriptList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.SubscriptListContext = SubscriptListContext;

ModelParser.prototype.subscriptList = function() {

    var localctx = new SubscriptListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ModelParser.RULE_subscriptList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(ModelParser.Id);
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ModelParser.T__11) {
            this.state = 150;
            this.match(ModelParser.T__11);
            this.state = 151;
            this.match(ModelParser.Id);
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LookupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_lookup;
    return this;
}

LookupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LookupContext.prototype.constructor = LookupContext;

LookupContext.prototype.lookupPointList = function() {
    return this.getTypedRuleContext(LookupPointListContext,0);
};

LookupContext.prototype.lookupRange = function() {
    return this.getTypedRuleContext(LookupRangeContext,0);
};

LookupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitLookup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.LookupContext = LookupContext;

ModelParser.prototype.lookup = function() {

    var localctx = new LookupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ModelParser.RULE_lookup);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(ModelParser.T__1);
        this.state = 159;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ModelParser.T__5) {
            this.state = 158;
            this.lookupRange();
        }

        this.state = 161;
        this.lookupPointList();
        this.state = 162;
        this.match(ModelParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LookupRangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_lookupRange;
    return this;
}

LookupRangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LookupRangeContext.prototype.constructor = LookupRangeContext;

LookupRangeContext.prototype.lookupPoint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LookupPointContext);
    } else {
        return this.getTypedRuleContext(LookupPointContext,i);
    }
};

LookupRangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitLookupRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.LookupRangeContext = LookupRangeContext;

ModelParser.prototype.lookupRange = function() {

    var localctx = new LookupRangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ModelParser.RULE_lookupRange);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(ModelParser.T__5);
        this.state = 165;
        this.lookupPoint();
        this.state = 166;
        this.match(ModelParser.Minus);
        this.state = 167;
        this.lookupPoint();
        this.state = 168;
        this.match(ModelParser.T__6);
        this.state = 169;
        this.match(ModelParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LookupPointListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_lookupPointList;
    return this;
}

LookupPointListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LookupPointListContext.prototype.constructor = LookupPointListContext;

LookupPointListContext.prototype.lookupPoint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LookupPointContext);
    } else {
        return this.getTypedRuleContext(LookupPointContext,i);
    }
};

LookupPointListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitLookupPointList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.LookupPointListContext = LookupPointListContext;

ModelParser.prototype.lookupPointList = function() {

    var localctx = new LookupPointListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ModelParser.RULE_lookupPointList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.lookupPoint();
        this.state = 176;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ModelParser.T__11) {
            this.state = 172;
            this.match(ModelParser.T__11);
            this.state = 173;
            this.lookupPoint();
            this.state = 178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LookupPointContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_lookupPoint;
    return this;
}

LookupPointContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LookupPointContext.prototype.constructor = LookupPointContext;

LookupPointContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

LookupPointContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitLookupPoint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.LookupPointContext = LookupPointContext;

ModelParser.prototype.lookupPoint = function() {

    var localctx = new LookupPointContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ModelParser.RULE_lookupPoint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(ModelParser.T__1);
        this.state = 180;
        this.expr(0);
        this.state = 181;
        this.match(ModelParser.T__11);
        this.state = 182;
        this.expr(0);
        this.state = 183;
        this.match(ModelParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ModelParser.RULE_constList;
    return this;
}

ConstListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstListContext.prototype.constructor = ConstListContext;

ConstListContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ConstListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ModelVisitor ) {
        return visitor.visitConstList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ModelParser.ConstListContext = ConstListContext;

ModelParser.prototype.constList = function() {

    var localctx = new ConstListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ModelParser.RULE_constList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.expr(0);
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ModelParser.T__11 || _la===ModelParser.T__12) {
            this.state = 186;
            _la = this._input.LA(1);
            if(!(_la===ModelParser.T__11 || _la===ModelParser.T__12)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 187;
            this.expr(0);
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ModelParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ModelParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);
		case 1:
			return this.precpred(this._ctx, 11);
		case 2:
			return this.precpred(this._ctx, 10);
		case 3:
			return this.precpred(this._ctx, 9);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ModelParser = ModelParser;
