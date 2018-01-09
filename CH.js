(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"CH_atlas_", frames: [[0,3765,225,150],[0,3507,384,256],[0,0,3780,3505],[386,3507,257,270]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["CH_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["CH_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shutterstock_115560229 = function() {
	this.spriteSheet = ss["CH_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.球形 = function() {
	this.spriteSheet = ss["CH_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.球形();
	this.instance.parent = this;
	this.instance.setTransform(-87.2,-91.7,0.679,0.679);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-91.7,174.6,183.4);


(lib.Tween80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.球形();
	this.instance.parent = this;
	this.instance.setTransform(-87.2,-91.7,0.679,0.679);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-91.7,174.6,183.4);


(lib.Tween77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACYDPIAAgTIiGAAIAAATIgkAAIAAihQgBgFAHAAIDBAAQAIAAAAAHIAACfgAASBSIAABFICGAAIAAhFQAAgFgGAAIh7AAQgGAAABAFgAjSCqIASgEIAAikIAjAAIAACcIAZgFIAAjEIg3AAQgFAAAAgGIAAiNQAAgFAFAAICGAAQAFAAAAAFIAABRQAbgVALgQQAJgOARgtIAlgBIgFAPIBxAAIAbARQgUAvgNATQgSAfgWAXQATAPAYANQAYAOAdAMIgZAeQgbgNgXgPQgZgPgWgRQgXARgcAQQgeARghAPIgXggQAggMAbgOQAcgPAXgRQgRgRgiguQgPAUgUARIgYgaIAAA6QAAAGgFAAIgsAAIAABCIAxAAIAAAkIgxAAIAABUQAigKAOgGIAMAjQgaALgnAKQgqAMg2AKgAidifIAABPIABACIBIAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAAhPIgBgBIhIAAgAAhiZQAlA4ASATQAVgZAcgrIABgGQAAgEgDAAIhkAAg");
	this.shape.setTransform(47.7,-78.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjLDJIAAgoIC5AAIAAhwIigAAIAAgnICgAAIAAhjIiqAAIAAgoICsAAQgWgdgRgQIAfgbQAgAjASAZIgOAMICwAAIAAAoIioAAIAABjICfAAIAAAnIifAAIAABwIC4AAIAAAog");
	this.shape_1.setTransform(2.5,-78.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACBDAQgUgLgSgPQgRgPgPgTQgQgUgMgYQgMgXgKgdIiLAAIAABzQBDgNBBgSIALAnQg8ASgjAHQhLANgrAGIgJgoIAogFIAAlcQAAgMAMAAIE+AAQAMAAAAAMIAAB1QAAAMgNAAIiLAAIAPA8ICaAAIAAAlIiOAAQAJAYAPAWQANAVARATQAQAQAOALQAPAJAJABQAMAAACgMQAFgbgCgeIAlALIgFAzQgEATgFAKQgHAOgIAEQgGAFgLAAQgQAAgTgMgAgCgBIgPg8IhxAAIAAA8ICAAAgAiCiaIAAA2IECAAQAGAAAAgGIAAgwQAAgJgJAAIj2AAQgJAAAAAJg");
	this.shape_2.setTransform(-42.7,-77.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#402212").ss(2).p("APmEjI/LAAIAApFIfLAAg");
	this.shape_3.setTransform(0,-76.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvlEjIAApFIfLAAIAAJFg");
	this.shape_4.setTransform(0,-76.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#402212").ss(2).p("AApMIIhRAAIAA4PIBRAAg");
	this.shape_5.setTransform(0.7,28.4,0.846,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoMIIAA4PIBRAAIAAYPg");
	this.shape_6.setTransform(0.7,28.4,0.846,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-106.9,201.6,213.9);


(lib.Tween76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACYDPIAAgTIiGAAIAAATIgkAAIAAihQgBgFAHAAIDBAAQAIAAAAAHIAACfgAASBSIAABFICGAAIAAhFQAAgFgGAAIh7AAQgGAAABAFgAjSCqIASgEIAAikIAjAAIAACcIAZgFIAAjEIg3AAQgFAAAAgGIAAiNQAAgFAFAAICGAAQAFAAAAAFIAABRQAbgVALgQQAJgOARgtIAlgBIgFAPIBxAAIAbARQgUAvgNATQgSAfgWAXQATAPAYANQAYAOAdAMIgZAeQgbgNgXgPQgZgPgWgRQgXARgcAQQgeARghAPIgXggQAggMAbgOQAcgPAXgRQgRgRgiguQgPAUgUARIgYgaIAAA6QAAAGgFAAIgsAAIAABCIAxAAIAAAkIgxAAIAABUQAigKAOgGIAMAjQgaALgnAKQgqAMg2AKgAidifIAABPIABACIBIAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAAhPIgBgBIhIAAgAAhiZQAlA4ASATQAVgZAcgrIABgGQAAgEgDAAIhkAAg");
	this.shape.setTransform(47.7,-78.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjLDJIAAgoIC5AAIAAhwIigAAIAAgnICgAAIAAhjIiqAAIAAgoICsAAQgWgdgRgQIAfgbQAgAjASAZIgOAMICwAAIAAAoIioAAIAABjICfAAIAAAnIifAAIAABwIC4AAIAAAog");
	this.shape_1.setTransform(2.5,-78.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACBDAQgUgLgSgPQgRgPgPgTQgQgUgMgYQgMgXgKgdIiLAAIAABzQBDgNBBgSIALAnQg8ASgjAHQhLANgrAGIgJgoIAogFIAAlcQAAgMAMAAIE+AAQAMAAAAAMIAAB1QAAAMgNAAIiLAAIAPA8ICaAAIAAAlIiOAAQAJAYAPAWQANAVARATQAQAQAOALQAPAJAJABQAMAAACgMQAFgbgCgeIAlALIgFAzQgEATgFAKQgHAOgIAEQgGAFgLAAQgQAAgTgMgAgCgBIgPg8IhxAAIAAA8ICAAAgAiCiaIAAA2IECAAQAGAAAAgGIAAgwQAAgJgJAAIj2AAQgJAAAAAJg");
	this.shape_2.setTransform(-42.7,-77.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#402212").ss(2).p("APmEjI/LAAIAApFIfLAAg");
	this.shape_3.setTransform(0,-76.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvlEjIAApFIfLAAIAAJFg");
	this.shape_4.setTransform(0,-76.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#402212").ss(2).p("AApMIIhRAAIAA4PIBRAAg");
	this.shape_5.setTransform(0.7,28.4,0.846,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoMIIAA4PIBRAAIAAYPg");
	this.shape_6.setTransform(0.7,28.4,0.846,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-106.9,201.6,213.9);


(lib.Tween75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMgOIAbARIgdAMg");
	this.shape.setTransform(123.1,59.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AAGgKIABgGIACACIgDAEIgCAYIgFAAIgHADg");
	this.shape_1.setTransform(121.1,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIgHIABgCIAQgPIAAAxg");
	this.shape_2.setTransform(127.3,50.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231916").s().p("AAognIgkA/IgrAQg");
	this.shape_3.setTransform(114.9,66.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231916").s().p("AgeAfIAehOIANAAIASAhIgCgCIgiBAg");
	this.shape_4.setTransform(125.1,54.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXBBQgDgIABgCQAjgnADgQQAEgbg3gPQAEgFAFgMQAFgKAGgDQAKgEAPgCIAggDQgHAdAFA8QgCA1g0AVIgGgRg");
	this.shape_5.setTransform(141.8,-8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5gZQAQgRBpgPIhQBWIghAdQgXhDAPgQg");
	this.shape_6.setTransform(18.4,-75.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3gZIAOgPIBXgMIAKAOIhVBbg");
	this.shape_7.setTransform(132.4,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABcApIADABIgCACIgBgDgAhegKQBogpAfAJQAdAJAWBKg");
	this.shape_8.setTransform(20.4,-34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhaBwICdjwIAYARIiZDxg");
	this.shape_9.setTransform(40.2,78.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhDA3QAZgQADggQAAgHgDgzQgDgjALgTQAQgZAtgIIg4AeIBEBTIgaAXQgOANAAALQgBAMAKARQAEAIARAVIAXAZQAMAQADASg");
	this.shape_10.setTransform(-163.2,39.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhsCmIAPhsIAjg/IAOgOIAGgCIAHAAIAegNIAihBIA7hKIARALIjPFQg");
	this.shape_11.setTransform(124.8,63.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiQC2IB1imIgxgOIA2g3QAgghAXgWQA7g3A1gdQg/AlguBVIgoBRQgYAxgWAdIhOBog");
	this.shape_12.setTransform(37,73.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BNQgmh7AVizQAJAoAHBRQAHBUAIAmQAbCLBoBFQhmgMgriJg");
	this.shape_13.setTransform(167.2,49.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjaArQAUgTAOgEQD9hLC/gdIoICpIAqgqg");
	this.shape_14.setTransform(82.4,60);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABYiKIAZAwIgfBQIgSAfIgQAQIADgDIhPBQIhUAag");
	this.shape_15.setTransform(113.8,59);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiIizIAKgCIAVBXIDthRIAFAPIhlAlQg6AWgnASQgQAIgNAUQgNATgCASQgBAMANARIATAWIgwB0IBhgKIADAPIhyAcg");
	this.shape_16.setTransform(21.1,78.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjIA/QgGgBgZgLQgCgBADgRQADgSAGgDQAkgSAYAGQBFAWBbgWQAygOBmgeQAZgFAygRIAHASIgQAOQgKAHgIACQjwA+iAAdIgJABQgJAAgNgEg");
	this.shape_17.setTransform(69.1,90);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAFBeQAAgUA3goIiThgIA4ggQAfgSASgOQAUgPAQAEQAQAFASAcIgJAMQgDAMgNAdQgJAZAGAHQAdAlgGArQgDAVgXA5Qg1gZABgUg");
	this.shape_18.setTransform(-160.6,-30.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEBKIgxgYQgdgNgVADIgLgUICshlIApB6QgdApgmAAQgRAAgTgIg");
	this.shape_19.setTransform(59.9,-8.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AChARQhdgPhBgBQhAAAheAPQhoATgxAGQAjgoBagUQBSgVBmAAQBnAABSAVQBZAVAiAnIiUgYg");
	this.shape_20.setTransform(39.1,-88.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiNBYIBLgoQAsgYAagUQAdgVAmgkIBAg+QAFAEAAABQAGBqgRAWQgQAYhoAiQgaAJgqALIhGAUg");
	this.shape_21.setTransform(131.5,26.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AmvC3QAHgwAigdQA/g2BtiAQBohtBqgfQAWgGBFgmQA4gfAiABQA1ABBOAVICCAmIgFAWIg3gJQgggGgUgJQhQgjg8ABQhJABhAAzQgWAShMAjQhAAegXAdQgYAggsAmQg0AogYAWQhaBOgQBWIgRBiQghg2AJg3g");
	this.shape_22.setTransform(-131.4,-60.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgzHLQgOgIgFgJQgthZgIgwQgLhNAzhFQAVgdANg6IAVhfIAUhDQALgmARgWQA2hEAGg7QAHhDgzhCQgGgHgFgNIgIgWQAAgCACgFIAFgNQBFAqAYBbQAZBcgxAxQg5A5gYBjQgFATgMBAQgKA1gKAfQgBAEAKAKIAUAVQgIAKgXANQgcARgJAHQgoAgAUA1IAhBWQARAzAHAsIgYgOg");
	this.shape_23.setTransform(-174.7,17.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AFECYQhUgDjMgPQgegCgNgJQg7gog+AGQg3AEhAApQgJAGgSgBQgSgBgIgHQhLhBgogzQgbgiAagxQAbgxBEgiIhAB9IBvCDIBFgeQArgTAbgGQBQgTA/A8IAng+IAKAFQAEACAAABQgCAdAOANQANAMAdABQBYADCKAJQASABAaAEIAsAIIABAYIg1AIQgaADgTAAIgIAAg");
	this.shape_24.setTransform(-143.3,80.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AG9BMQgigkgogOQglgNgyAEQiFARhCAGQhzAMhPgMQiLgUjygWQglgEgugcIhQg4QAoABBQAXQBHALAvgwIgmBJQBZgaBGAEQBQAFBDArQAMAGASgCIC9gJQBvgGBOgJQBSgKAwASQA8AWAcBFICvg2QggA7hHASQgWAGgSAAQgqAAgYgcg");
	this.shape_25.setTransform(-41.7,94.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ADxJ8QAcgtA1hdQAxhTAmg0QBBhXAchQQAghcgLhgQgFgpgbhFIgyhzQgfhGgLgvQgQg+gogoQgjgjg+gYQhignhlgxQhdguhgALQhXAKhdA5QgxAehHAvIh2BPQCbiJA7gmQCChSCFAFQA+ACBWAjQCSA5BXAzQAjAUAbAZQAfAcAOAeQBFCNA+C4QAfBagIBaQgJBbgvBTQgpBIg/BiIhsCnQgFAIgJAJIgQAPg");
	this.shape_26.setTransform(131.2,-40.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABnCBQgEgCgKAIIgMAJIhYiYIgeAVIBRBiQhFgRgdgUQgmgagDgxIgXAWQgPAQgNACQgLABgSgNQgWgSgLgHQgNAJAGAQQADAKANAXQAVAsg7AUIAEhVQADgtANgYQAPgcAmggIBFg6IAVBFIAwgzIBZBvIgHhWQA8gLAjAQQAjAQAGArIA2AAIgcA0IgWAxQgJAUgGA0QgHARgSAAQgSAAgfgUg");
	this.shape_27.setTransform(-128.5,-15.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhABdIAMgXIhAAkIAfhDIhZgUIAHg4QAFghAHgVQAKggAMgWQAPgfANAAQAUgBAfARIAzAdIgDAaIAJgJQAIgFAFgBQAQgFAhgNQAegKAQAAQAuADgLBbQgBAFALAJIASANIgvCFIhWBIg");
	this.shape_28.setTransform(-96.3,49.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAkDGQgngRgqASQgnAQhOA/IAZg+QAQglAMgYQAvhdgIgYQgIgYhggzQgFgCgGgHIgLgLQCAghAlgsQA1hChEiEQA0ArAPAtQAOArgUAqQgbA3gFAfQgOBJBKAEQAwADAkAOQA6AWAKA0QAKA0gtArQgOANgXAPIgoAYIijBbg");
	this.shape_29.setTransform(-64.4,33.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhlCWIBkAMIh8g9QArgsgpggQgXgRgJgIQgPgOAFgPIgcANQgRgtASglQAOgfAogfQAQgMAbgRIAxgcIAWBDIAWhKICAA9IAxghIAbAYIg4BRQghAxgSAiQgWAtgbBFIguB2g");
	this.shape_30.setTransform(-139.8,38.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AABDcQgKgPgJgIQgRgRgcgLQgNgFgWgGIgmgKIgUAnIgPgEIAGgcQADgQAHgEQATgLAegNIAxgTIhBhJIAkgYQgLgTgZAAQgHgBgmAHQgcAFgOgHQgUgJgGghIBci6IBKBCQANgMAJAFQAJAFAmArIBNhKIACAVIA+gFQAjgDAaABQAHAAAKAKIARASIgTASQhJA+BXA/QgoBVggARQgfARhTgSIgWCyIgWgdg");
	this.shape_31.setTransform(-83.4,-8.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ai4DsQg1gBgQg2IAJgMQAxghATgcQAbgngHg2QgFgoBCgsQBBgrAzAGIAoh2IA5AAIhLBEIAXAbIBBAEQAmADAZAGQAoAKANAVQAQAZgXApQgLAUgKAlQgNAwgEAMQgJAYgPAiIgaA8QhDgahEADQg8ADhIAaQgpAPgZAAIgDgBgAB2jgIAMgMIANAMgAB2jgg");
	this.shape_32.setTransform(-127.3,-57.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ACgDFQgNgHgHgHQgsglhsgGQhvgFgvAiQgDACgBAIIgBALIACAAIgCACIAAgCIhbghIALg6QAGghABgXQADhGA+g4QA8g5BIAAQBnABBpgRQAIgBAighQAagaAeATIAMAFIgZAjIAUBdIg7CbIgbBzIgQgJg");
	this.shape_33.setTransform(-80.3,-52.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABHKjIDYhXIgIgWIh/AuIhFhyIAJgHIBAA0QAHgagNgQQgOgQhahGIDSgcIACgVIhJgLIh4gVQhFgNgwgPQgOgFgNggQgNgpgJgSIA7gRIgQg1IhigYIAGgdIBXANQAzAHAjADQAOABAUgHIAigNIgRghQgLgTgLgFQgdgPgvgQIhfggIBTgfIg2gTQgbgJgSgDQgKgCghADQgaABgIgHQgIgIACgZQAEgeAAgNIATgSIAvg0QAvgwgfgeQgwgdgRgRIA8icICGiwIhegdQg/gSgugGQgvgGhHABQhQACgnAAIgDgUQAMgEAZgLQAXgJAOACQAvAGBmARQBhAQA0AGQAbAEAkgEIA/gHICggYQBlgPA8gHQAOgCAXAGIAlALIgEAVIhoAAIBYAtIgZAGQgDAfgCBAQgDA5gLAkQgOAugfA7Ig4BmQgCAFgRAAQgQABgFgFQhChFhRgKQhKgJhZAnQgFACgLgCIgWgDQAPAbAZA0QAbAkA0gPIAfBKIAWgGIAAhoIB8BMIBMg2IAxBlQgqA1gHARQgQAqAlApIgoCMQgEAUADADQApAqAKBDQABAIAEBxQABAPAOATQAOASAQAHQAvAWAXAwQAEAIAYBMIgoAEQgWACgJAIQgnAgg3AyIhdBUIg8A0g");
	this.shape_34.setTransform(-40.2,-6.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AihHpICUg1IABgLIhZgLIhZgJQgVgCg3gCQgwgCgbgDQgHgBgIgOQgHgPACgHQATgyAaghQAEgGATgDIAtgHIhohhIENATQgshSgwgiQg6gnhSANIAIgbICFgiIgPgZIjWAmQglgpAQgqQAHgRAqg1IBbhqQA0gKAdA6IAaAzQAQAdAVANQAAhEAfgQQAcgNA4AcQAEACAMgIIATgOIgDADQAdgLABgTQABgOgQgbQgthOhaATIh2AaQhDANg4AEQASgZAQgpIAchGQAkhRBCgaQATgIATggIAfgyIBFAKIguAnIADARIEUgyIgoBEIBWgJIhNA1IAyAQIgyA0QA/AZAFBFIgBA8QgBAkAFAWIg6BJQgCAXgGAvQgFAqAAAcQABAdAHAsIAOBRQArgwA+AJQAkAFBFAXQANACAMAhQAJAXAGAiQAHAkAAAVQABAigMAMQgdAdghAUQgmAWgjAEQghAFgJgkQgFgtgHgRQgEgKABgRIACgZIBxgrIhYgaIAdgwQhDgGgSAPQgRAPgGBDQgBAOgFAcQgGAcgBAPQgEA0AOAmQAQArAoAgQAQANAQAdIAaAwIgXAOIguhaIl5CKg");
	this.shape_35.setTransform(28.9,-9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFJ1IB1h0QhTAYg9gLQg/gLg2gxQgogkABg9QAJhGgFghQgCgLAHgbQAGgYgFgKQgSgmgfgyIgzhUIgsArQgUATgDgCQgTgMhMgLQg8gIgYgmIA6hIQA9g0ATgbQAlg2gBhMIAfAhQANAOADAJQAEALADAfQACAbAHANQAdAyAoASQAJAEAVgOIAogZIhSgfIAGgeICrAOIAKgUIjKhmIDQgKQg/gyg3gEQgzgEhEAjQgrAXgNACQgiAFgZgnQCWknEigiQCbgSBBANQA7AMAdAxIhiBHQg6ArgoAbQg0AjgFA8QgGA6AlA7QAZApAeBLQAjBZAPAcQAGAMAdALQAbALAEgFQAYgeArgHQAZgFAxgEQBTgOgIBoQgbguglACQgSAAgwAYQgfAPgIAbQgFARACArQACAZgSAlIgfA/IgPAPIgLAUQgGAMABAHQAQBYg2BHQgaAihdBLQgRANggALQglALgSAGg");
	this.shape_36.setTransform(97.7,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.2,-105.2,374.5,210.5);


(lib.Tween74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMgOIAbARIgdAMg");
	this.shape.setTransform(123.1,59.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AAGgKIABgGIACACIgDAEIgCAYIgFAAIgHADg");
	this.shape_1.setTransform(121.1,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIgHIABgCIAQgPIAAAxg");
	this.shape_2.setTransform(127.3,50.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231916").s().p("AAognIgkA/IgrAQg");
	this.shape_3.setTransform(114.9,66.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231916").s().p("AgeAfIAehOIANAAIASAhIgCgCIgiBAg");
	this.shape_4.setTransform(125.1,54.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXBBQgDgIABgCQAjgnADgQQAEgbg3gPQAEgFAFgMQAFgKAGgDQAKgEAPgCIAggDQgHAdAFA8QgCA1g0AVIgGgRg");
	this.shape_5.setTransform(141.8,-8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5gZQAQgRBpgPIhQBWIghAdQgXhDAPgQg");
	this.shape_6.setTransform(18.4,-75.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3gZIAOgPIBXgMIAKAOIhVBbg");
	this.shape_7.setTransform(132.4,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABcApIADABIgCACIgBgDgAhegKQBogpAfAJQAdAJAWBKg");
	this.shape_8.setTransform(20.4,-34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhaBwICdjwIAYARIiZDxg");
	this.shape_9.setTransform(40.2,78.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhDA3QAZgQADggQAAgHgDgzQgDgjALgTQAQgZAtgIIg4AeIBEBTIgaAXQgOANAAALQgBAMAKARQAEAIARAVIAXAZQAMAQADASg");
	this.shape_10.setTransform(-163.2,39.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhsCmIAPhsIAjg/IAOgOIAGgCIAHAAIAegNIAihBIA7hKIARALIjPFQg");
	this.shape_11.setTransform(124.8,63.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiQC2IB1imIgxgOIA2g3QAgghAXgWQA7g3A1gdQg/AlguBVIgoBRQgYAxgWAdIhOBog");
	this.shape_12.setTransform(37,73.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BNQgmh7AVizQAJAoAHBRQAHBUAIAmQAbCLBoBFQhmgMgriJg");
	this.shape_13.setTransform(167.2,49.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjaArQAUgTAOgEQD9hLC/gdIoICpIAqgqg");
	this.shape_14.setTransform(82.4,60);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABYiKIAZAwIgfBQIgSAfIgQAQIADgDIhPBQIhUAag");
	this.shape_15.setTransform(113.8,59);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiIizIAKgCIAVBXIDthRIAFAPIhlAlQg6AWgnASQgQAIgNAUQgNATgCASQgBAMANARIATAWIgwB0IBhgKIADAPIhyAcg");
	this.shape_16.setTransform(21.1,78.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjIA/QgGgBgZgLQgCgBADgRQADgSAGgDQAkgSAYAGQBFAWBbgWQAygOBmgeQAZgFAygRIAHASIgQAOQgKAHgIACQjwA+iAAdIgJABQgJAAgNgEg");
	this.shape_17.setTransform(69.1,90);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAFBeQAAgUA3goIiThgIA4ggQAfgSASgOQAUgPAQAEQAQAFASAcIgJAMQgDAMgNAdQgJAZAGAHQAdAlgGArQgDAVgXA5Qg1gZABgUg");
	this.shape_18.setTransform(-160.6,-30.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEBKIgxgYQgdgNgVADIgLgUICshlIApB6QgdApgmAAQgRAAgTgIg");
	this.shape_19.setTransform(59.9,-8.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AChARQhdgPhBgBQhAAAheAPQhoATgxAGQAjgoBagUQBSgVBmAAQBnAABSAVQBZAVAiAnIiUgYg");
	this.shape_20.setTransform(39.1,-88.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiNBYIBLgoQAsgYAagUQAdgVAmgkIBAg+QAFAEAAABQAGBqgRAWQgQAYhoAiQgaAJgqALIhGAUg");
	this.shape_21.setTransform(131.5,26.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AmvC3QAHgwAigdQA/g2BtiAQBohtBqgfQAWgGBFgmQA4gfAiABQA1ABBOAVICCAmIgFAWIg3gJQgggGgUgJQhQgjg8ABQhJABhAAzQgWAShMAjQhAAegXAdQgYAggsAmQg0AogYAWQhaBOgQBWIgRBiQghg2AJg3g");
	this.shape_22.setTransform(-131.4,-60.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgzHLQgOgIgFgJQgthZgIgwQgLhNAzhFQAVgdANg6IAVhfIAUhDQALgmARgWQA2hEAGg7QAHhDgzhCQgGgHgFgNIgIgWQAAgCACgFIAFgNQBFAqAYBbQAZBcgxAxQg5A5gYBjQgFATgMBAQgKA1gKAfQgBAEAKAKIAUAVQgIAKgXANQgcARgJAHQgoAgAUA1IAhBWQARAzAHAsIgYgOg");
	this.shape_23.setTransform(-174.7,17.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AFECYQhUgDjMgPQgegCgNgJQg7gog+AGQg3AEhAApQgJAGgSgBQgSgBgIgHQhLhBgogzQgbgiAagxQAbgxBEgiIhAB9IBvCDIBFgeQArgTAbgGQBQgTA/A8IAng+IAKAFQAEACAAABQgCAdAOANQANAMAdABQBYADCKAJQASABAaAEIAsAIIABAYIg1AIQgaADgTAAIgIAAg");
	this.shape_24.setTransform(-143.3,80.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AG9BMQgigkgogOQglgNgyAEQiFARhCAGQhzAMhPgMQiLgUjygWQglgEgugcIhQg4QAoABBQAXQBHALAvgwIgmBJQBZgaBGAEQBQAFBDArQAMAGASgCIC9gJQBvgGBOgJQBSgKAwASQA8AWAcBFICvg2QggA7hHASQgWAGgSAAQgqAAgYgcg");
	this.shape_25.setTransform(-41.7,94.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ADxJ8QAcgtA1hdQAxhTAmg0QBBhXAchQQAghcgLhgQgFgpgbhFIgyhzQgfhGgLgvQgQg+gogoQgjgjg+gYQhignhlgxQhdguhgALQhXAKhdA5QgxAehHAvIh2BPQCbiJA7gmQCChSCFAFQA+ACBWAjQCSA5BXAzQAjAUAbAZQAfAcAOAeQBFCNA+C4QAfBagIBaQgJBbgvBTQgpBIg/BiIhsCnQgFAIgJAJIgQAPg");
	this.shape_26.setTransform(131.2,-40.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABnCBQgEgCgKAIIgMAJIhYiYIgeAVIBRBiQhFgRgdgUQgmgagDgxIgXAWQgPAQgNACQgLABgSgNQgWgSgLgHQgNAJAGAQQADAKANAXQAVAsg7AUIAEhVQADgtANgYQAPgcAmggIBFg6IAVBFIAwgzIBZBvIgHhWQA8gLAjAQQAjAQAGArIA2AAIgcA0IgWAxQgJAUgGA0QgHARgSAAQgSAAgfgUg");
	this.shape_27.setTransform(-128.5,-15.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhABdIAMgXIhAAkIAfhDIhZgUIAHg4QAFghAHgVQAKggAMgWQAPgfANAAQAUgBAfARIAzAdIgDAaIAJgJQAIgFAFgBQAQgFAhgNQAegKAQAAQAuADgLBbQgBAFALAJIASANIgvCFIhWBIg");
	this.shape_28.setTransform(-96.3,49.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAkDGQgngRgqASQgnAQhOA/IAZg+QAQglAMgYQAvhdgIgYQgIgYhggzQgFgCgGgHIgLgLQCAghAlgsQA1hChEiEQA0ArAPAtQAOArgUAqQgbA3gFAfQgOBJBKAEQAwADAkAOQA6AWAKA0QAKA0gtArQgOANgXAPIgoAYIijBbg");
	this.shape_29.setTransform(-64.4,33.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhlCWIBkAMIh8g9QArgsgpggQgXgRgJgIQgPgOAFgPIgcANQgRgtASglQAOgfAogfQAQgMAbgRIAxgcIAWBDIAWhKICAA9IAxghIAbAYIg4BRQghAxgSAiQgWAtgbBFIguB2g");
	this.shape_30.setTransform(-139.8,38.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AABDcQgKgPgJgIQgRgRgcgLQgNgFgWgGIgmgKIgUAnIgPgEIAGgcQADgQAHgEQATgLAegNIAxgTIhBhJIAkgYQgLgTgZAAQgHgBgmAHQgcAFgOgHQgUgJgGghIBci6IBKBCQANgMAJAFQAJAFAmArIBNhKIACAVIA+gFQAjgDAaABQAHAAAKAKIARASIgTASQhJA+BXA/QgoBVggARQgfARhTgSIgWCyIgWgdg");
	this.shape_31.setTransform(-83.4,-8.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ai4DsQg1gBgQg2IAJgMQAxghATgcQAbgngHg2QgFgoBCgsQBBgrAzAGIAoh2IA5AAIhLBEIAXAbIBBAEQAmADAZAGQAoAKANAVQAQAZgXApQgLAUgKAlQgNAwgEAMQgJAYgPAiIgaA8QhDgahEADQg8ADhIAaQgpAPgZAAIgDgBgAB2jgIAMgMIANAMgAB2jgg");
	this.shape_32.setTransform(-127.3,-57.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ACgDFQgNgHgHgHQgsglhsgGQhvgFgvAiQgDACgBAIIgBALIACAAIgCACIAAgCIhbghIALg6QAGghABgXQADhGA+g4QA8g5BIAAQBnABBpgRQAIgBAighQAagaAeATIAMAFIgZAjIAUBdIg7CbIgbBzIgQgJg");
	this.shape_33.setTransform(-80.3,-52.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABHKjIDYhXIgIgWIh/AuIhFhyIAJgHIBAA0QAHgagNgQQgOgQhahGIDSgcIACgVIhJgLIh4gVQhFgNgwgPQgOgFgNggQgNgpgJgSIA7gRIgQg1IhigYIAGgdIBXANQAzAHAjADQAOABAUgHIAigNIgRghQgLgTgLgFQgdgPgvgQIhfggIBTgfIg2gTQgbgJgSgDQgKgCghADQgaABgIgHQgIgIACgZQAEgeAAgNIATgSIAvg0QAvgwgfgeQgwgdgRgRIA8icICGiwIhegdQg/gSgugGQgvgGhHABQhQACgnAAIgDgUQAMgEAZgLQAXgJAOACQAvAGBmARQBhAQA0AGQAbAEAkgEIA/gHICggYQBlgPA8gHQAOgCAXAGIAlALIgEAVIhoAAIBYAtIgZAGQgDAfgCBAQgDA5gLAkQgOAugfA7Ig4BmQgCAFgRAAQgQABgFgFQhChFhRgKQhKgJhZAnQgFACgLgCIgWgDQAPAbAZA0QAbAkA0gPIAfBKIAWgGIAAhoIB8BMIBMg2IAxBlQgqA1gHARQgQAqAlApIgoCMQgEAUADADQApAqAKBDQABAIAEBxQABAPAOATQAOASAQAHQAvAWAXAwQAEAIAYBMIgoAEQgWACgJAIQgnAgg3AyIhdBUIg8A0g");
	this.shape_34.setTransform(-40.2,-6.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AihHpICUg1IABgLIhZgLIhZgJQgVgCg3gCQgwgCgbgDQgHgBgIgOQgHgPACgHQATgyAaghQAEgGATgDIAtgHIhohhIENATQgshSgwgiQg6gnhSANIAIgbICFgiIgPgZIjWAmQglgpAQgqQAHgRAqg1IBbhqQA0gKAdA6IAaAzQAQAdAVANQAAhEAfgQQAcgNA4AcQAEACAMgIIATgOIgDADQAdgLABgTQABgOgQgbQgthOhaATIh2AaQhDANg4AEQASgZAQgpIAchGQAkhRBCgaQATgIATggIAfgyIBFAKIguAnIADARIEUgyIgoBEIBWgJIhNA1IAyAQIgyA0QA/AZAFBFIgBA8QgBAkAFAWIg6BJQgCAXgGAvQgFAqAAAcQABAdAHAsIAOBRQArgwA+AJQAkAFBFAXQANACAMAhQAJAXAGAiQAHAkAAAVQABAigMAMQgdAdghAUQgmAWgjAEQghAFgJgkQgFgtgHgRQgEgKABgRIACgZIBxgrIhYgaIAdgwQhDgGgSAPQgRAPgGBDQgBAOgFAcQgGAcgBAPQgEA0AOAmQAQArAoAgQAQANAQAdIAaAwIgXAOIguhaIl5CKg");
	this.shape_35.setTransform(28.9,-9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFJ1IB1h0QhTAYg9gLQg/gLg2gxQgogkABg9QAJhGgFghQgCgLAHgbQAGgYgFgKQgSgmgfgyIgzhUIgsArQgUATgDgCQgTgMhMgLQg8gIgYgmIA6hIQA9g0ATgbQAlg2gBhMIAfAhQANAOADAJQAEALADAfQACAbAHANQAdAyAoASQAJAEAVgOIAogZIhSgfIAGgeICrAOIAKgUIjKhmIDQgKQg/gyg3gEQgzgEhEAjQgrAXgNACQgiAFgZgnQCWknEigiQCbgSBBANQA7AMAdAxIhiBHQg6ArgoAbQg0AjgFA8QgGA6AlA7QAZApAeBLQAjBZAPAcQAGAMAdALQAbALAEgFQAYgeArgHQAZgFAxgEQBTgOgIBoQgbguglACQgSAAgwAYQgfAPgIAbQgFARACArQACAZgSAlIgfA/IgPAPIgLAUQgGAMABAHQAQBYg2BHQgaAihdBLQgRANggALQglALgSAGg");
	this.shape_36.setTransform(97.7,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.2,-105.2,374.5,210.5);


(lib.Tween73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BA0AF").s().p("AgcABQgEgSAJgDQAGgDARAGQAcAJADAeg");
	this.shape.setTransform(-39,-35.7,0.787,0.787);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9BA0AF").s().p("AgYAeIATgfQALgUAOgIQAUA7g4AAIgIAAg");
	this.shape_1.setTransform(-50.6,-51.5,0.787,0.787);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#435160").s().p("AgIACQAAgCABgCIAQABQgEAEgGAAIgHgBg");
	this.shape_2.setTransform(32.5,-47,0.787,0.787);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435160").s().p("AAAAAIABAAIgCABg");
	this.shape_3.setTransform(24.6,-42.6,0.787,0.787);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#435160").s().p("AAAAAIABAAIgBABg");
	this.shape_4.setTransform(23.7,-42,0.787,0.787);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D6978").s().p("AgCgCIAKgCIADADQgCABABADIgUACQACgGAGgBg");
	this.shape_5.setTransform(31.1,-47.1,0.787,0.787);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D6978").s().p("AgDAFQgEgLAMACQABAJgHAAIgCAAg");
	this.shape_6.setTransform(28.8,-45.8,0.787,0.787);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D6978").s().p("AgQgHIAiACQgLAMgHABIAAAAQgJAAgHgPg");
	this.shape_7.setTransform(12.2,-34.7,0.787,0.787);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9BA0AF").s().p("AgCAiQgRAAgIgCQgOgDABgRQABgSAVgLQALgGAYgJQAIgEAJANQAIANgBANQAAATgMAHQgJAFgRAAIgFAAg");
	this.shape_8.setTransform(3.3,-49.3,0.787,0.787);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#435160").s().p("AhPAgQgIgBgDgJQgDgJAGgHIANgLQAggZAugBQAwgCAoAWIhPgBQgKAAgEABQgJABAAAIQgBADAHAHIAKALQgtAGgWAGQgIACgFAAIgFgBg");
	this.shape_9.setTransform(6.3,-42.3,0.787,0.787);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9BA0AF").s().p("AgeAeQgIgJgBgVQAAgUAIgJQAJgLAUABQAUgBAKAIQAMAIAAAVQgBAVgJAKQgKALgVABIgCAAQgTAAgIgKg");
	this.shape_10.setTransform(2,-60.7,0.787,0.787);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D6978").s().p("AgVAFIAigPIAJAOQgFgCgRAHQgEACgEAAQgHAAgGgGg");
	this.shape_11.setTransform(7.3,-13.8,0.787,0.787);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9BA0AF").s().p("AgBAAIADAAIgBABg");
	this.shape_12.setTransform(-22.4,20.3,0.787,0.787);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#435160").s().p("AgCgBIADgBIACACIgDADg");
	this.shape_13.setTransform(-46,-1.6,0.787,0.787);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#263443").s().p("AgCACIACgEIADACIgCADIgDgBg");
	this.shape_14.setTransform(-36.6,-19.8,0.787,0.787);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#263443").s().p("AgJAeQgIgDADgRIAGgmQAFABAMgDQAJAAgDARQgDANgBAcQgKADgFAAIgFgBg");
	this.shape_15.setTransform(-23.2,-21.2,0.787,0.787);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#263443").s().p("AAkB1QgdgGgRgcQgIgOgUgEIgjgGIgagFQgPgDgLgHQgagRALgeIAFgOQAEgIAIAAQAKABAEAOQAFAPAIAEQAMgHAAgOQgBgRACgHIAFgRQAEgJAJgCQAJgBADAHQACACADAMQAEALAEAEQAGAGAKgCQAIgCABgIIgBgPQgBgRAHgDQAGgCAOAGQATAIAMgDQAPgDAHgTQAHAEAAATQgBAPANAAQANAAAHgLQAFgKgCgQQgCgKALgRQAEgHAIgBQAHgCAHAFQAFAEgCAHIgFAKQgBAXgWAqQgVAogBAZIAAAUQABALAJAGQAgATgLAKQgHAHgaAFQgVAEgQAAQgKAAgIgCg");
	this.shape_16.setTransform(-38.3,-11.7,0.787,0.787);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D6978").s().p("AAAgHQAGAFgCADIgHAHg");
	this.shape_17.setTransform(-20.6,-8.9,0.787,0.787);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ADC5DC").s().p("AgIAJQgBgIAAgCQACgFAGgDIALATg");
	this.shape_18.setTransform(40.4,15.7,0.787,0.787);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5D6978").s().p("AADAOQgJgCgCgKQgBgKgBgFQAOACAHAOIgFAHQAAABgBABQAAAAAAABQgBAAAAABQAAAAgBAAIAAAAg");
	this.shape_19.setTransform(-2.1,25.7,0.787,0.787);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5D6978").s().p("AgIATQgFgDAAgCQgBgYAcgKQAAASgDAHQgEALgJAFIgBAAIgFgCg");
	this.shape_20.setTransform(-5.9,13.7,0.787,0.787);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ADC5DC").s().p("AgZACQgEgPAMgIQAKgGALAAQANAAAGAIQAIALgIALIgQATIgdAGQABgEgEgWg");
	this.shape_21.setTransform(26.6,22.5,0.787,0.787);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D6978").s().p("AAAAYQgXgTgNAEIgDgnIABgDIA6AVIACABQgCAKAJAKQAKAPACAEQgIAGgJAAQgLAAgNgKg");
	this.shape_22.setTransform(-38.2,-33,0.787,0.787);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ADC5DC").s().p("AAMApQgGgFgGgOQgKgYgWgBQgPgBgHgMQgFgKAEgMQAEgNAKAEIASAJIBRANIgBAUQgBALgCAHIgGAWQgEAMgMACIgEAAQgJAAgHgIg");
	this.shape_23.setTransform(35.2,18.5,0.787,0.787);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5D6978").s().p("AA8BVQgIgagHgHQABgcADgOQADgPgJgBQgNADgFAAQgXg0g1gKQgUgCgJgDQgOgGgBgSQAHgQADgBQADgCAJAHQALAJAGgCQArgMAiAUQAaAPAbAoQAoA7gfBaQgPgGgIgWg");
	this.shape_24.setTransform(-25.9,-23.1,0.787,0.787);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ADC5DC").s().p("AA+BmQgBgKgMgEQgdgJgcgbQggghgSgRQgKAagfADQgOABgKgKQgGgGgGgNQgFgKAKgEQAGgCAOgCQAYgHALgYQAEgHAJgkQAIgdAYgCQAOgBAaAFQAagCAIADQATAGABAaQABAXAUAcQAbAlAFAKQADAIANALQAKAMgKAOQgWAfgcgZQgHAMAEAQQADATgBAFIgTADIgBgTg");
	this.shape_25.setTransform(11.2,20.4,0.787,0.787);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ADC5DC").s().p("AB0EpQgPgJgLgCQglgRgSgEQghgGgQApQgBADgKACIgRACIgBgCQgDgfgdgJQgRgFgGACQgIADADATIgBADQgJAKgLgEQgNgHgHgBIgPgEQgJgDgJAEQglASgVgPQgVgPAAgsQAAgTgDgeIgEgxIARgQQBCAFgVhAIAHgVQAPgCAZgOQAZgPAPgBQAOgDACgPQADgMgFgRQgFgSAGgOQAFgPAQgDQAfgGASgZQANgSAKggQAKgjAcgPQASgKAogEQAYgCAHgDQAOgHACgUQACgkAkgBQAegCAPACQAZADANAOQAHAHgCAUQgDAXgOANIgRATQgegBgPAWQgLAOgFAeQgNBTAGA/QAJBYgEBFQgDBUgWBJIgZgQg");
	this.shape_26.setTransform(-33.2,-58,0.787,0.787);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5D6978").s().p("AAMgHQgFAOgSABQAFgQASABg");
	this.shape_27.setTransform(-32.6,-81.1,0.787,0.787);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5D6978").s().p("AAJA8QgdgDgMgXQgHgOgEggQgDgaAYgNQASgKAPACQAVADAHAWQAFANAAAeQAAAdgDAHQgGAPgUAAIgGAAg");
	this.shape_28.setTransform(-66.9,-12,0.787,0.787);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5D6978").s().p("AiFC9QAAgJADgDQAvgjAnhTQAuhjAYgdQARgTAUghIAig3QAKgOAFgFQAKgJANAAQgFA2gmAoQgjAlgSAfQgXApgDApIgHAUQgNAJgLATIgUAgIgRAQQgQAGgWAeQgVAcgUAGIABgRg");
	this.shape_29.setTransform(-49.6,-58.6,0.787,0.787);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9BA0AF").s().p("AASBzQg0gMgagIQgugOgYgdIAUhiQAUgGAVgcQAXgdAPgHIAEAyQADAeAAASQAAArAVAPQAUAPAmgSQAIgDAJACIAPAFQAHABANAGQAMAEAJgKIADApIgCAKQghgTgUABQgaAAgQAkQgCAGgHAAIgHgCg");
	this.shape_30.setTransform(-51.5,-38.8,0.787,0.787);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#435160").s().p("ABeArQgWgJgQABIgtgMQgGgTgTgGIgjgJIgqgHQgYgEgPgLQAGgPAPgFQALgEAPACQAfAFA/gDQA4ADAhAgQAjAjgFAoQgHgCgdgMg");
	this.shape_31.setTransform(13.8,-91.2,0.787,0.787);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5D6978").s().p("AjuAOQALgLAYgKQA8gcBKgHQA3gFBSAGQASABAJgJIATAAQAPALAYAEIAqAHIAjAJQAUAHAGASQgVAEgegHQgrgKgHAAQhogMhNAGQhiAIhQAkIgaAKIgZAIQADgWAOgOg");
	this.shape_32.setTransform(-5.5,-90,0.787,0.787);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5D6978").s().p("AgCAFIgBgKIAHAKIgDAAg");
	this.shape_33.setTransform(9.4,-13,0.787,0.787);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5D6978").s().p("AgDgIQAEAAACADIABAHQgBAFgEACg");
	this.shape_34.setTransform(10.3,-11.4,0.787,0.787);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5D6978").s().p("AgKgTQARAOACAEQAGAJgUAMg");
	this.shape_35.setTransform(37.8,-43.3,0.787,0.787);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5D6978").s().p("AgNgJQAWAAAFASIgIABQgSAAgBgTg");
	this.shape_36.setTransform(25.3,-75.7,0.787,0.787);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5D6978").s().p("AgPgaQAeAVABAIQgBAJgbAPg");
	this.shape_37.setTransform(40,-56.5,0.787,0.787);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5D6978").s().p("AgDgMIAYAIQAPAEAIgBQgOARgcgCQglgDgJADQAMghAdAHg");
	this.shape_38.setTransform(28.2,-35.9,0.787,0.787);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9BA0AF").s().p("AAAAVQgCgCgEAAQgBgEgDgDIgJgLIgIgOIA3gVIAABGg");
	this.shape_39.setTransform(10.6,-13.6,0.787,0.787);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5D6978").s().p("ABYDDIgDgCQABhugyiGQgNgjgigZQgMgJg3gdQgSgKgIgJQgLgLgBgQQAMAHApgEQAjgEARAUQgSAJAAALQgBALARAIQBAAgAbBCQAQAnAMBaIAMBeIgDADQgEABgCAFIgFADg");
	this.shape_40.setTransform(25,-62.6,0.787,0.787);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#263443").s().p("AiGA8QAagdAZgMQAdgOAgADQAeAEABgMQABgHgPgVIgLgLQgGgHAAgEQABgIAIgBQAFgBAJAAIBPABIAFACQAJALAZAQQAUARgFAYIgqAWQgFAAAAAFIgGAGIgjgCQgXALgMADQgUAFgTgSQgIgIgVAHIgkAMIgSAGQgGABgHAAIgKgBg");
	this.shape_41.setTransform(7.2,-38.6,0.787,0.787);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#263443").s().p("AhZAAIAIgFIACgCQADgEAFgBIADgCIAvgjQALACgBgMIANgGIAUgCQALAEAGgIIAGgEQAEgBABgFIADgDQAQAAAIAOQAEAJAGASIAFApIAKAjQAFAUgFABIgoASQgYALgSgOQgJACgOgFIgYgIQgdgIgMAjQg6gkAlgxg");
	this.shape_42.setTransform(30.1,-41.5,0.787,0.787);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5D6978").s().p("ABKCaIgfg+QgQglgBggQADgcgWgXIgpgkQgNgLgWgJIgogNQgmgMgFgMQgFgNAWghQAQgBAWAJQAdAMAHABIAnAVQAdATAaArIAtBHQAMAPAPAkQAQAfAdAHQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABQABAEgBABQgCAEAAARQABANgKAAQgHAAgcAXQgIAGgGAAQgLAAgIgOg");
	this.shape_43.setTransform(28.9,-75.2,0.787,0.787);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5D6978").s().p("AAEEbQgMAAgIgRQgSgigFgMQgKgbABgZQAAgIgKgnQgIgdALgTIgKgXQgHgOgPAdQgFAIgVADQgXADgGgTQgRgRgHgLQgNgTAkgOIAbgLQALgBAdAOQgJgUgBgZQAAgRADgaQADgQgGgJQgGgJgRgFQhEgUAMg9QABgJgEgIIgLgNQgVgXAfgXQAAAXATAJQASAKAFAbQAIA0ANAGQANAGAxgYQAUgKAIALQAQAaAjAIIA9AOQAvATAOAbQAOAcgSAtQgPAjABASQABAbAcAXQAbAWgJAlQgFAVgQAoQgEATgVABIgkgCQgcAAgQAGQgVAHgNAVQgJAPgMAAIgBgBg");
	this.shape_44.setTransform(52.4,-32.1,0.787,0.787);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9BA0AF").s().p("AneCQQASggAigkQAngpAEg1IBFhIQATgBAFgPIBMg2IAZgJIAagKQBQgkBhgIQBOgHBoAMQAHABArAKQAeAIAVgEIAtAMQgVAhAFANQAFAMAmAMIAoANQAWAJAMALIAqAkQAWAXgCAdIg7gVQgFgTgXAAIgCgBQgQgTgjADQgpAEgNgHQhHgHh1ANQiKARgwAAQAOgNACgXQADgUgHgHQgOgOgZgDQgPgCgeACQgjABgDAkQgBAUgOAHQgIADgXACQgoAEgTAKQgbAPgLAiQgKAggNASQgTAZgfAGQgPADgGAPQgFAOAFASQAEARgCAMQgDAPgNADQgQACgZAPQgZAOgOACQADgqAXgog");
	this.shape_45.setTransform(-8.7,-73.3,0.787,0.787);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C48175").s().p("Aj+FkQgMgOgRgYIgbgnQhDhYAph7QAKghABgoQAAgegGgsQgGgtAAhBQABhJAAgkQAAgUAMgaQARgiADgIIARgUQAwAACLgQQB0gOBHAIQACAQALALQAIAJASAKQA3AdAMAJQAjAZAMAjQAzCHgBBuIgLABQgGACgCAGIgOAHQgNgCAEAMIgwAiIgCgBIgBADQgFABgCAEIgDgBIAAADIgIAEQgRAAgpgMQgkgKgWACIgFgBQgogWguACQgwACgfAYIgNALQgGAHADAJQADAJAIACQAGABALgDQAWgFAugGQAQAVgBAIQgBAMgfgEQgggEgdAOQgZANgaAdQALACAMgDIASgFIAkgMQAVgIAIAJQATASAVgFQALgDAXgMQAIARAJgBQAIAAAKgOIAGgFQAFAAAAgFIAqgXQAdAKAZAgIArA5QAEgqAhgBQASgBAlAFQAWgCATBEQATBEgRAUQgNAPgUAAQgSAAgQgMQgSgNgRAAQgPgBgXAJQgSAGghABQgpABgLACQgTAAgHADQgOAGAOAYQAEAHgLAEQgOADgFADIhZAlIgHABQgYgKgPAQQgNAXgIAKIgBAAQhRAAhBhMgAg1hfQgZAJgMAGQgUALgCATQgBARAPADQAIACAQAAQAWABAKgGQANgHAAgTQAAgOgIgNQgGgKgGAAIgEABgAh3juQgIAKAAAVQABAUAIAKQAJAKAUgBQAWAAAKgLQAJgLABgWQAAgUgMgJQgKgHgVABIgFAAQgQAAgIAJg");
	this.shape_46.setTransform(8.9,-44.3,0.787,0.787);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9BA0AF").s().p("AAAgCIACACIgBADQgEgCADgDg");
	this.shape_47.setTransform(9.9,86.2,0.787,0.787);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#435160").s().p("AgBgBIABgDQADAEgCAFg");
	this.shape_48.setTransform(-25.9,20.1,0.787,0.787);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9BA0AF").s().p("AgFgDQAAgGAMAAIgHATQgGgKABgDg");
	this.shape_49.setTransform(-62.3,95.3,0.787,0.787);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5D6978").s().p("AgJAHIATgNQABAJgGADQgDABgDAAIgIAAg");
	this.shape_50.setTransform(-31.2,96.2,0.787,0.787);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9BA0AF").s().p("AgIgIQAPACACAPQgPgDgCgOg");
	this.shape_51.setTransform(9.1,41.6,0.787,0.787);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9BA0AF").s().p("AgLgOQAJgCAGAFIAMALIgSANIgNACg");
	this.shape_52.setTransform(-31.7,95.7,0.787,0.787);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9BA0AF").s().p("AAEgSIgDAlQgKgTANgSg");
	this.shape_53.setTransform(9.4,82.6,0.787,0.787);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ADC5DC").s().p("AgNABQgBgKAGADQAGAEgCABIAAAAIAAAAQAJgGAEgBQAFAAAAAHQAAAJgNABIgCAAQgLAAgBgIg");
	this.shape_54.setTransform(-28.3,95.5,0.787,0.787);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5D6978").s().p("AgDASQgGgBgBgFQgBgFAEgEIASgUIgFAdIgFAEIgEACIAAAAg");
	this.shape_55.setTransform(-33.5,96,0.787,0.787);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9BA0AF").s().p("AACgZQAGAegJAUQgHgeAKgUg");
	this.shape_56.setTransform(16.4,50.1,0.787,0.787);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5D6978").s().p("AgEgPQASAKgLAVQgNgNAGgSg");
	this.shape_57.setTransform(11.9,93.2,0.787,0.787);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9BA0AF").s().p("AgBgNQAKAOgDANQgTgKAMgRg");
	this.shape_58.setTransform(10.6,89.4,0.787,0.787);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#ADC5DC").s().p("AgEAHQgDgJgFACIAAgJIANgCQAIAAAEAGQABACgDAFQgCAGgEACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgCgFg");
	this.shape_59.setTransform(-41.8,96.2,0.787,0.787);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#435160").s().p("AgEACIADgHIAGAEIgDAHIgGgEg");
	this.shape_60.setTransform(9.1,-6,0.787,0.787);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ADC5DC").s().p("AgIgCIAIgTQALAHgCANIgCAXQgTgCAEgWg");
	this.shape_61.setTransform(-61.7,96.2,0.787,0.787);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9BA0AF").s().p("AgSgIQAagDAMAUIgnABg");
	this.shape_62.setTransform(6.7,40.1,0.787,0.787);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9BA0AF").s().p("AgWAAQgBgIAJgBIAOAAIAXABIAAAIQgEAIgHgBIgMgCIgOAFIgCABQgFAAgBgLg");
	this.shape_63.setTransform(-44.7,96.1,0.787,0.787);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5D6978").s().p("AgTAFQAYgsAPAxIgUAFIgEABQgKAAgFgLg");
	this.shape_64.setTransform(6.6,32.3,0.787,0.787);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5D6978").s().p("AgBAJQgOgGgIgJQAYgPALAFQAJAFADAeIgZgKg");
	this.shape_65.setTransform(27.5,-17.8,0.787,0.787);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5D6978").s().p("AgCAVQgJgOgGgGIgCgiQAgABAGAWQADAJgDAjQgMgCgJgLg");
	this.shape_66.setTransform(1.8,29,0.787,0.787);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9BA0AF").s().p("AgFAJQgWgLgKgVQA2ACAVAtQgggJgLgGg");
	this.shape_67.setTransform(13.6,44.5,0.787,0.787);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#435160").s().p("AgkAZIAPgyQAbAbAfgBQgUAZgmAAIgPgBg");
	this.shape_68.setTransform(33,32.4,0.787,0.787);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5D6978").s().p("AgUAHQgFgKAEgVIAsADIgRAuQgUgEgGgOg");
	this.shape_69.setTransform(14.1,98.6,0.787,0.787);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#435160").s().p("AgHgSQAGgBAIgLQAIgKAIABQANAZgSAZQgRAbgdACg");
	this.shape_70.setTransform(3.4,-4.3,0.787,0.787);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#9BA0AF").s().p("AgKguIAHgBQAHAKANgGQARgGAFACIABAKIghAiQgPAQAAAPQgIgBgJAKQgIALgGABQAKg+ATghg");
	this.shape_71.setTransform(6,-9.6,0.787,0.787);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9BA0AF").s().p("AgPADQgDg2gMgdQABgFgCgFQADgCACADIAmBZIAIAPQADAKgGAGQgSASALAFIAWAIIglAeQgIgagCg/g");
	this.shape_72.setTransform(-23.3,26.8,0.787,0.787);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5D6978").s().p("AgVAYQgNgYgLgJIgLgTQADgCAOACQAKABAEgKQASgFAVAHIAmAQIAFAcQgEAMgNAIIgYALIgIAAQgRAAgMgQg");
	this.shape_73.setTransform(44.8,17.3,0.787,0.787);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#435160").s().p("AAWAuQgWgHgSAFIg4g3IgCgcQAIgTAOgDQANgDAKAPQAPAWAdAVIAxAiQAPAMgBAHQgBAIgQAHIglgQg");
	this.shape_74.setTransform(44.2,10.8,0.787,0.787);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#9BA0AF").s().p("AgxhMQAJgBALAJIASAQQAUAQAPgiQADAKgDAUQABARAVAIQAMAFgcApQgcArgSADg");
	this.shape_75.setTransform(-14.3,94.5,0.787,0.787);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#ADC5DC").s().p("AgsBLQgLgFASgTQAGgFgDgKIgHgQIgnhYQgBgJAGgBIALgEIAXAXIAqAcQgYBBBHgDQAFAAAJAFIAUALIhnAkIgXgIg");
	this.shape_76.setTransform(-19,25.2,0.787,0.787);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5D6978").s().p("AhfCDQAVgRACgTQABgMgIgaQgJgbAXgDQANgCAPAFQAoAMARgSQAOgPABgnIAGgdQAEgRgIgMQAHgJAOgXQAPgQAXAJQgTAhgKA/IgUA6QgNANALAOQgEAOgKgBIgSgFQgPAEgfAjQgbAeggAAIgDAAg");
	this.shape_77.setTransform(-2.5,-3.3,0.787,0.787);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#435160").s().p("AhLBjQACgMgLgOQgNgQAAgJQAmALAggZQASgPAhgiQAKgIgEgMIgHgUIAYgLQANgIAEgMIAPgJQAJgFAKADQgKAdAAAEQgDASALAOQACACAAAHQAAAHgCABQgTAIggAqQgbAlgfACQgLABgUAMQgSAMgMAAIgBAAg");
	this.shape_78.setTransform(44.3,24.8,0.787,0.787);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5D6978").s().p("AB9A4QgNgHgEgHQgWgqgtgOQgcgHg6ACQgfABgTgCQgagDgVgLQgIgFAAgMQABgPgCgDQAQgDAZAHQAdAIALgBIAkAAQAVgCANgMQAdAUAqATIBNAhIACAcQgLAGADAMIAKAbIgbgRg");
	this.shape_79.setTransform(26.5,7.7,0.787,0.787);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#435160").s().p("ABcB3QgTgUgqgYQgtgagRgPQgHgHgMAGQgKAEgJALIgrgcIABgCIgDAAIgVgTQAThCg7g7QATgTATAGQAQAGAEATQAEASARAZQASAaAEANIAIAZQAHAIAQgWQAAgBAAAAQABAAAAAAQABAAAAAAQABgBABAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAJAWAnAIQApAKALAUQAGAMAUAAIAhAAIAJAYQABAFABALQACAJAKACQAAAAAAAAQABAAAAAAQABgBAAgBQABAAAAgBIAFgHIASADIACAkQgTALgSAAQgZAAgWgWg");
	this.shape_80.setTransform(-13.5,18.9,0.787,0.787);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5D6978").s().p("Ai5AwQAFgMANgEQAFgCATgBQAmgDALgZIATgCQAQARAagBQAQAAAdgGQARgBABgaQABgbgQgTIAegHQAWAYgGAqQAQgoAxgDQAPgBAKALQAFAFAIASQAAAJANAPQALAOgCAMIgegDQgeACgcgcIgQAyQghAJg8AAQhDgBgcAGQgJACgIAAQgfAAgfgYg");
	this.shape_81.setTransform(23.6,29.9,0.787,0.787);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#435160").s().p("AidBHQgbgiAIgbIABgKIAAgJIASAFQAKAAAEgOQAfAZAegPQARgKAfgcQAqgeAXgKQAngRArAHQgQAQgmAMQglAMgOASQANAAA+AKQAsAHAegLQAKgEAGAKQADAGADAPQgNALgVACIgkABQgMAAgdgIQgZgGgPAEQgZAKgEAUQgKAighAPIg9AUQgEABgFAAQgVAAgWgcg");
	this.shape_82.setTransform(12.4,2.4,0.787,0.787);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5D6978").s().p("ACHDBQgTgBgHgMQgKgUgpgJQgogJgKgXQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBABgBAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgPAYgHgKIgIgYQgEgNgTgbQgQgYgEgSQgEgTgQgGQgUgGgSASIgWgLQgNgGgBgNQAdgRAIgMQANgTgQgcQgHgMADgFQACgFAOgEIAmgKQARgKgQggQgHgOAOgFQAHgDATgBQAiAAASAZQARAagFAsIgCAfQgEARgaAAQgIgBgMATIgZAjQAlgDASAOQAQANAGAhQAGAjArAGQA2AHAVARQAXATAGAwIgTAAIgOAAg");
	this.shape_83.setTransform(-16.9,7.6,0.787,0.787);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5D6978").s().p("AhQEVQgjgCgOgaQgPgZAPgfQASggAAgfQABgegQghQgNgaADgpIAFhEQgFi0gFg/QAYAdAuAOQAaAIA0AMQAMAFAEgJQAQgkAaAAQAUgBAhATIAAALQAAAHgCABIg0AXQgfAOgJAbQgagPgWAUIgkAiQgTAMgEAPQgDAQAKAYQAUAyAnAoQAgAjAyAfQAQALAFAHQAJAMgCASQgGAqAHAMQAGALArAWQgdAFgNAUQgJANgEAeIhPAiQgegeg7gFgAA4BpIACAGIADgDIgCgEg");
	this.shape_84.setTransform(-50.6,-10.1,0.787,0.787);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#435160").s().p("Ag3DtQANgVAdgEQgqgWgHgLQgHgMAGgqQACgSgIgMQgGgIgPgKQgzggghgiQgmgogVgyQgKgYAEgQQADgQATgLIAkgiQAWgUAcAPQAIgbAfgOIA0gXQACgBAAgHIAAgLIADgKQANgEAXATQAWARASgNIAUACQABASAOAFQAJADAUACQA2ALAXAzIgGAnQgDARAIADQAGACAPgEQAHAGAIAaQAIAWAPAGQAEAPgGARQgDAIgLATIgEAQQACAFgBAEQgTABgHADQgOAFAHAOQARAggSAKIgmAKQgOAEgCAFQgDAFAHAMQARAcgOATQgIAMgdARQgVgQgUAKIggAYQgcAWgRAKQgbAPgaAEQAEgeAJgNgAiHgkIgFAOQgLAeAaARQALAHAPADIAaAFIAjAGQAUAEAIAOQARAcAdAGQAUAEAjgGQAagFAHgHQALgKgggTQgJgGgBgLIAAgUQABgYAVgpQAWgqABgXIAFgKQACgHgFgEQgHgFgHACQgIABgEAHQgLARACAKQACAQgFAKQgHALgNAAQgNAAABgPQAAgTgHgEQgHATgPADQgMADgTgIQgOgGgGACQgHADABARIABAPQgBAIgIACQgKACgGgGQgEgEgEgLQgDgMgCgCQgDgHgJABQgJACgEAJIgFARQgCAHABARQAAAPgMAHQgIgEgFgQQgEgOgKgBIgBAAQgHAAgEAIgAASh2IAEABIACgEIgDgCg");
	this.shape_85.setTransform(-38.2,-10.2,0.787,0.787);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9BA0AF").s().p("AAoKpQgQgygYAtIgWgNQADgkgDgJQgGgWghgBIgSgEQgHgPgPgCIgJgXQgGgwgYgTQgUgRg2gHQgsgGgFgjQgGghgRgNQgTgOgkADIAZgkQAMgTAIABQAaAAAFgRIABgfQAGgsgSgaQgSgZgiAAQAAgEgBgFIAIgHQACgEgGgFQALgUACgIQAGgRgDgPQAehZgog8QgagngbgQQgigUgrANQgHABgKgIQgJgIgDACQgEACgHAQIgUgCQgBgFgKgOQgJgLABgKIARgCQAKgCABgDQARgpAhAGQASAEAlARQALACAPAJIAZAQQAWhJADhUQAEhFgJhZQgGg/ANhTQAFgeALgOQAPgWAeABQgCAIgRAjQgNAaAAATQABAlgCBJQAABBAGAsQAGAtAAAdQAAApgLAhQgoB8BCBYIAcAlQARAZALANQBCBNBRgBQAJAMgEARIgGAdQgBAogOAPQgRASgpgMQgPgFgNACQgXADAJAbQAIAagBAMQgCATgWARQAjABAcgfQAegjARgDIAAAKIgBAJQgJAbAbAjQAcAiAZgIIA8gTQAhgQAJgiQAFgTAZgMQACADgBAPQAAALAJAFQAUAMAbADQASACAfgBQA7gCAcAHQAtANAXAsQADAHANAHIAbARIgKgbQgDgMALgHIA4A4QgDALgLgCQgOgCgDACQgGADgCAFQAAADABAIIhSgNIgSgJQgKgEgEANQgEAMAFAKQAHAMAPABQAWABALAZQAGAOAGAFQAIAJAMgBQAMgCAEgMIAGgWQACgHABgMIABgUIATABQAKAIAOAZQAOAUAXgEIAHAUQAEANgKAHQghAkgTAOQggAagmgMQgHgRgGgGQgJgKgQABQgwACgRApQAHgqgXgYIARgTQAIgMgIgLQgHgIgNAAQgMAAgKAGQgLAIADAQQAFAWgBAEQAPAUgBAbQgBAagRACQgeAFgPABQgaAAgRgRQACgGgEgTQgDgQAHgMQAbAaAWggQAKgOgJgLQgOgMgDgHQgEgKgbgmQgUgdgBgXQgCgagTgGQgHgCgaABQgcgEgNABQgYABgIAeQgKAjgEAIQgKAXgXAHQgOACgGADQgKADAFAMQAGANAFAFQAKALAPgCQAegDAKgZQASAQAgAiQAdAbAcAJQAMADACALIABASQgMAaglACQgTACgGACQgMAEgGAMgAiYHBQAAACAEADQAFADABgBQALgFAEgLQACgIAAgSQgcAKABAZg");
	this.shape_86.setTransform(5.1,-20.6,0.787,0.787);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#435160").s().p("AnyqoQAbgBAvgYQAwgXAcgBQADAAAGgEQAGgDADABQA7ASBjgNQB4gQAnADQANABBOALQA4AJAmgDQAsgCAWgDQAkgFAcgLQBOgeBAAJQAaADALAHQASALAAAYQgJAJgSgBQhTgGg3AGQhKAHg8AbQgYALgLALQgPAPgCAWIhMA2QgTgBgFARIhEBIQgNAAgJAJQgGAFgJAPIgjA2QgUAhgRAUQgXAcgwBkQgmBUgwAiQgDADAAAJIgBARIgUBiQAFA/AFCzIgFBFQgDAqANAaQAQAhgBAeQAAAfgSAgQgPAeAPAaQAOAaAjACQA7AFAfAeQgkAXg/ASQhUAXgUAIQgaALgpAMIhFAVgAmOEKQgYANADAaQAEAhAHAOQANAXAdADQAZACAHgRQADgHABgdQgBgfgFgNQgHgWgVgDIgGAAQgNAAgPAIg");
	this.shape_87.setTransform(-37.3,-37,0.787,0.787);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#435160").s().p("AgTgWQAiAAAEACQATAGgIAfQgNAAgGABQgOAFgKAAQghAAAbgtg");
	this.shape_88.setTransform(75.2,-99.9,0.787,0.787);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#263443").s().p("AEtBUQAEgogjgjQggggg5gCQhAADgfgFQgPgDgLAEQgPAFgFAPIgUAAQAAgYgSgLQgJgHgbgDQhAgJhNAeQgcALglAFQgVADgtACQglADg4gJQhQgLgNgBQgngDh3AQQhjANg8gSQgDgBgGADQgGAEgDAAQgbABgwAWQgvAYgbABIgDiLId1AAQgjA7BCgSQAGgBANAAIAAA8QgugRhOgDQhhgFgdgFIgKgBQgHAAgCgCQgmgdg2AJQg/ARgeABQgjACgbASQgdASgTAfQgIAOgfAWQgdAUgIATg");
	this.shape_89.setTransform(0.4,-93.4,0.787,0.787);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#ADC5DC").s().p("APGUJI+CABQgSAAgFgGQgFgFAAgRMAABgnkQgCgIAAgFQgBgIANABIACY2QgBLfgBDSQAAAVAJAHQAHAGAVAAILkgBQATgDAcgrQAcgrgMgEQgVgIgBgSQADgUgDgJQAlg+gFhVIgViUQgQiGAGhfQAEhCATgTQATgTBFgEIAJgFQASgMAWABQAQABAYAKIAKAFIAKACIAAATIAngBIACACQACAPARADIAKAEQAKAVAWAMQAMAGAgAJIgBAVQgLATAIAgQgIAigMBKQgKBHgKAlIgTBNQgMAsgNAfQgPASAMAUIAFAXQgDAFAFACIAGAXQgMASAUAKIAGATQgHASAOAOIADAcQgEAVAFALQAGAOAVAEIMgABQABAMgIAAIgNgCg");
	this.shape_90.setTransform(-0.1,0,0.787,0.787);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#435160").s().p("AEXKkQhxgcg7gUQgZgIgZgYQgigggHgGQgZgRgKgZQgHgQgGgkQgEgbgbgJIgvgGIgcgDQgOgEgDgKQgHgWAGgNQAIgSAdAAIgogkQgDgegJgGQgLgFgZAQIgxAKQggAGgGAGQgLALAbAcQAUAUgLATQgKATgeABQgwAIgYABQgqACgbgZIAhgiIAEABIADgBQAEAEABADIABASQAGgCAAgFIAAgIIAcAOIAAhHQAEgDAOgDQALgEgEgHQgOgYAOgGQAIgDASAAQALgCApgBQAhgBASgGQAXgJAPABQARAAASANQAQAMATAAQATAAANgPQASgUgUhEQgThEgVACQgmgFgRABQgiABgEAqIgrg5QgZgggcgKQAEgYgTgRQgagQgJgLQAWgCAlAKQApAMAQAAQgkAyA5AkQAJgDAmACQAcACAOgSQATAOAYgKIAngSQAGgBgFgVIgLgiQAVgMgGgLQgCgEgRgOQgGgSgEgJQgIgOgQAAIgMheQgMhbgQgnQgbhChBggQgRgIABgLQAAgLASgJIABABQACAXAbgEIA6AVQABAfAPAlIAgA+QANAZATgQQAdgXAGAAQALAAgBgNQAAgSABgDQACgCgCgDQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgdgHgRgeQgOgkgNgQIgshHQgagrgegUQAIgSAdgVQAfgVAIgPQATggAdgSQAbgRAjgCQAdgCA/gRQA2gJAmAdQACACAHABIAKAAQAdAGBhAEQBOAEAuARIAAVtQg1gRh3gegABBCnIAKAWQgKAUAHAdQALAmgBAIQgBAZAKAbQAFANASAiQAJAQAMABQANAAAJgPQAOgUAUgIQAQgFAcAAIAkACQAWgCADgSQAQgpAFgUQAJglgbgXQgcgWgBgbQgBgTAPgkQASgsgOgcQgOgbgvgSIg9gOQgkgJgQgZQgHgLgUAJQgyAZgNgGQgNgHgIgzQgEgcgSgJQgTgJAAgXQAcgPABgJQgBgJgfgVIADA2QgeAWAVAYIAKANQAFAIgCAJQgLA9BCATQARAGAGAHQAGAJgDAQQgDAbABARQAAAYAJAWQgdgPgKAAIgaALQglAPANAUQAHAKASASQAFASAXgDQAUgCAFgJQAKgTAHAAQADAAACAFg");
	this.shape_91.setTransform(42,-41.2,0.787,0.787);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#263443").s().p("AC0LyIARgvIgtgCIgCgcQALgXgTgKIgGgSQADgNgLgPIgGgYIACgEIgEgCIgFgYIADglQANggAMgrIAThNQAKglAKhHQAMhKAIgjQAKgUgGgfIAAgUQgVgvg3gBIgKgEQgCgPgRgDIgCgBQgMgVgaADIgKgCIgKgGQgZgJgQgBQgWgCgSANIgJAFQhFAEgSATQgUARgEBDQgGBeAQCGIAVCVQAFBVglA+QgPAigVgRIgSgQQgLgIgJAAIAiCaIrlACQgVAAgHgGQgJgHAAgVQABjTACrdIBEgVQApgMAbgLQATgIBUgYQBAgRAjgXIBPgjQAagDAbgPQASgKAcgWIAhgYQATgKAVAPQABAOAOAHIAVALQA7A7gSBCIgMADQgGACABAIQgCgDgEACIgCAEIADAGQANAdADA4QABA+AIAbIAngfIBogkIgUgLQgJgEgFAAQhIADAZhDQAKgKAJgFQAMgGAHAIQARAOAuAaQAqAYAUAUQAlAnAtgcQAGAGAKAOQAJAKAMACIAWAOQAHANANgDIAUgGIAKAJQAoAcAngHQAdgGBCABQA+ABAggJQAzAFAXgeIAfADQAMAAASgMQAUgMALAAQAggCAbgmQAggrATgHQACgCABgGQgBgHgBgDQgMgOADgSQAAgEALgcQgLgEgJAFIgPAJIgFgdQAQgHABgIQABgHgPgMIgygjQgdgWgPgWQgKgOgNADQgOADgIASIhNggQgqgTgegVQgDgPgDgFQgGgLgJAEQgfAMgsgIQg+gKgNAAQAOgSAlgMQAngMAPgQQgqgHgoARQgXAKgrAeQgfAdgQAJQgeARgggaQgKgOAMgNQAegCARgbQARgbgMgYQAAgOAQgSQAbAaAqgDQAYgBAwgHQAegCAKgSQALgUgUgUQgbgcALgLQAGgGAggGIAxgKQAIAJAOAHIAaAJIAoAkQgdABgIARQgGANAHAWQADALAOADIAcADIAvAHQAbAIAEAbQAGAlAHAPQAKAaAaAQQAHAGAiAgQAZAYAZAIQA7AUBxAcQB3AeA1ARIAAQ3gAsiKrQAAADAGALQgEAWAUACIACgYQABgNgMgHIgBAAQgMAAAAAGgAmiKmIgUAVQgDAEABAEQAAAGAHABQABAAADgCIAGgEIAOgDQAJADAFgDQAGgDgBgLIgNgKQgFgEgGAAIgEABgAocLBQADAJAHgGQADgCADgGQADgGgBgCQgEgGgIAAIgOACIgZgBIgNAAQgJABAAAJQACAMAHgCIANgFIAOACQAGAAAEgHIACAAQAEAAADAIgAl6KyQABAJAOgBQANgBAAgJQAAgHgEAAQgEAAgKAHQACgCgHgEIgCAAQgDAAAAAIgABppVIAHAFIAEgIIgIgFIgDAIgAlwKwIgBAAIABAAg");
	this.shape_92.setTransform(0.4,41.2,0.787,0.787);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,-101.6,155.5,203.3);


(lib.Tween72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BA0AF").s().p("AgcABQgEgSAJgDQAGgDARAGQAcAJADAeg");
	this.shape.setTransform(-39,-35.7,0.787,0.787);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9BA0AF").s().p("AgYAeIATgfQALgUAOgIQAUA7g4AAIgIAAg");
	this.shape_1.setTransform(-50.6,-51.5,0.787,0.787);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#435160").s().p("AgIACQAAgCABgCIAQABQgEAEgGAAIgHgBg");
	this.shape_2.setTransform(32.5,-47,0.787,0.787);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435160").s().p("AAAAAIABAAIgCABg");
	this.shape_3.setTransform(24.6,-42.6,0.787,0.787);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#435160").s().p("AAAAAIABAAIgBABg");
	this.shape_4.setTransform(23.7,-42,0.787,0.787);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D6978").s().p("AgCgCIAKgCIADADQgCABABADIgUACQACgGAGgBg");
	this.shape_5.setTransform(31.1,-47.1,0.787,0.787);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D6978").s().p("AgDAFQgEgLAMACQABAJgHAAIgCAAg");
	this.shape_6.setTransform(28.8,-45.8,0.787,0.787);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D6978").s().p("AgQgHIAiACQgLAMgHABIAAAAQgJAAgHgPg");
	this.shape_7.setTransform(12.2,-34.7,0.787,0.787);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9BA0AF").s().p("AgCAiQgRAAgIgCQgOgDABgRQABgSAVgLQALgGAYgJQAIgEAJANQAIANgBANQAAATgMAHQgJAFgRAAIgFAAg");
	this.shape_8.setTransform(3.3,-49.3,0.787,0.787);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#435160").s().p("AhPAgQgIgBgDgJQgDgJAGgHIANgLQAggZAugBQAwgCAoAWIhPgBQgKAAgEABQgJABAAAIQgBADAHAHIAKALQgtAGgWAGQgIACgFAAIgFgBg");
	this.shape_9.setTransform(6.3,-42.3,0.787,0.787);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9BA0AF").s().p("AgeAeQgIgJgBgVQAAgUAIgJQAJgLAUABQAUgBAKAIQAMAIAAAVQgBAVgJAKQgKALgVABIgCAAQgTAAgIgKg");
	this.shape_10.setTransform(2,-60.7,0.787,0.787);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D6978").s().p("AgVAFIAigPIAJAOQgFgCgRAHQgEACgEAAQgHAAgGgGg");
	this.shape_11.setTransform(7.3,-13.8,0.787,0.787);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9BA0AF").s().p("AgBAAIADAAIgBABg");
	this.shape_12.setTransform(-22.4,20.3,0.787,0.787);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#435160").s().p("AgCgBIADgBIACACIgDADg");
	this.shape_13.setTransform(-46,-1.6,0.787,0.787);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#263443").s().p("AgCACIACgEIADACIgCADIgDgBg");
	this.shape_14.setTransform(-36.6,-19.8,0.787,0.787);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#263443").s().p("AgJAeQgIgDADgRIAGgmQAFABAMgDQAJAAgDARQgDANgBAcQgKADgFAAIgFgBg");
	this.shape_15.setTransform(-23.2,-21.2,0.787,0.787);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#263443").s().p("AAkB1QgdgGgRgcQgIgOgUgEIgjgGIgagFQgPgDgLgHQgagRALgeIAFgOQAEgIAIAAQAKABAEAOQAFAPAIAEQAMgHAAgOQgBgRACgHIAFgRQAEgJAJgCQAJgBADAHQACACADAMQAEALAEAEQAGAGAKgCQAIgCABgIIgBgPQgBgRAHgDQAGgCAOAGQATAIAMgDQAPgDAHgTQAHAEAAATQgBAPANAAQANAAAHgLQAFgKgCgQQgCgKALgRQAEgHAIgBQAHgCAHAFQAFAEgCAHIgFAKQgBAXgWAqQgVAogBAZIAAAUQABALAJAGQAgATgLAKQgHAHgaAFQgVAEgQAAQgKAAgIgCg");
	this.shape_16.setTransform(-38.3,-11.7,0.787,0.787);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D6978").s().p("AAAgHQAGAFgCADIgHAHg");
	this.shape_17.setTransform(-20.6,-8.9,0.787,0.787);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ADC5DC").s().p("AgIAJQgBgIAAgCQACgFAGgDIALATg");
	this.shape_18.setTransform(40.4,15.7,0.787,0.787);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5D6978").s().p("AADAOQgJgCgCgKQgBgKgBgFQAOACAHAOIgFAHQAAABgBABQAAAAAAABQgBAAAAABQAAAAgBAAIAAAAg");
	this.shape_19.setTransform(-2.1,25.7,0.787,0.787);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5D6978").s().p("AgIATQgFgDAAgCQgBgYAcgKQAAASgDAHQgEALgJAFIgBAAIgFgCg");
	this.shape_20.setTransform(-5.9,13.7,0.787,0.787);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ADC5DC").s().p("AgZACQgEgPAMgIQAKgGALAAQANAAAGAIQAIALgIALIgQATIgdAGQABgEgEgWg");
	this.shape_21.setTransform(26.6,22.5,0.787,0.787);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D6978").s().p("AAAAYQgXgTgNAEIgDgnIABgDIA6AVIACABQgCAKAJAKQAKAPACAEQgIAGgJAAQgLAAgNgKg");
	this.shape_22.setTransform(-38.2,-33,0.787,0.787);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ADC5DC").s().p("AAMApQgGgFgGgOQgKgYgWgBQgPgBgHgMQgFgKAEgMQAEgNAKAEIASAJIBRANIgBAUQgBALgCAHIgGAWQgEAMgMACIgEAAQgJAAgHgIg");
	this.shape_23.setTransform(35.2,18.5,0.787,0.787);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5D6978").s().p("AA8BVQgIgagHgHQABgcADgOQADgPgJgBQgNADgFAAQgXg0g1gKQgUgCgJgDQgOgGgBgSQAHgQADgBQADgCAJAHQALAJAGgCQArgMAiAUQAaAPAbAoQAoA7gfBaQgPgGgIgWg");
	this.shape_24.setTransform(-25.9,-23.1,0.787,0.787);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ADC5DC").s().p("AA+BmQgBgKgMgEQgdgJgcgbQggghgSgRQgKAagfADQgOABgKgKQgGgGgGgNQgFgKAKgEQAGgCAOgCQAYgHALgYQAEgHAJgkQAIgdAYgCQAOgBAaAFQAagCAIADQATAGABAaQABAXAUAcQAbAlAFAKQADAIANALQAKAMgKAOQgWAfgcgZQgHAMAEAQQADATgBAFIgTADIgBgTg");
	this.shape_25.setTransform(11.2,20.4,0.787,0.787);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ADC5DC").s().p("AB0EpQgPgJgLgCQglgRgSgEQghgGgQApQgBADgKACIgRACIgBgCQgDgfgdgJQgRgFgGACQgIADADATIgBADQgJAKgLgEQgNgHgHgBIgPgEQgJgDgJAEQglASgVgPQgVgPAAgsQAAgTgDgeIgEgxIARgQQBCAFgVhAIAHgVQAPgCAZgOQAZgPAPgBQAOgDACgPQADgMgFgRQgFgSAGgOQAFgPAQgDQAfgGASgZQANgSAKggQAKgjAcgPQASgKAogEQAYgCAHgDQAOgHACgUQACgkAkgBQAegCAPACQAZADANAOQAHAHgCAUQgDAXgOANIgRATQgegBgPAWQgLAOgFAeQgNBTAGA/QAJBYgEBFQgDBUgWBJIgZgQg");
	this.shape_26.setTransform(-33.2,-58,0.787,0.787);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5D6978").s().p("AAMgHQgFAOgSABQAFgQASABg");
	this.shape_27.setTransform(-32.6,-81.1,0.787,0.787);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5D6978").s().p("AAJA8QgdgDgMgXQgHgOgEggQgDgaAYgNQASgKAPACQAVADAHAWQAFANAAAeQAAAdgDAHQgGAPgUAAIgGAAg");
	this.shape_28.setTransform(-66.9,-12,0.787,0.787);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5D6978").s().p("AiFC9QAAgJADgDQAvgjAnhTQAuhjAYgdQARgTAUghIAig3QAKgOAFgFQAKgJANAAQgFA2gmAoQgjAlgSAfQgXApgDApIgHAUQgNAJgLATIgUAgIgRAQQgQAGgWAeQgVAcgUAGIABgRg");
	this.shape_29.setTransform(-49.6,-58.6,0.787,0.787);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9BA0AF").s().p("AASBzQg0gMgagIQgugOgYgdIAUhiQAUgGAVgcQAXgdAPgHIAEAyQADAeAAASQAAArAVAPQAUAPAmgSQAIgDAJACIAPAFQAHABANAGQAMAEAJgKIADApIgCAKQghgTgUABQgaAAgQAkQgCAGgHAAIgHgCg");
	this.shape_30.setTransform(-51.5,-38.8,0.787,0.787);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#435160").s().p("ABeArQgWgJgQABIgtgMQgGgTgTgGIgjgJIgqgHQgYgEgPgLQAGgPAPgFQALgEAPACQAfAFA/gDQA4ADAhAgQAjAjgFAoQgHgCgdgMg");
	this.shape_31.setTransform(13.8,-91.2,0.787,0.787);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5D6978").s().p("AjuAOQALgLAYgKQA8gcBKgHQA3gFBSAGQASABAJgJIATAAQAPALAYAEIAqAHIAjAJQAUAHAGASQgVAEgegHQgrgKgHAAQhogMhNAGQhiAIhQAkIgaAKIgZAIQADgWAOgOg");
	this.shape_32.setTransform(-5.5,-90,0.787,0.787);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5D6978").s().p("AgCAFIgBgKIAHAKIgDAAg");
	this.shape_33.setTransform(9.4,-13,0.787,0.787);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5D6978").s().p("AgDgIQAEAAACADIABAHQgBAFgEACg");
	this.shape_34.setTransform(10.3,-11.4,0.787,0.787);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5D6978").s().p("AgKgTQARAOACAEQAGAJgUAMg");
	this.shape_35.setTransform(37.8,-43.3,0.787,0.787);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5D6978").s().p("AgNgJQAWAAAFASIgIABQgSAAgBgTg");
	this.shape_36.setTransform(25.3,-75.7,0.787,0.787);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5D6978").s().p("AgPgaQAeAVABAIQgBAJgbAPg");
	this.shape_37.setTransform(40,-56.5,0.787,0.787);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5D6978").s().p("AgDgMIAYAIQAPAEAIgBQgOARgcgCQglgDgJADQAMghAdAHg");
	this.shape_38.setTransform(28.2,-35.9,0.787,0.787);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9BA0AF").s().p("AAAAVQgCgCgEAAQgBgEgDgDIgJgLIgIgOIA3gVIAABGg");
	this.shape_39.setTransform(10.6,-13.6,0.787,0.787);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5D6978").s().p("ABYDDIgDgCQABhugyiGQgNgjgigZQgMgJg3gdQgSgKgIgJQgLgLgBgQQAMAHApgEQAjgEARAUQgSAJAAALQgBALARAIQBAAgAbBCQAQAnAMBaIAMBeIgDADQgEABgCAFIgFADg");
	this.shape_40.setTransform(25,-62.6,0.787,0.787);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#263443").s().p("AiGA8QAagdAZgMQAdgOAgADQAeAEABgMQABgHgPgVIgLgLQgGgHAAgEQABgIAIgBQAFgBAJAAIBPABIAFACQAJALAZAQQAUARgFAYIgqAWQgFAAAAAFIgGAGIgjgCQgXALgMADQgUAFgTgSQgIgIgVAHIgkAMIgSAGQgGABgHAAIgKgBg");
	this.shape_41.setTransform(7.2,-38.6,0.787,0.787);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#263443").s().p("AhZAAIAIgFIACgCQADgEAFgBIADgCIAvgjQALACgBgMIANgGIAUgCQALAEAGgIIAGgEQAEgBABgFIADgDQAQAAAIAOQAEAJAGASIAFApIAKAjQAFAUgFABIgoASQgYALgSgOQgJACgOgFIgYgIQgdgIgMAjQg6gkAlgxg");
	this.shape_42.setTransform(30.1,-41.5,0.787,0.787);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5D6978").s().p("ABKCaIgfg+QgQglgBggQADgcgWgXIgpgkQgNgLgWgJIgogNQgmgMgFgMQgFgNAWghQAQgBAWAJQAdAMAHABIAnAVQAdATAaArIAtBHQAMAPAPAkQAQAfAdAHQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABQABAEgBABQgCAEAAARQABANgKAAQgHAAgcAXQgIAGgGAAQgLAAgIgOg");
	this.shape_43.setTransform(28.9,-75.2,0.787,0.787);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5D6978").s().p("AAEEbQgMAAgIgRQgSgigFgMQgKgbABgZQAAgIgKgnQgIgdALgTIgKgXQgHgOgPAdQgFAIgVADQgXADgGgTQgRgRgHgLQgNgTAkgOIAbgLQALgBAdAOQgJgUgBgZQAAgRADgaQADgQgGgJQgGgJgRgFQhEgUAMg9QABgJgEgIIgLgNQgVgXAfgXQAAAXATAJQASAKAFAbQAIA0ANAGQANAGAxgYQAUgKAIALQAQAaAjAIIA9AOQAvATAOAbQAOAcgSAtQgPAjABASQABAbAcAXQAbAWgJAlQgFAVgQAoQgEATgVABIgkgCQgcAAgQAGQgVAHgNAVQgJAPgMAAIgBgBg");
	this.shape_44.setTransform(52.4,-32.1,0.787,0.787);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9BA0AF").s().p("AneCQQASggAigkQAngpAEg1IBFhIQATgBAFgPIBMg2IAZgJIAagKQBQgkBhgIQBOgHBoAMQAHABArAKQAeAIAVgEIAtAMQgVAhAFANQAFAMAmAMIAoANQAWAJAMALIAqAkQAWAXgCAdIg7gVQgFgTgXAAIgCgBQgQgTgjADQgpAEgNgHQhHgHh1ANQiKARgwAAQAOgNACgXQADgUgHgHQgOgOgZgDQgPgCgeACQgjABgDAkQgBAUgOAHQgIADgXACQgoAEgTAKQgbAPgLAiQgKAggNASQgTAZgfAGQgPADgGAPQgFAOAFASQAEARgCAMQgDAPgNADQgQACgZAPQgZAOgOACQADgqAXgog");
	this.shape_45.setTransform(-8.7,-73.3,0.787,0.787);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C48175").s().p("Aj+FkQgMgOgRgYIgbgnQhDhYAph7QAKghABgoQAAgegGgsQgGgtAAhBQABhJAAgkQAAgUAMgaQARgiADgIIARgUQAwAACLgQQB0gOBHAIQACAQALALQAIAJASAKQA3AdAMAJQAjAZAMAjQAzCHgBBuIgLABQgGACgCAGIgOAHQgNgCAEAMIgwAiIgCgBIgBADQgFABgCAEIgDgBIAAADIgIAEQgRAAgpgMQgkgKgWACIgFgBQgogWguACQgwACgfAYIgNALQgGAHADAJQADAJAIACQAGABALgDQAWgFAugGQAQAVgBAIQgBAMgfgEQgggEgdAOQgZANgaAdQALACAMgDIASgFIAkgMQAVgIAIAJQATASAVgFQALgDAXgMQAIARAJgBQAIAAAKgOIAGgFQAFAAAAgFIAqgXQAdAKAZAgIArA5QAEgqAhgBQASgBAlAFQAWgCATBEQATBEgRAUQgNAPgUAAQgSAAgQgMQgSgNgRAAQgPgBgXAJQgSAGghABQgpABgLACQgTAAgHADQgOAGAOAYQAEAHgLAEQgOADgFADIhZAlIgHABQgYgKgPAQQgNAXgIAKIgBAAQhRAAhBhMgAg1hfQgZAJgMAGQgUALgCATQgBARAPADQAIACAQAAQAWABAKgGQANgHAAgTQAAgOgIgNQgGgKgGAAIgEABgAh3juQgIAKAAAVQABAUAIAKQAJAKAUgBQAWAAAKgLQAJgLABgWQAAgUgMgJQgKgHgVABIgFAAQgQAAgIAJg");
	this.shape_46.setTransform(8.9,-44.3,0.787,0.787);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9BA0AF").s().p("AAAgCIACACIgBADQgEgCADgDg");
	this.shape_47.setTransform(9.9,86.2,0.787,0.787);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#435160").s().p("AgBgBIABgDQADAEgCAFg");
	this.shape_48.setTransform(-25.9,20.1,0.787,0.787);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9BA0AF").s().p("AgFgDQAAgGAMAAIgHATQgGgKABgDg");
	this.shape_49.setTransform(-62.3,95.3,0.787,0.787);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5D6978").s().p("AgJAHIATgNQABAJgGADQgDABgDAAIgIAAg");
	this.shape_50.setTransform(-31.2,96.2,0.787,0.787);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9BA0AF").s().p("AgIgIQAPACACAPQgPgDgCgOg");
	this.shape_51.setTransform(9.1,41.6,0.787,0.787);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9BA0AF").s().p("AgLgOQAJgCAGAFIAMALIgSANIgNACg");
	this.shape_52.setTransform(-31.7,95.7,0.787,0.787);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9BA0AF").s().p("AAEgSIgDAlQgKgTANgSg");
	this.shape_53.setTransform(9.4,82.6,0.787,0.787);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ADC5DC").s().p("AgNABQgBgKAGADQAGAEgCABIAAAAIAAAAQAJgGAEgBQAFAAAAAHQAAAJgNABIgCAAQgLAAgBgIg");
	this.shape_54.setTransform(-28.3,95.5,0.787,0.787);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5D6978").s().p("AgDASQgGgBgBgFQgBgFAEgEIASgUIgFAdIgFAEIgEACIAAAAg");
	this.shape_55.setTransform(-33.5,96,0.787,0.787);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9BA0AF").s().p("AACgZQAGAegJAUQgHgeAKgUg");
	this.shape_56.setTransform(16.4,50.1,0.787,0.787);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5D6978").s().p("AgEgPQASAKgLAVQgNgNAGgSg");
	this.shape_57.setTransform(11.9,93.2,0.787,0.787);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9BA0AF").s().p("AgBgNQAKAOgDANQgTgKAMgRg");
	this.shape_58.setTransform(10.6,89.4,0.787,0.787);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#ADC5DC").s().p("AgEAHQgDgJgFACIAAgJIANgCQAIAAAEAGQABACgDAFQgCAGgEACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgCgFg");
	this.shape_59.setTransform(-41.8,96.2,0.787,0.787);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#435160").s().p("AgEACIADgHIAGAEIgDAHIgGgEg");
	this.shape_60.setTransform(9.1,-6,0.787,0.787);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ADC5DC").s().p("AgIgCIAIgTQALAHgCANIgCAXQgTgCAEgWg");
	this.shape_61.setTransform(-61.7,96.2,0.787,0.787);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9BA0AF").s().p("AgSgIQAagDAMAUIgnABg");
	this.shape_62.setTransform(6.7,40.1,0.787,0.787);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9BA0AF").s().p("AgWAAQgBgIAJgBIAOAAIAXABIAAAIQgEAIgHgBIgMgCIgOAFIgCABQgFAAgBgLg");
	this.shape_63.setTransform(-44.7,96.1,0.787,0.787);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5D6978").s().p("AgTAFQAYgsAPAxIgUAFIgEABQgKAAgFgLg");
	this.shape_64.setTransform(6.6,32.3,0.787,0.787);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5D6978").s().p("AgBAJQgOgGgIgJQAYgPALAFQAJAFADAeIgZgKg");
	this.shape_65.setTransform(27.5,-17.8,0.787,0.787);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5D6978").s().p("AgCAVQgJgOgGgGIgCgiQAgABAGAWQADAJgDAjQgMgCgJgLg");
	this.shape_66.setTransform(1.8,29,0.787,0.787);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9BA0AF").s().p("AgFAJQgWgLgKgVQA2ACAVAtQgggJgLgGg");
	this.shape_67.setTransform(13.6,44.5,0.787,0.787);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#435160").s().p("AgkAZIAPgyQAbAbAfgBQgUAZgmAAIgPgBg");
	this.shape_68.setTransform(33,32.4,0.787,0.787);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5D6978").s().p("AgUAHQgFgKAEgVIAsADIgRAuQgUgEgGgOg");
	this.shape_69.setTransform(14.1,98.6,0.787,0.787);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#435160").s().p("AgHgSQAGgBAIgLQAIgKAIABQANAZgSAZQgRAbgdACg");
	this.shape_70.setTransform(3.4,-4.3,0.787,0.787);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#9BA0AF").s().p("AgKguIAHgBQAHAKANgGQARgGAFACIABAKIghAiQgPAQAAAPQgIgBgJAKQgIALgGABQAKg+ATghg");
	this.shape_71.setTransform(6,-9.6,0.787,0.787);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9BA0AF").s().p("AgPADQgDg2gMgdQABgFgCgFQADgCACADIAmBZIAIAPQADAKgGAGQgSASALAFIAWAIIglAeQgIgagCg/g");
	this.shape_72.setTransform(-23.3,26.8,0.787,0.787);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5D6978").s().p("AgVAYQgNgYgLgJIgLgTQADgCAOACQAKABAEgKQASgFAVAHIAmAQIAFAcQgEAMgNAIIgYALIgIAAQgRAAgMgQg");
	this.shape_73.setTransform(44.8,17.3,0.787,0.787);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#435160").s().p("AAWAuQgWgHgSAFIg4g3IgCgcQAIgTAOgDQANgDAKAPQAPAWAdAVIAxAiQAPAMgBAHQgBAIgQAHIglgQg");
	this.shape_74.setTransform(44.2,10.8,0.787,0.787);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#9BA0AF").s().p("AgxhMQAJgBALAJIASAQQAUAQAPgiQADAKgDAUQABARAVAIQAMAFgcApQgcArgSADg");
	this.shape_75.setTransform(-14.3,94.5,0.787,0.787);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#ADC5DC").s().p("AgsBLQgLgFASgTQAGgFgDgKIgHgQIgnhYQgBgJAGgBIALgEIAXAXIAqAcQgYBBBHgDQAFAAAJAFIAUALIhnAkIgXgIg");
	this.shape_76.setTransform(-19,25.2,0.787,0.787);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5D6978").s().p("AhfCDQAVgRACgTQABgMgIgaQgJgbAXgDQANgCAPAFQAoAMARgSQAOgPABgnIAGgdQAEgRgIgMQAHgJAOgXQAPgQAXAJQgTAhgKA/IgUA6QgNANALAOQgEAOgKgBIgSgFQgPAEgfAjQgbAeggAAIgDAAg");
	this.shape_77.setTransform(-2.5,-3.3,0.787,0.787);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#435160").s().p("AhLBjQACgMgLgOQgNgQAAgJQAmALAggZQASgPAhgiQAKgIgEgMIgHgUIAYgLQANgIAEgMIAPgJQAJgFAKADQgKAdAAAEQgDASALAOQACACAAAHQAAAHgCABQgTAIggAqQgbAlgfACQgLABgUAMQgSAMgMAAIgBAAg");
	this.shape_78.setTransform(44.3,24.8,0.787,0.787);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5D6978").s().p("AB9A4QgNgHgEgHQgWgqgtgOQgcgHg6ACQgfABgTgCQgagDgVgLQgIgFAAgMQABgPgCgDQAQgDAZAHQAdAIALgBIAkAAQAVgCANgMQAdAUAqATIBNAhIACAcQgLAGADAMIAKAbIgbgRg");
	this.shape_79.setTransform(26.5,7.7,0.787,0.787);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#435160").s().p("ABcB3QgTgUgqgYQgtgagRgPQgHgHgMAGQgKAEgJALIgrgcIABgCIgDAAIgVgTQAThCg7g7QATgTATAGQAQAGAEATQAEASARAZQASAaAEANIAIAZQAHAIAQgWQAAgBAAAAQABAAAAAAQABAAAAAAQABgBABAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAJAWAnAIQApAKALAUQAGAMAUAAIAhAAIAJAYQABAFABALQACAJAKACQAAAAAAAAQABAAAAAAQABgBAAgBQABAAAAgBIAFgHIASADIACAkQgTALgSAAQgZAAgWgWg");
	this.shape_80.setTransform(-13.5,18.9,0.787,0.787);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5D6978").s().p("Ai5AwQAFgMANgEQAFgCATgBQAmgDALgZIATgCQAQARAagBQAQAAAdgGQARgBABgaQABgbgQgTIAegHQAWAYgGAqQAQgoAxgDQAPgBAKALQAFAFAIASQAAAJANAPQALAOgCAMIgegDQgeACgcgcIgQAyQghAJg8AAQhDgBgcAGQgJACgIAAQgfAAgfgYg");
	this.shape_81.setTransform(23.6,29.9,0.787,0.787);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#435160").s().p("AidBHQgbgiAIgbIABgKIAAgJIASAFQAKAAAEgOQAfAZAegPQARgKAfgcQAqgeAXgKQAngRArAHQgQAQgmAMQglAMgOASQANAAA+AKQAsAHAegLQAKgEAGAKQADAGADAPQgNALgVACIgkABQgMAAgdgIQgZgGgPAEQgZAKgEAUQgKAighAPIg9AUQgEABgFAAQgVAAgWgcg");
	this.shape_82.setTransform(12.4,2.4,0.787,0.787);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5D6978").s().p("ACHDBQgTgBgHgMQgKgUgpgJQgogJgKgXQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBABgBAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgPAYgHgKIgIgYQgEgNgTgbQgQgYgEgSQgEgTgQgGQgUgGgSASIgWgLQgNgGgBgNQAdgRAIgMQANgTgQgcQgHgMADgFQACgFAOgEIAmgKQARgKgQggQgHgOAOgFQAHgDATgBQAiAAASAZQARAagFAsIgCAfQgEARgaAAQgIgBgMATIgZAjQAlgDASAOQAQANAGAhQAGAjArAGQA2AHAVARQAXATAGAwIgTAAIgOAAg");
	this.shape_83.setTransform(-16.9,7.6,0.787,0.787);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5D6978").s().p("AhQEVQgjgCgOgaQgPgZAPgfQASggAAgfQABgegQghQgNgaADgpIAFhEQgFi0gFg/QAYAdAuAOQAaAIA0AMQAMAFAEgJQAQgkAaAAQAUgBAhATIAAALQAAAHgCABIg0AXQgfAOgJAbQgagPgWAUIgkAiQgTAMgEAPQgDAQAKAYQAUAyAnAoQAgAjAyAfQAQALAFAHQAJAMgCASQgGAqAHAMQAGALArAWQgdAFgNAUQgJANgEAeIhPAiQgegeg7gFgAA4BpIACAGIADgDIgCgEg");
	this.shape_84.setTransform(-50.6,-10.1,0.787,0.787);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#435160").s().p("Ag3DtQANgVAdgEQgqgWgHgLQgHgMAGgqQACgSgIgMQgGgIgPgKQgzggghgiQgmgogVgyQgKgYAEgQQADgQATgLIAkgiQAWgUAcAPQAIgbAfgOIA0gXQACgBAAgHIAAgLIADgKQANgEAXATQAWARASgNIAUACQABASAOAFQAJADAUACQA2ALAXAzIgGAnQgDARAIADQAGACAPgEQAHAGAIAaQAIAWAPAGQAEAPgGARQgDAIgLATIgEAQQACAFgBAEQgTABgHADQgOAFAHAOQARAggSAKIgmAKQgOAEgCAFQgDAFAHAMQARAcgOATQgIAMgdARQgVgQgUAKIggAYQgcAWgRAKQgbAPgaAEQAEgeAJgNgAiHgkIgFAOQgLAeAaARQALAHAPADIAaAFIAjAGQAUAEAIAOQARAcAdAGQAUAEAjgGQAagFAHgHQALgKgggTQgJgGgBgLIAAgUQABgYAVgpQAWgqABgXIAFgKQACgHgFgEQgHgFgHACQgIABgEAHQgLARACAKQACAQgFAKQgHALgNAAQgNAAABgPQAAgTgHgEQgHATgPADQgMADgTgIQgOgGgGACQgHADABARIABAPQgBAIgIACQgKACgGgGQgEgEgEgLQgDgMgCgCQgDgHgJABQgJACgEAJIgFARQgCAHABARQAAAPgMAHQgIgEgFgQQgEgOgKgBIgBAAQgHAAgEAIgAASh2IAEABIACgEIgDgCg");
	this.shape_85.setTransform(-38.2,-10.2,0.787,0.787);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9BA0AF").s().p("AAoKpQgQgygYAtIgWgNQADgkgDgJQgGgWghgBIgSgEQgHgPgPgCIgJgXQgGgwgYgTQgUgRg2gHQgsgGgFgjQgGghgRgNQgTgOgkADIAZgkQAMgTAIABQAaAAAFgRIABgfQAGgsgSgaQgSgZgiAAQAAgEgBgFIAIgHQACgEgGgFQALgUACgIQAGgRgDgPQAehZgog8QgagngbgQQgigUgrANQgHABgKgIQgJgIgDACQgEACgHAQIgUgCQgBgFgKgOQgJgLABgKIARgCQAKgCABgDQARgpAhAGQASAEAlARQALACAPAJIAZAQQAWhJADhUQAEhFgJhZQgGg/ANhTQAFgeALgOQAPgWAeABQgCAIgRAjQgNAaAAATQABAlgCBJQAABBAGAsQAGAtAAAdQAAApgLAhQgoB8BCBYIAcAlQARAZALANQBCBNBRgBQAJAMgEARIgGAdQgBAogOAPQgRASgpgMQgPgFgNACQgXADAJAbQAIAagBAMQgCATgWARQAjABAcgfQAegjARgDIAAAKIgBAJQgJAbAbAjQAcAiAZgIIA8gTQAhgQAJgiQAFgTAZgMQACADgBAPQAAALAJAFQAUAMAbADQASACAfgBQA7gCAcAHQAtANAXAsQADAHANAHIAbARIgKgbQgDgMALgHIA4A4QgDALgLgCQgOgCgDACQgGADgCAFQAAADABAIIhSgNIgSgJQgKgEgEANQgEAMAFAKQAHAMAPABQAWABALAZQAGAOAGAFQAIAJAMgBQAMgCAEgMIAGgWQACgHABgMIABgUIATABQAKAIAOAZQAOAUAXgEIAHAUQAEANgKAHQghAkgTAOQggAagmgMQgHgRgGgGQgJgKgQABQgwACgRApQAHgqgXgYIARgTQAIgMgIgLQgHgIgNAAQgMAAgKAGQgLAIADAQQAFAWgBAEQAPAUgBAbQgBAagRACQgeAFgPABQgaAAgRgRQACgGgEgTQgDgQAHgMQAbAaAWggQAKgOgJgLQgOgMgDgHQgEgKgbgmQgUgdgBgXQgCgagTgGQgHgCgaABQgcgEgNABQgYABgIAeQgKAjgEAIQgKAXgXAHQgOACgGADQgKADAFAMQAGANAFAFQAKALAPgCQAegDAKgZQASAQAgAiQAdAbAcAJQAMADACALIABASQgMAaglACQgTACgGACQgMAEgGAMgAiYHBQAAACAEADQAFADABgBQALgFAEgLQACgIAAgSQgcAKABAZg");
	this.shape_86.setTransform(5.1,-20.6,0.787,0.787);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#435160").s().p("AnyqoQAbgBAvgYQAwgXAcgBQADAAAGgEQAGgDADABQA7ASBjgNQB4gQAnADQANABBOALQA4AJAmgDQAsgCAWgDQAkgFAcgLQBOgeBAAJQAaADALAHQASALAAAYQgJAJgSgBQhTgGg3AGQhKAHg8AbQgYALgLALQgPAPgCAWIhMA2QgTgBgFARIhEBIQgNAAgJAJQgGAFgJAPIgjA2QgUAhgRAUQgXAcgwBkQgmBUgwAiQgDADAAAJIgBARIgUBiQAFA/AFCzIgFBFQgDAqANAaQAQAhgBAeQAAAfgSAgQgPAeAPAaQAOAaAjACQA7AFAfAeQgkAXg/ASQhUAXgUAIQgaALgpAMIhFAVgAmOEKQgYANADAaQAEAhAHAOQANAXAdADQAZACAHgRQADgHABgdQgBgfgFgNQgHgWgVgDIgGAAQgNAAgPAIg");
	this.shape_87.setTransform(-37.3,-37,0.787,0.787);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#435160").s().p("AgTgWQAiAAAEACQATAGgIAfQgNAAgGABQgOAFgKAAQghAAAbgtg");
	this.shape_88.setTransform(75.2,-99.9,0.787,0.787);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#263443").s().p("AEtBUQAEgogjgjQggggg5gCQhAADgfgFQgPgDgLAEQgPAFgFAPIgUAAQAAgYgSgLQgJgHgbgDQhAgJhNAeQgcALglAFQgVADgtACQglADg4gJQhQgLgNgBQgngDh3AQQhjANg8gSQgDgBgGADQgGAEgDAAQgbABgwAWQgvAYgbABIgDiLId1AAQgjA7BCgSQAGgBANAAIAAA8QgugRhOgDQhhgFgdgFIgKgBQgHAAgCgCQgmgdg2AJQg/ARgeABQgjACgbASQgdASgTAfQgIAOgfAWQgdAUgIATg");
	this.shape_89.setTransform(0.4,-93.4,0.787,0.787);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#ADC5DC").s().p("APGUJI+CABQgSAAgFgGQgFgFAAgRMAABgnkQgCgIAAgFQgBgIANABIACY2QgBLfgBDSQAAAVAJAHQAHAGAVAAILkgBQATgDAcgrQAcgrgMgEQgVgIgBgSQADgUgDgJQAlg+gFhVIgViUQgQiGAGhfQAEhCATgTQATgTBFgEIAJgFQASgMAWABQAQABAYAKIAKAFIAKACIAAATIAngBIACACQACAPARADIAKAEQAKAVAWAMQAMAGAgAJIgBAVQgLATAIAgQgIAigMBKQgKBHgKAlIgTBNQgMAsgNAfQgPASAMAUIAFAXQgDAFAFACIAGAXQgMASAUAKIAGATQgHASAOAOIADAcQgEAVAFALQAGAOAVAEIMgABQABAMgIAAIgNgCg");
	this.shape_90.setTransform(-0.1,0,0.787,0.787);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#435160").s().p("AEXKkQhxgcg7gUQgZgIgZgYQgigggHgGQgZgRgKgZQgHgQgGgkQgEgbgbgJIgvgGIgcgDQgOgEgDgKQgHgWAGgNQAIgSAdAAIgogkQgDgegJgGQgLgFgZAQIgxAKQggAGgGAGQgLALAbAcQAUAUgLATQgKATgeABQgwAIgYABQgqACgbgZIAhgiIAEABIADgBQAEAEABADIABASQAGgCAAgFIAAgIIAcAOIAAhHQAEgDAOgDQALgEgEgHQgOgYAOgGQAIgDASAAQALgCApgBQAhgBASgGQAXgJAPABQARAAASANQAQAMATAAQATAAANgPQASgUgUhEQgThEgVACQgmgFgRABQgiABgEAqIgrg5QgZgggcgKQAEgYgTgRQgagQgJgLQAWgCAlAKQApAMAQAAQgkAyA5AkQAJgDAmACQAcACAOgSQATAOAYgKIAngSQAGgBgFgVIgLgiQAVgMgGgLQgCgEgRgOQgGgSgEgJQgIgOgQAAIgMheQgMhbgQgnQgbhChBggQgRgIABgLQAAgLASgJIABABQACAXAbgEIA6AVQABAfAPAlIAgA+QANAZATgQQAdgXAGAAQALAAgBgNQAAgSABgDQACgCgCgDQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgdgHgRgeQgOgkgNgQIgshHQgagrgegUQAIgSAdgVQAfgVAIgPQATggAdgSQAbgRAjgCQAdgCA/gRQA2gJAmAdQACACAHABIAKAAQAdAGBhAEQBOAEAuARIAAVtQg1gRh3gegABBCnIAKAWQgKAUAHAdQALAmgBAIQgBAZAKAbQAFANASAiQAJAQAMABQANAAAJgPQAOgUAUgIQAQgFAcAAIAkACQAWgCADgSQAQgpAFgUQAJglgbgXQgcgWgBgbQgBgTAPgkQASgsgOgcQgOgbgvgSIg9gOQgkgJgQgZQgHgLgUAJQgyAZgNgGQgNgHgIgzQgEgcgSgJQgTgJAAgXQAcgPABgJQgBgJgfgVIADA2QgeAWAVAYIAKANQAFAIgCAJQgLA9BCATQARAGAGAHQAGAJgDAQQgDAbABARQAAAYAJAWQgdgPgKAAIgaALQglAPANAUQAHAKASASQAFASAXgDQAUgCAFgJQAKgTAHAAQADAAACAFg");
	this.shape_91.setTransform(42,-41.2,0.787,0.787);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#263443").s().p("AC0LyIARgvIgtgCIgCgcQALgXgTgKIgGgSQADgNgLgPIgGgYIACgEIgEgCIgFgYIADglQANggAMgrIAThNQAKglAKhHQAMhKAIgjQAKgUgGgfIAAgUQgVgvg3gBIgKgEQgCgPgRgDIgCgBQgMgVgaADIgKgCIgKgGQgZgJgQgBQgWgCgSANIgJAFQhFAEgSATQgUARgEBDQgGBeAQCGIAVCVQAFBVglA+QgPAigVgRIgSgQQgLgIgJAAIAiCaIrlACQgVAAgHgGQgJgHAAgVQABjTACrdIBEgVQApgMAbgLQATgIBUgYQBAgRAjgXIBPgjQAagDAbgPQASgKAcgWIAhgYQATgKAVAPQABAOAOAHIAVALQA7A7gSBCIgMADQgGACABAIQgCgDgEACIgCAEIADAGQANAdADA4QABA+AIAbIAngfIBogkIgUgLQgJgEgFAAQhIADAZhDQAKgKAJgFQAMgGAHAIQARAOAuAaQAqAYAUAUQAlAnAtgcQAGAGAKAOQAJAKAMACIAWAOQAHANANgDIAUgGIAKAJQAoAcAngHQAdgGBCABQA+ABAggJQAzAFAXgeIAfADQAMAAASgMQAUgMALAAQAggCAbgmQAggrATgHQACgCABgGQgBgHgBgDQgMgOADgSQAAgEALgcQgLgEgJAFIgPAJIgFgdQAQgHABgIQABgHgPgMIgygjQgdgWgPgWQgKgOgNADQgOADgIASIhNggQgqgTgegVQgDgPgDgFQgGgLgJAEQgfAMgsgIQg+gKgNAAQAOgSAlgMQAngMAPgQQgqgHgoARQgXAKgrAeQgfAdgQAJQgeARgggaQgKgOAMgNQAegCARgbQARgbgMgYQAAgOAQgSQAbAaAqgDQAYgBAwgHQAegCAKgSQALgUgUgUQgbgcALgLQAGgGAggGIAxgKQAIAJAOAHIAaAJIAoAkQgdABgIARQgGANAHAWQADALAOADIAcADIAvAHQAbAIAEAbQAGAlAHAPQAKAaAaAQQAHAGAiAgQAZAYAZAIQA7AUBxAcQB3AeA1ARIAAQ3gAsiKrQAAADAGALQgEAWAUACIACgYQABgNgMgHIgBAAQgMAAAAAGgAmiKmIgUAVQgDAEABAEQAAAGAHABQABAAADgCIAGgEIAOgDQAJADAFgDQAGgDgBgLIgNgKQgFgEgGAAIgEABgAocLBQADAJAHgGQADgCADgGQADgGgBgCQgEgGgIAAIgOACIgZgBIgNAAQgJABAAAJQACAMAHgCIANgFIAOACQAGAAAEgHIACAAQAEAAADAIgAl6KyQABAJAOgBQANgBAAgJQAAgHgEAAQgEAAgKAHQACgCgHgEIgCAAQgDAAAAAIgABppVIAHAFIAEgIIgIgFIgDAIgAlwKwIgBAAIABAAg");
	this.shape_92.setTransform(0.4,41.2,0.787,0.787);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,-101.6,155.5,203.3);


(lib.Tween69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-95,-63.3,0.495,0.495);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-63.3,190,126.7);


(lib.Tween68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-95,-63.3,0.495,0.495);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-63.3,190,126.7);


(lib.Tween67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AAYA7QgQgIgIgHIgagUQgLgOALgSQACgDgCgHQgCgIgBAAQgFABgZAFIARg0IBmCKIgKAHIgagOg");
	this.shape.setTransform(61.5,103.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRgVQAHgLAeAHIghA2QgKgoAGgKg");
	this.shape_1.setTransform(-5.9,84.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqALIA4ghIAdAgIhSANg");
	this.shape_2.setTransform(9.3,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACgJQgXgFgYgHIACgLIBZAOIgyAzg");
	this.shape_3.setTransform(29,78.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAlIASg6IACgBIAhgSQAHAcgQAVQgJAMgWAUg");
	this.shape_4.setTransform(70.3,75.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglhaIAPgGIA8C+IgLADg");
	this.shape_5.setTransform(-19.1,-2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAA6QAXgegIgZQgJgZgogZIA2gQIAPB/g");
	this.shape_6.setTransform(36.3,94.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA0QgEgBgDgKIgFgUIgZgFQAOggAXgQQAXgRAlgDIgfAtIAvgZIAIAHIgaAoIgCABIgOAPQgJAIgGAFQgOAJgIAAIgFgBg");
	this.shape_7.setTransform(66,71.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231916").s().p("AgcA4IAsh0IANAFIgtB0g");
	this.shape_8.setTransform(104.8,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231916").s().p("AgmgcIAHgIIArAnIALgaIAKAFQAGACAAABQgBAGgKAug");
	this.shape_9.setTransform(121.9,50.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231916").s().p("AA1AVIh4gWIACgTICFAVIgBAOIgHAEIgGACIgBAAg");
	this.shape_10.setTransform(59.7,50);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231916").s().p("AgBAtQgKAAgNgLQgOgLgBgJQgBgJAIgQQAMgUAGgNIA2A8IgVASQgMALgHAAIgBAAg");
	this.shape_11.setTransform(64.2,35.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231916").s().p("AglA0IgngrQAagfAsgNQAXgIA8gIIh6A4IAmAvIgeAAg");
	this.shape_12.setTransform(65.5,16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231916").s().p("AAEAtQgPgYgNgPQgTgXAQgaQAUgigBgHIArCmIgFAEIgagpg");
	this.shape_13.setTransform(47.5,-11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231916").s().p("AgGA6Igbh4QArAAAPAcQAOAcgIBFg");
	this.shape_14.setTransform(39.3,46.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231916").s().p("AheBAQgGgUAEgGQAMgZAJgLQAPgSAbAEQAPADAagiQAHgKAIgRIAMgcQAoAXAIAQQAIAPAIBFIg2gNQghgIgWAAQgigCgKAlQgOAxgNALIgNgjg");
	this.shape_15.setTransform(27.8,-16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231916").s().p("AAqBRIgIgHIh1hVIgegVQgSgNgLgKQgDgCABgJIABgSQAOAEASAQIAcAZQAiAXAhgxICiCFIhhAQIgBABQgCAAgEgEg");
	this.shape_16.setTransform(70.8,44.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231916").s().p("AgcALQh5iOg8g5IAJgKIBegKIglA1IEECfIAlhpQAQAVAAAHQAAAIgOAaQgPAYgBAKQgDARAWAMQgTAOAGAOQAFAKAZAWIg8gGIBeBIIg1A7QhJhBhwiFg");
	this.shape_17.setTransform(41.7,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231916").s().p("ADnDYQgNgegJgMQgPgUgfAJQgHABgEgFQgpgkhFgMQgogHhQgKIAOjWQACghgLgLQgLgKgiADQgLABgPgGIgagKQgFgCgUgNQgPgJgHABQgmAKgMgVQgGgJgGgoIgBgZIAxApQAdAZAWAMQASAKAiAHQAqAJANAFQALADAKAJQALAJAEAKQAHASAHAGQAJAIAQgCQAjgEAkAPQAaALAnAdQgiAXgGAeQgGAeAZAcQASAUAdAYIAxAoIASANQAKAIAGAKIghgHQAzA7ALAZQALAagMAng");
	this.shape_18.setTransform(106.7,46.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231916").s().p("AhkGRQhLgvgOhIIgciqIgDgRQgCgKgFgEQgigegWg0QgWhAgMgfQgahDAghKQAghKBJgvQAVgNAjgPIBAgcIgGBzIBXAYQgGAXgbgNQgegOgKAUQgGALgbAKQgmAOgGAEQBzgjBVAUQBgAYBCBfQi4hui9BIQgFABgEAHIgFAHICHALQBPAHA3AKQAUADAeAVQAkAaANAGQAYALAKAIQAQANAGAUIAKgEIgOg4QgIgigLgUQgcgzg0goQgQgNgjgSQgngUgPgKQBFAJAiADIAjAEQATACAMgGQASgJARAHQAIADASAOQAXATASAlQATAqADAjQAJBhhPA0IgNgfIgGABIgDAtIgogoQgXgUgRgHQgVgIgkgDIhCgGIAaAdQgLAAgYgHQgSgBACAdQABACgKAEQgIAEgJACQgGABgNgJQgtgRgJAHQgKAGgLA2QAyAQASANQAfAWglA0IA0AOIgBAEIhVAAIAAAHIAlALIgqBIIBzAmIgbAbIAlAaQgTAcgrAIQgMACgLAAQgdAAgXgOg");
	this.shape_19.setTransform(46.2,-66.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhDArIgFhVQAXAkApATQAaANA2AMIABAFg");
	this.shape_20.setTransform(92.6,110.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANDQIABhUIAAgzQAAgdACgUQACgQAJgWIAQgqIh8AYIBRivIAnAkQAWAUAOAQQAGAHABANQABANgEAKQgxBjAhCEQAGAXACAug");
	this.shape_21.setTransform(5.7,94);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjXBxIANjSIAzAMQAfAGAVgCQAVgCAfgKIAxgTIDJA5IANCogAglgPQABAHgBADQgLASALAOIAZAUQAKAIAOAHIAbAPIAJgHIhmiLIgQA0QAZgFAEAAQACAAACAHg");
	this.shape_22.setTransform(62.6,103.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231916").s().p("AN7R8IgNipIjJg5IgyATQgfALgVABQgVACgfgGIgzgLIgNDSIkaAAQgCgvgGgWQghiEAxhlQAEgJgBgNQgBgOgGgGQgOgQgWgVIgngkIhSCwIB9gYIgQAqQgJAXgCAQQgCATAAAeIAAAyIgBBVIlDAAIAkhcQAWg2ASglQAWgtAlg+IA9hrIALAFIAEAgIAMAAIADgVQACgNgDgCQgYgSAGgYIAVglQATgiAFgaQAHgggKgiQgLgmgJg5IgOhhQgHgkgQgbQgSgagggXQg5gohIg8Ih+hpQgcgZgJgcQgVhBg6hHQghgphFhQIgHgHQgFgEgCgEQgjhAhgh6Qhch2gjhHQgFgLgMgPIgTgZIgOgWQgHgNAGgSQALgfg6gOIg2gKQgggHgSgKQhOgqiahkQgJgFgJgOIgQgYIA0AAQgPgRgngeQgdgfAKgpIAuAaQAFgbAOgDQAMgEAVAOIDHB/IgfAhQAQAZAXACQARABAbgMQAhgPAWAIQAWAHAOAhQAJAWAPAKQAPALAXACQAJAAALAGIAUAJIgEAMIgWAEIgpBiQAzgGAHBDIA1ABQAhAAAXgDQAJgBALgNQALgMACgLQADgVgBggIgBgzQAZAVAIANQANAXgJAgQgNAvApAkQAhAeAtAwIBMBQQAOAOgBAJQgBALgZAHIDPC6IAIgJIgigoIATgOIA/BhIAagmIACAcQAAAMACAHQAgCDAXBPIAAjSIAHgBIAjClIAUhIIAgCQIAPgBIAKioIAIgDIATCSQAfgIALgmQALgqAPgKIgGA+IAcgpQABAMAVAnQAQAegOAWQAQALAFAYIAGAoQACAHALAHQAKAGAKACQAXAEBuAPIAAASIgSABQgLAAgHgCQgHgCgRgIQgQgHgJgCQgHgBgKAEIgRAHQgBAAADAPIAWgDIBqCNIgVBGIhXhPQgDAeAWAgQAWAeAaAMIAXBRIAkCFQAqgKATgVQARgVAHguQANhfAchWIgCA4QgBAhgDAXQgEAkgOBEICOATIgtAiIBFgNQAngHAagIQAogLAVALQAWAMAGAnQAEAeABArIACBIIAABOIB8AyQBLAeA1APQAgAJAwAAIBTgBQAEAAAHgJIANgSQAQAFAAALQgBAKgOAMQg9A0hggVQgkgIhPgVIAVBsIh6hIQAkBiBjBHQg2gNgbgMQgpgUgXglIAFBWgAF5N/QApAZAIAaQAJAZgXAeIAiAGIgOiAgAgbM2QgGAKAKApIAhg3QgLgDgJAAQgNAAgEAHgAElL9QAYAHAYAFIgIArIAzg0IhZgOgALUMUIAMAEQAYgUAJgMQAPgWgGgcIgjASIAbgpIgJgHIgvAZIAfgtQglADgYARQgXAQgOAhIAZAFIAFAUQADAKAEABQAJAEATgMQAHgFAIgIIAOgPgABjBcIADALIBTgMIgdgigAi0hyIBBC7IALgCIg9i+g");
	this.shape_23.setTransform(-4.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.8,-114.8,269.7,229.6);


(lib.Tween66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AAYA7QgQgIgIgHIgagUQgLgOALgSQACgDgCgHQgCgIgBAAQgFABgZAFIARg0IBmCKIgKAHIgagOg");
	this.shape.setTransform(61.5,103.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRgVQAHgLAeAHIghA2QgKgoAGgKg");
	this.shape_1.setTransform(-5.9,84.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqALIA4ghIAdAgIhSANg");
	this.shape_2.setTransform(9.3,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACgJQgXgFgYgHIACgLIBZAOIgyAzg");
	this.shape_3.setTransform(29,78.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAlIASg6IACgBIAhgSQAHAcgQAVQgJAMgWAUg");
	this.shape_4.setTransform(70.3,75.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglhaIAPgGIA8C+IgLADg");
	this.shape_5.setTransform(-19.1,-2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAA6QAXgegIgZQgJgZgogZIA2gQIAPB/g");
	this.shape_6.setTransform(36.3,94.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA0QgEgBgDgKIgFgUIgZgFQAOggAXgQQAXgRAlgDIgfAtIAvgZIAIAHIgaAoIgCABIgOAPQgJAIgGAFQgOAJgIAAIgFgBg");
	this.shape_7.setTransform(66,71.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231916").s().p("AgcA4IAsh0IANAFIgtB0g");
	this.shape_8.setTransform(104.8,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231916").s().p("AgmgcIAHgIIArAnIALgaIAKAFQAGACAAABQgBAGgKAug");
	this.shape_9.setTransform(121.9,50.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231916").s().p("AA1AVIh4gWIACgTICFAVIgBAOIgHAEIgGACIgBAAg");
	this.shape_10.setTransform(59.7,50);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231916").s().p("AgBAtQgKAAgNgLQgOgLgBgJQgBgJAIgQQAMgUAGgNIA2A8IgVASQgMALgHAAIgBAAg");
	this.shape_11.setTransform(64.2,35.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231916").s().p("AglA0IgngrQAagfAsgNQAXgIA8gIIh6A4IAmAvIgeAAg");
	this.shape_12.setTransform(65.5,16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231916").s().p("AAEAtQgPgYgNgPQgTgXAQgaQAUgigBgHIArCmIgFAEIgagpg");
	this.shape_13.setTransform(47.5,-11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231916").s().p("AgGA6Igbh4QArAAAPAcQAOAcgIBFg");
	this.shape_14.setTransform(39.3,46.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231916").s().p("AheBAQgGgUAEgGQAMgZAJgLQAPgSAbAEQAPADAagiQAHgKAIgRIAMgcQAoAXAIAQQAIAPAIBFIg2gNQghgIgWAAQgigCgKAlQgOAxgNALIgNgjg");
	this.shape_15.setTransform(27.8,-16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231916").s().p("AAqBRIgIgHIh1hVIgegVQgSgNgLgKQgDgCABgJIABgSQAOAEASAQIAcAZQAiAXAhgxICiCFIhhAQIgBABQgCAAgEgEg");
	this.shape_16.setTransform(70.8,44.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231916").s().p("AgcALQh5iOg8g5IAJgKIBegKIglA1IEECfIAlhpQAQAVAAAHQAAAIgOAaQgPAYgBAKQgDARAWAMQgTAOAGAOQAFAKAZAWIg8gGIBeBIIg1A7QhJhBhwiFg");
	this.shape_17.setTransform(41.7,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231916").s().p("ADnDYQgNgegJgMQgPgUgfAJQgHABgEgFQgpgkhFgMQgogHhQgKIAOjWQACghgLgLQgLgKgiADQgLABgPgGIgagKQgFgCgUgNQgPgJgHABQgmAKgMgVQgGgJgGgoIgBgZIAxApQAdAZAWAMQASAKAiAHQAqAJANAFQALADAKAJQALAJAEAKQAHASAHAGQAJAIAQgCQAjgEAkAPQAaALAnAdQgiAXgGAeQgGAeAZAcQASAUAdAYIAxAoIASANQAKAIAGAKIghgHQAzA7ALAZQALAagMAng");
	this.shape_18.setTransform(106.7,46.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231916").s().p("AhkGRQhLgvgOhIIgciqIgDgRQgCgKgFgEQgigegWg0QgWhAgMgfQgahDAghKQAghKBJgvQAVgNAjgPIBAgcIgGBzIBXAYQgGAXgbgNQgegOgKAUQgGALgbAKQgmAOgGAEQBzgjBVAUQBgAYBCBfQi4hui9BIQgFABgEAHIgFAHICHALQBPAHA3AKQAUADAeAVQAkAaANAGQAYALAKAIQAQANAGAUIAKgEIgOg4QgIgigLgUQgcgzg0goQgQgNgjgSQgngUgPgKQBFAJAiADIAjAEQATACAMgGQASgJARAHQAIADASAOQAXATASAlQATAqADAjQAJBhhPA0IgNgfIgGABIgDAtIgogoQgXgUgRgHQgVgIgkgDIhCgGIAaAdQgLAAgYgHQgSgBACAdQABACgKAEQgIAEgJACQgGABgNgJQgtgRgJAHQgKAGgLA2QAyAQASANQAfAWglA0IA0AOIgBAEIhVAAIAAAHIAlALIgqBIIBzAmIgbAbIAlAaQgTAcgrAIQgMACgLAAQgdAAgXgOg");
	this.shape_19.setTransform(46.2,-66.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhDArIgFhVQAXAkApATQAaANA2AMIABAFg");
	this.shape_20.setTransform(92.6,110.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANDQIABhUIAAgzQAAgdACgUQACgQAJgWIAQgqIh8AYIBRivIAnAkQAWAUAOAQQAGAHABANQABANgEAKQgxBjAhCEQAGAXACAug");
	this.shape_21.setTransform(5.7,94);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231916").s().p("AN7R8IgNipIjJg5IgyATQgfALgVABQgVACgfgGIgzgLIgNDSIkaAAQgCgvgGgWQghiEAxhlQAEgJgBgNQgBgOgGgGQgOgQgWgVIgngkIhSCwIB9gYIgQAqQgJAXgCAQQgCATAAAeIAAAyIgBBVIlDAAIAkhcQAWg2ASglQAWgtAlg+IA9hrIALAFIAEAgIAMAAIADgVQACgNgDgCQgYgSAGgYIAVglQATgiAFgaQAHgggKgiQgLgmgJg5IgOhhQgHgkgQgbQgSgagggXQg5gohIg8Ih+hpQgcgZgJgcQgVhBg6hHQghgphFhQIgHgHQgFgEgCgEQgjhAhgh6Qhch2gjhHQgFgLgMgPIgTgZIgOgWQgHgNAGgSQALgfg6gOIg2gKQgggHgSgKQhOgqiahkQgJgFgJgOIgQgYIA0AAQgPgRgngeQgdgfAKgpIAuAaQAFgbAOgDQAMgEAVAOIDHB/IgfAhQAQAZAXACQARABAbgMQAhgPAWAIQAWAHAOAhQAJAWAPAKQAPALAXACQAJAAALAGIAUAJIgEAMIgWAEIgpBiQAzgGAHBDIA1ABQAhAAAXgDQAJgBALgNQALgMACgLQADgVgBggIgBgzQAZAVAIANQANAXgJAgQgNAvApAkQAhAeAtAwIBMBQQAOAOgBAJQgBALgZAHIDPC6IAIgJIgigoIATgOIA/BhIAagmIACAcQAAAMACAHQAgCDAXBPIAAjSIAHgBIAjClIAUhIIAgCQIAPgBIAKioIAIgDIATCSQAfgIALgmQALgqAPgKIgGA+IAcgpQABAMAVAnQAQAegOAWQAQALAFAYIAGAoQACAHALAHQAKAGAKACQAXAEBuAPIAAASIgSABQgLAAgHgCQgHgCgRgIQgQgHgJgCQgHgBgKAEIgRAHQgBAAADAPIAWgDIBqCNIgVBGIhXhPQgDAeAWAgQAWAeAaAMIAXBRIAkCFQAqgKATgVQARgVAHguQANhfAchWIgCA4QgBAhgDAXQgEAkgOBEICOATIgtAiIBFgNQAngHAagIQAogLAVALQAWAMAGAnQAEAeABArIACBIIAABOIB8AyQBLAeA1APQAgAJAwAAIBTgBQAEAAAHgJIANgSQAQAFAAALQgBAKgOAMQg9A0hggVQgkgIhPgVIAVBsIh6hIQAkBiBjBHQg2gNgbgMQgpgUgXglIAFBWgAF5N/QApAZAIAaQAJAZgXAeIAiAGIgOiAgAgbM2QgGAKAKApIAhg3QgLgDgJAAQgNAAgEAHgAElL9QAYAHAYAFIgIArIAzg0IhZgOgALUMUIAMAEQAYgUAJgMQAPgWgGgcIgjASIAbgpIgJgHIgvAZIAfgtQglADgYARQgXAQgOAhIAZAFIAFAUQADAKAEABQAJAEATgMQAHgFAIgIIAOgPgABjBcIADALIBTgMIgdgigAi0hyIBBC7IALgCIg9i+g");
	this.shape_22.setTransform(-4.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.8,-114.8,269.7,229.6);


(lib.Tween65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-91.5,-61,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-61,183.1,122.1);


(lib.Tween64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-91.5,-61,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-61,183.1,122.1);


(lib.Tween63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AETGhIAAggImiAAIAAAgIhOAAIAAlyQhMBAhEArIgzg6QBJgsA8gvQA8guAvgyIjnAAIAAhFIEhAAIAegpIkJAAIAAhFIExAAIAUglQjPAHhhgCIgIhKQBtACEFgLQB/gHDCgZIALBJQg0ALhiAJIiYAMIgWAqIFMAAIAABFIl0AAIgbApIG+AAIAABFInzAAIgnArIHKAAQAPAAAAAPIAAHCgAiPE6IGiAAIAAgyImiAAgAiPDDIGiAAIAAgyImiAAgAiPAfIAAArIGiAAIAAgrQAAgKgKAAImPAAQgLAAACAKg");
	this.shape.setTransform(225.1,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvGFQAcgoAjhWQAPgrAKhcIgvAAQgKAAAAgLIAAn4QAAgJAKAAIEbAAQAKAAAAAJIAAH4QAAALgKAAIhFAAIAADEQgBAPAJADQAHADAZAAQAEAAAEgSIAFhJIBBATQgDA4gHAfQgGAggLAGQgTAOgXAAIhTAAQgQgBgJgIQgIgJAAgPIAAj7IgiAAQgKBfgPAwQgkBhgbAwgACVA2IACAEICcAAQABAAABAAQAAgBABAAQAAgBABAAQAAgBAAgBIAAhKIiiAAgACVhZICiAAIAAhWIiiAAgACVlEIAABPICiAAIAAhPIgEgDIicAAgAlLGTQgYAAAAgYIAAkIIgNASQgdgfgWgLQAaggASgpQASgnALgwIBCAUIgOAsIB5AAIAchAIA/AaIgQAmICRAAIgGA+IiYAAIAAAyICLAAIAAA/IiLAAIAAA2ICLAAIAAA+IiLAAIAAA3ICbAAIAAA+gAkdFKQAAALAKAAIBdAAIAAg3IhnAAgAkdDgIBnAAIAAg2IhnAAgAkdBDIAAAoIBnAAIAAgyIhdAAQgKAAAAAKgAighNQgIAAAAgKIAAiiQAAgIAIAAIC3AAQAJAAAAAIIAACiQAAAKgJAAgAhpjDIAAA2IACAEIBFAAIAEgEIAAg2IgEgDIhFAAQgEAAACADgAmFhNQgIAAAAgKIAAiiQAAgIAIAAIC4AAQAIAAAAAIIAACiQAAAKgIAAgAlPjDIAAA2IADAEIBGAAIACgEIAAg2IgCgDIhGAAQgEAAABADgAh9kVIAAgkIhuAAIAAAgIhGAAIAAggIhlAAIAAg+IBlAAIAAgoIBGAAIAAAoIBuAAIAAgoIBGAAIAAAoIBhAAIAAA+IhhAAIAAAkg");
	this.shape_1.setTransform(135.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiBGdIAAgoIi4AAIAAAoIhNAAIAAq3QgBgMAOAAIBdAAIAoh2IBHAaIgfBcICHAAQARAAAAAQIAAKzgAk5EoIC4AAIAAjWIi4AAgAk5jPIAADUIC4AAIAAjUQAAgKgMAAIihAAQgMAAABAKgACHGTIhbgWIAAhaIBZAaQAnAJAaAAQAeAAAQgMQAWgRAWgxQALgfALiLQAFhfAAiJIgChDQgCgVgKAAIjWAAQgLAogQAlQgPAigTAeIhKgZQAagrAjhbQAPguANhiIBMAHIgLBNIEBAAQARAEAFAGQAGAIAAAaQgCD7gEBnQgBBAgIAzQgHA0gNAoQgMAngTAbQgSAbgYAPQgNAJgTAEIgrAFQggAAgpgIgAB9AmQgahHgghEIBIgZIBCCpQAbBNANAxIhJATQgUhNgbhJg");
	this.shape_2.setTransform(45.1,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRGkQgXgBgSgHQgRgIgMgPQgMgOgGgXQgFgUABgbIAAiyIBNAAIAAClQgCAaAIALQAKAOAhAAICsAAQAlAAAPgVQAHgNAAhPIBNAKQgBA8gFAmQgGAlgHAKQgSAWgRAGQgPAGgpABgAmYFtQAlgqAYg1QAag0ANg7IBKAZQgWBGgeA6QgdA5glArQgdghgbgOgAEqEAQgfg6gdgnIA9gkQAgAtAfA6QAgA6AeBIIg+AfQgghKggg5gAgnCoIA0gxQAsAoBPBYIg4AtQhNhVgqgngAlAB1IAAjoIghAuIhGgjIA0hJIAqhNIAghRIAYhTIBKAPQgbBkgUAxIAAFzgAgSBWIAAhPQA1APAeABQAVAAAIgIQAIgHgBgRIAAkYIilAAQgPAxgbAsQgaAsgmAoIg8gtQAhgjAwhOQAQggAYhxIBJALIgIAtIGlAAIAvAdQgGAtgKArQgKAogOAmIhJgQIAeg2QALgcAAgOQAAgIgKgFIikAAIAAErQAAAmgXAZQgMAOgSAHQgUAJgZAAQgpAAg5gRgAENhPQgehCgdgtIA+geQAhAyAfBCQAfBBAeBQIhAAcQghhUgfhAgAi0AKQAkgfA5hKQAbgmAohUIBBAbQguBmgcApQg6BLgfAag");
	this.shape_3.setTransform(-45.4,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag4GXIAAhNQAxARAaAAQAfAAAIglIAAh3QguArgsAhQgtAhgrAWIgrg4QArgTBMgzQA3gpAvg0IAAgDIjOAqIgSg9IAtgIIAAl9QAAgRAQAAIA9AAQAXhAAFgdIBCARIgSBMIBQAAQAQAAAAARIAAE4IAUgeIA0AgQguBLgaAjIAADfQAAAhgUAVQgLAMgSAGQgUAIgbAAQggAAg4gMgAgzA6IBtgWIAAgvIhtAAgAgzhJIBtAAIAAg+IhtAAgAgzkBIAAA8IBtAAIAAg8QAAgEgHAAIhhAAQgFAAAAAEgAC6GPIAChIQA6ASAdAAQAPAAAHgGQAJgGgBgRIAAoUIiLAAIAAhGICLAAIAAh2IBGAAIAAB2IAtAAIAABGIgtAAIAAImQAABQhWAAQgqAAg9gPgAmSGKIAAkbQAAgYAYAAICxAAQAYAAAAAYIAADmQAAAYgYAAIh/AAIAAAdgAlICpIAAB/IBAAAQAOAAAAgPIAAhwQAAgMgMAAIg3AAQgLAAAAAMgACxh/IA+gJQAlDAAJBbIg9AFQgGhRgpjGgAmEAmIAAhGIDAAAIAABGgAmEhVIAAhGIDAAAIAABGgAmjjNIAAhGID8AAIAABGgAmElJIAAhGIDAAAIAABGg");
	this.shape_4.setTransform(-136,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag4GXIAAhNQAxARAaAAQAeAAAJglIAAh3QgvArgrAhQguAhgqAWIgrg4QAqgTBOgzQA2gpAvg0IAAgDIjOAqIgSg9IAtgIIAAl9QAAgRAQAAIA+AAQAWhAAFgdIBCARIgTBMIBRAAQAQAAAAARIAAE4IAUgeIA0AgQguBLgaAjIAADfQAAAhgTAVQgMAMgSAGQgUAIgcAAQgfAAg4gMgAgzA6IBtgWIAAgvIhtAAgAgzhJIBtAAIAAg+IhtAAgAgzkBIAAA8IBtAAIAAg8QAAgEgHAAIhhAAQgFAAAAAEgAC6GPIAChIQA6ASAcAAQARAAAGgGQAJgGgBgRIAAoUIiLAAIAAhGICLAAIAAh2IBGAAIAAB2IAtAAIAABGIgtAAIAAImQAABQhWAAQgqAAg9gPgAmSGKIAAkbQAAgYAYAAICxAAQAYAAAAAYIAADmQAAAYgYAAIh/AAIAAAdgAlICpIAAB/IA/AAQAPAAAAgPIAAhwQAAgMgMAAIg3AAQgLAAAAAMgACxh/IA9gJQAnDAAIBbIg9AFQgGhRgpjGgAmEAmIAAhGIDAAAIAABGgAmEhVIAAhGIDAAAIAABGgAmjjNIAAhGID8AAIAABGgAmElJIAAhGIDAAAIAABGg");
	this.shape_5.setTransform(-226.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.5,-47.5,547,95.1);


(lib.Tween62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AETGhIAAggImiAAIAAAgIhOAAIAAlyQhMBAhEArIgzg6QBJgsA8gvQA8guAvgyIjnAAIAAhFIEhAAIAegpIkJAAIAAhFIExAAIAUglQjPAHhhgCIgIhKQBtACEFgLQB/gHDCgZIALBJQg0ALhiAJIiYAMIgWAqIFMAAIAABFIl0AAIgbApIG+AAIAABFInzAAIgnArIHKAAQAPAAAAAPIAAHCgAiPE6IGiAAIAAgyImiAAgAiPDDIGiAAIAAgyImiAAgAiPAfIAAArIGiAAIAAgrQAAgKgKAAImPAAQgLAAACAKg");
	this.shape.setTransform(225.1,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvGFQAcgoAjhWQAPgrAKhcIgvAAQgKAAAAgLIAAn4QAAgJAKAAIEbAAQAKAAAAAJIAAH4QAAALgKAAIhFAAIAADEQgBAPAJADQAHADAZAAQAEAAAEgSIAFhJIBBATQgDA4gHAfQgGAggLAGQgTAOgXAAIhTAAQgQgBgJgIQgIgJAAgPIAAj7IgiAAQgKBfgPAwQgkBhgbAwgACVA2IACAEICcAAQABAAABAAQAAgBABAAQAAgBABAAQAAgBAAgBIAAhKIiiAAgACVhZICiAAIAAhWIiiAAgACVlEIAABPICiAAIAAhPIgEgDIicAAgAlLGTQgYAAAAgYIAAkIIgNASQgdgfgWgLQAaggASgpQASgnALgwIBCAUIgOAsIB5AAIAchAIA/AaIgQAmICRAAIgGA+IiYAAIAAAyICLAAIAAA/IiLAAIAAA2ICLAAIAAA+IiLAAIAAA3ICbAAIAAA+gAkdFKQAAALAKAAIBdAAIAAg3IhnAAgAkdDgIBnAAIAAg2IhnAAgAkdBDIAAAoIBnAAIAAgyIhdAAQgKAAAAAKgAighNQgIAAAAgKIAAiiQAAgIAIAAIC3AAQAJAAAAAIIAACiQAAAKgJAAgAhpjDIAAA2IACAEIBFAAIAEgEIAAg2IgEgDIhFAAQgEAAACADgAmFhNQgIAAAAgKIAAiiQAAgIAIAAIC4AAQAIAAAAAIIAACiQAAAKgIAAgAlPjDIAAA2IADAEIBGAAIACgEIAAg2IgCgDIhGAAQgEAAABADgAh9kVIAAgkIhuAAIAAAgIhGAAIAAggIhlAAIAAg+IBlAAIAAgoIBGAAIAAAoIBuAAIAAgoIBGAAIAAAoIBhAAIAAA+IhhAAIAAAkg");
	this.shape_1.setTransform(135.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiBGdIAAgoIi4AAIAAAoIhNAAIAAq3QgBgMAOAAIBdAAIAoh2IBHAaIgfBcICHAAQARAAAAAQIAAKzgAk5EoIC4AAIAAjWIi4AAgAk5jPIAADUIC4AAIAAjUQAAgKgMAAIihAAQgMAAABAKgACHGTIhbgWIAAhaIBZAaQAnAJAaAAQAeAAAQgMQAWgRAWgxQALgfALiLQAFhfAAiJIgChDQgCgVgKAAIjWAAQgLAogQAlQgPAigTAeIhKgZQAagrAjhbQAPguANhiIBMAHIgLBNIEBAAQARAEAFAGQAGAIAAAaQgCD7gEBnQgBBAgIAzQgHA0gNAoQgMAngTAbQgSAbgYAPQgNAJgTAEIgrAFQggAAgpgIgAB9AmQgahHgghEIBIgZIBCCpQAbBNANAxIhJATQgUhNgbhJg");
	this.shape_2.setTransform(45.1,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRGkQgXgBgSgHQgRgIgMgPQgMgOgGgXQgFgUABgbIAAiyIBNAAIAAClQgCAaAIALQAKAOAhAAICsAAQAlAAAPgVQAHgNAAhPIBNAKQgBA8gFAmQgGAlgHAKQgSAWgRAGQgPAGgpABgAmYFtQAlgqAYg1QAag0ANg7IBKAZQgWBGgeA6QgdA5glArQgdghgbgOgAEqEAQgfg6gdgnIA9gkQAgAtAfA6QAgA6AeBIIg+AfQgghKggg5gAgnCoIA0gxQAsAoBPBYIg4AtQhNhVgqgngAlAB1IAAjoIghAuIhGgjIA0hJIAqhNIAghRIAYhTIBKAPQgbBkgUAxIAAFzgAgSBWIAAhPQA1APAeABQAVAAAIgIQAIgHgBgRIAAkYIilAAQgPAxgbAsQgaAsgmAoIg8gtQAhgjAwhOQAQggAYhxIBJALIgIAtIGlAAIAvAdQgGAtgKArQgKAogOAmIhJgQIAeg2QALgcAAgOQAAgIgKgFIikAAIAAErQAAAmgXAZQgMAOgSAHQgUAJgZAAQgpAAg5gRgAENhPQgehCgdgtIA+geQAhAyAfBCQAfBBAeBQIhAAcQghhUgfhAgAi0AKQAkgfA5hKQAbgmAohUIBBAbQguBmgcApQg6BLgfAag");
	this.shape_3.setTransform(-45.4,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag4GXIAAhNQAxARAaAAQAfAAAIglIAAh3QguArgsAhQgtAhgrAWIgrg4QArgTBMgzQA3gpAvg0IAAgDIjOAqIgSg9IAtgIIAAl9QAAgRAQAAIA9AAQAXhAAFgdIBCARIgSBMIBQAAQAQAAAAARIAAE4IAUgeIA0AgQguBLgaAjIAADfQAAAhgUAVQgLAMgSAGQgUAIgbAAQggAAg4gMgAgzA6IBtgWIAAgvIhtAAgAgzhJIBtAAIAAg+IhtAAgAgzkBIAAA8IBtAAIAAg8QAAgEgHAAIhhAAQgFAAAAAEgAC6GPIAChIQA6ASAdAAQAPAAAHgGQAJgGgBgRIAAoUIiLAAIAAhGICLAAIAAh2IBGAAIAAB2IAtAAIAABGIgtAAIAAImQAABQhWAAQgqAAg9gPgAmSGKIAAkbQAAgYAYAAICxAAQAYAAAAAYIAADmQAAAYgYAAIh/AAIAAAdgAlICpIAAB/IBAAAQAOAAAAgPIAAhwQAAgMgMAAIg3AAQgLAAAAAMgACxh/IA+gJQAlDAAJBbIg9AFQgGhRgpjGgAmEAmIAAhGIDAAAIAABGgAmEhVIAAhGIDAAAIAABGgAmjjNIAAhGID8AAIAABGgAmElJIAAhGIDAAAIAABGg");
	this.shape_4.setTransform(-136,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag4GXIAAhNQAxARAaAAQAeAAAJglIAAh3QgvArgrAhQguAhgqAWIgrg4QAqgTBOgzQA2gpAvg0IAAgDIjOAqIgSg9IAtgIIAAl9QAAgRAQAAIA+AAQAWhAAFgdIBCARIgTBMIBRAAQAQAAAAARIAAE4IAUgeIA0AgQguBLgaAjIAADfQAAAhgTAVQgMAMgSAGQgUAIgcAAQgfAAg4gMgAgzA6IBtgWIAAgvIhtAAgAgzhJIBtAAIAAg+IhtAAgAgzkBIAAA8IBtAAIAAg8QAAgEgHAAIhhAAQgFAAAAAEgAC6GPIAChIQA6ASAcAAQARAAAGgGQAJgGgBgRIAAoUIiLAAIAAhGICLAAIAAh2IBGAAIAAB2IAtAAIAABGIgtAAIAAImQAABQhWAAQgqAAg9gPgAmSGKIAAkbQAAgYAYAAICxAAQAYAAAAAYIAADmQAAAYgYAAIh/AAIAAAdgAlICpIAAB/IA/AAQAPAAAAgPIAAhwQAAgMgMAAIg3AAQgLAAAAAMgACxh/IA9gJQAnDAAIBbIg9AFQgGhRgpjGgAmEAmIAAhGIDAAAIAABGgAmEhVIAAhGIDAAAIAABGgAmjjNIAAhGID8AAIAABGgAmElJIAAhGIDAAAIAABGg");
	this.shape_5.setTransform(-226.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.5,-47.5,547,95.1);


(lib.Tween59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYEuQAcgJAbgOQAcgNAZgSIAwgoIAsguQgSg9gPhFQgOhDgKhLInGAAIAAg7IDCAAIAAg/IieAAIAAg6ICeAAIAAhAIA9AAIAABAICMAAIAAA6IiMAAIAAA/IC/AAQgJhAgGhyIA+AHQACA+AMBtIC0AAIAAA7IisAAQAWCUAQA6QARggAOguQAPgvAKg7IA8ARQgWBZgQApQgiBNgWAiIAXBDQAOAfAEAAQAQAAACh0IA8ARQgDAygJAoQgIAmgNAZQgQAZgVAAQgQAAgQgNIgSgRQgYgpgRgwQg1A1ggAWQhAAnglANgAqLFTIgDhJQAnAPA1AGQBKAAANh6QAIh4AAg5QAAgigCgKQgDgPgHAAIi7AAIAAArIB5AAQAKAAgBAIIAACVQAAAIgVAAQAQAgAdBZIg5ATIgLgjQjPAahVAFIgKhCICdgLIAAg7Ih9AAQgJAAAAgIIAAiVQAAgIAJAAIB9AAIAAgrIhiAAQgMARgbAZIgwgqQA1gqAbg2IgrAAQgHAAAAgKIAAiXQAAgIAHAAIG9AAQAKAAgBAIIAACXQABAKgKAAIlTAAIgQAlIFhAAQANAAAHALQAEAJAAAzIgFDCQgHBngUAqQgQAigbATQgOAKgRAFQgTAGgXAAQgpAAg4gPgAqaC+IBAgJIgNgcIAogQIhbAAgAqaBRIBFAAIADgDIAAgwIgDgDIhFAAgAsgAeIAAAwIACADIBJAAIAAg2IhJAAQAAAAgBABQgBAAAAAAQAAAAAAABQAAAAAAABgAoqjfIBHAAIADgDIAAg1IgDgCIhHAAgAqsjfIBIAAIAAg6IhIAAgAszkXIAAA1IADADIBJAAIAAg6IhJAAQgBAAgBABQgBAAAAAAQAAAAAAABQAAAAAAAAgAxJFMIAAhDQAzAPAXAAQASAAAMgQQALgRAIgiQAIgjAEgkQAEgpgCgpIg2A2QgZAXgWAOIgsguQApgaAjgiQAigiAbgoQgGgmgVhCQgbAkgiAhIgzgkQAwgwAigwQgTgfg4g/IA1glQAhAjAYAmQASgjATgxIA4AWQgbBFgeA1QAaA6ANAyQAJAtAGAtQAEArAAAqQgFBrgRA3QgOAugVAZQgMAPgNAIQgPAHgRAAQgeAAg5gUgAPYFeIAAgjIlrAAIAAAjIhAAAIAAkiIh1AYIgZg9QBJgNBIgSQBHgSBGgYIBBggIlWAAIAAg9IEbAAIAAhJIjTAAIAAg9IDTAAIAAhKIBBAAIAABKIDEAAIAAAaIBEhMIAxApQhWBlgrAqICZAAIAAA9IjjAAQhdA6g4AaIEvAAQANAAAAAMIAAFQgAJtD9IFrAAIAAg+IlrAAgAJtBHIAAA7IFrAAIAAg7QABgHgKgBIlZAAQgKABABAHgAMEiPIBYAAIAhgbIAsguIilAAgAlIEfIBogQIAAiBQgwAfgrAQIgeg4QAzgUAqgcQArgdAfgkIiLAAIAAg5ICuAAIAAg3IBBAAIAAA3ICWAAIAAA5IiqAAQgcAmglAlIAACiQA6gRAtgTIAaA4Qg2AUhGASQhEARhSAOgAiMB4IApgsIAxAqQAygsAhgmIApAqQgeAkgyAuIA2A8IgrApQhShfg/gugADQkrIA1gnQAkAnAlBCIg3AkQgZgtgug5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.8,-35.5,221.7,71);


(lib.Tween58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYEuQAcgJAbgOQAcgNAZgSIAwgoIAsguQgSg9gPhFQgOhDgKhLInGAAIAAg7IDCAAIAAg/IieAAIAAg6ICeAAIAAhAIA9AAIAABAICMAAIAAA6IiMAAIAAA/IC/AAQgJhAgGhyIA+AHQACA+AMBtIC0AAIAAA7IisAAQAWCUAQA6QARggAOguQAPgvAKg7IA8ARQgWBZgQApQgiBNgWAiIAXBDQAOAfAEAAQAQAAACh0IA8ARQgDAygJAoQgIAmgNAZQgQAZgVAAQgQAAgQgNIgSgRQgYgpgRgwQg1A1ggAWQhAAnglANgAqLFTIgDhJQAnAPA1AGQBKAAANh6QAIh4AAg5QAAgigCgKQgDgPgHAAIi7AAIAAArIB5AAQAKAAgBAIIAACVQAAAIgVAAQAQAgAdBZIg5ATIgLgjQjPAahVAFIgKhCICdgLIAAg7Ih9AAQgJAAAAgIIAAiVQAAgIAJAAIB9AAIAAgrIhiAAQgMARgbAZIgwgqQA1gqAbg2IgrAAQgHAAAAgKIAAiXQAAgIAHAAIG9AAQAKAAgBAIIAACXQABAKgKAAIlTAAIgQAlIFhAAQANAAAHALQAEAJAAAzIgFDCQgHBngUAqQgQAigbATQgOAKgRAFQgTAGgXAAQgpAAg4gPgAqaC+IBAgJIgNgcIAogQIhbAAgAqaBRIBFAAIADgDIAAgwIgDgDIhFAAgAsgAeIAAAwIACADIBJAAIAAg2IhJAAQAAAAgBABQgBAAAAAAQAAAAAAABQAAAAAAABgAoqjfIBHAAIADgDIAAg1IgDgCIhHAAgAqsjfIBIAAIAAg6IhIAAgAszkXIAAA1IADADIBJAAIAAg6IhJAAQgBAAgBABQgBAAAAAAQAAAAAAABQAAAAAAAAgAxJFMIAAhDQAzAPAXAAQASAAAMgQQALgRAIgiQAIgjAEgkQAEgpgCgpIg2A2QgZAXgWAOIgsguQApgaAjgiQAigiAbgoQgGgmgVhCQgbAkgiAhIgzgkQAwgwAigwQgTgfg4g/IA1glQAhAjAYAmQASgjATgxIA4AWQgbBFgeA1QAaA6ANAyQAJAtAGAtQAEArAAAqQgFBrgRA3QgOAugVAZQgMAPgNAIQgPAHgRAAQgeAAg5gUgAPYFeIAAgjIlrAAIAAAjIhAAAIAAkiIh1AYIgZg9QBJgNBIgSQBHgSBGgYIBBggIlWAAIAAg9IEbAAIAAhJIjTAAIAAg9IDTAAIAAhKIBBAAIAABKIDEAAIAAAaIBEhMIAxApQhWBlgrAqICZAAIAAA9IjjAAQhdA6g4AaIEvAAQANAAAAAMIAAFQgAJtD9IFrAAIAAg+IlrAAgAJtBHIAAA7IFrAAIAAg7QABgHgKgBIlZAAQgKABABAHgAMEiPIBYAAIAhgbIAsguIilAAgAlIEfIBogQIAAiBQgwAfgrAQIgeg4QAzgUAqgcQArgdAfgkIiLAAIAAg5ICuAAIAAg3IBBAAIAAA3ICWAAIAAA5IiqAAQgcAmglAlIAACiQA6gRAtgTIAaA4Qg2AUhGASQhEARhSAOgAiMB4IApgsIAxAqQAygsAhgmIApAqQgeAkgyAuIA2A8IgrApQhShfg/gugADQkrIA1gnQAkAnAlBCIg3AkQgZgtgug5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.8,-35.5,221.7,71);


(lib.Tween57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACxDoQgggigbgiQgcgjgWglQgWglgSgmQgRgmgLgoQgYBNgQAiQggBEgWAeQguA7gcAbQg9A0gkAZIgtgsQAigTAdgXQAegXAZgaQAagbAWgeQAWgeARgiQASgiANgkQAOgmAJgpQAJgqAFgtQAGgtAAgwIAAglIA7AAIAAA+IABAAQADBNAIAoQATBTAVAsQAPAhAVAhQAWAjAbAjQAdAkAjAjQAlAlAtAkIgzAlg");
	this.shape.setTransform(440.7,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHErQgtgJglgSQglgTgegbQgegbgWgkQgEAmgMAkQgMAkgUAfIg3gaQATgbAPgbQAPgbAKgcQAKgcAFgdQAFgcABgdIA2AGIgDAjIAGAQQAggIBcgdQAogOAhgSQAngVAhgYQBbhEAYhdQAAgIgMABInnAAIAAg8IEHAAIAAhNIA9AAIAABNIDOAAIAtAfQgHAhgMAeQgMAfgRAdQgYAogjAjQgjAigvAgQgwAeg5AaQg7AbhHAVIANAOQASAPAXAMQAXAMAbAHQAcAIAfADQAgAFAmAAIDZgJIgMBCIjTAGQg0AAgsgJg");
	this.shape_1.setTransform(372.6,44.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADmE3IAAgfInLAAIAAAfIg9AAIAAoLQAAgTAUgBIDzAAIAAhNIA7AAIAABNIDuAAQAVABAAATIAAILgAAgDfIDGAAIAAiwIjGAAgAjlDfIDKAAIAAiwIjKAAgAAggJIDGAAIAAicQAAgJgHAAIi/AAgAjlilIAACcIDKAAIAAilIjCAAQgKAAACAJg");
	this.shape_2.setTransform(305,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADYE3IAAgcImvAAIAAAcIg6AAIAAoLQAAgUAUAAIDCAAQAVgyAJgcIA1AUQgIAdgNAdID7AAQAUAAAAAUIAAILgAjXDhIGvAAIAAhYImvAAgAjXBQIGvAAIAAhiImvAAgAjXimIAABaIGvAAIAAhaQAAgIgIAAImfAAQgKAAACAIg");
	this.shape_3.setTransform(237.2,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkxE0IAAg0IEWAAIAAggIj1AAIAAg1ID1AAIAAglIjZAAQgIAAAAgJIAAjgQAAgGAIgBIDZAAIAAgjIkaAAIAAg0IEaAAIAAggQifAEg7gBIgGg5QBGABC1gHQBagFCNgRIAIA5QgpAIg7AFIhuAJIAAAjIEaAAIAAA0IkaAAIAAAjIDZAAQAHABAAAGIAADgQAAAJgHAAIjZAAIAAAlID0AAIAAA1Ij0AAIAAAgIEUAAIAAA0gAAdBRICnAAIACgCIAAgnIipAAgAjFBPIADACICnAAIAAgpIiqAAgAAdgKICpAAIAAgqIgCgBIinAAgAjFg0IAAAqICqAAIAAgrIinAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_4.setTransform(169.5,44.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAcEwIAAg6IA0ANIAZACQAaAAAIgJQAFgFAAgMIAAgWIkUAAIA/A8IgsAlQgtgvgYgRIAhghIicAAIAAg0IHBAAIAAggImMAAQgHAAAAgIIAAkZQAAgHAHAAICnAAIAAgnIjXAAIAAgxICiAAIgWgcIAtghQAWAXAWAmICSAAQAigoALgTIAtAhIgSAaICaAAIAAAxIjUAAIAAAnICoAAQAHAAAAAHIAAEZQAAAIgHAAIg5AAIAAAgIBrAAIAAA0IhrAAIAAAkQAABEhTAAQgmAAgzgNgAjOBPIACADIGdAAIACgDIAAgkImhAAgAjOh1IAAB0IGhAAIAAggIiYAAQgKAAgHgGQgFgGAAgMIAAg+IhJAAQgCAWgGAQQgIARgPALQgPANgZAIQgZAIgkAFIgPg1QAmgBAXgIQAYgIAJgOIADgQIh2AAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAABABgABZhaQAAAMANAAIBtAAIAAgnIgCgCIh4AAgAgjinIBIAAIAAgnIhIAAg");
	this.shape_5.setTransform(101.5,44.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdEtIAAmDQhIBLgpAhQhXBBgwAcIgogyQAtgXAjgWQArgaAmghQAcgYA3g8QAcghA4hUIk3AAIAAg8IJVAAIAAA8IjaAAIgxBOIAAHPgACTADQhJhAghgYIAkgwQAlAbBPBEQAoAlBVBaIguArQhXhdgmgkg");
	this.shape_6.setTransform(33.9,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABpEwIAAhEQAtAUAYAAQAQAAAPgHQAPgGAOgNQAIgIAFgQQAFgPACgVQADgsAAglQAAglgLAAImoAAQg6BBggAdIgtgkQAigeAfggQAfggAbgjQAbgiAWglQAXgmATgnIipAAIAAg3IBuAAQgsgigcgPIAegsQA1AhAgAZIgaAjIA/AAIAchbIA2ASIgYBJID4AAQAHAAAHAGQAJAIAAAKIgBAGIgYBSIAhAAQAIAAAHAGQAJAIgBAKIAAAGIgZBNIAjAAQAOADADAEQAFAGABASQgBBZgFA8QgBAhgHAYQgHAYgMAPQgMAPgPAKQgMAIgPAFQgQAFgXAAQgkAAgwgMgAiHgCIFMAAIARg1Ik7AAgAhFhuIDqAAIARg5IjgAAgAkjESQAUgWAcg3QANgcAQhBIA7ARQgZBKgPAgQggA7gUAZQgVgYgXgNgAhrEkQgEh1gLhDIA2gEQAJBNAGBvgAgQBhIA0gMQAUA4AZB0Ig1AIQgVhVgXhTgABbBZIAygXQAaAsAlBSIgyAUQgjhJgcgyg");
	this.shape_7.setTransform(-34.4,44.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA1EwIAApQQAAgPAPAAIDdAAQAOAAABAPIAAHlQgCBDhPAAQghAAgtgLIAAg/QAuAOAXAAQARAAAJgKQAGgIAAgMIAAmfQAAgEgFAAIh+AAQgEAAgBAEIAAIhgAg0DyIjoA4IgTg5IAigIIAAoGQAAgSARAAIDwAAQARAAAAASIAAEwQAAASgRAAIjHAAIAAC3ICLgiIgkhVIA2gTQAiBNAqCBIg2APgAjTgTICVAAQAKAAAAgKIAAhJIifAAgAjTjnIAABHICfAAIAAhHQAAgOgPAAIiDAAQgNAAAAAOg");
	this.shape_8.setTransform(-103.3,44.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABpEwIAAhEQAtAUAYAAQAQAAAPgHQAPgGAOgNQAIgIAFgQQAFgPABgVQAEgsAAglQAAglgLAAImpAAQg5BBghAdIgtgkQAkgeAeggQAfggAbgjQAbgiAWglQAXgmATgnIipAAIAAg3IBuAAQgsgigcgPIAegsQA2AhAeAZIgZAjIA+AAIAdhbIA2ASIgXBJID3AAQAHAAAHAGQAJAIAAAKIgBAGIgZBSIAiAAQAIAAAHAGQAIAIAAAKIAAAGIgYBNIAiAAQAOADADAEQAGAGAAASQAABZgGA8QgBAhgHAYQgHAYgMAPQgMAPgPAKQgNAIgOAFQgQAFgXAAQgjAAgxgMgAiHgCIFMAAIARg1Ik6AAgAhFhuIDqAAIARg5IjgAAgAkiESQASgWAdg3QANgcAQhBIA7ARQgZBKgPAgQghA7gTAZQgVgYgWgNgAhrEkQgEh1gLhDIA2gEQAJBNAGBvgAgQBhIA0gMQAUA4AZB0Ig2AIQgUhVgXhTgABaBZIAzgXQAaAsAlBSIgzAUQgihJgdgyg");
	this.shape_9.setTransform(-373.5,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ADoErIAAgdInPAAIAAAdIg5AAIAApBQAAgUATAAIIbAAQATAAAAAUIAAJBgAjnjpIAAG9IHPAAIAAm9QAAgHgIAAIm/AAQgJAAABAHgAjVCUQAogTAegYQAfgZAXgdQAYgfANgiQAPgkAGgpIimAAIAAg3ICrAAIAAhCIA4AAIAABCICoAAIAAA3IikAAQAGAkANAhQAOAgAXAeQAWAfAgAbQAfAcAoAZIg0AoQh5hbgphjQgxB5h7BIg");
	this.shape_10.setTransform(-441,45.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjXE4IAAkIIgvAsIgwgpQAfgZAcgaQAcgcAZgfQAZgeAWgiQAVghASgjIi4AAIAAg6IDOAAIAWg+IA5AUIgPAqIFLAAIAAA6IliAAIgMAZQgRAlgYAlQgZAmgfAmIAAFIgAh0EnIAAg6ICxAAIAAjMIikAAIAAg4ICkAAIAAhvIA8AAIAABvICrAAIAAA4IirAAIAADMIC+AAIAAA6g");
	this.shape_11.setTransform(304.5,-44.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEE1QgbgFgggLIABhCQAkARAaAIQAcAIAUAAQARAAAMgHQAKgGAHgMQALgSAAgeQAAgfgMgqIjiAAIAAg6IDNAAQgTgpgXgoIAcAAIBLg9IABgGIgFgCIjFAAIAAg3IEbAAIAuAqIiTBxIAVAyICrAAIAAA6IiaAAQAOA1AAAjQAAAXgHAUQgHAWgNAOQgQAQgVAJQgYAJgfAAQgYAAgbgGgAjbE2IAAkRIgtAnIgygpIAygnQAfgbAZgbQAfghAVghQAagnAMgmIiwAAIAAg6IDBAAIAMg3IA7ALIgJAsIFSAAIAAA6IlhAAQgMApgZAtQgqBDgdAeIAAFIg");
	this.shape_12.setTransform(237.1,-44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ak4ENIAFgFQAWgVASgYQASgXAPgbQAPgaALgeQALgeAJggIA3AQIgUBDQAZAiAeAXQAgAWAlAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDTAAIgPA5IiwAAQg/gCgqgEQgvgGgjgLQglgLgcgUQgcgTgWgeIgrA/QgWAegWAWgAjghFQgIAAAAgIIAAjbQAAgIAIAAIHDAAQAIAAAAAIIAADbQAAAIgIAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_13.setTransform(169.4,-43.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_14.setTransform(-101.8,-45.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvEsIAAoaIkBAAIAAg9IJhAAIAAA9IklAAIAABPQBEApBAAtQBBAsA+AvIgmA2QiGhqhXg7IAAGJg");
	this.shape_15.setTransform(-169.7,-43.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AkwEuIAAg8IEUAAIAAioIjvAAIAAg7IDvAAIAAiVIj+AAIAAg8IECAAQghgsgagXIAugoQAxA0AcAmIgWARIEIAAIAAA8Ij7AAIAACVIDtAAIAAA7IjtAAIAACoIESAAIAAA8g");
	this.shape_16.setTransform(-237.5,-46);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ADCEgQgfgRgagWQgbgXgWgdQgXgegSgjQgTgjgPgrIjRAAIAACsQBlgTBigcIARA7QhaAag2AMQhxAUg/AHIgOg6IA9gIIAAoLQAAgSARAAIHdAAQASAAAAASIAACvQAAATgSgBIjRAAIAWBbIDnAAIAAA4IjVAAQANAjAWAiQAVAgAZAbQAYAaAWAOQAWAQAOAAQARAAADgSQAHgogCgtIA3AQIgIBNQgFAegIAOQgKAUgMAHQgKAGgQAAQgYAAgcgRgAgDgCIgXhbIiqAAIAABbIDBAAgAjEjoIAABSIGFAAQAIAAAAgJIAAhJQAAgOgOAAIlxAAQgOAAAAAOg");
	this.shape_17.setTransform(-305.2,-44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476.6,-80.3,953.3,160.6);


(lib.Tween56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACxDoQgggigbgiQgcgjgWglQgWglgSgmQgRgmgLgoQgYBNgQAiQggBEgWAeQguA7gcAbQg9A0gkAZIgtgsQAigTAdgXQAegXAZgaQAagbAWgeQAWgeARgiQASgiANgkQAOgmAJgpQAJgqAFgtQAGgtAAgwIAAglIA7AAIAAA+IABAAQADBNAIAoQATBTAVAsQAPAhAVAhQAWAjAbAjQAdAkAjAjQAlAlAtAkIgzAlg");
	this.shape.setTransform(440.7,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHErQgtgJglgSQglgTgegbQgegbgWgkQgEAmgMAkQgMAkgUAfIg3gaQATgbAPgbQAPgbAKgcQAKgcAFgdQAFgcABgdIA2AGIgDAjIAGAQQAggIBcgdQAogOAhgSQAngVAhgYQBbhEAYhdQAAgIgMABInnAAIAAg8IEHAAIAAhNIA9AAIAABNIDOAAIAtAfQgHAhgMAeQgMAfgRAdQgYAogjAjQgjAigvAgQgwAeg5AaQg7AbhHAVIANAOQASAPAXAMQAXAMAbAHQAcAIAfADQAgAFAmAAIDZgJIgMBCIjTAGQg0AAgsgJg");
	this.shape_1.setTransform(372.6,44.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADmE3IAAgfInLAAIAAAfIg9AAIAAoLQAAgTAUgBIDzAAIAAhNIA7AAIAABNIDuAAQAVABAAATIAAILgAAgDfIDGAAIAAiwIjGAAgAjlDfIDKAAIAAiwIjKAAgAAggJIDGAAIAAicQAAgJgHAAIi/AAgAjlilIAACcIDKAAIAAilIjCAAQgKAAACAJg");
	this.shape_2.setTransform(305,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADYE3IAAgcImvAAIAAAcIg6AAIAAoLQAAgUAUAAIDCAAQAVgyAJgcIA1AUQgIAdgNAdID7AAQAUAAAAAUIAAILgAjXDhIGvAAIAAhYImvAAgAjXBQIGvAAIAAhiImvAAgAjXimIAABaIGvAAIAAhaQAAgIgIAAImfAAQgKAAACAIg");
	this.shape_3.setTransform(237.2,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkxE0IAAg0IEWAAIAAggIj1AAIAAg1ID1AAIAAglIjZAAQgIAAAAgJIAAjgQAAgGAIgBIDZAAIAAgjIkaAAIAAg0IEaAAIAAggQifAEg7gBIgGg5QBGABC1gHQBagFCNgRIAIA5QgpAIg7AFIhuAJIAAAjIEaAAIAAA0IkaAAIAAAjIDZAAQAHABAAAGIAADgQAAAJgHAAIjZAAIAAAlID0AAIAAA1Ij0AAIAAAgIEUAAIAAA0gAAdBRICnAAIACgCIAAgnIipAAgAjFBPIADACICnAAIAAgpIiqAAgAAdgKICpAAIAAgqIgCgBIinAAgAjFg0IAAAqICqAAIAAgrIinAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_4.setTransform(169.5,44.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAcEwIAAg6IA0ANIAZACQAaAAAIgJQAFgFAAgMIAAgWIkUAAIA/A8IgsAlQgtgvgYgRIAhghIicAAIAAg0IHBAAIAAggImMAAQgHAAAAgIIAAkZQAAgHAHAAICnAAIAAgnIjXAAIAAgxICiAAIgWgcIAtghQAWAXAWAmICSAAQAigoALgTIAtAhIgSAaICaAAIAAAxIjUAAIAAAnICoAAQAHAAAAAHIAAEZQAAAIgHAAIg5AAIAAAgIBrAAIAAA0IhrAAIAAAkQAABEhTAAQgmAAgzgNgAjOBPIACADIGdAAIACgDIAAgkImhAAgAjOh1IAAB0IGhAAIAAggIiYAAQgKAAgHgGQgFgGAAgMIAAg+IhJAAQgCAWgGAQQgIARgPALQgPANgZAIQgZAIgkAFIgPg1QAmgBAXgIQAYgIAJgOIADgQIh2AAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAABABgABZhaQAAAMANAAIBtAAIAAgnIgCgCIh4AAgAgjinIBIAAIAAgnIhIAAg");
	this.shape_5.setTransform(101.5,44.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdEtIAAmDQhIBLgpAhQhXBBgwAcIgogyQAtgXAjgWQArgaAmghQAcgYA3g8QAcghA4hUIk3AAIAAg8IJVAAIAAA8IjaAAIgxBOIAAHPgACTADQhJhAghgYIAkgwQAlAbBPBEQAoAlBVBaIguArQhXhdgmgkg");
	this.shape_6.setTransform(33.9,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABpEwIAAhEQAtAUAYAAQAQAAAPgHQAPgGAOgNQAIgIAFgQQAFgPACgVQADgsAAglQAAglgLAAImoAAQg6BBggAdIgtgkQAigeAfggQAfggAbgjQAbgiAWglQAXgmATgnIipAAIAAg3IBuAAQgsgigcgPIAegsQA1AhAgAZIgaAjIA/AAIAchbIA2ASIgYBJID4AAQAHAAAHAGQAJAIAAAKIgBAGIgYBSIAhAAQAIAAAHAGQAJAIgBAKIAAAGIgZBNIAjAAQAOADADAEQAFAGABASQgBBZgFA8QgBAhgHAYQgHAYgMAPQgMAPgPAKQgMAIgPAFQgQAFgXAAQgkAAgwgMgAiHgCIFMAAIARg1Ik7AAgAhFhuIDqAAIARg5IjgAAgAkjESQAUgWAcg3QANgcAQhBIA7ARQgZBKgPAgQggA7gUAZQgVgYgXgNgAhrEkQgEh1gLhDIA2gEQAJBNAGBvgAgQBhIA0gMQAUA4AZB0Ig1AIQgVhVgXhTgABbBZIAygXQAaAsAlBSIgyAUQgjhJgcgyg");
	this.shape_7.setTransform(-34.4,44.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA1EwIAApQQAAgPAPAAIDdAAQAOAAABAPIAAHlQgCBDhPAAQghAAgtgLIAAg/QAuAOAXAAQARAAAJgKQAGgIAAgMIAAmfQAAgEgFAAIh+AAQgEAAgBAEIAAIhgAg0DyIjoA4IgTg5IAigIIAAoGQAAgSARAAIDwAAQARAAAAASIAAEwQAAASgRAAIjHAAIAAC3ICLgiIgkhVIA2gTQAiBNAqCBIg2APgAjTgTICVAAQAKAAAAgKIAAhJIifAAgAjTjnIAABHICfAAIAAhHQAAgOgPAAIiDAAQgNAAAAAOg");
	this.shape_8.setTransform(-103.3,44.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABpEwIAAhEQAtAUAYAAQAQAAAPgHQAPgGAOgNQAIgIAFgQQAFgPABgVQAEgsAAglQAAglgLAAImpAAQg5BBghAdIgtgkQAkgeAeggQAfggAbgjQAbgiAWglQAXgmATgnIipAAIAAg3IBuAAQgsgigcgPIAegsQA2AhAeAZIgZAjIA+AAIAdhbIA2ASIgXBJID3AAQAHAAAHAGQAJAIAAAKIgBAGIgZBSIAiAAQAIAAAHAGQAIAIAAAKIAAAGIgYBNIAiAAQAOADADAEQAGAGAAASQAABZgGA8QgBAhgHAYQgHAYgMAPQgMAPgPAKQgNAIgOAFQgQAFgXAAQgjAAgxgMgAiHgCIFMAAIARg1Ik6AAgAhFhuIDqAAIARg5IjgAAgAkiESQASgWAdg3QANgcAQhBIA7ARQgZBKgPAgQghA7gTAZQgVgYgWgNgAhrEkQgEh1gLhDIA2gEQAJBNAGBvgAgQBhIA0gMQAUA4AZB0Ig2AIQgUhVgXhTgABaBZIAzgXQAaAsAlBSIgzAUQgihJgdgyg");
	this.shape_9.setTransform(-373.5,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ADoErIAAgdInPAAIAAAdIg5AAIAApBQAAgUATAAIIbAAQATAAAAAUIAAJBgAjnjpIAAG9IHPAAIAAm9QAAgHgIAAIm/AAQgJAAABAHgAjVCUQAogTAegYQAfgZAXgdQAYgfANgiQAPgkAGgpIimAAIAAg3ICrAAIAAhCIA4AAIAABCICoAAIAAA3IikAAQAGAkANAhQAOAgAXAeQAWAfAgAbQAfAcAoAZIg0AoQh5hbgphjQgxB5h7BIg");
	this.shape_10.setTransform(-441,45.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjXE4IAAkIIgvAsIgwgpQAfgZAcgaQAcgcAZgfQAZgeAWgiQAVghASgjIi4AAIAAg6IDOAAIAWg+IA5AUIgPAqIFLAAIAAA6IliAAIgMAZQgRAlgYAlQgZAmgfAmIAAFIgAh0EnIAAg6ICxAAIAAjMIikAAIAAg4ICkAAIAAhvIA8AAIAABvICrAAIAAA4IirAAIAADMIC+AAIAAA6g");
	this.shape_11.setTransform(304.5,-44.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEE1QgbgFgggLIABhCQAkARAaAIQAcAIAUAAQARAAAMgHQAKgGAHgMQALgSAAgeQAAgfgMgqIjiAAIAAg6IDNAAQgTgpgXgoIAcAAIBLg9IABgGIgFgCIjFAAIAAg3IEbAAIAuAqIiTBxIAVAyICrAAIAAA6IiaAAQAOA1AAAjQAAAXgHAUQgHAWgNAOQgQAQgVAJQgYAJgfAAQgYAAgbgGgAjbE2IAAkRIgtAnIgygpIAygnQAfgbAZgbQAfghAVghQAagnAMgmIiwAAIAAg6IDBAAIAMg3IA7ALIgJAsIFSAAIAAA6IlhAAQgMApgZAtQgqBDgdAeIAAFIg");
	this.shape_12.setTransform(237.1,-44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ak4ENIAFgFQAWgVASgYQASgXAPgbQAPgaALgeQALgeAJggIA3AQIgUBDQAZAiAeAXQAgAWAlAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDTAAIgPA5IiwAAQg/gCgqgEQgvgGgjgLQglgLgcgUQgcgTgWgeIgrA/QgWAegWAWgAjghFQgIAAAAgIIAAjbQAAgIAIAAIHDAAQAIAAAAAIIAADbQAAAIgIAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_13.setTransform(169.4,-43.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_14.setTransform(-101.8,-45.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvEsIAAoaIkBAAIAAg9IJhAAIAAA9IklAAIAABPQBEApBAAtQBBAsA+AvIgmA2QiGhqhXg7IAAGJg");
	this.shape_15.setTransform(-169.7,-43.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AkwEuIAAg8IEUAAIAAioIjvAAIAAg7IDvAAIAAiVIj+AAIAAg8IECAAQghgsgagXIAugoQAxA0AcAmIgWARIEIAAIAAA8Ij7AAIAACVIDtAAIAAA7IjtAAIAACoIESAAIAAA8g");
	this.shape_16.setTransform(-237.5,-46);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ADCEgQgfgRgagWQgbgXgWgdQgXgegSgjQgTgjgPgrIjRAAIAACsQBlgTBigcIARA7QhaAag2AMQhxAUg/AHIgOg6IA9gIIAAoLQAAgSARAAIHdAAQASAAAAASIAACvQAAATgSgBIjRAAIAWBbIDnAAIAAA4IjVAAQANAjAWAiQAVAgAZAbQAYAaAWAOQAWAQAOAAQARAAADgSQAHgogCgtIA3AQIgIBNQgFAegIAOQgKAUgMAHQgKAGgQAAQgYAAgcgRgAgDgCIgXhbIiqAAIAABbIDBAAgAjEjoIAABSIGFAAQAIAAAAgJIAAhJQAAgOgOAAIlxAAQgOAAAAAOg");
	this.shape_17.setTransform(-305.2,-44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476.6,-80.3,953.3,160.6);


(lib.Tween54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA0E0QgigHgmgLIACg9IA+ARQApAJARAAQAXABAMgIQAPgHAAgSIAAkgIjxAAIAAg6IGVAAIAAA6IhqAAIAAEvQAAAQgFAOQgHANgLAKQgMAKgTAGQgTAGgaAAQgbAAgggFgAjfE5IAAkJIgtArIguglQAggcA2g9QAYghAlhJIA1AYQgaAzgZApIAAFSgAk2iJQAbgYAqg4QAUgdAdhCIA2AUQgkBPgVAgQgrA5gWAUgAhEjgIAAg6IFlAAIAAA6g");
	this.shape.setTransform(237,44.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiPE0IgFhBQAoAOAZAAQAfAAAAgdIAAg+IisAAIAACQIg5AAIAAmuQAAgTAUAAID3AAQATAAAAATIAAFvQAAASgEAMQgFANgKAJQgKAIgPAFQgOAEgUAAQgcAAgqgIgAjgBvICsAAIAAhGIisAAgAjghQIAABDICsAAIAAhDQAAgEgEAAIikAAQgEAAAAAEgABnEqIACg8IA1APIAgADQATAAAJgIQAGgGAAgNIAAl7IA5AAIAAGKQAABGhRAAQg6gFgngLgABLC/IAAk7IA6AAIAAE7gAkui1IAAg6ICwAAQgQghgLgOIAzgdQARAZAYAzICRAAQAYgtAHgdIA3AXIgVAzICZAAIAAA6g");
	this.shape_1.setTransform(169.5,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADgEwQgPgHgPgPQgggggagmQgaglgTgsQgUgsgNgyQgOgygJg9IibAKIgIg8ICcgJQgHg2gEh4IA6ADQACByAGA1IDVgNIAEA7IjRAOQAIAvAKApQALApANAjQAOAkARAeQARAdAVAXQAbAhAKAAQAGgBADgJQAGgbADhLIA5AQQgBA9gJApQgJAngQAQQgMAMgNABQgPAAgPgIgAjaE4IAAlJQgSAhgUAdIg5gYQA9hZAihgQAQguAThlIA8AJQgVBjgNAqIAAHZgAC7jgQgggYgcgOIAggwQAeAPAiAYQAiAYAlAeIgjAwg");
	this.shape_2.setTransform(101.5,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA7ErIABg8IA1APIAjAEQAcgBAAgcIAAiqIkJAAIAAg6IEJAAIAAhAIkJAAIAAg3ICoAAIAAhOIiVAAIAAg3ICVAAIAAg/IA5AAIAAA/ICXAAIAAA3IiXAAIAABOICnAAIAAA3IhFAAIAABAIBAAAIAAA6IhAAAIAAC6QgDBGhPAAQg4gFglgLgAkuEdIAAorQAAgTASAAICWAAQATAAAAATIAAHnQAAATgUAAIhuAAIAAAxgAj1CzIA9AAQALAAAAgLIAAilIhIAAgAj1jeIAACpIBIAAIAAipQAAgJgJAAIg1AAQgKAAAAAJgAgUCgQgQgegQgVIAygdQARAXARAfIAhBDIg0Abg");
	this.shape_3.setTransform(34.3,44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AC3E6IAAgSIkrAAIAAASIg3AAIAAjXQgyAPhIAMIgRg0QAygHBagVQBAgQA2gWIj0AAIAAg0ID3AAIAAg2Ii8AAIAAg0IC8AAIAAgpIA2AAIAAApICgAAIAAAfIBRhGIAkAqQhhBOglAZICgAAIAAA0Ij3AAIh4A2IEWAAQASAAAAASIAADqgAh0D0IErAAIAAgmIkrAAgAh0B6IAAAgIErAAIAAghQAAgHgIAAIkbAAQgJAAABAIgAAFgsIAxAAIAxgdIAggZIiCAAgABrixIAAgnIjLAAIAAAnIg6AAIAAgnIiRAAIAAg1ICRAAIAAgsIA6AAIAAAsIDLAAIAAgsIA6AAIAAAsICSAAIAAA1IiSAAIAAAng");
	this.shape_4.setTransform(-34.5,44.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACpDsIAdgvQAcAOAdATQAeAVAgAaIghAtQhUg9gfgRgAg0EFQAfgJAdgTQAfgSAegcIAkAsQgkAfgkAVQgjAUgiAKQgFgjgLgRgAjxE0IAAkpIg+AAIAAgzID9AAQAUgBABAKIAACfQAAAigLAZQgLAZgVAOQgOAKgfAAIgxgFIgDg5QAgAHAQAAQAfAAAGgrIAAh4QAAgHgIAAIheAAIAAEpgAAJCvQgHAAAAgHIAAloQAAgHAHAAIBaAAIANgxIh6AAIAAg0IE7AAIAAA0IiJAAIgHAeIgFATICDAAQAIAAAAAHIAAFoQAAAHgIAAgAA5B4IACADICzAAIACgDIAAgzIi3AAgAA5ARIC3AAIAAg3Ii3AAgAA5iQIAAA2IC3AAIAAg2IgCgCIizAAgAkGhkIAAg3IDNAAIAAA3gAk8i/QA2ghAigfQAjgeANgcIA1ABIgEAJQBLBDAoAcIgrAoQgjgdg9g+QgUAZgdAaQgcAZgjAag");
	this.shape_5.setTransform(-101.8,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdE4IAAjJIiAAAQgEAAAAAEIAACqIg3AAIAAjWQAAgMAOAAICtAAIAAg2IjSAAQgFAAgBAFIAABQIg5AAIAAh+QAAgLALAAIIpAAIAwAYQAAAbgGAfQgFAhgMAjIg3gRQAQg5ABgSQAAgGgIAAIjWAAIAAA2ICwAAQAOAAAAAMIAACfQAAAZgNAPQgJALgQAGQgRAHgbAAQgZAAgmgIIgCg7QAkAJAVABQAQAAAJgIQAKgHAAgOIAAhdQAAgEgFAAIiCAAIAADJgAkxh3QAogJAbgPQARgKALgMQALgPAAgSIhuAAIAAg1IBvAAIAAg6IA4AAIAAA6IAwAAIAAg8IA3AAIAAA8IBHAAIAAg8IA3AAIAAA8IAwAAIAAg6IA3AAIAAA6IBxAAIAAA1IhxAAIAAAzQgBAQASABIAjAAQADAAAEgPIAEgkIA0ATQgDAhgGAUQgEATgIAFQgOAKgVAAIhWAAQgOAAgHgIQgGgGgBgNIAAhgIgwAAIAABgQAAANgHAGQgGAGgNABIiCAAQgMgBgHgGQgGgGAAgNIAAhgIgxAAQAAAPgIASQgGAQgKAOQgLAOgQANQgQANgVAKIgvATgAgniJQAAAIAJAAIA1AAQAJAAAAgIIAAg9IhHAAg");
	this.shape_6.setTransform(-169.4,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AkqEPQAhgXAbgdQAagdASgiIAyAcQgaAsgcAgQgbAggdAUgAB9ElIABg8IA2AOIAhAFQAdACAAgeIAAoXIA5AAIAAImQAABGhRAAQg4gFglgLgAhHDEIAuglQAZAcA5BRIgwAiQgrhGglgkgABlCaIAAmfIA6AAIAAGfgAkCCPQgIAAAAgIIAAmoQAAgIAIAAIElAAQAHAAAAAIIAAGoQAAAIgHAAgAjQBTQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAIC8AAIADgDIAAhFIjCAAgAjQgrIDCAAIAAhFIjCAAgAjQjtIAABDIDCAAIAAhDIgDgDIi8AAQgBAAgBAAQAAABgBAAQAAAAAAABQAAABAAAAg");
	this.shape_7.setTransform(-238.5,44.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ADHE5IAAgfIlDAAIAAAfIg5AAIAAkDIhpAVIgWg2QBBgLBAgQQBAgRA+gVIA5gcIkwAAIAAg3ID9AAIAAhBIi9AAIAAg3IC9AAIAAhBIA4AAIAABBICwAAIAAAZIA7hFIAtAkQhNBbgnAlICJAAIAAA3IjLAAQhSAzgyAXIENAAQANAAAAALIAAEsgAh8DjIFDAAIAAg3IlDAAgAh8BBIAAA0IFDAAIAAg0QAAgIgJAAIkyAAQgJAAABAIgAAJh/IBPAAIAdgXIAogqIiUAAg");
	this.shape_8.setTransform(236.9,-44.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ak0EfIAAg9IEZAAIAAjUIjmAAIAAg7IDmAAIAAi1Ij6AAIAAg8IItAAIAAA8Ij4AAIAAC1IDlAAIAAA7IjlAAIAADUIEVAAIAAA9g");
	this.shape_9.setTransform(169.4,-44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_10.setTransform(101.7,-45.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ak1ESQAbgkARgsQASgrAJgzIA3AQQgUBIgOAhQgeA8gTAaQgVgXgWgKgAhDExQgOAAgMgEQgNgFgKgKQgKgKgFgQQgFgSAAgXIAAh2IA6AAIAABsQgBATAFAHQAHAMAZAAIB3AAQAbAAAMgPQAFgKAAg0IA6AIIgEBDQgEAagGAIQgQARgKAEQgMAFgfAAgADYC/QgXgsgVgfIAzgcQAYAjAYAtQAXAtAWA3Ig1AaQgZg7gWgsgAgeBsIAygZQAnBIAPAjIg1AUQgVgwgeg2gAi2A7IAAicIgpA/QgVAcgUAVIgzgbQAkgiAegpQAegpAYgvIhdAAIAAg2IBqAAIAAhNIA3AAIAABNIBeAAIAAA2IhdAAQBMBMAlAqIgoAmQgjgtgngqIAAClgAAFA2QgFAAAAgIIAAlAQAAgHAFAAIEEAAQAIAAAAAHIAAFAQAAAIgIAAgAAzAAIACABIClAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgnIiqAAgAAzhZICqAAIAAgrIiqAAgAAzjjIAAAtICqAAIAAgtIgDgCIilAAg");
	this.shape_11.setTransform(33.6,-45.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhXEqQgPAAgMgFQgOgEgJgLQgKgKgEgRQgFgQAAgXIAAiwIA6AAIAACnQgBASAFAJQAIALAYgBICfAAQAbAAALgPQAGgJAAhEIA6AIQAAAwgEAeQgDAegIAJQgPAQgKAEQgMAFggAAgAk7D8QATgcAbhAQAMghAMhJIA7ANQgSBRgOAlQgeBFgUAeQgYgWgXgKgADZCWQgWg0gWglIA1gZQAYAqAXA1QAXA1AUBAIg2AVQgXhDgWg0gAggA/IAxgbQAqBGArBRIg0AYQgwhegig2gAkIADQgIAAAAgHIAAkdQAAgIAIAAIIUAAQAJAAAAAIIAAEdQAAAHgJAAgAAegzIC7AAIACgEIAAhBIi9AAgAjXg3QAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIC7AAIAAhFIi9AAgAAeivIC9AAIAAhAQAAgBAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIi7AAgAjXjvIAABAIC9AAIAAhDIi7AAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAABg");
	this.shape_12.setTransform(-34.1,-44.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjHE7IAAkaIhaAMQgDgYgLgcIAmgFQAggfAlgwIg3gvQgcgWgbgQIAbgvQAGABAXARQAegvAfg+IAvAdQgUAqgvBGIArAlQAVgjAbhDIA0ARQgWA3gVAhQgwBFghAoIBMgMIgOgqIAxgOQAWBBAVBIIgzALIgKgmIgvAHIAAEigACVEuIAAg8QAtAOAZAAQAgAAABgdIAAiSIgtAkQgXgegRgiQgSgjgLglQgKAlgPAjQgOAigTAeIgzgRIAADUIg2AAIAAn6QABgMANAAIB9AAIgDgrQAAgEgEAAIgFABIhlAAIAAg3ICRAAQAUAAgBAQIAABVICBAAQANAAAAAMIAAG7QAAAYgMAPQgJALgQAGQgRAIgaAAQghAAgtgLgAAdiUIAADrQAagrAfhNQAMgmANhRIhNAAQgFAAAAAEgACyhVQAGAgAMAgQAQAuAoAzIAAjgQAAgEgEAAIhPAAQACAhAHAigAkxETIAShmQAIgzACgvIA0AJQgMBkgRBmgAh6BRIAzgNIAaCjIg2AHg");
	this.shape_13.setTransform(-103,-44.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AB+EKIAOgvIi9AAIAVApQgvAXgrANQgrANgnADIABgVIgDgiQAegCAhgJQAhgKAigRIhfAAQgHAAAAgIIAAjCQAAgHAHAAIC1AAIAAgaIjjAAIAAAEQgEBygGA1QgRBlgNAuIg2gRQANgtAPhXQAHgvAEiGIAAjzQAAgPAPAAIEHAAIAAgeIA6AAIAAAeIDwAAIAAA1IhzAAIAAAcIBdAAIAAAsIhdAAIAAAwQAAAVgWAAIj8AAQgWAAAAgVIAAgwIhWAAIAAgsIBWAAIAAgcIhnAAQgHAAAAAHIAACeIIFAAIAAA0IjrAAIAAAaIC3AAQAHAAAAAHIAADCQAAAIgHAAIhVAAQAoAJBhAlIgSA0Qh2grgqgIgABFCsICHAAIACgDIAAggIiJAAgAh6CpIACADICGAAIAAgjIiIAAgABFBZICJAAIAAgeIgCgCIiHAAgAh6A7IAAAeICIAAIAAggIiGAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABgAgxiMQABAEAGAAICuAAQAGAAABgEIACgVIi/AAgAgyjNIC/AAIAAgcIi/AAg");
	this.shape_14.setTransform(-170,-44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ACNEmIgGhAQAnAKAQABQAOAAAIgLQAIgIAAgLIAAkvQAAgGgGAAIhnAAIAAGAIg6AAIAAmAIhnAAIAAGAIg6AAIAAmAIhoAAQgGAAAAAGIAAGGIg5AAIAAmxQAAgUAVAAICrAAIArhWIkEAAIAAg5IJZAAIAAA5IkUAAIgmBWIENAAQAWAAgBAUIAAFuQAAASgGAPQgIAOgNAJQgQAMgkAAQgbAAgegFg");
	this.shape_15.setTransform(-237.6,-43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.1,-80.3,546.3,160.6);


(lib.Tween53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADaEvIAAgfIk9AAIAAAfIg6AAIAAjBQhHAugwAYIglgyIA8gbIAzggQAYgRAUgUQAVgTARgVIh9AAIAAg5ICgAAIAXg+IjyAAIAAg6ID8AAIABgjIAAgbIi/AAIAAg5IHpAAQASAAAAARIAABmIAxAAIAAA6IgxAAIAABkQAAATgSAAIkrAAQgPAbghAkIFrAAQANAAAAAMIAADqgAhjB7IAABcIE9AAIAAhcQAAgJgIAAIktAAQgKAAACAJgAgJhuIgQAvIDiAAQAHAAAAgHIAAg3IjVAAgAAFjaIgCAjIDNAAIAAg4QAAgGgHAAIjEAAg");
	this.shape.setTransform(237,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AC9E6IAAgfIl7AAIAAAfIg5AAIAAkMQgBgKAKAAIHZAAQAMAAAAAMIAAEKgAi+DnIF7AAIAAgsIl7AAgAi+BhIAAAlIF7AAIAAglQAAgIgIAAIlqAAQgJAAAAAIgADdAYQgbgGgbgLQgZgLgZgSQgZgTgXgZQgXgZgXgfIjeAAIAABOQA5gFAxgJQAugJAlgMIAQA3QhVAUgyAGQhrANg9ACIgMg3IA0gCIAAjjQAAgPAOAAIACAAIBgACQBBAAB9gIQA9gGB5gUIAXA6QiFAVhJAEIgSADIAfA2IDuAAIAAA0IjKAAQAaAfA1AlQAjAUAVAAQAaAAAAgwIgBgSIA5AKQAAApgFAaQgGAXgKALQgJAKgMAEIgVABgAgIiuIgcgzIihAAQgCAAAAAGIAAAtIC/AAg");
	this.shape_1.setTransform(169.5,44.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhvElQgjgKgpgTIAMg7QA/AmA6ACQAdgBAUgJQAPgJAKgPQAMgSACghQgIh0hbiMIAkAAIDDiJIACgEIgGgEIm9AAIAAg9IIFAAIAyA8IkDC1QATAkAOAkIAWBBQAMApAEA2QAAAVgFASQgDAQgIAOQgOAZgXAPQgVAMgZAHQgUAEgUAAQggAAgkgKg");
	this.shape_2.setTransform(102.1,44.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABpEwIAAhEQAuAUAXAAQAQAAAPgHQAPgGAOgNQAIgIAFgQQAFgPACgVQADgsAAglQAAglgLAAImoAAQg6BBggAdIgtgkQAigeAgggQAeggAbgjQAbgiAXglQAWgmASgnIioAAIAAg3IBuAAQgsgigcgPIAegsQA1AhAgAZIgaAjIA/AAIAchbIA2ASIgYBJID5AAQAGAAAHAGQAJAIgBAKIAAAGIgYBSIAhAAQAIAAAHAGQAJAIgBAKIAAAGIgZBNIAjAAQAOADADAEQAFAGABASQgBBZgFA8QgBAhgHAYQgHAYgMAPQgMAPgPAKQgMAIgOAFQgRAFgXAAQgkAAgwgMgAiIgCIFNAAIARg1Ik7AAgAhEhuIDpAAIASg5IjgAAgAkjESQAUgWAcg3QANgcAQhBIA7ARQgZBKgOAgQgiA7gTAZQgVgYgXgNgAhrEkQgEh1gLhDIA2gEQAKBNAFBvgAgQBhIA0gMQAUA4AZB0Ig1AIQgVhVgXhTgABbBZIAygXQAaAsAlBSIgyAUQgjhJgcgyg");
	this.shape_3.setTransform(33.4,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhMETQA4gmAsgpQAvgpAkgqQgYg+gShDQgNgvgThmIjkAAQgIAAAAAIIAABDICyAAQAUgBABALIAAC7QAAAigNAbQgIASgJALQgJAKgKAFQgPAIgaAAQgeAAg4gLIgDg8QAyAPAdAAQAOAAAHgEQAPgKAGgiIAAiNQAAgHgIAAIiFAAIAAAhQgFB1gJAzQgHAngLAjQgJAjgOAgIg4gVQAQgmAKgkQAKgiAGgkQAIgxADhwIAAi+QABgQAPAAIEOAAIgKhbIA7ACQAEAzAFAmIB6AAQgngbgkgQIAbgzQAaAKA8AnIgcAtIBWAAIAAA5IjSAAIAZB7QAOA4APAqQAPgaAQgtQARguARhBIA3AOQgXBbgPAnQgjBKgUAeQATAtAVAlQAWAnAGAAQAJAAAEgTQAHgrgCg+IA5AOQgGBcgIAdQgFAXgIAOQgIAOgJAGQgLAEgGAAQgOAAgLgHQgMgFgLgMQgTgVgSgdQgSgegSgmQghAlgqAlQgnAjguAjg");
	this.shape_4.setTransform(-34.2,44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABDE5IAApSQAAgKAKAAIDGAAIAkAfIhIDKIgCAJQAAAIAEAGQAZAhAfA2QAJAVAFAWQAEAWAAAaQAAATgEASQgEARgHAQQgMAVgOAKQgdAPgZAAQgeAAgqgOIABg/QArATAaAAQAsAAAAg/IgCgXQgDgbgUglQgTgjgjgtQgFgHAAgJIABgJIBBi2IhvAAQgIAAAAAIIAAIdgAgcEwIAAgXIigAAIAAAXIg3AAIAAj7IghASIgmgtIBOgtQAmgYAfgZIiJAAIAAg0ICEAAIAAhGIhqAAIAAg0IBqAAIAAhGIA5AAIAABGIBcAAIAAAgIApg3IAsAhQg+BPgeAhIBGAAIAAA0Ih7AAIhVBHIC2AAQAMAAAAAMIAAEhgAi8DlICgAAIAAg4IigAAgAi8BAIAAA4ICgAAIAAg5QAAgHgIAAIiQAAQgJAAABAIgAhzh4IAJAAIBChGIhLAAg");
	this.shape_5.setTransform(-101.8,44.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjnE6IAAkEQgYAXgNAKIgtgnQAfgXAxg3QAYgdAkhCIA0AaQgYAsgbAoIAAFJgAiEEkIAAg5IC+AAIAAiwIidAAIAAg5ICdAAIAAidIitAAIAAg5IC0AAQghgpgYgSIArgoQAtAqAYAgIgdAZIDPAAIAAA5Ii3AAIAACdICuAAIAAA5IiuAAIAACwIDHAAIAAA5gAk2iTQAcgXAwg1QAWgcAhg+IA0AZQgrBLgWAeQgwA3gZAUg");
	this.shape_6.setTransform(-169.9,44.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjmE6IAAkEQgZAXgNAKIgtgnQAfgXAxg3QAYgdAkhCIA0AaQgYAsgcAoIAAFJgAiDEkIAAg5IC9AAIAAiwIidAAIAAg5ICdAAIAAidIitAAIAAg5IC0AAQghgpgYgSIArgoQAtAqAYAgIgdAZIDPAAIAAA5Ii3AAIAACdICuAAIAAA5IiuAAIAACwIDHAAIAAA5gAk2iTQAcgXAwg1QAWgcAhg+IA0AZQgrBLgWAeQgwA3gZAUg");
	this.shape_7.setTransform(-237.8,44.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ak0EfIAAg9IEZAAIAAjUIjmAAIAAg7IDmAAIAAi1Ij6AAIAAg8IItAAIAAA8Ij4AAIAAC1IDlAAIAAA7IjlAAIAADUIEVAAIAAA9g");
	this.shape_8.setTransform(271.1,-44.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ADaEvIAAgfIk9AAIAAAfIg5AAIAAjBQhIAugwAYIglgyIA8gbIAzggQAYgRAVgUQAUgTARgVIh9AAIAAg5ICgAAIAWg+IjxAAIAAg6ID7AAIACgjIAAgbIi/AAIAAg5IHpAAQASAAABARIAABmIAvAAIAAA6IgvAAIAABkQgBATgSAAIkrAAQgPAbghAkIFrAAQANAAAAAMIAADqgAhjB7IAABcIE9AAIAAhcQABgJgJAAIktAAQgKAAACAJgAgJhuIgQAvIDjAAQAFAAAAgHIAAg3IjUAAgAAGjaIgCAjIDLAAIAAg4QAAgGgFAAIjEAAg");
	this.shape_9.setTransform(203.1,-44.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_10.setTransform(135.6,-45.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ak6DxQAygEAlgKQAlgKAXgRQAVgOAKgaQAIgWAAgfIhsAAQgPABAAgRIAAl6QAAgOAPAAIHPAAQAQAAAAAOIAAF6QAAARgQgBIiAAAIAABeQAAALAGAJQAIAMASABIBnAAQAJAAAJgHQAEgEAChGIA5AKIgGBJQgDAbgFAGQgWAWgUABIigAAQgVgCgSgQQgTgRAAgYIAAh+IhvAAQAAAbgFAYQgFAWgJASQgJASgNAPQgMANgRALQgcATgrAMQghAJgxAIgAi/AxIADADIFwAAIADgDIAAg7Il2AAgAi/hBIF2AAIAAhBIl2AAgAi/j0IAAA7IF2AAIAAg7QAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIlwAAQgBAAAAAAQgBAAgBAAQAAAAAAABQAAAAAAABg");
	this.shape_11.setTransform(67.7,-43.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ak4EUQAYgaARgfQASgfALglIA1AWQgOAogWAlQgVAigcAeQgSgZgUgNgAhUEyQgPAAgNgFQgMgFgIgKQgJgLgEgPQgFgPABgVIAAhYIA3AAIAABPQgBASAGAJQAHAJAXAAICNAAIAZgDQAKgEAEgPQADgMAAgjIA3AHIgEA+QgEAXgFAIQgNARgMAEQgLADgeAAgAC0CrIAughQAVAbAWAhIAsBMIgvAdQgvhWgngugAgkClIAlglQAWASAwA5IgpAiQgogzgagVgAjkB0QgHAAAAgIIAAjCQAAgGAHAAIHHAAQAIAAAAAGIAADCQAAAIgIAAgAi3BBIACADIFpAAIACgDIAAggIltAAgAi3gsIAAAgIFtAAIAAggIgCgBIlpAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAkyh6IAAg0ICtAAIgTg2Ih6AAIAAgwIDzAAIAAgmIA5AAIAAAmID2AAIAAAwIhwAAIgUA2ICkAAIAAA0gAhKiuICZAAIAXg2IjBAAg");
	this.shape_12.setTransform(0.1,-44.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAMEEQAwgfAigeQAigdATgaQgphVgQgzQgPgzgYh5IA6gIQARBuAMAtQAMAsAfBEQBKiGAAiqQAAgKgIACIi/AAIAAg6IDsAAQAPgDAAAPQgCA+gFA5QgHA5gMAzQgMAygRAvQgSAtgXAoQAbAqBOBZIg7AdQg4hIgZgnQg1BChDAvgAg4EyIAAhfIjxA4IgSg7IAygJIAAnBIgqAAIAAg5IFeAAIAAA5IgqAAIAAIsgAjQC7IAygNIBmgbIAAhMIiYAAgAjQANICYAAIAAhkIiYAAgAjQiRICYAAIAAhpIiYAAg");
	this.shape_13.setTransform(-67.9,-44.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiLE4IAAkcIinAQIgIgtIAogEIAAjvIgfAAIAAgvIDyAAIAAAvIgXAAIAAIsgAjegKIBTgIIAAgrIhTAAgAjehsIBTAAIAAguIhTAAgAjejJIBTAAIAAgrIhTAAgABVE1QgUgBgQgRQgRgRAAgSIAAihIA1AAIAACEQAAAXAdAHIA2AAQAHAAAJgHIAEgHIAJgwIAyAQQgHAvgMAeQgTAVgTAAgAk7DtIA8gIIAAgwIgvAAIAAgpIAvAAIAAgmIgvAAIAAgpICNAAIAAApIgwAAIAAAmIAtAAIAAApIgtAAIAAAoIAxgHIAIAuIiZAYgAhKELQAOgyAThzIAxALQgTB1gOAzgAD0CuQgKgqgMgfIAxgPQAOAkALApQAMAsAIAyIgzAMQgKg0gLgrgABvBeIAzgIQAQBMAEAhIgzAFQgFgtgPg9gAgnA9IAAgyIFHAAIAAAygAgggZQgGAAAAgHIAAiUQAAgHAGAAICAAAIAAgpIiLAAIAAgwICLAAIAAgjIA0AAIAAAjICMAAIAAAwIiMAAIAAApICDAAQAHAAgBAHIAACUQABAHgHAAgAC+hGIAuAAIADgDIAAhDIgDgCIguAAgABihGIAtAAIAAhIIgtAAgAAHiMIAABDIACADIAqAAIAAhIIgqAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_14.setTransform(-135.6,-44.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADxEJImFAkIgRg7IBIgGQAgg1Adg4QAeg5AZg8IiSAAIAAg5ICtAAIAAh6IiiAAIAAg6ICiAAIAAhWIA5AAIAABWICwAAIAAA6IiwAAIAAB6IDHAAIAAA5IjcAAQg+CHgvBVIDvgTQgeg+gfgwIAygcQAdAqAbA1QAcA2AZBCIg1AagAk5EdIAog3QATgcAPgeQAPgdALggQALggAHghIA5AOQghBpgUAqQgPAggRAbQgRAagSAWgAkyhRIAdgyQBLAqArAhIghAwQgtghhFgogAjxjfQgfgVgYgNIAggwQAbAOAgAWIBBAyIgiAvg");
	this.shape_15.setTransform(-203.6,-44.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AkzESQAagUAUgeQAVgdAQgmIAzAaQgVAqgYAiQgZAhgcAYQgQgagUgQgAC8CxIAvgbQAnAyAkBUIgxAZQgyhlgXgfgAAmCuIA1gMQASA8APBLIg1AJQgQhNgRg3gAhgEsQACgzgIhOIAAgBIA3AAIAGCFgAkcCHIAAg3IBaAAIAAh0IhaAAIAAg3IBaAAIAAhyQgMATgVAUQgXAXgVAOIgmgsQAggYAlgrQARgYAWgzIA2ATIgOAgIHFAAIAAA3IhCAAIAAB2IBQAAIAAA3IhQAAIAAB0IBIAAIAAA3gABlBQIBGAAIAAh0IhGAAgAgUBQIBCAAIAAh0IhCAAgAiLBQIBAAAIAAh0IhAAAgABlhbIBGAAIAAh2IhGAAgAgUhbIBCAAIAAh2IhCAAgAiLhbIBAAAIAAh2IhAAAg");
	this.shape_16.setTransform(-271.7,-44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307,-80.3,614.1,160.6);


(lib.Tween52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADaEvIAAgfIk9AAIAAAfIg6AAIAAjBQhHAugwAYIglgyIA8gbIAzggQAYgRAUgUQAVgTARgVIh9AAIAAg5ICgAAIAXg+IjyAAIAAg6ID8AAIABgjIAAgbIi/AAIAAg5IHpAAQASAAAAARIAABmIAxAAIAAA6IgxAAIAABkQAAATgSAAIkrAAQgPAbghAkIFrAAQANAAAAAMIAADqgAhjB7IAABcIE9AAIAAhcQAAgJgIAAIktAAQgKAAACAJgAgJhuIgQAvIDiAAQAHAAAAgHIAAg3IjVAAgAAFjaIgCAjIDNAAIAAg4QAAgGgHAAIjEAAg");
	this.shape.setTransform(237,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AC9E6IAAgfIl7AAIAAAfIg5AAIAAkMQgBgKAKAAIHZAAQAMAAAAAMIAAEKgAi+DnIF7AAIAAgsIl7AAgAi+BhIAAAlIF7AAIAAglQAAgIgIAAIlqAAQgJAAAAAIgADdAYQgbgGgbgLQgZgLgZgSQgZgTgXgZQgXgZgXgfIjeAAIAABOQA5gFAxgJQAugJAlgMIAQA3QhVAUgyAGQhrANg9ACIgMg3IA0gCIAAjjQAAgPAOAAIACAAIBgACQBBAAB9gIQA9gGB5gUIAXA6QiFAVhJAEIgSADIAfA2IDuAAIAAA0IjKAAQAaAfA1AlQAjAUAVAAQAaAAAAgwIgBgSIA5AKQAAApgFAaQgGAXgKALQgJAKgMAEIgVABgAgIiuIgcgzIihAAQgCAAAAAGIAAAtIC/AAg");
	this.shape_1.setTransform(169.5,44.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhvElQgjgKgpgTIAMg7QA/AmA6ACQAdgBAUgJQAPgJAKgPQAMgSACghQgIh0hbiMIAkAAIDDiJIACgEIgGgEIm9AAIAAg9IIFAAIAyA8IkDC1QATAkAOAkIAWBBQAMApAEA2QAAAVgFASQgDAQgIAOQgOAZgXAPQgVAMgZAHQgUAEgUAAQggAAgkgKg");
	this.shape_2.setTransform(102.1,44.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABpEwIAAhEQAuAUAXAAQAQAAAPgHQAPgGAOgNQAIgIAFgQQAFgPACgVQADgsAAglQAAglgLAAImoAAQg6BBggAdIgtgkQAigeAgggQAeggAbgjQAbgiAXglQAWgmASgnIioAAIAAg3IBuAAQgsgigcgPIAegsQA1AhAgAZIgaAjIA/AAIAchbIA2ASIgYBJID5AAQAGAAAHAGQAJAIgBAKIAAAGIgYBSIAhAAQAIAAAHAGQAJAIgBAKIAAAGIgZBNIAjAAQAOADADAEQAFAGABASQgBBZgFA8QgBAhgHAYQgHAYgMAPQgMAPgPAKQgMAIgOAFQgRAFgXAAQgkAAgwgMgAiIgCIFNAAIARg1Ik7AAgAhEhuIDpAAIASg5IjgAAgAkjESQAUgWAcg3QANgcAQhBIA7ARQgZBKgOAgQgiA7gTAZQgVgYgXgNgAhrEkQgEh1gLhDIA2gEQAKBNAFBvgAgQBhIA0gMQAUA4AZB0Ig1AIQgVhVgXhTgABbBZIAygXQAaAsAlBSIgyAUQgjhJgcgyg");
	this.shape_3.setTransform(33.4,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhMETQA4gmAsgpQAvgpAkgqQgYg+gShDQgNgvgThmIjkAAQgIAAAAAIIAABDICyAAQAUgBABALIAAC7QAAAigNAbQgIASgJALQgJAKgKAFQgPAIgaAAQgeAAg4gLIgDg8QAyAPAdAAQAOAAAHgEQAPgKAGgiIAAiNQAAgHgIAAIiFAAIAAAhQgFB1gJAzQgHAngLAjQgJAjgOAgIg4gVQAQgmAKgkQAKgiAGgkQAIgxADhwIAAi+QABgQAPAAIEOAAIgKhbIA7ACQAEAzAFAmIB6AAQgngbgkgQIAbgzQAaAKA8AnIgcAtIBWAAIAAA5IjSAAIAZB7QAOA4APAqQAPgaAQgtQARguARhBIA3AOQgXBbgPAnQgjBKgUAeQATAtAVAlQAWAnAGAAQAJAAAEgTQAHgrgCg+IA5AOQgGBcgIAdQgFAXgIAOQgIAOgJAGQgLAEgGAAQgOAAgLgHQgMgFgLgMQgTgVgSgdQgSgegSgmQghAlgqAlQgnAjguAjg");
	this.shape_4.setTransform(-34.2,44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABDE5IAApSQAAgKAKAAIDGAAIAkAfIhIDKIgCAJQAAAIAEAGQAZAhAfA2QAJAVAFAWQAEAWAAAaQAAATgEASQgEARgHAQQgMAVgOAKQgdAPgZAAQgeAAgqgOIABg/QArATAaAAQAsAAAAg/IgCgXQgDgbgUglQgTgjgjgtQgFgHAAgJIABgJIBBi2IhvAAQgIAAAAAIIAAIdgAgcEwIAAgXIigAAIAAAXIg3AAIAAj7IghASIgmgtIBOgtQAmgYAfgZIiJAAIAAg0ICEAAIAAhGIhqAAIAAg0IBqAAIAAhGIA5AAIAABGIBcAAIAAAgIApg3IAsAhQg+BPgeAhIBGAAIAAA0Ih7AAIhVBHIC2AAQAMAAAAAMIAAEhgAi8DlICgAAIAAg4IigAAgAi8BAIAAA4ICgAAIAAg5QAAgHgIAAIiQAAQgJAAABAIgAhzh4IAJAAIBChGIhLAAg");
	this.shape_5.setTransform(-101.8,44.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjnE6IAAkEQgYAXgNAKIgtgnQAfgXAxg3QAYgdAkhCIA0AaQgYAsgbAoIAAFJgAiEEkIAAg5IC+AAIAAiwIidAAIAAg5ICdAAIAAidIitAAIAAg5IC0AAQghgpgYgSIArgoQAtAqAYAgIgdAZIDPAAIAAA5Ii3AAIAACdICuAAIAAA5IiuAAIAACwIDHAAIAAA5gAk2iTQAcgXAwg1QAWgcAhg+IA0AZQgrBLgWAeQgwA3gZAUg");
	this.shape_6.setTransform(-169.9,44.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjmE6IAAkEQgZAXgNAKIgtgnQAfgXAxg3QAYgdAkhCIA0AaQgYAsgcAoIAAFJgAiDEkIAAg5IC9AAIAAiwIidAAIAAg5ICdAAIAAidIitAAIAAg5IC0AAQghgpgYgSIArgoQAtAqAYAgIgdAZIDPAAIAAA5Ii3AAIAACdICuAAIAAA5IiuAAIAACwIDHAAIAAA5gAk2iTQAcgXAwg1QAWgcAhg+IA0AZQgrBLgWAeQgwA3gZAUg");
	this.shape_7.setTransform(-237.8,44.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ak0EfIAAg9IEZAAIAAjUIjmAAIAAg7IDmAAIAAi1Ij6AAIAAg8IItAAIAAA8Ij4AAIAAC1IDlAAIAAA7IjlAAIAADUIEVAAIAAA9g");
	this.shape_8.setTransform(271.1,-44.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ADaEvIAAgfIk9AAIAAAfIg5AAIAAjBQhIAugwAYIglgyIA8gbIAzggQAYgRAVgUQAUgTARgVIh9AAIAAg5ICgAAIAWg+IjxAAIAAg6ID7AAIACgjIAAgbIi/AAIAAg5IHpAAQASAAABARIAABmIAvAAIAAA6IgvAAIAABkQgBATgSAAIkrAAQgPAbghAkIFrAAQANAAAAAMIAADqgAhjB7IAABcIE9AAIAAhcQABgJgJAAIktAAQgKAAACAJgAgJhuIgQAvIDjAAQAFAAAAgHIAAg3IjUAAgAAGjaIgCAjIDLAAIAAg4QAAgGgFAAIjEAAg");
	this.shape_9.setTransform(203.1,-44.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_10.setTransform(135.6,-45.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ak6DxQAygEAlgKQAlgKAXgRQAVgOAKgaQAIgWAAgfIhsAAQgPABAAgRIAAl6QAAgOAPAAIHPAAQAQAAAAAOIAAF6QAAARgQgBIiAAAIAABeQAAALAGAJQAIAMASABIBnAAQAJAAAJgHQAEgEAChGIA5AKIgGBJQgDAbgFAGQgWAWgUABIigAAQgVgCgSgQQgTgRAAgYIAAh+IhvAAQAAAbgFAYQgFAWgJASQgJASgNAPQgMANgRALQgcATgrAMQghAJgxAIgAi/AxIADADIFwAAIADgDIAAg7Il2AAgAi/hBIF2AAIAAhBIl2AAgAi/j0IAAA7IF2AAIAAg7QAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIlwAAQgBAAAAAAQgBAAgBAAQAAAAAAABQAAAAAAABg");
	this.shape_11.setTransform(67.7,-43.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ak4EUQAYgaARgfQASgfALglIA1AWQgOAogWAlQgVAigcAeQgSgZgUgNgAhUEyQgPAAgNgFQgMgFgIgKQgJgLgEgPQgFgPABgVIAAhYIA3AAIAABPQgBASAGAJQAHAJAXAAICNAAIAZgDQAKgEAEgPQADgMAAgjIA3AHIgEA+QgEAXgFAIQgNARgMAEQgLADgeAAgAC0CrIAughQAVAbAWAhIAsBMIgvAdQgvhWgngugAgkClIAlglQAWASAwA5IgpAiQgogzgagVgAjkB0QgHAAAAgIIAAjCQAAgGAHAAIHHAAQAIAAAAAGIAADCQAAAIgIAAgAi3BBIACADIFpAAIACgDIAAggIltAAgAi3gsIAAAgIFtAAIAAggIgCgBIlpAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAkyh6IAAg0ICtAAIgTg2Ih6AAIAAgwIDzAAIAAgmIA5AAIAAAmID2AAIAAAwIhwAAIgUA2ICkAAIAAA0gAhKiuICZAAIAXg2IjBAAg");
	this.shape_12.setTransform(0.1,-44.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAMEEQAwgfAigeQAigdATgaQgphVgQgzQgPgzgYh5IA6gIQARBuAMAtQAMAsAfBEQBKiGAAiqQAAgKgIACIi/AAIAAg6IDsAAQAPgDAAAPQgCA+gFA5QgHA5gMAzQgMAygRAvQgSAtgXAoQAbAqBOBZIg7AdQg4hIgZgnQg1BChDAvgAg4EyIAAhfIjxA4IgSg7IAygJIAAnBIgqAAIAAg5IFeAAIAAA5IgqAAIAAIsgAjQC7IAygNIBmgbIAAhMIiYAAgAjQANICYAAIAAhkIiYAAgAjQiRICYAAIAAhpIiYAAg");
	this.shape_13.setTransform(-67.9,-44.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiLE4IAAkcIinAQIgIgtIAogEIAAjvIgfAAIAAgvIDyAAIAAAvIgXAAIAAIsgAjegKIBTgIIAAgrIhTAAgAjehsIBTAAIAAguIhTAAgAjejJIBTAAIAAgrIhTAAgABVE1QgUgBgQgRQgRgRAAgSIAAihIA1AAIAACEQAAAXAdAHIA2AAQAHAAAJgHIAEgHIAJgwIAyAQQgHAvgMAeQgTAVgTAAgAk7DtIA8gIIAAgwIgvAAIAAgpIAvAAIAAgmIgvAAIAAgpICNAAIAAApIgwAAIAAAmIAtAAIAAApIgtAAIAAAoIAxgHIAIAuIiZAYgAhKELQAOgyAThzIAxALQgTB1gOAzgAD0CuQgKgqgMgfIAxgPQAOAkALApQAMAsAIAyIgzAMQgKg0gLgrgABvBeIAzgIQAQBMAEAhIgzAFQgFgtgPg9gAgnA9IAAgyIFHAAIAAAygAgggZQgGAAAAgHIAAiUQAAgHAGAAICAAAIAAgpIiLAAIAAgwICLAAIAAgjIA0AAIAAAjICMAAIAAAwIiMAAIAAApICDAAQAHAAgBAHIAACUQABAHgHAAgAC+hGIAuAAIADgDIAAhDIgDgCIguAAgABihGIAtAAIAAhIIgtAAgAAHiMIAABDIACADIAqAAIAAhIIgqAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_14.setTransform(-135.6,-44.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADxEJImFAkIgRg7IBIgGQAgg1Adg4QAeg5AZg8IiSAAIAAg5ICtAAIAAh6IiiAAIAAg6ICiAAIAAhWIA5AAIAABWICwAAIAAA6IiwAAIAAB6IDHAAIAAA5IjcAAQg+CHgvBVIDvgTQgeg+gfgwIAygcQAdAqAbA1QAcA2AZBCIg1AagAk5EdIAog3QATgcAPgeQAPgdALggQALggAHghIA5AOQghBpgUAqQgPAggRAbQgRAagSAWgAkyhRIAdgyQBLAqArAhIghAwQgtghhFgogAjxjfQgfgVgYgNIAggwQAbAOAgAWIBBAyIgiAvg");
	this.shape_15.setTransform(-203.6,-44.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AkzESQAagUAUgeQAVgdAQgmIAzAaQgVAqgYAiQgZAhgcAYQgQgagUgQgAC8CxIAvgbQAnAyAkBUIgxAZQgyhlgXgfgAAmCuIA1gMQASA8APBLIg1AJQgQhNgRg3gAhgEsQACgzgIhOIAAgBIA3AAIAGCFgAkcCHIAAg3IBaAAIAAh0IhaAAIAAg3IBaAAIAAhyQgMATgVAUQgXAXgVAOIgmgsQAggYAlgrQARgYAWgzIA2ATIgOAgIHFAAIAAA3IhCAAIAAB2IBQAAIAAA3IhQAAIAAB0IBIAAIAAA3gABlBQIBGAAIAAh0IhGAAgAgUBQIBCAAIAAh0IhCAAgAiLBQIBAAAIAAh0IhAAAgABlhbIBGAAIAAh2IhGAAgAgUhbIBCAAIAAh2IhCAAgAiLhbIBAAAIAAh2IhAAAg");
	this.shape_16.setTransform(-271.7,-44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307,-80.3,614.1,160.6);


(lib.Tween51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACxDoQgggigbgiQgcgjgWglQgXglgRgmQgRgmgLgoQgYBNgQAiQggBEgWAeQguA7gcAbQg8A0glAZIgtgsQAigTAegXQAdgXAZgaQAagbAWgeQAVgeASgiQARgiAOgkQAOgmAJgpQAJgqAFgtQAGgtAAgwIAAglIA7AAIAAA+IABAAQADBNAIAoQATBTAVAsQAPAhAVAhQAWAjAcAjQAcAkAjAjQAlAlAtAkIgzAlg");
	this.shape.setTransform(305.1,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjoE6IAAlUIgRAaIg3gWQAWghASgiQATgjANgkQAOglAJgmQAKgnAFgnIA5AIQgXB0gRAtIAAHKgAD3E0IAAgcIk8AAIAAAcIg6AAIAApFQAAgTATAAIGJAAQAUAAABAUIAAJEgAhFjlIAAHGIE8AAIAAnGQAAgIgHAAIh7AAIAABGIByAAIAAA3IhyAAIAABNIBaAAQAHAAAAAIIAADKQAAAIgHAAIjoAAQgIAAAAgIIAAjKQAAgIAIAAIBWAAIAAhNIhuAAIAAg3IBuAAIAAhGIh6AAQgJAAABAIgAAVAVIAABpIACACICGAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAhpIgCgCIiGAAg");
	this.shape_1.setTransform(235.9,44.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjbELQAXgLATgPQASgOAQgSQAPgSAMgVQALgVAHgYQh5Atg/ARIgZg4QBGgPA4gTQA4gTApgUIACghIAAgtIiyAAIAAg5ICyAAIAAhjIi7AAIAAg5IC7AAIAAhOIA6AAIAAFVQgCAugKAqQgKApgTAjQgTAjgcAeQgbAdgkAYgAAsE3IAApuIA6AAIAABOIDEAAIAAA5IjEAAIAABoIC6AAIAAA6Ii6AAIAAB6IDOAAIAAA5IjOAAIAACSg");
	this.shape_2.setTransform(168.6,44.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjYERQAcgSAVgaQAVgZAOghQAPggAHgoQAIgnABguIAAjMIjLAAIAAg5IEUAAIAAhBIA8AAIAABBIEUAAIAAA5IjHAAIAAGvQgFBFhFAAQgiAAg2gPIABg8QAxAQAZAAQASAAAHgHQAFgFAAgNIAAmgIhfAAIAADMQAAAxgIAsQgIArgPAmQgQAlgXAfQgXAfgfAagADdA9QgOg+glh8IA7gMQApCcAOBAQAPBBAQBkIg7AIQgUiDgPhAgAk6DtQAYgsASgtQARgtAMguQAMguAHguQAGguAAgxIA6ADQgDA7gHA2QgIA0gMAwQgLAwgRAqQgQAqgUAlg");
	this.shape_3.setTransform(101.3,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AieEwQgXAAgPgIQgOgJgJgOQgKgRgBgqIAAjuIg4ARIgXg3IBPgaIAAivIA8AAIAACdICVgvIAAiWIA7AAIAACEIC1g6IAnARIAAD4QAAAbgMAUQgMAVgXAOQgRAKgdAAQgiAAgsgLIACg+QApANAVABQAPAAAKgFQAKgGAFgJQAHgOAAgZIAAifIgDgHIgHAAIiWAwIAAEhIg7AAIAAkOIiVAuIAAD4QgBAVAGAHQAIALAYAAIFQAAQAdAAALgRQAHgLgBhUIA9AJQABBOgFAgQgDATgKALQgJALgNAGQgQAGggAAg");
	this.shape_4.setTransform(33.6,43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABuEuIgDhBQAhAMAvAGQAPgBAJgDQANgFAJgOIAIgYQAEgzAAgiQAAghgKgBIhmAAQgEAdgOAfQgNAfgWAkQgZAcgjAYQgiAYgrATIgigxQCTgwASh9IhiAAIAAg3IBlAAIAAgjIA5AAIAAAjICRAAIALADQAHAJACAFQAABdgFA5QgGA3gIARQgNAWgXAKQgUAJgfgBQgiAAgxgLgAklEnIACg4QAvAOAZAAQAQgBAFgFQAEgFAAgNIAAijQgSAigUAcQgSAagTATIgwgdQAjgkAcgqQAbgrATguIhkAAIAAg3ICCAAQg1g1gogfIAlgnIAxAsQA7gmAZgpQgBgGgIABIi4AAIAAg1IDoAAIAdAYQgOAkgcAlQgdAmgqAlIAcAbIgTARIBNAAIAkAaQgIAqgOAmQgOAmgVAhIg1gTQAog1AKgrIgBgGIgGgBIgvAAIAAELQAAAXgNARQgHALgOAHQgQAHgWABQghgBgygOgADRgNQgkgRghgXQgdASggANQghAPglAJIgagxQAtgMBGgdQgRgTgRgZQgQgagOgfQgiA2gWAVIgrglQAWgVAPgUQAOgTAJgTQANgdANg1IA1AJIgFAXIDxAAIAAA4IgvAAQgPApgVAjQgVAhgZAbQAdASAiANQAjANAnAJIgfAwQgogKgmgQgACNh5QAUgVARgZQASgbALgeIiDAAQAbBGAmAhg");
	this.shape_5.setTransform(-34.1,44.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ADZE1IghgRQgdgTgVgWQgqAVgxAOQgwAOg3AIIgPg1QAngDAsgMQArgLAwgUQghg4gNghIilAAIAAAqQBCgKAdgIIALA0QgqAKhAAJIAAAmQAAAZgOAQQgIAKgNAGQgQAGgVAAQgfAAgrgLIAAg2QAqAKAYAAQATAAAFgHQAEgGAAgbIiFALIgIg1ICNgKIAAgxIiIAAIAAg0ICIAAIAAgeIhtAGIgIgwQBMgBBAgGQA8gGAugKIAHAwQgfAHg1AGIAAAiICWAAQgLglgNg/IlDAAIAAg0IEWAAIAAghIjcAAIAAgvIDcAAIAAgjIkAAAIAAg1ICYAAIgbgcIAogjQAYAUAaAkIgLAHICUAAQAlgmARgZIAqAjIgVAcICJAAIAAA1Ij9AAIAAAjIDaAAIAAAvIjaAAIAAAhIEVAAIAAA0IjnAAQAMBAAMAkIDEAAIAAA0IixAAQAOAgAXAeIBIg1IAhAsIhFAxIAVATQATAMAKAAQANAAACgMQAHgTAAgiIA0ARQgGAvgLAcQgLAbgQAHIgRACQgOAAgSgHgACFAVIAXguQBAAaAcASIgaAsg");
	this.shape_6.setTransform(-101.3,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AkqEAQAjgIBCgdQAggRA9guIAjAyQhLAygkARQhHAfgiAIQgEgkgJgUgABLDWIAWg2QAvAPA2AYQA2AZA8AjIgaA1Qh/hHhUgbgAk5CNIAAg3IAtAAIAAlgQgCgMAPgBQAigBAggGQAfgGAagJIAaAxQhBARgmAEQgGAAACAHIAABEIBhAAIAAA0IhhAAIAABDIBhAAIAAA0IhhAAIAABHICDAAIAAifIA1AAIAACfIBAAAIAAi5QAAgJgJAAIhiAAQgNAAAAgOIAAi9IA3AAIAAAvIB1AAIAAA0Ih1AAIAAAtQAAAKAIAAIBiAAQAOAAAAAOIAADlICDAAIAAhHIhgAAIAAg0IBgAAIAAhIIhgAAIAAg0IBgAAIAAhGQAAgIgIAAIhaAAIAAg0ICMAAQANAAAAAOIAAFrIAmAAIAAA3g");
	this.shape_7.setTransform(-169.7,44.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjlE1IAAlIIgbApIg3gXQAZgkAUglQAVgmAPgmQAQgnALgnQAKgoAGgoIA5AJQgaBxgQAtIAAHCgAh3EgIAAg5ICuAAIAAjTIi+AAIAAg4IC+AAIAAi1IiXAHIgIg6QAlAACNgIIBtgLQA5gHAkgIIALA5QhUAOhYAKIAAC5IDFAAIAAA4IjFAAIAADTIC7AAIAAA5g");
	this.shape_8.setTransform(-238.2,44.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AkxEDQA1gHAzgMQAugMAsgPIAMA4QhYAZhtAVgABrENIANg3IBiATIBfAaIgSA2Qh+gjg+gJgAjhDPQgGAAgBgIIAAj7QABgGAGAAIHEAAQAIAAAAAGIAAD7QAAAIgIAAgAixCdIADADIFgAAIACgDIAAgZIllAAgAixBXIFlAAIAAgbIllAAgAixgKIAAAaIFlAAIAAgaIgCgCIlgAAQgBAAgBAAQgBABAAAAQAAAAAAAAQAAABAAAAgAk4haIAAgxIEbAAIAAgcIjYAAIAAgsIDYAAIAAgdIj9AAIAAgvID9AAIAAgbIA4AAIAAAbID8AAIAAAvIj8AAIAAAdIDXAAIAAAsIjXAAIAAAcIEZAAIAAAxg");
	this.shape_9.setTransform(-305,44.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhNEFQAggDAfgMQAfgMAegTIAbAzQgoAVgiAMQgmANgiAEQABgjgGgUgACiELIARg1QAoAJBgAmIgUA0QhigngjgHgAjfE0IAAj5IglBSIg2gNQAdgwAdhGQAOglALg4IhIAAIAAg3IBQAAIAAhVIhBANIgRg3IBsgWQAugLAhgMIASA3IhEAVIAABgIBDAAIAAA3Ig9AAQAtBFAkBAIgwAbIgnhNIAAE0gAg2DOQgHAAAAgHIAAj8QAAgGAHAAIFUAAQAGAAAAAGIAAD8QAAAHgGAAgAgICdIACADIDzAAIADgDIAAgbIj4AAgAgIBYID4AAIAAgeIj4AAgAgIgKIAAAbID4AAIAAgbIgDgCIjzAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAAAABABgAhThSIAAguICmAAIAAgeIiLAAIAAgvICLAAIAAgeIiUAAIAAgvICUAAIAAghIA3AAIAAAhICdAAIAAAvIidAAIAAAeICWAAIAAAvIiWAAIAAAeICwAAIAAAug");
	this.shape_10.setTransform(304.8,-44.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghEvQgVAAABgVIAAlrIgfAmIgzgdQAcgiAuhLIAbg7QALgeAIggIA2APQgNAvgUAvIB3AAIAphtIA1AVIghBYIB9AAIgEA3IiEAAIAABeIB9AAIAAA2Ih9AAIAABdIB9AAIAAA3Ih9AAIAABbICIAAIAAA2gAADDwQAAAJAHAAIBsAAIAAhbIhzAAgAADBnIBzAAIAAhdIhzAAgAADiBIAABVIBzAAIAAheIhsAAQgHAAAAAJgAk3DXIBKglIAAkQIhDAAIAAg6IBDAAIAAiTIA6AAIAACTIA6AAIAAA6Ig6AAIAADrIA6gtIAnApQgoAigzAgQg0Ahg/Agg");
	this.shape_11.setTransform(236.8,-45.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AC7E3IAAl9IhlAAIAABZQAAAkgFAbQgGAigNAgQgQAlgcAlQgsA2gfAeIgsgvQAggdAXgYQAZgbAPgbQAQgdAIggQAKggAAgoIAAkfQAAgUAQgBQBDgBBAgFQA8gGA4gJIAVA6QiLAShOACQgKAAABAKIAABfIDkAAIAAA5IhFAAIAAF9gAk5ENQARguAVhgQAJgxAFhnIAAjxQgCgTAPgBQA1gBA6gGQA2gGA5gLIAVA5Qh6AThGADQgKAAABAKIAAA4ICtAAQATAAAAATIAADIQAAASgTAAIiyAAQgFA6gNA4QgLA5gUA3gAjOgZIgBAoICBAAQAHAAAAgGIAAhvQAAgFgHAAIiAAAg");
	this.shape_12.setTransform(169.2,-44.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ACxDoQgggigcgiQgbgjgWglQgWglgSgmQgRgmgLgoQgYBNgPAiQgiBEgVAeQguA7gcAbQg8A0glAZIgtgsQAigTAegXQAdgXAZgaQAagbAWgeQAVgeASgiQARgiAOgkQANgmAKgpQAJgqAFgtQAGgtABgwIAAglIA6AAIAAA+IABAAQADBNAIAoQATBTAVAsQAPAhAVAhQAWAjAcAjQAcAkAkAjQAlAlAsAkIgzAlg");
	this.shape_13.setTransform(101.6,-44.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjoE6IAAlTIgSAaIg3gXQAXghATgiQASgjANgkQAOglAKgmQAJgnAFgnIA5AIQgYB0gQAtIAAHKgAD4E0IAAgcIk9AAIAAAcIg6AAIAApFQAAgTATAAIGJAAQAVAAAAATIAAJFgAhFjlIAAHGIE9AAIAAnGQAAgIgIAAIh8AAIAABGIB0AAIAAA3Ih0AAIAABNIBaAAQAIAAAAAIIAADKQAAAIgIAAIjnAAQgIAAAAgIIAAjKQAAgIAIAAIBXAAIAAhNIhvAAIAAg3IBvAAIAAhGIh8AAQgIAAABAIgAAUAVIAABpIADACICFAAQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAhpIgDgCIiFAAg");
	this.shape_14.setTransform(32.5,-44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AiqEaQAUgOAOgVIinATIgIgxIDIgTIAJgbIi/AAIAAgvIDFAAIABgYIAAgIIjMAAIAAgvIDMAAIAAghIiaAAQgFAAAAgHIAAhzQAAgFAFAAIHxAAQAHAAAAAFIAABzQAAAHgHAAIidAAIAAAkIDUAAIAAAuIjUAAIAAAhIDOAAIAAAvIjOAAIAAAdIDdAAIAAAwIjdAAIAAA8Ig3AAIAAkrIhMAAIAABYQAAAjgFAfQgGAggKAcQgKAbgQAWQgPAXgUAUgAjKhDIAAAfIACADIGPAAIADgDIAAgfIgDgBImPAAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAABAAgAk1iOIAAgwIEaAAIAAgmIi9AAIghAhQgPgYgSgOQASgQAOgWQAPgUAKgaIAyAaIgJAQICdAAIAAgkIA4AAIAAAkIDsAAIAAAvIjsAAIAAAmIEXAAIAAAwg");
	this.shape_15.setTransform(-33.9,-44.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ADxEJImFAkIgRg7IBIgGQAgg1Adg4QAeg5AZg8IiSAAIAAg5ICtAAIAAh6IiiAAIAAg6ICiAAIAAhWIA5AAIAABWICwAAIAAA6IiwAAIAAB6IDHAAIAAA5IjcAAQg+CHgvBVIDvgTQgeg+gfgwIAygcQAdAqAbA1QAcA2AZBCIg1AagAk5EdIAog3QATgcAPgeQAPgdALggQALggAHghIA5AOQghBpgUAqQgPAggRAbQgRAagSAWgAkyhRIAdgyQBLAqArAhIghAwQgtghhFgogAjxjfQgfgVgYgNIAggwQAbAOAgAWIBBAyIgiAvg");
	this.shape_16.setTransform(-101.9,-44.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AkzESQAagUAUgeQAVgdAQgmIAzAaQgVAqgYAiQgZAhgcAYQgQgagUgQgAC8CxIAvgbQAnAyAkBUIgxAZQgyhlgXgfgAAmCuIA1gMQASA8APBLIg1AJQgQhNgRg3gAhgEsQACgzgIhOIAAgBIA3AAIAGCFgAkcCHIAAg3IBaAAIAAh0IhaAAIAAg3IBaAAIAAhyQgMATgVAUQgXAXgVAOIgmgsQAggYAlgrQARgYAWgzIA2ATIgOAgIHFAAIAAA3IhCAAIAAB2IBQAAIAAA3IhQAAIAAB0IBIAAIAAA3gABlBQIBGAAIAAh0IhGAAgAgUBQIBCAAIAAh0IhCAAgAiLBQIBAAAIAAh0IhAAAgABlhbIBGAAIAAh2IhGAAgAgUhbIBCAAIAAh2IhCAAgAiLhbIBAAAIAAh2IhAAAg");
	this.shape_17.setTransform(-170,-44.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AkzD9QAngDAqgIQAogJAqgOQgfgXgeghQgfgigegqIAvgnQAjAyAfAjQAhAjAdAUQASgPAMgSQAMgSAJgVQAIgVAEgYQAFgXABgaIjrAAQgRAAAAgRIAAjvQAAgQARAAIDrAAIAAg/IA7AAIAAA/IDeAAQARAAAAAQIAADvQAAARgRAAIjeAAQgBAegFAcQgEAbgKAZQgJAYgLAVQgNAVgRARQBaAdCDAAIB4gDIgHBDQhVAAhIgFQg+gFgygJQgpgIgggKQgZgHgSgJQgkAUgxAPQgyAOhAAKgAAlgjICvAAQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAiXIgDgDIivAAgAjVi9IAACXIACADIC9AAIAAidIi9AAQAAAAgBAAQgBAAAAABQAAAAAAAAQAAABAAABg");
	this.shape_18.setTransform(-237.6,-44.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ak6EZQANgjAPhUQAHgsAFhjIAAkuQAAgPAOAAIIyAAIAAA0IoDAAQgHAAAAAHIAAESQgDBjgHAsQgRBUgOAlgAjeEpIAAg1IBQAAIAAhjIA4AAIAABjIBmAAIAAiLIA3AAIAAAsIC5AAIAAA0Ii5AAIAAArIDyAAIAAA1gAhvBwIAAh2QgbAqgdAgIgvgaQAbgYAVgbQAWgcAQgfIhIAAIAAg0IBZAAIAAgqIhGADIgIgzQA7gCAwgFQAvgFAigHIAIAzQgbAHgnADIAAAwIBOAAIAAA0IhBAAIBKBDIgkAmIgzgzIAAB+gACGBtIAAh1Qg0A/gbAXIgugfQAjgcAbgdQAdgeAWghIhQAAIAAg1IBcAAIAAgqIhIAEIgIg0IBwgIQAxgGAjgHIAJAzIhJANIAAAvIBqAAIAAA1IhbAAQAPAcAeAeQAcAdApAgIguAgQhChAgRgYIAAB3g");
	this.shape_19.setTransform(-305.3,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.9,-80.3,681.9,160.6);


(lib.Tween50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACyDoQghgigbgiQgcgjgWglQgWglgSgmQgRgmgLgoQgYBNgQAiQghBEgVAeQguA7gcAbQg9A0gkAZIgtgsQAigTAdgXQAegXAZgaQAbgbAVgeQAVgeASgiQASgiAOgkQANgmAJgpQAJgqAGgtQAEgtABgwIAAglIA7AAIAAA+IABAAQADBNAHAoQAVBTAUAsQAQAhAUAhQAWAjAbAjQAdAkAjAjQAmAlAsAkIgzAlg");
	this.shape.setTransform(372.9,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHErQgtgJglgSQglgTgegbQgegbgWgkQgEAmgMAkQgMAkgUAfIg3gaQATgbAPgbQAPgbAKgcQAKgcAFgdQAFgcABgdIA2AGIgDAjIAGAQQAggIBcgdQAogOAhgSQAngVAhgYQBbhEAYhdQAAgIgMABInnAAIAAg8IEHAAIAAhNIA9AAIAABNIDOAAIAtAfQgHAhgMAeQgMAfgRAdQgYAogjAjQgjAigvAgQgwAeg5AaQg7AbhHAVIANAOQASAPAXAMQAXAMAbAHQAcAIAfADQAgAFAmAAIDZgJIgMBCIjTAGQg0AAgsgJg");
	this.shape_1.setTransform(304.8,44.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkxE0IAAg0IEWAAIAAggIj1AAIAAg1ID1AAIAAglIjZAAQgHAAgBgJIAAjgQABgGAHgBIDZAAIAAgjIkaAAIAAg0IEaAAIAAggQifAEg6gBIgHg5QBGABC1gHQBagFCNgRIAIA5QgpAIg7AFIhuAJIAAAjIEaAAIAAA0IkaAAIAAAjIDYAAQAIABAAAGIAADgQAAAJgIAAIjYAAIAAAlID0AAIAAA1Ij0AAIAAAgIEUAAIAAA0gAAdBRICnAAIACgCIAAgnIipAAgAjFBPIACACICoAAIAAgpIiqAAgAAdgKICpAAIAAgqIgCgBIinAAgAjFg0IAAAqICqAAIAAgrIioAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_2.setTransform(237.3,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbEwIAAg6IA1ANIAaACQAZAAAIgJQAFgFAAgMIAAgWIkUAAIA+A8IgrAlQgsgvgYgRIAgghIidAAIAAg0IHCAAIAAggImMAAQgHAAAAgIIAAkZQAAgHAHAAICnAAIAAgnIjXAAIAAgxICiAAIgXgcIAtghQAXAXAWAmICRAAQAjgoALgTIAtAhIgSAaICaAAIAAAxIjUAAIAAAnICoAAQAHAAAAAHIAAEZQAAAIgHAAIg6AAIAAAgIBrAAIAAA0IhrAAIAAAkQAABEhTAAQgmAAgzgNgAjPBPIACADIGeAAIADgDIAAgkImjAAgAjPh1IAAB0IGjAAIAAggIiYAAQgMAAgFgGQgHgGAAgMIAAg+IhJAAQAAAWgIAQQgHARgPALQgPANgZAIQgYAIglAFIgOg1QAlgBAYgIQAXgIAIgOIAFgQIh4AAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABgABZhaQAAAMAOAAIBtAAIAAgnIgDgCIh4AAgAgkinIBIAAIAAgnIhIAAg");
	this.shape_3.setTransform(169.4,44.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkqEAQAjgIBCgdQAggRA9guIAiAyQhJAyglARQhHAfgjAIQgDgkgJgUgABLDWIAWg2QAvAPA2AYQA1AZA+AjIgbA1Qh/hHhUgbgAk5CNIAAg3IAtAAIAAlgQgCgMAQgBQAhgBAggGQAfgGAagJIAaAxQhBARgmAEQgFAAABAHIAABEIBhAAIAAA0IhhAAIAABDIBhAAIAAA0IhhAAIAABHICDAAIAAifIA1AAIAACfIBAAAIAAi5QAAgJgJAAIhiAAQgNAAAAgOIAAi9IA3AAIAAAvIB1AAIAAA0Ih1AAIAAAtQAAAKAIAAIBiAAQAOAAAAAOIAADlICDAAIAAhHIhgAAIAAg0IBgAAIAAhIIhgAAIAAg0IBgAAIAAhGQAAgIgIAAIhaAAIAAg0ICLAAQAOAAAAAOIAAFrIAmAAIAAA3g");
	this.shape_4.setTransform(101.5,44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADmE3IAAgfInLAAIAAAfIg9AAIAAoLQAAgTAUgBIDzAAIAAhNIA6AAIAABNIDvAAQAVABAAATIAAILgAAfDfIDHAAIAAiwIjHAAgAjlDfIDKAAIAAiwIjKAAgAAfgJIDHAAIAAicQAAgJgHAAIjAAAgAjlilIAACcIDKAAIAAilIjCAAQgKAAACAJg");
	this.shape_5.setTransform(33.8,44.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ADYE3IAAgcImvAAIAAAcIg6AAIAAoLQAAgUAUAAIDCAAQAVgyAJgcIA1AUQgIAdgNAdID7AAQAUAAAAAUIAAILgAjXDhIGvAAIAAhYImvAAgAjXBQIGvAAIAAhiImvAAgAjXimIAABaIGvAAIAAhaQAAgIgIAAImfAAQgKAAACAIg");
	this.shape_6.setTransform(-34,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiDEsQghgGgmgLIgChDQAsAOAjAHQAiAHAWAAQAgAAANgOQAKgKAAgOIAAjMIknAAIAAg7IEhAAIhIg3QgjgZgjgUIAkgvQAxAfA4ApQCLg5BBg7Im4AAIAAg5IHqAAIAiAsQg0A6gkAaQgcAVgjAVIhXArIAVAPIgSAUIDvAAIAnAnIgBABQgdBFgWAfQgwA/gfAcIg1gjQAqgmAcgjQAbgiANgeIi+AAIAADYQABAYgPAWQgOAVgYALQgYAKgpAAQgcAAgggGg");
	this.shape_7.setTransform(-101.2,44.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjME5IAAkgIhhANQgDgYgKgaIAogGQAegdAjgqQgbgZgagTQgcgUgbgOIAYgvQAFAAAYAQQAgg5Aag5IAsAaQgiBFgdAwIAtAkQAbgpAihSIAxARQgXA7gXAjQg0BLgkArIBfgNIgQgqIAxgQQAgBTALAuIgyALIgJggIg5AIIAAEngADjE2IAAgdIjAAAIAAAdIg2AAIAAkuQgBgIALAAIEXAAQAMAAAAAKIAAEsgAAjA+IAACkIDAAAIAAikQAAgIgJAAIiuAAQgKAAABAIgAk3EPIAUhnQAJg0ACgqIAyAKQgKBagWBugAh2BTIAzgMIAbCpIgzAJgAAPg+IAAg3IDqAAIAAA3gAhCiQQAtgaA8gvQAcgZA0hDIAsAVIgIALQAiAiAqAfQApAfAuAZIgiAuQgtgYgoghQgogfgjgnQgjAsgXAWQgyAqgpAbg");
	this.shape_8.setTransform(-169.8,44.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdEtIAAmDQhIBLgpAhQhXBBgwAcIgogyQAtgXAjgWQArgaAmghQAcgYA3g8QAcghA4hUIk3AAIAAg8IJVAAIAAA8IjaAAIgxBOIAAHPgACTADQhJhAghgYIAkgwQAlAbBPBEQAoAlBVBaIguArQhXhdgmgkg");
	this.shape_9.setTransform(-237.4,45.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABwDmQhfgrgngNIAYg4QAsAPBiArQAzAYBtA+IgbA3Qh0hAgxgXgAjNEnIgFhEQAqAQAWAAQAXAAAMgnIAIgtIAEiTQAAgugEgFQgCgFgFAAIhSAAQgLCRgLA5QgIArgLAiQgLAjgNAaIg6gLQARgoANgqQANgqAIgtQAJgsAEgvQADguAAgxIAAhqIg+AAIAAg6IBxAAIAAhLIA5AAIAABLIBtAAIAAA6IigAAIAABKIB/AAQANADADAFQAFAGAAATIgCDAQgGBUgJAdQgGAWgKAOQgJAPgMAIQgNAKgbAAQgZAAgrgKgAB+AdQg7gZgtgKIAVg5QBnAcCFBEIgYA4QhIglg5gXgAgthvIA6gzQAYgYASgXQAZgfAphMIAxAOIgHANQAfAyAnArQAmAsAtAnIguAmQgrglgigoQgigogXgsQgbAughApQgiAogoAjg");
	this.shape_10.setTransform(-305.2,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjXE4IAAkIIgvAsIgwgpQAfgZAcgaQAcgcAZgfQAZgeAWgiQAVghASgjIi4AAIAAg6IDOAAIAWg+IA5AUIgPAqIFLAAIAAA6IliAAIgMAZQgRAlgYAlQgZAmgfAmIAAFIgAh0EnIAAg6ICxAAIAAjMIikAAIAAg4ICkAAIAAhvIA8AAIAABvICrAAIAAA4IirAAIAADMIC+AAIAAA6g");
	this.shape_11.setTransform(-373.6,44.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABiEyIAAhNIieAAIAAg0ICeAAIAAgrIiGAAIAAg0IBFAAIgNg3IhQAAIAAgzICeAAIAAgnIiIAAIAAgxICIAAIAAgmIiOAAQgGAAgBgHIAAiEQABgGAGAAIFRAAQAIAAAAAGIAACEQAAAHgIAAIiMAAIAAAmICLAAIAAAxIiLAAIAAAnIChAAIAAAzIhTAAIgHAcIgIAbIBPAAIAAA0IiOAAIAAArIChAAIAAA0IihAAIAABNgABYBSIBIAAIAPg3IhjAAgADKjDIArAAIADgDIAAgzIgDgCIgrAAgABnjDIAwAAIAAg4IgwAAgAABj5IAAAzIADADIAxAAIAAg4IgxAAQgBAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAgAjREyIAAjTQgcA8gaApIgygRQAegqAXgtQAWgtAQguIhSAAIAAg0IBfAAIAAi4IhNADIgIgzQA5gBA1gFQAxgHAsgKIAKA1IhMAMIAAC+IBIAAIAAA0IhDAAQAsAvArA4IgoAiIg0hGIAADugAknjEIAugKQAUBLAEAwIgvAHQgJhNgOgrgAiQhcQAKgoALhWIAuAJQgGA6gQBGg");
	this.shape_12.setTransform(304.8,-44.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ACVE7IAAiHIiJAAIAAg0ICJAAIAAheIhJAAQgPAqgXAiQgWgWgWgJQAUghANgmQANglAEgpIA5ALIgKAqIA6AAIAAg5IA3AAIAAA5IBhAAIAAAzIhhAAIAABeIBxAAIAAA0IhxAAIAACHgAiKE3IgDg8QAoAMATAAQATgBAAgcIAAhPIihAAIgPBQIgVBJIg4gOQAUg5AKg0QAKg0ABgsIAAjvIgmgiQAigdAZgiQAaggAQgjIAuALIgEALIBjAAIAiAUQgYA0giA2IBFAAQAQAAAAAQIAAGRQAAAUgGANQgFANgMAGQgKAHgPACIgiADgAh0BpIA1AAIAAhXIg1AAgAjeBpIA2AAIAAhXIg2AAgAh0ggIA1AAIAAhPQAAgGgGAAIgvAAgAjehuIAABOIA2AAIAAhVIgwAAQgGAAAAAHgAkBimIBnAAIAdgoQAQgZAAgJQAAgDgDAAIhVAAQgYAkgkApgAAAh4QAogcAbgeQAbgeANgfIhnAAIAAgyIEYAAIAKADIAHAHIACATQAAA5gEAjQgFAjgIAMQgJAMgOAGQgSAJgdgBQgeABgngJIgCg9QAmAOAaAAQAcAAAIgQQAGgKAAgmQAAgRgCgDQgBgEgGgBIhOAAQgdA7gUAZQguAzgdAYg");
	this.shape_13.setTransform(237.1,-44.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_14.setTransform(169.5,-45.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADHE5IAAgfIlDAAIAAAfIg5AAIAAkDIhpAVIgWg2QBBgLBAgQQBAgRA+gVIA5gcIkwAAIAAg3ID9AAIAAhBIi9AAIAAg3IC9AAIAAhBIA5AAIAABBICvAAIAAAZIA7hFIAtAkQhNBbgnAlICIAAIAAA3IjJAAQhTAzgyAXIENAAQANAAAAALIAAEsgAh8DjIFDAAIAAg3IlDAAgAh8BBIAAA0IFDAAIAAg0QAAgIgJAAIkyAAQgJAAABAIgAAKh/IBPAAIAcgXIAngqIiSAAg");
	this.shape_15.setTransform(101.2,-44.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcEOQAagJAYgMQAYgMAXgQIArgjIAogpQgRg3gNg+QgNg7gJhDImVAAIAAg0ICtAAIAAg4IiNAAIAAg1ICNAAIAAg5IA3AAIAAA5IB9AAIAAA1Ih9AAIAAA4ICqAAQgHg6gGhlIA3AGQACA3AKBiIChAAIAAA0IiaAAQAVCDAOA1QAPgdANgpQAMgpAKg1IA1APQgUBPgOAkQgeBFgTAfIAUA7QAMAcAEAAQAOAAAChnIA1APQgCAtgIAjQgHAigMAXQgOAWgTAAQgPAAgNgLIgRgQQgVglgPgrQgwAwgcATQg5AjghAMgAkqEBIBcgPIAAhzQgqAbgnAPIgagyQAtgSAmgZQAmgaAbggIh7AAIAAgzICaAAIAAgxIA6AAIAAAxICGAAIAAAzIiYAAQgYAhghAhIAACRQA0gPAogRIAWAyQgwATg+APQg8APhKANgAiCBrIAkgoIAsAmQAtgnAdgiIAkAmQgbAggtApIAwA1IgkAlQhLhVg3gpgACzkLIAwgiQAgAiAhA7IgxAgQgXgogpgzg");
	this.shape_16.setTransform(33.9,-44.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABfEoIgDhBQAjANAvAGQBCAAAMhtQAGhrAAg0QAAgegBgIQgCgOgHAAIinAAIAAAmIBsAAQAJAAAAAIIAACEQAAAHgUABQAPAcAZBQIgyARIgKgfQi4AXhMADIgJg5ICMgKIAAg1IhvAAQgIgBAAgHIAAiEQAAgIAIAAIBvAAIAAgmIhXAAQgKAPgZAWIgrglQAwgmAYgwIgnAAQgGAAAAgIIAAiHQAAgIAGAAIGNAAQAIAAAAAIIAACHQAAAIgIAAIkuAAIgOAhIE5AAQAMAAAHAKQADAIAAAuIgFCtQgGBbgRAmQgPAfgXAQQgNAJgQAFQgRAFgTAAQglAAgygNgABRCjIA5gIIgLgYIAjgPIhRAAgABRBCIA+AAIACgDIAAgrIgCgDIg+AAgAglAUIAAArIACADIBAAAIAAgxIhAAAQgBABgBAAQAAAAAAAAQgBAAAAABQAAAAABABgAC2jOIA+AAIADgCIAAgvIgDgCIg+AAgABBjOIBAAAIAAgzIhAAAgAg2j/IAAAvIACACIBBAAIAAgzIhBAAQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAABABgAkvEiIAAg8QAuAOAVgBQAQABALgQQAJgOAHgeQAIgfADgiQADgjgBgmIgwAxQgXAVgUAMIgngoQAmgZAegdQAfgeAYgkQgGgigTg7QgXAggfAeIgughQAsgqAdgrQgQgdgyg2IAvgiQAeAfAVAhQARgfAQgrIAzAUQgZA9gbAvQAXA0AMAtQAJApAEAoQAEAlAAAlQgFBggPAxQgNApgSAXQgKANgNAGQgNAIgOgBQgcAAgzgRg");
	this.shape_17.setTransform(-34.3,-44);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABwDmQhfgrgngNIAYg4QAsAPBiArQAzAYBtA+IgbA3Qh0hAgxgXgAjNEnIgFhEQAqAQAWAAQAXAAAMgnIAIgtIAEiTQAAgugEgFQgCgFgFAAIhSAAQgLCRgLA5QgIArgLAiQgLAjgNAaIg6gLQARgoANgqQANgqAIgtQAJgsAEgvQADguAAgxIAAhqIg+AAIAAg6IBxAAIAAhLIA5AAIAABLIBtAAIAAA6IigAAIAABKIB/AAQANADADAFQAFAGAAATIgCDAQgGBUgJAdQgGAWgKAOQgJAPgMAIQgNAKgbAAQgZAAgrgKgAB+AdQg7gZgtgKIAVg5QBnAcCFBEIgYA4QhIglg5gXgAgthvIA6gzQAYgYASgXQAZgfAphMIAxAOIgHANQAfAyAnArQAmAsAtAnIguAmQgrglgigoQgigogXgsQgbAughApQgiAogoAjg");
	this.shape_18.setTransform(-101.7,-44.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABLElIADg8QAnANAxAGQARAAAHgGQAGgFAAgNIAAllIiOAAIAAg3ICOAAIAAh+IA6AAIAAB+IA8AAIAAA3Ig8AAIAAFzQgGBFhHAAQg8gGgqgMgAk2D1QBTgBA6gEIAAhdIh1AAIAAg0IB1AAIAAhDIiAAAIAAg0IBDAAIgLhOIhIAAIAAg0IBuAAIAAibIA0AAIAACbIArAAIAAibIA0AAIAACbIBWAAIAAA0IhDAAIgQBOIBBAAIAAA0Ih8AAIAABDIBxAAIAAA0IhxAAIAABXQA0gHBLgTIAQA4QhcAUg3AGQhzAMhCACgAixgYIBHAAIAQhOIhjAAgAAug8IA1gPQArCBAPBAIg1AMQgMg6guiEgAk4kIIAvgXQAfA6AOAnIgxAVQgPgpgcg2gAgljDQAfg9AIggIAxAVQgXA7gSAkg");
	this.shape_19.setTransform(-169.5,-44.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ACVEtIAGg9QAsAOAZAAIANgBQAMgFgBgUIAAkcIh6AAQgSABAAgTIAAjSQAAgRASAAICfAAQASAAAAARIAAIXQAAAXgOAQQgKAKgPAGQgSAHgYgBQgiABgngMgACjh+QAAAPAQAAIBFAAIAAgnIhVAAgACjjoIAAAbIBVAAIAAgZQAAgQgQAAIg4AAQgOAAABAOgAjpE2IAAlQIgOAXIg3gVQAVgiARgiQASgjAMgjQANglAJglQAIglAEgnIA5AIQgNBYgWBBIAAHNgAiBEyIAApPQAAgQAQAAICjAAQASAAAAARIAADQQAAASgSAAIh8AAIAAFsgAhKhxIBJAAQAOAAABgPIAAgWIhYAAgAhKjoIAAAbIBYAAIAAgcQgBgNgNAAIg8AAQgPAAABAOg");
	this.shape_20.setTransform(-239,-44.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ADXEvQgPgKgQgUQgXgdgagyQhJBQhrAaIgfg1QAagGAZgJQAYgKAXgNIAugeIArgmQgQgogOg4QgNg3gMhGIioAAIAAB1QA5gSApgWIAZAyQgoAThTAdIAACSQAABGhPAAQg2gGgkgKIACg8QAzAQAcAAQAUAAAHgHQAEgFAAgNIAAhxIh2AfIgYg5QBOgPBAgQIAAiIIiLAAIAAg7ICLAAIAAhQIhxAQIgSg3QA6gFBjgRQAugKBJgYIAWA2QgvAPg7ANIgEABIAABcICkAAQgHg2gDh4IA5AGQACBzAFA1IDGAAIAAA7IjAAAIAQBjQAKArAJAdQARgbAQglQAPgkANgsIA2AUQgQAxgXAvQgWAugeApQAPAfAUAdQAVAfAIAAQAMAAAIhmIA5ASQgJBJgJAgQgJAZgLAMQgMAQgRAAQgPAAgPgMgADGjZIg4gjIAggwQBiBCAYATIglAsg");
	this.shape_21.setTransform(-305.1,-44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.8,-80.3,817.6,160.6);


(lib.Tween49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjyFeIAAknIg0AwIg2guQAjgbAggeQAfggAcgiQAcgiAYglQAYgmAVgnIjPAAIAAhBIDoAAIAXhGIBAAXIgQAvIFzAAIAABBImNAAIgNAcQgUApgbApQgcArgiAsIAAFvgAiCFLIAAhBIDHAAIAAjlIi4AAIAAg/IC4AAIAAh8IBDAAIAAB8IC/AAIAAA/Ii/AAIAADlIDVAAIAABBg");
	this.shape.setTransform(379.3,249.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADFaQgdgGgkgMIAChJQAnASAeAJQAfAJAXAAQASAAANgIQAMgGAJgNQALgVAAgiQAAgigNgwIj9AAIAAhBIDmAAQgVgugagsIAfAAIBUhFIACgGIgHgCIjdAAIAAg+IE+AAIAzAuIilB/IAZA4IC/AAIAABBIisAAQAOA8ABAnQgBAagGAXQgJAXgPARQgRASgYAKQgbAKgiAAQgbAAgggHgAj1FbIAAkyIgzAsIg3guIA3gsQAjgeAcgeQAiglAZglQAcgsAOgrIjGAAIAAhAIDYAAIAPg+IBCAMIgKAyIF6AAIAABAImLAAQgOAugcAzQguBKghAjIAAFvg");
	this.shape_1.setTransform(303.7,249.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADVFSIAAglImdAAIAAAlIhDAAIAAkpQgBgLANAAIDhAAIAAi7QhbBBgwAbQhkAzgzASIggg8IBbggQAigOAjgTIBBgpQAsgfBShPIlIAAIAAhBIKQAAIAABBIjzAAIgzA3IAAD3IDqAAQAOAAAAAOIAAEmgAjIBoIAACFIGdAAIAAiFQAAgKgJAAImJAAQgLAAAAAKgAC4hMQg8glgwgVIAag7QA3AXA/AnQA+AkBHA0IgoA2QhGgzg7gkg");
	this.shape_2.setTransform(228,250.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlfEuIAHgHQAYgXAUgaQAVgbAQgdQARgeAMghQANghAKgkIA+ARIgXBLQAcAmAiAZQAjAaAqALIAAjcIkrAAIAAg9IKZAAIAAA9IkuAAIAABUIEBAAIAAA9IkBAAIAABWIBUADIDsAAIgPBAIjGAAQhHgCgwgFQg0gGgngNQgqgNgfgVQgfgWgZgiIgwBHQgZAigYAZgAj8hNQgJAAAAgJIAAj2QAAgIAJAAIH7AAQAJAAAAAIIAAD2QAAAJgJAAgAjHiLIACADIGLAAIAEgDIAAgqImRAAgAjHkYIAAApIGRAAIAAgpIgEgDImLAAQAAAAgBABQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_3.setTransform(151.9,250.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADfFfIAAgjIlrAAIAAAjIhAAAIAAkjIh1AZIgZg9QBKgNBIgSQBGgSBGgYIBAggIlVAAIAAg9IEcAAIAAhIIjUAAIAAg+IDUAAIAAhKIA/AAIAABKIDFAAIAAAbIBDhNIAyApQhWBlgsAqICZAAIAAA9IjjAAQhcA6g3AaIEtAAQAOAAAAAMIAAFQgAiMD/IFrAAIAAg/IlrAAgAiMBJIAAA5IFrAAIAAg5QAAgIgKAAIlYAAQgKAAABAIgAAKiOIBZAAIAggbIAsgtIilAAg");
	this.shape_4.setTransform(75.5,249.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfEuQAdgKAagNQAcgOAZgRIAxgnIAsgvQgTg9gPhGQgOhCgKhLInGAAIAAg6IDCAAIAAg/IieAAIAAg7ICeAAIAAhAIA9AAIAABAICMAAIAAA7IiMAAIAAA/IDAAAQgJhBgHhyIA/AIQACA9ALBuIC0AAIAAA6IisAAQAWCTAQA7QARggAPguQAOguALg8IA7ARQgWBZgQAoQgiBOgVAjIAWBCQAOAfAEAAQAQAAADh0IA7ARQgDAzgIAnQgJAmgNAZQgQAZgVAAQgQAAgQgMIgSgSQgYgpgRgwQg1A1gfAVQhBAoglANgAlPEgIBogRIAAiBQgvAfgsARIgdg5QAzgUApgcQArgdAfgkIiKAAIAAg6ICtAAIAAg2IBBAAIAAA2ICWAAIAAA6IiqAAQgcAlglAlIAACiQA7gRAtgTIAZA5Qg2AUhGASQhEARhSAOgAiSB4IAogtIAxArQAzgsAggmIApAqQgeAkgyAuIA2A8IgpApQhUhfg+gugADJkrIA1gnQAkAnAlBCIg3AkQgZgtgug5g");
	this.shape_5.setTransform(0,249.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABqFMIgDhJQAnAOA1AHQBKAAANh6QAHh4AAg6QAAghgBgKQgDgPgHAAIi8AAIAAArIB6AAQAJAAAAAIIAACUQAAAJgWAAQARAgAcBZIg4ATIgLgjQjOAahVAEIgKhBICcgLIAAg7Ih8AAQgJAAAAgJIAAiUQAAgIAJAAIB8AAIAAgrIhhAAQgMAQgbAaIgwgqQA1grAbg2IgrAAQgIAAAAgJIAAiXQAAgJAIAAIG8AAQAJAAAAAJIAACXQAAAJgJAAIlSAAIgQAlIFfAAQAOAAAHAMQAEAJAAAzIgGDCQgGBngUAqQgQAigbATQgOAKgSAFQgSAFgXAAQgpAAg4gOgABaC3IBAgJIgMgcIAogQIhcAAgABaBKIBGAAIADgDIAAgwIgDgDIhGAAgAgqAXIAAAwIACADIBIAAIAAg2IhIAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAABABgADLjmIBHAAIADgDIAAg1IgDgCIhHAAgABIjmIBJAAIAAg6IhJAAgAg9keIAAA1IACADIBJAAIAAg6IhJAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABABAAgAlTFFIAAhEQAzAQAXAAQASAAAMgRQALgQAIgiQAIgjADglQAEgogBgqIg2A3QgZAXgXAOIgsguQAqgaAjgiQAigiAbgoQgGgmgVhCQgbAkgiAhIg0gkQAxgwAhgwQgSggg4g+IA1glQAhAiAYAmQASgjASgwIA5AWQgbBFgeA0QAaA7AMAxQAKAuAFAtQAFAqAAArQgFBrgRA3QgPAugUAZQgMAPgOAHQgOAIgRAAQgegBg5gTg");
	this.shape_6.setTransform(-76.5,250.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_7.setTransform(-152,249.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag1FQIAApcIkgAAIAAhDIKrAAIAABDIlIAAIAABaQBLAuBIAyQBJAyBFA0IgqA8QiXh2hghCIAAG4g");
	this.shape_8.setTransform(-228.1,251.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AlVFTIAAhEIE1AAIAAi8IkLAAIAAhCIELAAIAAinIkdAAIAAhDIEiAAQgmgxgcgaIAzguQA4A7AeArIgYATIEnAAIAABDIkZAAIAACnIEKAAIAABCIkKAAIAAC8IE0AAIAABEg");
	this.shape_9.setTransform(-304.1,248.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ADZFDQghgTgfgZQgdgZgaghQgZghgVgoQgUgogRgvIjqAAIAADBQBxgWBugfIATBCQhmAeg8AMQh+AXhHAIIgRhBIBFgKIAApKQAAgUAUAAIIWAAQAUAAAAAUIAADEQAAAVgUAAIjrAAIAaBmIEDAAIAAA/IjvAAQAOAnAaAnQAWAjAcAeQAbAdAYAQQAaASAPAAQATAAADgUQAJgtgCgzIA+ATIgKBVQgFAhgJAQQgMAXgNAIQgLAHgSAAQgbAAgggTgAgDgCIgahmIi+AAIAABmIDYAAgAjbkEIAABcIGzAAQAJAAAAgKIAAhSQAAgQgPAAImdAAQgRAAABAQg");
	this.shape_10.setTransform(-380,250.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjxFeIAAknIg0AwIg3guQAjgbAfgeQAgggAcgiQAcgiAYglQAYglAVgoIjOAAIAAhBIDmAAIAYhFIBAAWIgQAvIFzAAIAABBImNAAIgNAcQgUApgbApQgcArgiAsIAAFvgAiCFLIAAhBIDGAAIAAjlIi3AAIAAg/IC3AAIAAh8IBEAAIAAB8IC/AAIAAA/Ii/AAIAADlIDUAAIAABBg");
	this.shape_11.setTransform(341.3,149.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ADRFdIAAmrIhwAAIAABkQgBAngGAfQgGAmgPAkQgSAqgfApQgxA8gjAiIgyg1QAlggAYgbQAdgeARgeQASghAKgkQAKglABgrIAAlDQgBgWARAAQBNgCBHgGQBDgGA/gLIAXBBQiaAUhZADQgKAAABALIAABrID/AAIAABAIhNAAIAAGrgAlfEtQATgzAYhsQAJg2AGh0IAAkOQgCgVARgBQA8gCBAgHQA8gGBBgNIAXBBQiJAUhOAFQgLgBABALIAAA/IDDAAQAUAAAAAVIAADhQAAAUgUABIjIAAQgGBAgOA/QgOBAgVA9gAjngcIgCAsICRAAQAIAAAAgGIAAh8QAAgGgIAAIiPAAg");
	this.shape_12.setTransform(265.6,150);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AliFFIAMgZQAWgrAKgyQAKgyAAg4IgBgtIA5gDQAGAwgDAmQAAAJAUAbQATAaATASIAAjMIigAAIAAg5IFLAAIAAA5IhtAAIAABLIBqAAIAAA7IhqAAIAABpQAZAIAjAEQAjAEAoAAIFVAAIgRA9IktAAQhqgEgygPQgngLgfgUQgjgWgdggQgaBSgPAjgADEDCIAYg3QAlAQBaA6IgiAwQhWg2gfgNgAgaDNQAjgKAggQQAfgRAZgXIAmAtQgiAdgjATQghASgfAIgAAYCCQgHAAAAgIIAAlbQAAgIAHABIBaAAIAPgrIACgJIiEAAIAAg1IFJAAIAAA1IiJAAIgPA0ICBAAQAIgBAAAIIAAFbQAAAIgIAAgABMBLIACADICuAAIADgDIAAgwIizAAgABMgZICzAAIAAg2IizAAgABMiyIAAAuICzAAIAAguIgDgCIiuAAQgBAAAAAAQgBAAAAAAQgBABABAAQAAAAAAABgAk8hSQgHAAAAgIIAAj1QAAgIAHABIEKAAQAIgBAAAIIAAD1QAAAIgIAAgAkIiKIABAEICgAAIACgEIAAgzIijAAgAkIkgIAAAvICjAAIAAgvIgCgCIigAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAABABg");
	this.shape_13.setTransform(189.8,151);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ACRFHIAIhHQA4ASAXAAQAKAAAHgFQAIgIAAgQIAAk3IjXAAQgTAAgBgVIAAjqQABgUATAAIEDAAQAVAAgBAUIAAJRQABAbgSASQgJALgRAHQgSAHgaAAQglAAg0gPgABXiOQAAARASABICYAAIAAgzIiqAAgABXkLIAAAhICqAAIAAgfQAAgSgTAAIiIAAQgQABABAPgAlAFMIAAqPQAAgSARAAIEGAAQATAAAAASIAADtQAAAUgTAAIjXAAIAAGOgAkAh8ICaAAQAPgBABgQIAAgiIiqAAgAkAkKIAAAgICqAAIAAgiQAAgPgPAAIiLAAQgSABACAQgAipDnQgRAAAAgRIAAjEQAAgRARAAIFNAAQARAAAAARIAADEQAAARgRAAgAh8BBIAABlQAAABAAABQAAABAAAAQABABAAAAQABAAABAAIDsAAQABAAABAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAhlIgEgCIjsAAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_14.setTransform(113.9,151.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_15.setTransform(38,149.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjOFdIAAk6IhiBUIgng1QAqgdAkgdQAkgcAdgeQAdgeAWgeQAXgeAPgfIAAgDQABgFgKAAIjFAAIAAhBIBsAAIAAhoIBAAAIAABoIBTAAIAhAfQgSAwgcAuQgdAvglAsIAAAiQAyAmBfBTIgrAzQgrgsg7g0IAAELgAhcEyQAZgUAVgWQAWgXASgbIAhg4IAdhAQAQgtAWhnQAIg3AGh7IAAgkIh0AAIAAhBIFIAAQAPAEADAEQAGAIAAAVQgCDqgDBfQgBA8gHAwQgGAwgMAlQgMAkgQAZQgRAZgUANQgWAPgpAAQhBgFgqgKIgEhLQArANA6AGQAYAAAOgKQALgHAJgPQALgQALgZQAIgaAGgrQAFgtACg7IAEjQQAAhJgEgFQgCgFgGAAIhgAAIAAAkQgDBpgIA0QgSBngPA0QgOAqgRAlQgRAmgVAhQgVAigYAdQgXAdgbAagAhfgDQAlgnAsg+IAwAnQgtBBglAlg");
	this.shape_16.setTransform(-39.2,149.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ADuE0IhAgqQgiAbgdASQgfASgcAKIgogyQAqgNAagNQAYgNAcgUQgrgsguhAIAuggQAeAsA3A9QA0g2AVg/QAAgKgOABIjFAAIAAg1IDzAAIAfAZQgPA0gPAlQgQAlgSAYIggAmIA7AhQAiAQAnAOIgmAzQgkgPgigUgAhHFRIAAg1IkEAcIgMg4IAygGIAAkZIg4AAIAAg7IK7AAIAAA7IlnAAIAAFwgAjoDzIChgRIAAgvIihAAgAjoB9IChAAIAAgyIihAAgAjoAWIChAAIAAg1IihAAgAj+h4QgQAAAAgQIAAi/QAAgPAQAAIH8AAQAPAAAAAPIAAC/QAAAQgPAAgAjQiwQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIGaAAIADgDIAAgfImfAAgAjQkfIAAAcIGfAAIAAgcQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAImaAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABg");
	this.shape_17.setTransform(-114.1,151.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AChFJIADhCIAzAPIAfAFQAQAAAHgGQAGgHAAgOIAApbIBBAAIAAJsQAAAagPAVQgJANgPAHQgRAIgXAAQg7gGgpgNgAlTESIC2gRIAAiOIicAAIAAhBICcAAIAAhhIikALIgRg/IA3gDQAegyA1htIiAAAIAAhBIGZAAIAABBIjSAAQgZA6gzBhIDNgNIgqhTIA5gZQAtBZAwByIg9AVIgWg4Ih1AIIAABlICZAAIAABBIiZAAIAACEQBtgRA7gPIAOA/QgjAKg8ALIh5ASQhSAKh3AKgACIC1IAAnkIBBAAIAAHkg");
	this.shape_18.setTransform(-191.4,149.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AEEFQIAAggIoHAAIAAAgIhBAAIAAqJQAAgWAXAAIJbAAQAWAAAAAWIAAKJgAkDkGIAAH2IIHAAIAAn2QAAgJgJAAIn2AAQgJAAABAJgAimCeQgJAAAAgJIAAlEQAAgJAJAAIFWAAQAKAAAAAJIAAFEQAAAJgKAAgAhuh0IAADOQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAIDhAAQAEAAAAgEIAAjOIgEgDIjhAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABg");
	this.shape_19.setTransform(-266.1,150.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ai3FLIgChDQA5AQAaAAQAOgBAFgDQASgOABgbIAAiHIh3AAQgFAlgJAgQgKAigOAdQgOAegTAaQgSAagWAWIg4gpQATgPAQgVQAQgUAOgYQAMgZAKgdQAKgcAFghIhbAAIAAhBIBkAAIACgvIAAhNIhgAAIAAhBIBgAAIAAh0IhiAAIAAhBIE6AAQAVABAAAWIAAI4QAAAfgPAVQgLAPgSAIQgXAKggAAQglAAgvgKgAisgMIgDAvIBvAAIAAh8IhsAAgAisiaIBsAAIAAhpQAAgLgMAAIhgAAgAA6FOIAAqWQAAgMALAAIDlAAIArAiIhMDkIgBAFQAAAGAFAEQAcAjAjA+QAJAXAFAXQAGAXAAAWQgBAtgNAgQgNAegaARQgdAUgjgBQgdAAgzgMIgFhKQA6ASARAAQA/AAAAhPQAAgUgFgUQgFgTgLgVQgkg5gdgiQgKgNACgGIBCjGIACgJIiAAAQgIAAAAAJIAAJZg");
	this.shape_20.setTransform(-342.2,150.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AlYFHQAMgdAGgfQAGgfAAgiIgBgaIA+ACQAAAwgIAsQgJArgPAmQgcgSgZgGgAEWFSIAAgfIizAAIAAAfIg7AAIAAljQgBgKALAAIBUAAIAAlCIA+AAIAABtICVAAIAAA5IiVAAIAACcICAAAQAMAAAAAMIAAFhgABjAmIAADSICzAAIAAjSQAAgHgJgBIiiAAQgJABABAHgAjqFMIADhQIgChJIA5ACIACBDIgDBYgAicC0IA6gJQALA1AOBgIg6AFQgNhagMg3gAhGCsIAygOQAPAnASBTIgyAJQgJgsgYhJgAlYBbICagJIAAg0IiHAAIAAg5ICHAAIAAgzIiKAAQgIAAAAgJIAAj3QAAgIAIAAIFPAAQAJAAAAAIIAAD3QAAAJgJAAIiLAAIAAAzICDAAIAAA5IiDAAIAAAxICMgKIADA9IlbAVgAiEiDIBdAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAiZIgDgCIhdAAgAkbkeIAACZIADACIBaAAIAAidIhaAAgAhxigIAPhkIAwAHIgOBngAkKj9IAxgFQAJAkAGA/IgyACQgCgtgMgzg");
	this.shape_21.setTransform(379.3,50.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AljEkQAqgSBOgyQAggWAbgaQAagaAVgeQATgeANgiQAOgiAGglIiQAAIAAhDIHDAAIAJABQgaghgagxQgcgwgbg/QgDgHgHAAIjdAAIAAhBID7AAQALAAAHANIAqBXQAVAoAYAjQAXAjAZAdQAZAdAcAXIg9AnIgtgwQACAQgBAgIgCBuQgCBDgIAwQgIAsgMAVQgLARgMAMQgNAMgQAIQgQAIgTAEIgrAEQgeAAgjgGQgjgHgpgMIAFhKIBLAWQAiAHAZAAQAZAAAPgHQARgIAKgPQAKgQAGgZQAFgYADgkQADg8AAgzQAAgjgDgFIgGgCIi3AAQgJAqgNAlQgNAmgQAgQgRAdgYAcQgZAcgeAbQgfAagmAaQgmAZgtAYgAllgwQAjgeA4hFQAagkAlhQIA+AbQgwBhgbAnQg3BFgdAZg");
	this.shape_22.setTransform(303.8,50.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AkbFFQgOAAgIgHQgIgIAAgQIAAowIgcAAIAAg6IKrAAIAAA6IpOAAIAAICQAAAQARAAII1AAIAAA9gAjGDpQgIAAAAgJIAAjeQAAgHAIAAIDeAAQAJAAAAAHIAADeQAAAJgJAAgAiTA0IAAB7IACADIB1AAIADgDIAAh7IgDgDIh1AAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgABUDmQgJAAAAgIIAAjcQAAgHAJAAIDbAAQAJAAAAAHIAADcQAAAIgJAAgACGA0IAAB4IACADIBzAAIADgDIAAh4IgDgDIhzAAQgEAAACADgAimgwQgJAAAAgJIAAigQAAgIAJAAIGiAAQAIAAAAAIIAACgQAAAJgIAAgAhxinIAAA9IACADIEyAAIADgDIAAg9IgDgCIkyAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_23.setTransform(227.9,50);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_24.setTransform(152,49.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ADCEpQg3gYgrgNIAXg9QAxAPA4AZQA4AYA/AiIgcA8QhCgkg3gYgAlhElQBJgZA4gZQA4gYAogXIAbA7QgsAag5AZQg5AZhFAWgAlaC8IAAhAIB7AAIAAloIhjAAIAAhAIBjAAIAAg4IBBAAIAAA4IFDAAIAAg4IBAAAIAAA4IBlAAIAABAIhlAAIAAFoIB9AAIAABAgAieB8IFDAAIAAhOIlDAAgAiegOIFDAAIAAhOIlDAAgAieiaIFDAAIAAhSIlDAAg");
	this.shape_25.setTransform(75.6,50);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Aj2EsQAZgNAWgQQAVgRARgTQARgVANgXQANgYAIgbQiIAzhGATIgdg+QBPgSA/gVQA/gVAugXIACglIAAgyIjIAAIAAhAIDIAAIAAhuIjRAAIAAhCIDRAAIAAhWIBBAAIAAF9QgCA1gLAuQgMAugVAoQgVAngfAhQgfAigoAZgAAxFdIAAq5IBBAAIAABWIDcAAIAABCIjcAAIAAB0IDQAAIAABBIjQAAIAACIIDoAAIAABAIjoAAIAACkg");
	this.shape_26.setTransform(-1.1,50);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AlQFYIAAhAIDjAAIAAmuIjUAAIAAhBIC6AAQgfg6gbghIA1gkQAtA8AVAqIgpAZIDJAAQAcgzAhhNIA7AbQgSA0gbAxICkAAIAABBIjSAAIAAGuIDeAAIAABAgAgtEYIBfAAIAAmuIhfAAgACoC/QAhhUAVhIQAUhFAKg3IA/AQQgVB6hACigAkOA3QgVhDgXgxIA8gVQAaA0AXBEQAWBFATBTIg+ASQgVhWgXhDg");
	this.shape_27.setTransform(-76.2,48.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABnFUIhVgUIgChPQAuAQAnAIQAlAHAbAAQAkAAASgOQAQgOAOgmQAHgWAEgjIAFhVIADipQAAhDgDgFQgDgFgGAAIj+AAQgEA+gOA/QgPBAgYBBQgTAqgXAmQgXAlgdAjQgcAhghAfQghAegmAaIg0gyIA6goQAbgUAYgZQAYgXAUgbQAUgbARgfQAQgeANggIAXhDQAMgvALhrIjxAAIAAhBID0AAIAAhiIBGAAIAABiIEwAAQAQADAEAEQAFAIAAAWIgDEbQgBA0gGAqQgFAqgKAfQgJAggOAWQgNAVgSALQgOALgVAEQgVAFgaABQgfgBgngGg");
	this.shape_28.setTransform(-153.7,49.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AkFFfIAAlIQgPAxgPAeIg6gLQAVglAdhRQAMgpAPhYIhEAAIAAg7IBPAAIAAiDIA7AAIAACDIA+AAIAAA7Ig+AAIAAAWQAtBCAjA7IgyAdIgeg3IAAGCgAhEFVQgUABAAgVIAAjeIgfAfQgQgbgXgRQAigfAagmQAaglARgtIA3AbIgTAlIB3AAQAXgoAKgaIA0AbIgSAnICvAAIgFA0IiuAAIAAAqIClAAIAAA0IilAAIAAAvICjAAIAAAzIijAAIAAAuIC2AAIAAA0gAgdEYQAAAKAHgBIB+AAIAAguIiFAAgAgdDAICFAAIAAgvIiFAAgAgdA7IAAAiICFAAIAAgqIh+AAQgHAAAAAIgACJhJQgGAAAAgJIAAiJQAAgHAGgBIDDAAQAIABAAAHIAACJQAAAJgIAAgAC9isIAAAsIADACIBXAAIADgCIAAgsIgDgCIhXAAQgBAAgBAAQgBAAAAABQAAAAAAAAQgBABABAAgAhmhJQgHAAAAgJIAAiMQAAgIAHABIC/AAQAIgBAAAIIAACMQAAAJgIAAgAgzivIAAAvIACACIBVAAIADgCIAAgvIgDgDIhVAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABgAC4jsIAAgbIiEAAIAAAYIg5AAIAAgYIhwAAIAAg1IBwAAIAAgiIA5AAIAAAiICEAAIAAgiIA6AAIAAAiIBsAAIAAA1IhsAAIAAAbg");
	this.shape_29.setTransform(-228.8,49.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AlgENQA3gDArgMQApgLAZgTQAYgPALgeQAKgaAAghIh5AAQgSAAAAgSIAAmoQAAgQASAAIIHAAQARAAAAAQIAAGoQAAASgRAAIiRAAIAABpQAAANAHAJQAKANAUACIBzAAQAKAAAKgIQAEgEADhOIBAAKIgGBSQgEAfgGAGQgZAagWgBIi0AAQgXgBgUgSQgVgUAAgZIAAiOIh9AAQAAAfgFAaQgGAYgKAWQgKATgPAQQgOAPgSANQggAVgwAOQglAKg3AIgAjWA3IADADIGdAAIACgDIAAhDImiAAgAjWhJIGiAAIAAhJImiAAgAjWkSIAABDIGiAAIAAhDQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAImdAAQgBAAAAABQgBAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_30.setTransform(-304.1,51.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABHFKIhKgNIgHhLIBRARQAjAGAaAAQAnAAATgOQAOgMAAgTIAAnqIokAAIAAhBIKxAAIAABBIhJAAIAAH4QAAAZgQAZQgRAagXAJQgaALgXAEIgeABQgeABgkgGgAkVCIQgIgBAAgJIAAkvQAAgJAIAAIF0AAQAJAAAAAJIAAEvQAAAJgJABgAjdh3IAAC6IACAEID/AAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAi6IgDgDIj/AAg");
	this.shape_31.setTransform(-380.1,51.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AD1FUIAAgjIlkAAIAAAjIhBAAIAAjZQhPA0g2AaIgqg3IBCgfIA7gjQAbgUAWgWQAXgVATgYIiMAAIAAhAIC0AAIAYhGIkOAAIAAhAIEaAAIACgoIAAgdIjWAAIAAhBIIkAAQAVAAgBAUIAAByIA2AAIAABAIg2AAIAABxQABAVgVAAIlPAAQgRAegmApIGYAAQAOAAAAANIAAEHgAhvCJIAABoIFkAAIAAhoQAAgJgKAAIlRAAQgLAAACAJgAgKh7IgRA0ID9AAQAGAAABgHIAAg/IjvAAgAAGj1IgCAoIDlAAIAAg/QgBgGgGAAIjcAAg");
	this.shape_32.setTransform(341.6,-49.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ADUFhIAAgkImoAAIAAAkIhBAAIAAkuQgBgLAMAAIISAAQANAAAAANIAAEsgAjUECIGoAAIAAgwImoAAgAjUBsIAAArIGoAAIAAgrQAAgIgJAAImWAAQgKAAABAIgAD4AaQgfgGgdgNQgdgMgcgUQgbgVgbgcQgagcgZgjIj5AAIAABYQBAgGA3gLQA0gKApgNIASA+QhfAWg5AIQh3ANhEAEIgPg/IA7gCIAAj+QAAgRAQgBIACAAIBsADQBIAACMgJQBGgGCHgXIAZBAQiUAYhSAGIgVACIAjA9IEKAAIAAA6IjhAAQAdAjA7ApQAoAXAXAAQAdAAAAg2IgBgUIBAALQAAAugGAdQgGAagMANQgKAKgNAFIgYACgAgJjDIgfg5Ii0AAQgDAAAAAFIAAA0IDWAAg");
	this.shape_33.setTransform(265.9,-50.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AlOEfQAngJBKghQAkgSBEg0IAnA5QhTA2goAVQhRAigmAJQgEgogKgXgABUDwIAZg8QA0APA9AdQA8AbBEAnIgdA8QiPhRhegdgAlfCeIAAg9IAyAAIAAmLQgCgOASgBQAlgBAkgHQAjgGAdgLIAdA4QhJATgrAEQgGAAACAIIAABMIBtAAIAAA7IhtAAIAABLIBtAAIAAA6IhtAAIAABQICTAAIAAiyIA8AAIAACyIBHAAIAAjQQAAgKgJAAIhuAAQgPAAAAgQIAAjUIA9AAIAAA1ICDAAIAAA6IiDAAIAAAzQAAAKAJAAIBuAAQAQAAAAARIAAEBICTAAIAAhQIhrAAIAAg6IBrAAIAAhSIhrAAIAAg6IBrAAIAAhOQAAgJgJAAIhlAAIAAg6ICcAAQAPAAAAAPIAAGYIArAAIAAA9g");
	this.shape_34.setTransform(189.8,-50.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AD1FUIAAgjIlkAAIAAAjIhBAAIAAjZQhPA0g2AaIgpg3IBBgfIA6gjQAbgUAXgWQAXgVATgYIiMAAIAAhAIC0AAIAZhGIkPAAIAAhAIEaAAIABgoIAAgdIjWAAIAAhBIIlAAQAVAAAAAUIAAByIA2AAIAABAIg2AAIAABxQAAAVgVAAIlPAAQgRAegmApIGYAAQAOAAAAANIAAEHgAhvCJIAABoIFkAAIAAhoQAAgJgKAAIlRAAQgKAAABAJgAgKh7IgRA0ID9AAQAHAAAAgHIAAg/IjvAAgAAGj1IgCAoIDlAAIAAg/QAAgGgHAAIjcAAg");
	this.shape_35.setTransform(113.6,-49.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("ABvFMIgFhDQAzANBBAHQAYAAAMgKQANgLABgbIAAiGIjaAAQgJApgLAhQgMAfgOAVQgQAYgTATQgUATgZANQgaAOghALQghALgsAIIgkg+QApgDAjgJQAggJAagPQAYgNATgSQARgSANgVQAQgaAOg7QAGgiABgyIAAlXQAAgPANAAIEvAAQAVABgBAWIAAJHQAAAQgEAOQgGARgMAMQgNAOgUAIQgYAIggAAQhFgFgtgLgABAALIgCAbIDSAAIAAh8IjQAAgABAkXIAACAIDQAAIAAh5QAAgLgMAAIi+AAQgFAAgBAEgAlQEQIAApHQAAgVAVAAIDmAAQAWAAAAAVIAAHhQAAAVgXAAIi5AAIAABRgAkPB/ICCAAQANAAAAgNIAAiTIiPAAgAkPkBIAACfICPAAIAAifQAAgKgLAAIh6AAQgKAAAAAKg");
	this.shape_36.setTransform(37.9,-49.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhUE0QA9grAygtQA0guAqgvQgbhGgVhLQgOg0gWhzIkAAAQgIABgBAHIAABNIDHAAQAXgCABANIAADQQAAAogOAeQgJATgKAMQgKAMgLAGQgRAIgdAAQgjABg9gMIgDhEQA2AQAhAAQAQABAIgFQAQgLAIgmIAAieQgBgIgIAAIiWAAIAAAlQgECDgLA6QgIArgMAnQgLAngQAkIg+gXQASgrALgnQAMgoAGgoQAKg2ADh+IAAjVQAAgTASAAIEuAAIgLhlIBCACQADA6AIApICIAAQgtgdgogSIAfg6QAdAMBEArIggAyIBgAAIAABBIjrAAIAdCLQAPA+AQAvQASgeARgyQATgzAShKIBAAQQgbBmgRAsQgmBTgXAiQAWAyAXAqQAYArAHAAQAKAAAFgVQAHgwgBhFIA/AOQgHBogIAhQgHAZgJAQQgIAQgLAHQgMAEgHAAQgPAAgNgIQgNgFgMgOQgVgYgUggQgVgigUgrQglAqgvArQgrAmg0Ang");
	this.shape_37.setTransform(-38.3,-50.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AljEkQAqgSBNgyQAhgWAbgaQAbgaATgeQAVgeANgiQANgiAGglIiQAAIAAhDIHDAAIAIABQgZghgbgxQgbgwgbg/QgCgHgJAAIjdAAIAAhBID7AAQAMAAAHANIApBXQAWAoAXAjQAYAjAZAdQAZAdAbAXIg8AnIgtgwQABAQABAgIgCBuQgDBDgIAwQgIAsgMAVQgLARgMAMQgNAMgQAIQgQAIgUAEIgqAEQgeAAgkgGQgigHgpgMIAEhKIBMAWQAjAHAZAAQAXAAAQgHQARgIAKgPQALgQAFgZQAGgYACgkQADg8AAgzQAAgjgCgFIgHgCIi3AAQgKAqgMAlQgNAmgQAgQgRAdgZAcQgYAcgeAbQggAaglAaQgnAZgsAYgAlkgwQAigeA4hFQAagkAlhQIA/AbQgyBhgbAnQg2BFgdAZg");
	this.shape_38.setTransform(-114.2,-49.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkbFFQgOAAgIgHQgIgIAAgQIAAowIgcAAIAAg6IKrAAIAAA6IpOAAIAAICQAAAQARAAII1AAIAAA9gAjGDpQgIAAAAgJIAAjeQAAgHAIAAIDeAAQAJAAAAAHIAADeQAAAJgJAAgAiTA0IAAB7IACADIB1AAIADgDIAAh7IgDgDIh1AAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAABABgABUDmQgJAAAAgIIAAjcQAAgHAJAAIDbAAQAJAAAAAHIAADcQAAAIgJAAgACGA0IAAB4IACADIBzAAIADgDIAAh4IgDgDIhzAAQgEAAACADgAimgwQgJAAAAgJIAAigQAAgIAJAAIGiAAQAIAAAAAIIAACgQAAAJgIAAgAhxinIAAA9IACADIEyAAIADgDIAAg9IgDgCIkyAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_39.setTransform(-190.1,-50);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AixFVQgaAAgRgKQgQgIgJgRQgLgTgCgvIAAkLIg+ATIgbg+IBZgcIAAjFIBEAAIAACxICmg2IAAioIBDAAIAACUIDLhAIArATIAAEVQAAAegNAXQgOAYgZAQQgTAKghAAQgmgBgxgLIAChFQAtAOAYACQARAAAMgHQAKgFAGgMQAIgPAAgdIAAiyIgEgGIgHAAIioA0IAAFGIhDAAIAAkwIimA0IAAEVQgCAXAHAJQAJAMAbAAIF4AAQAhAAAMgSQAIgNgBheIBFAKQABBXgGAkQgEAVgLANQgJANgPAFQgSAIgkAAg");
	this.shape_40.setTransform(-266.3,-51.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ABUFYIAAqOQAAgUAVgBIDaAAQAVABAAAUIAAH4QAAAUgIAQQgIAMgNAIQgVAMghAAQgfAAgkgJIgMhNQA3AOAYAAQAJAAAEgEQAGgGAAgSIAAmkQAAgIgJAAIhyAAQgJAAAAAIIAAJagAgrFKIAAgjIi8AAIAAAjIhAAAIAAkPQgCgLAMABIEkAAQAOAAAAANIAAEMgAjnB6IAABtIC8AAIAAhtQAAgJgJAAIiqAAQgKAAABAJgAlXgZQA1ggBCgyQAegbA6hLIA0AZIgLANQAhAmAoAiQAnAkAuAfIguAxQgrgdgmgjQglgkgegoQgnAzgmAiQghAdg3AggAlWjcQAogYAggfQAhgeAZgmIA1AkQgiAwgiAhQgjAjgjATgAhvkhIArgyQAeAWAhAdIBDBFIguAvQhJhPg2gmg");
	this.shape_41.setTransform(-343.2,-50.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("ABnFUIhVgUIgChPQAuAQAnAHQAlAIAbAAQAkAAASgOQAQgNAOgnQAHgWAEgjIAFhVIADipQAAhDgDgFQgDgFgGAAIj+AAQgEA+gOA/QgPBAgYBBQgTAqgXAmQgXAmgdAiQgcAighAeQghAegmAaIg0gyIA6goQAbgUAYgZQAYgYAUgaQAUgcARgeQAQgeANggIAXhDQAMgvALhrIjxAAIAAhBID0AAIAAhjIBGAAIAABiIEwAAQAQAEAEAEQAFAIAAAVIgDEcQgBA0gGApQgFArgKAfQgJAggOAWQgNAVgSALQgOALgVAFQgVAEgaAAQgfAAgngGg");
	this.shape_42.setTransform(378.3,-150.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AkFFfIAAlIQgPAxgPAdIg6gKQAVgmAdhQQAMgpAPhYIhEAAIAAg7IBPAAIAAiEIA7AAIAACEIA+AAIAAA7Ig+AAIAAAWQAtBCAjA7IgyAdIgeg3IAAGCgAhEFVQgUABAAgVIAAjeIgfAeQgQgZgXgSQAigfAagmQAaglARgtIA3AbIgTAlIB3AAQAXgpAKgZIA0AaIgSAoICvAAIgFA0IiuAAIAAAqIClAAIAAA0IilAAIAAAuICjAAIAAA0IijAAIAAAuIC2AAIAAA0gAgdEYQAAAJAHAAIB+AAIAAguIiFAAgAgdC/ICFAAIAAguIiFAAgAgdA7IAAAiICFAAIAAgqIh+AAQgHgBAAAJgACJhJQgGAAAAgIIAAiKQAAgHAGAAIDDAAQAIAAAAAHIAACKQAAAIgIAAgAC9irIAAArIADACIBXAAIADgCIAAgrIgDgDIhXAAQgBAAgBAAQgBAAAAABQAAAAAAAAQgBABABABgAhmhJQgHAAAAgIIAAiNQAAgIAHAAIC/AAQAIAAAAAIIAACNQAAAIgIAAgAgzivIAAAvIACACIBVAAIADgCIAAgvIgDgDIhVAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABgAC4jsIAAgbIiEAAIAAAXIg5AAIAAgXIhwAAIAAg0IBwAAIAAgjIA5AAIAAAjICEAAIAAgjIA6AAIAAAjIBsAAIAAA0IhsAAIAAAbg");
	this.shape_43.setTransform(303.2,-150.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_44.setTransform(228,-150.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAFQIAAhDQBAARAmAAQAcAAAKgJQAHgHAAgPIAAhfInJAAIAAg7IHJAAIAAhCInZAAIAAg6IEuAAIAAg5Ij2AAIAAg7ID2AAIAAglIAfAAQgQgUgQgLQAdgeAUgjQAXgkANgpIA6AaIgLAYIDxAAIAAA6IiEAAIAEAMIAOA8Ig8AJQgKgygLgfIhMAAQgMAbgkAmIALAAIAAAlID8AAIAAA7Ij8AAIAAA5IExAAIAAA6IiFAAIAABCIB8AAIAAA7Ih8AAIAABwQAAAVgIAOQgGAPgNALQgNAKgTAEQgSAFgWAAQhDgGgugKgAjBDXIAxgoQAxAxAhAvIgzAlQgegrgygygAlbjUQAigZAbgjQAbgkATgrIA6AgIgJAOICuAAIAAA6IhrAAQAKAcAEApIg9AJQgFgugJggIgtAAQgOAWgUAWIgtApQgUgggSgSg");
	this.shape_45.setTransform(151,-150.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ABqFJIgFhIQBEASAiABQASAAAOgKQAQgMAAgRIAAn7QAAgFgGAAInrAAQgFAAAAAFIAAJdIhAAAIAAqMQAAgXAXAAIJHAAQAZAAAAAXIAAJAQAAAUgHAPQgGAQgOAKQgOAKgUAGQgUAFgbAAQgrAAg7gMgAieDFQgSAAAAgRIAAj8QAAgRASAAIE/AAQASAAAAARIAAD8QAAARgSAAgAhvgYIAACcIADAEIDbAAIADgEIAAicQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIjbAAQgEAAABAEgAjJiYIAAg+IGUAAIAAA+g");
	this.shape_46.setTransform(75.9,-149.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ADMFfIAAgTIlPAAIAAATIg9AAIAAjvQg3AQhSAOIgTg7QA5gIBkgXQBIgTA9gYIkRAAIAAg6IEUAAIAAg8IjTAAIAAg7IDTAAIAAguIA8AAIAAAuIC0AAIAAAiIBbhOIAoAvQhsBXgqAdICzAAIAAA6IkVAAIiGA8IE3AAQAVAAAAAVIAAEFgAiDESIFPAAIAAgrIlPAAgAiDCIIAAAlIFPAAIAAgmQAAgHgHAAIk+AAQgLAAABAIgAAFgxIA4AAIA2giIAlgaIiTAAgAB4jGIAAgtIjkAAIAAAtIhBAAIAAgtIiiAAIAAg6ICiAAIAAgxIBBAAIAAAxIDkAAIAAgxIBBAAIAAAxICjAAIAAA6IijAAIAAAtg");
	this.shape_47.setTransform(-0.7,-150.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ABPFTIAAhIQAsANA4AGQAtABACglIAAgoIlYAAIAACNIhAAAIAAmYIgTANQg3ApgzAaIgqg4QAzgaBZg9IA8g0IA1g5IjwAAIAAhAIEeAAIAkg8IA5AkIgPAYIFCAAIAABAIlsAAQgoA1gnAoIFvAAQARAAAAAQIAAGMQAAAegRATQgLANgUAIQgXAIgiAAQgpAAhCgPgAh2CRIFYAAIAAhMIlYAAgAh2hCIAABHIFYAAIAAhHQAAgFgGgBIlNAAQgFABAAAFg");
	this.shape_48.setTransform(-76.9,-150.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ai3ErIA/ggQAXgPAVgVQAXgWATgcIiIAbQgFgZgNgeIAvgKQAjgtAmhFQgbgggdgbQgcgbgfgVIAigxIAbAVQAWg5ASg8IA3AVQgPAwgmBYIAmAnQATgvAWhWIA4AJQgEAdgKAgIgaBDQgxBggkA2IA+gMIALg6IA5AJIAAAIIgcBqQgLAagQAYQgPAYgWAVQgVAVgbATQgbATggARgAlcFLIAEhDQAtATALAAQAQAAAAgaIAAiZIgvAVIgig3IBRgnIAAi7IhJAAIAAhAIBJAAIAAiCIBBAAIAACCIA+AAIAABAIg+AAIAACbIAvgdIAiA1QgyAkgfALIAADMQAAAbgPAVQgIALgMAGQgNAHgQAAQgdAAgwgPgABqFHQgVAAAAgWIAAkyIgUAdQgbgbgUgIQAXgfAihHQAOgkAQhRIA8APQgIAmgOAqIBKAAQAYg4AGghIA5ATIgWBGIBGAAIgGA7IhIAAIAABJIBMAAIAAA8IhMAAIAABKIBMAAIAAA6IhMAAIAABMIBQAAIAAA6gACSEEQAAAJAKAAIA4AAIAAhMIhCAAgACSCHIBCAAIAAhKIhCAAgACShAIAABBIBCAAIAAhJIg4AAQgKAAAAAIgAiMjyIAAg6IDLAAIAAgyIBAAAIAAAyIDfAAIAAA6g");
	this.shape_49.setTransform(-152.3,-149.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AixFVQgaAAgRgKQgQgIgJgRQgLgTgCgvIAAkKIg+ASIgbg+IBZgcIAAjFIBEAAIAACxICmg2IAAioIBDAAIAACUIDLhAIArATIAAEVQAAAegNAXQgOAXgZARQgTAJghABQgmgBgxgMIAChEQAtAOAYACQARAAAMgHQAKgFAGgMQAIgPAAgdIAAiyIgEgHIgHAAIioA1IAAFGIhDAAIAAkwIimAzIAAEWQgCAXAHAJQAJAMAbAAIF4AAQAhAAAMgSQAIgNgBheIBFAKQABBXgGAkQgEAVgLANQgJANgPAFQgSAIgkAAg");
	this.shape_50.setTransform(-228.3,-151.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AD7FWQgRgJgRgRQgkgkgcgqQgdgqgXgxQgVgxgQg5QgOg4gLhDIitAKIgKhDICugLQgHg7gFiHIBCADQACCBAHA7IDvgQIAEBEIjqAOQAIA1AMAuQAMAuAQAoQAPAoATAhQATAhAXAaQAeAlAMAAQAGgBAEgKQAHgfADhTIA/ARQgBBFgKAtQgJAsgSASQgOAOgOABQgRAAgRgIgAj0FeIAAlxQgUAlgXAgIg/gbQBDhjAnhsQASg0AUhxIBDAKQgXBwgPAvIAAISgADSj7QglgagegQIAjg3QAiASAmAbQAlAaArAiIgoA1g");
	this.shape_51.setTransform(-304.2,-150.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AlgE7QAOgoAShdQAIgxAEhwIAAlSQAAgRARAAIJ1AAIAAA6IpBAAQgIAAABAIIAAE0QgFBvgHAxQgUBegOApgAj5FMIAAg6IBaAAIAAhwIA9AAIAABwIBzAAIAAicIA+AAIAAAxIDPAAIAAA6IjPAAIAAAxIEPAAIAAA6gAh9B9IAAiEQgdAvgiAkIg0gdQAegbAYgeQAYggATgiIhSAAIAAg7IBkAAIAAgvIhNAEIgJg6QBBgCA2gFQA0gFAngJIAIA6QgeAHgrAEIAAA1IBYAAIAAA7IhJAAIBTBKIgqAsIg4g5IAACMgACWB6IAAiDQg6BGgeAaIg0giQAmgfAgghQAggiAYglIhZAAIAAg7IBnAAIAAgwIhQAFIgJg6IB8gJQA3gGAogJIAKA6IhSAOIAAA1IB3AAIAAA7IhnAAQASAfAhAiQAgAgAuAkIg0AkQhJhIgUgaIAACFg");
	this.shape_52.setTransform(-380.1,-149.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AlaFCIAAhEIE8AAIAAjuIkCAAIAAhDIECAAIAAjKIkYAAIAAhEIJwAAIAABEIkWAAIAADKIEAAAIAABDIkAAAIAADuIE3AAIAABEg");
	this.shape_53.setTransform(341.8,-249.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AD1FUIAAgjIlkAAIAAAjIhBAAIAAjZQhPA0g2AaIgpg3IBCgfIA5gjQAbgUAYgWQAWgVATgYIiMAAIAAhAIC0AAIAZhGIkPAAIAAhAIEaAAIABgoIAAgdIjWAAIAAhBIIlAAQAUAAABAUIAAByIA2AAIAABAIg2AAIAABxQgBAVgUAAIlPAAQgRAegmApIGYAAQAOAAAAANIAAEHgAhvCJIAABoIFkAAIAAhoQAAgJgKAAIlRAAQgKAAABAJgAgKh7IgSA0ID+AAQAHAAgBgHIAAg/IjuAAgAAGj1IgCAoIDkAAIAAg/QABgGgHAAIjcAAg");
	this.shape_54.setTransform(265.6,-249.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_55.setTransform(190,-250.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AjBFgIAAhwIiPAAIAAg7ICPAAIAAg8IhyAAQgJAAAAgJIAAkZQAAgJAJAAIByAAIAAg7IiMAAIAAg7ICMAAIAAg3IA+AAIAAA3ICGAAIAAA7IiGAAIAAA7IB1AAQAJAAAAAJIAAEZQAAAJgJAAIh1AAIAAA8ICDAAIAAA7IiDAAIAABwgAkBA8IACACIC8AAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAg6IjBAAgAkBh1IAAA9IDBAAIAAg9IgDgCIi8AAgAgdFFQAZgwAghcIAPhBQAGgfAAgdIAAl2QAAgRATgBID6AAQATABAAARIAAJKQAAAZgHAQQgIAOgNAIQgLAHgRADIgjADQgdAAg2gIIAAhHQA4ARAeAAQANAAAFgFQAIgGAAgVIAAiaIilAAQgJBSgNApQggBUgXAqgABvApICkAAIAAiAIikAAgABvkJIAAB4ICkAAIAAh5QAAgHgIAAIiUAAQgIgBAAAJg");
	this.shape_56.setTransform(112.8,-250.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AlaFCIAAhEIE8AAIAAjuIkCAAIAAhDIECAAIAAjKIkYAAIAAhEIJwAAIAABEIkWAAIAADKIEAAAIAABDIkAAAIAADuIE3AAIAABEg");
	this.shape_57.setTransform(37.8,-249.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AEHFTIAAggIoNAAIAAAgIhBAAIAAqQQABgVAVAAIJjAAQAVAAAAAVIAAKQgAkGkPIAAIHIINAAIAAoHQAAgJgJAAIhDAAIAQA0IAjAAIAAA7IiNAAQAVCOALAmQASgsAdhmIA6AQQghB4g0BYIAUA2QALAZADAAQAJAAABgzIgBgsIA4AQQgBAsgFAhQgFAhgKAVQgQAYgVAAQgPAAgNgKQgMgJgKgQQgMgTgRgrQgqA6gnAnIgxgmIApgpQg2ANg+AJQg9AIhCAEIgOg9QBVgGBBgKQBBgJAsgNIALA0IA3hHQgPgxgMg+IgYiLIkKAAIAAg7IEDAAIgDg0IkaAAQgKAAABAJgACNjkIgSg0IglAAIAGA0IAxAAgAjbBPQgGAAgBgJIAAi4QABgIAGAAIDiAAQAJAAAAAIIAAC4QAAAJgJAAgAinhDIAABaIACACIB5AAIADgCIAAhaIgDgCIh5AAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_58.setTransform(-38.1,-249.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgfFdIAAjQIjoAAIAAAhIhEAAIAAl0QAAgXAXAAIEVAAIAAh/IBCAAIAAB/IEQAAQAZAAAAAYIAAFzIhDAAIAAghIjmAAIAADQgAAjBJIDmAAIAAjZQAAgKgLAAIjbAAgAkHiQIAADZIDoAAIAAjjIjeAAQgLAAABAKg");
	this.shape_59.setTransform(-114.1,-250.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("ADPFaIAAghImTAAIAAAhIhEAAIAAlbQAAgXAXAAIDRAAIAAiPIk1AAIAAhBIE1AAIAAhyIBCAAIAAByIE0AAIAABBIk0AAIAACPIDaAAQAXAAAAAXIAAFbgAjEAxIAADHIGTAAIAAjHQAAgJgKgBImAAAQgKABABAJg");
	this.shape_60.setTransform(-190.1,-250.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AlSEiQAsgaAlgbQAkgbAcgbIh1hMQgQgQgBgQQABgJAFgLQAVgvA8jAIhYAAIAAhAIBnAAIAXhjIA/AOIgTBVICRAAQASgCAAAQIgDBYQgEAtgIAqQgIApgMAnQgMAngQAkQgRAkgTAiIBeA9IgbA7IhshCQgfAkgpAhQgoAggtAbgAjSg6IgsB4IAAAEIANAJIBZA3QAXggARglQAQgjAMgnQAMgnAHgrQAGgrABguIhyAAgAEQFJIAAgcIiZAAIAAAcIhEAAIAAp2QgBgLANAAIEGAAQAOAAAAAOIAAJzgAB3jrIAAHUICZAAIAAnUQgBgJgJgBIiFAAQgLABABAJg");
	this.shape_61.setTransform(-267.7,-250.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AkPFZIAAlhIgRAcIg/gXQAagnAVgpQAVgpAPgqQAQgrAKgsQAKgtAFguIBAAJQgRBqgaBPIAAHvgAioFNIAAhBIIIAAIAABBgAh9DCQgJAAAAgKIAAnwQAAgJAJAAIGvAAQAKAAAAAJIAAHwQAAAKgKAAgAhFB9QAAAFADAAIE5AAQAEAAAAgFIAAibIlAAAgAhFj9IAACeIFAAAIAAieIgEgDIk5AAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABg");
	this.shape_62.setTransform(-342.7,-250.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("ABSFFIgEhAQA2ANBJAGQBFAAAAg3IAAnxQAAgJgJAAIk5AAIAAg6IFpAAQAVgBABAMIAAIgQAAAmgLAbQgMAcgYAQQgLAHgTAEIgsAEQhPgFg1gKgAlIFEIAAjqQAAgUAUAAIDdAAQAUAAAAAUIAAC7QAAAVgVAAIiyAAIAAAagAkKCKIAABlIB8AAQANAAAAgNIAAhYQAAgKgKAAIh2AAQgJAAAAAKgAgUCwQgIAAAAgJIAAkQQAAgIAIAAID2AAQAIAAAAAIIAAEQQAAAJgIAAgAAhg0IAACmIACAEICHAAIADgEIAAimIgDgDIiHAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAkzAbIAAg5IDXAAIAAA5gAkzhLIAAg7IDXAAIAAA7gAgfiqIAAg7IEUAAIAAA7gAlOizIAAg7IEJAAIAAA7gAk2kZIAAg6IDWAAIAAA6g");
	this.shape_63.setTransform(379.2,-349.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("ADzFaIglgTQgfgVgZgYQgvAXg3APQg1AQg/AKIgRg9QAtgDAxgNQAwgNA3gVQgmg/gOglIi6AAIAAAvQBKgLAggKIANA7QgvAKhIAKIAAAsQAAAcgPARQgKAMgOAGQgSAIgYAAQghgBgxgLIAAg9QAvALAaAAQAWAAAFgJQAFgGAAgeIiVALIgKg6ICfgMIAAg2IiZAAIAAg7ICZAAIAAghIh6AHIgJg2QBWgBBHgIQBDgGA0gMIAIA2QgjAIg8AHIAAAmICoAAQgMgpgPhHIlpAAIAAg6IE2AAIAAglIj1AAIAAg1ID1AAIAAgmIkeAAIAAg8ICrAAIgfggIAtgoQAaAYAeAnIgLAJICkAAQArgsARgbIAxAnIgYAgICZAAIAAA8IkbAAIAAAmID0AAIAAA1Ij0AAIAAAlIE2AAIAAA6IkDAAQAPBIAMAoIDbAAIAAA7IjGAAQARAkAaAhIBQg7IAkAwIhNA4IAYAUQAVAOAMAAQAPABACgNQAHgXAAgmIA7AUQgIA1gMAfQgNAegRAIIgTADQgQAAgUgJgACVAXIAagzQBHAeAgATIgdAxg");
	this.shape_64.setTransform(304.5,-350.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhWFDQAQggAThHQAIgkAEhRIBAAGIgGAyIAIAJQA0gdBJg5QAsglAegnQAkgsAJglIgCgDIgPgCIktAAIAAhBICPAAIAAhpIiHAJIgOhAQBLgBCBgLQA7gIBggYIATA9IikAfIAABwIChAAIASAbQgGAtgTAsQgUArghAqQghArgwApQgvApg9AnQAQAMAWAIIAyAOQAlAHBjAEIAyAAIgKBHQhAgBg0gHQg1gHgpgMQgqgMgegSQgegSgSgXIgBAAQAAAQgMAkIgaA8QgdgUgZgHgAlaE+QAggyAkhPIA1AbQglBTghAxgAi3DaIA6gTQAWA1APA4Ig7ANQgNg0gXgzgAlCCrQgIAAAAgJIAAnmQAAgIAIAAIDfAAQAIAAAAAIIAAHmQAAAJgIAAgAkPBtIABADIB1AAQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAhTIh6AAgAkPggIB6AAIAAhaIh6AAgAkPkPIAABaIB6AAIAAhaIgEgCIh1AAg");
	this.shape_65.setTransform(228.2,-349.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AB1FUIAAhMQA0AWAaABQASgBARgGQARgIAPgOQAJgKAGgSQAFgQACgYQAEgxAAgpQAAgqgMAAIncAAQhBBIgkAiIgygoQAngiAigkQAjglAegmQAegnAZgqQAagpAUgsIi8AAIAAg/IB7AAQgygmgegQIAhgxQA8AkAjAdIgdAmIBGAAIAghkIA8ATIgaBRIEWAAQAHABAIAHQAKAJAAALIgBAHIgbBbIAlAAQAJAAAIAIQAKAIAAALIgBAIIgbBVIAmAAQAQAEAEAEQAFAGAAAVQAABkgFBEQgCAlgHAaQgIAbgNAQQgOASgRALQgOAJgQAFQgTAGgZAAQgoAAg3gOgAiYgDIF1AAIATg7IlhAAgAhNh8IEGAAIATg/Ij6AAgAlFEzQAUgZAhg9QAOggAShJIBCATQgbBUgRAjQglBDgWAbQgXgbgZgOgAh4FHQgFiCgMhNIA9gDQAKBWAHB8gAgSBtIA7gOQAVA/AdCCIg8AJQgXhggahcgABlBkIA5gbQAdAyApBdIg4AVQgmhRghg4g");
	this.shape_66.setTransform(151.4,-350.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AjyFgIAAlGIhHBIIgrgxIBBg5QAegcAXgdQAYgeATgeQASgeAMgeIABgFQAAgIgLAAIinAAIAAg9IBcAAIAAhcIBBAAIAABcIBBAAIAgAYQgQA1gXAwQgXAvgfAnIAAGQgAiFEkQArgLAggUQAhgSAVgWQARgTAJgYQAMgcAAgwIhIAAQgIAAAAgIIAAmlQAAgIAIAAIFPAAQAJAAAAAIIAAGlQAAAIgJAAIhQAAIAACPQAAAOAJAKQAJAJAPABIAaAAQAJAAAIgHQAEgDAChAIA6ALIgFBFQgEAYgEAFQgXAXgUAAIhWAAQgWgBgSgRQgUgTAAgYIAAiuIg8AAQAAAzgLAhQgKAagQAYQgQAXgXAVQgWAVgdARQgeARgjAOgAAPApIACADIDgAAIADgDIAAhBIjlAAgAAPhSIDlAAIAAhGIjlAAgAAPkSIAABAIDlAAIAAhAIgDgDIjgAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAipgYIAxgfQApA3AVAlIgzAcQgRgigrg3g");
	this.shape_67.setTransform(75.8,-349.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("ADXEkQgngdgbgaQgwAqgrAdQgrAeglAPIgug1QAvgTAkgTQAlgVAcgWIAfgbQgpg9gSglQgSgmgehXIgPAAQgDBqgQBDQgNA4gVAxQgjBHgaAiIg6gjQAbgmAVgnQAUgnAOgoQAOgoAHgrQAHgqAAgqIAAkMQAAgQAQgBICaAAIAAg9IBAAAIAAA9ICSAAIAxAeQgDAigKAiQgKAjgQAiIg8gVQAfg8AAgWQAAgGgIABIh3AAIAACLIB1AAIAjAdQgTBFgUA1QgVA0gYAhIgmAyQAZAbAqAbQApAbA3AbIgvA0Qg0gggogdgABiA3QAOAfApA/QBEhUAZhWQAAgLgQABIijAAQANAuASAogAgLjdIAACAIBsAAIAAiLIhiAAQgKAAAAALgAkNFdIAAkgIgmAxIgwgtQCKiMAeh3QAAgJgMAAIiNAAIAAg+IBLAAIAAhXIBBAAIAABXIA1AAIAgAUQgPA9gYA4QgXA3geAwIAAABQA9AvAyAuIgsAxIhDhFIAAEsgAixgcQAkgxAMgZIAwAiQgSAhggAqg");
	this.shape_68.setTransform(-0.1,-350.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgoFiIAAjHIjLAAQgEAAAAAFIAACjIg+AAIAAjTQAAgPAQAAID9AAIAAg3Ii/AAQgJAAAAgJIAAiiQAAgIAJAAIG5AAQAIAAAAAIIAACiQAAAJgIAAIi7AAIAAA3ID+AAQAPAAAAAPIAACZQABAPgGANQgGAOgMAKQgMALgUAFQgVAHgeAAQgiAAgngIIgEhEQAxALAaAAQAXgBANgJQALgKAAgPIAAhQQAAgFgFAAIjLAAIAADHgAiyhMIAAA5IACADIFKAAIADgDIAAg5IgDgDIlKAAQgBAAgBABQAAAAAAAAQgBAAAAABQAAAAABABgAD9haQAWhFACgSQAAgIgHAAIohAAQgGAAAAAFIAABjIhBAAIAAiXQAAgNAMAAICLAAQgfgwgWgVIAvglQAdAeAfAyIgoAaICNAAIAAhsIA/AAIAABsIBbAAQAvg3AVgrIAxAiQgRAhgZAfIBoAAIA1AcQgBAfgIAlQgJAngPApg");
	this.shape_69.setTransform(-75.1,-350.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AlfEhIAvgWQATgKALgMQASgTAIglIAAiDQAAgKgIAAIhJAAIAAg/ICBAAQAQAAAAAPIAACzQAHAWATAWQAMASASAKQARAKAbAGQAjAHBuABQBKAADZgJIgPBJIlngCQghgBgdgGQgdgGgYgLQgXgLgSgPQgSgPgMgUQgMAcghAcQghAcghAMgACjDsIAAhEQAvAPAVAAQAPAAAJgKQAIgKAAgLIAAglIiLAAIAAB4Ig6AAIAAh4IiHAAIAABxIg9AAIAAmHQAAgOANAAIB9AAIhDgbIAYg0IBbAkQApgGAmgOQAkgOAfgVIAAgGIlFAAIAAg6IGRAAIAcAlQgZAegaAWQgXATgZAOQgdARgwAOIAGADIgDAGICxAAQAOAAAAAOIAAFTQAAASgFAOQgGANgLAIQgWARgnAAQgdAAgxgKgAB8A8ICLAAIAAg+IiLAAgAhFA8ICHAAIAAg+IiHAAgAB8g7ICLAAIAAg6QAAgFgFAAIiGAAgAhFh1IAAA6ICHAAIAAg/IiDAAQgEAAAAAFgAlZiDIAgg6QBOAoAuAiIgkA2QgvghhJglgAlLkiIAig5QBPAtAuAkIgkA2QgwglhLgpg");
	this.shape_70.setTransform(-152.3,-349.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AkKFcIAAlWIgTAgIhCgZQAagoAVgsQAVgrAOgsQAQgtAJgtQAKguAEgvIBDAHQgPBrgXBOIAAHxgAgdFXQgbAAgSgLQgPgJgJgRQgNgZACgkIAAkaIg0AUIgfg8IBTghIAAjLIBBAAIAACyIB2gwIAAikIBBAAIAACJICZg9IAsAVIAAERQgIBdhOAAQgeAAgwgNIAEhAQAoARAVAAQASAAAKgPQAKgQAAgcIAAixIgEgHIgHAAIh9AyIAAE8IhBAAIAAkiIh2AwIAAEpQABAYAGAHQAJAMAcgBIDmAAQAiAAANgQQAKgtAAg6IBBAKQgCBUgFAgQgEARgJANQgQAUgOAFQgOAFgkAAg");
	this.shape_71.setTransform(-228.6,-350.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AB1FUIAAhMQA0AWAaABQASgBARgGQARgIAPgOQAJgKAGgSQAFgQACgYQAEgxAAgpQAAgqgMAAIncAAQhBBIgkAiIgygoQAngiAigkQAjglAegmQAegnAZgqQAagpAUgsIi8AAIAAg/IB7AAQgygmgegQIAhgxQA8AkAjAdIgdAmIBGAAIAghkIA8ATIgaBRIEWAAQAHABAIAHQAKAJAAALIgBAHIgbBbIAlAAQAJAAAIAIQAKAIAAALIgBAIIgbBVIAmAAQAQAEAEAEQAFAGAAAVQAABkgFBEQgCAlgHAaQgIAbgNAQQgOASgRALQgOAJgQAFQgTAGgZAAQgoAAg3gOgAiYgDIF1AAIATg7IlhAAgAhNh8IEGAAIATg/Ij6AAgAlFEzQAUgZAhg9QAOggAShJIBCATQgbBUgRAjQglBDgWAbQgXgbgZgOgAh4FHQgFiCgMhNIA9gDQAKBWAHB8gAgSBtIA7gOQAVA/AdCCIg8AJQgXhggahcgABlBkIA5gbQAdAyApBdIg4AVQgmhRghg4g");
	this.shape_72.setTransform(-304.6,-350.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AEEFPIAAggIoHAAIAAAgIhAAAIAAqHQgBgWAWAAIJbAAQAYAAAAAWIAAKHgAkDkFIAAHzIIHAAIAAnzQAAgIgJAAIn1AAQgKAAABAIgAjvClQAsgUAjgcQAjgbAZghQAagiAQgnQAQgoAIguIi7AAIAAg+IC/AAIAAhJIA/AAIAABJIC8AAIAAA+Ii3AAQAGAoAPAlQAPAkAaAiQAaAiAiAfQAjAfAtAcIg5AtQiIhmgthvQg4CIiKBQg");
	this.shape_73.setTransform(-380.1,-349);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("ABSFFIgEhAQA2ANBJAGQBFAAAAg3IAAnxQAAgJgJAAIk5AAIAAg6IFpAAQAVgBABAMIAAIgQAAAmgLAbQgMAcgYAQQgLAHgTAEIgsAEQhPgFg1gKgAlIFEIAAjqQAAgUAUAAIDdAAQAUAAAAAUIAAC7QAAAVgVAAIiyAAIAAAagAkKCKIAABlIB8AAQANAAAAgNIAAhYQAAgKgKAAIh2AAQgJAAAAAKgAgUCwQgIAAAAgJIAAkQQAAgIAIAAID2AAQAIAAAAAIIAAEQQAAAJgIAAgAAhg0IAACmIACAEICHAAIADgEIAAimIgDgDIiHAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAkzAbIAAg5IDXAAIAAA5gAkzhLIAAg7IDXAAIAAA7gAgfiqIAAg7IEUAAIAAA7gAlOizIAAg7IEJAAIAAA7gAk2kZIAAg6IDWAAIAAA6g");
	this.shape_74.setTransform(341.2,-449.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("ADxFdIAAghIlYAAIAAAhIhEAAIAAkLIiOAnIgXhDQBMgOBAgRQA/gQA0gSIBFgeQg3guh4hTQhGAdgsAMIgXhDQAmgHAigMQAigNAegUQAegSAZgaQAagZAXgfIBCAVIgHAJIE4AAIAyApIgyBNQgaAigfAgQghAfgmAdQgnAdgsAaQguAZgxAWIExAAQAXAAgBAXIAAEqgAhnBnIAACUIFYAAIAAiUQAAgKgJAAIlFAAQgLAAABAKgAh/jSIBFAyQA7ArAxArQAogYBEg3QAfgdAxg+IABgFQAAgFgEABIk5AAg");
	this.shape_75.setTransform(264.3,-450.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_76.setTransform(190,-450.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AD2FQQgXgUgYgtQhGAvgnASIgfgyQA4gWA+gpQgbhGgGghIhqAAIAAAqIAygUIAYAzIhKAaIAABAQAAAYgMASQgIAMgMAGQgOAIgUAAQgaAAgpgJIAAg9QAjAJATAAQAWAAAAgVIAAgiIhPARIgTg5IBigQIAAg7IhXAAIAAg1IBXAAIAAgiIhNADIgHgzQBFgCBugQIAKAzIgwAJIAAAoIBeAAIgMhaIA8AAQAEAzAHAnICKAAIAAA1Ih/AAIASA8IAogyIApAgQgXAigiAlIASAgQAKARAEAAQAEAAADgXQAEgZgBgcIA4ARQgFBHgIAYQgHASgJAJQgLAKgOAAQgWAAgUgTgAlSFEIAAj8QAAgTATAAICuAAQAUAAAAATIAADXQAAAUgVAAIiDAAIAAARgAkVB4IAACBIBOAAQAMAAAAgOIAAhzQAAgJgLAAIhFAAQgKAAAAAJgADWgJIAfgbIlUAAIAAg1ICrAAIAAgrIicAAIAAg1ICcAAIAAgmIirAAIAAg2IBWAAIgegwIAwgcQAYAhAUArIBnAAQAZgrALgiIA0AWIgYA3IBkAAIAAA2Ii2AAIAAAmICtAAIAAA1IitAAIAAArIC/AAIAAA1Ig6AAQAXAYAXAhIgvAkQgigwgWgSgAlBAQIAAg6IC0AAIAAA6gAlBhOIAAg6IC0AAIAAA6gAlViwIAAg6IDfAAIAAA6gAlEkPIAAg7ICzAAIAAA7g");
	this.shape_77.setTransform(114.9,-450);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ai7FPIAAhCIAHABQBCASAkAAQAbAAAKgJQAGgIAAgOIAAhMIjrAAIAAg+IDrAAIAAg8Ik6AAIAAg8IE6AAIAAg/IjlAAIAAg+IIKAAQAUAAAAATIAABqIBFAAIAAA8IhFAAIAABmQAAAUgUAAIjlAAIAABdQgCBRhhAAQhGgGgvgOgAAdB3ICyAAQAHAAAAgGIAAg2Ii5AAgAAdgBIC5AAIAAg7QAAgFgHABIiyAAgADtiwQghgigagVIAtgvQAfAZAhAhQAhAiAjAsIgwAtgAliiIIBKhiQAggtATgjIA2AjQgVApggAtQggAtgpAygAgmjFIgLglIA9gPQARA3AFAlIg+AIgAiMlIQBFAABpgHQBAgGBbgNIAJBAQhTAQg3AEQh3AHhJAAg");
	this.shape_78.setTransform(38.1,-450);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("ADzFfIAAgeIn4AAIAAAeIg+AAIAAkKQAAgUAUAAIJLAAQAVAAAAAUIAAEKgAAXEJIDcAAIAAgsIjcAAgAkFEJIDfAAIAAgsIjfAAgAAXClIDcAAIAAgkQABgJgKAAIjTAAgAkFCBIAAAkIDfAAIAAgtIjXAAQgKAAACAJgAj6AeQgIAAAAgJIAAiIQAAgIAIAAIHmAAQAKAAAAAIIAACIQAAAJgKAAgAjFhEIAAArIADADIF3AAIADgDIAAgrIgDgCIl3AAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABgAEFioQATg9ABgPIAAgCQABgHgHAAIoqAAQgHAAAAAGIAABcIg8AAIAAiOQAAgMALAAIEoAAIAAgpIA/AAIAAApIERAAIAzAaQgLBTgRAzgAkCiiIAAg1IH2AAIAAA1g");
	this.shape_79.setTransform(-37.2,-450.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AghErQAegQAbgYQAbgYAZgiIAyAqQggAmghAbQghAdgiARQgMgjgPgUgADUD6IAtgsQAYATAXAaIAyA9IgvAoQhEhQgbgWgAlhFGQALgyAOhqQAGg3ADhxIAAkOQAAgQAPAAIBsAAIAAhFIA9AAIAABFIBYAAIAxAfQgCAigKAlQgKAlgRAmIg4gSIASg1QAJgcAAgNQAAgHgIACIg9AAIAACaIBgAAIAhAUQgKBfgcA8IgiA/IBABJIgvAlIg1g9QgcAcghAZQghAagmAYIgjgiIgKA/gAkWEIQAngUAggXQAegXAXgZIhfhbIAtgqIBVBWQAVglAMgeQANgeAEgYQAAgSgVADIisAAQAAB2gQCcgAkFjXIAACRIBBAAIAAiaIg3AAQgKAAAAAJgAAQDEQgJAAAAgIIAAmRQAAgIAJAAIBfAAIAOgwIACgHIiFAAIAAg5IFeAAIAAA5IicAAIgOA3ICWAAQAJAAAAAIIAAGRQAAAIgJAAgABFCGIACADIDGAAIADgDIAAg8IjLAAgABFAQIDLAAIAAg8IjLAAgABFigIAAA6IDLAAIAAg6IgDgCIjGAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_80.setTransform(-114.3,-449.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AkEFgIAAl8IgTAdIg/gZQAbglATgnQAVgnAPgpQAQgoAKgsQALgqAGgtIBAAJQgbCCgSAzIAAIBgAEWFaIAAggIlkAAIAAAgIhAAAIAAqMQAAgVAVAAIG5AAQAWAAAAAWIAAKLgAhOkBIAAH+IFkAAIAAn+QAAgIgJgBIiKAAIAABPICBAAIAAA+IiBAAIAABWIBlAAQAIAAAAAJIAADiQAAAKgIAAIkEAAQgJAAAAgKIAAjiQAAgJAJAAIBhAAIAAhWIh8AAIAAg+IB8AAIAAhPIiKAAQgKABABAIgAAXAXIAAB2IADADICWAAQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAh2IgDgCIiWAAg");
	this.shape_81.setTransform(-191.6,-450.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AlbAkIAAhHIK3AAIAABHg");
	this.shape_82.setTransform(-266.1,-452.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AlfEuIAGgHQAZgXAUgaQAUgbARgdQAQgeANghQANghAKglIA+ASIgXBLQAbAnAjAZQAjAZAqAMIAAjdIkrAAIAAg9IKZAAIAAA9IkuAAIAABUIEBAAIAAA9IkBAAIAABWIBUADIDsAAIgPBAIjGAAQhHgCgvgFQg1gGgngNQgqgNgfgVQgfgWgZgiIgwBHQgZAigYAZgAj8hNQgJAAAAgJIAAj2QAAgJAJABIH7AAQAJgBAAAJIAAD2QAAAJgJAAgAjHiLIACAEIGLAAIAEgEIAAgqImRAAgAjHkYIAAAoIGRAAIAAgoIgEgDImLAAQAAAAgBABQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_83.setTransform(-342.1,-449.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.1,-490,840.2,980);


(lib.Tween48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjPEvQgOAAgIgIQgHgHgBgOIAAlnIhMAAIAAg9IBMAAIAAicIA9AAIAACcICFAAIAAiXIA8AAIAACXICcAAIAAiXIA8AAIAACXIBRAAIAAA9IhRAAIAADRQAAAQgHAHQgHAIgQgBIjZAAQgPABgGgIQgIgHAAgQIAAjRIiFAAIAAE4QAAAPAQAAIHJAAIAAA9gAARBVQAAAJAJAAICJAAQAKAAAAgJIAAiqIicAAg");
	this.shape.setTransform(203.3,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABwDmQhfgrgngNIAYg4QAsAPBiArQAzAYBtA+IgbA3Qh0hAgxgXgAjNEnIgFhEQAqAQAWAAQAXAAAMgnIAIgtIAEiTQAAgugEgFQgCgFgFAAIhSAAQgLCRgLA5QgIArgLAiQgLAjgNAaIg6gLQARgoANgqQANgqAIgtQAJgsAEgvQADguAAgxIAAhqIg+AAIAAg6IBxAAIAAhLIA5AAIAABLIBtAAIAAA6IigAAIAABKIB/AAQANADADAFQAFAGAAATIgCDAQgGBUgJAdQgGAWgKAOQgJAPgMAIQgNAKgbAAQgZAAgrgKgAB+AdQg7gZgtgKIAVg5QBnAcCFBEIgYA4QhIglg5gXgAgthvIA6gzQAYgYASgXQAZgfAphMIAxAOIgHANQAfAyAnArQAmAsAtAnIguAmQgrglgigoQgigogXgsQgbAughApQgiAogoAjg");
	this.shape_1.setTransform(135.7,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AklEvIAAg5IEYAAIAAilIjWAAIAAg6IDWAAIAAiZIioAAQghBDgvAxIgwglQAfgiAUgeQATgdAMgeQAQgmAQhRIA7AJQgHA1gPAsICRAAIAAhzIA8AAIAABzIDwAAIAAA5IjwAAIAACZIDaAAIAAA6IjaAAIAAClIEIAAIAAA5g");
	this.shape_2.setTransform(67,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AD2EyQhhgHgngLQgkgGghgUQghgTgcgfQgUAsgdAwIgvgkQAZglAjhCQgRgagOghIgchKIAvgPQAPA0ATAjQAKgjAGgfQAFggAAgcQAAgHgEAAIhJAAIgUgbIBEiyIACgFIgCgDIg/AAIAAg1IBsAAIAZAeIhJC3IA/AAQAQgBABARQgBA8gJA5QgJA5gQAzIAAACQARAXAWARQAXAQAcALQAcALAjAEQAhAGAoAAIBUAAIgOA5gAkwEnIAAjiQAAgRARAAICPAAQARAAAAARIAAC5QAAARgRAAIhsAAIAAAYgAj8BxIAABqIA+AAQALAAAAgLIAAhfQAAgIgKAAIg2AAQgIAAgBAIgAAcC6IAAg3IAiAAIAAkbIA3AAIAAEbIApAAIAAlfIhgALIgPg5QBLgEA8gKQA6gKAsgQIATA3QgrAOgvAJIAACRIBZAAIAAA3IhZAAIAACfIBjAAIAAA3gAknASIAAg2ICdAAIAAA2gAknhEIAAg3ICaAAIAAA3gAk3iZIAAg3IC9AAIAAA3gAkkjtIAAg3ICaAAIAAA3g");
	this.shape_3.setTransform(0.1,44.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AihEyIgEhAQApAOAWAAQAcAAADgeIAAgsIifAAIAAB+Ig6AAIAAmFQAAgVAUAAIDrAAQAUAAAAAVIAAFHQAAASgHAPQgHAOgNAKQgRALgiAAQgdAAgpgIgAjmCAICfAAIAAg7IifAAgAjmgqIAAA4ICfAAIAAg4QAAgFgFAAIiVAAQgFAAAAAFgABlE3QgRAAgNgGQgNgFgJgLQgJgKgEgRQgEgPABgUIAAjXIA3AAIAABaQA8gRAwgTQAvgSAjgVIAcAyQgiATg3AVQg3AVhKAXIAAA4QABAVAFAGQAIAKAYgBIBYAAQARAAAIgDQAKgDAFgIQAHgOABg2IA3AJIgGBGQgEAbgGAJQgOAQgKAEQgNAFggAAgABqgDQgQAAgMgFQgNgGgJgKQgJgKgFgPQgFgRABgWIAAjbIA3AAIAABaQA5gPAtgRQArgPAggRIAcAyQgjARgzASQg0AShDASIAAA/QABAUAFAHQAIAKAYgBIBOAAQAgAAAHgOQAGgLAAgyIA4AGIgFBDQgEAagGAIQgNARgLADQgMAFgfABgAgwiaIj6AiIgSg5IAjgDQAZgpAshdIAyAZQgPAngjA9ICHgRIgagrIAygbQBCBxAPAhIgzAXg");
	this.shape_4.setTransform(-68.1,44.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABAEnIhDgNIgFhCIBHAPQAgAFAXAAQAjAAAQgMQANgLAAgRIAAm1InpAAIAAg6IJnAAIAAA6IhBAAIAAHCQAAAWgPAXQgOAWgWAJQgWAJgVAEIgbACQgbgBgfgEgAj4B5QgGAAgBgJIAAkOQABgIAGAAIFMAAQAJAAAAAIIAAEOQAAAJgJAAgAjFhqIAACmIACAEIDiAAQABAAABgBQABAAAAAAQABgBAAAAQAAgBAAgBIAAimIgEgDIjiAAg");
	this.shape_5.setTransform(-135.7,45.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcEtIAAmDQhJBLgqAhQhWBBgxAcIgngyQAtgXAjgWQArgaAmghQAbgYA4g8QAbghA4hUIk1AAIAAg8IJUAAIAAA8IjaAAIgxBOIAAHPgACTADQhKhAgfgYIAkgwQAkAbBPBEQAoAlBVBaIgvArQhVhdgngkg");
	this.shape_6.setTransform(-203.4,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjeEDQA/gHAugKQAqgIAtgOQhUguglgXIAVg3QAqAfArAYQApAXApASQBZgvApg0QABgDgIAAIlHAAIAAg3IF8AAIAoAiIgbApIgiAmQg3AvgiAWQAyAOAyAJQA1AKA2AGIgaA6QhGgLg/gRQg9gPg1gVQg8AYg9ASQg+AQg9AIgAk6ETIAcg5QALgaAGgaQAIgjAEhZIAAkpQAAgQAOAAIDnAAIAAgtIA4AAIAAAtID9AAIAAA3IhjAAIAAA8IBhAAIAAA2IhhAAIAABPQAAANgHAIQgHAFgNAAIkSAAQgNAAgHgFQgGgIAAgNIAAhPIhJAAIAACiIgFBBQgDAhgIAdQgHAegLAbQgLAcgPAZgAhIg7QABAIAIAAIDCAAQAKAAAAgIIAAgrIjVAAgAhIicIDVAAIAAg8IjVAAgAjKjQIAAA0IBJAAIAAg8IhCAAQgHAAAAAIg");
	this.shape_7.setTransform(270.8,-44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACeEuIABg8IArANIAWADQAPAAAGgIQAEgGAAgMIAAoVIA6AAIAAIlQgHBDg/AAQggAAgvgNgAh5E4IAAj8IhZAAQgEAAAAAEIAADSIg6AAIAAkBQAAgPAPAAICIAAIAAg3IioAAIAAg6ICoAAIAAhOIhcAAQgUAkgVAaIg0gdQAcgiATgkQAUglAJgmIA3APIgMAoIBCAAIAAhEIA6AAIAABEICQAAIAAA5IiQAAIAABOIChAAIAAA6IihAAIAAA3ICHAAQAPAAAAAPIAADOQAAAZgOAQQgIAKgPAGQgRAHgYAAIgtgEIgDhAQAfAJAMAAQALAAAIgKQAGgJAAgJIAAiIQAAgEgFAAIhXAAIAAD8gAB/CjIAAmwIA5AAIAAGwg");
	this.shape_8.setTransform(202.2,-44.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ak3EjIAZg1QAKgaAGgbQAIgkAEhgIAAiAQAAgOAPAAIBFAAIgOgrQAsgFBQgTIhTgUIAOgsIiUAAIAAg1IEFAAIAAgmIA4AAIAAAmIEBAAIAAA1IhkAAIhqA7QAzAOA8AXIgOAjIB0AAIAAA0IjYAAIAAA3IDKAAIAAA0IjKAAIAAA7IC5AAIAAA0Ii5AAIAABBIDkAAIAAA0InlAAIAAg0IDHAAIAAhBIiqAAIAAg0ICqAAIAAg7IiHAAQgjAxgUASIgogkQgHBPgIAjQgXBDgQAegAjLgeIAAB+QAZgXAbgqQAOgZAKgqIA2ANIgMApIBvAAIAAg3IjeAAQgGAAgBAHgACVhZQgqgShXgaQhoAjgrAJIEUAAIAAAAgAAQi3IAAABIABAAIBQgmIjYAAg");
	this.shape_9.setTransform(134.9,-45.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACtDVQgtgpgngbIAngsQBUA8BiBrIgoArQg1g5gsgpgAk2EBQAkgSA/gvQAegZAyg8IAtAjQg7BGgfAbQg+AxggARgAk1BMIAAg6ICPAAIAAixIhvAAIAAg6IBvAAIAAhdIA8AAIAABdIDUAAIAAhdIA8AAIAABdIByAAIAAA6IhyAAIAACxICRAAIAAA6gAhqASIDUAAIAAixIjUAAg");
	this.shape_10.setTransform(67.7,-44.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_11.setTransform(0,-45.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ak0EgIAAg5IBXAAIAAlsIA8AAIAAFsICTAAIAAnMIkLAAIAAg6II2AAIAAA6IjwAAIAAC6IDlAAIAAA4IjlAAIAADaIEIAAIAAA5g");
	this.shape_12.setTransform(-68,-44.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AC8EbQg0gMgvgHIAOg3QBVAQB7AjIgTA2Qg1gSgzgNgAk2EAQBEgIA3gMQA2gMAogQIAWA0QgrARg4ANQg3AMhEAJgAkvDKIAAg0IBSAAIAAlEQAAgUATAAICzAAIAAglIkNAAIAAg0IENAAIAAgeIA4AAIAAAeIEMAAIAAA0IkMAAIAAAlIC5AAQATAAAAAUIAAFEIBIAAIAAA0gAikCWIFYAAIAAgjIlYAAgAikBEIFYAAIAAgmIlYAAgAikgQIFYAAIAAgmIlYAAgAikiFIAAAgIFYAAIAAggQAAgIgIAAIlIAAQgIAAAAAIg");
	this.shape_13.setTransform(-136.1,-44.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ak6D+IAqgKIAAnDIA5AAIAAG0IBUgZIAAn9IA5AAIAACQIBfAAIAAA6IhfAAIAAEhIBTggIAXA1QhZAjg+ATQiBAmgtAKgABxEtQgTgBgSgPQgUgSAAgYIAAonIA5AAIAADWQBIg3BShNIApApQgeAggwApQgxAphEAwIAADqQAAANAJAJQAIAJAQACIBVAAQAJAAAGgGQAIgGACgNIAAh4IA6AGQAABNgFAsQgFAsgHAIQgWAXgTAAg");
	this.shape_14.setTransform(-203.9,-44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADoErIAAgdInPAAIAAAdIg6AAIAApBQAAgUAUAAIIaAAQAVAAAAAUIAAJBgAjnjpIAAG9IHPAAIAAm9QAAgHgIAAIm/AAQgJAAABAHgAjVCUQAngTAfgYQAggZAWgdQAYgfAOgiQAOgkAHgpIinAAIAAg3ICrAAIAAhCIA4AAIAABCICnAAIAAA3IijAAQAFAkAOAhQAOAgAWAeQAXAfAfAbQAgAcAnAZIgyAoQh5hbgphjQgyB5h7BIg");
	this.shape_15.setTransform(-271.4,-43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307,-80.3,614.1,160.6);


(lib.Tween47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjPEvQgOAAgIgIQgHgHgBgOIAAlnIhMAAIAAg9IBMAAIAAicIA9AAIAACcICFAAIAAiXIA8AAIAACXICcAAIAAiXIA8AAIAACXIBRAAIAAA9IhRAAIAADRQAAAQgHAHQgHAIgQgBIjZAAQgPABgGgIQgIgHAAgQIAAjRIiFAAIAAE4QAAAPAQAAIHJAAIAAA9gAARBVQAAAJAJAAICJAAQAKAAAAgJIAAiqIicAAg");
	this.shape.setTransform(203.3,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABwDmQhfgrgngNIAYg4QAsAPBiArQAzAYBtA+IgbA3Qh0hAgxgXgAjNEnIgFhEQAqAQAWAAQAXAAAMgnIAIgtIAEiTQAAgugEgFQgCgFgFAAIhSAAQgLCRgLA5QgIArgLAiQgLAjgNAaIg6gLQARgoANgqQANgqAIgtQAJgsAEgvQADguAAgxIAAhqIg+AAIAAg6IBxAAIAAhLIA5AAIAABLIBtAAIAAA6IigAAIAABKIB/AAQANADADAFQAFAGAAATIgCDAQgGBUgJAdQgGAWgKAOQgJAPgMAIQgNAKgbAAQgZAAgrgKgAB+AdQg7gZgtgKIAVg5QBnAcCFBEIgYA4QhIglg5gXgAgthvIA6gzQAYgYASgXQAZgfAphMIAxAOIgHANQAfAyAnArQAmAsAtAnIguAmQgrglgigoQgigogXgsQgbAughApQgiAogoAjg");
	this.shape_1.setTransform(135.7,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AklEvIAAg5IEYAAIAAilIjWAAIAAg6IDWAAIAAiZIioAAQghBDgvAxIgwglQAfgiAUgeQATgdAMgeQAQgmAQhRIA7AJQgHA1gPAsICRAAIAAhzIA8AAIAABzIDwAAIAAA5IjwAAIAACZIDaAAIAAA6IjaAAIAAClIEIAAIAAA5g");
	this.shape_2.setTransform(67,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AD2EyQhhgHgngLQgkgGghgUQghgTgcgfQgUAsgdAwIgvgkQAZglAjhCQgRgagOghIgchKIAvgPQAPA0ATAjQAKgjAGgfQAFggAAgcQAAgHgEAAIhJAAIgUgbIBEiyIACgFIgCgDIg/AAIAAg1IBsAAIAZAeIhJC3IA/AAQAQgBABARQgBA8gJA5QgJA5gQAzIAAACQARAXAWARQAXAQAcALQAcALAjAEQAhAGAoAAIBUAAIgOA5gAkwEnIAAjiQAAgRARAAICPAAQARAAAAARIAAC5QAAARgRAAIhsAAIAAAYgAj8BxIAABqIA+AAQALAAAAgLIAAhfQAAgIgKAAIg2AAQgIAAgBAIgAAcC6IAAg3IAiAAIAAkbIA3AAIAAEbIApAAIAAlfIhgALIgPg5QBLgEA8gKQA6gKAsgQIATA3QgrAOgvAJIAACRIBZAAIAAA3IhZAAIAACfIBjAAIAAA3gAknASIAAg2ICdAAIAAA2gAknhEIAAg3ICaAAIAAA3gAk3iZIAAg3IC9AAIAAA3gAkkjtIAAg3ICaAAIAAA3g");
	this.shape_3.setTransform(0.1,44.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AihEyIgEhAQApAOAWAAQAcAAADgeIAAgsIifAAIAAB+Ig6AAIAAmFQAAgVAUAAIDrAAQAUAAAAAVIAAFHQAAASgHAPQgHAOgNAKQgRALgiAAQgdAAgpgIgAjmCAICfAAIAAg7IifAAgAjmgqIAAA4ICfAAIAAg4QAAgFgFAAIiVAAQgFAAAAAFgABlE3QgRAAgNgGQgNgFgJgLQgJgKgEgRQgEgPABgUIAAjXIA3AAIAABaQA8gRAwgTQAvgSAjgVIAcAyQgiATg3AVQg3AVhKAXIAAA4QABAVAFAGQAIAKAYgBIBYAAQARAAAIgDQAKgDAFgIQAHgOABg2IA3AJIgGBGQgEAbgGAJQgOAQgKAEQgNAFggAAgABqgDQgQAAgMgFQgNgGgJgKQgJgKgFgPQgFgRABgWIAAjbIA3AAIAABaQA5gPAtgRQArgPAggRIAcAyQgjARgzASQg0AShDASIAAA/QABAUAFAHQAIAKAYgBIBOAAQAgAAAHgOQAGgLAAgyIA4AGIgFBDQgEAagGAIQgNARgLADQgMAFgfABgAgwiaIj6AiIgSg5IAjgDQAZgpAshdIAyAZQgPAngjA9ICHgRIgagrIAygbQBCBxAPAhIgzAXg");
	this.shape_4.setTransform(-68.1,44.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABAEnIhDgNIgFhCIBHAPQAgAFAXAAQAjAAAQgMQANgLAAgRIAAm1InpAAIAAg6IJnAAIAAA6IhBAAIAAHCQAAAWgPAXQgOAWgWAJQgWAJgVAEIgbACQgbgBgfgEgAj4B5QgGAAgBgJIAAkOQABgIAGAAIFMAAQAJAAAAAIIAAEOQAAAJgJAAgAjFhqIAACmIACAEIDiAAQABAAABgBQABAAAAAAQABgBAAAAQAAgBAAgBIAAimIgEgDIjiAAg");
	this.shape_5.setTransform(-135.7,45.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcEtIAAmDQhJBLgqAhQhWBBgxAcIgngyQAtgXAjgWQArgaAmghQAbgYA4g8QAbghA4hUIk1AAIAAg8IJUAAIAAA8IjaAAIgxBOIAAHPgACTADQhKhAgfgYIAkgwQAkAbBPBEQAoAlBVBaIgvArQhVhdgngkg");
	this.shape_6.setTransform(-203.4,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjeEDQA/gHAugKQAqgIAtgOQhUguglgXIAVg3QAqAfArAYQApAXApASQBZgvApg0QABgDgIAAIlHAAIAAg3IF8AAIAoAiIgbApIgiAmQg3AvgiAWQAyAOAyAJQA1AKA2AGIgaA6QhGgLg/gRQg9gPg1gVQg8AYg9ASQg+AQg9AIgAk6ETIAcg5QALgaAGgaQAIgjAEhZIAAkpQAAgQAOAAIDnAAIAAgtIA4AAIAAAtID9AAIAAA3IhjAAIAAA8IBhAAIAAA2IhhAAIAABPQAAANgHAIQgHAFgNAAIkSAAQgNAAgHgFQgGgIAAgNIAAhPIhJAAIAACiIgFBBQgDAhgIAdQgHAegLAbQgLAcgPAZgAhIg7QABAIAIAAIDCAAQAKAAAAgIIAAgrIjVAAgAhIicIDVAAIAAg8IjVAAgAjKjQIAAA0IBJAAIAAg8IhCAAQgHAAAAAIg");
	this.shape_7.setTransform(270.8,-44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACeEuIABg8IArANIAWADQAPAAAGgIQAEgGAAgMIAAoVIA6AAIAAIlQgHBDg/AAQggAAgvgNgAh5E4IAAj8IhZAAQgEAAAAAEIAADSIg6AAIAAkBQAAgPAPAAICIAAIAAg3IioAAIAAg6ICoAAIAAhOIhcAAQgUAkgVAaIg0gdQAcgiATgkQAUglAJgmIA3APIgMAoIBCAAIAAhEIA6AAIAABEICQAAIAAA5IiQAAIAABOIChAAIAAA6IihAAIAAA3ICHAAQAPAAAAAPIAADOQAAAZgOAQQgIAKgPAGQgRAHgYAAIgtgEIgDhAQAfAJAMAAQALAAAIgKQAGgJAAgJIAAiIQAAgEgFAAIhXAAIAAD8gAB/CjIAAmwIA5AAIAAGwg");
	this.shape_8.setTransform(202.2,-44.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ak3EjIAZg1QAKgaAGgbQAIgkAEhgIAAiAQAAgOAPAAIBFAAIgOgrQAsgFBQgTIhTgUIAOgsIiUAAIAAg1IEFAAIAAgmIA4AAIAAAmIEBAAIAAA1IhkAAIhqA7QAzAOA8AXIgOAjIB0AAIAAA0IjYAAIAAA3IDKAAIAAA0IjKAAIAAA7IC5AAIAAA0Ii5AAIAABBIDkAAIAAA0InlAAIAAg0IDHAAIAAhBIiqAAIAAg0ICqAAIAAg7IiHAAQgjAxgUASIgogkQgHBPgIAjQgXBDgQAegAjLgeIAAB+QAZgXAbgqQAOgZAKgqIA2ANIgMApIBvAAIAAg3IjeAAQgGAAgBAHgACVhZQgqgShXgaQhoAjgrAJIEUAAIAAAAgAAQi3IAAABIABAAIBQgmIjYAAg");
	this.shape_9.setTransform(134.9,-45.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACtDVQgtgpgngbIAngsQBUA8BiBrIgoArQg1g5gsgpgAk2EBQAkgSA/gvQAegZAyg8IAtAjQg7BGgfAbQg+AxggARgAk1BMIAAg6ICPAAIAAixIhvAAIAAg6IBvAAIAAhdIA8AAIAABdIDUAAIAAhdIA8AAIAABdIByAAIAAA6IhyAAIAACxICRAAIAAA6gAhqASIDUAAIAAixIjUAAg");
	this.shape_10.setTransform(67.7,-44.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_11.setTransform(0,-45.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ak0EgIAAg5IBXAAIAAlsIA8AAIAAFsICTAAIAAnMIkLAAIAAg6II2AAIAAA6IjwAAIAAC6IDlAAIAAA4IjlAAIAADaIEIAAIAAA5g");
	this.shape_12.setTransform(-68,-44.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AC8EbQg0gMgvgHIAOg3QBVAQB7AjIgTA2Qg1gSgzgNgAk2EAQBEgIA3gMQA2gMAogQIAWA0QgrARg4ANQg3AMhEAJgAkvDKIAAg0IBSAAIAAlEQAAgUATAAICzAAIAAglIkNAAIAAg0IENAAIAAgeIA4AAIAAAeIEMAAIAAA0IkMAAIAAAlIC5AAQATAAAAAUIAAFEIBIAAIAAA0gAikCWIFYAAIAAgjIlYAAgAikBEIFYAAIAAgmIlYAAgAikgQIFYAAIAAgmIlYAAgAikiFIAAAgIFYAAIAAggQAAgIgIAAIlIAAQgIAAAAAIg");
	this.shape_13.setTransform(-136.1,-44.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ak6D+IAqgKIAAnDIA5AAIAAG0IBUgZIAAn9IA5AAIAACQIBfAAIAAA6IhfAAIAAEhIBTggIAXA1QhZAjg+ATQiBAmgtAKgABxEtQgTgBgSgPQgUgSAAgYIAAonIA5AAIAADWQBIg3BShNIApApQgeAggwApQgxAphEAwIAADqQAAANAJAJQAIAJAQACIBVAAQAJAAAGgGQAIgGACgNIAAh4IA6AGQAABNgFAsQgFAsgHAIQgWAXgTAAg");
	this.shape_14.setTransform(-203.9,-44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADoErIAAgdInPAAIAAAdIg6AAIAApBQAAgUAUAAIIaAAQAVAAAAAUIAAJBgAjnjpIAAG9IHPAAIAAm9QAAgHgIAAIm/AAQgJAAABAHgAjVCUQAngTAfgYQAggZAWgdQAYgfAOgiQAOgkAHgpIinAAIAAg3ICrAAIAAhCIA4AAIAABCICnAAIAAA3IijAAQAFAkAOAhQAOAgAWAeQAXAfAfAbQAgAcAnAZIgyAoQh5hbgphjQgyB5h7BIg");
	this.shape_15.setTransform(-271.4,-43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307,-80.3,614.1,160.6);


(lib.Tween46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjeE4IAApvIA3AAIAAJvgAhREmIAAg5ICvAAIAAitIiHAAIAAg6ICHAAIAAicIhdAAQgMAtgQAcIg5gQQAQggAWhBQAJgiAGhDIA4ADQgDAzgGAdIBOAAIAAhnIA6AAIAABnICUAAIAAA6IiUAAIAACcICMAAIAAA6IiMAAIAACtICkAAIAAA5gAk7BMQAKhAAGg/QAFhCAAhBIA0AGQgCBKgGBDQgGA/gIA4gAiVi1IAxgKIAUCzIgyAGg");
	this.shape.setTransform(305.1,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai3E6IAAjdIhaA1IgkgtQA2gcBIgtIAAiaIgzAAQgRBQgKAUIg1gKQANgdARhDQAHgjADhNIAAghIA1AAIAAAhIgFA/IArAAIAAiEIA3AAIAACEIBEAAIAAA3IhEAAIAAByIAjgfIApAqQgcAYgwAhIAAECgAAtEpIAAg8QBQASAPAAQApABAAgfIAAiaIjnAAIAAg6IDnAAIAAhFIj0AAIAAg4ICXAAIAAhRIiCAAIAAg3ICCAAIAAhBIA6AAIAABBICRAAIAAA3IiRAAIAABRICpAAIAAA4IhMAAIAABFIBIAAIAAA6IhIAAIAACpQgHBIhTAAQg+gFgqgKgAgaB+IAngmQAaAVA6BGIgqAlQgwg9ghgdg");
	this.shape_1.setTransform(237.1,44.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_2.setTransform(169.5,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai+E6IAAi/IhaAnIgfg1QBPgcAqgTIAAjAIgsAAQgNBZgKAfIg5gJQARg0AIg7QAFgnAEhVIAAgjIA3AAIAAAjIgFBCIAoAAIAAh9IA5AAIAAB9IA7AAIAAA6Ig7AAIAACjIA2ggIAgAvQgmAZgwAXIAADagABcEoIgChEQAnAOAzAHQATAAAJgHQASgOANgmQAGgTAFgjIAEhRIAEikQAAg5gEgEQgCgFgGAAIgcAAQgFBbgLAuQgZBZgTAvQgPAcgRAbQgSAagVAZIgtAvIgzAqIgtgqQAagPAWgTQAXgRATgVQAUgVAQgYQARgXAOgcQANgaAKgdIATg+QAJgrAHhiIgpAAIgLBPQgHAjgOAiQgOAhgVAjQgVAjgbAiQgaAkgiAiIgygfQAzgzAggqQAdgoATgkQARgiAJgoQAHggAFgxIgwAAQgPAsgQAjQgQAkgTAbIg3gVIAjg+IAbg/QANggAHggQAJgiAEghIA4AHIgOBGIEEAAQAOADADAFQAGAGAAATIgEEHQgCAwgEAnQgGAmgIAeQgJAegMAUQgNAUgQALQgQANgjAAQgnAAg7gQg");
	this.shape_3.setTransform(101.2,44.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkmEvIAAg5IEZAAIAAilIjWAAIAAg6IDWAAIAAiZIioAAQggBDgvAxIgyglQAggiAUgeQATgdAMgeQARgmAPhRIA8AJQgIA1gPAsICRAAIAAhzIA8AAIAABzIDwAAIAAA5IjwAAIAACZIDaAAIAAA6IjaAAIAAClIEHAAIAAA5g");
	this.shape_4.setTransform(33.1,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABpEwIAAhEQAtAUAYAAQAQAAAPgHQAPgGANgNQAJgIAFgQQAFgPABgVQAEgsAAglQAAglgKAAImqAAQg5BBghAdIgtgkQAjgeAgggQAeggAbgjQAbgiAXglQAWgmASgnIioAAIAAg3IBvAAQgtgigbgPIAdgsQA1AhAfAZIgZAjIA+AAIAdhbIA2ASIgYBJID5AAQAGAAAHAGQAIAIAAAKIAAAGIgZBSIAiAAQAHAAAJAGQAHAIABAKIgBAGIgYBNIAiAAQAOADAEAEQAEAGAAASQAABZgEA8QgCAhgHAYQgHAYgLAPQgNAPgPAKQgMAIgOAFQgSAFgWAAQgkAAgwgMgAiIgCIFNAAIARg1Ik7AAgAhEhuIDpAAIASg5IjgAAgAkiESQASgWAdg3QANgcAQhBIA7ARQgYBKgPAgQghA7gUAZQgUgYgXgNgAhrEkQgEh1gLhDIA2gEQAJBNAGBvgAgQBhIA0gMQATA4AaB0Ig2AIQgUhVgXhTgABaBZIAzgXQAaAsAlBSIgzAUQgihJgdgyg");
	this.shape_5.setTransform(-34.4,44.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjmE5IAAlXIgbAnIg5gXQAZgjAUgkQAVgkAPgkQAOgmALgnQALgnAFgnIA8AJQgaBsgOAsIAAHQgAAnE3IAAoBIg9AAQgKA7gSAxQgQAxgVAkIg7gQQASghAOgkQAOgjAKgjQAJgjAGglQAFgkABgmIA9ADIgGAwIFJAAIAAA5IjaAAIAACGIDHAAIAAA5IjHAAIAAB+IDPAAIAAA6IjPAAIAACKg");
	this.shape_6.setTransform(-102.2,44.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA1EyIgDhBQAzAQAdAAQAiAAADgfIAAhJQgkAfguAbQgtAag3AVQg4AUhCAPQhCAOhLAJIgWg9QBCgCA7gKQA8gJA1gRQA1gSAugYQAvgZAogfImtAgIgIg8IA+gDIAAlJQAAgUAUAAICoAAQAVgfALgXIAxAeIgNAYIDHAAQAUAAAAAUIAADzIAphHIAxAfQgQAegXAfIgzBEIAACaQgDAigNAOQgKALgQAGQgSAGgaAAQgiAAgzgKgAjCBUIFpgYIAAgsIlpAAgAjCgmIFpAAIAAg7IlpAAgAjCjJIAAAxIFpAAIAAgxQAAgFgFAAIlfAAQgFAAAAAFg");
	this.shape_7.setTransform(-169.2,44.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbE2IAAhvIiaAAIAAg6ICaAAIAAjmIg6BPQgeAkgeAgQgfAggfAcQggAbggAWIgugrQArgdAmgiQAnghAigkQAiglAegoQAegoAagrIj/AAIAAg6IEPAAIAAhTIA7AAIAABTIEKAAIAAA6Ij8AAQAWApAcAnQAcAnAiAlQAiAkAoAiQAoAjAuAgIg0AnQhjhXgngqQgngpg5hTIAADmICWAAIAAA6IiWAAIAABvg");
	this.shape_8.setTransform(-237.6,44.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ak5ENIAGgFQAVgVASgYQATgXAOgbQAPgaAMgeQALgeAIggIA4AQIgUBDQAYAiAfAXQAgAWAlAKIAAjEIkLAAIAAg2IJRAAIAAA2IkOAAIAABLIDnAAIAAA3IjnAAIAABMIBMADIDSAAIgNA5IixAAQg/gCgrgEQgugGgjgLQglgLgbgUQgdgTgXgeIgqA/QgWAegWAWgAjhhFQgHAAAAgIIAAjbQAAgIAHAAIHFAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_9.setTransform(-305.3,45.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AABEsIAAg8QA5APAhAAQAZAAAJgIQAGgGAAgNIAAhVImYAAIAAg1IGYAAIAAg7ImmAAIAAg0IEOAAIAAgzIjcAAIAAg0IDcAAIAAghIAbAAQgOgSgOgKQAZgbATgfQATggAMgkIA1AWIgKAWIDXAAIAAA0Ih2AAIADALIANA0Ig2AKQgIgtgLgcIhEAAQgKAXggAjIAJAAIAAAhIDiAAIAAA0IjiAAIAAAzIERAAIAAA0Ih3AAIAAA7IBvAAIAAA1IhvAAIAABkQAAASgHANQgGAOgMAJQgLAIgQAFQgQAEgVAAQg7gFgogJgAitDAIAsgkQAsAsAeAqIguAhQgbgmgtgtgAk2i9QAfgXAYgfQAYgfARgnIAzAcIgIANICcAAIAAA0IhfAAQAIAYAEAmIg2AGQgFgogJgcIgnAAQgNATgSAUIgoAkQgRgcgRgQg");
	this.shape_10.setTransform(168.7,-45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbEuIAAjPIkXAAIAAg6IEXAAIAAkYIj+AAIAAg6II3AAIAAA6Ij+AAIAAEYIESAAIAAA6IkSAAIAADPgAB1gVQAkg2AZguQAZguAOgkIA0AZQgQApgZAvQgZAugjAzgAjjhiQgYgrgWgfIAxgeQAaAiAZAsQAZAuAYA1IgzAbQgag3gagtg");
	this.shape_11.setTransform(101.5,-43.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaE6IAAjZQhUBOgqAeIhAApQggASgfANIgmg0QAqgTAogWQAngXAkgaQAlgbAigdQAhgfAegiIAAi9IkFAAIAAg5IEFAAIAAhRIA4AAIAABRIEEAAIAAA5IkEAAIAAC9QAbAhAgAdQAfAdAkAaQAkAaApAYQAoAXAtATIgqAwQheg0gpgdQhOg7ghghIAADYgAk6BCIAsgwIAlg0QAVgkAfhPIA2ATIgYA7QAzAtAmAnIgnAqQglgsgjgjQgTAkgYAgQgWAfgaAYgACYgfQgVAjgXAbIg0gdQAeghAUgmQAVglAKgpIA3APIgTA3QAxAoBcBWIgoAqQhKhOgwgsg");
	this.shape_12.setTransform(33.7,-44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AklEvIAAg5IEYAAIAAimIjWAAIAAg5IDWAAIAAiZIioAAQghBDgvAxIgwglQAfgiAUgeQATgeAMgdQAQgmAQhRIA7AJQgHA1gPAsICRAAIAAhzIA8AAIAABzIDwAAIAAA5IjwAAIAACZIDaAAIAAA5IjaAAIAACmIEIAAIAAA5g");
	this.shape_13.setTransform(-34.7,-45.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdE2IAAkIQhSBYgpAhQgfAagfAUQgeAVgfAPIgpgyQAngUAjgXQAkgWAhgbQAhgaAfgfQAegeAcggIkBAAIAAg5IEXAAIAAhrIj6AAIAAg6ID6AAIAAhMIA6AAIAABMID5AAIAAA6Ij5AAIAABrIETAAIAAA5IkAAAIAEAFQAZAfAdAdQAeAdAhAbQAhAZAlAYQAlAXApAVIguAuQhdg7gpgiQhMhFggglIAAEFg");
	this.shape_14.setTransform(-101.7,-44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AksEzIAAg6IDLAAIAAl/Ii+AAIAAg6ICnAAQgcg0gZgdIAwghQAoA3ATAkIgkAXICzAAQAZgtAdhFIA1AYQgQAugYAsICSAAIAAA6Ii7AAIAAF/IDGAAIAAA6gAgnD5IBUAAIAAl/IhUAAgACWCqQAehLAShAQATg9AHgyIA5AOQgTBtg5CRgAjwAxQgUg8gVgsIA3gTQAXAwAUA7QAUA+AQBKIg3AQQgThMgTg8g");
	this.shape_15.setTransform(-169.7,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.9,-80.3,681.9,160.6);


(lib.Tween45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjeE4IAApvIA3AAIAAJvgAhREmIAAg5ICvAAIAAitIiHAAIAAg6ICHAAIAAicIhdAAQgMAtgQAcIg5gQQAQggAWhBQAJgiAGhDIA4ADQgDAzgGAdIBOAAIAAhnIA6AAIAABnICUAAIAAA6IiUAAIAACcICMAAIAAA6IiMAAIAACtICkAAIAAA5gAk7BMQAKhAAGg/QAFhCAAhBIA0AGQgCBKgGBDQgGA/gIA4gAiVi1IAxgKIAUCzIgyAGg");
	this.shape.setTransform(305.1,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai3E6IAAjdIhaA1IgkgtQA2gcBIgtIAAiaIgzAAQgRBQgKAUIg1gKQANgdARhDQAHgjADhNIAAghIA1AAIAAAhIgFA/IArAAIAAiEIA3AAIAACEIBEAAIAAA3IhEAAIAAByIAjgfIApAqQgcAYgwAhIAAECgAAtEpIAAg8QBQASAPAAQApABAAgfIAAiaIjnAAIAAg6IDnAAIAAhFIj0AAIAAg4ICXAAIAAhRIiCAAIAAg3ICCAAIAAhBIA6AAIAABBICRAAIAAA3IiRAAIAABRICpAAIAAA4IhMAAIAABFIBIAAIAAA6IhIAAIAACpQgHBIhTAAQg+gFgqgKgAgaB+IAngmQAaAVA6BGIgqAlQgwg9ghgdg");
	this.shape_1.setTransform(237.1,44.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_2.setTransform(169.5,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai+E6IAAi/IhaAnIgfg1QBPgcAqgTIAAjAIgsAAQgNBZgKAfIg5gJQARg0AIg7QAFgnAEhVIAAgjIA3AAIAAAjIgFBCIAoAAIAAh9IA5AAIAAB9IA7AAIAAA6Ig7AAIAACjIA2ggIAgAvQgmAZgwAXIAADagABcEoIgChEQAnAOAzAHQATAAAJgHQASgOANgmQAGgTAFgjIAEhRIAEikQAAg5gEgEQgCgFgGAAIgcAAQgFBbgLAuQgZBZgTAvQgPAcgRAbQgSAagVAZIgtAvIgzAqIgtgqQAagPAWgTQAXgRATgVQAUgVAQgYQARgXAOgcQANgaAKgdIATg+QAJgrAHhiIgpAAIgLBPQgHAjgOAiQgOAhgVAjQgVAjgbAiQgaAkgiAiIgygfQAzgzAggqQAdgoATgkQARgiAJgoQAHggAFgxIgwAAQgPAsgQAjQgQAkgTAbIg3gVIAjg+IAbg/QANggAHggQAJgiAEghIA4AHIgOBGIEEAAQAOADADAFQAGAGAAATIgEEHQgCAwgEAnQgGAmgIAeQgJAegMAUQgNAUgQALQgQANgjAAQgnAAg7gQg");
	this.shape_3.setTransform(101.2,44.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkmEvIAAg5IEZAAIAAilIjWAAIAAg6IDWAAIAAiZIioAAQggBDgvAxIgyglQAggiAUgeQATgdAMgeQARgmAPhRIA8AJQgIA1gPAsICRAAIAAhzIA8AAIAABzIDwAAIAAA5IjwAAIAACZIDaAAIAAA6IjaAAIAAClIEHAAIAAA5g");
	this.shape_4.setTransform(33.1,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABpEwIAAhEQAtAUAYAAQAQAAAPgHQAPgGANgNQAJgIAFgQQAFgPABgVQAEgsAAglQAAglgKAAImqAAQg5BBghAdIgtgkQAjgeAgggQAeggAbgjQAbgiAXglQAWgmASgnIioAAIAAg3IBvAAQgtgigbgPIAdgsQA1AhAfAZIgZAjIA+AAIAdhbIA2ASIgYBJID5AAQAGAAAHAGQAIAIAAAKIAAAGIgZBSIAiAAQAHAAAJAGQAHAIABAKIgBAGIgYBNIAiAAQAOADAEAEQAEAGAAASQAABZgEA8QgCAhgHAYQgHAYgLAPQgNAPgPAKQgMAIgOAFQgSAFgWAAQgkAAgwgMgAiIgCIFNAAIARg1Ik7AAgAhEhuIDpAAIASg5IjgAAgAkiESQASgWAdg3QANgcAQhBIA7ARQgYBKgPAgQghA7gUAZQgUgYgXgNgAhrEkQgEh1gLhDIA2gEQAJBNAGBvgAgQBhIA0gMQATA4AaB0Ig2AIQgUhVgXhTgABaBZIAzgXQAaAsAlBSIgzAUQgihJgdgyg");
	this.shape_5.setTransform(-34.4,44.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjmE5IAAlXIgbAnIg5gXQAZgjAUgkQAVgkAPgkQAOgmALgnQALgnAFgnIA8AJQgaBsgOAsIAAHQgAAnE3IAAoBIg9AAQgKA7gSAxQgQAxgVAkIg7gQQASghAOgkQAOgjAKgjQAJgjAGglQAFgkABgmIA9ADIgGAwIFJAAIAAA5IjaAAIAACGIDHAAIAAA5IjHAAIAAB+IDPAAIAAA6IjPAAIAACKg");
	this.shape_6.setTransform(-102.2,44.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA1EyIgDhBQAzAQAdAAQAiAAADgfIAAhJQgkAfguAbQgtAag3AVQg4AUhCAPQhCAOhLAJIgWg9QBCgCA7gKQA8gJA1gRQA1gSAugYQAvgZAogfImtAgIgIg8IA+gDIAAlJQAAgUAUAAICoAAQAVgfALgXIAxAeIgNAYIDHAAQAUAAAAAUIAADzIAphHIAxAfQgQAegXAfIgzBEIAACaQgDAigNAOQgKALgQAGQgSAGgaAAQgiAAgzgKgAjCBUIFpgYIAAgsIlpAAgAjCgmIFpAAIAAg7IlpAAgAjCjJIAAAxIFpAAIAAgxQAAgFgFAAIlfAAQgFAAAAAFg");
	this.shape_7.setTransform(-169.2,44.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbE2IAAhvIiaAAIAAg6ICaAAIAAjmIg6BPQgeAkgeAgQgfAggfAcQggAbggAWIgugrQArgdAmgiQAnghAigkQAiglAegoQAegoAagrIj/AAIAAg6IEPAAIAAhTIA7AAIAABTIEKAAIAAA6Ij8AAQAWApAcAnQAcAnAiAlQAiAkAoAiQAoAjAuAgIg0AnQhjhXgngqQgngpg5hTIAADmICWAAIAAA6IiWAAIAABvg");
	this.shape_8.setTransform(-237.6,44.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ak5ENIAGgFQAVgVASgYQATgXAOgbQAPgaAMgeQALgeAIggIA4AQIgUBDQAYAiAfAXQAgAWAlAKIAAjEIkLAAIAAg2IJRAAIAAA2IkOAAIAABLIDnAAIAAA3IjnAAIAABMIBMADIDSAAIgNA5IixAAQg/gCgrgEQgugGgjgLQglgLgbgUQgdgTgXgeIgqA/QgWAegWAWgAjhhFQgHAAAAgIIAAjbQAAgIAHAAIHFAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_9.setTransform(-305.3,45.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AABEsIAAg8QA5APAhAAQAZAAAJgIQAGgGAAgNIAAhVImYAAIAAg1IGYAAIAAg7ImmAAIAAg0IEOAAIAAgzIjcAAIAAg0IDcAAIAAghIAbAAQgOgSgOgKQAZgbATgfQATggAMgkIA1AWIgKAWIDXAAIAAA0Ih2AAIADALIANA0Ig2AKQgIgtgLgcIhEAAQgKAXggAjIAJAAIAAAhIDiAAIAAA0IjiAAIAAAzIERAAIAAA0Ih3AAIAAA7IBvAAIAAA1IhvAAIAABkQAAASgHANQgGAOgMAJQgLAIgQAFQgQAEgVAAQg7gFgogJgAitDAIAsgkQAsAsAeAqIguAhQgbgmgtgtgAk2i9QAfgXAYgfQAYgfARgnIAzAcIgIANICcAAIAAA0IhfAAQAIAYAEAmIg2AGQgFgogJgcIgnAAQgNATgSAUIgoAkQgRgcgRgQg");
	this.shape_10.setTransform(168.7,-45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbEuIAAjPIkXAAIAAg6IEXAAIAAkYIj+AAIAAg6II3AAIAAA6Ij+AAIAAEYIESAAIAAA6IkSAAIAADPgAB1gVQAkg2AZguQAZguAOgkIA0AZQgQApgZAvQgZAugjAzgAjjhiQgYgrgWgfIAxgeQAaAiAZAsQAZAuAYA1IgzAbQgag3gagtg");
	this.shape_11.setTransform(101.5,-43.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaE6IAAjZQhUBOgqAeIhAApQggASgfANIgmg0QAqgTAogWQAngXAkgaQAlgbAigdQAhgfAegiIAAi9IkFAAIAAg5IEFAAIAAhRIA4AAIAABRIEEAAIAAA5IkEAAIAAC9QAbAhAgAdQAfAdAkAaQAkAaApAYQAoAXAtATIgqAwQheg0gpgdQhOg7ghghIAADYgAk6BCIAsgwIAlg0QAVgkAfhPIA2ATIgYA7QAzAtAmAnIgnAqQglgsgjgjQgTAkgYAgQgWAfgaAYgACYgfQgVAjgXAbIg0gdQAeghAUgmQAVglAKgpIA3APIgTA3QAxAoBcBWIgoAqQhKhOgwgsg");
	this.shape_12.setTransform(33.7,-44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AklEvIAAg5IEYAAIAAimIjWAAIAAg5IDWAAIAAiZIioAAQghBDgvAxIgwglQAfgiAUgeQATgeAMgdQAQgmAQhRIA7AJQgHA1gPAsICRAAIAAhzIA8AAIAABzIDwAAIAAA5IjwAAIAACZIDaAAIAAA5IjaAAIAACmIEIAAIAAA5g");
	this.shape_13.setTransform(-34.7,-45.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdE2IAAkIQhSBYgpAhQgfAagfAUQgeAVgfAPIgpgyQAngUAjgXQAkgWAhgbQAhgaAfgfQAegeAcggIkBAAIAAg5IEXAAIAAhrIj6AAIAAg6ID6AAIAAhMIA6AAIAABMID5AAIAAA6Ij5AAIAABrIETAAIAAA5IkAAAIAEAFQAZAfAdAdQAeAdAhAbQAhAZAlAYQAlAXApAVIguAuQhdg7gpgiQhMhFggglIAAEFg");
	this.shape_14.setTransform(-101.7,-44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AksEzIAAg6IDLAAIAAl/Ii+AAIAAg6ICnAAQgcg0gZgdIAwghQAoA3ATAkIgkAXICzAAQAZgtAdhFIA1AYQgQAugYAsICSAAIAAA6Ii7AAIAAF/IDGAAIAAA6gAgnD5IBUAAIAAl/IhUAAgACWCqQAehLAShAQATg9AHgyIA5AOQgTBtg5CRgAjwAxQgUg8gVgsIA3gTQAXAwAUA7QAUA+AQBKIg3AQQgThMgTg8g");
	this.shape_15.setTransform(-169.7,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.9,-80.3,681.9,160.6);


(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak1ESQAbgkARgsQASgrAJgzIA3AQQgUBIgOAhQgeA8gTAaQgVgXgWgKgAhDExQgOAAgMgEQgNgFgKgKQgKgKgFgQQgFgSAAgXIAAh2IA6AAIAABsQgBATAFAHQAHAMAZAAIB3AAQAbAAAMgPQAFgKAAg0IA6AIIgEBDQgEAagGAIQgQARgKAEQgMAFgfAAgADYC/QgXgsgVgfIAzgcQAYAjAYAtQAXAtAWA3Ig1AaQgZg7gWgsgAgeBsIAygZQAnBIAPAjIg1AUQgVgwgeg2gAi2A7IAAicIgpA/QgVAcgUAVIgzgbQAkgiAegpQAegpAYgvIhdAAIAAg2IBqAAIAAhNIA3AAIAABNIBeAAIAAA2IhdAAQBMBMAlAqIgoAmQgjgtgngqIAAClgAAFA2QgFAAAAgIIAAlAQAAgHAFAAIEEAAQAIAAAAAHIAAFAQAAAIgIAAgAAzAAIACABIClAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgnIiqAAgAAzhZICqAAIAAgrIiqAAgAAzjjIAAAtICqAAIAAgtIgDgCIilAAg");
	this.shape.setTransform(304.9,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjUEEQA2gCAvgGQAtgHAmgLQhigqg1gTQgbARg5AZIgggxQAngOAdgNQAagOAUgOQAZgTAegsIA+AMIgKAPIDyAAIAnAdQgJATgTAYQgTAYgdAcQgbAYgjATQgjAUgnAOQgpAPgwAKQgwAKg2AGgAiACKIA2AVQAzATA6AdQAdgPAbgWQAggZAAgMQAAgGgEAAIjqAAgADlB7QAUg6ADgVQAAgIgGAAInlAAQgFAAAAAFIAABMIg3AAIAAh6QAAgKAKAAIIsAAIAvAWQgDAdgIAhIgWBJgAkHgqQgHAAAAgJIAAiBQAAgHAHAAIIJAAQAIAAAAAHIAACBQAAAJgIAAgABrhZIBlAAIADgDIAAgvIgDgCIhlAAgAg2hZIBqAAIAAg0IhqAAgAjXiLIAAAvIACADIBoAAIAAg0IhoAAQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAgABWjMIAAgYIizAAIAAAYIg3AAIAAgYIilAAIAAg1IClAAIAAgjIA3AAIAAAjICzAAIAAgjIA3AAIAAAjICkAAIAAA1IikAAIAAAYg");
	this.shape_1.setTransform(237.6,44.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_2.setTransform(169.5,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOEtIACg5QAsANAVAAQANAAAFgFQAFgEAAgNIAAiAIiYAAIAAg0IFwAAIAAA0IigAAIAACOQgBAWgMASQgHALgNAGQgPAIgUgBQggAAgugMgAkxE3IAApaIACgHIAHgCICRAAIAnAZIggBoQAhgdANgUQAOgUAbhGIAxgCIgFAUIBkAAIAmATIgEAPQAhBPASAdQAegkAigxIhSAAIAAgxICDAAIAUAiQgTAhgZAiQgaAjggAlQASAXAbAWIA5AsIgrAkQgdgVglgkIAAAtIjCAAIAAgqQgiAhgyAfIgogkQAkgUA0grIhIhBIgRAQIgbgcIgOA2IgEAOIAEAJQAaApAMAjQAPAxAAAbQgBAVgFARQgEAQgJAMQgQASgQAGQgLADgTAAQgeAAgcgJIAACWgAj4j2IgCADIAAFZQAXAPAcABQAegBADgrQAAgagPgmQgOgmgdgzIAAgEIAtiWIAAgGQABgIgMAAIg3AAgAC9gyQgcgfgYghQgWgigSgkQgUAwgYAkQgWAhgTARICxAAIAAAAgAhJivIAdAYIArAqIAVgdIAFgJQgpgbgrgVgAgjjtIAqAXIApAXIAOgfIABgMQAAgJgFAAIhaAAgACoCtIAsgjQAWAWAYAgIAvBEIgsAhQhChdgbgbgAiiD3QAmgVAhgbQAggcAZgiIArAhQggArgjAfQgiAegiARg");
	this.shape_3.setTransform(102.8,44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABOECIAQgmIi1AAIALAmQiCArhBAOIgMg1ICWgqIhnAAQgHAAAAgHIAAjdQAAgGAHAAIHSAAQAIAAAAAGIAADdQAAAHgIAAIhlAAQA3AVBUAZIgSAzQiRgwgbgLgAi/CsIACADIF0AAIACgDIAAgTIl4AAgAi/BzIF4AAIAAgZIl4AAgAi/AfIAAAVIF4AAIAAgVIgCgCIl0AAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABgAjkglQgJgDAAgOIAJguIhSAAIAAgsIBaAAIAKg3IAEgGIAHgCIGVAAQAPAGgBAHIgGAyIBXAAIAAAsIhaAAIgDA0IgFAIIgKADgAAMhQICKAAQAHgBABgTIiPAAgAiwhbIgCAGQAAADAGACICDAAIADgUIiJAAgAAZiQICKAAIABgLQAAgJgJgBIh/AAgAilibIgCALICKAAIAFgVIiEAAQgJAAAAAKgADyitQAOgvgDgCQABgHgHAAInoAAQgFAAAAAEIAAA7Ig1AAIAAhnQAAgLALAAIEBAAIAAgkIA4AAIAAAkIDyAAIAsAYQgGA6gMAmg");
	this.shape_4.setTransform(34.2,44.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA/EoIgDhEQAqANA6AHQAXAAAMgJQAQgNALgaQAJgWAGghQAGgnAChPIAEi5IgCg4QgBgSgIAAIhoAAIAABjQgBBBgHA3QgHAzgNAqQgNApgSAhQgQAegWAYQgTAWgYASQgVAPgaAMQhBAZggAJIglg0QAjgEAjgLQAhgMAhgSQAUgMAUgUQAQgSAQgYQAOgVAKgbQAJgaAIgjQAJgsAFh2IAAhjIh0AAIAAg3IFEAAIAMACQAKAEAAAaIgCDbQgEB0gFAtQgMBSgLAcQgIAWgMAOQgLAQgOAJQgUAPgpAAQg9gFgqgKgAjgCrQgOgKAAgVIAAjnIg4AHIgLg8IBDgIIAAieIA6AAIAACYICqgUIAIA7IiyAVIAADLQgBAKAGAAQAUAAAagNQAYgMATgRQARgPAFgLQAGgLgBgUIgCgoIA5AHIADAkQgBAggIAVQgKAYgXASQgVAVgwAVQg9AYgZAAQgPAAgLgJg");
	this.shape_5.setTransform(-35.1,44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcEtIAAmDQhJBLgqAhQhWBBgxAcIgngyQAtgXAjgWQArgaAmghQAbgYA4g8QAbghA4hUIk1AAIAAg8IJUAAIAAA8IjaAAIgxBOIAAHPgACTADQhKhAgfgYIAkgwQAkAbBPBEQAoAlBVBaIgvArQhVhdgngkg");
	this.shape_6.setTransform(-101.7,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ak4ENIAFgFQAVgVATgYQASgXAOgbQAPgaAMgeQAMgeAHggIA4AQIgUBDQAZAiAeAXQAfAWAmAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDSAAIgNA5IixAAQg/gCgrgEQgvgGgigLQglgLgcgUQgcgTgXgeIgqA/QgWAegWAWgAjhhFQgHAAAAgIIAAjbQAAgIAHAAIHFAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_7.setTransform(-169.6,45.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjcE5IAAkgIhSAKQgDgWgKgcIAqgGQAYgbAbgoQgdgcg9gnIAYguIASAKQASgkAghUIAvAXQgfBJgbA0IAkAeQATgiAWhFIAzAOQgSA2gSAhQgpBDgdAnIBDgKIgJgnIAugKQATBLAEAxIgvAHIgFgeIghAFIAAEngABGEzQgSgBgRgPQgRgQAAgVIAAizIA0AAIAACWQAAAMAJAJQAIAIANABIA+AAQAMAAAIgOIAJgvIAyAPQgLBHgIAGQgUAVgSAAgAhdEIQAUgkAKgqQALgpABgvIA2AHQgEA3gNAvQgNAtgUAlQgagTgUgGgAk8ERIAWhuQAIgyACglIAvAGQgCAqgIAyQgIAygPA6gADuCvQgOgrgOggIA0gSQARAjAOAtQANArALA3Ig1APQgMg3gOgtgAiWBPIAtgGQASBfAEAxIguADQgFgugQhfgABdBXIAzgQQAZBMAIAxIgzANQgKg0gXhGgAg1A1QgHAAAAgIIAAkrQAAgHAHAAIBwAAIAcgzIAuAZIgNAaIChAAQAGAAAAAHIAAErQAAAIgGAAgAgIjUIAADXIACACIDuAAIADgCIAAjXIgDgCIjuAAQgBAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABgAANgtQAqgJAxgWIgmgcQgTARgZAOIgWgjIAggUIgdgQIAXgnIAmAXQAPgSAKgbIAoADIgEALIBGAAIAhAVIgbAzQgOAYgPAPIAyAqIgfAjIg3gvQg/AjgkAMgABhiJIAuAgIAYgeIABgHQAAgEgDAAIg+AAg");
	this.shape_8.setTransform(-237.6,44.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABKE0IAApJQAAgSAUAAIDCAAQATAAAAASIAAHBQAAATgHAOQgHALgMAIQgTAKgdAAQgcAAgggIIgLhGQAyAOAVAAQAIAAADgEQAGgFAAgQIAAl3QAAgIgJAAIhlAAQgIAAAAAIIAAIagAgmEmIAAgfIioAAIAAAfIg5AAIAAjxQgCgKALAAIEEAAQAMAAAAANIAADugAjOBtIAABhICoAAIAAhhQAAgJgIABIiYAAQgJgBABAJgAkygXQAvgcA7gtQAbgYAzhDIAvAWIgKANQAeAhAjAfQAjAgApAcIgpAsQgmgbgiggQghgfgbgjQgjAtgiAeQgdAagxAcgAkxjEQAjgVAegdQAcgbAXghIAwAgQgfArgeAdQggAfgfASgAhjkCIAmgsQAbASAeAbIA7A9IgpAqQhBhGgwgig");
	this.shape_9.setTransform(-306.3,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ak4EMQAhgGAZgPQAWgOAPgWQAUgaANg3Ih9AAIAAg5ICFAAIADhBIAAgsIh0AAIAAg6IB0AAIAAhnIh5AAIAAg6IB5AAIAAg6IA6AAIAAA6IByAAIAAA6IhyAAIAABnIBpAAIAAA6IhpAAIAAAsIgEBBIB3AAIAAA5Ih+AAQgTBRgVAeQgQAZgYARQgaATgmAMgAAfE4IAApXQAAgLALAAIDdAAIAnAhIhJDOIAAADIAEAIIAhAqQAPAUAKAUQALAWAFAWQAGAZAAAbQAAATgEARQgDARgIAQQgQAcgXANQgWAOgiAAQgiAAgxgQIABhCQAzAVAaABQAOAAAMgEQALgGAIgJQAHgJAEgOQAEgOAAgRIgCgbQgFgXgVghQgUghgkgoQgIgKAAgGIABgDIA+iyIACgIIiEAAQgIAAAAAIIAAIgg");
	this.shape_10.setTransform(169.3,-44.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AkpErIABg8QArAOAVAAQAMAAAFgFQAGgEAAgOIAAiOIhLAdIgdg0QAwgOA4gVIAAieIhcAAIAAg5IBcAAIAAh9IA6AAIAAB9IBCAAIAAA5IhCAAIAACCIAmgXIAgAwIhGAkIAAC2QgCBChDAAQgeAAgvgMgABZEyQgVgBgTgSQgTgTAAgWIAAjoIhfAMIgMg3IBrgPIAAibIhdAJIgPg7QBLgEB8gRQA6gJBbgcIAUA5QhyAdhWAOIAACbIDSgdIAIA7IjaAbIAADRQAAAOAJAKQAKAJAOABIBpAAQAIAAAIgHQAKgpADhLIA5AJQgDBCgGAnQgFAlgHAHQgVAXgTAAg");
	this.shape_11.setTransform(101.3,-44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AB1E1IgBg9QBIAPARABQAPAAAKgGQAJgGAFgMQAHgTAAgzIgBg6QAAgEgHAAInpAAQgKAAAAgMIAAlZQAAgPAQgBICuAAQAQgYAMgaIAyAcIgLAWIDzAAQASABAAAPIAACNQAAASgTAAIm6AAIAAAqIH/AAIAAA2In/AAIAAAvIHxAAQAIAAACAFQABAGAAAZQAABOgJBWQgDAUgKAOQgJAMgPAHQgMAGgSADIgiACQgkAAgugIgAjHjDIAAAxIGKAAQAJABAAgJIAAgqQAAgOgOAAIl3AAQgOAAAAAPgAk3EZQAYgfAPglQAPglAHgqIA4AOQgNAygSApQgSAqgZAiQgWgZgVgJgAiQDVQgDgmgGgdIA0gFQAHAhADAmQAEAogBAuIg1ACgAgkCTIAxgPQANAdAJAlIASBOIgzANQgLg8gbhSgABXCVIAsgdQATAZAoBGIguAbQgfg6gagjg");
	this.shape_12.setTransform(33.2,-44.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_13.setTransform(-33.9,-45.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AEgE8QgugDgqgKQgpgKgkgQQgkgRgegXQgegYgZgdIgRAbQgSATgbAQQgaAQgjANQgiAMgsAKQgrAKg0AGIgPg+QA2gDAqgHQAsgHAhgMQAhgMAXgQQAXgRANgVIj6AAIAAg3IEJAAIABgRIAAgpIkYAAIAAg2IEWAAIAAg2IjlAAIAAg3IDlAAIAAgzIkCAAIAAg3ICcAAQgTgggUgWIAugjQAcAeAZApIgaASICnAAQAihEAIgUIAzAaIgeA+ICXAAIAAA3IkBAAIAAAzIDiAAIAAA3IjiAAIAAA2IEUAAIAAA2IkRAAIAAApIgBARIEFAAIAAA3IjtAAQAVAZAbASQAaATAgANQAgANAmAGQAnAGAqABIgPA7g");
	this.shape_14.setTransform(-101.5,-44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ak7D/QAfgDAYgFQAYgGATgIQATgJAOgLQANgKAKgNQARgYAIgjQAFgcAAgpIidAAIAAg5II+AAIAAA5IixAAIAACaQAAANAIAJQAIAKAQABIBVAAQAWAAAAgSIABhLIA6AIIgGBUQgEAegFAGQgVAWgUAAIiOAAQgVgBgRgPQgUgSAAgYIAAi6Ih8AAQAAAlgFAeQgFAdgJAYQgJAXgNASQgLASgQANQgPANgSAKIgkAPQgcAKgwAJgAjGg/IAAg6IGPAAIAAA6gADihsIAWhMQABgJgJAAInYAAQgFAAAAAFIAABhIg6AAIAAiVQAAgLAMAAID/AAIAAg7IA6AAIAAA7IDqAAIA0AbQgDAbgKAjIgXBJg");
	this.shape_15.setTransform(-169.6,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.9,-80.3,681.9,160.6);


(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak1ESQAbgkARgsQASgrAJgzIA3AQQgUBIgOAhQgeA8gTAaQgVgXgWgKgAhDExQgOAAgMgEQgNgFgKgKQgKgKgFgQQgFgSAAgXIAAh2IA6AAIAABsQgBATAFAHQAHAMAZAAIB3AAQAbAAAMgPQAFgKAAg0IA6AIIgEBDQgEAagGAIQgQARgKAEQgMAFgfAAgADYC/QgXgsgVgfIAzgcQAYAjAYAtQAXAtAWA3Ig1AaQgZg7gWgsgAgeBsIAygZQAnBIAPAjIg1AUQgVgwgeg2gAi2A7IAAicIgpA/QgVAcgUAVIgzgbQAkgiAegpQAegpAYgvIhdAAIAAg2IBqAAIAAhNIA3AAIAABNIBeAAIAAA2IhdAAQBMBMAlAqIgoAmQgjgtgngqIAAClgAAFA2QgFAAAAgIIAAlAQAAgHAFAAIEEAAQAIAAAAAHIAAFAQAAAIgIAAgAAzAAIACABIClAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgnIiqAAgAAzhZICqAAIAAgrIiqAAgAAzjjIAAAtICqAAIAAgtIgDgCIilAAg");
	this.shape.setTransform(304.9,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjUEEQA2gCAvgGQAtgHAmgLQhigqg1gTQgbARg5AZIgggxQAngOAdgNQAagOAUgOQAZgTAegsIA+AMIgKAPIDyAAIAnAdQgJATgTAYQgTAYgdAcQgbAYgjATQgjAUgnAOQgpAPgwAKQgwAKg2AGgAiACKIA2AVQAzATA6AdQAdgPAbgWQAggZAAgMQAAgGgEAAIjqAAgADlB7QAUg6ADgVQAAgIgGAAInlAAQgFAAAAAFIAABMIg3AAIAAh6QAAgKAKAAIIsAAIAvAWQgDAdgIAhIgWBJgAkHgqQgHAAAAgJIAAiBQAAgHAHAAIIJAAQAIAAAAAHIAACBQAAAJgIAAgABrhZIBlAAIADgDIAAgvIgDgCIhlAAgAg2hZIBqAAIAAg0IhqAAgAjXiLIAAAvIACADIBoAAIAAg0IhoAAQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAgABWjMIAAgYIizAAIAAAYIg3AAIAAgYIilAAIAAg1IClAAIAAgjIA3AAIAAAjICzAAIAAgjIA3AAIAAAjICkAAIAAA1IikAAIAAAYg");
	this.shape_1.setTransform(237.6,44.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_2.setTransform(169.5,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOEtIACg5QAsANAVAAQANAAAFgFQAFgEAAgNIAAiAIiYAAIAAg0IFwAAIAAA0IigAAIAACOQgBAWgMASQgHALgNAGQgPAIgUgBQggAAgugMgAkxE3IAApaIACgHIAHgCICRAAIAnAZIggBoQAhgdANgUQAOgUAbhGIAxgCIgFAUIBkAAIAmATIgEAPQAhBPASAdQAegkAigxIhSAAIAAgxICDAAIAUAiQgTAhgZAiQgaAjggAlQASAXAbAWIA5AsIgrAkQgdgVglgkIAAAtIjCAAIAAgqQgiAhgyAfIgogkQAkgUA0grIhIhBIgRAQIgbgcIgOA2IgEAOIAEAJQAaApAMAjQAPAxAAAbQgBAVgFARQgEAQgJAMQgQASgQAGQgLADgTAAQgeAAgcgJIAACWgAj4j2IgCADIAAFZQAXAPAcABQAegBADgrQAAgagPgmQgOgmgdgzIAAgEIAtiWIAAgGQABgIgMAAIg3AAgAC9gyQgcgfgYghQgWgigSgkQgUAwgYAkQgWAhgTARICxAAIAAAAgAhJivIAdAYIArAqIAVgdIAFgJQgpgbgrgVgAgjjtIAqAXIApAXIAOgfIABgMQAAgJgFAAIhaAAgACoCtIAsgjQAWAWAYAgIAvBEIgsAhQhChdgbgbgAiiD3QAmgVAhgbQAggcAZgiIArAhQggArgjAfQgiAegiARg");
	this.shape_3.setTransform(102.8,44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABOECIAQgmIi1AAIALAmQiCArhBAOIgMg1ICWgqIhnAAQgHAAAAgHIAAjdQAAgGAHAAIHSAAQAIAAAAAGIAADdQAAAHgIAAIhlAAQA3AVBUAZIgSAzQiRgwgbgLgAi/CsIACADIF0AAIACgDIAAgTIl4AAgAi/BzIF4AAIAAgZIl4AAgAi/AfIAAAVIF4AAIAAgVIgCgCIl0AAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABgAjkglQgJgDAAgOIAJguIhSAAIAAgsIBaAAIAKg3IAEgGIAHgCIGVAAQAPAGgBAHIgGAyIBXAAIAAAsIhaAAIgDA0IgFAIIgKADgAAMhQICKAAQAHgBABgTIiPAAgAiwhbIgCAGQAAADAGACICDAAIADgUIiJAAgAAZiQICKAAIABgLQAAgJgJgBIh/AAgAilibIgCALICKAAIAFgVIiEAAQgJAAAAAKgADyitQAOgvgDgCQABgHgHAAInoAAQgFAAAAAEIAAA7Ig1AAIAAhnQAAgLALAAIEBAAIAAgkIA4AAIAAAkIDyAAIAsAYQgGA6gMAmg");
	this.shape_4.setTransform(34.2,44.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA/EoIgDhEQAqANA6AHQAXAAAMgJQAQgNALgaQAJgWAGghQAGgnAChPIAEi5IgCg4QgBgSgIAAIhoAAIAABjQgBBBgHA3QgHAzgNAqQgNApgSAhQgQAegWAYQgTAWgYASQgVAPgaAMQhBAZggAJIglg0QAjgEAjgLQAhgMAhgSQAUgMAUgUQAQgSAQgYQAOgVAKgbQAJgaAIgjQAJgsAFh2IAAhjIh0AAIAAg3IFEAAIAMACQAKAEAAAaIgCDbQgEB0gFAtQgMBSgLAcQgIAWgMAOQgLAQgOAJQgUAPgpAAQg9gFgqgKgAjgCrQgOgKAAgVIAAjnIg4AHIgLg8IBDgIIAAieIA6AAIAACYICqgUIAIA7IiyAVIAADLQgBAKAGAAQAUAAAagNQAYgMATgRQARgPAFgLQAGgLgBgUIgCgoIA5AHIADAkQgBAggIAVQgKAYgXASQgVAVgwAVQg9AYgZAAQgPAAgLgJg");
	this.shape_5.setTransform(-35.1,44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcEtIAAmDQhJBLgqAhQhWBBgxAcIgngyQAtgXAjgWQArgaAmghQAbgYA4g8QAbghA4hUIk1AAIAAg8IJUAAIAAA8IjaAAIgxBOIAAHPgACTADQhKhAgfgYIAkgwQAkAbBPBEQAoAlBVBaIgvArQhVhdgngkg");
	this.shape_6.setTransform(-101.7,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ak4ENIAFgFQAVgVATgYQASgXAOgbQAPgaAMgeQAMgeAHggIA4AQIgUBDQAZAiAeAXQAfAWAmAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDSAAIgNA5IixAAQg/gCgrgEQgvgGgigLQglgLgcgUQgcgTgXgeIgqA/QgWAegWAWgAjhhFQgHAAAAgIIAAjbQAAgIAHAAIHFAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_7.setTransform(-169.6,45.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjcE5IAAkgIhSAKQgDgWgKgcIAqgGQAYgbAbgoQgdgcg9gnIAYguIASAKQASgkAghUIAvAXQgfBJgbA0IAkAeQATgiAWhFIAzAOQgSA2gSAhQgpBDgdAnIBDgKIgJgnIAugKQATBLAEAxIgvAHIgFgeIghAFIAAEngABGEzQgSgBgRgPQgRgQAAgVIAAizIA0AAIAACWQAAAMAJAJQAIAIANABIA+AAQAMAAAIgOIAJgvIAyAPQgLBHgIAGQgUAVgSAAgAhdEIQAUgkAKgqQALgpABgvIA2AHQgEA3gNAvQgNAtgUAlQgagTgUgGgAk8ERIAWhuQAIgyACglIAvAGQgCAqgIAyQgIAygPA6gADuCvQgOgrgOggIA0gSQARAjAOAtQANArALA3Ig1APQgMg3gOgtgAiWBPIAtgGQASBfAEAxIguADQgFgugQhfgABdBXIAzgQQAZBMAIAxIgzANQgKg0gXhGgAg1A1QgHAAAAgIIAAkrQAAgHAHAAIBwAAIAcgzIAuAZIgNAaIChAAQAGAAAAAHIAAErQAAAIgGAAgAgIjUIAADXIACACIDuAAIADgCIAAjXIgDgCIjuAAQgBAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABgAANgtQAqgJAxgWIgmgcQgTARgZAOIgWgjIAggUIgdgQIAXgnIAmAXQAPgSAKgbIAoADIgEALIBGAAIAhAVIgbAzQgOAYgPAPIAyAqIgfAjIg3gvQg/AjgkAMgABhiJIAuAgIAYgeIABgHQAAgEgDAAIg+AAg");
	this.shape_8.setTransform(-237.6,44.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABKE0IAApJQAAgSAUAAIDCAAQATAAAAASIAAHBQAAATgHAOQgHALgMAIQgTAKgdAAQgcAAgggIIgLhGQAyAOAVAAQAIAAADgEQAGgFAAgQIAAl3QAAgIgJAAIhlAAQgIAAAAAIIAAIagAgmEmIAAgfIioAAIAAAfIg5AAIAAjxQgCgKALAAIEEAAQAMAAAAANIAADugAjOBtIAABhICoAAIAAhhQAAgJgIABIiYAAQgJgBABAJgAkygXQAvgcA7gtQAbgYAzhDIAvAWIgKANQAeAhAjAfQAjAgApAcIgpAsQgmgbgiggQghgfgbgjQgjAtgiAeQgdAagxAcgAkxjEQAjgVAegdQAcgbAXghIAwAgQgfArgeAdQggAfgfASgAhjkCIAmgsQAbASAeAbIA7A9IgpAqQhBhGgwgig");
	this.shape_9.setTransform(-306.3,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ak4EMQAhgGAZgPQAWgOAPgWQAUgaANg3Ih9AAIAAg5ICFAAIADhBIAAgsIh0AAIAAg6IB0AAIAAhnIh5AAIAAg6IB5AAIAAg6IA6AAIAAA6IByAAIAAA6IhyAAIAABnIBpAAIAAA6IhpAAIAAAsIgEBBIB3AAIAAA5Ih+AAQgTBRgVAeQgQAZgYARQgaATgmAMgAAfE4IAApXQAAgLALAAIDdAAIAnAhIhJDOIAAADIAEAIIAhAqQAPAUAKAUQALAWAFAWQAGAZAAAbQAAATgEARQgDARgIAQQgQAcgXANQgWAOgiAAQgiAAgxgQIABhCQAzAVAaABQAOAAAMgEQALgGAIgJQAHgJAEgOQAEgOAAgRIgCgbQgFgXgVghQgUghgkgoQgIgKAAgGIABgDIA+iyIACgIIiEAAQgIAAAAAIIAAIgg");
	this.shape_10.setTransform(169.3,-44.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AkpErIABg8QArAOAVAAQAMAAAFgFQAGgEAAgOIAAiOIhLAdIgdg0QAwgOA4gVIAAieIhcAAIAAg5IBcAAIAAh9IA6AAIAAB9IBCAAIAAA5IhCAAIAACCIAmgXIAgAwIhGAkIAAC2QgCBChDAAQgeAAgvgMgABZEyQgVgBgTgSQgTgTAAgWIAAjoIhfAMIgMg3IBrgPIAAibIhdAJIgPg7QBLgEB8gRQA6gJBbgcIAUA5QhyAdhWAOIAACbIDSgdIAIA7IjaAbIAADRQAAAOAJAKQAKAJAOABIBpAAQAIAAAIgHQAKgpADhLIA5AJQgDBCgGAnQgFAlgHAHQgVAXgTAAg");
	this.shape_11.setTransform(101.3,-44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AB1E1IgBg9QBIAPARABQAPAAAKgGQAJgGAFgMQAHgTAAgzIgBg6QAAgEgHAAInpAAQgKAAAAgMIAAlZQAAgPAQgBICuAAQAQgYAMgaIAyAcIgLAWIDzAAQASABAAAPIAACNQAAASgTAAIm6AAIAAAqIH/AAIAAA2In/AAIAAAvIHxAAQAIAAACAFQABAGAAAZQAABOgJBWQgDAUgKAOQgJAMgPAHQgMAGgSADIgiACQgkAAgugIgAjHjDIAAAxIGKAAQAJABAAgJIAAgqQAAgOgOAAIl3AAQgOAAAAAPgAk3EZQAYgfAPglQAPglAHgqIA4AOQgNAygSApQgSAqgZAiQgWgZgVgJgAiQDVQgDgmgGgdIA0gFQAHAhADAmQAEAogBAuIg1ACgAgkCTIAxgPQANAdAJAlIASBOIgzANQgLg8gbhSgABXCVIAsgdQATAZAoBGIguAbQgfg6gagjg");
	this.shape_12.setTransform(33.2,-44.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_13.setTransform(-33.9,-45.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AEgE8QgugDgqgKQgpgKgkgQQgkgRgegXQgegYgZgdIgRAbQgSATgbAQQgaAQgjANQgiAMgsAKQgrAKg0AGIgPg+QA2gDAqgHQAsgHAhgMQAhgMAXgQQAXgRANgVIj6AAIAAg3IEJAAIABgRIAAgpIkYAAIAAg2IEWAAIAAg2IjlAAIAAg3IDlAAIAAgzIkCAAIAAg3ICcAAQgTgggUgWIAugjQAcAeAZApIgaASICnAAQAihEAIgUIAzAaIgeA+ICXAAIAAA3IkBAAIAAAzIDiAAIAAA3IjiAAIAAA2IEUAAIAAA2IkRAAIAAApIgBARIEFAAIAAA3IjtAAQAVAZAbASQAaATAgANQAgANAmAGQAnAGAqABIgPA7g");
	this.shape_14.setTransform(-101.5,-44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ak7D/QAfgDAYgFQAYgGATgIQATgJAOgLQANgKAKgNQARgYAIgjQAFgcAAgpIidAAIAAg5II+AAIAAA5IixAAIAACaQAAANAIAJQAIAKAQABIBVAAQAWAAAAgSIABhLIA6AIIgGBUQgEAegFAGQgVAWgUAAIiOAAQgVgBgRgPQgUgSAAgYIAAi6Ih8AAQAAAlgFAeQgFAdgJAYQgJAXgNASQgLASgQANQgPANgSAKIgkAPQgcAKgwAJgAjGg/IAAg6IGPAAIAAA6gADihsIAWhMQABgJgJAAInYAAQgFAAAAAFIAABhIg6AAIAAiVQAAgLAMAAID/AAIAAg7IA6AAIAAA7IDqAAIA0AbQgDAbgKAjIgXBJg");
	this.shape_15.setTransform(-169.6,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.9,-80.3,681.9,160.6);


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjKE4IAAlbQgVAjgcAkIg4gaQAcgkAXgmQAXgmASgoQASgoANgrQANgqAIgsIA7AMQgZBjgPAoIAAHYgAAqE2QgSAAgOgGQgNgHgJgMQgJgMgEgQQgEgRABgUIAAoSIA7AAIAAD9QAsgVBOg0QAlgbBBhAIAqAqIhDA+QgiAcghAXQghAYgiARQggASghAMIAADNQgBATAGAJQAHAMAZAAICCAAQAdAAALgRIAIgVQACgMgBhWIA9AJIAAAdQAAA8gDAVQgDAigMARQgPARgNAFQgNAEgfAAg");
	this.shape.setTransform(304.1,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjlE5IAAlhIgfAsIg2gXQBgiDAaieIA5AKQgSBNgTA5IAAHdgAiSEuIAAg6IDHAAIAAhyIiyAAIAAg6ICyAAIAAg8IA5AAIAAA8IC6AAIAAA6Ii6AAIAAByIDNAAIAAA6gAiQgVIAAg5IDFAAIAAhnIivAAIAAg7ICvAAIAAhIIA5AAIAABIIC3AAIAAA7Ii3AAIAABnIDNAAIAAA5g");
	this.shape_1.setTransform(236.9,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADUETIg5gmQgeAYgaARQgcAQgZAJIgkgtQAmgMAXgLQAWgLAZgTQgmgngqg5IAqgdQAaAoAxA2QAvgwASg4QAAgKgMABIiwAAIAAguIDZAAIAcAWQgOAugNAgQgPAigQAVIgcAiIA1AeQAeAPAiAMIgiAtQgggOgegRgAg/EsIAAguIjoAZIgKgzIAsgFIAAj7IgzAAIAAg0IJxAAIAAA0IlBAAIAAFIgAjODZICPgQIAAgpIiPAAgAjOBwICPAAIAAgtIiPAAgAjOATICPAAIAAgvIiPAAgAjjhrQgOAAAAgOIAAirQAAgNAOAAIHFAAQAOAAAAANIAACrQAAAOgOAAgAi6idQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIFuAAIADgDIAAgbIlzAAgAi6kAIAAAZIFzAAIAAgZQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIluAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_2.setTransform(169.5,45.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AC3E6IAAgSIkrAAIAAASIg3AAIAAjXQgyAPhIAMIgRg0QAygHBagVQBAgQA2gWIj0AAIAAg0ID3AAIAAg2Ii8AAIAAg0IC8AAIAAgpIA2AAIAAApICgAAIAAAfIBRhGIAkAqQhhBOglAZICgAAIAAA0Ij3AAIh4A2IEWAAQASAAAAASIAADqgAh0D0IErAAIAAgmIkrAAgAh0B6IAAAgIErAAIAAghQAAgHgIAAIkbAAQgJAAABAIgAAFgsIAxAAIAxgdIAggZIiCAAgABrixIAAgnIjLAAIAAAnIg6AAIAAgnIiRAAIAAg1ICRAAIAAgsIA6AAIAAAsIDLAAIAAgsIA6AAIAAAsICSAAIAAA1IiSAAIAAAng");
	this.shape_3.setTransform(101.1,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABHEvIAAhBQAnAMAyAFQAoAAACggIAAgkIkzAAIAAB/Ig6AAIAAltIgQAMQgyAkgtAXIglgyQAugXBPg3IA1guIAvgyIjWAAIAAg6ID/AAIAhg1IAyAgIgNAVIEfAAIAAA6IlEAAQgkAvgjAjIFIAAQAPAAAAAPIAAFhQAAAbgPARQgLALgSAHQgUAIgeAAQglAAg6gNgAhpCBIEzAAIAAhDIkzAAgAhpg7IAAA/IEzAAIAAg/QAAgFgGAAIkpAAQgEAAAAAFg");
	this.shape_4.setTransform(33.1,44.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AijELIA4gdQAVgNASgTQAUgUASgYIh5AXQgFgWgMgbIArgJQAegoAig+QgXgcgbgYQgZgYgbgTIAegrIAYATQAUgzAQg2IAxASQgNArgiBPIAiAiQARgpAThNIAyAIQgEAagJAdIgXA7QgrBWghAxIA3gLIAKg0IAzAIIAAAHIgZBfQgJAXgPAVQgNAVgTATQgTATgYARQgYARgdAPgAk3EnIAEg8QAoARAKAAQAOAAAAgXIAAiJIgqAUIgegyIBIgjIAAimIhBAAIAAg6IBBAAIAAhzIA6AAIAABzIA4AAIAAA6Ig4AAIAACKIAqgaIAeAvQgsAhgcAKIAAC1QAAAYgNATQgIAKgKAGQgLAGgPAAQgaAAgrgOgABfEkQgTAAAAgUIAAkRIgSAaQgZgZgRgGQAUgcAfg/QANghAOhIIA1AOQgHAhgNAmIBDAAQAVgyAGgeIAyARIgUA/IA/AAIgFA0IhBAAIAABCIBEAAIAAA1IhEAAIAABCIBEAAIAAA0IhEAAIAABEIBIAAIAAA0gACCDnQAAAJAJAAIAyAAIAAhEIg7AAgACCB4IA7AAIAAhCIg7AAgACCg5IAAA6IA7AAIAAhCIgyAAQgJAAAAAIgAh9jYIAAg0IC1AAIAAgsIA6AAIAAAsIDGAAIAAA0g");
	this.shape_5.setTransform(-34.1,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjeEDQA/gHAtgKQArgIAtgOQhVgugjgXIAUg3QAqAfArAYQApAXAoASQBagvApg0QAAgCgHgBIlGAAIAAg3IF7AAIAoAiIgbApIghAmQg3AvgjAWQAyANAyAKQA2AKA2AGIgbA6QhHgLg+gRQg+gPg1gVQg7AZg9ARQg+AQg+AJgAk6ETIAcg5QALgaAGgaQAIgjADhZIAAkpQAAgQAPAAIDmAAIAAgtIA5AAIAAAtID9AAIAAA3IhjAAIAAA8IBiAAIAAA2IhiAAIAABPQAAANgHAHQgHAGgNAAIkSAAQgOAAgGgGQgHgHAAgNIAAhPIhJAAIAAChIgDBCQgEAhgHAdQgIAegLAcQgLAbgOAZgAhHg7QgBAIAKAAIDBAAQAKAAAAgIIAAgrIjUAAgAhHicIDUAAIAAg8IjUAAgAjLjQIAAA0IBJAAIAAg8IhBAAQgIAAAAAIg");
	this.shape_6.setTransform(-102.2,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ACeEuIABg8IArANIAWADQAPAAAGgIQAEgGAAgMIAAoVIA6AAIAAIlQgHBDg/AAQggAAgvgNgAh5E4IAAj8IhZAAQgEAAAAAEIAADSIg6AAIAAkBQAAgPAPAAICIAAIAAg3IioAAIAAg6ICoAAIAAhOIhcAAQgUAkgVAaIg0gdQAcgiATgkQAUglAJgmIA3APIgMAoIBCAAIAAhEIA6AAIAABEICQAAIAAA5IiQAAIAABOIChAAIAAA6IihAAIAAA3ICHAAQAPAAAAAPIAADOQAAAZgOAQQgIAKgPAGQgRAHgYAAIgtgEIgDhAQAfAJAMAAQALAAAIgKQAGgJAAgJIAAiIQAAgEgFAAIhXAAIAAD8gAB/CjIAAmwIA5AAIAAGwg");
	this.shape_7.setTransform(-170.8,44.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ak3EjIAZg1QAKgaAGgbQAIgkAEhgIAAiAQAAgOAPAAIBFAAIgOgrQAsgFBQgTIhTgUIAOgsIiUAAIAAg1IEFAAIAAgmIA4AAIAAAmIEBAAIAAA1IhkAAIhqA7QAzAOA8AXIgOAjIB0AAIAAA0IjYAAIAAA3IDKAAIAAA0IjKAAIAAA7IC5AAIAAA0Ii5AAIAABBIDkAAIAAA0InlAAIAAg0IDHAAIAAhBIiqAAIAAg0ICqAAIAAg7IiHAAQgjAxgUASIgogkQgHBPgIAjQgXBDgQAegAjLgeIAAB+QAZgXAbgqQAOgZAKgqIA2ANIgMApIBvAAIAAg3IjeAAQgGAAgBAHgACVhZQgqgShXgaQhoAjgrAJIEUAAIAAAAgAAQi3IAAABIABAAIBQgmIjYAAg");
	this.shape_8.setTransform(-238.1,44);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACsDVQgsgpgngbIAmgsQBUA8BkBrIgqArQg0g5gtgpgAk2EBQAkgSA/gvQAegZAyg8IAuAjQg8BGgeAbQg/AxghARgAk1BMIAAg6ICPAAIAAixIhwAAIAAg6IBwAAIAAhdIA8AAIAABdIDUAAIAAhdIA9AAIAABdIBwAAIAAA6IhwAAIAACxICQAAIAAA6gAhqASIDUAAIAAixIjUAAg");
	this.shape_9.setTransform(-305.3,44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjeEDQA/gHAugKQAqgIAtgOQhUguglgXIAVg3QAqAfArAYQApAXApASQBZgvApg0QABgDgIAAIlHAAIAAg3IF8AAIAoAiIgbApIgiAmQg3AvgiAWQAyAOAyAJQA1AKA2AGIgaA6QhGgLg/gRQg9gPg1gVQg8AYg9ASQg+AQg9AIgAk6ETIAcg5QALgaAGgaQAIgjAEhZIAAkpQAAgQAOAAIDnAAIAAgtIA4AAIAAAtID9AAIAAA3IhjAAIAAA8IBhAAIAAA2IhhAAIAABPQAAANgHAIQgHAFgNAAIkSAAQgNAAgHgFQgGgIAAgNIAAhPIhJAAIAACiIgFBBQgDAhgIAdQgHAegLAbQgLAcgPAZgAhIg7QABAIAIAAIDCAAQAJAAAAgIIAAgrIjUAAgAhIicIDUAAIAAg8IjUAAgAjKjQIAAA0IBJAAIAAg8IhCAAQgHAAAAAIg");
	this.shape_10.setTransform(169.1,-44.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABfEvIAAhDQAxANA7AHQAVAAAIgHQAIgIAAgSIAAhBImjAAQgKAsgQAnQgPAngSAiIg7gXQAVgnAbhIQALgiAHhAIAAjcIgkASIgdg3IA4gdQAagOAWgSQAWgRARgUQASgTANgXIAzAUIgLAVIDrAAIAjAfIgbAqQgPASgTASICYAAQATAAAAAQIAAGGQAAAWgIAPQgHAOgOAKQgMAHgRAEIggACQhDgEgugIgAA4BnIC4AAIAAhQIi4AAgAiuBnICuAAIAAhQIiuAAgAA4gfIC4AAIAAhKQAAgFgIAAIiwAAgAiuhoIAABJICuAAIAAhPIimAAQgIAAAAAGgAi4ilIDbAAQAfgSArgkIjmAAQghAggeAWg");
	this.shape_11.setTransform(100,-44.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_12.setTransform(33.9,-45.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAjEtIABgxQg+AZgcAEIgTguQAmgIBGgZQAjgPA/gpIgFgZQguAhgsAVQgrAVgrAJIgVguQAvgKArgTQAtgTAogcIgMgLQgmAWgiAOQghANgdAGIgTgsQAmgHBEgdIhxAAQgHBkgKArQgIAggLAdQgLAdgOAaIg2gcIAag2IATg5IAMg6IADg+IAAj5QAAgOAOAAIB3AAIAAhjIA6AAIAAAVIDEAAIAAAsIjEAAIAAAiIDQAAIAnAXQAAAWgFAYQgFAXgJAZIg2gNQARgpAAgMQAAgGgFACIjCAAIAAAfICCAAIAAAtIiCAAQAAAKAIAIQAHAIAMABIBhAAQAGAAAHgGQAHgOAIgcIAqASQgNA0gGAEQgSASgOAAIiTAAQgSgBgPgPQgPgPAAgSIAAgWIg4AAIAAgtIA4AAIAAgfIhDAAQgJAAAAAJIAACgIF5AAIAAAvIioAAQAXAYAJAdQAFASAMATQALATASATQAYAbBIA2IgwAjQg9g4gWgbQgEAegLAbQgUAtg0AGQgQAAgwgPgAA1D1IgFADQAbAIAOAAQAPAAAKgNQAJgNAIgdQgoAagmASgAk2EsIAAg7IAbAIIAQACQASgBAAgWIAAiRIgfARIgkguIBDgkIAAiWIg8AAIAAg5IA8AAIAAh8IA5AAIAAB8IAxAAIAAA5IgxAAIAABxIAegXIAnAqQgXAUguAcIAADDQAAAYgMARQgHALgLAHQgNAHgRAAQgXAAgjgJgADDBtQArgdAUgVIAeAlQgcAcglAYg");
	this.shape_13.setTransform(-34,-44.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah+EXIg+AWQhAAMgwAEIgPg3QAXAABWgKIg3gUIgIgjIAsglIhaAAIAAgvICIAAIAWgfIh5AAQgHAAAAgIIAAhyQAAgHAHAAICFAAIAAgZIh7AAQgIAAAAgJIAAhMIgnAAIAAgvIAnAAIAAhNQAAgIAIAAIB7AAIAAgcIA3AAIAAAcIB2AAQAHAAAAAIIAABNIApAAIAAAvIgpAAIAABMQAAAJgHAAIh2AAIAAAZICCAAQAHAAAAANIAbhDIAThEIAMhEIADhGIA3AAIgGBOICbAAIAAA3IgjAAQAACmg/CRQAVAnAaAnQAZAlAeAkIg0AdQhKhpgIgTQgVAggdAeQgdAfgkAbIgrgpQAkgXAhgjQAhgiAbgtQgshsgEgzIgIAPIgygNIAABgQAAAIgHAAIiEAAIgUAfIDAAAIAAAvIhNAAIglAxQgSAUgQAOIBXAdIghAugAi/DFIgDADQABAAAAAAQAAABAAAAQABAAAAAAQAAABABAAIA/AVIAkgbIAigkIhdAAgACQhzQAAAYAEAeIALA2QAKAuANAiQAOglARhOQAGgpADhbIhIAAQgGAbAAAggAhaAlIBTAAIADgDIAAgiIgDgCIhTAAgAjpAAIAAAiIADADIBVAAIAAgnIhVAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAgAhah3IBEAAIAEgDIAAgjIhIAAgAjdh6IACADIBKAAIAAgmIhMAAgAhajMIBIAAIAAgkIgEgCIhEAAgAjdjwIAAAkIBMAAIAAgmIhKAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_14.setTransform(-101.7,-44.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ai0EBQAqgDBHgNQAigJA0gYQAegRAYgYQAXgZASggQARgdAWg+QAOgrAHg2QAJhFAAigIA/AEQAAA9gDA3QgEA2gIAxQgHAxgLApQgLAqgPAkQAgAlAgAxQAhAwAhA8IgzAgQhMh8gggrQgWAkgeAdQgdAdglAVQglAVgsAOQgtAOg0AGgAk8DMIAugVIAAnvIA8AAIAAHRQB0g/BqhDIAhAyQheA+g/AjQiBBDgqATgAhSixQgqg1gkgjIAvgoQAoAoArA2QApA2AsBEIgxAkQguhGgqg2g");
	this.shape_15.setTransform(-169.6,-44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.9,-80.3,681.9,160.6);


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjKE4IAAlbQgVAjgcAkIg4gaQAcgkAXgmQAXgmASgoQASgoANgrQANgqAIgsIA7AMQgZBjgPAoIAAHYgAAqE2QgSAAgOgGQgNgHgJgMQgJgMgEgQQgEgRABgUIAAoSIA7AAIAAD9QAsgVBOg0QAlgbBBhAIAqAqIhDA+QgiAcghAXQghAYgiARQggASghAMIAADNQgBATAGAJQAHAMAZAAICCAAQAdAAALgRIAIgVQACgMgBhWIA9AJIAAAdQAAA8gDAVQgDAigMARQgPARgNAFQgNAEgfAAg");
	this.shape.setTransform(304.1,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjlE5IAAlhIgfAsIg2gXQBgiDAaieIA5AKQgSBNgTA5IAAHdgAiSEuIAAg6IDHAAIAAhyIiyAAIAAg6ICyAAIAAg8IA5AAIAAA8IC6AAIAAA6Ii6AAIAAByIDNAAIAAA6gAiQgVIAAg5IDFAAIAAhnIivAAIAAg7ICvAAIAAhIIA5AAIAABIIC3AAIAAA7Ii3AAIAABnIDNAAIAAA5g");
	this.shape_1.setTransform(236.9,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADUETIg5gmQgeAYgaARQgcAQgZAJIgkgtQAmgMAXgLQAWgLAZgTQgmgngqg5IAqgdQAaAoAxA2QAvgwASg4QAAgKgMABIiwAAIAAguIDZAAIAcAWQgOAugNAgQgPAigQAVIgcAiIA1AeQAeAPAiAMIgiAtQgggOgegRgAg/EsIAAguIjoAZIgKgzIAsgFIAAj7IgzAAIAAg0IJxAAIAAA0IlBAAIAAFIgAjODZICPgQIAAgpIiPAAgAjOBwICPAAIAAgtIiPAAgAjOATICPAAIAAgvIiPAAgAjjhrQgOAAAAgOIAAirQAAgNAOAAIHFAAQAOAAAAANIAACrQAAAOgOAAgAi6idQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIFuAAIADgDIAAgbIlzAAgAi6kAIAAAZIFzAAIAAgZQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIluAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_2.setTransform(169.5,45.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AC3E6IAAgSIkrAAIAAASIg3AAIAAjXQgyAPhIAMIgRg0QAygHBagVQBAgQA2gWIj0AAIAAg0ID3AAIAAg2Ii8AAIAAg0IC8AAIAAgpIA2AAIAAApICgAAIAAAfIBRhGIAkAqQhhBOglAZICgAAIAAA0Ij3AAIh4A2IEWAAQASAAAAASIAADqgAh0D0IErAAIAAgmIkrAAgAh0B6IAAAgIErAAIAAghQAAgHgIAAIkbAAQgJAAABAIgAAFgsIAxAAIAxgdIAggZIiCAAgABrixIAAgnIjLAAIAAAnIg6AAIAAgnIiRAAIAAg1ICRAAIAAgsIA6AAIAAAsIDLAAIAAgsIA6AAIAAAsICSAAIAAA1IiSAAIAAAng");
	this.shape_3.setTransform(101.1,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABHEvIAAhBQAnAMAyAFQAoAAACggIAAgkIkzAAIAAB/Ig6AAIAAltIgQAMQgyAkgtAXIglgyQAugXBPg3IA1guIAvgyIjWAAIAAg6ID/AAIAhg1IAyAgIgNAVIEfAAIAAA6IlEAAQgkAvgjAjIFIAAQAPAAAAAPIAAFhQAAAbgPARQgLALgSAHQgUAIgeAAQglAAg6gNgAhpCBIEzAAIAAhDIkzAAgAhpg7IAAA/IEzAAIAAg/QAAgFgGAAIkpAAQgEAAAAAFg");
	this.shape_4.setTransform(33.1,44.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AijELIA4gdQAVgNASgTQAUgUASgYIh5AXQgFgWgMgbIArgJQAegoAig+QgXgcgbgYQgZgYgbgTIAegrIAYATQAUgzAQg2IAxASQgNArgiBPIAiAiQARgpAThNIAyAIQgEAagJAdIgXA7QgrBWghAxIA3gLIAKg0IAzAIIAAAHIgZBfQgJAXgPAVQgNAVgTATQgTATgYARQgYARgdAPgAk3EnIAEg8QAoARAKAAQAOAAAAgXIAAiJIgqAUIgegyIBIgjIAAimIhBAAIAAg6IBBAAIAAhzIA6AAIAABzIA4AAIAAA6Ig4AAIAACKIAqgaIAeAvQgsAhgcAKIAAC1QAAAYgNATQgIAKgKAGQgLAGgPAAQgaAAgrgOgABfEkQgTAAAAgUIAAkRIgSAaQgZgZgRgGQAUgcAfg/QANghAOhIIA1AOQgHAhgNAmIBDAAQAVgyAGgeIAyARIgUA/IA/AAIgFA0IhBAAIAABCIBEAAIAAA1IhEAAIAABCIBEAAIAAA0IhEAAIAABEIBIAAIAAA0gACCDnQAAAJAJAAIAyAAIAAhEIg7AAgACCB4IA7AAIAAhCIg7AAgACCg5IAAA6IA7AAIAAhCIgyAAQgJAAAAAIgAh9jYIAAg0IC1AAIAAgsIA6AAIAAAsIDGAAIAAA0g");
	this.shape_5.setTransform(-34.1,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjeEDQA/gHAtgKQArgIAtgOQhVgugjgXIAUg3QAqAfArAYQApAXAoASQBagvApg0QAAgCgHgBIlGAAIAAg3IF7AAIAoAiIgbApIghAmQg3AvgjAWQAyANAyAKQA2AKA2AGIgbA6QhHgLg+gRQg+gPg1gVQg7AZg9ARQg+AQg+AJgAk6ETIAcg5QALgaAGgaQAIgjADhZIAAkpQAAgQAPAAIDmAAIAAgtIA5AAIAAAtID9AAIAAA3IhjAAIAAA8IBiAAIAAA2IhiAAIAABPQAAANgHAHQgHAGgNAAIkSAAQgOAAgGgGQgHgHAAgNIAAhPIhJAAIAAChIgDBCQgEAhgHAdQgIAegLAcQgLAbgOAZgAhHg7QgBAIAKAAIDBAAQAKAAAAgIIAAgrIjUAAgAhHicIDUAAIAAg8IjUAAgAjLjQIAAA0IBJAAIAAg8IhBAAQgIAAAAAIg");
	this.shape_6.setTransform(-102.2,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ACeEuIABg8IArANIAWADQAPAAAGgIQAEgGAAgMIAAoVIA6AAIAAIlQgHBDg/AAQggAAgvgNgAh5E4IAAj8IhZAAQgEAAAAAEIAADSIg6AAIAAkBQAAgPAPAAICIAAIAAg3IioAAIAAg6ICoAAIAAhOIhcAAQgUAkgVAaIg0gdQAcgiATgkQAUglAJgmIA3APIgMAoIBCAAIAAhEIA6AAIAABEICQAAIAAA5IiQAAIAABOIChAAIAAA6IihAAIAAA3ICHAAQAPAAAAAPIAADOQAAAZgOAQQgIAKgPAGQgRAHgYAAIgtgEIgDhAQAfAJAMAAQALAAAIgKQAGgJAAgJIAAiIQAAgEgFAAIhXAAIAAD8gAB/CjIAAmwIA5AAIAAGwg");
	this.shape_7.setTransform(-170.8,44.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ak3EjIAZg1QAKgaAGgbQAIgkAEhgIAAiAQAAgOAPAAIBFAAIgOgrQAsgFBQgTIhTgUIAOgsIiUAAIAAg1IEFAAIAAgmIA4AAIAAAmIEBAAIAAA1IhkAAIhqA7QAzAOA8AXIgOAjIB0AAIAAA0IjYAAIAAA3IDKAAIAAA0IjKAAIAAA7IC5AAIAAA0Ii5AAIAABBIDkAAIAAA0InlAAIAAg0IDHAAIAAhBIiqAAIAAg0ICqAAIAAg7IiHAAQgjAxgUASIgogkQgHBPgIAjQgXBDgQAegAjLgeIAAB+QAZgXAbgqQAOgZAKgqIA2ANIgMApIBvAAIAAg3IjeAAQgGAAgBAHgACVhZQgqgShXgaQhoAjgrAJIEUAAIAAAAgAAQi3IAAABIABAAIBQgmIjYAAg");
	this.shape_8.setTransform(-238.1,44);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACsDVQgsgpgngbIAmgsQBUA8BkBrIgqArQg0g5gtgpgAk2EBQAkgSA/gvQAegZAyg8IAuAjQg8BGgeAbQg/AxghARgAk1BMIAAg6ICPAAIAAixIhwAAIAAg6IBwAAIAAhdIA8AAIAABdIDUAAIAAhdIA9AAIAABdIBwAAIAAA6IhwAAIAACxICQAAIAAA6gAhqASIDUAAIAAixIjUAAg");
	this.shape_9.setTransform(-305.3,44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjeEDQA/gHAugKQAqgIAtgOQhUguglgXIAVg3QAqAfArAYQApAXApASQBZgvApg0QABgDgIAAIlHAAIAAg3IF8AAIAoAiIgbApIgiAmQg3AvgiAWQAyAOAyAJQA1AKA2AGIgaA6QhGgLg/gRQg9gPg1gVQg8AYg9ASQg+AQg9AIgAk6ETIAcg5QALgaAGgaQAIgjAEhZIAAkpQAAgQAOAAIDnAAIAAgtIA4AAIAAAtID9AAIAAA3IhjAAIAAA8IBhAAIAAA2IhhAAIAABPQAAANgHAIQgHAFgNAAIkSAAQgNAAgHgFQgGgIAAgNIAAhPIhJAAIAACiIgFBBQgDAhgIAdQgHAegLAbQgLAcgPAZgAhIg7QABAIAIAAIDCAAQAJAAAAgIIAAgrIjUAAgAhIicIDUAAIAAg8IjUAAgAjKjQIAAA0IBJAAIAAg8IhCAAQgHAAAAAIg");
	this.shape_10.setTransform(169.1,-44.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABfEvIAAhDQAxANA7AHQAVAAAIgHQAIgIAAgSIAAhBImjAAQgKAsgQAnQgPAngSAiIg7gXQAVgnAbhIQALgiAHhAIAAjcIgkASIgdg3IA4gdQAagOAWgSQAWgRARgUQASgTANgXIAzAUIgLAVIDrAAIAjAfIgbAqQgPASgTASICYAAQATAAAAAQIAAGGQAAAWgIAPQgHAOgOAKQgMAHgRAEIggACQhDgEgugIgAA4BnIC4AAIAAhQIi4AAgAiuBnICuAAIAAhQIiuAAgAA4gfIC4AAIAAhKQAAgFgIAAIiwAAgAiuhoIAABJICuAAIAAhPIimAAQgIAAAAAGgAi4ilIDbAAQAfgSArgkIjmAAQghAggeAWg");
	this.shape_11.setTransform(100,-44.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_12.setTransform(33.9,-45.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAjEtIABgxQg+AZgcAEIgTguQAmgIBGgZQAjgPA/gpIgFgZQguAhgsAVQgrAVgrAJIgVguQAvgKArgTQAtgTAogcIgMgLQgmAWgiAOQghANgdAGIgTgsQAmgHBEgdIhxAAQgHBkgKArQgIAggLAdQgLAdgOAaIg2gcIAag2IATg5IAMg6IADg+IAAj5QAAgOAOAAIB3AAIAAhjIA6AAIAAAVIDEAAIAAAsIjEAAIAAAiIDQAAIAnAXQAAAWgFAYQgFAXgJAZIg2gNQARgpAAgMQAAgGgFACIjCAAIAAAfICCAAIAAAtIiCAAQAAAKAIAIQAHAIAMABIBhAAQAGAAAHgGQAHgOAIgcIAqASQgNA0gGAEQgSASgOAAIiTAAQgSgBgPgPQgPgPAAgSIAAgWIg4AAIAAgtIA4AAIAAgfIhDAAQgJAAAAAJIAACgIF5AAIAAAvIioAAQAXAYAJAdQAFASAMATQALATASATQAYAbBIA2IgwAjQg9g4gWgbQgEAegLAbQgUAtg0AGQgQAAgwgPgAA1D1IgFADQAbAIAOAAQAPAAAKgNQAJgNAIgdQgoAagmASgAk2EsIAAg7IAbAIIAQACQASgBAAgWIAAiRIgfARIgkguIBDgkIAAiWIg8AAIAAg5IA8AAIAAh8IA5AAIAAB8IAxAAIAAA5IgxAAIAABxIAegXIAnAqQgXAUguAcIAADDQAAAYgMARQgHALgLAHQgNAHgRAAQgXAAgjgJgADDBtQArgdAUgVIAeAlQgcAcglAYg");
	this.shape_13.setTransform(-34,-44.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah+EXIg+AWQhAAMgwAEIgPg3QAXAABWgKIg3gUIgIgjIAsglIhaAAIAAgvICIAAIAWgfIh5AAQgHAAAAgIIAAhyQAAgHAHAAICFAAIAAgZIh7AAQgIAAAAgJIAAhMIgnAAIAAgvIAnAAIAAhNQAAgIAIAAIB7AAIAAgcIA3AAIAAAcIB2AAQAHAAAAAIIAABNIApAAIAAAvIgpAAIAABMQAAAJgHAAIh2AAIAAAZICCAAQAHAAAAANIAbhDIAThEIAMhEIADhGIA3AAIgGBOICbAAIAAA3IgjAAQAACmg/CRQAVAnAaAnQAZAlAeAkIg0AdQhKhpgIgTQgVAggdAeQgdAfgkAbIgrgpQAkgXAhgjQAhgiAbgtQgshsgEgzIgIAPIgygNIAABgQAAAIgHAAIiEAAIgUAfIDAAAIAAAvIhNAAIglAxQgSAUgQAOIBXAdIghAugAi/DFIgDADQABAAAAAAQAAABAAAAQABAAAAAAQAAABABAAIA/AVIAkgbIAigkIhdAAgACQhzQAAAYAEAeIALA2QAKAuANAiQAOglARhOQAGgpADhbIhIAAQgGAbAAAggAhaAlIBTAAIADgDIAAgiIgDgCIhTAAgAjpAAIAAAiIADADIBVAAIAAgnIhVAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAgAhah3IBEAAIAEgDIAAgjIhIAAgAjdh6IACADIBKAAIAAgmIhMAAgAhajMIBIAAIAAgkIgEgCIhEAAgAjdjwIAAAkIBMAAIAAgmIhKAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_14.setTransform(-101.7,-44.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ai0EBQAqgDBHgNQAigJA0gYQAegRAYgYQAXgZASggQARgdAWg+QAOgrAHg2QAJhFAAigIA/AEQAAA9gDA3QgEA2gIAxQgHAxgLApQgLAqgPAkQAgAlAgAxQAhAwAhA8IgzAgQhMh8gggrQgWAkgeAdQgdAdglAVQglAVgsAOQgtAOg0AGgAk8DMIAugVIAAnvIA8AAIAAHRQB0g/BqhDIAhAyQheA+g/AjQiBBDgqATgAhSixQgqg1gkgjIAvgoQAoAoArA2QApA2AsBEIgxAkQguhGgqg2g");
	this.shape_15.setTransform(-169.6,-44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.9,-80.3,681.9,160.6);


(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak7EiIALgWQASgnAJgsQAJgtAAgyIgBgpIA0gCQAEAsgCAhQAAAJASAXQAQAYASAQIAAi3IiPAAIAAgzIEnAAIAAAzIhhAAIAABDIBfAAIAAA1IhfAAIAABeQAXAHAfAEQAeADAlgBIEvAAIgOA3IkNAAQhfgEgsgNQgigJgdgSQgfgTgageQgWBKgOAfgACvCtIAWgxQAgAOBRA1IgfApQhMgvgcgMgAgXC3QAfgIAcgPQAcgPAXgVIAiApQgfAZgfARQgeARgcAGgAAWB0QgHABAAgIIAAk2QAAgGAHAAIBQAAIANgmIABgJIh0AAIAAguIElAAIAAAuIh7AAIgOAvIB0AAQAIAAAAAGIAAE2QAAAIgIgBgABEBDIACACICbAAIADgCIAAgsIigAAgABEgWICgAAIAAgwIigAAgABEieIAAAoICgAAIAAgoIgDgCIibAAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAABABgAkZhJQgHAAAAgIIAAjaQAAgHAHAAIDsAAQAIAAAAAHIAADaQAAAIgIAAgAjsh6IACACICOAAIACgCIAAguIiSAAgAjskBIAAApICSAAIAAgpIgCgCIiOAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABg");
	this.shape.setTransform(338.9,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak4EPQAngPAegWQAdgYASgeIhxAAIAAg1ICDAAIADghIhtAAIAAguIBtAAIAAgoIh2AAQgGAAAAgHIAAhyQAAgGAGgBIB2AAIAAggIg6AAQgUAAgBgWIAAg7Ig5AAIAAgwIA5AAIAAghIA0AAIAAAhIBlAAIAAghIA0AAIAAAhIBCAAIAAAwIhCAAIAAA7QABAWgWAAIg0AAIAAAgIB1AAQAGABABAGIAAByQgBAHgGAAIh1AAIAAAoIB6AAIAAAuIh6AAIgDAhICLAAIAAA1IhzAAQAxAmA0AwIgoArQgkgnhKhEQghAugVATQggAcgpAVgAh6gjIBFAAIACgDIAAgkIgCgCIhFAAgAj3hKIAAAkIACADIBGAAIAAgpIhGAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAgAjKjNQAAAIAIAAIBUAAQAJAAAAgIIAAgcIhlAAgAA8EzQgTAAAAgUIAAmdIgLAOIgygbQAWgaAjg5QAPgcATg+IA2AOQgaBMgOAbIBYAAQAUgvAWhGIA1AOQgMAxgXA2IBNAAIgEA1IhSAAIAABcIBSAAIAAA0IhSAAIAABjIBSAAIAAA0IhSAAIAABlIBZAAIAAA1gABeD2QAAAIAHAAIBHAAIAAhlIhOAAgABeBlIBOAAIAAhjIhOAAgABeiIIAABWIBOAAIAAhcIhHAAQgHAAAAAGg");
	this.shape_1.setTransform(271.1,44.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_2.setTransform(203.4,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADTERQgcgWgYgXQgbAYgfAVQggAVgjASIgogsQBEghA5gvQgUgYgQgYQgQgagMgaQgLgbgIgeQgIgdgEggIgLAAIAABCQgEBlgGAsQgQBSgOAjIg7gZQAOggAShGQAHgkADhOIAAkvQAAgPARAAICDAAIAAgzIA5AAIAAAzIBtAAIAwAdQgDAggIAgQgJAggPAeIg2gPQAWg5AAgVQAAgGgHABIhTAAIAAB3IBpAAIAjAXQgVCMg4BNIgbAiQAxAlBEAqIgpAtQghgSgdgWgABYASQAGAYAKAWQAJAWANAVIAeAoIABACQAVgaAfg6QANgeARhBIieAAQACAZAFAXgAANjCIAABtIBbAAIAAh3IhRAAQgKAAAAAKgAj5EgIAAkPIgOAYIg2gSQAZgpAkhXIAThCIAMhEIhNAAIAAg3IDtAAIAAA3IhpAAQgVBtgOArIBrAAQASAAAAARIAAEyQAAATgTAAIhfAAIAAAhgAjCgYIAADgIAwAAQALAAAAgLIAAjVQAAgJgJAAIgpAAQgJAAAAAJg");
	this.shape_3.setTransform(135.4,44.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACQErIAAg5QAuAMAbAAQASAAAHgGQAGgFAAgMIAAoaIA3AAIAAInQAAAOgEAMQgFAMgJAJQgKAKgOAFQgQAFgUAAQggAAgxgMgAkrEGIGHgOIABAuImDAPgAkTDjQgHAAAAgHIAAijQAAgHAHAAIFbAAQAHAAAAAHIAACjQAAAHgHAAgAhMC5IBlAAIACgDIAAgXIhnAAgAjmC2IACADIBkAAIAAgaIhmAAgAhMB4IBnAAIAAgaIgCgCIhlAAgAjmBeIAAAaIBmAAIAAgcIhkAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABgACNCwIAAm5IA0AAIAAG5gAkuAcIAAgoICtAAIAAgYIijAAIAAgnICjAAIAAgXIiRAAIAAgpICRAAIAAgdIitAAIAAgnICtAAIAAgXIiPAAIAAgqICPAAIAAgmIA3AAIAAAmICHAAQAPAAAAAPIAAAyIAzAAIAAAnIgzAAIAAA3QAAAPgPAAIiHAAIAAAXICpAAIAAAnIipAAIAAAYIC5AAIAAAogAhKiLIBdAAQAFAAAAgFIAAgYIhiAAgAhKjPIBiAAIAAgTQAAgEgFAAIhdAAg");
	this.shape_4.setTransform(66.5,44.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADgEwQgPgHgPgPQgggggagmQgaglgTgsQgUgsgNgyQgOgygJg9IibAKIgIg8ICcgJQgHg2gEh4IA6ADQACByAGA1IDVgNIAEA7IjRAOQAIAvAKApQALApANAjQAOAkARAeQARAdAVAXQAbAhAKAAQAGgBADgJQAGgbADhLIA5AQQgBA9gJApQgJAngQAQQgMAMgNABQgPAAgPgIgAjaE4IAAlJQgSAhgUAdIg5gYQA9hZAihgQAQguAThlIA8AJQgVBjgNAqIAAHZgAC7jgQgggYgcgOIAggwQAeAPAiAYQAiAYAlAeIgjAwg");
	this.shape_5.setTransform(-0.2,44.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA7ErIABg8IA1APIAjAEQAcgBAAgcIAAiqIkJAAIAAg6IEJAAIAAhAIkJAAIAAg3ICoAAIAAhOIiVAAIAAg3ICVAAIAAg/IA5AAIAAA/ICXAAIAAA3IiXAAIAABOICnAAIAAA3IhFAAIAABAIBAAAIAAA6IhAAAIAAC6QgDBGhPAAQg4gFglgLgAkuEdIAAorQAAgTASAAICWAAQATAAAAATIAAHnQAAATgUAAIhuAAIAAAxgAj1CzIA9AAQALAAAAgLIAAilIhIAAgAj1jeIAACpIBIAAIAAipQAAgJgJAAIg1AAQgKAAAAAJgAgUCgQgQgegQgVIAygdQARAXARAfIAhBDIg0Abg");
	this.shape_6.setTransform(-67.4,44.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ADAEFQgjgagYgYQgrAmgmAaQgnAaghANIgpgvQAqgQAhgSQAhgSAZgUIAcgYQgmg2gQghQgQgigahOIgOAAQgDBfgNA8QgMAxgTAsQgfA/gXAfIg0gfQAYgiATgiQASgjAMgkQANgkAGgmQAGglAAgmIAAjwQAAgOAOAAICKAAIAAg2IA5AAIAAA2ICCAAIAsAaQgDAegJAfQgIAfgPAfIg1gTQAbg2AAgTQAAgGgHABIhqAAIAAB8IBpAAIAfAaQgRA+gSAuQgTAugVAfIgjAtQAXAXAlAZQAlAYAxAYIgqAtQgugbgkgagABYAxQAMAcAlA4QA8hLAXhMQAAgLgPABIiRAAQAMAqAQAjgAgKjFIAAByIBhAAIAAh8IhXAAQgKAAAAAKgAjwE4IAAkBIgiAqIgrgoQB8h7AahrQAAgJgKAAIh+AAIAAg3IBDAAIAAhMIA6AAIAABMIAvAAIAdATQgOA3gVAxQgUAxgcArIAAAAQA3AqAsApIgmAsIg9g9IAAEMgAiegZQAhgsAKgWIArAeQgQAdgdAmg");
	this.shape_7.setTransform(-135.8,44.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiAEDQA5gPBegoIATA2QhrAqgxAOgACQEEIAUg1QA/ATBZAkIgYAzQhdgmg3gPgAk6D6IAngVQAWgNATgQQAYgVAWgcQAagfAagrIAxAdQgSAfgVAcQgVAbgZAYQgXAYgbAUQgbAVgeAQgAg+DHQgHAAAAgIIAAl9QAAgHAHABIByAAIAQguIiYAAIAAg1IF/AAIAAA1IirAAIgPAuIChAAQAIgBAAAHIAAF9QAAAIgIAAgAgOCQIACACIDsAAIADgCIAAg7IjxAAgAgOAgIDxAAIAAg/IjxAAgAgOiOIAAA7IDxAAIAAg7IgDgCIjsAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABgAk7AoQAkgSAcgVQAZgSAVgWQAagcAgg2IAxAcQgRAggVAcQgUAbgXAWQgYAXgZASQgaATgcAOgAk8iiQAfgRAXgSQAWgRARgTQAWgaAfg2IA0AaQgQAegTAbQgRAagVAVQgVAWgWASQgXARgYANg");
	this.shape_8.setTransform(-203.7,44.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ak1D5QA2gIBhgdIAAAAIAAnrIA9AAIAAHPQAjgUAdgWQAdgXAWgaQAaggAUgoQATgoAOgwQANgxAHg4QAHg5AAhAIA5AKQAAA7gIA4QgJA5gRA3QgOAygVAqQgVAsgcAkQgdAkgiAdQgjAdgrAWIATACICbAAQAcAAALgQQAGgMADggQADggAAg1IA9ALQAABCgHBEQgCATgMAQQgNAQgOAEQgNAFggAAIjIAAQgUAAgQgHQgPgIgJgOQhYAfgtALgADogCIgficIA5gJQAbCHAKA9QAKA9AKBuIg5AEQgNiCgNhMgAk6CkQARhKAVh+QAJg8AFhkIA7AHQgGBrgJA9QgWB9gRBFgAg9kkIA4gOIAkCCQARA/AKA5Ig5AKQgUh1gqiBg");
	this.shape_9.setTransform(-271.4,44.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ak4ENIAFgFQAVgVATgYQASgXAOgbQAQgaALgeQAMgeAIggIA3AQIgUBDQAZAiAeAXQAfAWAmAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDSAAIgNA5IixAAQg/gCgqgEQgwgGgigLQglgLgcgUQgcgTgWgeIgrA/QgWAegWAWgAjghFQgIAAAAgIIAAjbQAAgIAIAAIHEAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_10.setTransform(-339.2,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABcEvIhMgSIgChGQAqAOAiAHQAhAHAYAAQAgAAAQgNQAPgMAMgiQAGgUAEgfIAFhMIACiXQAAg7gDgFQgCgFgGAAIjjAAQgDA4gNA5QgNA3gVA8QgRAlgVAiQgUAigaAeQgZAegdAbQgeAbgiAXIgugsIAzgkQAZgTAVgVQAVgWASgYQASgXAPgbQAPgbAMgdIATg8QAMgrAJhfIjXAAIAAg5IDaAAIAAhYIA+AAIAABXIEQAAQAOADADAFQAFAFAAAVIgCD8QgCAugFAlQgFAmgIAcQgIAdgNATQgMATgPAKQgNAKgTADQgTAFgXAAQgbAAgjgGg");
	this.shape_11.setTransform(134.2,-44.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhjElIADg8IAgANIAYADQAQAAAAgXIAAiaIA4AAIAACqQAAAXgMATQgHAKgLAGQgLAHgPAAQgaAAgxgOgACXEHQg0gRgpgIIAQg3QAtAIA2ARQAzARA9AZIgSA3QhAgag0gQgAkqDtQAogFBJgYQAkgOBCgmIAeAtQhRAvglAQQhJAYgiAFgADkCcQgdgPgZgSQg7AegoAOIgVg1IBLgdIgZgcIjOAAIghAdIAyAkIgfArQgkgcgdgQQhKArgeAKIgfgzQAkgMAhgQQAhgQAfgWIiAAAIAAg0ICtAAIAAgoIigAAIAAgwICgAAIAAghIhwAAQgHAAAAgIIAAivQAAgHAHAAIHxAAQAJAAAAAHIAACvQAAAIgJAAIhpAAIAAAhICcAAIAAAwIicAAIAAAoICrAAIAAA0IiHAAQAZAXAiASQAkAUAsAOIggAxQgdgKgcgPgAhQAFICkAAIAAgoIikAAgAhQhTICkAAIAAghIikAAgAjHijIACADIGIAAIADgDIAAgZImNAAgAjHkDIAAAbIGNAAIAAgbIgDgCImIAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_12.setTransform(67.7,-43.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_13.setTransform(0,-45.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah/EXIg9AWQhAAMgwAEIgPg3QAXAABWgKIg4gUIgHgjIArglIhZAAIAAgvICIAAIAWgfIh5AAQgHAAABgIIAAhyQgBgHAHAAICEAAIAAgZIh6AAQgHAAAAgJIAAhMIgoAAIAAgvIAoAAIAAhNQAAgIAHAAIB6AAIAAgcIA3AAIAAAcIB3AAQAHAAAAAIIAABNIApAAIAAAvIgpAAIAABMQAAAJgHAAIh3AAIAAAZICDAAQAHAAABANIAbhDIAShEIALhEIAEhGIA3AAIgGBOICbAAIAAA3IgjAAQAACmhACRQAWAnAaAnQAZAlAeAkIg0AdQhKhpgHgTQgXAggcAeQgdAfgkAbIgsgpQAmgXAggjQAggiAdgtQgthsgFgzIgHAPIgxgNIAABgQgBAIgHAAIiFAAIgTAfIC/AAIAAAvIhMAAIgkAxQgTAUgQAOIBXAdIghAugAjADFIgCADQABAAAAAAQAAABAAAAQABAAAAAAQABABAAAAIA+AVIAlgbIAigkIhdAAgACQhzQAAAYAEAeIAKA2QAMAuANAiQAOglAPhOQAHgpADhbIhIAAQgGAbAAAggAhbAlIBVAAIACgDIAAgiIgCgCIhVAAgAjoAAIAAAiIACADIBUAAIAAgnIhUAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABABAAgAhbh3IBFAAIADgDIAAgjIhIAAgAjdh6IACADIBJAAIAAgmIhLAAgAhbjMIBIAAIAAgkIgDgCIhFAAgAjdjwIAAAkIBLAAIAAgmIhJAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_14.setTransform(-67.8,-44.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AkDD5IAyABQCmAABhglQhKhCg5grQhTAag1AIIgWg4QAvgGAogKQApgLAhgQQAhgRAbgUQAZgVATgbQhYAig1ALQhyAWhDAGIgQg9QA4gCBkgMQAugIBNgXQgtgjhfg/IhQAWIgZg4QAlgGAfgKQAfgKAagMQAagNAVgQQAUgQAQgSIA+AWIgGAGIDmAAIApAiQgNAXgWAcQgXAeggAfQgUATgiAXIhTAwIA3ARIgIAOIC/AAIAlAVQgKAsgSAkQgSAkgZAcQgcAggcAXQgcAWgrAZQgcAOglAMQglALgrAIQgsAIg0AFIhwAFgAgUBNIAuAnQA0AqAfAeIAqgdIAjghQAQgTANgUQAOgVAKgXIAAgCIgGgBIjHAAQgPAMgnAZgAhrjMIAuAfQAwAhAqAjQAwgaAjgbQAjgcAUgdIABgGQAAgGgEAAIjrAAg");
	this.shape_15.setTransform(-135.4,-44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.9,-80.3,749.8,160.6);


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhaE2QgPAAgMgFQgNgEgKgLQgJgKgFgRQgFgRABgWIAAh7IA5AAIAAByQAAASAFAIQAIAMAYgBICXAAQAaAAAMgPQAFgJAAhEIA6AIQAAAwgEAeQgDAegIAJQgOAQgLAEQgNAFgeAAgAk9EeQAcgnASgqQAMgcANg+IA5AKQgRBLgNAfQgbA5gRAWgADZC8QgWgugWggIAwgeQAzBKAuB2Ig1AWQgZg9gXgtgAgjBuIAwgfQAXAfAxBXIg0AdQgkhLgggpgAkcAYIAWAAQBWAABIgEQBHgDA6gJQA7gHAtgKQAtgMAfgPIADgDQAAgCgMAAInKAAIAAg0IIhAAIAYAoQgRASgXAQQgWAQgdAMQgbAOghALIhGATQhpAWg9AFQiAAKhIAAgAB+ivIAAAxIj+AAIAAgzQhlAlg/ARIgYg6QA4gLAwgOQAvgOAmgPQAmgQAdgTQAdgSAUgVIA2AUIgHAGQAoAZBZAmQAvASBnAWIgaA7Qh0gjgvgTgAB5iyQhQgngrgbQhAAog5AaID0AAIAAAAg");
	this.shape.setTransform(338.9,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjlEzIAAlFQgfBKgTAmIgmguQAgg3AQgoQAMgfAPhGIg4AAIAAg2IBFAAIAAhoIAxAAIAABoIBCAAIAAA2Ig4AAQAtB2AUA8IguAQIgdhdIAAFigABSERIAbgrIgoAQIgKgbQhVA0hLAcIgfg0IAtgRIAAoBICqAAIAAFNIh2AAIAACfQAhgNAlgcIgdg3IAwgVQAuBaAQAmIAUgrQASgrAKgiIAUhgIhTAAIAAgzIARAAIANiRIAwAAIgOCRIAbAAIADgcQAFguAEhuIhPAAIAAg0IClAAIAAA0IglAAQgBBCgNB2IA9AAIAAAzIhEAAIgHAtIgIAiIAiAAIAACWQAAAQAJAAIABAAQAJAAAAguIAAghIAvAMQABBAgHATQgEAPgKAHQgLAIgQAAIgtAAQgMgBgFgFQgGgHAAgKIAAiBQgfBagrBDgAgjgDIBCAAIAAhbIhCAAgAgjiVIBCAAIAAhQIhCAAg");
	this.shape_1.setTransform(270.7,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_2.setTransform(203.4,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABHEvIAAhBQAnAMAyAFQAoAAACggIAAgkIkzAAIAAB/Ig6AAIAAltIgQAMQgyAkgtAXIglgyQAugXBPg3IA1guIAvgyIjWAAIAAg6ID/AAIAhg1IAyAgIgNAVIEfAAIAAA6IlEAAQgkAvgjAjIFIAAQAPAAAAAPIAAFhQAAAbgPARQgLALgSAHQgUAIgeAAQglAAg6gNgAhpCBIEzAAIAAhDIkzAAgAhpg7IAAA/IEzAAIAAg/QAAgFgGAAIkpAAQgEAAAAAFg");
	this.shape_3.setTransform(134.9,44.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACUEsIgDg9QAlAKATAAQAPAAAIgKQAGgIAAgLIAAhQQAAgDgFAAIhxAAIAACfIg3AAIAAifIhsAAIAACfIg2AAIAAifIhyAAQgEAAAAADIAAChIg3AAIAAjLQAAgNAOgBIDEAAIAPglIj7AAIAAg0IJcAAIAAA0IklAAIgNAlIEVAAQAOABAAANIAACRQgEA/hLAAQgZAAghgGgAgZgXIAAiaIjmAAQgGAAAAAEIAABNIg0AAIAAh8QAAgKAKAAIEWAAIAAgaIjdAAIAAgxIH3AAIAAAxIjnAAIAAAaIDxAAIAvAZQgBAagFAdQgGAggMAhIgygOQANgyAAgRQAAgLgHAAIjcAAIAACagAA/ggIAAguICqAAIAAAugAjmggIAAguICoAAIAAAugABChnIAAgvICkAAIAAAvgAjkhnIAAgvICpAAIAAAvg");
	this.shape_4.setTransform(68,45.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AC7E3IAAl9IhlAAIAABZQgBAkgEAbQgGAigNAgQgQAlgcAlQgsA2gfAeIgsgvQAggdAXgYQAZgbAPgbQAQgdAIggQAKggAAgoIAAkfQAAgUAQgBQBDgBBAgFQA8gGA4gJIAVA6QiLAShOACQgKAAABAKIAABfIDkAAIAAA5IhFAAIAAF9gAk5ENQARguAVhgQAJgxAFhnIAAjxQgCgTAPgBQA1gBA6gGQA1gGA6gLIAVA5Qh6AThGADQgKAAABAKIAAA4ICtAAQATAAAAATIAADIQAAASgTAAIixAAQgGA6gMA4QgMA5gUA3gAjOgZIgBAoICBAAQAHAAgBgGIAAhvQABgFgHAAIiAAAg");
	this.shape_5.setTransform(-0.4,44.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ADCEgQgfgRgagWQgbgXgWgdQgXgegSgjQgTgjgPgqIjRAAIAACrQBlgTBigcIARA7QhaAag2AMQhxAUg/AHIgOg6IA9gIIAAoLQAAgSARAAIHdAAQASAAAAASIAACvQAAASgSAAIjRAAIAWBbIDnAAIAAA5IjVAAQANAiAWAiQAVAgAZAbQAYAZAWAPQAWAQAOAAQARAAADgSQAHgogCgtIA3AQIgIBNQgFAegIAOQgKAUgMAHQgKAGgQAAQgYAAgcgRgAgDgCIgXhbIiqAAIAABbIDBAAgAjEjoIAABSIGFAAQAIAAAAgJIAAhJQAAgOgOAAIlxAAQgOAAAAAOg");
	this.shape_6.setTransform(-67.8,45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ADUDwInzApIgQg7IBMgGQAdgvA1hlQAagzAvhuIA4AYQgWA5giBGQgjBGgwBUIFMgZQhNhwghgpIAwghQA9BPAvBGQAvBDAgA4IgzAegAk7gSQAfgeAvhEQAWgjAehMIA5AUQgmBcgWAlIgjA0QgSAYgTASgACyhXQgQgbgOgjQgOgkgPgzQgCgIgEAAIjdAAIAAg6ID+AAQALgBADANQAKAyAOApQANAnAUAgQASAeAaAcQAXAZAfAbIg2AhQg9hBgWglg");
	this.shape_7.setTransform(-135.5,45.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABpEwIAAhEQAtAUAYAAQAQAAAPgHQAPgGANgNQAJgIAFgQQAFgPACgVQADgsAAglQAAglgKAAImqAAQg5BBghAdIgtgkQAjgeAgggQAeggAbgjQAbgiAXglQAWgmASgnIioAAIAAg3IBvAAQgtgigbgPIAdgsQA2AhAeAZIgZAjIA/AAIAchbIA2ASIgYBJID5AAQAGAAAHAGQAIAIAAAKIAAAGIgZBSIAiAAQAHAAAJAGQAHAIABAKIgBAGIgZBNIAjAAQAOADAEAEQAEAGAAASQAABZgEA8QgCAhgHAYQgHAYgLAPQgNAPgPAKQgNAIgNAFQgRAFgXAAQgkAAgwgMgAiIgCIFNAAIARg1Ik7AAgAhEhuIDpAAIASg5IjgAAgAkjESQATgWAdg3QANgcAQhBIA7ARQgYBKgPAgQgiA7gTAZQgUgYgYgNgAhrEkQgEh1gLhDIA2gEQAJBNAGBvgAgQBhIA0gMQATA4AaB0Ig2AIQgUhVgXhTgABaBZIAzgXQAaAsAlBSIgzAUQghhJgegyg");
	this.shape_8.setTransform(-203.9,44.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjmE5IAAlXIgbAnIg5gXQAZgjAUgkQAUgkAPgkQAQgmAKgnQALgnAFgnIA8AJQgaBsgOAsIAAHQgAAnE3IAAoBIg8AAQgLA7gSAxQgQAxgVAkIg7gQQASghAOgkQAOgjAKgjQAJgjAGglQAFgkABgmIA8ADIgFAwIFIAAIAAA5IjZAAIAACGIDHAAIAAA5IjHAAIAAB+IDPAAIAAA6IjPAAIAACKg");
	this.shape_9.setTransform(-271.7,44.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ak4ENIAFgFQAVgVATgYQASgXAOgbQAQgaALgeQAMgeAIggIA3AQIgUBDQAZAiAeAXQAfAWAmAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDSAAIgNA5IixAAQg/gCgqgEQgwgGgigLQglgLgcgUQgcgTgWgeIgrA/QgWAegWAWgAjghFQgIAAAAgIIAAjbQAAgIAIAAIHEAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_10.setTransform(-339.2,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABuEuIgDhBQAhAMAvAGQAPAAAJgEQANgFAJgOIAIgYQAEgzAAgiQAAghgKgBIhmAAQgEAdgOAfQgNAfgWAkQgZAcgjAYQghAYgtATIghgxQCTgwASh9IhiAAIAAg3IBlAAIAAgjIA6AAIAAAjICQAAIALACQAHAKACAFQAABdgFA5QgGA3gIARQgNAWgXAKQgTAIggAAQgiAAgxgLgAklEnIABg4QAwANAYAAQARAAAFgFQAEgFAAgMIAAikQgSAigUAcQgSAZgTAUIgwgdQAjgkAcgqQAbgrATguIhkAAIAAg3ICCAAQg1g1gogfIAlgnIAxAsQA7gmAZgpQgBgGgIAAIi4AAIAAg0IDoAAIAdAYQgOAkgcAlQgdAmgqAlIAcAbIgTARIBNAAIAkAaQgIArgOAkQgOAngVAhIg1gTQAog1AJgsIAAgEIgGgCIgvAAIAAEKQAAAYgNARQgHAMgOAGQgQAIgXAAQgggBgygOgADRgNQgkgRgigXQgbASghAOQggAOgmAJIgagxQAtgLBHgfQgSgSgRgZQgQgagOgfQgjA2gVAVIgrglQAWgVAPgUQAOgTAJgTQANgeANg0IA1AJIgFAXIDxAAIAAA4IgvAAQgPApgVAjQgVAigZAZQAdATAiANQAjANAnAJIgfAwQgogKgmgQgACNh4QAUgWARgZQASgbALgeIiDAAQAbBGAmAig");
	this.shape_11.setTransform(135.4,-44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ADZE1IghgRQgdgTgVgWQgqAVgxAOQgwAOg4AIIgOg1QAngDAsgMQArgLAwgUQghg4gNghIilAAIAAAqQBCgKAdgIIALA0QgqAKhAAJIAAAmQAAAZgOAQQgIAKgNAGQgQAGgVAAQgfAAgrgLIAAg2QAqAKAYAAQATAAAFgHQAEgGAAgbIiFALIgIg1ICNgKIAAgxIiIAAIAAg0ICIAAIAAgeIhtAGIgIgwQBNgBA/gGQA8gGAugKIAHAwQgfAHg1AGIAAAiICVAAQgKglgNg/IlDAAIAAg0IEWAAIAAghIjcAAIAAgvIDcAAIAAgjIkAAAIAAg1ICYAAIgbgcIAogjQAYAUAaAkIgLAHICTAAQAmgmAQgZIArAjIgVAcICJAAIAAA1Ij8AAIAAAjIDZAAIAAAvIjZAAIAAAhIEUAAIAAA0IjnAAQAMBAAMAkIDEAAIAAA0IixAAQAOAgAXAeIBIg1IAhAsIhFAxIAVATQATAMAKAAQANAAACgMQAHgTAAgiIA0ARQgGAvgLAcQgMAbgPAHIgRACQgOAAgSgHgACFAVIAXguQBAAaAdASIgbAsg");
	this.shape_12.setTransform(68.2,-44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AkqEAQAjgIBCgdQAggRA9guIAiAyQhJAyglARQhHAfgjAIQgDgkgJgUgABLDWIAWg2QAvAPA2AYQA1AZA9AjIgaA1Qh/hHhUgbgAk5CNIAAg3IAtAAIAAlgQgCgMAQgBQAhgBAggGQAfgGAagJIAaAxQhBARgmAEQgFAAABAHIAABEIBhAAIAAA0IhhAAIAABDIBhAAIAAA0IhhAAIAABHICDAAIAAifIA1AAIAACfIBAAAIAAi5QAAgJgJAAIhiAAQgNAAAAgOIAAi9IA3AAIAAAvIB1AAIAAA0Ih1AAIAAAtQAAAKAIAAIBiAAQAOAAAAAOIAADlICDAAIAAhHIhgAAIAAg0IBgAAIAAhIIhgAAIAAg0IBgAAIAAhGQAAgIgIAAIhaAAIAAg0ICLAAQAOAAAAAOIAAFrIAmAAIAAA3g");
	this.shape_13.setTransform(-0.2,-44.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjlE1IAAlIIgbApIg3gXQAZgkAUglQAVgmAPgmQAQgnALgnQAKgoAGgoIA5AJQgaBxgQAtIAAHCgAh3EgIAAg5ICuAAIAAjTIi+AAIAAg4IC+AAIAAi1IiXAHIgIg6QAlAACNgIIBtgLQA5gHAkgIIALA5QhUAOhYAKIAAC5IDFAAIAAA4IjFAAIAADTIC7AAIAAA5g");
	this.shape_14.setTransform(-68.6,-45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AkxEDQA2gHAxgMQAwgMAqgPIANA4QhYAZhtAVgABrENIANg3IBiATIBfAaIgSA2Qh+gjg+gJgAjhDPQgGAAgBgIIAAj7QABgGAGAAIHEAAQAIAAAAAGIAAD7QAAAIgIAAgAixCdIACADIFhAAIACgDIAAgZIllAAgAixBXIFlAAIAAgbIllAAgAixgKIAAAaIFlAAIAAgaIgCgCIlhAAQAAAAgBAAQgBABAAAAQAAAAAAAAQAAABAAAAgAk4haIAAgxIEbAAIAAgcIjYAAIAAgsIDYAAIAAgdIj+AAIAAgvID+AAIAAgbIA4AAIAAAbID8AAIAAAvIj8AAIAAAdIDXAAIAAAsIjXAAIAAAcIEZAAIAAAxg");
	this.shape_15.setTransform(-135.5,-44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.9,-80.3,749.8,160.6);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhaE2QgPAAgMgFQgNgEgKgLQgJgKgFgRQgFgRABgWIAAh7IA5AAIAAByQAAASAFAIQAIAMAYgBICXAAQAaAAAMgPQAFgJAAhEIA6AIQAAAwgEAeQgDAegIAJQgOAQgLAEQgNAFgeAAgAk9EeQAcgnASgqQAMgcANg+IA5AKQgRBLgNAfQgbA5gRAWgADZC8QgWgugWggIAwgeQAzBKAuB2Ig1AWQgZg9gXgtgAgjBuIAwgfQAXAfAxBXIg0AdQgkhLgggpgAkcAYIAWAAQBWAABIgEQBHgDA6gJQA7gHAtgKQAtgMAfgPIADgDQAAgCgMAAInKAAIAAg0IIhAAIAYAoQgRASgXAQQgWAQgdAMQgbAOghALIhGATQhpAWg9AFQiAAKhIAAgAB+ivIAAAxIj+AAIAAgzQhlAlg/ARIgYg6QA4gLAwgOQAvgOAmgPQAmgQAdgTQAdgSAUgVIA2AUIgHAGQAoAZBZAmQAvASBnAWIgaA7Qh0gjgvgTgAB5iyQhQgngrgbQhAAog5AaID0AAIAAAAg");
	this.shape.setTransform(338.9,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjlEzIAAlFQgfBKgTAmIgmguQAgg3AQgoQAMgfAPhGIg4AAIAAg2IBFAAIAAhoIAxAAIAABoIBCAAIAAA2Ig4AAQAtB2AUA8IguAQIgdhdIAAFigABSERIAbgrIgoAQIgKgbQhVA0hLAcIgfg0IAtgRIAAoBICqAAIAAFNIh2AAIAACfQAhgNAlgcIgdg3IAwgVQAuBaAQAmIAUgrQASgrAKgiIAUhgIhTAAIAAgzIARAAIANiRIAwAAIgOCRIAbAAIADgcQAFguAEhuIhPAAIAAg0IClAAIAAA0IglAAQgBBCgNB2IA9AAIAAAzIhEAAIgHAtIgIAiIAiAAIAACWQAAAQAJAAIABAAQAJAAAAguIAAghIAvAMQABBAgHATQgEAPgKAHQgLAIgQAAIgtAAQgMgBgFgFQgGgHAAgKIAAiBQgfBagrBDgAgjgDIBCAAIAAhbIhCAAgAgjiVIBCAAIAAhQIhCAAg");
	this.shape_1.setTransform(270.7,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_2.setTransform(203.4,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABHEvIAAhBQAnAMAyAFQAoAAACggIAAgkIkzAAIAAB/Ig6AAIAAltIgQAMQgyAkgtAXIglgyQAugXBPg3IA1guIAvgyIjWAAIAAg6ID/AAIAhg1IAyAgIgNAVIEfAAIAAA6IlEAAQgkAvgjAjIFIAAQAPAAAAAPIAAFhQAAAbgPARQgLALgSAHQgUAIgeAAQglAAg6gNgAhpCBIEzAAIAAhDIkzAAgAhpg7IAAA/IEzAAIAAg/QAAgFgGAAIkpAAQgEAAAAAFg");
	this.shape_3.setTransform(134.9,44.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACUEsIgDg9QAlAKATAAQAPAAAIgKQAGgIAAgLIAAhQQAAgDgFAAIhxAAIAACfIg3AAIAAifIhsAAIAACfIg2AAIAAifIhyAAQgEAAAAADIAAChIg3AAIAAjLQAAgNAOgBIDEAAIAPglIj7AAIAAg0IJcAAIAAA0IklAAIgNAlIEVAAQAOABAAANIAACRQgEA/hLAAQgZAAghgGgAgZgXIAAiaIjmAAQgGAAAAAEIAABNIg0AAIAAh8QAAgKAKAAIEWAAIAAgaIjdAAIAAgxIH3AAIAAAxIjnAAIAAAaIDxAAIAvAZQgBAagFAdQgGAggMAhIgygOQANgyAAgRQAAgLgHAAIjcAAIAACagAA/ggIAAguICqAAIAAAugAjmggIAAguICoAAIAAAugABChnIAAgvICkAAIAAAvgAjkhnIAAgvICpAAIAAAvg");
	this.shape_4.setTransform(68,45.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AC7E3IAAl9IhlAAIAABZQgBAkgEAbQgGAigNAgQgQAlgcAlQgsA2gfAeIgsgvQAggdAXgYQAZgbAPgbQAQgdAIggQAKggAAgoIAAkfQAAgUAQgBQBDgBBAgFQA8gGA4gJIAVA6QiLAShOACQgKAAABAKIAABfIDkAAIAAA5IhFAAIAAF9gAk5ENQARguAVhgQAJgxAFhnIAAjxQgCgTAPgBQA1gBA6gGQA1gGA6gLIAVA5Qh6AThGADQgKAAABAKIAAA4ICtAAQATAAAAATIAADIQAAASgTAAIixAAQgGA6gMA4QgMA5gUA3gAjOgZIgBAoICBAAQAHAAgBgGIAAhvQABgFgHAAIiAAAg");
	this.shape_5.setTransform(-0.4,44.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ADCEgQgfgRgagWQgbgXgWgdQgXgegSgjQgTgjgPgqIjRAAIAACrQBlgTBigcIARA7QhaAag2AMQhxAUg/AHIgOg6IA9gIIAAoLQAAgSARAAIHdAAQASAAAAASIAACvQAAASgSAAIjRAAIAWBbIDnAAIAAA5IjVAAQANAiAWAiQAVAgAZAbQAYAZAWAPQAWAQAOAAQARAAADgSQAHgogCgtIA3AQIgIBNQgFAegIAOQgKAUgMAHQgKAGgQAAQgYAAgcgRgAgDgCIgXhbIiqAAIAABbIDBAAgAjEjoIAABSIGFAAQAIAAAAgJIAAhJQAAgOgOAAIlxAAQgOAAAAAOg");
	this.shape_6.setTransform(-67.8,45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ADUDwInzApIgQg7IBMgGQAdgvA1hlQAagzAvhuIA4AYQgWA5giBGQgjBGgwBUIFMgZQhNhwghgpIAwghQA9BPAvBGQAvBDAgA4IgzAegAk7gSQAfgeAvhEQAWgjAehMIA5AUQgmBcgWAlIgjA0QgSAYgTASgACyhXQgQgbgOgjQgOgkgPgzQgCgIgEAAIjdAAIAAg6ID+AAQALgBADANQAKAyAOApQANAnAUAgQASAeAaAcQAXAZAfAbIg2AhQg9hBgWglg");
	this.shape_7.setTransform(-135.5,45.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABpEwIAAhEQAtAUAYAAQAQAAAPgHQAPgGANgNQAJgIAFgQQAFgPACgVQADgsAAglQAAglgKAAImqAAQg5BBghAdIgtgkQAjgeAgggQAeggAbgjQAbgiAXglQAWgmASgnIioAAIAAg3IBvAAQgtgigbgPIAdgsQA2AhAeAZIgZAjIA/AAIAchbIA2ASIgYBJID5AAQAGAAAHAGQAIAIAAAKIAAAGIgZBSIAiAAQAHAAAJAGQAHAIABAKIgBAGIgZBNIAjAAQAOADAEAEQAEAGAAASQAABZgEA8QgCAhgHAYQgHAYgLAPQgNAPgPAKQgNAIgNAFQgRAFgXAAQgkAAgwgMgAiIgCIFNAAIARg1Ik7AAgAhEhuIDpAAIASg5IjgAAgAkjESQATgWAdg3QANgcAQhBIA7ARQgYBKgPAgQgiA7gTAZQgUgYgYgNgAhrEkQgEh1gLhDIA2gEQAJBNAGBvgAgQBhIA0gMQATA4AaB0Ig2AIQgUhVgXhTgABaBZIAzgXQAaAsAlBSIgzAUQghhJgegyg");
	this.shape_8.setTransform(-203.9,44.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjmE5IAAlXIgbAnIg5gXQAZgjAUgkQAUgkAPgkQAQgmAKgnQALgnAFgnIA8AJQgaBsgOAsIAAHQgAAnE3IAAoBIg8AAQgLA7gSAxQgQAxgVAkIg7gQQASghAOgkQAOgjAKgjQAJgjAGglQAFgkABgmIA8ADIgFAwIFIAAIAAA5IjZAAIAACGIDHAAIAAA5IjHAAIAAB+IDPAAIAAA6IjPAAIAACKg");
	this.shape_9.setTransform(-271.7,44.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ak4ENIAFgFQAVgVATgYQASgXAOgbQAQgaALgeQAMgeAIggIA3AQIgUBDQAZAiAeAXQAfAWAmAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDSAAIgNA5IixAAQg/gCgqgEQgwgGgigLQglgLgcgUQgcgTgWgeIgrA/QgWAegWAWgAjghFQgIAAAAgIIAAjbQAAgIAIAAIHEAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_10.setTransform(-339.2,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABuEuIgDhBQAhAMAvAGQAPAAAJgEQANgFAJgOIAIgYQAEgzAAgiQAAghgKgBIhmAAQgEAdgOAfQgNAfgWAkQgZAcgjAYQghAYgtATIghgxQCTgwASh9IhiAAIAAg3IBlAAIAAgjIA6AAIAAAjICQAAIALACQAHAKACAFQAABdgFA5QgGA3gIARQgNAWgXAKQgTAIggAAQgiAAgxgLgAklEnIABg4QAwANAYAAQARAAAFgFQAEgFAAgMIAAikQgSAigUAcQgSAZgTAUIgwgdQAjgkAcgqQAbgrATguIhkAAIAAg3ICCAAQg1g1gogfIAlgnIAxAsQA7gmAZgpQgBgGgIAAIi4AAIAAg0IDoAAIAdAYQgOAkgcAlQgdAmgqAlIAcAbIgTARIBNAAIAkAaQgIArgOAkQgOAngVAhIg1gTQAog1AJgsIAAgEIgGgCIgvAAIAAEKQAAAYgNARQgHAMgOAGQgQAIgXAAQgggBgygOgADRgNQgkgRgigXQgbASghAOQggAOgmAJIgagxQAtgLBHgfQgSgSgRgZQgQgagOgfQgjA2gVAVIgrglQAWgVAPgUQAOgTAJgTQANgeANg0IA1AJIgFAXIDxAAIAAA4IgvAAQgPApgVAjQgVAigZAZQAdATAiANQAjANAnAJIgfAwQgogKgmgQgACNh4QAUgWARgZQASgbALgeIiDAAQAbBGAmAig");
	this.shape_11.setTransform(135.4,-44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ADZE1IghgRQgdgTgVgWQgqAVgxAOQgwAOg4AIIgOg1QAngDAsgMQArgLAwgUQghg4gNghIilAAIAAAqQBCgKAdgIIALA0QgqAKhAAJIAAAmQAAAZgOAQQgIAKgNAGQgQAGgVAAQgfAAgrgLIAAg2QAqAKAYAAQATAAAFgHQAEgGAAgbIiFALIgIg1ICNgKIAAgxIiIAAIAAg0ICIAAIAAgeIhtAGIgIgwQBNgBA/gGQA8gGAugKIAHAwQgfAHg1AGIAAAiICVAAQgKglgNg/IlDAAIAAg0IEWAAIAAghIjcAAIAAgvIDcAAIAAgjIkAAAIAAg1ICYAAIgbgcIAogjQAYAUAaAkIgLAHICTAAQAmgmAQgZIArAjIgVAcICJAAIAAA1Ij8AAIAAAjIDZAAIAAAvIjZAAIAAAhIEUAAIAAA0IjnAAQAMBAAMAkIDEAAIAAA0IixAAQAOAgAXAeIBIg1IAhAsIhFAxIAVATQATAMAKAAQANAAACgMQAHgTAAgiIA0ARQgGAvgLAcQgMAbgPAHIgRACQgOAAgSgHgACFAVIAXguQBAAaAdASIgbAsg");
	this.shape_12.setTransform(68.2,-44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AkqEAQAjgIBCgdQAggRA9guIAiAyQhJAyglARQhHAfgjAIQgDgkgJgUgABLDWIAWg2QAvAPA2AYQA1AZA9AjIgaA1Qh/hHhUgbgAk5CNIAAg3IAtAAIAAlgQgCgMAQgBQAhgBAggGQAfgGAagJIAaAxQhBARgmAEQgFAAABAHIAABEIBhAAIAAA0IhhAAIAABDIBhAAIAAA0IhhAAIAABHICDAAIAAifIA1AAIAACfIBAAAIAAi5QAAgJgJAAIhiAAQgNAAAAgOIAAi9IA3AAIAAAvIB1AAIAAA0Ih1AAIAAAtQAAAKAIAAIBiAAQAOAAAAAOIAADlICDAAIAAhHIhgAAIAAg0IBgAAIAAhIIhgAAIAAg0IBgAAIAAhGQAAgIgIAAIhaAAIAAg0ICLAAQAOAAAAAOIAAFrIAmAAIAAA3g");
	this.shape_13.setTransform(-0.2,-44.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjlE1IAAlIIgbApIg3gXQAZgkAUglQAVgmAPgmQAQgnALgnQAKgoAGgoIA5AJQgaBxgQAtIAAHCgAh3EgIAAg5ICuAAIAAjTIi+AAIAAg4IC+AAIAAi1IiXAHIgIg6QAlAACNgIIBtgLQA5gHAkgIIALA5QhUAOhYAKIAAC5IDFAAIAAA4IjFAAIAADTIC7AAIAAA5g");
	this.shape_14.setTransform(-68.6,-45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AkxEDQA2gHAxgMQAwgMAqgPIANA4QhYAZhtAVgABrENIANg3IBiATIBfAaIgSA2Qh+gjg+gJgAjhDPQgGAAgBgIIAAj7QABgGAGAAIHEAAQAIAAAAAGIAAD7QAAAIgIAAgAixCdIACADIFhAAIACgDIAAgZIllAAgAixBXIFlAAIAAgbIllAAgAixgKIAAAaIFlAAIAAgaIgCgCIlhAAQAAAAgBAAQgBABAAAAQAAAAAAAAQAAABAAAAgAk4haIAAgxIEbAAIAAgcIjYAAIAAgsIDYAAIAAgdIj+AAIAAgvID+AAIAAgbIA4AAIAAAbID8AAIAAAvIj8AAIAAAdIDXAAIAAAsIjXAAIAAAcIEZAAIAAAxg");
	this.shape_15.setTransform(-135.5,-44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.9,-80.3,749.8,160.6);


(lib.Tween37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjVD8QBKgEAqgEIA/gNQAigHAbgMQAggNAbgSQAegTAYgZQAZgbATgiQAUglAMgrIA6ARQgLAjgQAfQgQAhgWAcIgxA2QgeAbgmAWQglAUguAPQgsAPg2AIQg1AJg8ACgAh4CrIAAg7QAzAOAcAAQAWAAAIgJQAGgFAAgNIAAicIkoAAIAAg5IBzAAIAAikIA6AAIAACkIB7AAIAAjFIA4AAIAAA/IC8AAIAAA6Ii8AAIAABMIEBAAIAAA5IkBAAIAACrQAAANgEALQgEAOgJAKQgLAKgPAGQgQAHgXAAQgkAAg1gOgAkzCMQAggVA4g0QAagaArhAIAxAeQg1BNgcAcQg3A1gdARg");
	this.shape.setTransform(338.7,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak4EKQAagNASgLQARgNALgNQAKgOAFgRQAEgRABgXIAAhXQgBgHgGAAIhJAAIAAg5IB7AAQAOAAAAANIAACeQALAZARARQAPAQAWAJQAbAMA8ADQBtAADXgHIgPBAIlBgEQgfgBgZgGQgbgGgUgKQgUgKgQgPQgPgOgKgSQgIAZgcAdQgdAdgeANgAg+DHQgTAAAAgUIAAk9IgmAsQgVgbgRgMQAbgcAlg2QAQgdAZhHIA1AWIgeBEIB9AAQAhg1ANghIA0AbIgdA7ICDAAIgFA0IiNAAIAABKICGAAIAAA0IiGAAIAABFICGAAIAAA1IiGAAIAABHICSAAIAAA1gAgaCLQAAAHAHAAIByAAIAAhHIh5AAgAgaAWIB5AAIAAhFIh5AAgAgaimIAABDIB5AAIAAhKIhyAAQgHAAAAAHgAk0h+IAggwQAZAMAbATIA5AsIgjAvQgqgihAgogAkbkCIAegxQBFAoApAhIgiAvQgqgghAgng");
	this.shape_1.setTransform(270.9,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ak6EEIAqgSQAQgKALgLQAOgOALglIAAh1QAAgIgHAAIhBAAIAAg5IBzAAQAOAAAAAOIAACgQAFAVASATQAJANAPAKQAOAKAVAHQARAFByAEQBCgBDHgHIgNBAIlAgBQgfgCgagGQgZgGgVgKQgVgJgQgOQgQgOgKgSQgKAXggAaQggAageALgAA4DfIAAifQglAtgkAiQgkAigkAWIgpgsQAvgbAogkQApgiAggqIiKAAQgHAAAAgIIAAipQAAgGAHgBICkAAIAAgvIixAAIAAg3ICxAAIAAgqIA3AAIAAAqIC4AAIAAA3Ii4AAIAAAvICnAAQAIABAAAGIAACpQAAAIgIAAIiPAAQAWAcA4AzQAeAZBHArIgsAnQgtgdgogiQgogigignIAACdgABvgjIB1AAIACgDIAAhLIgCgCIh1AAgAg8hxIAABLIACADIByAAIAAhQIhyAAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAABABgAkzhzIAegxQBGAoAoAhIgiAvQgqghhAgmgAkmj7IAegzQAZAMAdASIA9AqIghAxQhCgygugUg");
	this.shape_2.setTransform(203.1,44.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABJBbQgMAjgQAgQgQAfgVAbQgVAcgZAZQgbAYgeAUIgtgrQAigSAdgZQAcgZAVgfQAWgeAOgjQAPglAIgqIiVAAIAAg4ICdAAIACgrIAAhtIhxAAIAAg6IBxAAIAAhIIA6AAIAABIICbAAQAPAAAAAOIAADEIAvAAIAAA5IjNAAQAKAjARAiQASAhAZAfQAZAfAhAdQAhAdApAaIgwAnQiWhygqhugABig6IADAdIBuAAIAAiRQAAgHgIAAIhpAAgAjhE5IAApzIA6AAIAAJzgAk7A6QAKhOAGiLIgBgnIAzACQAABKgEBDQgEBAgHA4gAiUi6IAzgKIASCNIgzAGg");
	this.shape_3.setTransform(135.5,44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_4.setTransform(67.8,44.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACpE4IAAgYIlMAAIAAAYIg2AAIAAjnQgCgJAKAAIGlAAQAMAAAAALIAADlgAijDwIFMAAIAAgkIlMAAgAijB+IAAAfIFMAAIAAgfQAAgHgJAAIk7AAQgJAAABAHgAj9AmQgIAAAAgHIAAifQAAgGAIAAIH5AAQAHAAAAAGIAACfQAAAHgHAAgAClgzIgaApIBBAAIADgDIAAhGIgDgCIiyAAIAABLIAvAAQAhgrAOgbgAhKgKIAxAAIAAhLIi2AAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIAABGIACADIBLAAIgaguIAugZQAVAeARApgAB0jGIAAAkIjlAAIAAgkQhvAhhGAOIgTg2QA3gIAwgKQAvgLAogNQAlgNAegQQAegRAVgSIAuAUIgEAFQArAWBbAfQAuAOBhAQIgUA2QhugahEgXgABSjUIhTgpQghAVgtAUIChAAg");
	this.shape_5.setTransform(0,44.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjEE4IAAj4IhSBLIglgxQAngdAhgdQAggdAbgbQAageAVgdQAUgeAOgeIAAgEQAAgFgJAAIi0AAIAAg6IBiAAIAAhlIA6AAIAABlIBNAAIAfAZQgQAtgWAoQgUAngaAjQAnAiBJBOIgrArQg6hHgmgoIAAEmgAgmEjIAAg5ICWAAIAAllIhvAAIAAg6IBvAAIAAiBIA8AAIAACBIB+AAIAAA6Ih+AAIAAFlICQAAIAAA5g");
	this.shape_6.setTransform(-68,44.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhvElQgjgKgogTIALg7QA/AmA6ACQAdgBAUgJQAPgJAKgPQAMgSABghQgGh0hciMIAjAAIDEiJIABgEIgEgEIm+AAIAAg9IIFAAIAyA8IkDC1QATAkAOAkIAWBBQAMApAEA2QAAAVgEASQgEAQgIAOQgOAZgYAPQgTAMgaAHQgUAEgUAAQggAAgkgKg");
	this.shape_7.setTransform(-135.2,44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AinECQAdgCAfgGQAkgHAXgLQgZgUgYgbQgXgagWggIAtgkQAZAmAaAcQAYAbAXAQQAVgVAMgiQAMgiABgtIizAAQgIAAAAgIIAAjHQAAgIAIAAICzAAIAAg+Ii8AAIAAg3IC8AAIAAguIA6AAIAAAuIDJAAIAAA3IjJAAIAAA+IC2AAQAJAAAAAIIAADHQAAAIgJAAIi3AAQgFA/gIAbQgUAygPAVQAiAJAwAEQAyAGA/AAIBDgBIgIBCQiBgFgygHIhFgOQgegIgYgKQgZAQglAMQgmANgwAIgABpALICCAAIADgEIAAhjQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIiCAAgAhShcIAABjQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAICAAAIAAhpIiAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABgAjzEyIAAlLIgTAbIg3gWQAXghATgjQATgkAOgkQAOgmAJgmQAKgnAFgoIA5AJQgXBxgQAsIAAHHg");
	this.shape_8.setTransform(-203.6,44.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjyE2IAAlUIgSAeIg4gXQAXgiARgjQASgjAMgkQAOgkAJglQAIgkAEglIA5AHQgSBjgNAnIAAHagADEEvQhRgFghgIIglgJQgogQgbgYQgigkgLgWQgaBXgQAgIg6gOQARgkANglQANglAIglQAIgmADgnQAEgmgCgmIA7AAIgHBpQALAfAeAwQAMARAPAMQAPAMAQAJIAAkdIibAAQgHAAAAgJIAAjVQAAgIAHAAIF7AAQAKAAgBAIIAADVQABAJgKAAIimAAIAABsIC8AAIAAA6Ii8AAIAACIQAhAEAiAAICQAAIgQA8gAg5joIAABsQAAABAAABQAAAAABABQAAAAABABQAAAAABAAIESAAQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAgBIAAhsIgEgDIkSAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABg");
	this.shape_9.setTransform(-271.6,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ak4ENIAFgFQAVgVATgYQASgXAOgbQAQgaALgeQAMgeAIggIA3AQIgUBDQAZAiAeAXQAfAWAmAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDSAAIgNA5IixAAQg/gCgqgEQgwgGgigLQglgLgcgUQgcgTgWgeIgrA/QgWAegWAWgAjghFQgIAAAAgIIAAjbQAAgIAIAAIHEAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_10.setTransform(-339.2,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ACjEzIAAgpIlKAAIAAApIg4AAIAAkzQAAgIAKAAIGiAAQAIAAAEAJIAAEygAinDVIFKAAIAAg5IlKAAgAinAzIAAA3IFKAAIAAg3QgCgJgGAAIk5AAQgJABAAAIgAk2g2IAAg2ICqAAIgXhdIh3AAIAAg2ID9AAIAAg0IA5AAIAAA0ID8AAIAAA2Ih2AAIgbBdICwAAIAAA2gAhShsICdAAIAbhdIjOAAg");
	this.shape_11.setTransform(135.6,-44.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ACrE7IAAggInEAOIgGg0IBYgDIAAjFIg1AAQgGAagJARIgugVQAOgfAIglQAHgmAAgrIAAg4QAAgRARAAIECAAQARAAAAARIAABXQAAAUgSAAIjlAAIgEAeIIeAAIAAAuIhMAAIAAEOgAiTDxIE+gLIAAgfIk+AAgAiTCeIE+AAIAAgiIk+AAgAiTBTIE+AAIAAgmIk+AAgAhxhMIBEAAQAHAAAAgHIAAgVQAAgGgIAAIhDAAgAjthoIAAAcIBNAAIAAgiIhGAAQgHAAAAAGgADZgUQgXgGgggLIglAPQgRAGgWAEIg0ACIgQgtQA0AAAhgLIgwgfIAVghIgiAAIAAgsIDXAAIAjAWIABAAIgCACQgPAYgTAVQgUAUgWAQQAoAIA5gBIgPA0QgpgCgngIgACbhZIA9gpIiCAAQAlAaAgAPgAASjYQAbgNAIgJQANgOAAgbQAAgSACgHIAIgDICPAAIAHADIADAHIAAAuIADAQQADAEAPACIAPgEQAEgBABgKIACgYIAqAIIgGAuQgDAMgOAJQgMAIgLgBIgnAAQgVAAgNgOQgLgNABgQIAAgaQgBgHgGAAIg+AAQgGAAAAAGQgEAagQAVQgQAUgcANgAkOiwIAAgqIBxAAIAAgZIiJAAIAAguICJAAIAAgaIA0AAIAAAaIB2AAIAAAuIh2AAIAAAZIBoAAIAAAqg");
	this.shape_12.setTransform(67.8,-44.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_13.setTransform(0,-45.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ADnE2IAAgeInMAAIAAAeIg9AAIAAoKQAAgTAVgBIDyAAIAAhOIA6AAIAABOIDvAAQAVABAAATIAAIKgAAfDfIDIAAIAAiwIjIAAgAjlDfIDKAAIAAiwIjKAAgAAfgJIDIAAIAAicQAAgJgIAAIjAAAgAjlilIAACcIDKAAIAAilIjDAAQgIAAABAJg");
	this.shape_14.setTransform(-68,-45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADYE3IAAgcImvAAIAAAcIg6AAIAAoLQAAgUAUAAIDCAAQAVgyAJgcIA1AUQgIAdgNAdID7AAQAUAAAAAUIAAILgAjXDhIGvAAIAAhYImvAAgAjXBQIGvAAIAAhiImvAAgAjXimIAABaIGvAAIAAhaQAAgIgIAAImfAAQgKAAACAIg");
	this.shape_15.setTransform(-135.8,-45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.9,-80.3,749.8,160.6);


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADjEnIAAgXIjOAAIAAAXIg2AAIAAjdQgBgKAKAAIEnAAQALAAAAAMIAADbgAAVB/IAABaIDOAAIAAhaQAAgIgHAAIjAAAQgIAAABAIgAkiElIAAjIQAAgRARAAICwAAQASAAAAARIAACdQAAATgTAAIiJAAIAAAYgAjrCJIAABQIBaAAQALAAAAgMIAAhEQAAgIgJAAIhUAAQgIAAAAAIgAkbAhIAAgzIC4AAIAAAzgAg5ARIAAgzIBMAAIAPhdIhCAAIAAg1IBKAAIALg9IheAAIAAg1IFFAAIAAA1IivAAIgKA9ICaAAQAOAAAAANIAACFIArAAIAAAzgABLgiICJAAIAAhXQAAgGgHAAIhzAAgAkbg6IAAg0IC4AAIAAA0gAk1iXIAAg1IDqAAIAAA1gAkbjxIAAg1ICzAAIAAA1g");
	this.shape.setTransform(339.3,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkoEwIAAjoQAAgRASAAIC6AAQASAAAAARIAAC4QAAATgTAAIiUAAIAAAdgAjxB1IAABpIBlAAQALAAAAgLIAAheQAAgJgJAAIheAAQgJAAAAAJgADuEvIAAgXIjKAAIAAAXIg2AAIAAkNQgBgJAKAAIBxAAIAAhpIiPAAIAAg3ICPAAIAAhYIh8AGIgIg2QA/gCBwgJQBNgIA9gNIAJA2QgvAKhNAJIgIACIAABdICSAAIAAA3IiSAAIAABpIB4AAQALAAAAALIAAELgAAkBYIAACKIDKAAIAAiKQAAgIgIAAIi6AAQgJAAABAIgAkaAZIAAgzIDEAAIAAAzgAkag9IAAg0IDEAAIAAA0gAkziQIAAg3ID3AAIAAA3gAkajoIAAg3IDEAAIAAA3g");
	this.shape_1.setTransform(270.9,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_2.setTransform(203.4,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjPE4IAAkaIhhALQgDgagKgaIApgFQAcgbAfgqQgYgZgZgUQgZgVgbgPIAcgwIAbATQAbgsAkhIIAvAcQgmBHggAwIAmAjIAgg7QAOgfAJgcIA0ARQgXA8gVAiQgwBHghAnIBMgKIgOgnIAzgQQAfBRANAuIg1ANIgJgfIguAFIAAEhgACQE2QgUgBgRgQQgUgSAAgYIAAhvIhbAAQgOAAgHgHQgGgHAAgPIAAjzIA4AAIAADNQAAAJAJAAIA1AAIAAkKIiBAGIgIg5ICJgHIAAg/IA5AAIAAA6QA+gHBPgNIALA5QhMANhMAJIAAEOIA7AAQALAAAAgJIAAjNIA5AAIAADzQAAAdgcAAIhjAAIAABPQAAAMAHAJQAJAKAQACIA6AAQAJAAAJgHQAFgDAFhPIA5ALIgJBQQgEAcgFAEQgWAYgTAAgAk9EHIAWhjQAJgwACgnIAyAJQgUCMgMAygAiCBaIAygPIAlCsIgzALg");
	this.shape_3.setTransform(135.5,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbEvIAAhnIkYAAIAAg1IEYAAIAAgnIjdAAQgOAAAAgOIAAjRQAAgNAOAAIHvAAQAOAAAAANIAADRQAAAOgOAAIjaAAIAAAnIEXAAIAAA1IkXAAIAABngAAdA7ICvAAIACgEIAAgnIixAAgAjPA3QAAABAAAAQAAABAAAAQABABAAAAQABAAAAABICyAAIAAgrIi0AAgAAdghICxAAIAAgrQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIivAAgAjPhMIAAArIC0AAIAAguIiyAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABgAAkiiQgGAAAAgIIAAh9QAAgHAGAAIDoAAQAIAAAAAHIAAB9QAAAIgIAAgABSj9IAAApIADADICIAAIADgDIAAgpIgDgCIiIAAQgBAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABgAkOiiQgGAAgBgIIAAh9QABgHAGAAIDoAAQAIAAAAAHIAAB9QAAAIgIAAgAjgj9IAAApIABADICKAAIACgDIAAgpIgCgCIiKAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_4.setTransform(67.8,45.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADUETIg5gmQgeAYgaARQgcAQgZAJIgkgtQAmgMAXgLQAWgLAZgTQgngngpg5IAqgdQAaAoAxA2QAvgwASg4QAAgKgNABIiuAAIAAguIDYAAIAcAWQgOAugNAgQgOAigRAVIgcAiIA0AeQAfAPAiAMIgiAtQgggOgegRgAg/EsIAAguIjpAZIgJgzIAsgFIAAj7IgzAAIAAg0IJxAAIAAA0IlBAAIAAFIgAjODZICPgQIAAgpIiPAAgAjOBwICPAAIAAgtIiPAAgAjOATICPAAIAAgvIiPAAgAjjhrQgOAAAAgOIAAirQAAgNAOAAIHFAAQAOAAAAANIAACrQAAAOgOAAgAi6idQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIFuAAIADgDIAAgbIlzAAgAi6kAIAAAZIFzAAIAAgZQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIluAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_5.setTransform(0,45.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkwEuIAAg8IEUAAIAAioIjvAAIAAg7IDvAAIAAiVIj+AAIAAg8IECAAQghgsgagXIAugoQAxA0AcAmIgWARIEIAAIAAA8Ij7AAIAACVIDtAAIAAA7IjtAAIAACoIESAAIAAA8g");
	this.shape_6.setTransform(-67.9,43.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ADCEgQgfgRgagWQgbgXgWgdQgXgegSgjQgTgjgPgqIjRAAIAACrQBlgTBigcIARA7QhaAag2AMQhxAUg/AHIgOg6IA9gIIAAoLQAAgSARAAIHdAAQASAAAAASIAACvQAAASgSAAIjRAAIAWBbIDnAAIAAA5IjVAAQANAiAWAiQAVAgAZAbQAYAZAWAPQAWAQAOAAQARAAADgSQAHgogCgtIA3AQIgIBNQgFAegIAOQgKAUgMAHQgKAGgQAAQgYAAgcgRgAgDgCIgXhbIiqAAIAABbIDBAAgAjEjoIAABSIGFAAQAIAAAAgJIAAhJQAAgOgOAAIlxAAQgOAAAAAOg");
	this.shape_7.setTransform(-135.6,45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkXD+IB5gNIAAiFQhVA1gqATIgdg0QAmgNBEgnQAggVA6g3IjAAAIAAg2IEbAAIAAg1IjmAAIAAg3IDmAAIAAgxIkAAAIAAg3IEAAAIAAguIA3AAIAAAuID/AAIAAA3Ij/AAIAAAxIDkAAIAAA3IjkAAIAAA1IEaAAIAAA2IkPAAQAEAiAMAfQANAeAVAcIBHgxQAggZAVgWIAqAmQgWAZggAZQgeAZgnAZQAtAfAtAYQAuAaAvARIgpAvQhWgpgigWQg/gqgYgYQgRgTgOgTQgOgVgLgWQgKgVgGgaIgKg1IggAAIgxA4IgDAEIAACpQAygKBJgZIAWA4QhWAagzALQhsATg+AIg");
	this.shape_8.setTransform(-203.4,44.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ADgEwQgPgHgPgPQgggggagmQgaglgTgsQgUgsgNgyQgOgygJg9IibAKIgIg8ICcgJQgHg2gEh4IA6ADQACByAGA1IDVgNIAEA7IjRAOQAIAvAKApQALApANAjQAOAkARAeQARAdAVAXQAbAhAKAAQAGgBADgJQAGgbADhLIA5AQQgBA9gJApQgJAngQAQQgMAMgNABQgPAAgPgIgAjaE4IAAlJQgSAhgUAdIg5gYQA9hZAihgQAQguAThlIA8AJQgVBjgNAqIAAHZgAC7jgQgggYgcgOIAggwQAeAPAiAYQAiAYAlAeIgjAwg");
	this.shape_9.setTransform(-271.5,44.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ak4ENIAFgFQAVgVATgYQASgXAOgbQAQgaALgeQAMgeAIggIA3AQIgUBDQAZAiAeAXQAfAWAmAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDSAAIgNA5IixAAQg/gCgqgEQgwgGgigLQglgLgcgUQgcgTgWgeIgrA/QgWAegWAWgAjghFQgIAAAAgIIAAjbQAAgIAIAAIHEAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_10.setTransform(-339.2,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ak6EdIAng5IAgg7IAYg+IAQhAIA4AMQgcBngSArQgOAfgQAcQgRAcgSAYgADQE0IAAgfIkFAAIAAAfIg5AAIAAkfQgCgKALAAIFjAAQAMAAAAANIAAEcgAg1BOIAACOIEFAAIAAiOQABgJgKAAIj0AAQgJAAABAJgAkFguQgdgTgZgMIAfgyQAbAOAfAUIBAAvIgiAvgADqhSIlyAoIgQg6IA9gGQAXguAXg1QAUgxASg4IA1ATQgVBHgxBsIDkgYQgjg8gdgqIAwgcQA/BjBAB4IgyAXgAklj2IAdgyQAcANAjAVIBEAwIggAxQgzgmhNgrg");
	this.shape_11.setTransform(135.5,-44.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjSE6IAAkhIhcAMQgDgYgKgZIAggGQAhgfAigqIgzgrQgagTgZgNIAYgvQAFAAARANQAig0Agg+IArAdQglBCghAwIAvAmIAig6QAOgdAKgdIAxASQgXA6gXAjQgzBGgkAoIBagNIgPgrIAzgOIAnCEIgyAKIgJgjIgxAIIAAEpgAhZEQQAdgQAWgVQAWgWAPgbQAOgcAIghQAIgiABgnIAAgvIhAAFIgQg3IAugEQAaguAyhoIiAAAIAAg0ICPAAIAAg8IA5AAIAAA8ICiAAIAAA0IivAAQgnBZgfA4ICpgPQgPghgUghIAwgZQAUAjATAqQAUArARAyIgxAWIgSgxIgzAHIAADxQgBAPASACIAhAAQAEgBADggIAFg+IA1AQQgCA2gGAeQgFAggKAGQgOALgWAAIhUAAQgNgBgHgGQgHgIAAgMIAAkZIg9AGIAAA0QAAAqgIAnQgJAlgQAhQgRAhgaAbQgYAbghAXgAk7EKIAShmQAIgzACgsIAzAIQgMBkgRBlgAiCBRIAygPIAgCVIgzAKg");
	this.shape_12.setTransform(67.6,-44.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_13.setTransform(0,-45.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ADCEgQgfgRgagWQgbgXgWgdQgXgegSgjQgTgjgPgrIjRAAIAACsQBlgTBigcIARA7QhaAag2AMQhxAUg/AHIgOg6IA9gIIAAoLQAAgSARAAIHdAAQASAAAAASIAACvQAAATgSgBIjRAAIAWBbIDnAAIAAA4IjVAAQANAjAWAiQAVAgAZAbQAYAaAWAOQAWAQAOAAQARAAADgSQAHgogCgtIA3AQIgIBNQgFAegIAOQgKAUgMAHQgKAGgQAAQgYAAgcgRgAgDgCIgXhbIiqAAIAABbIDBAAgAjEjoIAABSIGFAAQAIAAAAgJIAAhJQAAgOgOAAIlxAAQgOAAAAAOg");
	this.shape_14.setTransform(-67.8,-44.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ACyDoQghgigcgiQgbgjgWglQgWglgSgmQgRgmgLgoQgXBNgQAiQgiBEgVAeQgtA7gdAbQg9A0gkAZIgtgsQAigTAegXQAdgXAagaQAagbAVgeQAWgeARgiQARgiAPgkQAMgmAKgpQAJgqAFgtQAFgtACgwIAAglIA6AAIAAA+IABAAQADBNAIAoQATBTAVAsQAPAhAVAhQAWAjAcAjQAcAkAkAjQAkAlAtAkIgzAlg");
	this.shape_15.setTransform(-135.7,-44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.9,-80.3,749.8,160.6);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADjEnIAAgXIjOAAIAAAXIg2AAIAAjdQgBgKAKAAIEnAAQALAAAAAMIAADbgAAVB/IAABaIDOAAIAAhaQAAgIgHAAIjAAAQgIAAABAIgAkiElIAAjIQAAgRARAAICwAAQASAAAAARIAACdQAAATgTAAIiJAAIAAAYgAjrCJIAABQIBaAAQALAAAAgMIAAhEQAAgIgJAAIhUAAQgIAAAAAIgAkbAhIAAgzIC4AAIAAAzgAg5ARIAAgzIBMAAIAPhdIhCAAIAAg1IBKAAIALg9IheAAIAAg1IFFAAIAAA1IivAAIgKA9ICaAAQAOAAAAANIAACFIArAAIAAAzgABLgiICJAAIAAhXQAAgGgHAAIhzAAgAkbg6IAAg0IC4AAIAAA0gAk1iXIAAg1IDqAAIAAA1gAkbjxIAAg1ICzAAIAAA1g");
	this.shape.setTransform(339.3,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkoEwIAAjoQAAgRASAAIC6AAQASAAAAARIAAC4QAAATgTAAIiUAAIAAAdgAjxB1IAABpIBlAAQALAAAAgLIAAheQAAgJgJAAIheAAQgJAAAAAJgADuEvIAAgXIjKAAIAAAXIg2AAIAAkNQgBgJAKAAIBxAAIAAhpIiPAAIAAg3ICPAAIAAhYIh8AGIgIg2QA/gCBwgJQBNgIA9gNIAJA2QgvAKhNAJIgIACIAABdICSAAIAAA3IiSAAIAABpIB4AAQALAAAAALIAAELgAAkBYIAACKIDKAAIAAiKQAAgIgIAAIi6AAQgJAAABAIgAkaAZIAAgzIDEAAIAAAzgAkag9IAAg0IDEAAIAAA0gAkziQIAAg3ID3AAIAAA3gAkajoIAAg3IDEAAIAAA3g");
	this.shape_1.setTransform(270.9,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_2.setTransform(203.4,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjPE4IAAkaIhhALQgDgagKgaIApgFQAcgbAfgqQgYgZgZgUQgZgVgbgPIAcgwIAbATQAbgsAkhIIAvAcQgmBHggAwIAmAjIAgg7QAOgfAJgcIA0ARQgXA8gVAiQgwBHghAnIBMgKIgOgnIAzgQQAfBRANAuIg1ANIgJgfIguAFIAAEhgACQE2QgUgBgRgQQgUgSAAgYIAAhvIhbAAQgOAAgHgHQgGgHAAgPIAAjzIA4AAIAADNQAAAJAJAAIA1AAIAAkKIiBAGIgIg5ICJgHIAAg/IA5AAIAAA6QA+gHBPgNIALA5QhMANhMAJIAAEOIA7AAQALAAAAgJIAAjNIA5AAIAADzQAAAdgcAAIhjAAIAABPQAAAMAHAJQAJAKAQACIA6AAQAJAAAJgHQAFgDAFhPIA5ALIgJBQQgEAcgFAEQgWAYgTAAgAk9EHIAWhjQAJgwACgnIAyAJQgUCMgMAygAiCBaIAygPIAlCsIgzALg");
	this.shape_3.setTransform(135.5,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbEvIAAhnIkYAAIAAg1IEYAAIAAgnIjdAAQgOAAAAgOIAAjRQAAgNAOAAIHvAAQAOAAAAANIAADRQAAAOgOAAIjaAAIAAAnIEXAAIAAA1IkXAAIAABngAAdA7ICvAAIACgEIAAgnIixAAgAjPA3QAAABAAAAQAAABAAAAQABABAAAAQABAAAAABICyAAIAAgrIi0AAgAAdghICxAAIAAgrQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIivAAgAjPhMIAAArIC0AAIAAguIiyAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABgAAkiiQgGAAAAgIIAAh9QAAgHAGAAIDoAAQAIAAAAAHIAAB9QAAAIgIAAgABSj9IAAApIADADICIAAIADgDIAAgpIgDgCIiIAAQgBAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABgAkOiiQgGAAgBgIIAAh9QABgHAGAAIDoAAQAIAAAAAHIAAB9QAAAIgIAAgAjgj9IAAApIABADICKAAIACgDIAAgpIgCgCIiKAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_4.setTransform(67.8,45.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADUETIg5gmQgeAYgaARQgcAQgZAJIgkgtQAmgMAXgLQAWgLAZgTQgngngpg5IAqgdQAaAoAxA2QAvgwASg4QAAgKgNABIiuAAIAAguIDYAAIAcAWQgOAugNAgQgOAigRAVIgcAiIA0AeQAfAPAiAMIgiAtQgggOgegRgAg/EsIAAguIjpAZIgJgzIAsgFIAAj7IgzAAIAAg0IJxAAIAAA0IlBAAIAAFIgAjODZICPgQIAAgpIiPAAgAjOBwICPAAIAAgtIiPAAgAjOATICPAAIAAgvIiPAAgAjjhrQgOAAAAgOIAAirQAAgNAOAAIHFAAQAOAAAAANIAACrQAAAOgOAAgAi6idQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIFuAAIADgDIAAgbIlzAAgAi6kAIAAAZIFzAAIAAgZQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIluAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_5.setTransform(0,45.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkwEuIAAg8IEUAAIAAioIjvAAIAAg7IDvAAIAAiVIj+AAIAAg8IECAAQghgsgagXIAugoQAxA0AcAmIgWARIEIAAIAAA8Ij7AAIAACVIDtAAIAAA7IjtAAIAACoIESAAIAAA8g");
	this.shape_6.setTransform(-67.9,43.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ADCEgQgfgRgagWQgbgXgWgdQgXgegSgjQgTgjgPgqIjRAAIAACrQBlgTBigcIARA7QhaAag2AMQhxAUg/AHIgOg6IA9gIIAAoLQAAgSARAAIHdAAQASAAAAASIAACvQAAASgSAAIjRAAIAWBbIDnAAIAAA5IjVAAQANAiAWAiQAVAgAZAbQAYAZAWAPQAWAQAOAAQARAAADgSQAHgogCgtIA3AQIgIBNQgFAegIAOQgKAUgMAHQgKAGgQAAQgYAAgcgRgAgDgCIgXhbIiqAAIAABbIDBAAgAjEjoIAABSIGFAAQAIAAAAgJIAAhJQAAgOgOAAIlxAAQgOAAAAAOg");
	this.shape_7.setTransform(-135.6,45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkXD+IB5gNIAAiFQhVA1gqATIgdg0QAmgNBEgnQAggVA6g3IjAAAIAAg2IEbAAIAAg1IjmAAIAAg3IDmAAIAAgxIkAAAIAAg3IEAAAIAAguIA3AAIAAAuID/AAIAAA3Ij/AAIAAAxIDkAAIAAA3IjkAAIAAA1IEaAAIAAA2IkPAAQAEAiAMAfQANAeAVAcIBHgxQAggZAVgWIAqAmQgWAZggAZQgeAZgnAZQAtAfAtAYQAuAaAvARIgpAvQhWgpgigWQg/gqgYgYQgRgTgOgTQgOgVgLgWQgKgVgGgaIgKg1IggAAIgxA4IgDAEIAACpQAygKBJgZIAWA4QhWAagzALQhsATg+AIg");
	this.shape_8.setTransform(-203.4,44.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ADgEwQgPgHgPgPQgggggagmQgaglgTgsQgUgsgNgyQgOgygJg9IibAKIgIg8ICcgJQgHg2gEh4IA6ADQACByAGA1IDVgNIAEA7IjRAOQAIAvAKApQALApANAjQAOAkARAeQARAdAVAXQAbAhAKAAQAGgBADgJQAGgbADhLIA5AQQgBA9gJApQgJAngQAQQgMAMgNABQgPAAgPgIgAjaE4IAAlJQgSAhgUAdIg5gYQA9hZAihgQAQguAThlIA8AJQgVBjgNAqIAAHZgAC7jgQgggYgcgOIAggwQAeAPAiAYQAiAYAlAeIgjAwg");
	this.shape_9.setTransform(-271.5,44.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ak4ENIAFgFQAVgVATgYQASgXAOgbQAQgaALgeQAMgeAIggIA3AQIgUBDQAZAiAeAXQAfAWAmAKIAAjEIkKAAIAAg2IJRAAIAAA2IkOAAIAABLIDlAAIAAA3IjlAAIAABMIBLADIDSAAIgNA5IixAAQg/gCgqgEQgwgGgigLQglgLgcgUQgcgTgWgeIgrA/QgWAegWAWgAjghFQgIAAAAgIIAAjbQAAgIAIAAIHEAAQAHAAAAAIIAADbQAAAIgHAAgAixh8IACADIFgAAIADgDIAAglIllAAgAixj6IAAAkIFlAAIAAgkIgDgCIlgAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_10.setTransform(-339.2,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ak6EdIAng5IAgg7IAYg+IAQhAIA4AMQgcBngSArQgOAfgQAcQgRAcgSAYgADQE0IAAgfIkFAAIAAAfIg5AAIAAkfQgCgKALAAIFjAAQAMAAAAANIAAEcgAg1BOIAACOIEFAAIAAiOQABgJgKAAIj0AAQgJAAABAJgAkFguQgdgTgZgMIAfgyQAbAOAfAUIBAAvIgiAvgADqhSIlyAoIgQg6IA9gGQAXguAXg1QAUgxASg4IA1ATQgVBHgxBsIDkgYQgjg8gdgqIAwgcQA/BjBAB4IgyAXgAklj2IAdgyQAcANAjAVIBEAwIggAxQgzgmhNgrg");
	this.shape_11.setTransform(135.5,-44.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjSE6IAAkhIhcAMQgDgYgKgZIAggGQAhgfAigqIgzgrQgagTgZgNIAYgvQAFAAARANQAig0Agg+IArAdQglBCghAwIAvAmIAig6QAOgdAKgdIAxASQgXA6gXAjQgzBGgkAoIBagNIgPgrIAzgOIAnCEIgyAKIgJgjIgxAIIAAEpgAhZEQQAdgQAWgVQAWgWAPgbQAOgcAIghQAIgiABgnIAAgvIhAAFIgQg3IAugEQAaguAyhoIiAAAIAAg0ICPAAIAAg8IA5AAIAAA8ICiAAIAAA0IivAAQgnBZgfA4ICpgPQgPghgUghIAwgZQAUAjATAqQAUArARAyIgxAWIgSgxIgzAHIAADxQgBAPASACIAhAAQAEgBADggIAFg+IA1AQQgCA2gGAeQgFAggKAGQgOALgWAAIhUAAQgNgBgHgGQgHgIAAgMIAAkZIg9AGIAAA0QAAAqgIAnQgJAlgQAhQgRAhgaAbQgYAbghAXgAk7EKIAShmQAIgzACgsIAzAIQgMBkgRBlgAiCBRIAygPIAgCVIgzAKg");
	this.shape_12.setTransform(67.6,-44.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgE2IAAgeIiLAAIAAAeIg5AAIAAoKQgBgIAKAAIBGAAIAehZIA2ATIgYBGIBlAAQANAAAAALIAAIHgAjrDeICLAAIAAihIiLAAgAjribIAACfICLAAIAAifQAAgIgJAAIh5AAQgKAAABAIgABlEuIhEgQIAAhEIBDAUQAdAHAUAAQAWAAAMgKQAQgMARglQAJgXAHhpQAEhGAAhnIgBgzQgCgQgHAAIigAAQgJAegMAcQgLAZgOAXIg3gTQATggAahEQALgjAKhJIA5AFIgIA6IDAAAQANADAEAEQAEAGAAAUQgBC8gDBNQgBAwgGAnQgFAngJAdQgKAegOAUQgOAVgRALQgKAGgOAEIghADQgYAAgfgGgABeAcQgTg1gYgzIA2gSIAxB+QAVA6AJAkIg3APQgPg6gUg3g");
	this.shape_13.setTransform(0,-45.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ADCEgQgfgRgagWQgbgXgWgdQgXgegSgjQgTgjgPgrIjRAAIAACsQBlgTBigcIARA7QhaAag2AMQhxAUg/AHIgOg6IA9gIIAAoLQAAgSARAAIHdAAQASAAAAASIAACvQAAATgSgBIjRAAIAWBbIDnAAIAAA4IjVAAQANAjAWAiQAVAgAZAbQAYAaAWAOQAWAQAOAAQARAAADgSQAHgogCgtIA3AQIgIBNQgFAegIAOQgKAUgMAHQgKAGgQAAQgYAAgcgRgAgDgCIgXhbIiqAAIAABbIDBAAgAjEjoIAABSIGFAAQAIAAAAgJIAAhJQAAgOgOAAIlxAAQgOAAAAAOg");
	this.shape_14.setTransform(-67.8,-44.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ACyDoQghgigcgiQgbgjgWglQgWglgSgmQgRgmgLgoQgXBNgQAiQgiBEgVAeQgtA7gdAbQg9A0gkAZIgtgsQAigTAegXQAdgXAagaQAagbAVgeQAWgeARgiQARgiAPgkQAMgmAKgpQAJgqAFgtQAFgtACgwIAAglIA6AAIAAA+IABAAQADBNAIAoQATBTAVAsQAPAhAVAhQAWAjAcAjQAcAkAkAjQAkAlAtAkIgzAlg");
	this.shape_15.setTransform(-135.7,-44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.9,-80.3,749.8,160.6);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4EbQgQgRAAgZQABgdARgRQAQgPAYAAQAYAAAPARQAQAQAAAbQAAAZgPAQQgQASgaAAQgYAAgQgQgAg5B4IgDgpQAAghAQgeQAQgfAjgiQAqgmAPgTQAUgbAAgZQAAgQgHgNQgGgMgNgKQgPgJgVgFQgVgFgbAAQggAAgjAIQgfAIgXANIgbg/QAigQAngKQAsgKAsAAQAwAAAlALQAjAKAYATQAWARALAYQALAWAAAZQgBAXgHAUQgHAUgNASQgVAcgwApQgfAagOAaQgOAaAAAdIADAhg");
	this.shape.setTransform(266,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjxFdIAAkmIg1AwIg2guQAjgbAfgfQAggeAcgjQAcgiAYglQAYglAVgoIjOAAIAAhBIDnAAIAXhFIBAAWIgQAvIFzAAIAABBImNAAIgNAdQgUAogbApQgcArgiAsIAAFugAiCFLIAAhBIDGAAIAAjlIi3AAIAAg/IC3AAIAAh8IBEAAIAAB8IC/AAIAAA/Ii/AAIAADlIDVAAIAABBg");
	this.shape_1.setTransform(189.3,49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADFaQgegGgigMIABhJQAnASAfAJQAeAJAXAAQASAAANgIQAMgGAJgNQALgVAAgiQAAgigNgwIj9AAIAAhBIDmAAQgVgugagsIAfAAIBUhFIACgGIgGgCIjeAAIAAg+IE+AAIAzAuIilB/IAZA4IC/AAIAABBIisAAQAOA8AAAnQAAAagGAXQgJAXgPARQgRASgYAKQgbAKgiAAQgbAAgggHgAj2FbIAAkyIgyAsIg3guIA3gsQAjgeAcgeQAjglAYglQAcgsAOgrIjGAAIAAhAIDYAAIAPg+IBCAMIgKAyIF6AAIAABAImLAAQgOAugcAzQguBKghAjIAAFvg");
	this.shape_2.setTransform(113.7,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_3.setTransform(38,49.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AlaFDIAAhAIBiAAIAAmYIBEAAIAAGYICkAAIAAoEIkrAAIAAhBIJ7AAIAABBIkNAAIAADQIEBAAIAABAIkBAAIAAD0IEoAAIAABAg");
	this.shape_4.setTransform(-38.2,50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADSE+Qg5gPg1gHIAPg+QBfATCLAmIgWA9Qg7gUg6gOgAlcEfQBMgJA/gOQA8gNAsgSIAZA7QgwASg+APQg+AOhMAKgAlUDjIAAg7IBcAAIAAlrQAAgWAVAAIDJAAIAAgpIktAAIAAg7IEtAAIAAgiIA/AAIAAAiIEsAAIAAA7IksAAIAAApIDPAAQAWAAAAAWIAAFrIBRAAIAAA7gAi4CoIGBAAIAAgnImBAAgAi4BMIGBAAIAAgqImBAAgAi4gSIGBAAIAAgqImBAAgAi4iVIAAAkIGBAAIAAgkQAAgJgJAAIlvAAQgJAAAAAJg");
	this.shape_5.setTransform(-114.5,50.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ADVFSIAAglImcAAIAAAlIhEAAIAAkpQgBgLAMAAIDhAAIAAi7QhaBBgwAbQhjAzg1ASIgfg8IBbggQAjgOAhgTIBCgpQAsgfBThPIlJAAIAAhBIKPAAIAABBIjzAAIgzA3IAAD3IDqAAQAPAAAAAOIAAEmgAjHBoIAACFIGcAAIAAiFQAAgKgKAAImIAAQgMAAACAKgAC3hMQg7glgwgVIAag7QA3AXA/AnQA+AkBHA0IgnA2QhHgzg8gkg");
	this.shape_6.setTransform(-190,50.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AleEuIAFgHQAYgXAVgaQAUgaARgfQAQgdAOghQANgiAIgjIA+ARIgWBLQAbAmAjAZQAjAaAqALIAAjcIkqAAIAAg8IKYAAIAAA8IkvAAIAABUIECAAIAAA+IkCAAIAABVIBVADIDtAAIgRBBIjFAAQhHgCgwgGQg1gGgmgMQgqgOgegVQghgWgZghIgvBHQgYAhgZAYgAj8hNQgIAAAAgJIAAj3QAAgHAIgBIH7AAQAIABAAAHIAAD3QAAAJgIAAgAjHiKIADACIGLAAIADgCIAAgrImRAAgAjHkYIAAApIGRAAIAAgpIgDgCImLAAQgBAAgBAAQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_7.setTransform(-266.1,50.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ADfFfIAAgjIlrAAIAAAjIhAAAIAAkiIh0AYIgag9QBKgNBIgSQBHgSBFgYIBAggIlVAAIAAg9IEcAAIAAhJIjUAAIAAg9IDUAAIAAhKIBAAAIAABKIDEAAIAAAaIBDhMIAyApQhWBlgsAqICZAAIAAA9IjjAAQhcA6g3AaIEtAAQAOAAAAAMIAAFQgAiMD+IFrAAIAAg+IlrAAgAiMBIIAAA7IFrAAIAAg7QAAgHgKgBIlYAAQgKABABAHgAALiOIBYAAIAggbIAsguIikAAg");
	this.shape_8.setTransform(227.5,-50.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfEuQAdgJAagOQAcgNAZgSIAxgoIAsguQgTg9gPhFQgOhDgKhLInGAAIAAg7IDCAAIAAg/IieAAIAAg6ICeAAIAAhAIA9AAIAABAICMAAIAAA6IiMAAIAAA/IDAAAQgJhAgHhyIA/AHQACA+ALBtIC0AAIAAA7IisAAQAWCUAQA6QARggAPguQAOgvALg7IA7ARQgWBZgQApQgiBNgVAiIAWBDQAOAfAEAAQAQAAADh0IA7ARQgDAygIAoQgJAmgNAZQgQAZgVAAQgQAAgQgNIgSgRQgYgpgRgwQg1A1gfAWQhBAnglANgAlPEfIBogQIAAiBQgvAfgsAQIgdg4QAzgUApgcQArgdAfgkIiKAAIAAg6ICtAAIAAg2IBBAAIAAA2ICWAAIAAA6IiqAAQgcAmglAlIAACiQA7gRAtgTIAZA4Qg2AUhGASQhEARhSAOgAiSB4IAogsIAxAqQAzgsAggmIApAqQgeAkgyAuIA2A8IgpApQhUhfg+gugADJkrIA1gnQAkAnAlBCIg3AkQgZgtgug5g");
	this.shape_9.setTransform(152,-50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABqFMIgDhJQAnAOA1AHQBKAAANh6QAHh4AAg6QAAghgBgKQgDgPgHAAIi8AAIAAArIB6AAQAJAAAAAIIAACUQAAAJgWAAQARAgAcBZIg4ATIgLgjQjOAahVAEIgKhBICcgLIAAg7Ih8AAQgJAAAAgJIAAiUQAAgIAJAAIB8AAIAAgrIhhAAQgMAQgbAaIgwgqQA1grAbg2IgrAAQgIAAAAgJIAAiXQAAgJAIAAIG8AAQAJAAAAAJIAACXQAAAJgJAAIlSAAIgQAlIFfAAQAOAAAHAMQAEAJAAAzIgGDCQgGBngUAqQgQAigbATQgOAKgSAFQgSAFgXAAQgpAAg4gOgABaC3IBAgJIgMgcIAogQIhcAAgABaBKIBGAAIADgDIAAgwIgDgDIhGAAgAgqAXIAAAwIACADIBIAAIAAg2IhIAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAABABgADLjmIBHAAIADgDIAAg1IgDgCIhHAAgABIjmIBJAAIAAg6IhJAAgAg9keIAAA1IACADIBJAAIAAg6IhJAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAgAlTFFIAAhEQAzAQAXAAQASAAAMgRQALgQAIgiQAIgjADglQAEgogBgqIg2A3QgZAXgXAOIgsguQAqgaAjgiQAigiAbgoQgGgmgVhCQgbAkgiAhIg0gkQAxgwAhgwQgSggg4g+IA1glQAhAiAYAmQASgjASgwIA5AWQgbBFgeA0QAaA7AMAxQAKAuAFAtQAFAqAAArQgFBrgRA3QgPAugUAZQgMAPgOAHQgOAIgRAAQgegBg5gTg");
	this.shape_10.setTransform(75.5,-49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_11.setTransform(0,-50.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag1FQIAApcIkgAAIAAhDIKrAAIAABDIlIAAIAABaQBLAuBIAyQBJAxBFA1IgqA9QiXh3hghCIAAG4g");
	this.shape_12.setTransform(-76.1,-48.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AlVFTIAAhEIE1AAIAAi8IkLAAIAAhCIELAAIAAinIkdAAIAAhDIEiAAQgmgxgcgaIAzguQA4A7AeArIgYATIEnAAIAABDIkZAAIAACnIEKAAIAABCIkKAAIAAC8IE0AAIAABEg");
	this.shape_13.setTransform(-152.1,-51.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ADZFDQgigTgegZQgdgZgaghQgZghgVgoQgUgogRgvIjqAAIAADBQBxgWBugfIATBCQhmAeg8AMQh+AXhHAIIgQhBIBEgKIAApKQAAgUAUAAIIWAAQAUAAAAAUIAADEQAAAVgUAAIjrAAIAaBmIEDAAIAAA/IjvAAQAOAnAaAnQAWAjAcAeQAbAdAZAQQAZASAPAAQATAAAEgUQAHgtgBgzIA9ATIgJBVQgGAhgIAQQgMAXgNAIQgLAHgSAAQgbAAgggTgAgDgCIgahmIi+AAIAABmIDYAAgAjbkEIAABcIGzAAQAJAAAAgKIAAhSQABgQgRAAImdAAQgPAAAAAQg");
	this.shape_14.setTransform(-228,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.1,-90,612.2,180);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4EbQgQgRAAgZQABgdARgRQAQgPAYAAQAYAAAPARQAQAQAAAbQAAAZgPAQQgQASgaAAQgYAAgQgQgAg5B4IgDgpQAAghAQgeQAQgfAjgiQAqgmAPgTQAUgbAAgZQAAgQgHgNQgGgMgNgKQgPgJgVgFQgVgFgbAAQggAAgjAIQgfAIgXANIgbg/QAigQAngKQAsgKAsAAQAwAAAlALQAjAKAYATQAWARALAYQALAWAAAZQgBAXgHAUQgHAUgNASQgVAcgwApQgfAagOAaQgOAaAAAdIADAhg");
	this.shape.setTransform(266,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjxFdIAAkmIg1AwIg2guQAjgbAfgfQAggeAcgjQAcgiAYglQAYglAVgoIjOAAIAAhBIDnAAIAXhFIBAAWIgQAvIFzAAIAABBImNAAIgNAdQgUAogbApQgcArgiAsIAAFugAiCFLIAAhBIDGAAIAAjlIi3AAIAAg/IC3AAIAAh8IBEAAIAAB8IC/AAIAAA/Ii/AAIAADlIDVAAIAABBg");
	this.shape_1.setTransform(189.3,49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADFaQgegGgigMIABhJQAnASAfAJQAeAJAXAAQASAAANgIQAMgGAJgNQALgVAAgiQAAgigNgwIj9AAIAAhBIDmAAQgVgugagsIAfAAIBUhFIACgGIgGgCIjeAAIAAg+IE+AAIAzAuIilB/IAZA4IC/AAIAABBIisAAQAOA8AAAnQAAAagGAXQgJAXgPARQgRASgYAKQgbAKgiAAQgbAAgggHgAj2FbIAAkyIgyAsIg3guIA3gsQAjgeAcgeQAjglAYglQAcgsAOgrIjGAAIAAhAIDYAAIAPg+IBCAMIgKAyIF6AAIAABAImLAAQgOAugcAzQguBKghAjIAAFvg");
	this.shape_2.setTransform(113.7,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_3.setTransform(38,49.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AlaFDIAAhAIBiAAIAAmYIBEAAIAAGYICkAAIAAoEIkrAAIAAhBIJ7AAIAABBIkNAAIAADQIEBAAIAABAIkBAAIAAD0IEoAAIAABAg");
	this.shape_4.setTransform(-38.2,50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADSE+Qg5gPg1gHIAPg+QBfATCLAmIgWA9Qg7gUg6gOgAlcEfQBMgJA/gOQA8gNAsgSIAZA7QgwASg+APQg+AOhMAKgAlUDjIAAg7IBcAAIAAlrQAAgWAVAAIDJAAIAAgpIktAAIAAg7IEtAAIAAgiIA/AAIAAAiIEsAAIAAA7IksAAIAAApIDPAAQAWAAAAAWIAAFrIBRAAIAAA7gAi4CoIGBAAIAAgnImBAAgAi4BMIGBAAIAAgqImBAAgAi4gSIGBAAIAAgqImBAAgAi4iVIAAAkIGBAAIAAgkQAAgJgJAAIlvAAQgJAAAAAJg");
	this.shape_5.setTransform(-114.5,50.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ADVFSIAAglImcAAIAAAlIhEAAIAAkpQgBgLAMAAIDhAAIAAi7QhaBBgwAbQhjAzg1ASIgfg8IBbggQAjgOAhgTIBCgpQAsgfBThPIlJAAIAAhBIKPAAIAABBIjzAAIgzA3IAAD3IDqAAQAPAAAAAOIAAEmgAjHBoIAACFIGcAAIAAiFQAAgKgKAAImIAAQgMAAACAKgAC3hMQg7glgwgVIAag7QA3AXA/AnQA+AkBHA0IgnA2QhHgzg8gkg");
	this.shape_6.setTransform(-190,50.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AleEuIAFgHQAYgXAVgaQAUgaARgfQAQgdAOghQANgiAIgjIA+ARIgWBLQAbAmAjAZQAjAaAqALIAAjcIkqAAIAAg8IKYAAIAAA8IkvAAIAABUIECAAIAAA+IkCAAIAABVIBVADIDtAAIgRBBIjFAAQhHgCgwgGQg1gGgmgMQgqgOgegVQghgWgZghIgvBHQgYAhgZAYgAj8hNQgIAAAAgJIAAj3QAAgHAIgBIH7AAQAIABAAAHIAAD3QAAAJgIAAgAjHiKIADACIGLAAIADgCIAAgrImRAAgAjHkYIAAApIGRAAIAAgpIgDgCImLAAQgBAAgBAAQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_7.setTransform(-266.1,50.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ADfFfIAAgjIlrAAIAAAjIhAAAIAAkiIh0AYIgag9QBKgNBIgSQBHgSBFgYIBAggIlVAAIAAg9IEcAAIAAhJIjUAAIAAg9IDUAAIAAhKIBAAAIAABKIDEAAIAAAaIBDhMIAyApQhWBlgsAqICZAAIAAA9IjjAAQhcA6g3AaIEtAAQAOAAAAAMIAAFQgAiMD+IFrAAIAAg+IlrAAgAiMBIIAAA7IFrAAIAAg7QAAgHgKgBIlYAAQgKABABAHgAALiOIBYAAIAggbIAsguIikAAg");
	this.shape_8.setTransform(227.5,-50.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfEuQAdgJAagOQAcgNAZgSIAxgoIAsguQgTg9gPhFQgOhDgKhLInGAAIAAg7IDCAAIAAg/IieAAIAAg6ICeAAIAAhAIA9AAIAABAICMAAIAAA6IiMAAIAAA/IDAAAQgJhAgHhyIA/AHQACA+ALBtIC0AAIAAA7IisAAQAWCUAQA6QARggAPguQAOgvALg7IA7ARQgWBZgQApQgiBNgVAiIAWBDQAOAfAEAAQAQAAADh0IA7ARQgDAygIAoQgJAmgNAZQgQAZgVAAQgQAAgQgNIgSgRQgYgpgRgwQg1A1gfAWQhBAnglANgAlPEfIBogQIAAiBQgvAfgsAQIgdg4QAzgUApgcQArgdAfgkIiKAAIAAg6ICtAAIAAg2IBBAAIAAA2ICWAAIAAA6IiqAAQgcAmglAlIAACiQA7gRAtgTIAZA4Qg2AUhGASQhEARhSAOgAiSB4IAogsIAxAqQAzgsAggmIApAqQgeAkgyAuIA2A8IgpApQhUhfg+gugADJkrIA1gnQAkAnAlBCIg3AkQgZgtgug5g");
	this.shape_9.setTransform(152,-50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABqFMIgDhJQAnAOA1AHQBKAAANh6QAHh4AAg6QAAghgBgKQgDgPgHAAIi8AAIAAArIB6AAQAJAAAAAIIAACUQAAAJgWAAQARAgAcBZIg4ATIgLgjQjOAahVAEIgKhBICcgLIAAg7Ih8AAQgJAAAAgJIAAiUQAAgIAJAAIB8AAIAAgrIhhAAQgMAQgbAaIgwgqQA1grAbg2IgrAAQgIAAAAgJIAAiXQAAgJAIAAIG8AAQAJAAAAAJIAACXQAAAJgJAAIlSAAIgQAlIFfAAQAOAAAHAMQAEAJAAAzIgGDCQgGBngUAqQgQAigbATQgOAKgSAFQgSAFgXAAQgpAAg4gOgABaC3IBAgJIgMgcIAogQIhcAAgABaBKIBGAAIADgDIAAgwIgDgDIhGAAgAgqAXIAAAwIACADIBIAAIAAg2IhIAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAABABgADLjmIBHAAIADgDIAAg1IgDgCIhHAAgABIjmIBJAAIAAg6IhJAAgAg9keIAAA1IACADIBJAAIAAg6IhJAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAgAlTFFIAAhEQAzAQAXAAQASAAAMgRQALgQAIgiQAIgjADglQAEgogBgqIg2A3QgZAXgXAOIgsguQAqgaAjgiQAigiAbgoQgGgmgVhCQgbAkgiAhIg0gkQAxgwAhgwQgSggg4g+IA1glQAhAiAYAmQASgjASgwIA5AWQgbBFgeA0QAaA7AMAxQAKAuAFAtQAFAqAAArQgFBrgRA3QgPAugUAZQgMAPgOAHQgOAIgRAAQgegBg5gTg");
	this.shape_10.setTransform(75.5,-49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_11.setTransform(0,-50.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag1FQIAApcIkgAAIAAhDIKrAAIAABDIlIAAIAABaQBLAuBIAyQBJAxBFA1IgqA9QiXh3hghCIAAG4g");
	this.shape_12.setTransform(-76.1,-48.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AlVFTIAAhEIE1AAIAAi8IkLAAIAAhCIELAAIAAinIkdAAIAAhDIEiAAQgmgxgcgaIAzguQA4A7AeArIgYATIEnAAIAABDIkZAAIAACnIEKAAIAABCIkKAAIAAC8IE0AAIAABEg");
	this.shape_13.setTransform(-152.1,-51.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ADZFDQgigTgegZQgdgZgaghQgZghgVgoQgUgogRgvIjqAAIAADBQBxgWBugfIATBCQhmAeg8AMQh+AXhHAIIgQhBIBEgKIAApKQAAgUAUAAIIWAAQAUAAAAAUIAADEQAAAVgUAAIjrAAIAaBmIEDAAIAAA/IjvAAQAOAnAaAnQAWAjAcAeQAbAdAZAQQAZASAPAAQATAAAEgUQAHgtgBgzIA9ATIgJBVQgGAhgIAQQgMAXgNAIQgLAHgSAAQgbAAgggTgAgDgCIgahmIi+AAIAABmIDYAAgAjbkEIAABcIGzAAQAJAAAAgKIAAhSQABgQgRAAImdAAQgPAAAAAQg");
	this.shape_14.setTransform(-228,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.1,-90,612.2,180);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEDFcIAAghIoFAAIAAAhIhDAAIAApJQAAgXAXAAIEPAAIAAhXIBCAAIAABXIELAAQAYAAAAAXIAAJJgAAjD6IDgAAIAAjFIjgAAgAkCD6IDjAAIAAjFIjjAAgAAjgKIDgAAIAAivQgBgKgIAAIjXAAgAkCi5IAACvIDjAAIAAi5IjaAAQgKAAABAKg");
	this.shape.setTransform(341.9,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADyFdIAAggInkAAIAAAgIhAAAIAApMQAAgWAXABIDZAAQAXg4AKggIA7AXQgIAfgOAiIEYAAQAXgBAAAWIAAJMgAjyD9IHkAAIAAhjInkAAgAjyBZIHkAAIAAhuInkAAgAjyi7IAABlIHkAAIAAhlQAAgIgKAAInRAAQgKAAABAIg");
	this.shape_1.setTransform(265.9,49.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_2.setTransform(190,49.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlaFDIAAhAIBiAAIAAmYIBEAAIAAGYICkAAIAAoEIkrAAIAAhBIJ7AAIAABBIkNAAIAADQIEBAAIAABAIkBAAIAAD0IEoAAIAABAg");
	this.shape_3.setTransform(113.8,50.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADSE+Qg5gPg1gHIAPg+QBfATCLAmIgWA9Qg7gUg6gOgAlcEfQBMgJA/gOQA8gNAsgSIAZA7QgwASg+APQg+AOhMAKgAlUDjIAAg7IBcAAIAAlrQAAgWAVAAIDJAAIAAgpIktAAIAAg7IEtAAIAAgiIA/AAIAAAiIEsAAIAAA7IksAAIAAApIDPAAQAWAAAAAWIAAFrIBRAAIAAA7gAi4CoIGBAAIAAgnImBAAgAi4BMIGBAAIAAgqImBAAgAi4gSIGBAAIAAgqImBAAgAi4iVIAAAkIGBAAIAAgkQAAgJgJAAIlvAAQgJAAAAAJg");
	this.shape_4.setTransform(37.5,50.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADMFfIAAgTIlOAAIAAATIg+AAIAAjvQg4AQhQAOIgTg7QA4gIBkgXQBIgTA9gYIkRAAIAAg6IEUAAIAAg8IjTAAIAAg7IDTAAIAAguIA8AAIAAAuIC0AAIAAAiIBbhOIAoAvQhsBXgqAdICzAAIAAA6IkVAAIiGA8IE3AAQAVAAAAAVIAAEFgAiCESIFOAAIAAgrIlOAAgAiCCIIAAAlIFOAAIAAgmQABgHgJAAIk9AAQgKAAABAIgAAFgxIA4AAIA2giIAkgaIiSAAgAB4jGIAAgtIjkAAIAAAtIhBAAIAAgtIiiAAIAAg6ICiAAIAAgxIBBAAIAAAxIDkAAIAAgxIBBAAIAAAxICjAAIAAA6IijAAIAAAtg");
	this.shape_5.setTransform(-38.7,49.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjyFdIAAkmIg0AwIg2guQAjgbAggfQAfgeAcgjQAcgiAYglQAYglAUgoIjOAAIAAhBIDoAAIAXhFIBBAWIgRAvIFzAAIAABBImNAAIgNAdQgUAogbApQgcArgiAsIAAFugAiBFLIAAhBIDGAAIAAjlIi4AAIAAg/IC4AAIAAh8IBCAAIAAB8IDAAAIAAA/IjAAAIAADlIDWAAIAABBg");
	this.shape_6.setTransform(-114.7,49.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AADFaQgdgGgkgMIAChJQAnASAeAJQAfAJAWAAQATAAAOgIQALgGAJgNQALgVAAgiQAAgigNgwIj9AAIAAhBIDlAAQgUgugagsIAfAAIBUhFIACgGIgHgCIjdAAIAAg+IE+AAIA0AuIimB/IAZA4IC/AAIAABBIisAAQAPA8AAAnQgBAagGAXQgJAXgPARQgQASgZAKQgbAKgiAAQgbAAgggHgAj1FbIAAkyIgzAsIg3guIA2gsQAkgeAcgeQAiglAZglQAcgsAOgrIjGAAIAAhAIDYAAIAPg+IBCAMIgKAyIF6AAIAABAImLAAQgOAugcAzQguBKghAjIAAFvg");
	this.shape_7.setTransform(-190.3,49.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ADVFSIAAglImdAAIAAAlIhDAAIAAkpQgBgLANAAIDhAAIAAi7QhbBBgwAbQhjAzg0ASIggg8IBbggQAigOAjgTIBBgpQArgfBThPIlIAAIAAhBIKQAAIAABBIjzAAIg0A3IAAD3IDqAAQAPAAAAAOIAAEmgAjIBoIAACFIGdAAIAAiFQAAgKgKAAImIAAQgMAAABAKgAC4hMQg8glgwgVIAag7QA3AXA/AnQA+AkBHA0IgoA2QhGgzg7gkg");
	this.shape_8.setTransform(-266,50.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AlfEuIAGgHQAZgXAUgaQAUgaARgfQAQgdANghQANgiAKgjIA+ARIgXBLQAbAmAjAZQAjAaAqALIAAjcIkrAAIAAg8IKZAAIAAA8IkuAAIAABUIEBAAIAAA+IkBAAIAABVIBUADIDsAAIgPBBIjGAAQhHgCgvgGQg1gGgngMQgqgOgfgVQgfgWgZghIgwBHQgZAhgYAYgAj8hNQgJAAAAgJIAAj3QAAgHAJgBIH7AAQAJABAAAHIAAD3QAAAJgJAAgAjHiKIACACIGLAAIAEgCIAAgrImRAAgAjHkYIAAApIGRAAIAAgpIgEgCImLAAQAAAAgBAAQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_9.setTransform(-342.1,50.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AC9FeIAAgbIlzAAIAAAbIg+AAIAAkDQgBgKALAAIHYAAQANAAAAAMIAAEBgAi2EOIFzAAIAAgqIlzAAgAi2COIAAAiIFzAAIAAgiQAAgIgJAAIliAAQgJAAABAIgAkcArQgJAAABgIIAAiyQgBgHAJgBII2AAQAIABAAAHIAACyQAAAIgIAAgAC4g5IgcAtIBJAAIADgDIAAhOIgDgDIjHAAIAABUIAzAAQAmgwAOgdgAhTgMIA2AAIAAhUIjLAAQAAAAgBABQgBAAAAAAQAAAAAAABQAAAAAAABIAABOIACADIBUAAIgegzIA1gcQAXAjATAsgACCjeIAAApIkCAAIAAgpQh8AlhNAQIgXg+QA/gHA2gMQA1gMArgPQArgPAhgSQAigSAWgVIA1AXIgFAFQAxAYBmAkQAzAQBtARIgXA9Qh7gdhMgagABcjuIhdguQgkAXg0AXIC1AAg");
	this.shape_10.setTransform(304,-50.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjbFeIAAkWIhdBUIgpg4QAsgfAkghQAlggAdggQAfggAWghQAXgiAPghIABgEQAAgHgLAAIjJAAIAAhAIBuAAIAAhyIBAAAIAAByIBXAAIAjAcQgTAygXAtQgYAsgdAnQArAmBTBYIgwAvQhBhPgqgtIAAFKgAgrFHIAAhBICoAAIAAmQIh8AAIAAhBIB8AAIAAiQIBDAAIAACQICNAAIAABBIiNAAIAAGQICiAAIAABBg");
	this.shape_11.setTransform(227.9,-50);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AlVFTIAAhEIE1AAIAAi8IkLAAIAAhCIELAAIAAinIkdAAIAAhDIEiAAQgmgxgcgaIAzguQA4A7AeArIgYATIEnAAIAABDIkZAAIAACnIEKAAIAABCIkKAAIAAC8IE0AAIAABEg");
	this.shape_12.setTransform(151.9,-51.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ADZFDQghgTgfgZQgdgZgZghQgaghgUgoQgWgogQgvIjrAAIAADBQBygWBtgfIATBCQhlAeg8AMQh+AXhIAIIgPhBIBEgKIAApKQAAgUATAAIIXAAQAUAAAAAUIAADEQAAAVgUAAIjqAAIAZBmIEDAAIAAA/IjuAAQANAnAZAnQAXAjAdAeQAaAdAZAQQAZASAPAAQATAAAEgUQAHgtgCgzIA+ATIgJBVQgGAhgIAQQgMAXgNAIQgKAHgTAAQgcAAgfgTgAgEgCIgZhmIi/AAIAABmIDYAAgAjckEIAABcIG0AAQAJAAAAgKIAAhSQAAgQgQAAImdAAQgQAAAAAQg");
	this.shape_13.setTransform(76,-49.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_14.setTransform(0,-50.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABoFhIAAiwIilAAIAAg+IClAAIAAhxIiMAAIAAg9ICMAAIAAhpIiSAAIAAg9IBLAAQggg7gagdIA1gnQAeAkAlBAIgrAbIB5AAQAagzAbhMIA6AXQgNAugbA6IBRAAIAAA9IidAAIAABpICaAAIAAA9IiaAAIAABxICzAAIAAA+IizAAIAACwgAlKFPIAAkDQAAgTATAAIC/AAQAVAAAAATIAADOQAAAVgWAAIiUAAIAAAggAkNB+IAAB2IBfAAQANAAAAgNIAAhpQAAgKgLAAIhXAAQgKAAAAAKgAk+AYIAAg6IDQAAIAAA6gAk+hJIAAg7IDQAAIAAA7gAlaikIAAg9IENAAIAAA9gAlBkGIAAg9IDWAAIAAA9g");
	this.shape_15.setTransform(-75.9,-50.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ai0FXIgFhIQAuAQAZAAQAfAAAEghIAAgyIizAAIAACOIhAAAIAAm1QAAgXAVAAIEIAAQAWAAAAAXIAAFuQABAWgJAPQgHAQgPALQgTAOgnAAQggAAgtgKgAkCCPICzAAIAAhCIizAAgAkCgwIAAA/ICzAAIAAg/QAAgEgHAAIimAAQgGAAAAAEgABwFcQgSAAgPgFQgPgHgJgMQgKgMgFgSQgEgSABgVIAAjyIA9AAIAABlQBEgTA1gVQA1gUAngXIAgA3QgmAWg9AXQg/AYhTAaIAAA/QABAWAHAIQAIALAbgCIBiAAQATAAAKgCQAKgFAGgJQAJgPAAg8IA+AKIgGBPQgFAdgHAJQgPATgMAFQgOAFgkAAgAB2gEQgRAAgNgFQgQgGgJgMQgLgLgFgSQgFgSABgYIAAj3IA9AAIAABlQBAgQAygTQAxgRAjgUIAgA5QgnAUg6ATQg6AVhLAUIAABGQABAXAGAIQAJAKAbAAIBXAAQAjAAAJgRQAHgMgBg4IA/AHIgFBLQgFAdgGAJQgPATgMAEQgOAGgjAAgAg1iuIkZAmIgUg/IAngDQAdguAwhoIA4AbQgQAsgoBFICXgSIgdgxIA4gfQBKB/ARAlIg5Aag");
	this.shape_16.setTransform(-152.2,-50.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ah4FaQAGg2AAhEIBAADIgHCAgAliEvQAbgPAYgYQAXgWASgeIA0AoQgaAigcAZQgcAbgfARQgNgegSgWgADKDgIA0glQAXAYAWAgIAsBIIg5AkQg6higagdgAArDjIA9gRQAfBZAJAnIg/ANQgGgggghcgAjZDYQgYgIgYgMIAEhDQAYAQAVAIQAVAHATAAIAPgCQAKgCAGgLQAGgKAAgHQgBgNgNgRIi+AYIgLg6ICXgTQAAgOAMgMIBdgxIjnAAIAAg1IE2AAIAWA4IhzA8IB0gQIAJA6IhiAOQAGATgBATQAAATgEARQgGARgLANQgLAOgRAHQgSAIgYgBQgWAAgYgFgAg3ChQAVgQATgSIAigsQAWgfAjhOQgvhEghgkIAugkIA1A/IAAgBQAJg0AAhAIhLAAIAAg7IBMAAIAAhFIA7AAIAABFIBUAAQARgBABANQAACYAGBcQAEBXAIAXIAEAEQAIgCAEh5IA3AJQgFBmgKAmQgHAdgMAQQgOARgTAAQgNAAgLgKQgNgOgJgeQgKgfgGgvQgJg+gFjEQAAgIgLgBIgmAAQgCAvgFArQgGAvgLAsQAtBDAiA6IgzAhIg0hWQgUAxgfArQgeAqgmAggAkzhsQgHAAAAgJIAAh4QAAgIAHAAIEZAAQAJAAgBAIIAAB4QABAJgJAAgAkCjBIAAAgIADADICzAAIACgDIAAggIgCgCIizAAQgBAAgBAAQgBAAAAABQAAAAAAAAQAAABAAAAgAlbkJIAAg0ICXAAIAAgmIBBAAIAAAmICQAAIAAA0g");
	this.shape_17.setTransform(-227.8,-50.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ACrFUIAAh3In+AoIgJhCIBogJIAAnMIhVAAIAAhBIKeAAIAABBIhmAAIAAGoIBpgKIAFBDIhuAJIAAB8gAiwC2IFbgcIAAheIlbAAgAiwgEIFbAAIAAhrIlbAAgAiwiwIFbAAIAAhiIlbAAg");
	this.shape_18.setTransform(-304.6,-49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.1,-90,764.2,180);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEDFcIAAghIoFAAIAAAhIhDAAIAApJQAAgXAXAAIEPAAIAAhXIBCAAIAABXIELAAQAYAAAAAXIAAJJgAAjD6IDgAAIAAjFIjgAAgAkCD6IDjAAIAAjFIjjAAgAAjgKIDgAAIAAivQgBgKgIAAIjXAAgAkCi5IAACvIDjAAIAAi5IjaAAQgKAAABAKg");
	this.shape.setTransform(341.9,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADyFdIAAggInkAAIAAAgIhAAAIAApMQAAgWAXABIDZAAQAXg4AKggIA7AXQgIAfgOAiIEYAAQAXgBAAAWIAAJMgAjyD9IHkAAIAAhjInkAAgAjyBZIHkAAIAAhuInkAAgAjyi7IAABlIHkAAIAAhlQAAgIgKAAInRAAQgKAAABAIg");
	this.shape_1.setTransform(265.9,49.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_2.setTransform(190,49.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlaFDIAAhAIBiAAIAAmYIBEAAIAAGYICkAAIAAoEIkrAAIAAhBIJ7AAIAABBIkNAAIAADQIEBAAIAABAIkBAAIAAD0IEoAAIAABAg");
	this.shape_3.setTransform(113.8,50.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADSE+Qg5gPg1gHIAPg+QBfATCLAmIgWA9Qg7gUg6gOgAlcEfQBMgJA/gOQA8gNAsgSIAZA7QgwASg+APQg+AOhMAKgAlUDjIAAg7IBcAAIAAlrQAAgWAVAAIDJAAIAAgpIktAAIAAg7IEtAAIAAgiIA/AAIAAAiIEsAAIAAA7IksAAIAAApIDPAAQAWAAAAAWIAAFrIBRAAIAAA7gAi4CoIGBAAIAAgnImBAAgAi4BMIGBAAIAAgqImBAAgAi4gSIGBAAIAAgqImBAAgAi4iVIAAAkIGBAAIAAgkQAAgJgJAAIlvAAQgJAAAAAJg");
	this.shape_4.setTransform(37.5,50.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADMFfIAAgTIlOAAIAAATIg+AAIAAjvQg4AQhQAOIgTg7QA4gIBkgXQBIgTA9gYIkRAAIAAg6IEUAAIAAg8IjTAAIAAg7IDTAAIAAguIA8AAIAAAuIC0AAIAAAiIBbhOIAoAvQhsBXgqAdICzAAIAAA6IkVAAIiGA8IE3AAQAVAAAAAVIAAEFgAiCESIFOAAIAAgrIlOAAgAiCCIIAAAlIFOAAIAAgmQABgHgJAAIk9AAQgKAAABAIgAAFgxIA4AAIA2giIAkgaIiSAAgAB4jGIAAgtIjkAAIAAAtIhBAAIAAgtIiiAAIAAg6ICiAAIAAgxIBBAAIAAAxIDkAAIAAgxIBBAAIAAAxICjAAIAAA6IijAAIAAAtg");
	this.shape_5.setTransform(-38.7,49.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjyFdIAAkmIg0AwIg2guQAjgbAggfQAfgeAcgjQAcgiAYglQAYglAUgoIjOAAIAAhBIDoAAIAXhFIBBAWIgRAvIFzAAIAABBImNAAIgNAdQgUAogbApQgcArgiAsIAAFugAiBFLIAAhBIDGAAIAAjlIi4AAIAAg/IC4AAIAAh8IBCAAIAAB8IDAAAIAAA/IjAAAIAADlIDWAAIAABBg");
	this.shape_6.setTransform(-114.7,49.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AADFaQgdgGgkgMIAChJQAnASAeAJQAfAJAWAAQATAAAOgIQALgGAJgNQALgVAAgiQAAgigNgwIj9AAIAAhBIDlAAQgUgugagsIAfAAIBUhFIACgGIgHgCIjdAAIAAg+IE+AAIA0AuIimB/IAZA4IC/AAIAABBIisAAQAPA8AAAnQgBAagGAXQgJAXgPARQgQASgZAKQgbAKgiAAQgbAAgggHgAj1FbIAAkyIgzAsIg3guIA2gsQAkgeAcgeQAiglAZglQAcgsAOgrIjGAAIAAhAIDYAAIAPg+IBCAMIgKAyIF6AAIAABAImLAAQgOAugcAzQguBKghAjIAAFvg");
	this.shape_7.setTransform(-190.3,49.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ADVFSIAAglImdAAIAAAlIhDAAIAAkpQgBgLANAAIDhAAIAAi7QhbBBgwAbQhjAzg0ASIggg8IBbggQAigOAjgTIBBgpQArgfBThPIlIAAIAAhBIKQAAIAABBIjzAAIg0A3IAAD3IDqAAQAPAAAAAOIAAEmgAjIBoIAACFIGdAAIAAiFQAAgKgKAAImIAAQgMAAABAKgAC4hMQg8glgwgVIAag7QA3AXA/AnQA+AkBHA0IgoA2QhGgzg7gkg");
	this.shape_8.setTransform(-266,50.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AlfEuIAGgHQAZgXAUgaQAUgaARgfQAQgdANghQANgiAKgjIA+ARIgXBLQAbAmAjAZQAjAaAqALIAAjcIkrAAIAAg8IKZAAIAAA8IkuAAIAABUIEBAAIAAA+IkBAAIAABVIBUADIDsAAIgPBBIjGAAQhHgCgvgGQg1gGgngMQgqgOgfgVQgfgWgZghIgwBHQgZAhgYAYgAj8hNQgJAAAAgJIAAj3QAAgHAJgBIH7AAQAJABAAAHIAAD3QAAAJgJAAgAjHiKIACACIGLAAIAEgCIAAgrImRAAgAjHkYIAAApIGRAAIAAgpIgEgCImLAAQAAAAgBAAQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_9.setTransform(-342.1,50.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AC9FeIAAgbIlzAAIAAAbIg+AAIAAkDQgBgKALAAIHYAAQANAAAAAMIAAEBgAi2EOIFzAAIAAgqIlzAAgAi2COIAAAiIFzAAIAAgiQAAgIgJAAIliAAQgJAAABAIgAkcArQgJAAABgIIAAiyQgBgHAJgBII2AAQAIABAAAHIAACyQAAAIgIAAgAC4g5IgcAtIBJAAIADgDIAAhOIgDgDIjHAAIAABUIAzAAQAmgwAOgdgAhTgMIA2AAIAAhUIjLAAQAAAAgBABQgBAAAAAAQAAAAAAABQAAAAAAABIAABOIACADIBUAAIgegzIA1gcQAXAjATAsgACCjeIAAApIkCAAIAAgpQh8AlhNAQIgXg+QA/gHA2gMQA1gMArgPQArgPAhgSQAigSAWgVIA1AXIgFAFQAxAYBmAkQAzAQBtARIgXA9Qh7gdhMgagABcjuIhdguQgkAXg0AXIC1AAg");
	this.shape_10.setTransform(304,-50.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjbFeIAAkWIhdBUIgpg4QAsgfAkghQAlggAdggQAfggAWghQAXgiAPghIABgEQAAgHgLAAIjJAAIAAhAIBuAAIAAhyIBAAAIAAByIBXAAIAjAcQgTAygXAtQgYAsgdAnQArAmBTBYIgwAvQhBhPgqgtIAAFKgAgrFHIAAhBICoAAIAAmQIh8AAIAAhBIB8AAIAAiQIBDAAIAACQICNAAIAABBIiNAAIAAGQICiAAIAABBg");
	this.shape_11.setTransform(227.9,-50);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AlVFTIAAhEIE1AAIAAi8IkLAAIAAhCIELAAIAAinIkdAAIAAhDIEiAAQgmgxgcgaIAzguQA4A7AeArIgYATIEnAAIAABDIkZAAIAACnIEKAAIAABCIkKAAIAAC8IE0AAIAABEg");
	this.shape_12.setTransform(151.9,-51.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ADZFDQghgTgfgZQgdgZgZghQgaghgUgoQgWgogQgvIjrAAIAADBQBygWBtgfIATBCQhlAeg8AMQh+AXhIAIIgPhBIBEgKIAApKQAAgUATAAIIXAAQAUAAAAAUIAADEQAAAVgUAAIjqAAIAZBmIEDAAIAAA/IjuAAQANAnAZAnQAXAjAdAeQAaAdAZAQQAZASAPAAQATAAAEgUQAHgtgCgzIA+ATIgJBVQgGAhgIAQQgMAXgNAIQgKAHgTAAQgcAAgfgTgAgEgCIgZhmIi/AAIAABmIDYAAgAjckEIAABcIG0AAQAJAAAAgKIAAhSQAAgQgQAAImdAAQgQAAAAAQg");
	this.shape_13.setTransform(76,-49.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_14.setTransform(0,-50.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABoFhIAAiwIilAAIAAg+IClAAIAAhxIiMAAIAAg9ICMAAIAAhpIiSAAIAAg9IBLAAQggg7gagdIA1gnQAeAkAlBAIgrAbIB5AAQAagzAbhMIA6AXQgNAugbA6IBRAAIAAA9IidAAIAABpICaAAIAAA9IiaAAIAABxICzAAIAAA+IizAAIAACwgAlKFPIAAkDQAAgTATAAIC/AAQAVAAAAATIAADOQAAAVgWAAIiUAAIAAAggAkNB+IAAB2IBfAAQANAAAAgNIAAhpQAAgKgLAAIhXAAQgKAAAAAKgAk+AYIAAg6IDQAAIAAA6gAk+hJIAAg7IDQAAIAAA7gAlaikIAAg9IENAAIAAA9gAlBkGIAAg9IDWAAIAAA9g");
	this.shape_15.setTransform(-75.9,-50.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ai0FXIgFhIQAuAQAZAAQAfAAAEghIAAgyIizAAIAACOIhAAAIAAm1QAAgXAVAAIEIAAQAWAAAAAXIAAFuQABAWgJAPQgHAQgPALQgTAOgnAAQggAAgtgKgAkCCPICzAAIAAhCIizAAgAkCgwIAAA/ICzAAIAAg/QAAgEgHAAIimAAQgGAAAAAEgABwFcQgSAAgPgFQgPgHgJgMQgKgMgFgSQgEgSABgVIAAjyIA9AAIAABlQBEgTA1gVQA1gUAngXIAgA3QgmAWg9AXQg/AYhTAaIAAA/QABAWAHAIQAIALAbgCIBiAAQATAAAKgCQAKgFAGgJQAJgPAAg8IA+AKIgGBPQgFAdgHAJQgPATgMAFQgOAFgkAAgAB2gEQgRAAgNgFQgQgGgJgMQgLgLgFgSQgFgSABgYIAAj3IA9AAIAABlQBAgQAygTQAxgRAjgUIAgA5QgnAUg6ATQg6AVhLAUIAABGQABAXAGAIQAJAKAbAAIBXAAQAjAAAJgRQAHgMgBg4IA/AHIgFBLQgFAdgGAJQgPATgMAEQgOAGgjAAgAg1iuIkZAmIgUg/IAngDQAdguAwhoIA4AbQgQAsgoBFICXgSIgdgxIA4gfQBKB/ARAlIg5Aag");
	this.shape_16.setTransform(-152.2,-50.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ah4FaQAGg2AAhEIBAADIgHCAgAliEvQAbgPAYgYQAXgWASgeIA0AoQgaAigcAZQgcAbgfARQgNgegSgWgADKDgIA0glQAXAYAWAgIAsBIIg5AkQg6higagdgAArDjIA9gRQAfBZAJAnIg/ANQgGgggghcgAjZDYQgYgIgYgMIAEhDQAYAQAVAIQAVAHATAAIAPgCQAKgCAGgLQAGgKAAgHQgBgNgNgRIi+AYIgLg6ICXgTQAAgOAMgMIBdgxIjnAAIAAg1IE2AAIAWA4IhzA8IB0gQIAJA6IhiAOQAGATgBATQAAATgEARQgGARgLANQgLAOgRAHQgSAIgYgBQgWAAgYgFgAg3ChQAVgQATgSIAigsQAWgfAjhOQgvhEghgkIAugkIA1A/IAAgBQAJg0AAhAIhLAAIAAg7IBMAAIAAhFIA7AAIAABFIBUAAQARgBABANQAACYAGBcQAEBXAIAXIAEAEQAIgCAEh5IA3AJQgFBmgKAmQgHAdgMAQQgOARgTAAQgNAAgLgKQgNgOgJgeQgKgfgGgvQgJg+gFjEQAAgIgLgBIgmAAQgCAvgFArQgGAvgLAsQAtBDAiA6IgzAhIg0hWQgUAxgfArQgeAqgmAggAkzhsQgHAAAAgJIAAh4QAAgIAHAAIEZAAQAJAAgBAIIAAB4QABAJgJAAgAkCjBIAAAgIADADICzAAIACgDIAAggIgCgCIizAAQgBAAgBAAQgBAAAAABQAAAAAAAAQAAABAAAAgAlbkJIAAg0ICXAAIAAgmIBBAAIAAAmICQAAIAAA0g");
	this.shape_17.setTransform(-227.8,-50.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ACrFUIAAh3In+AoIgJhCIBogJIAAnMIhVAAIAAhBIKeAAIAABBIhmAAIAAGoIBpgKIAFBDIhuAJIAAB8gAiwC2IFbgcIAAheIlbAAgAiwgEIFbAAIAAhrIlbAAgAiwiwIFbAAIAAhiIlbAAg");
	this.shape_18.setTransform(-304.6,-49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.1,-90,764.2,180);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD/FKIAAgZIjoAAIAAAZIg8AAIAAj4QgCgKAMAAIFLAAQANAAAAANIAAD1gAAXCOIAABlIDoAAIAAhlQAAgJgJAAIjWAAQgKAAABAJgAlFFIIAAjgQAAgTATAAIDFAAQAUAAAAATIAACwQAAAVgUAAIibAAIAAAbgAkICaIAABZIBlAAQANAAAAgNIAAhMQAAgKgKAAIhfAAQgJAAAAAKgAk9AlIAAg6IDOAAIAAA6gAhAATIAAg5IBWAAIARhpIhLAAIAAg7IBUAAIAMhFIhqAAIAAg6IFsAAIAAA6IjEAAIgLBFICtAAQAPAAAAAPIAACVIAxAAIAAA5gABUgmICaAAIAAhiQAAgHgJAAIiAAAgAk9hBIAAg7IDOAAIAAA7gAlbiqIAAg6IEHAAIAAA6gAk9kPIAAg6IDIAAIAAA6g");
	this.shape.setTransform(304.2,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlMFVIAAkDQAAgUAUABIDRAAQATgBAAAUIAADNQAAAVgUAAIimAAIAAAhgAkOCDIAAB2IBxAAQAMAAAAgMIAAhqQAAgKgKAAIhqAAQgJAAAAAKgAELFUIAAgZIjjAAIAAAZIg8AAIAAktQgCgLAMAAIB/AAIAAh2IihAAIAAg9IChAAIAAhjIiMAHIgJg8QBIgCB8gLQBXgJBEgOIALA9Qg1AKhWAKIgJACIAABpICjAAIAAA9IijAAIAAB2ICFAAQANAAAAAMIAAEsgAAoBjIAACaIDjAAIAAiaQAAgJgJAAIjRAAQgKAAABAJgAk9AdIAAg6IDdAAIAAA6gAk9hEIAAg6IDdAAIAAA6gAlYihIAAg+IEVAAIAAA+gAk9kDIAAg+IDdAAIAAA+g");
	this.shape_1.setTransform(227.6,49.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_2.setTransform(152,49.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlaFPIAAhDIDtAAIAApaIBGAAIAAC1IFYAAIAABEIlYAAIAAFhIGCAAIAABDg");
	this.shape_3.setTransform(75.8,48.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AEBFOIgZgmQgQgegNgiIgYhKQgNg1gPh6IhqAAIAAEMIBggeIATA+QgwATg8AOQg6AQhJALIgOhAIBKgNIAApDQgBgPATAAIABAAIBBABQA+AAA8gGQA7gEA4gLIAXA8QhDAMg4AFQgDBfAHBeICIAAIAABBIiCAAQAGBCAOBBQANBCAWA8QAHAWAIAAQAGABADggQABgSABgxIA+ASQgFBFgMBAQgPAmgigBQgRAAgPgSgACRhSQgGhQgBhqIhcAAIgBAHIAACzIBkAAIAAAAgAjhFcIAAlEIhxAPQgDgYgMgjIAzgHQApgsAbgjQgdgegfgZQgegXgegTIAfg1QAJABAdAZQAfgyAjhIIA1AiQgoBIgjA0IAqAnQAcgtAlhZIA6AVQgZA/gZAnQg5BRgnAvIBmgPIgRgwIA4gRQAZBIAXBRIg5AOIgLgqIg+AJIAAFMgAlaErQAPhAAIg5QAJg7ADgyIA5AKQgMBngYCDgAiDBRIA5gNIAXCnIg5AIg");
	this.shape_4.setTransform(-0.1,49.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AB1FUIAAhMQA0AXAagBQASABARgIQARgHAPgOQAJgKAGgRQAFgRACgYQAEgxAAgqQAAgpgMAAIncAAQhBBJgkAhIgygpQAnghAiglQAjgjAegnQAegnAZgpQAagqAUgsIi8AAIAAg/IB7AAQgyglgegRIAhgxQA8AkAjAcIgdAnIBGAAIAghlIA8ATIgaBSIEWAAQAHAAAIAIQAKAIAAAMIgBAHIgbBbIAlAAQAJAAAIAHQAKAJAAALIgBAHIgbBXIAmAAQAQADAEAEQAFAHAAAVQAABjgFBDQgCAlgHAbQgIAbgNAQQgOASgRAKQgOAKgQAFQgTAGgZAAQgoAAg3gOgAiYgCIF1AAIATg9IlhAAgAhNh8IEGAAIATg/Ij6AAgAlFEzQAUgZAhg9QAOggAShJIBCATQgbBUgRAjQglBDgWAbQgXgbgZgOgAh4FHQgFiDgMhLIA9gFQAKBXAHB8gAgSBtIA7gNQAVA+AdCCIg8AIQgXhegahdgABlBjIA5gaQAdAxApBdIg4AXQgmhSghg5g");
	this.shape_5.setTransform(-76.6,49.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkWFdIAAltIgMAUIg/gTQAXgnASgoQASgoAMgpQANgqAIgrQAHgrADgsIBBAEQgRB4gNAxIAAILgAi0FKIAAg6IDmAAIAAgoIjIAAIAAg0IDIAAIAAgqIjdAAIAAg1IDdAAIAAgrIjFAAQgHAAAAgIIAAiJQAAgHAHAAIDFAAIAAgnIhrAAQgZgBAAgZIAAhIIhWAAIAAg7IBWAAIAAgqIA+AAIAAAqIDKAAIAAgqIA9AAIAAAqIBeAAIAAA7IheAAIAABIQAAANgGAGQgHAGgNABIhnAAIAAAnIDCAAQAIAAAAAHIAACJQAAAIgIAAIjCAAIAAArIDcAAIAAA1IjcAAIAAAqIDNAAIAAA0IjNAAIAAAoIDwAAIAAA6gABygJICNAAIADgDIAAgsIgDgCIiNAAgAhfg4IAAAsIACADICPAAIAAgxIiPAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAgAgUjUQAAAKAJAAIC3AAQAKAAAAgKIAAgjIjKAAg");
	this.shape_6.setTransform(-152.5,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ADVFSIAAglImdAAIAAAlIhDAAIAAkpQgBgLAMAAIDhAAIAAi7QhaBBgwAbQhjAzg0ASIggg8IBbggQAjgOAhgTIBCgpQArgfBThPIlIAAIAAhBIKQAAIAABBIjzAAIg0A3IAAD3IDqAAQAPAAAAAOIAAEmgAjIBoIAACFIGdAAIAAiFQAAgKgKAAImIAAQgMAAABAKgAC3hMQg7glgwgVIAag7QA2AXBAAnQA+AkBHA0IgoA2QhGgzg8gkg");
	this.shape_7.setTransform(-228,50.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AleEuIAFgHQAYgXAVgaQAVgaAQgfQARgdANghQAMgiAJgjIA/ARIgXBLQAbAmAjAZQAjAaAqALIAAjcIkqAAIAAg8IKYAAIAAA8IkvAAIAABUIECAAIAAA+IkCAAIAABVIBVADIDtAAIgQBBIjGAAQhHgCgvgGQg1gGgngMQgqgOgfgVQgfgWgaghIgvBHQgYAhgZAYgAj8hNQgJAAABgJIAAj3QgBgHAJgBIH7AAQAJABAAAHIAAD3QAAAJgJAAgAjHiKIADACIGLAAIADgCIAAgrImRAAgAjHkYIAAApIGRAAIAAgpIgDgCImLAAQgBAAgBAAQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_8.setTransform(-304.1,50.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AleEsQAlgGAcgRQAYgQASgYQAVgeAPg9IiMAAIAAhBICVAAIAEhIIAAgxIiCAAIAAhBICCAAIAAh0IiHAAIAAhAICHAAIAAhCIBBAAIAABCIB/AAIAABAIh/AAIAAB0IB2AAIAABBIh2AAIAAAxIgFBIICGAAIAABBIiOAAQgVBagXAjQgSAbgbAUQgeAUgqAOgAAjFeIAAqfQAAgMAMAAID3AAIAsAjIhRDoIgBADIAEAJIAlAvQASAXALAWQAMAZAHAZQAGAcAAAeQAAAVgEATQgFATgJASQgRAggaAPQgZAOgmAAQgmAAg3gQIAChLQA4AXAeACQAQAAAMgFQANgGAJgKQAIgLAEgPQAEgQAAgUIgCgeQgFgagYglQgWgkgpgtQgIgLAAgHIABgEIBGjIIACgIIiUAAQgKAAABAJIAAJig");
	this.shape_9.setTransform(379.7,-50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AlNFPIAChDQAvAQAYAAQAOAAAGgFQAGgGAAgQIAAieIhVAgIgfg6QA1gQA/gYIAAiwIhnAAIAAhBIBnAAIAAiMIBBAAIAACMIBKAAIAABBIhKAAIAACRIAqgZIAkA2IhOAoIAADMQgDBKhLAAQghAAg1gOgABkFXQgYgBgVgUQgVgVAAgZIAAkEIhqAOIgOg+IB4gRIAAiuIhoAKIgRhCQBTgECMgTQBBgLBmgfIAWBAQiAAhhgAPIAACuIDrggIAJBBIj0AfIAADqQgBAQALAKQALALAQABIB1AAQAJAAAKgHQALgvADhTIBAAKQgDBJgGArQgHAqgIAIQgXAagWAAg");
	this.shape_10.setTransform(303.5,-50.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ACDFbIgChFQBSARASABQARAAAMgHQAKgGAFgOQAJgVgBg6IgBhAQAAgGgIABIokAAQgLAAAAgNIAAmCQAAgTASAAIDDAAQARgbAOgdIA4AfIgMAZIEQAAQAUAAAAATIAACdQAAAUgVAAInvAAIAAAvII9AAIAAA9Io9AAIAAA0IIsAAQAKAAABAGQACAGAAAcQAABZgKBfQgDAYgMAPQgKANgQAIQgOAHgUACIgmADQgpAAgzgIgAjfjbIAAA4IG5AAQAKAAAAgJIAAgvQAAgQgPAAImkAAQgQAAAAAQgAldE7QAbgjARgpQAQgpAJgwIA+ARQgOA2gUAvQgVAvgcAlQgYgcgYgJgAihDvQgEgqgGghIA5gFQAJAlACAqQAFAsgBAzIg8AEgAgpCmIA4gRQAOAgAKApIAVBYIg6ANQgMhDgfhagABhCoIAxghQAVAcAuBOIgzAeQgjhBgegmg");
	this.shape_11.setTransform(227.2,-50.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_12.setTransform(152,-50.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ADzFaIgkgUQgggUgZgZQgvAYg3APQg2ARg+AIIgRg7QAtgEAxgNQAwgNA2gVQglhAgOgkIi6AAIAAAuQBJgLAigIIAMA5QgvAMhIAKIAAArQAAAcgPARQgJAMgQAGQgQAIgYgBQgjABgwgMIAAg+QAvAMAaAAQAXAAAFgJQAEgGAAgeIiUAMIgKg7ICegMIAAg2IiZAAIAAg7ICZAAIAAghIh6AHIgIg2QBUgBBIgIQBDgGA0gMIAIA2QgjAJg8AFIAAAnICoAAQgNgpgOhHIlqAAIAAg6IE4AAIAAglIj2AAIAAg1ID2AAIAAgnIkfAAIAAg7ICrAAIgeggIAsgoQAaAXAeAoIgLAJICkAAQAqgrATgcIAwAnIgZAgICaAAIAAA7IkbAAIAAAnID0AAIAAA1Ij0AAIAAAlIE2AAIAAA6IkCAAQAOBIAMAoIDcAAIAAA7IjHAAQARAjAaAjIBQg8IAkAwIhNA4IAZAVQAUANALAAQAPAAADgMQAHgWAAgnIA7AUQgIA1gNAfQgMAegRAIIgTACQgQABgUgJgACVAXIAZgzQBIAdAhAUIgeAyg");
	this.shape_13.setTransform(76.5,-50.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AlVFTIAAhEIE1AAIAAi8IkLAAIAAhCIELAAIAAinIkdAAIAAhDIEiAAQgmgxgcgaIAzguQA4A7AeArIgYATIEnAAIAABDIkZAAIAACnIEKAAIAABCIkKAAIAAC8IE0AAIAABEg");
	this.shape_14.setTransform(-0.1,-51.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AigFNIAAg/IA2ANQAlAIARAAQAcAAAPgLQAIgGgBgOIAAg2Ik9AAIAAg7IJ6AAIAAA7IkAAAIAABGQgIBNhZAAQhJgGgxgOgAlgBvIAAg1IA1AAIAAhZQAAgUATAAIIlAAQAVAAgBAVIAABYIA5AAIAAA1gABwA6IB1AAIAAgxQAAgIgJAAIhsAAgAhBA6IB0AAIAAg5Ih0AAgAjtAJIAAAxIBuAAIAAg5IhmAAQgIAAAAAIgAlDhvQAfgTAagbQAZgcAVgjIAxAlQgcAogfAfQgeAeggAVQgPgigQgQgACqi8IAqglQBDBGAjA0IgtAiQgmg1g9hCgAhThKQgWgBgRgRQgSgSAAgWIAAhjIA6AAIAABFQAAAMAIAJQAKALAPABICDAAQAJAAAIgHIAEgHIAGgvIA2AOQgJBKgIAGQgUAWgUAAgAgbjPIAmgmQAjAfAcAnIgpAiQghgrgbgXgAENi5QAOgtABgOQAAgJgIAAIokAAQgFAAgBAFIAABMIg6AAIAAiBQAAgLALAAIEkAAIAAgoIA/AAIAAAoIEOAAIA1AbQgLBIgRAug");
	this.shape_15.setTransform(-75.8,-50);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AlQEcQA0gVBTgtQAmgWA4gvQhShbg1g2IgmAuIg5gfIA2hEIAyhNQAMgcAIgkQAIgkADgpIhuAAIAAhAIGFAAIAABAIjWAAIgMBXIDEAAQATgBAAATQAAAxgHAvQgGAtgMAlQgMAkgQAgQgPAfgUAcQgSAagWAYIguArQhAAvggASQgpAWg3AXgAjNguIBBBBIBHBOQAZgpAbhCQAKgiAEhDQAAgGgHABIieAAgACGFEIAAhDQAsANA5AGQAYAAAJgJQAGgGAAgOIAApQIBAAAIAAJgQAABPhcAAQhCgGgugMgAB0CiIAAnUIBAAAIAAHUg");
	this.shape_16.setTransform(-154.1,-49.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhhFOQgSAAgNgGQgPgFgKgLQgLgNgGgRQgFgUAAgZIAAjFIBBAAIAAC6QgBAWAGAJQAJANAaAAICyAAQAfAAANgSQAGgKAAhNIBBAJQAAA2gFAiQgEAhgHALQgRASgLAEQgOAGgkAAgAlhEaQAVgfAehIQAOgkANhSIBDAOQgUBbgQApQgiBOgXAhQgbgZgZgLgADzCpQgZg7gZgpIA8gdQAcAvAZA7QAaA8AWBIIg8AYQgahLgZg6gAgjBHIA2gfQAwBOAvBcIg6AaQg2hoglg9gAkoADQgKAAABgIIAAk/QgBgJAKAAIJUAAQAKAAAAAJIAAE/QAAAIgKAAgAAig6IDRAAIADgDIAAhKIjUAAgAjxg9QAAABAAAAQAAABAAAAQAAABABAAQABAAAAAAIDSAAIAAhNIjUAAgAAijEIDUAAIAAhJQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIjRAAgAjxkNIAABJIDUAAIAAhLIjSAAQAAAAgBAAQgBAAAAAAQAAABAAAAQAAABAAAAg");
	this.shape_17.setTransform(-228.2,-49.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AlbEiQAmgFA9gWIAdgPQASgLAPgPQAOgOAKgTQALgTAHgWIAKgxIiJAAQgIAAgBgJIAAjvQABgIAIAAIDrAAIAAhFIkwAAIAAhBIEwAAIAAg9IBAAAIAAA9IExAAIAABBIkxAAIAABFIDvAAQALAAgBAIIAADvQABAJgLAAIiTAAIAACLQAAAPAJAKQAJALATABIBhAAQAKAAAKgHQAHgFADhaIBAALIgJBdQgFAggFAFQgYAagWAAIijAAQgXgBgUgSQgWgUABgaIAAiwIh8AAQgGAxgMAkQgPAqgbAeQgqApgfAQQhFAegvAKgAjXhaIAAB5QAAABAAABQAAAAABABQAAAAABAAQABAAABAAIGkAAQAEAAAAgDIAAh5IgEgCImkAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_18.setTransform(-303.8,-50.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AB/FKIgChFQBJAQAbAAQATAAAMgMQALgLAFgXQAHgdABhPIgBhHQAAgHgJAAIoZAAQgHAAgBgFIgBgXIAAlTQgCgOAPAAIJCAAIAAA6IkFAAIAAA4IDqAAIAAA4IjqAAIAAAwIDuAAIAAA3IjuAAIAAAzIEUAAQAPAAAAALIAAAbQAABvgMB2QgEAdgPASQgMAQgTAJQgYAKgrAAQgnAAgygHgAjUgMIDKAAIAAgzIjKAAgAjUh2IDKAAIAAgwIjKAAgAjUkOIAAAwIDKAAIAAg4IjEAAQgHAAABAIgAlYEiQAegsASgxQAMghANhIIA/AOQgVBWgOAlQggBEgTAcQgYgXgagMgAicBqIA6gHQAPBaAMB1Ig6ABQgDhDgYiGgAABC7QgLgrgRgqIA4gPQAVA+AcB1Ig5AKQgHgsgNgtgABqBcIA1gWQAaAyAlBeIg3ASQgnhkgWgog");
	this.shape_19.setTransform(-381.3,-48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.1,-90,840.2,180);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD/FKIAAgZIjoAAIAAAZIg8AAIAAj4QgCgKAMAAIFLAAQANAAAAANIAAD1gAAXCOIAABlIDoAAIAAhlQAAgJgJAAIjWAAQgKAAABAJgAlFFIIAAjgQAAgTATAAIDFAAQAUAAAAATIAACwQAAAVgUAAIibAAIAAAbgAkICaIAABZIBlAAQANAAAAgNIAAhMQAAgKgKAAIhfAAQgJAAAAAKgAk9AlIAAg6IDOAAIAAA6gAhAATIAAg5IBWAAIARhpIhLAAIAAg7IBUAAIAMhFIhqAAIAAg6IFsAAIAAA6IjEAAIgLBFICtAAQAPAAAAAPIAACVIAxAAIAAA5gABUgmICaAAIAAhiQAAgHgJAAIiAAAgAk9hBIAAg7IDOAAIAAA7gAlbiqIAAg6IEHAAIAAA6gAk9kPIAAg6IDIAAIAAA6g");
	this.shape.setTransform(304.2,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlMFVIAAkDQAAgUAUABIDRAAQATgBAAAUIAADNQAAAVgUAAIimAAIAAAhgAkOCDIAAB2IBxAAQAMAAAAgMIAAhqQAAgKgKAAIhqAAQgJAAAAAKgAELFUIAAgZIjjAAIAAAZIg8AAIAAktQgCgLAMAAIB/AAIAAh2IihAAIAAg9IChAAIAAhjIiMAHIgJg8QBIgCB8gLQBXgJBEgOIALA9Qg1AKhWAKIgJACIAABpICjAAIAAA9IijAAIAAB2ICFAAQANAAAAAMIAAEsgAAoBjIAACaIDjAAIAAiaQAAgJgJAAIjRAAQgKAAABAJgAk9AdIAAg6IDdAAIAAA6gAk9hEIAAg6IDdAAIAAA6gAlYihIAAg+IEVAAIAAA+gAk9kDIAAg+IDdAAIAAA+g");
	this.shape_1.setTransform(227.6,49.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_2.setTransform(152,49.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlaFPIAAhDIDtAAIAApaIBGAAIAAC1IFYAAIAABEIlYAAIAAFhIGCAAIAABDg");
	this.shape_3.setTransform(75.8,48.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AEBFOIgZgmQgQgegNgiIgYhKQgNg1gPh6IhqAAIAAEMIBggeIATA+QgwATg8AOQg6AQhJALIgOhAIBKgNIAApDQgBgPATAAIABAAIBBABQA+AAA8gGQA7gEA4gLIAXA8QhDAMg4AFQgDBfAHBeICIAAIAABBIiCAAQAGBCAOBBQANBCAWA8QAHAWAIAAQAGABADggQABgSABgxIA+ASQgFBFgMBAQgPAmgigBQgRAAgPgSgACRhSQgGhQgBhqIhcAAIgBAHIAACzIBkAAIAAAAgAjhFcIAAlEIhxAPQgDgYgMgjIAzgHQApgsAbgjQgdgegfgZQgegXgegTIAfg1QAJABAdAZQAfgyAjhIIA1AiQgoBIgjA0IAqAnQAcgtAlhZIA6AVQgZA/gZAnQg5BRgnAvIBmgPIgRgwIA4gRQAZBIAXBRIg5AOIgLgqIg+AJIAAFMgAlaErQAPhAAIg5QAJg7ADgyIA5AKQgMBngYCDgAiDBRIA5gNIAXCnIg5AIg");
	this.shape_4.setTransform(-0.1,49.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AB1FUIAAhMQA0AXAagBQASABARgIQARgHAPgOQAJgKAGgRQAFgRACgYQAEgxAAgqQAAgpgMAAIncAAQhBBJgkAhIgygpQAnghAiglQAjgjAegnQAegnAZgpQAagqAUgsIi8AAIAAg/IB7AAQgyglgegRIAhgxQA8AkAjAcIgdAnIBGAAIAghlIA8ATIgaBSIEWAAQAHAAAIAIQAKAIAAAMIgBAHIgbBbIAlAAQAJAAAIAHQAKAJAAALIgBAHIgbBXIAmAAQAQADAEAEQAFAHAAAVQAABjgFBDQgCAlgHAbQgIAbgNAQQgOASgRAKQgOAKgQAFQgTAGgZAAQgoAAg3gOgAiYgCIF1AAIATg9IlhAAgAhNh8IEGAAIATg/Ij6AAgAlFEzQAUgZAhg9QAOggAShJIBCATQgbBUgRAjQglBDgWAbQgXgbgZgOgAh4FHQgFiDgMhLIA9gFQAKBXAHB8gAgSBtIA7gNQAVA+AdCCIg8AIQgXhegahdgABlBjIA5gaQAdAxApBdIg4AXQgmhSghg5g");
	this.shape_5.setTransform(-76.6,49.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkWFdIAAltIgMAUIg/gTQAXgnASgoQASgoAMgpQANgqAIgrQAHgrADgsIBBAEQgRB4gNAxIAAILgAi0FKIAAg6IDmAAIAAgoIjIAAIAAg0IDIAAIAAgqIjdAAIAAg1IDdAAIAAgrIjFAAQgHAAAAgIIAAiJQAAgHAHAAIDFAAIAAgnIhrAAQgZgBAAgZIAAhIIhWAAIAAg7IBWAAIAAgqIA+AAIAAAqIDKAAIAAgqIA9AAIAAAqIBeAAIAAA7IheAAIAABIQAAANgGAGQgHAGgNABIhnAAIAAAnIDCAAQAIAAAAAHIAACJQAAAIgIAAIjCAAIAAArIDcAAIAAA1IjcAAIAAAqIDNAAIAAA0IjNAAIAAAoIDwAAIAAA6gABygJICNAAIADgDIAAgsIgDgCIiNAAgAhfg4IAAAsIACADICPAAIAAgxIiPAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAgAgUjUQAAAKAJAAIC3AAQAKAAAAgKIAAgjIjKAAg");
	this.shape_6.setTransform(-152.5,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ADVFSIAAglImdAAIAAAlIhDAAIAAkpQgBgLAMAAIDhAAIAAi7QhaBBgwAbQhjAzg0ASIggg8IBbggQAjgOAhgTIBCgpQArgfBThPIlIAAIAAhBIKQAAIAABBIjzAAIg0A3IAAD3IDqAAQAPAAAAAOIAAEmgAjIBoIAACFIGdAAIAAiFQAAgKgKAAImIAAQgMAAABAKgAC3hMQg7glgwgVIAag7QA2AXBAAnQA+AkBHA0IgoA2QhGgzg8gkg");
	this.shape_7.setTransform(-228,50.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AleEuIAFgHQAYgXAVgaQAVgaAQgfQARgdANghQAMgiAJgjIA/ARIgXBLQAbAmAjAZQAjAaAqALIAAjcIkqAAIAAg8IKYAAIAAA8IkvAAIAABUIECAAIAAA+IkCAAIAABVIBVADIDtAAIgQBBIjGAAQhHgCgvgGQg1gGgngMQgqgOgfgVQgfgWgaghIgvBHQgYAhgZAYgAj8hNQgJAAABgJIAAj3QgBgHAJgBIH7AAQAJABAAAHIAAD3QAAAJgJAAgAjHiKIADACIGLAAIADgCIAAgrImRAAgAjHkYIAAApIGRAAIAAgpIgDgCImLAAQgBAAgBAAQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_8.setTransform(-304.1,50.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AleEsQAlgGAcgRQAYgQASgYQAVgeAPg9IiMAAIAAhBICVAAIAEhIIAAgxIiCAAIAAhBICCAAIAAh0IiHAAIAAhAICHAAIAAhCIBBAAIAABCIB/AAIAABAIh/AAIAAB0IB2AAIAABBIh2AAIAAAxIgFBIICGAAIAABBIiOAAQgVBagXAjQgSAbgbAUQgeAUgqAOgAAjFeIAAqfQAAgMAMAAID3AAIAsAjIhRDoIgBADIAEAJIAlAvQASAXALAWQAMAZAHAZQAGAcAAAeQAAAVgEATQgFATgJASQgRAggaAPQgZAOgmAAQgmAAg3gQIAChLQA4AXAeACQAQAAAMgFQANgGAJgKQAIgLAEgPQAEgQAAgUIgCgeQgFgagYglQgWgkgpgtQgIgLAAgHIABgEIBGjIIACgIIiUAAQgKAAABAJIAAJig");
	this.shape_9.setTransform(379.7,-50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AlNFPIAChDQAvAQAYAAQAOAAAGgFQAGgGAAgQIAAieIhVAgIgfg6QA1gQA/gYIAAiwIhnAAIAAhBIBnAAIAAiMIBBAAIAACMIBKAAIAABBIhKAAIAACRIAqgZIAkA2IhOAoIAADMQgDBKhLAAQghAAg1gOgABkFXQgYgBgVgUQgVgVAAgZIAAkEIhqAOIgOg+IB4gRIAAiuIhoAKIgRhCQBTgECMgTQBBgLBmgfIAWBAQiAAhhgAPIAACuIDrggIAJBBIj0AfIAADqQgBAQALAKQALALAQABIB1AAQAJAAAKgHQALgvADhTIBAAKQgDBJgGArQgHAqgIAIQgXAagWAAg");
	this.shape_10.setTransform(303.5,-50.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ACDFbIgChFQBSARASABQARAAAMgHQAKgGAFgOQAJgVgBg6IgBhAQAAgGgIABIokAAQgLAAAAgNIAAmCQAAgTASAAIDDAAQARgbAOgdIA4AfIgMAZIEQAAQAUAAAAATIAACdQAAAUgVAAInvAAIAAAvII9AAIAAA9Io9AAIAAA0IIsAAQAKAAABAGQACAGAAAcQAABZgKBfQgDAYgMAPQgKANgQAIQgOAHgUACIgmADQgpAAgzgIgAjfjbIAAA4IG5AAQAKAAAAgJIAAgvQAAgQgPAAImkAAQgQAAAAAQgAldE7QAbgjARgpQAQgpAJgwIA+ARQgOA2gUAvQgVAvgcAlQgYgcgYgJgAihDvQgEgqgGghIA5gFQAJAlACAqQAFAsgBAzIg8AEgAgpCmIA4gRQAOAgAKApIAVBYIg6ANQgMhDgfhagABhCoIAxghQAVAcAuBOIgzAeQgjhBgegmg");
	this.shape_11.setTransform(227.2,-50.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhsFcIAAgiIibAAIAAAiIhBAAIAApJQgBgKAMAAIBOAAIAihkIA8AXIgaBNIBxAAQAOAAAAANIAAJGgAkHD5ICbAAIAAi0IibAAgAkHiuIAACzICbAAIAAizQAAgIgKAAIiIAAQgKAAABAIgABxFTIhMgSIAAhMIBLAWQAgAHAXAAQAYAAAOgKQASgOATgpQAJgaAJh1QAFhQAAhzIgCg5QgCgSgIAAIi0AAQgJAigOAgQgMAcgQAZIg+gVQAWgkAdhMQAMgnALhTIBAAGIgJBBIDYAAQAPADADAFQAGAHAAAWQgCDTgDBWQgBA2gHAsQgGArgKAhQgLAigQAWQgPAXgUAMQgLAIgQAEIgkAEQgbAAgjgHgABpAgQgWg8gag5IA8gUIA3CNQAXBBALApIg9ARQgRhCgXg9g");
	this.shape_12.setTransform(152,-50.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ADzFaIgkgUQgggUgZgZQgvAYg3APQg2ARg+AIIgRg7QAtgEAxgNQAwgNA2gVQglhAgOgkIi6AAIAAAuQBJgLAigIIAMA5QgvAMhIAKIAAArQAAAcgPARQgJAMgQAGQgQAIgYgBQgjABgwgMIAAg+QAvAMAaAAQAXAAAFgJQAEgGAAgeIiUAMIgKg7ICegMIAAg2IiZAAIAAg7ICZAAIAAghIh6AHIgIg2QBUgBBIgIQBDgGA0gMIAIA2QgjAJg8AFIAAAnICoAAQgNgpgOhHIlqAAIAAg6IE4AAIAAglIj2AAIAAg1ID2AAIAAgnIkfAAIAAg7ICrAAIgeggIAsgoQAaAXAeAoIgLAJICkAAQAqgrATgcIAwAnIgZAgICaAAIAAA7IkbAAIAAAnID0AAIAAA1Ij0AAIAAAlIE2AAIAAA6IkCAAQAOBIAMAoIDcAAIAAA7IjHAAQARAjAaAjIBQg8IAkAwIhNA4IAZAVQAUANALAAQAPAAADgMQAHgWAAgnIA7AUQgIA1gNAfQgMAegRAIIgTACQgQABgUgJgACVAXIAZgzQBIAdAhAUIgeAyg");
	this.shape_13.setTransform(76.5,-50.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AlVFTIAAhEIE1AAIAAi8IkLAAIAAhCIELAAIAAinIkdAAIAAhDIEiAAQgmgxgcgaIAzguQA4A7AeArIgYATIEnAAIAABDIkZAAIAACnIEKAAIAABCIkKAAIAAC8IE0AAIAABEg");
	this.shape_14.setTransform(-0.1,-51.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AigFNIAAg/IA2ANQAlAIARAAQAcAAAPgLQAIgGgBgOIAAg2Ik9AAIAAg7IJ6AAIAAA7IkAAAIAABGQgIBNhZAAQhJgGgxgOgAlgBvIAAg1IA1AAIAAhZQAAgUATAAIIlAAQAVAAgBAVIAABYIA5AAIAAA1gABwA6IB1AAIAAgxQAAgIgJAAIhsAAgAhBA6IB0AAIAAg5Ih0AAgAjtAJIAAAxIBuAAIAAg5IhmAAQgIAAAAAIgAlDhvQAfgTAagbQAZgcAVgjIAxAlQgcAogfAfQgeAeggAVQgPgigQgQgACqi8IAqglQBDBGAjA0IgtAiQgmg1g9hCgAhThKQgWgBgRgRQgSgSAAgWIAAhjIA6AAIAABFQAAAMAIAJQAKALAPABICDAAQAJAAAIgHIAEgHIAGgvIA2AOQgJBKgIAGQgUAWgUAAgAgbjPIAmgmQAjAfAcAnIgpAiQghgrgbgXgAENi5QAOgtABgOQAAgJgIAAIokAAQgFAAgBAFIAABMIg6AAIAAiBQAAgLALAAIEkAAIAAgoIA/AAIAAAoIEOAAIA1AbQgLBIgRAug");
	this.shape_15.setTransform(-75.8,-50);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AlQEcQA0gVBTgtQAmgWA4gvQhShbg1g2IgmAuIg5gfIA2hEIAyhNQAMgcAIgkQAIgkADgpIhuAAIAAhAIGFAAIAABAIjWAAIgMBXIDEAAQATgBAAATQAAAxgHAvQgGAtgMAlQgMAkgQAgQgPAfgUAcQgSAagWAYIguArQhAAvggASQgpAWg3AXgAjNguIBBBBIBHBOQAZgpAbhCQAKgiAEhDQAAgGgHABIieAAgACGFEIAAhDQAsANA5AGQAYAAAJgJQAGgGAAgOIAApQIBAAAIAAJgQAABPhcAAQhCgGgugMgAB0CiIAAnUIBAAAIAAHUg");
	this.shape_16.setTransform(-154.1,-49.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhhFOQgSAAgNgGQgPgFgKgLQgLgNgGgRQgFgUAAgZIAAjFIBBAAIAAC6QgBAWAGAJQAJANAaAAICyAAQAfAAANgSQAGgKAAhNIBBAJQAAA2gFAiQgEAhgHALQgRASgLAEQgOAGgkAAgAlhEaQAVgfAehIQAOgkANhSIBDAOQgUBbgQApQgiBOgXAhQgbgZgZgLgADzCpQgZg7gZgpIA8gdQAcAvAZA7QAaA8AWBIIg8AYQgahLgZg6gAgjBHIA2gfQAwBOAvBcIg6AaQg2hoglg9gAkoADQgKAAABgIIAAk/QgBgJAKAAIJUAAQAKAAAAAJIAAE/QAAAIgKAAgAAig6IDRAAIADgDIAAhKIjUAAgAjxg9QAAABAAAAQAAABAAAAQAAABABAAQABAAAAAAIDSAAIAAhNIjUAAgAAijEIDUAAIAAhJQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIjRAAgAjxkNIAABJIDUAAIAAhLIjSAAQAAAAgBAAQgBAAAAAAQAAABAAAAQAAABAAAAg");
	this.shape_17.setTransform(-228.2,-49.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AlbEiQAmgFA9gWIAdgPQASgLAPgPQAOgOAKgTQALgTAHgWIAKgxIiJAAQgIAAgBgJIAAjvQABgIAIAAIDrAAIAAhFIkwAAIAAhBIEwAAIAAg9IBAAAIAAA9IExAAIAABBIkxAAIAABFIDvAAQALAAgBAIIAADvQABAJgLAAIiTAAIAACLQAAAPAJAKQAJALATABIBhAAQAKAAAKgHQAHgFADhaIBAALIgJBdQgFAggFAFQgYAagWAAIijAAQgXgBgUgSQgWgUABgaIAAiwIh8AAQgGAxgMAkQgPAqgbAeQgqApgfAQQhFAegvAKgAjXhaIAAB5QAAABAAABQAAAAABABQAAAAABAAQABAAABAAIGkAAQAEAAAAgDIAAh5IgEgCImkAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_18.setTransform(-303.8,-50.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AB/FKIgChFQBJAQAbAAQATAAAMgMQALgLAFgXQAHgdABhPIgBhHQAAgHgJAAIoZAAQgHAAgBgFIgBgXIAAlTQgCgOAPAAIJCAAIAAA6IkFAAIAAA4IDqAAIAAA4IjqAAIAAAwIDuAAIAAA3IjuAAIAAAzIEUAAQAPAAAAALIAAAbQAABvgMB2QgEAdgPASQgMAQgTAJQgYAKgrAAQgnAAgygHgAjUgMIDKAAIAAgzIjKAAgAjUh2IDKAAIAAgwIjKAAgAjUkOIAAAwIDKAAIAAg4IjEAAQgHAAABAIgAlYEiQAegsASgxQAMghANhIIA/AOQgVBWgOAlQggBEgTAcQgYgXgagMgAicBqIA6gHQAPBaAMB1Ig6ABQgDhDgYiGgAABC7QgLgrgRgqIA4gPQAVA+AcB1Ig5AKQgHgsgNgtgABqBcIA1gWQAaAyAlBeIg3ASQgnhkgWgog");
	this.shape_19.setTransform(-381.3,-48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.1,-90,840.2,180);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXEZIFfpgIBQAvIlfJgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-32.7,43.2,65.6);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXEZIFfpgIBQAvIlfJgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-32.7,43.2,65.6);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmvGsIAAhVIGHAAIAAjuIlSAAIAAhUIFSAAIAAjSIloAAIAAhWIFtAAQgvg+gkggIBBg6QBGBLAnA1IgeAYIF0AAIAABWIljAAIAADSIFQAAIAABUIlQAAIAADuIGFAAIAABVg");
	this.shape.setTransform(205.9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AESGXQgrgXglgfQgmghgggpQgggqgagyQgagygVg8IkpAAIAADzQCPgbCLgnIAYBSQiAAnhMAPQifAdhaALIgUhTIBWgMIAArkQAAgZAZAAIKjAAQAZAAAAAZIAAD3QAAAbgZAAIkoAAIAgCAIFHAAIAABQIkuAAQASAxAgAxQAdAsAjAnQAiAkAfAVQAfAWAUgBQAYAAAFgZQAKg4gDhAIBOAYIgMBrQgHAqgLAUQgPAdgQALQgOAHgXABQgiAAgogZgAgFgDIghiAIjwAAIAACAIERAAgAkWlJIAAB0IInAAQAMAAAAgNIAAhnQAAgTgUAAIoLAAQgUAAAAATg");
	this.shape_1.setTransform(110,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AleC0IAAhdIK9AAIAABdgAlehXIAAhcIK9AAIAABcg");
	this.shape_2.setTransform(0,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Am4GbIAihLQAOgkAJglQAMg0AFiIIAAi2QAAgUAVAAIBhAAIgUg8QBAgIBygaIh3gdIAUg9IjRAAIAAhLIFxAAIAAg2IBQAAIAAA2IFrAAIAABLIiNAAIiVBSQBIAVBTAgIgTAxICkAAIAABKIkyAAIAABOIEeAAIAABLIkeAAIAABTIEHAAIAABKIkHAAIAABbIFDAAIAABKIquAAIAAhKIEZAAIAAhbIjwAAIAAhKIDwAAIAAhTIi/AAQgxBEgdAZIg4gzQgKBxgNAxQgfBggYApgAkggrIAACzQAjgiAmg6QAUgkAPg7IBLASIgRA6ICeAAIAAhOIk6AAQgJAAgBAKgADSh/Qg7gZh7gkQiUAxg8AMIGGAAIAAAAgAAVkDIAAABIADAAIBwg1IkyAAg");
	this.shape_3.setTransform(-111.2,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AD0EvQhAg8g2glIA2g+QB3BUCMCYIg6A9QhKhRg/g5gAm3FrQAzgZBZhCQAqgjBGhVIBCAxQhUBjgsAnQhZBFguAYgAm2BsIAAhSIDKAAIAAj8IidAAIAAhRICdAAIAAiFIBVAAIAACFIEtAAIAAiFIBWAAIAACFICfAAIAABRIifAAIAAD8IDMAAIAABSgAiXAaIEtAAIAAj8IktAAg");
	this.shape_4.setTransform(-206.3,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.2,-62,512.4,124);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXEZIFfpgIBQAvIlfJgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-32.7,43.2,65.6);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXEZIFfpgIBQAvIlfJgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-32.7,43.2,65.6);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Am5GbIAjhLQAOgkAJglQALg0AHiIIAAi2QAAgUAUAAIBiAAIgVg8QBAgIBxgaIh2gdIATg9IjQAAIAAhLIFxAAIAAg2IBQAAIAAA2IFrAAIAABLIiNAAIiWBSQBIAVBUAgIgUAxIClAAIAABKIkyAAIAABOIEeAAIAABLIkeAAIAABTIEHAAIAABKIkHAAIAABbIFDAAIAABKIquAAIAAhKIEZAAIAAhbIjwAAIAAhKIDwAAIAAhTIi/AAQgxBEgdAZIg5gzQgJBxgMAxQggBggYApgAkhgrIAACzQAkgiAmg6QAUgkAPg7IBMASIgRA6ICdAAIAAhOIk6AAQgJAAgCAKgADTh/Qg9gZh6gkQiUAxg8AMIGHAAIAAAAgAAWkDIAAABIACAAIBwg1IkyAAg");
	this.shape.setTransform(205,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AD0EvQhAg8g2glIA2g+QB3BUCMCYIg6A9QhKhRg/g5gAm3FrQAzgZBZhCQAqgjBGhVIBCAxQhUBjgsAnQhZBFguAYgAm2BsIAAhSIDKAAIAAj8IidAAIAAhRICdAAIAAiFIBVAAIAACFIEtAAIAAiFIBWAAIAACFICfAAIAABRIifAAIAAD8IDMAAIAABSgAiXAaIEtAAIAAj8IktAAg");
	this.shape_1.setTransform(109.9,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AleC0IAAhdIK9AAIAABdgAlehXIAAhcIK9AAIAABcg");
	this.shape_2.setTransform(0,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoF9QAmgMAhgRQAjgRAfgWIA+gyIA3g6QgWhOgThXQgThVgNheIo9AAIAAhKID1AAIAAhQIjHAAIAAhKIDHAAIAAhQIBNAAIAABQICxAAIAABKIixAAIAABQIDyAAQgLhTgIiOIBPAJQADBNAOCLIDjAAIAABKIjZAAQAcC6AUBKQAWgpASg5QASg7ANhLIBLAVQgbBxgVAzQgrBigbArIAdBUQARAnAGAAQAUAAADiSIBLAVQgEBAgLAyQgKAwgRAgQgTAfgbAAQgVAAgTgPIgYgWQgdg1gXg9QhDBEgnAbQhSAxguARgAmnFrICDgVIAAiiQg7Amg4AVIglhHQBBgZA0gkQA2gkAnguIiuAAIAAhJIDaAAIAAhFIBSAAIAABFIC+AAIAABJIjXAAQgiAvgvAvIAADNQBJgWA5gXIAgBGQhFAbhXAWQhWAVhoASgAi4CXIAyg4IA+A2QBAg4ApgwIA0A1QgmAvhAA5IBEBMIg0AzQhqh3hNg7gAD+l6IBDgxQAuAxAuBTIhFAtQggg4g6hIg");
	this.shape_3.setTransform(-110.2,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACHGjIgFhcQAxASBDAJQBeAAAQibQAJiXAAhJQAAgqgCgNQgDgTgJAAIjtAAIAAA3ICaAAQAMAAAAAKIAAC7QAAALgcAAQAUAoAkBxIhHAYIgOgsQkEAhhsAFIgMhSIDFgOIAAhLIicAAQgMAAAAgLIAAi7QAAgKAMAAICcAAIAAg3Ih6AAQgPAUgjAhIg9g0QBFg3AhhEIg3AAQgJAAAAgMIAAi/QAAgKAJAAIIyAAQAMAAgBAKIAAC/QABAMgMAAImsAAIgVAvIG9AAQARAAAJAOQAFAMAABAIgHD2QgICBgZA2QgVArghAXQgSANgXAGQgXAHgcAAQg0AAhGgSgAByDnIBRgMIgQgiIAygVIhzAAgAByBeIBYAAIAEgEIAAg9IgEgEIhYAAgAg1AdIAAA9IACAEIBbAAIAAhFIhbAAQgEAAACAEgAEBkjIBZAAIAEgEIAAhCIgEgDIhZAAgABckjIBaAAIAAhJIhaAAgAhOlpIAABCIADAEIBdAAIAAhJIhdAAQgEAAABADgAmtGbIAAhWQBBAUAdAAQAYAAAPgVQANgVAJgqQALgtAEgvQAFgygCg1IhDBFQghAdgcASIg3g6QA0ghAtgrQAqgrAigyQgHgxgbhTQgiAtgrAqIhBguQA+g8Apg9QgXgohGhOIBCgwQArAsAdAwQAYgsAWg9IBIAcQgiBXgnBCQAiBKAQA/QAMA6AHA4QAFA2AAA1QgGCHgWBHQgSA5gaAgQgPASgRAKQgSAKgWAAQgmgBhIgYg");
	this.shape_4.setTransform(-206.8,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.2,-62,512.4,124);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXEZIFfpgIBQAvIlfJgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-32.7,43.2,65.6);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXEZIFfpgIBQAvIlfJgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-32.7,43.2,65.6);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AmvGsIAAhVIGHAAIAAjuIlSAAIAAhUIFSAAIAAjSIloAAIAAhWIFtAAQgvg+gkggIBBg6QBGBLAnA1IgeAYIF0AAIAABWIljAAIAADSIFQAAIAABUIlQAAIAADuIGFAAIAABVg");
	this.shape.setTransform(-0.2,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AmvGsIAAhVIGHAAIAAjuIlSAAIAAhUIFSAAIAAjSIloAAIAAhWIFtAAQgvg+gkggIBBg6QBGBLAnA1IgeAYIF0AAIAABWIljAAIAADSIFQAAIAABUIlQAAIAADuIGFAAIAABVg");
	this.shape.setTransform(-0.2,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AhDGpIAAr7IlsAAIAAhVINfAAIAABVImfAAIAAByQBfA5BbA/QBcA/BYBDIg2BMQi+iWh6hUIAAItg");
	this.shape.setTransform(-0.2,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AhDGpIAAr7IlsAAIAAhVINfAAIAABVImfAAIAAByQBfA5BbA/QBcA/BYBDIg2BMQi+iWh6hUIAAItg");
	this.shape.setTransform(-0.2,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AiJG3IAAgrIjDAAIAAArIhSAAIAArjQgBgMAPAAIBiAAIArh+IBMAcIghBiICPAAQASAAAAAQIAALfgAlME7IDDAAIAAjkIjDAAgAlMjcIAADiIDDAAIAAjiQAAgKgMAAIisAAQgNAAACAKgACQGtIhhgYIAAhgIBeAcQAqAJAcAAQAfAAASgNQAWgRAYg0QAMghALiUQAGhlAAiRIgChIQgDgXgKAAIjjAAQgMArgRAoQgQAjgUAgIhOgaQAbguAlhgQAQgxAOhoIBRAHIgMBSIERAAQASAEAFAGQAHAJAAAcQgCEKgEBuQgCBEgIA2QgHA3gOAqQgOArgTAcQgTAdgaAPQgNAKgVAFIgtAEQgiAAgsgHgACFAoQgbhLgihJIBMgZIBGCzQAdBSAOAzIhOAVQgVhSgdhOg");
	this.shape.setTransform(-0.2,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AiJG3IAAgrIjDAAIAAArIhSAAIAArjQgBgMAPAAIBiAAIArh+IBMAcIghBiICPAAQASAAAAAQIAALfgAlME7IDDAAIAAjkIjDAAgAlMjcIAADiIDDAAIAAjiQAAgKgMAAIisAAQgNAAACAKgACQGtIhhgYIAAhgIBeAcQAqAJAcAAQAfAAASgNQAWgRAYg0QAMghALiUQAGhlAAiRIgChIQgDgXgKAAIjjAAQgMArgRAoQgQAjgUAgIhOgaQAbguAlhgQAQgxAOhoIBRAHIgMBSIERAAQASAEAFAGQAHAJAAAcQgCEKgEBuQgCBEgIA2QgHA3gOAqQgOArgTAcQgTAdgaAPQgNAKgVAFIgtAEQgiAAgsgHgACFAoQgbhLgihJIBMgZIBGCzQAdBSAOAzIhOAVQgVhSgdhOg");
	this.shape.setTransform(-0.2,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("ACHGjIgFhcQAxASBDAJQBeAAAQibQAJiXAAhJQAAgqgCgNQgDgTgJAAIjtAAIAAA3ICaAAQAMAAAAAKIAAC7QAAALgcAAQAUAoAkBxIhHAYIgOgsQkEAhhsAFIgMhSIDFgOIAAhLIicAAQgMAAAAgLIAAi7QAAgKAMAAICcAAIAAg3Ih6AAQgPAUgjAhIg9g0QBFg3AhhEIg3AAQgJAAAAgMIAAi/QAAgKAJAAIIyAAQAMAAgBAKIAAC/QABAMgMAAImsAAIgVAvIG9AAQARAAAJAOQAFAMAABAIgHD2QgICBgZA2QgVArghAXQgSANgXAGQgXAHgcAAQg0AAhGgSgAByDnIBRgMIgQgiIAygVIhzAAgAByBeIBYAAIAEgEIAAg9IgEgEIhYAAgAg1AdIAAA9IACAEIBbAAIAAhFIhbAAQgEAAACAEgAEBkjIBZAAIAEgEIAAhCIgEgDIhZAAgABckjIBaAAIAAhJIhaAAgAhOlpIAABCIADAEIBdAAIAAhJIhdAAQgEAAABADgAmtGbIAAhWQBBAUAdAAQAYAAAPgVQANgVAJgqQALgtAEgvQAFgygCg1IhDBFQghAdgcASIg3g6QA0ghAtgrQAqgrAigyQgHgxgbhTQgiAtgrAqIhBguQA+g8Apg9QgXgohGhOIBCgwQArAsAdAwQAYgsAWg9IBIAcQgiBXgnBCQAiBKAQA/QAMA6AHA4QAFA2AAA1QgGCHgWBHQgSA5gaAgQgPASgRAKQgSAKgWAAQgmgBhIgYg");
	this.shape.setTransform(-0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("ACHGjIgFhcQAxASBDAJQBeAAAQibQAJiXAAhJQAAgqgCgNQgDgTgJAAIjtAAIAAA3ICaAAQAMAAAAAKIAAC7QAAALgcAAQAUAoAkBxIhHAYIgOgsQkEAhhsAFIgMhSIDFgOIAAhLIicAAQgMAAAAgLIAAi7QAAgKAMAAICcAAIAAg3Ih6AAQgPAUgjAhIg9g0QBFg3AhhEIg3AAQgJAAAAgMIAAi/QAAgKAJAAIIyAAQAMAAgBAKIAAC/QABAMgMAAImsAAIgVAvIG9AAQARAAAJAOQAFAMAABAIgHD2QgICBgZA2QgVArghAXQgSANgXAGQgXAHgcAAQg0AAhGgSgAByDnIBRgMIgQgiIAygVIhzAAgAByBeIBYAAIAEgEIAAg9IgEgEIhYAAgAg1AdIAAA9IACAEIBbAAIAAhFIhbAAQgEAAACAEgAEBkjIBZAAIAEgEIAAhCIgEgDIhZAAgABckjIBaAAIAAhJIhaAAgAhOlpIAABCIADAEIBdAAIAAhJIhdAAQgEAAABADgAmtGbIAAhWQBBAUAdAAQAYAAAPgVQANgVAJgqQALgtAEgvQAFgygCg1IhDBFQghAdgcASIg3g6QA0ghAtgrQAqgrAigyQgHgxgbhTQgiAtgrAqIhBguQA+g8Apg9QgXgohGhOIBCgwQArAsAdAwQAYgsAWg9IBIAcQgiBXgnBCQAiBKAQA/QAMA6AHA4QAFA2AAA1QgGCHgWBHQgSA5gaAgQgPASgRAKQgSAKgWAAQgmgBhIgYg");
	this.shape.setTransform(-0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgoF9QAlgMAigRQAigRAhgWIA9gyIA4g6QgYhOgShXQgShVgNheIo9AAIAAhKID0AAIAAhQIjHAAIAAhKIDHAAIAAhQIBNAAIAABQICxAAIAABKIixAAIAABQIDyAAQgKhTgJiOIBPAJQADBNANCLIDjAAIAABKIjZAAQAdC6AUBKQAWgpASg5QASg7ANhLIBMAVQgcBxgVAzQgqBigbArIAcBUQARAnAGAAQAUAAADiSIBLAVQgEBAgKAyQgLAwgQAgQgVAfgaAAQgVAAgTgPIgYgWQgeg1gVg9QhDBEgoAbQhRAxgvARgAmmFrICBgVIAAiiQg6Amg4AVIglhHQBBgZA0gkQA2gkAnguIiuAAIAAhJIDbAAIAAhFIBSAAIAABFIC9AAIAABJIjXAAQgjAvguAvIAADNQBJgWA5gXIAgBGQhEAbhYAWQhWAVhoASgAi5CXIAzg4IA/A2QA/g4AqgwIAzA1QgmAvhAA5IBFBMIg0AzQhrh3hOg7gAD+l6IBDgxQAuAxAvBTIhGAtQggg4g6hIg");
	this.shape.setTransform(-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgoF9QAlgMAigRQAigRAhgWIA9gyIA4g6QgYhOgShXQgShVgNheIo9AAIAAhKID0AAIAAhQIjHAAIAAhKIDHAAIAAhQIBNAAIAABQICxAAIAABKIixAAIAABQIDyAAQgKhTgJiOIBPAJQADBNANCLIDjAAIAABKIjZAAQAdC6AUBKQAWgpASg5QASg7ANhLIBMAVQgcBxgVAzQgqBigbArIAcBUQARAnAGAAQAUAAADiSIBLAVQgEBAgKAyQgLAwgQAgQgVAfgaAAQgVAAgTgPIgYgWQgeg1gVg9QhDBEgoAbQhRAxgvARgAmmFrICBgVIAAiiQg6Amg4AVIglhHQBBgZA0gkQA2gkAnguIiuAAIAAhJIDbAAIAAhFIBSAAIAABFIC9AAIAABJIjXAAQgjAvguAvIAADNQBJgWA5gXIAgBGQhEAbhYAWQhWAVhoASgAi5CXIAzg4IA/A2QA/g4AqgwIAzA1QgmAvhAA5IBFBMIg0AzQhrh3hOg7gAD+l6IBDgxQAuAxAvBTIhGAtQggg4g6hIg");
	this.shape.setTransform(-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AEaG7IAAgsInKAAIAAAsIhSAAIAAlvIiTAfIgghNQBdgQBbgXQBagXBXgfIBRgnImuAAIAAhOIFmAAIAAhbIkMAAIAAhOIEMAAIAAhdIBQAAIAABdID5AAIAAAiIBUhhIA/A0QhtB/g3A1IDBAAIAABOIkeAAQh2BJhFAhIF9AAQASAAgBAPIAAGogAiwFBIHKAAIAAhOInKAAgAiwBcIAABJIHKAAIAAhJQAAgLgNAAImyAAQgNAAACALgAANi0IBwAAIApghIA3g6IjQAAg");
	this.shape.setTransform(-0.8,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AESGYQgrgYglgfQgmghgggpQgggqgagyQgagygVg8IkpAAIAADzQCPgbCLgnIAYBTQiAAmhMAPQifAdhaALIgUhTIBWgMIAArlQAAgYAZAAIKjAAQAZAAAAAYIAAD4QAAAbgZAAIkoAAIAgCAIFHAAIAABQIkuAAQASAxAgAxQAdAtAjAmQAiAkAfAVQAfAWAUAAQAYAAAFgaQAKg4gDhAIBOAXIgMBsQgHAqgLAUQgPAdgQALQgOAHgXABQgiAAgogYgAgFgDIghiAIjwAAIAACAIERAAgAkWlJIAAB0IInAAQAMAAAAgNIAAhnQAAgTgUAAIoLAAQgUAAAAATg");
	this.shape.setTransform(-0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AESGYQgrgYglgfQgmghgggpQgggqgagyQgagygVg8IkpAAIAADzQCPgbCLgnIAYBTQiAAmhMAPQifAdhaALIgUhTIBWgMIAArlQAAgYAZAAIKjAAQAZAAAAAYIAAD4QAAAbgZAAIkoAAIAgCAIFHAAIAABQIkuAAQASAxAgAxQAdAtAjAmQAiAkAfAVQAfAWAUAAQAYAAAFgaQAKg4gDhAIBOAXIgMBsQgHAqgLAUQgPAdgQALQgOAHgXABQgiAAgogYgAgFgDIghiAIjwAAIAACAIERAAgAkWlJIAAB0IInAAQAMAAAAgNIAAhnQAAgTgUAAIoLAAQgUAAAAATg");
	this.shape.setTransform(-0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50,100.2,100);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgoF9QAlgMAigRQAigRAhgWIA9gyIA4g6QgYhOgThXQgRhVgNheIo9AAIAAhKID0AAIAAhQIjHAAIAAhKIDHAAIAAhQIBNAAIAABQICxAAIAABKIixAAIAABQIDyAAQgKhTgJiOIBPAJQADBNAOCLIDiAAIAABKIjZAAQAdC6AUBKQAWgpASg5QASg7ANhLIBMAVQgcBxgVAzQgqBigbArIAcBUQARAnAGAAQAUAAADiSIBLAVQgEBAgKAyQgLAwgQAgQgVAfgaAAQgVAAgUgPIgXgWQgeg1gVg9QhDBEgoAbQhRAxgvARgAmmFrICBgVIAAiiQg6Amg4AVIglhHQBBgZA0gkQA2gkAnguIiuAAIAAhJIDbAAIAAhFIBSAAIAABFIC9AAIAABJIjXAAQgjAvguAvIAADNQBJgWA5gXIAgBGQhEAbhYAWQhWAVhoASgAi5CXIAzg4IA/A2QA/g4AqgwIAzA1QgnAvg/A5IBFBMIg0AzQhrh3hOg7gAD+l6IBDgxQAuAxAvBTIhGAtQggg4g6hIg");
	this.shape.setTransform(206,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACGGjIgDhcQAwASBDAJQBeAAAQibQAJiXAAhJQAAgqgCgNQgCgTgLAAIjrAAIAAA3ICZAAQAMAAAAAKIAAC7QAAALgcAAQAVAoAjBxIhHAYIgOgsQkEAhhsAFIgMhSIDGgOIAAhLIidAAQgMAAABgLIAAi7QgBgKAMAAICdAAIAAg3Ih7AAQgPAUgjAhIg8g0QBEg3AhhEIg3AAQgJAAAAgMIAAi/QAAgKAJAAIIxAAQANAAAAAKIAAC/QAAAMgNAAImqAAIgWAvIG9AAQASAAAIAOQAFAMAABAIgHD2QgICBgZA2QgUArgiAXQgSANgXAGQgXAHgcAAQg0AAhHgSgABzDnIBQgMIgQgiIAzgVIhzAAgABzBeIBXAAIAEgEIAAg9IgEgEIhXAAgAg2AdIAAA9IADAEIBcAAIAAhFIhcAAQgEAAABAEgAEBkjIBZAAIAEgEIAAhCIgEgDIhZAAgABbkjIBbAAIAAhJIhbAAgAhOlpIAABCIAEAEIBcAAIAAhJIhcAAQgFAAABADgAmtGbIAAhWQBBAUAeAAQAWAAAQgVQANgVAKgqQAKgtAEgvQAFgygCg1IhEBFQggAdgcASIg3g6QA1ghAsgrQAqgrAigyQgIgxgahTQgiAtgrAqIhBguQA+g8Apg9QgWgohHhOIBCgwQAqAsAeAwQAYgsAWg9IBIAcQgiBXgnBCQAiBKAQA/QAMA6AHA4QAFA2ABA1QgICHgVBHQgSA5gaAgQgOASgSAKQgSAKgVAAQgngBhIgYg");
	this.shape_1.setTransform(109.4,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AleC0IAAhdIK9AAIAABdgAlehXIAAhcIK9AAIAABcg");
	this.shape_2.setTransform(0,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmvGsIAAhVIGHAAIAAjuIlSAAIAAhUIFSAAIAAjSIloAAIAAhWIFtAAQgvg+gkggIBBg6QBGBLAnA1IgeAYIF0AAIAABWIljAAIAADSIFQAAIAABUIlQAAIAADuIGFAAIAABVg");
	this.shape_3.setTransform(-110.3,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AESGXQgrgXglgfQgmghgggpQgggqgagyQgagygVg8IkpAAIAADzQCPgbCLgnIAYBSQiAAnhMAPQifAdhaALIgUhTIBWgMIAArkQAAgZAZAAIKjAAQAZAAAAAZIAAD3QAAAbgZAAIkoAAIAgCAIFHAAIAABQIkuAAQASAxAgAxQAdAsAjAnQAiAkAfAVQAfAWAUgBQAYAAAFgZQAKg4gDhAIBOAYIgMBrQgHAqgLAUQgPAdgQALQgOAHgXABQgiAAgogZgAgFgDIghiAIjwAAIAACAIERAAgAkWlJIAAB0IInAAQAMAAAAgNIAAhnQAAgTgUAAIoLAAQgUAAAAATg");
	this.shape_4.setTransform(-206.2,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.2,-62,512.4,124);


(lib.torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiUFMQg9iJAAjDQAAjBA9iKQA+iKBWAAQBXAAA9CKQA+CKAADBQAADDg+CJQg9CKhXAAQhWAAg+iKg");
	this.shape.setTransform(21,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.torso, new cjs.Rectangle(0,0,42,94), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC8266").s().p("AgBgBIABABIACACIAAAAg");
	this.shape.setTransform(13.6,-31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3C7B9").s().p("AgqgBIBVgOQgNAagYAEIgHABQgVAAgUgRg");
	this.shape_1.setTransform(9.2,-37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC8266").s().p("Ag2ghQARABAhAPQAeANATAAIAAAAIAKABQgEATgOAFQgNAFgRgIQgOgGgLAGIgTARQgUghADgjg");
	this.shape_2.setTransform(9.3,-31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D4AE97").s().p("AgpAsQgCgOAHggQAFgdgEgSQAhgTAcATQgEAlAVAfQgSAfgRAHQgHADgGAAQgRAAgTgQg");
	this.shape_3.setTransform(1.3,-29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFE").s().p("AguAXIgCgTQAGgLARgGQAZgJACgCIAZACQAOADAIAHIgBAXIhVAOg");
	this.shape_4.setTransform(8.6,-40.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4AE97").s().p("AAUA4IgKgBIgCgDIgCgBIAEAEQgSAAgfgOQghgPgRgBIABgfIAJACQAYAUAZgEQAYgEAMgaIABgYQArgOAnABIABBaIgKAKIgRABQgJACgFAIg");
	this.shape_5.setTransform(12.8,-37.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC8266").s().p("AgNAEQgCgGAFgFQAHgIAHACQAGADAFAJIgTAQQgHgFgCgGg");
	this.shape_6.setTransform(1.4,-44);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC8266").s().p("AgCAAIAFgDQABADgBAEg");
	this.shape_7.setTransform(18.6,-27.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC8266").s().p("AgEAFIAJgJIgIAJg");
	this.shape_8.setTransform(21.3,-33);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC8266").s().p("AgJgDIATAAQgFAHgFAAQgEAAgFgHg");
	this.shape_9.setTransform(-17.2,-18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC8266").s().p("AAAgDIAPgBQgFAGgJACIgPABQAFgHAJgBg");
	this.shape_10.setTransform(19.3,-32);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CD9B80").s().p("AgEACQgBgCAEgFIAEACIADACIgEAHQgGgCAAgCg");
	this.shape_11.setTransform(-31.2,-33.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3C7B9").s().p("AgDAKQgCgBgBgEQgCgEABgCQABgCADgDIAFgFIAGANQAAAGgEACIgDACIgEgCg");
	this.shape_12.setTransform(-19.1,3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CD9B80").s().p("AgBAUQgJgCgCgIQgCgEABgJQABgIADgEQAEgGAFADQAFACAEAIIAFAKQgBASgMAAIgCAAg");
	this.shape_13.setTransform(-27.7,-36.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CD9B80").s().p("AgbAaQgKgIAFgMQAGgPAAgDQAFgJAJgCQAGgBALAAIAbgBIACATIgBAgQgcgUggAUg");
	this.shape_14.setTransform(0.5,-37.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC8266").s().p("AgRgDQgCgoAkgZQAAADgGAQQgFAMAKAIQAEARgGAdQgGAgABAOIgLAGQgEgYgLgwg");
	this.shape_15.setTransform(-3.9,-31.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BC8266").s().p("AABAfQgJgNABgSIgUAAIgDgTIANgfQANAAAKAJQAFAEALAPQAAAFAGAfQAFAWgGAPQgSgLgIgJg");
	this.shape_16.setTransform(-13.4,-18.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CD9B80").s().p("AgeAtIgBhZIAegBQAYAJAHASQAGASgSASIgUAUQgKAIgMAAIgGgBg");
	this.shape_17.setTransform(24.9,-38.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CD9B80").s().p("AANAkQgWgMgJgfQgDgJgWgHQgZgHgJgOQAjgCAtAcQAzAeAYACIgNAfQgiAAgSgJg");
	this.shape_18.setTransform(-22.9,-25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CD9B80").s().p("AACAgQgqgcgFgOQgGgPAYgWQALARAJgRIATAAQgBATALAMQAIAKASAJIAAAUIgJALQgEgEgPAOQgEAEgDAAQgHAAgEgQgAAMgvIAAAAIABAAgAAMgvg");
	this.shape_19.setTransform(-15.4,-13.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CD9B80").s().p("AgGAWQgkgGgFghIAAgeIAKAAIAzABQAQABAGAGQADAGACAVIAHA8QgLgSgrgIg");
	this.shape_20.setTransform(-14.3,-37.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#824E41").s().p("AhfArIAEgUIATgRIA7gYQAhgQAZgIIAcgIQASgBAFAXQgVAPghANIg3AWIgbALQgRAGgGAMIgbABg");
	this.shape_21.setTransform(10.2,-44.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3C7B9").s().p("Ag/AxQgKgCgDgJQgHgUAWgMIBagxQAigQAMASQAIAMgHAPQgGAOgMAEIg1ATQgdALgMARIgbgCg");
	this.shape_22.setTransform(13.8,-7.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3C7B9").s().p("AgoAUQAAgogIgWQgFgNALgKQAGgFAPgJQAEgEAEgBQAGAAADAFQAHAOgHAYQgJASgDAKQgGAQAJARIANgUIANgcQAIgQANAGQAaALgOA0QgKAmgogQIgLgHQgEAEgCATQgCAQgNAGQgEgTAAgug");
	this.shape_23.setTransform(-22.1,-5.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC8266").s().p("AisAyIAJgKQAugqBNgVQAsgNBbgVQAGgBALAAQAGgCgFgQQgEgQAUAGQAWAGgDgRQAZAGgBAXQgFAaACALIg0ADQgcAEgVATQgLAJgggBQgigBgQAJIgvARQgcAKgLAVQgYgLgLAVQgPAbgHADg");
	this.shape_24.setTransform(5.8,-15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CD9B80").s().p("AihBQQgKgIADgaQAHgCAPgbQAMgUAYAKQALgUAcgLIAugQQARgJAiABQAfABALgKQAVgTAdgEIA0gDQgGATgVAFIgkAGQgoAWgUAKQgkARgdADQgQABgRAQQgSAVgJAJIgVATQgNAJgNAFQgOAFgKAAQgIAAgEgEg");
	this.shape_25.setTransform(5.7,-10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#824E41").s().p("AiYBQQAFgOgEgXQgHgfAAgGQAiAAAKgCQAVgGAFgcIANgGQAbAWAXgIQARgIARgeIASgRQAMgGAOAGQASAIAMgFQAOgFAFgUIAcAAIAAgBIABABIgBAAIAMApIgGADIAGAEIARAOQADASgWgGQgUgGAEAQQAFAPgGACQgLAAgGABQhbAUgsANQhNAWguArg");
	this.shape_26.setTransform(4.7,-21.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3C7B9").s().p("AhJAfIgZgCIA3gXQAhgMAUgPQAGgCADgGIADgMQALAVAGAEQALAJAUgKQAJgFAJAGQAIAFADALQgLABgKAKQgMAMgGAFIgeABQgmgCgrAOQgIgHgOgDg");
	this.shape_27.setTransform(18.8,-45.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BC8266").s().p("AACDWQgBgTgQhVQgNhAANgnQAMgkAChKQABhLALgkIAADJQAAB4ALBPQACAQgCAFQgDAIgLAAIgGgBg");
	this.shape_28.setTransform(9.7,33.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3C7B9").s().p("AiGAfQAXgyAbgJQAcgKAqAcQAOAKALgFQAHgCAPgJQAmgUAOgCQAdgEAVAfQhGgCg8AjQgZAOgnADIgLAAQgfAAghgIg");
	this.shape_29.setTransform(4.5,-51.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3C7B9").s().p("Ag0gVQAzAEAdgWQARgNAaAFIAqAJQABAGAMAQQAJANgCAKQgLAAgvgHQgkgEgXADQgKABgDAAQgGADADAKQAAACAEABIAIACIABAeQgqgKgfgBQgngBgiAOQALhNBGAGg");
	this.shape_30.setTransform(-20.3,-44.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CD9B80").s().p("AhcAwQgZgGgMgMQACgLgJgNQgMgPgBgGIABgBQAmAJAkgCQAngCAagPQA8gjBFABQAWAIAIAXIgDAMQgDAGgGACQgFgYgSABIgcAJQgZAIgiAPIg6AZQgFgKgGgCQgHgDgHAIQgGAGACAHQACAFAIAFIgEAUQgJgFgegIg");
	this.shape_31.setTransform(6,-46.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CD9B80").s().p("Ai9DtQgHgJACgVQAJhJAOiTQAIgCASACQAQgBAGgOQAEgKAGgBQAFAAAFAKQAIAUATgHQAJgDACgJQACgGAAgLQABgHgBgPQABgOAKgJQAUA4gFBjQgGBtALAtQACgiAShDQAQhBACgjIABgSQACgJAJgCQAggHAIgWQAGgQgFgiQgEgbAWgnQAXgoAYgGQAPgEAHgQQAIgTAGgEQAFACAKARQAIANAMAAIABAeQgLAjgCBLQgDBJgMAmQgMAnANA/QARBVAAATIlaACQgWAAgHgJg");
	this.shape_32.setTransform(-8.8,30.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D4AE97").s().p("Ah9FRQAFhkgUg4QgKAKgBANQABAPgBAHQAAALgCAGQgCAJgJADQgTAHgIgUQgFgKgFABQgGAAgEAKQgGAOgQABQgSgBgIABQAEhegYhwQgOg+gpiKQgRg4ADhSQACgwAKhgQAhgOAoACQAeABArAKQAEAhAlAGQAsAIALASIgHg9QgCgVgEgGQgFgGgQAAIg0gBIgKgBIgIgCQgFgBAAgBQgDgLAGgCQAEgBAJgBQAXgDAkAFQAwAHALAAQAMAMAZAGQAeAHAIAGIAEAJQgLAAgGACQgJABgFAJQglAZACAoQALAyAEAXQgFAcgWAHQgJADgiAAQgLgPgFgEQgLgJgNABQgYgDgygeQgvgdgjADQAJAOAZAHQAXAGACAKQAKAfAXAMQASAKAhgBIADATIgUAAQgYAXAFAPQAGAPArAcIAAgBIAAABIAAAAQAGAXAMgLQAPgOAEADIADAxQgDAZAKAIQAKAHAagIQANgFANgJIAVgTQAJgJARgVQARgQAQgCQAegDAkgRQAUgJAogXIAkgGQAVgEAGgUQgDgLAGgaQABgXgagGIgQgPQABgDgBgEIgMgpQANAAAEgBQAJgCAFgHIAKgKQAPACANgJIAVgVQASgRgGgUQgHgSgZgJQAGgFAMgMQAKgJAMgCIA5C+QARA/gkAjQhKBFguA2Qg8BGgmBEQgMAAgIgNQgKgRgFgCQgGAEgIATQgHAQgPAFQgYAGgWAoQgWAnAEAaQAFAigGAQQgIAWggAIQgJABgCAKIgBASQgCAjgRBBQgSBEgCAhQgLgtAGhtgAjDgEQgDADAAABQgBACABAFQABADACABQAFADAEgCQADgDAAgFIgFgNIgHAFgAjqiyQgEABgEAEQgPAJgGAFQgLAKAFANQAIAXAAAoQAAAuAEATQANgGACgQQACgSAEgFIALAIQApAQAKgnQAOg1gagLQgNgFgIAPIgNAcIgOAWQgJgSAGgRQADgKAJgRQAIgZgIgOQgDgFgFAAIgBAAgACnibIhbAyQgWAMAHAUQADAJAKACIAbACQAMgRAegLIA1gTQAMgFAGgOQAHgPgIgMQgHgKgMAAQgLAAgQAIgAk9lxQABACAHABIADgIIgDgCIgFgBQgEAGABACgAkemkQgDAFgBAHQgBAKACAFQACAHAJACQAOADACgVIgFgKQgEgIgFgCIgEgBQgDAAgDADg");
	this.shape_33.setTransform(0,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-34.9,-55.4,69.9,111), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AEaG7IAAgsInKAAIAAAsIhSAAIAAlvIiTAfIgghNQBdgQBbgXQBagXBXgfIBRgnImuAAIAAhOIFmAAIAAhbIkMAAIAAhOIEMAAIAAhdIBQAAIAABdID5AAIAAAiIBUhhIA/A0QhtB/g3A1IDBAAIAABOIkeAAQh2BJhFAhIF9AAQASAAgBAPIAAGogAiwFBIHKAAIAAhOInKAAgAiwBcIAABJIHKAAIAAhJQAAgLgNAAImyAAQgNAAACALgAANi0IBwAAIApghIA3g6IjQAAg");
	this.shape.setTransform(-0.8,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-50.1,-50,100.2,100), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AgTAyQgXgIgdgaQgggegRgOIATgZQBOgKA0AZQA2AaAmBBIhJADIgNABQghAAgVgHg");
	this.shape.setTransform(125.6,-99.9,1.388,1.388);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AhOBuQgngRACgzIgCADIAbg1QAPgfAJgXQAQgsAIgLQATgXAhAQQAhAQAbAVQAeAaAMAaQANAfgOAaQgQAhgvgCQgLgBgQAGIgcAMIAIA+Qg5gMgWgKg");
	this.shape_1.setTransform(106.6,-70.9,1.388,1.388);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglgKQAKgtAzgWQAYBegKAZQgJAZhCALQgGhBAGgXg");
	this.shape_2.setTransform(7.9,76,1.388,1.388);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhggKIDAAAIABAMIjAAJg");
	this.shape_3.setTransform(-13.6,-198.9,1.388,1.388);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXCTIgshLQgbgugXgaQgLgLgegHQgngIgWgGIA4gwIgohjQBogRAZAMQAXAMAwBWQAKARAYAPQAUAMAZAHQApANAIAOQAKARgcAkQgMAPgMAgQgPAmgGAMQgHALgOAOIgZAXQgdgbgKgQg");
	this.shape_4.setTransform(173.3,-113.1,1.388,1.388);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AGuHFQgigBg6hFQhhhyixArQhBARgdgaQgegaAMhCQACgMARgSIAkgoIhngFQiMAHhFgBQh5gChQg2IhVg1IAVgiIBKgHIhjhpIB3hUIgFgEQARgIAmgNQAggMAJgQQATghgOgUQgQgWgrAKQgIACgWAJQgTAIgLABQgQADgYAAIgpAAIALgwQAHgcAKgPQAigwBFgPQA+gNBLAQQBJAQA6AlQA8AnAVAuQAeBDAJAZQAUA0AGAqQAHAvAPASQASAVAsgCQASgBAcAFIAyAIIAehmQAdAWA3AmQAuAiAXAdQAUAYAaA8QAZA9ATAZQA0BGBSAnQAoATAEANQAEAOgiAaQgJAHgLAMIgSAVQg+BAgjAAIgBAAgAmiioQgJAKgQAsQgIAXgQAgIgaAzIABAAQgCAyAnAQQAXAKA6AMIgKg+IAegLQAQgGAKAAQAvADAQggQAOgcgNgeQgLgbgfgZQgagWgigQQgNgGgMAAQgQAAgLAOgAlUk5IgTAZQARAOAgAfQAdAaAXAIQAaAIAqgCIBJgDQgmhCg2gaQgmgSgyAAQgVAAgWADg");
	this.shape_5.setTransform(158.9,-63.8,1.388,1.388);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231916").s().p("AgdASQgTgoAZg3IA9CUIgUAHQgngqgIgSg");
	this.shape_6.setTransform(105.4,0.2,1.388,1.388);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231916").s().p("ABQANQgegigbgLQgbgLgvAAQg2ACgagCIAEgaQBngHA1AXQBLAfAcBdIg0g6g");
	this.shape_7.setTransform(265,144.1,1.388,1.388);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231916").s().p("AgFBbQgZgPgBgvQgBgYgLgjIgUhDQA1AOATBOQALAsAGANQANAeAZAMQgUAEgQAAQgVAAgMgHg");
	this.shape_8.setTransform(-78.1,58.8,1.388,1.388);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231916").s().p("Ag/AnIAyhCIgygtQA7gSAdAeQASASAPA3QAEAKABASIABAng");
	this.shape_9.setTransform(189.1,85.9,1.388,1.388);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231916").s().p("AgQAwQg9ghACgZQABgSAQgXQARgYAMAAQAwgCAKADQAiAJADAqIAKBkIgIAAQggAAg0gdg");
	this.shape_10.setTransform(-137.4,43.1,1.388,1.388);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231916").s().p("AANBlQgXgDgGgKQgOgYgPgnIgWg+QAoAVAWgcQAMgQAVgpQAjAfAHBHQAIBIgeAYQgHAFgNAAIgPgBgAhHgmIACgCIACADIgEgBg");
	this.shape_11.setTransform(272.4,67.9,1.388,1.388);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231916").s().p("ACeEiQgRgVAHgrQAcibhFhmQgZgmgygcQg7gihxgyQghgPgSgGQgdgLgYgCQgrgDgQgYQgPgWADgwQA0AlBOAjQAsAUBZAlQCdBGBCBkIBQgrQghA4ALAfQAMAlBMARQhgAZgNBDQgJAuAiBaQg2gBgVgWg");
	this.shape_12.setTransform(194.3,80.9,1.388,1.388);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231916").s().p("ACICrQgogPgBghQAAgTASgtQACgEgBgHIgDgRQgnADgYAYQgTASgQAoQgIATgPARQgTASgPABQg7ADhTAAIiLgBQgSg2AggjQAvgiAUgSQAwgpBFhCIBzhsIBMCcIAuhKQAfgiAfgHQAngIAmAkQAoAnAaBLQAbBLgPApQgOAqg7ASQgaAIgaAAQghAAghgNg");
	this.shape_13.setTransform(0.6,183.5,1.388,1.388);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231916").s().p("AGCFKQhCgegagGQg0gMgxAWQhMAhhAhIQg2hFgggeQg4g0hEACQgJAAgNgGIgWgKIASgYIBFgDIhHgpQgpgYgNgWQgyhWgigiQg2g2hQgNQgWgDgXg1QgZhAgMgaQgCgFAPgPQAPgPAKgBQAYgCAkADIBDAFIgpAuIDLBjQAoAUAqADQAlADA0gJQAmgHAtgCIALAwQAFAVgEAJQgHARgRAVIgcAlIgZgUQgPgLgMgHQgRgJgbAHQAbAfA6BKQA0BEAgAjQBpBxB+AaQBJAPBfAtQAQAIATAVIAfAlIgXAWIiDg2gAClivQg3gFhAgsQAigBAnABQA0ADBwANQgyAig0AAIgQgBgAAqjjIAEADIgEAAIAAgDgAAujgIAAAAg");
	this.shape_14.setTransform(117.1,56.5,1.388,1.388);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231916").s().p("AhHghICOAAQgqBDgUAAQgTAAg9hDg");
	this.shape_15.setTransform(-148.8,-205.8,1.388,1.388);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231916").s().p("ALBJyQgTAAgGgGQgmgvgVg0QghhOgngXQgpgZhTAMQhJALgYAAQglACgSgMQgSgMgNghQgJgYgRhFQgLgtgUgFQgQgEghAZQgfAWgTgJQgQgIgQgkQgGgPgVgRQgagUgJgKIg3gyIgegbQgSgPgMgBQgLABgQAQIgeAgIgHgqQgFgYgGgQQgPgogRgOQgXgTgyADQhGADhLgRQhJgPhCgfIhGgrQgrgagjgGIAAkuQBEAHARgxQAGgPAEghQAFglADgOQATAGAiAJQAdAJARAKQAQALASAXIAeAmIghAXQgVANgLALQgWAVgUAXQgYAbACAEQAiApAQAPQAeAfAbAHQBLAXAdAPQAzAcAcAzQAIANArgBQAiAAAngIQAjgGBNgWQBHgUAngGQAXgFAkAGIA8AKIgUASQAGAjAKBHQAKA+ARAnQAGAQAmANIBCAUQAZAKAnAMIBFAUQgWAsg7BFQgpA/AiBCQAfgwAjAJQATAEAvAlQAPAMAWAIQAUAHAUAAQBBAAAZAOQAnAVgCA/QAAAIAMAMIAVATIAQBaQADANAMAaIgegBg");
	this.shape_16.setTransform(-193.4,-54.9,1.388,1.388);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ALNMpIAAgCIADADgAK7MWQgMgMAAgHQACg/gngWQgZgOhBAAQgUAAgUgHQgWgHgPgMQgvglgTgFQgjgIgfAwQgihDApg/QA7hFAWgsIhFgUQgngMgZgJIhCgVQgmgNgGgRQgRgngKg+QgKhHgGgjIAUgSIg8gKQgkgFgXAEQgoAGhGAUQhNAWgjAGQgnAIgiAAQgrABgIgNQgcgzgzgcQgdgPhLgWQgbgHgegfQgQgPgigpQgCgEAYgbQAUgWAWgWQALgLAVgNIAhgWIgegnQgSgXgQgKQgRgLgdgIQgigJgTgGQgDAOgFAlQgEAggGAQQgRAxhEgIIAAp7IEfAAQAeAXA7AxQA1ApAoAWQAoAWBCAYIBxAoQgZAjAJAeQAIAbAnAeQAQANATAjQAZAuAGAKQA1BJBnCTQBbCBBIBTQBIBUAjA7QAwBSAOBVQAHAoBEAuQBFAuAIBcQAEArACA8IAFBkIgSgRg");
	this.shape_17.setTransform(-195.6,-98.2,1.388,1.388);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231916").s().p("ASSXhQingGgogEQh2gMhOgiQiUg3hIgiQh9g8hChVQgLgOgGgCQhwgmBQhbQhMhLi3AmQi0AmhxBuIAagtQAPgbAHgVQAWhFgGgnQgQhwgjiAQgHgYgOgYQgPgXgSgRQhfhPgsgrQhMhKgehPQgEgLgOgMIgZgVIj1jgIgEhmQgCg7gEgrQgIhchFguQhEgugHgoQgOhVgwhSQgjg7hIhUQhIhUhciBQhmiTg1hJQgHgKgYguQgTgjgSgNQgmgegIgbQgJgeAZgjIhygoQhBgYgogWQgogWg1gpQg7gxgfgXIJMAAIA0CIQAsAWADAQQADARgbBMIBYBNQBKgCAMg1QAFgZgNheIAkAUQARAKAGAIQCcDpCKDUQAZAnAqBUQApBJAyAjQBDAvAiAoQAVAZAgAuQAlA0AQAUQAOASAZAYIApApQAkAlBJBHQBABBAmAwQCBCegwCrIgMAqQASgGASgTIAdgkQAjgpAvAWQgMAuAMAXQAMAWBCA3IhZAUQAUBuAOASQAKAMASACQAMABAlgDIBKDOIg7AGIgDARICmAmIAIhSIBlAWQA4AMAnANQAGACADAXIAEAnIgUAFIgVg1IhPCEIA8ApQAlAYAXAVQARAPAgAmQAfAkATAQQAPANAWAIQAYAIAMgHQAOgIAQgZIAfgzIiBgLQBqgiASg2QARg0gyh6IAUgIIBICqIEAA1QABB3CJgbQBEgOA2AFQALAAAOAPQANANAGAOQAGAQADAaIAFAyIAlgJQATgEAJgHQAvgiAyAPQAZAIA7AoQAfAWA5AyQA2AjA+gVQAbgJAZAVQAbAWgBAqQgBBEgsAuQgtAwhCAAIlBACIgiABQioAAh4gFgAhrIfQgGAZAGBAQBDgLAJgZQAKgZgYheQg0AVgKAtg");
	this.shape_18.setTransform(17.6,-1,1.388,1.388);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231916").s().p("ARqPUIgWgjQgPgUgMgMQgxgwgogWQiihYjlgcQgZgDg1gFQgzgEgcgDQgGAAgMgKIgggXICOAPQhghZgRgXQgwhEARhZIlBgYIAbB2Qg5hghKAJQgbAEgnAUIhBAiIg6AYQAAihgBggQgBgMgEgMQgFgNgHgGQhWhAgNgjQgOglAeheIhfAMQg3AHglgEQg8gGgkgbQgpgfgCg5IhvAIIAGiBIACgwQABgcADgUQANhNAJgTQAXgwBDgJIgYgYQgLgLgHgCQhEgZglgbQgzgkgag6Qgag4AUgbQAQgWA5gJQgkgohOAAQhPAAhFApIhHi6IhlAmQAehKgxgPQhBgFgVgRMAntAAAIALAaQAGAPgCACQhBAyARBEQALAoAqBTQhPAkgrATQgqASgGAcQgGAZAXApQAMAXAFAaQAFAegJARQgZAyANArQALAjAqAnQAQAPAUAYIAiAkIh4DFIgTg1QgHgXgIgJQgHgIgRgDQgRgFgIAGQggAUgCBLQgCBMAdAaQA2AwBkAjQBkAkBHgDQAGBpgOAVQgPAWhdAaQARALAlAQQAeAQAKARQAJAQgBAiQgBAvABALQACAPAJAWIAOAlQARA4gXAcQgXAbg6gGQgtgGgLACQgbAHgMAlQgDALgeAJIg4ARIBiAtIgXB0IACABIgCADgALRHJQA6BFAiABQAjABA/hBIASgVQALgNAJgGQAigagEgOQgEgNgogTQhSgng0hGQgTgZgZg9Qgag8gUgaQgXgdgughQg3glgdgXIgeBmIgygIQgcgFgSAAQgsADgTgWQgPgRgHguQgGgqgUg0QgJgZgehDQgVgvg8gmQg6glhJgQQhKgRg+AOQhFAPgiAwQgKAPgHAcIgLAwIApAAQAYgBAQgCQALgBATgIQAWgJAIgCQArgKAPAWQAOAUgSAhQgJAQggAMQgmANgRAIIAFAEIh3BUIBjBoIhKAHIgVAiIBVA2QBQA2B4ABQBFACCMgHIBoAEIglApQgRASgCAMQgMBCAeAaQAdAaBCgRQAwgMArAAQBwAABHBTgAFJnNIApBjIg4AwQAVAGAnAIQAfAHALAMQAWAbAbAtIAtBLQAKARAeAaIAYgXQAPgOAGgLQAHgMAPgmQAMgfAMgQQAbgkgJgSQgIgOgqgNQgYgHgVgMQgXgOgKgSQgxhWgYgMQgKgFgZAAQgiAAg8AKgAu6t3IDBgJIgBgOIjCAAgAhxBBIAEgBIgCADgAhxBBg");
	this.shape_19.setTransform(105.7,-74,1.388,1.388);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("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");
	this.shape_20.setTransform(0,0,1.388,1.388);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-295.4,-210.5,591,421.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Am7iVICgkVILXGkIigEUg");
	var mask_graphics_1 = new cjs.Graphics().p("Am7hGICgkWILXGkIigEVQm1hCkilhg");
	var mask_graphics_2 = new cjs.Graphics().p("Am7hMICgkVILXGjIigEVQhHALhAAAQmWAAi6mug");
	var mask_graphics_3 = new cjs.Graphics().p("Am7hjICgkWILXGkIigEVQiYA5h6ABQldAAhondg");
	var mask_graphics_4 = new cjs.Graphics().p("Am7iBICgkVILXGjIigEVQjTB1iVAAQlBAAguoYg");
	var mask_graphics_5 = new cjs.Graphics().p("Am7iiICgkVILXGkIigEUQkFC3inAAQkwAAAFpag");
	var mask_graphics_6 = new cjs.Graphics().p("Am3jDICgkVILXGkIigEUQkzD5iyAAQklAAAzqcg");
	var mask_graphics_7 = new cjs.Graphics().p("AmvjmICgkVILXGkIigEUQleE/i7AAQkdAABfrig");
	var mask_graphics_8 = new cjs.Graphics().p("AmkkJICgkVILWGkIigEUQmHGFjBAAQkXAACJsog");
	var mask_graphics_9 = new cjs.Graphics().p("AmYksICgkVILXGkIigEUQmxHLjGAAQkRAACxtug");
	var mask_graphics_10 = new cjs.Graphics().p("AmKlPICgkVILWGkIigEUQnYIRjKAAQkOAADau0g");
	var mask_graphics_11 = new cjs.Graphics().p("Al8lzICgkVILXGkIigEUQoAJYjNABQkLAAEBv8g");
	var mask_graphics_12 = new cjs.Graphics().p("AlsmWICgkVILWGkIigEUQonKfjQAAQkIAAEpxCg");
	var mask_graphics_13 = new cjs.Graphics().p("Aldm6ICgkVILXGkIigEVQpOLmjSAAQkGAAFPyKg");
	var mask_graphics_14 = new cjs.Graphics().p("AlMneICgkVILWGkIigEVQp1MujTAAQkFAAF3zSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:22.8,y:-42.7}).wait(1).to({graphics:mask_graphics_1,x:22.8,y:-50.5}).wait(1).to({graphics:mask_graphics_2,x:22.8,y:-50}).wait(1).to({graphics:mask_graphics_3,x:22.8,y:-47.7}).wait(1).to({graphics:mask_graphics_4,x:22.8,y:-44.7}).wait(1).to({graphics:mask_graphics_5,x:22.8,y:-41.4}).wait(1).to({graphics:mask_graphics_6,x:22.4,y:-38.1}).wait(1).to({graphics:mask_graphics_7,x:21.6,y:-34.6}).wait(1).to({graphics:mask_graphics_8,x:20.6,y:-31.1}).wait(1).to({graphics:mask_graphics_9,x:19.3,y:-27.6}).wait(1).to({graphics:mask_graphics_10,x:18,y:-24.1}).wait(1).to({graphics:mask_graphics_11,x:16.5,y:-20.5}).wait(1).to({graphics:mask_graphics_12,x:15,y:-17}).wait(1).to({graphics:mask_graphics_13,x:13.4,y:-13.4}).wait(1).to({graphics:mask_graphics_14,x:11.8,y:-9.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXEZIFfpgIBQAvIlfJgg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-32.7,43.2,17.1);


(lib.pelvis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhqBqQg4gmADhAQgDhJA7gtQAzgsBMAEQA9AHAnA4QAZAkAKA0QAEA2gNAYQgcAsgSAOQgcAWgxABIgEAAQhDAAg+gyg");
	this.shape.setTransform(24,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pelvis, new cjs.Rectangle(8,0,32,31.2), null);


(lib.neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCCNQgcgBgUgQQgTgSABgXIADinQAAgYAVgQQATgQAbAAQAdAAATARQATASAAAXIgDCnQgBAXgUARQgTAQgaAAIgCAAg");
	this.shape.setTransform(6.9,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.neck, new cjs.Rectangle(0,-0.4,13.9,28.2), null);


(lib.leg_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfHOQgYgWABgaQAGmPhLmhQgFgbAOgSQAJgNAagMQARgJAxgBQAxgBASADQAdACAQAFQAVAFABANQASHFgxGaQgHAagPAZQgXARgaAHQgigGgQgPg");
	this.shape.setTransform(9.3,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leg_upper, new cjs.Rectangle(-3.2,-0.3,25.1,96.6), null);


(lib.leg_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghHQQgEgLAAgOQgEjrgYizQgThSAEi7QADi0AQgYQAHgPArgJQAmgIAPAFQASARAHAxQANBwACDZQABBqgKGLIgBAQQgBAMgEAHQgPAWhBAAQgOAAgGgOg");
	this.shape.setTransform(9.2,47.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leg_lower, new cjs.Rectangle(1,-0.2,16.4,95.6), null);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai3C4QhMhNAAhrQAAhqBMhNQBNhMBqAAQBrAABNBMQBMBNAABqQAABrhMBNQhNBMhrAAQhqAAhNhMg");
	this.shape.setTransform(26,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(0,0,52,52), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbBRQgMgiAAgvQAAgvAMgiQAMghAPAAQARAAALAhQAMAiAAAvQAAAvgMAiQgLAigRAAQgPAAgMgig");
	this.shape.setTransform(4,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(0,0,8,23), null);


(lib.ghost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhUAAg8g8g");
	this.shape.setTransform(20.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghost, new cjs.Rectangle(0,0,41,41), null);


(lib.熱帶 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45A63A").s().p("AADgBIgBACQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape.setTransform(12,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45A63A").s().p("AgBAAIABgEQAAAAABABQABABAAAAQAAABAAAAQgBABAAAAQgCABADAEQgEgCABgDg");
	this.shape_1.setTransform(18.3,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#45A63A").s().p("AAAgBIACABIgDACg");
	this.shape_2.setTransform(25.1,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#45A63A").s().p("AAAAAIACgCIgDAFg");
	this.shape_3.setTransform(26.1,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#45A63A").s().p("AgEAAIAJAAQgCABgDAAIgEgBg");
	this.shape_4.setTransform(26,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#45A63A").s().p("AgDABIADgCQAAAAAAABQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_5.setTransform(24.9,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#45A63A").s().p("AgBAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIgBADIAAAAIgCgCg");
	this.shape_6.setTransform(26.6,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#45A63A").s().p("AgCAAIADgCQAAACAEAAQAAABgIACQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBABAAg");
	this.shape_7.setTransform(24.4,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#45A63A").s().p("AgEAAQADACACgCIAGgCQgBACgEABIgIADQAEgCgCgCg");
	this.shape_8.setTransform(25.4,-8.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#45A63A").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQACACgBADIgBgCg");
	this.shape_9.setTransform(24.8,-11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#45A63A").s().p("AgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAAAABIgCACIgBgCg");
	this.shape_10.setTransform(25.6,-11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#45A63A").s().p("AhWD8IAEgFQgCgEgDgBIgGABIADgDIgBgCIACgBQgGgBgBgIQgBgGgFgBQACgBAIAFQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCgEIgHgCQAEgBgEgDQgFgFABgDQAEgBgCgJIgDgLQADgCACAEQABAGADAAQAAgBABAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgBgEIAHAGQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBQgBAAAAgBQAAAAAAAAQgBgBABAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQgEAAgCgCIAEAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAABgBQAGgCABgGQABgIADgCIgEgDQABAAABABQAAAAABAAQAAAAAAgBQAAAAAAAAIgCgCIAGgCQAGgDABgEIgGgBIAJAAIgHgFQAEADADgEIAFgFIgEgDIAEgBIgEgBIAHgBQAEgBgBgDQAAAEgKgIIANgCIgDgEQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAIAHABIgDgDQAAgFAFgDIALgEQAOgGgFgMIgCgBIANgCIgEgEIgEgFQABABABAAQAAABABAAQABAAAAgBQABAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgEgBQgCgGAGgEQAHgGgBgEIAEALIABAHQAEgCAAgFQgBgFADgCIgFABQgEgEAFgDQAEgEgFgDQABgBAJgCQAHgBAAgDIgMgDIACgFIAHAEQAAgBAAAAQABgBgBAAQAAgBAAAAQgBgBAAAAQAFAAACgDQADgEAEgBIgEgCIADAAQgDgBgBgCQgBgDgDgBQgFADAEABQgGAAABgDIADgFQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIADgBIgDgBQgBgDAGAAQAGgBgHgEIAIABIgEgFQAHADABgDQACgCAGABQAAAAAAgBQAAAAAAAAQgBgBgBAAQAAAAgBAAIgDgBQgBgCAGgDQAFgDgDgCQADgBACgDIADgFIgGgCQAFgCgBgCIgCAAQAFgEADgJQgGgCgDACQgCgDAGgEQAHgGgBgEIgDAAIAGgCIgHgCQABgOANgBIgEgBQgDgCgEABQAGgDADgGIAEgLIABAAIADgDIgBAAIgCACQACgFAGgCQgHgCgDgDQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBgBgBQgCgFADgCIgDgBIAIgPQAEgLgDgHQAJABADgGIAHgKQgFgBgBACQgDADgCABQAAgBAAAAQAAAAgBgBQAAAAgBAAQgBgBgBAAQgBAAgBgBQAAAAAAgBQAAAAABgBQAAgBABAAIACAAQABAAABAAQABgBAAAAQABAAAAgBQAAAAAAgBIgHAAIAJgDQgCgEAAgLQAAgJgEgFQAEgBADACIAEgHQADgFgEgCIgDABQgDgEAFgEQAGgFABgEIAAAEQAAADAEgBQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAIAIAAQgDABgBADIgCAEIAEgBIgFAJIgBgFQgEACABADQACAFgBAAIAHgBQACgBAEACQACAEgFACQgJADgDADIgCgBIgEAEQgBAAgBABQAAAAAAABQAAAAABABQAAAAABABQAEAAABgCIADgCIgDADQgBAAgBABQAAAAAAABQAAABAAAAQAAAAABABQALgEgBgIIAIgBIgJATQgFALADAHQAFgDAAACQAAADAFAAQgBAAgBAAQAAAAgBABQAAAAAAABQgBAAABABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAEABADgDQADgCACABIgJAKQgIAHACAFQADAAACgCIgKAHQgHAFAHADIAPgHQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIAGgBQABAEgIABIgNABIAHAFQAGAMgTAFQgBABAAAAQAAAAAAABQAAAAAAABQABAAAAABQABACAFAAIANgDQAFgCABgFQgEgBgDACQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgGQAAgEAEgBIgCAIQAGABgBgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAFACgCADQgCAEACACIABgBIgCAGIgFAFQgFAAgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgKAPQgHAKAJAIIAJgEIgCAGQgCADAHACQAAgBgBgBQAAAAAAgBQAAAAABAAQAAAAABAAIAGgBIgBAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQgEABgFAEIgHAFIAAAAIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAIADADQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAgBIgFgCIgDACQgBABAAAAQgBAAABABQAAAAAAABQABAAABABQADACADgCIAFgCIgLAJIACAAQgCAAAAAAQgBABAAAAQgBAAAAABQAAAAABABQAAAAABAAQABABAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQACADgHADQgGADAGAFIgEACIACABIgEACQgDADAGABIAHACIADADIADABIgHAEIgLAEQgHADgIgDQABAEAEAAQgBABAFACQAEACgCADIAEAAQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIAFACQgGgCABAGIAKAAQgGAAAAAEIAGAAQgCACgFgBQgEgBACACIgDgFQgDADgGgBIgLgBQgEABgBAHQgBAGgKgBIALAGQAFgEAKABQAFgCgIgEIgBgBQgIgEAIgBQAFABAAACQAAABgBAAQAAAAAAABQgBAAAAAAQgBABgBAAQAGACAJgCQgDACABAGIAAAIQgDAAgDACQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAABABIgIAAQgHABgFgDQgBABAEAFQADACgHABQAFABABACQACADAEAAQgEgDAGgBIALgCIABAJQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgEABIAFADQgHgCACAJQABAKgKgDQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgCAFACQgBgEgGgBQgHgCgCgCQgEACgDAJQgEAIgHABIAFgBQAEgBADACQABAEgJACIgQADIAIADQgBAAgBABQgBAAAAAAQgBAAAAABQABAAAAABQABAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgEgBQgBACAEACQAEACAAACQgIgBAEAEQAFAFgFACIADABQgFABABAIIAAANIAAgDQAAgDgEgDIgHAGIACADQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIAAgDIADADQgEACgFgFIgHgIQAAAAAAABQAAABgBAAQAAAAgBABQgBAAgBAAQgEAAgBABQADACAFABQAEABADAEQACADgGACQgFACgGgCQAHAIgDAGQgEAGAEADIgBAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAABABAAIADABQABAFgHgCQgHgDAAACQACACAEABQgBAEgKAAQgJAAABAGIADAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgDgGQgIgEABAIQACAKgEABIAFAAQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQgBABgHgDQgGgDABAFIAGADQAFADABAAIgBAEQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAAAgBIACAFQgBAAAAgBQgBAAAAABQgBAAAAAAQgBAAAAABIgBAEIADACQgJgFAAAEQAAAIgBABIAEACIgGABQgDABABAFIAFADQgCgBgDAFQgCADgFgCIAFAEQADADgCACQgDgBgCAAQgBAAgBABQAAAAAAABQgBAAABABQAAAAAAABQAFAGgBgEIgCgDIAEACQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIADADIAFACIgUADQgCgHgFgDgAhCDgIACgCIgHgFgAg/DcQAEACAAgEIgEgFIgFgGIgBACIAAACIABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAFgFgCIAHAGgAg9DIIAAAGQABADAFACIABgDQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQABgBAAAAQAAAAAAAAQABAAABAAIAEAAIgLgFIAAgEIgCAAgAgtDGQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIgHgBQAAAAABABQAAAAABABQAAAAABAAQAAAAABAAgAglCjIAAADQAAAAAAAAQAAABAAAAQABAAAAAAQAAABABAAIAEgCQABAAAAAAQABgBAAAAQAAgBgBAAQAAgBgBgBgAhJCZIAAADIADgBIgBgDQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAhPCaQAEACgBgEQgBABgFgDQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAABABIAAAAIAFACgAgYCIQABABAEACIACgCQACgBADACIgGgGQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAIABAEgAgHCBIgBAEQAFACgBgEQAAgFgEgBQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABgAgQBdQAEACgCgEIAAACQgBgBgEgBQgEgBgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAAACIAAgBIAEABgAgdBSQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIgGgBIgBAAQAAAAAAAAQAAABAAAAQAAABAAAAQABABABABgAgDARQABAAAAABQABAAAAAAQAAAAABAAQAAgBAAAAIgBgCgAArhAQACAAABAAQABAAAAAAQABgBAAAAQAAAAgBgBIgGgEgAA1hkQAAABAAAAQAAABAAAAQABABAAAAQABAAABABIAAgCIAAgFQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAgABQiLQgDgCgBgFQgBgEACgDQgCgBgLAEQAMABgEACQgFAEADACIACgBIADgCIACADQAAAAgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIAFAAIAAAAgAA+itIABgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIABAAIABAAg");
	this.shape_11.setTransform(15.5,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#45A63A").s().p("AAAAAIABAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_12.setTransform(24.3,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#45A63A").s().p("AADgBQABAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIgFABg");
	this.shape_13.setTransform(25.8,-2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#45A63A").s().p("AgBAAIADAAIgDACg");
	this.shape_14.setTransform(23.5,-13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#45A63A").s().p("AgCAAQgBgEAFgCQADAIgEAFIgDgHg");
	this.shape_15.setTransform(24,-14.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#45A63A").s().p("AAAACIAAgDIABACIgBABIAAAAg");
	this.shape_16.setTransform(27.3,-12.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#45A63A").s().p("AABgCIACAAQgBABAAABQgBAAAAAAQAAABgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABQAAABgBABQACgFABAAg");
	this.shape_17.setTransform(32.4,-11.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#45A63A").s().p("AAAgBIABABIgBABg");
	this.shape_18.setTransform(37.4,-6.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#45A63A").s().p("AAAgBIABABIgBACg");
	this.shape_19.setTransform(37.5,-6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#45A63A").s().p("AAAAAIABgBQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAABg");
	this.shape_20.setTransform(38.8,-5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#45A63A").s().p("AADgCQAEgBgHAFQAAAAAAAAQAAAAgBAAQAAAAgBABQgBAAAAABIAGgGg");
	this.shape_21.setTransform(43.2,-4.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#45A63A").s().p("AAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_22.setTransform(43.8,-2.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#45A63A").s().p("ABdBZIADgDIgFACQADgCABgEIACACQABgBAAAAQABgBAAAAQABgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIABgBIgBABQgGAEgHACQgCgBAFgEIAKgIIADgBIADgDQADgDgFABIgGAFQAAABAAAAQAAgBAAAAQAAAAABgBQAAAAABgBQABgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAABQgKAFACAFIgIADQAKgSgIgCQgDAEgBgBQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAgBAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQgEACgBAEIgEADIAFgJQAEgIgDAAIgDAEIAGgKQAEgFgHADIgKANIgEABIgEAEQgDAAASgQIgIAEQgIABALgQQgCgCgFAHQgMAOABACIACgBIAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQgBAAAAABQgBAAgBAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAAAABIAAAAIgBgDIABgEIAGgFIADgBQgBgBACgKQAAgHgKAHIgFAIIgBgDQAAgCgGAGQAFgCgHAIIAAgBIAAABIAAAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBABQACgDAEgLIgGAGIAGgIQAEgGgGAEQgDACgBADIgCAFIADgKQABgBAAAAQAAgBAAAAQAAAAAAAAQgBAAgBABQgBABgBABQAAABgBABQAAAAAAAAQABAAABAAQgBABgBgBQAAAAAAAAQAAgBAAgBQAAgBABgBQACgGgGAFIACgEIgCADIABgEQABgFgKAOIgEAEIABgFIAFgKQACgHAFgHQgCABgCAEQgBgBgDAEQgBACgBAAQAAABgBAAQAAABgBAAQAAgBAAAAIgBADQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIgDAEQAAgBABgBQAAgBAAAAQAAgBAAAAQgBAAAAABIgFAJQADgHgDABIgBAHIABgHQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIAFgDQgBgEAJgPQABgDgEgBQgDAAAEgKIgIAMQABADgFAKQAAAFAGgKQAGgIgDAHQgGALACgIQgDAFgCAJQAAgBAAAAQAAAAgBgBQAAAAgBAAQgBABgBAAIgDABQADgJgDABIADgHQABgGADgEQAAgCgDAEQgBABAAABQAAAAAAAAQAAgBAAgBQAAgBAAgBQgEAEgDAIQADgFgEARIgFACQACgBABgHIgDAHQADgJgEAEQgGAFAEgLIACAAQAAgBgCAGIAFgJIAFgJQAAgCgFgBQgDgBAAgFIgBAGIAAABIgBACQgDABABgIIACgOIgEAJQABgBAAgBQAAgBgBAAQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBAAQAAgBAAAAIABgFQgBAAgBAFIgDAFQABgIgDAGQgDAHAAgFIgBAEQAAgEgFAEIgGAFIACgBQABgBACgGIgDgDIgDAIIACgBIgDADQgBgFAIgPQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAgBAAAAIAAgFIgCAJIgDAJQgCAEgBgFQgBgDABgHQgEAKgDAAQgCAAgCAHQAAgCAAgBQAAgBAAgBQAAAAAAAAQAAAAAAAAIgBAFQgBAAAAABQAAAAAAgBQgBAAAAgCQAAgBABgCQABgJgBACIgCAHQgBACgBgKQgBgIgCAFIAAADQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgEIACgFQAAgLgDAHQgEAHgBgBQABAEgBAEIAAgIQgBgIgBAFIgBAOIgCACQAAABgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIgBAFQAAgEgDAEIAAAEQAAgLgBADIgEAFIAAAFIgCgEQAAAAAAAAQAAAAgBAAQAAAAAAABQgBABAAABIAAAFQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAgBAAAAQAAAKgCABIgBgFQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABIgBAFQAAgBAAAAQAAAAAAAAQAAgBAAABQAAAAAAAAIAAAJIgGgMIABgLIADgCQABgEgBgDIgCgEIACgBIAAgCIABABQgCgGADgGQABgGgBgEQACACgBAIQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgFIgCgHQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAgCQAAgHACgDQABAEADgKIAEgMQACABgBAGQgCAFAAACQADABABgIIAAALQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAABABAAQABgEgBgFQABABAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAEADADgDQAFgFACABIAAgEQAAABAAABQAAAAAAABQAAAAABgBQAAAAAAgBIAAgDIADADQAEAEACgBIAAgGIABAIIABgKQAAAGACAAIAFACIABgFIABADIAAgEIACAFQABABAAABQAAAAABAAQAAABABgBQAAAAABgBQgDACAEgNIACALIACgEIACgEIAAAGIABgEQAGgEAEAOQADAEABABQAEACAEgFIABgCIABALQABAAAGgKQgCAEABABQABAAAAABQABAAAAABQAAAAAAABQAAABgBABIAEgJQACgDADAEQAEAFADgBIgJAGIgEADQAAABABAAQAAABAAAAQABABABAAQAAAAAAAAQAEgCABACIAAgFQAEgFABAEQACAEADgGQABACgBAHQAAAIACgBIAEgMIADACIgEAHQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABgBQgBAFABACQABADAAAEIADgEIgBAEQABgEACgBQADgBACgDIAAgEQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAABgBAAQACgFACABIADACQAAABgBAAQAAABgBAAQAAABAAAAQAAAAAAABIAAADIABgDQACgBgCAHQgBAFAGgGIgFAHIAGgEQgFAHABABQABACgDAGQAAAAAAAAQAAAAABAAQAAgBABAAQAAgBAAgBIACgDQACgBAAAGQAAAFACgDQgBADABACIACADIAEgFQAAABgBABQAAABAAAAQAAABAAAAQABAAAAAAIACgCQAAAFADAEQAFgFAAgEQADgBAAAGQAAAHABAAIACgDIgCAGIAGgGQAIAEgIAKIADgDQADgCACgCQgCAEACAFIADAFIgBABIgBAEIABgBIABgCQAAADgDAFIAKgGQgDADAEgBQAGAAgEAFIAEgEIABALQABAIAFAAQgHAHgCAEQgBAGgCACQAFgCABgCIADgFQAAAAABAAQAAAAAAAAQABAAABAAQABAAABgBQAEgCgDAEIABgBIgDADQgBAAgBABQgBAAAAABQAAAAAAABQAAAAAAAAIAHgDIgIAFIAHAGQACAFAFABQgCABgEACIgDAEQgDAFAFgBIACgBQAEAAgFAEQgFAFgBACIAAgBQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQgBAAgBAAQgBABAAAAQAAABgBAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQABAAABAAIgJADIADgDgABJAnQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAEgDAEgHQgJAIABgDQABgBAAgBQABgBAAgBQAAAAgBAAQAAAAgBAAIgDAEQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEADIAEgBIACABgABAAJIADACQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBAAIgDABgAA2gGQgBABgBABQAAABAAABQgBAAABAAQAAAAABAAIAFgFgAA+gCIgCgCQgEAEAGgCgAhfgKIADgPQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBACIABAAIAAADQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBgCQgBAPACgEgAhYgQIAAAEIAAgOQgEAFABAJIACgBIgBgEIABAAIABABgAgzgUQAAACAAABQAAABAAAAQAAABAAAAQABAAAAgBQACgCACgEQgBACgEAAgAg1ggIgBAFQADABgCAGIADgJQAAABAAgBQgBAAAAAAQAAAAAAgBQAAgBAAAAIAAgEIgCADgAhFgVQABAAAAAAQAAAAABAAQAAgBAAgBQABgBAAgBIgCgEIgCAEIABAAIAAAEgAhXgcQAAABABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAgBgAgLghQAAAFADgDIgBgEQgBABABgBIgBgGIgBAIgAgbgsIgBABIACgFQABgFABgBQABgBAAgBQAAgCgBAAQAAgBAAAAQAAAAgBABQABADgCAGIgBABIAAgBIAAAFgAgUg+QAAACgBABQAAABAAAAQAAABAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABABAAAAIABgHIgBgBIgCADgAhGhCIABACIACgDIgBgBIgCACgAhGhPIAAAGQAAAFABgDQABgJgBAAIgBABgAA0AzIgCABIACgBIABgCIACACQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABg");
	this.shape_23.setTransform(35.1,-11);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#45A63A").s().p("AABAAIABAAIgDABg");
	this.shape_24.setTransform(45.3,-1.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#45A63A").s().p("AAAAAIACgBIgCACQAAAAAAAAQgBAAAAAAQAAAAAAgBQABAAAAAAg");
	this.shape_25.setTransform(46.2,-2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#45A63A").s().p("AAAgCIADACQABABgGADQgBgEADgCg");
	this.shape_26.setTransform(44.7,-1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#45A63A").s().p("AABABIgCgBIADAAIgBABIAAAAg");
	this.shape_27.setTransform(29.4,-15.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#45A63A").s().p("AAAAAIABAAIgBACg");
	this.shape_28.setTransform(42.7,-18.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#45A63A").s().p("AAAACQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBIgBADg");
	this.shape_29.setTransform(45,-17.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#45A63A").s().p("AACgDQADgCgEAHQgBAAAAAAQAAAAAAAAQAAABgBAAQgBABAAABQgBgCAFgGg");
	this.shape_30.setTransform(49.5,-18.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#45A63A").s().p("AAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_31.setTransform(50.8,-16.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#45A63A").s().p("Ah1BKIgGgLIACgDQgCgEgCgCIgEgCIACgCIgBgCIABAAQgEgEgBgHQgBgGgEgDQACAAAFAIQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgFIgFgFQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBgBgBQgEgGAAgDQADACgCgKIgCgLQACAAABAFQACAEACACQACAAgEgHIAGAIQAAAAAAAAQABAAAAgBQgBAAAAgBQAAgBgBgBIAAgBQgBgEgDgEQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAgBgBIgCgCIgBgCQAFACABgFQACgGACgBIgDgEQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIgCgDIAFABQAFABABgCIgEgFIAGAFIgEgIQADAFACgBQABgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIgDgFIADACIgCgDIAFADQABAAAAAAQABABAAAAQABgBAAAAQAAgBAAAAQgBADgFgNIAJAHQAAgFgCgDIAEAEIgCgEQACgFANAGQALAFAAgMIgBgBIAJAIIgBgNQAAABAAABQABABAAABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIgDgJQABgFAGACQAGABACgDQgBAIgCADIgCAFQADACACgDQACgEACABIgDgDQgBgHAFACQAEACgCgHIAGAHQAFAGACgCIgFgMIADgBIACAIQABAAAAAAQABAAAAAAQAAgBAAgBQAAAAgBgBQADAFADAAQADABADADIgBgEIACADQgBgEABgDIAAgFQgEgFABAEQgDgEACgBIAFgBQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABIADACIgBgEQABgCADAHQADAFAAgJIACAIIABgGQACAIABAAQACAAABAHQADAAgDgHQABgCAEAFQAEADAAgEQABADADAAIADACIAAgHIADAEIAAgDQAEAEAHAAQAAgIgDgBQACgEAFAGQAFAFACgBIAAgDIACAGIABgIQALgDABAPIABgEQABgEgBgDQADAFAEADIAIAEIAAAAIABAEIABgBIgBgDQADAEAAAFIAGgKQgCAEAFgCQAGgCgBAFIACgEIAJAKQAFAHAHAAQgFAIABAGIABAJQAEgEAAgCQAAgEABgCQAAAAABAAQAAAAAAAAQABgBABAAQAAgBABgBQADgDgBAFIACgCQABAAgEAFQgBABAAAAQgBABAAABQAAAAAAABQABAAAAAAIAFgGIgEAJQADABAGAFQAEAEAFAAQgCADgEABQABAAgBAFQgBAFAEgBIACgDQAEABgDAFQgEAGAAACIgBgBQAAgCgFADQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQABAAAAgBIgIAFIADgEIABgEIgDADQACgCAAgFIACACQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAgBAAIgCgCIgGAFIgFAEQgDgBAEgFQAGgHABgDIADgBIACgFQABAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBABIgEAEQABgBAAAAQAAgBAAAAQAAgBAAAAQgBAAgBABQgGAIADADIgHAGIABgNQgBgIgGAAQgCAFgBgBQgBgBgDAFQABgBAAAAQAAgBAAgBQABAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgDADgBADQAAACgCACIABgKQABgIgEAAIgBAGIABgMQABgHgFAHIgDAPIgDACIgCAFQgEABAKgVIgGAHQgGAEABgTQgDAAgCAHQgCATACAAIABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAgBAAQAAABgBABQAAAAgBABQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAABQgBAAAAAAIAAABIgCgCQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIACgHIADgDIgGgJQgFgHgFALIACAJIgDgCQgCgBgBAIQADgEgBAJIgEgKIgCAIQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgGIgBgDQAAgBgBAAQAAAAAAABQAAAAAAABQAAAAgBABQgBAEABACIABAFIgEgJIAAACQAAgBAAgBQAAgBAAAAQgBAAAAAAQAAAAAAABIAAAFIgDgEQgCgGgBAIIgBgEIAAAEIgCgEQAAgBAAAAQgBAAAAAAQAAABAAABQAAABAAABIAAAIQgBAFABACIgDgGIAAAAIgEgJQgDgGgBgJQgBACABAEQgBAAAAAFQABAGgCgBIABADQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBIABAFQgBgHgCAFIACAHQAAgBAAgBQgBgBAAAAQAAAAAAAAQgBAAAAABIACAGIgDgHQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAABgBAAIACgFQgCgBgCgHIgDgLQgCgEgDADQgDACgEgKIACAOQAEACADALQACAEgBgLQgBgLADAIQACAKgEgGQABAFAEAJQAAgBAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBABAAABQAAABgBAAQAAABgBAAQAAAAAAAAQgEgKAAAEIgDgGQgDgFgBgHQgCgBABAHQAAAEgDgGQACAEAAADIABAGQgCgLAKAUIgDAGQABgCgEgHIABAIQgCgJgCAHQgCAHgEgLIABgBQABgBACAGQABgGgGgNQgCgDgFADQgDABgDgDIADAFIAAAAIAAAAIABACQgBADgGgGIgJgLIAEAJQgBgBAAgBQgBAAAAAAQgBAAAAAAQAAAAAAABQABABgBAAQAAABAAABQAAAAAAAAQgBAAAAAAIgCgFQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAABQACAEAAABQgEgFABAEQACAIgEgDIACADQgDgDgBAHIgCAGQABgCgDgFIgFgBIADAIIABgCIABAFQgDgCgCgHIgEgMQAAAAAAAAQAAABgBAAQAAAAAAgBQgBAAgBgBIgDgCQABADADAFQADAEABAFQABABgBAAQAAABAAAAQAAAAgBAAQgBgBgBAAQgDgDgEgFQADAKgDACQgCACACAGIgCgCQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIACADQAAAEgEgGQgFgHAAABIAEAHQgBACgGgHQgHgFABAFQAAABABABQAAABAAAAQAAAAAAAAQAAAAAAgBQABABAAABQABAAgBAAQAAAAgBgBQgBAAgBgCIgBgGQgGgJAAAIQABAJgCgBQAEACABAFQgBAAgFgHQgEgGABAGQACABAGAKIgBADQAAABAAAAQAAAAgBgBQAAAAAAgBQgBAAgBgBIACAFQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAgBABIAAADQgBgCgBAAQgBgBAAgBQgBAAAAAAQAAABAAAAIgBAHIADAEIgEgDQAAAAgBAAQAAABAAAAQAAABAAABQAAABAAABIAEAFQAAAAgBgBQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBgBgBAAQAAgBgBgBQAGAJgCACIgDgDQgBgBAAABQAAAAAAAAQAAAAAAABQAAABAAABIACAEQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAgBABIAFAIgAhsAtIgGgOQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAABIABgBIABADQABAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIgCgCQAHANAAgEgAhpApIAAgCIgCgCQAAgDAFAFIgIgLQgBAGAGAHgAhYASQABABAAAAQAAgBAAAAQAAgBAAgBQAAgBgBgBIgEgCIAAACIABADIABAAIACABgAhFAHQABACAAAAQABABAAABQABAAAAgBQAAAAAAgBQAAgDgCgEQABACgCADgAhIAIIgDgIQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgCgEIAAAEIADAEQACgBADAFgAh0gSIAAADIABABIAAgEIAAAAIgBAAgAgPgUIgCAAQgCAAgCgGQACANAEgHgABQgYQACgCADgBQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQADgDAAgKQgEANgBgFQAAgGgCADQABACgBADQgBABAAAAQgBABAAAAQgBAAAAgBQAAAAAAgBgAhCgaIABABQABgBgDgEQgCgEAAgCQABAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABIADADIACAEIAAABIAAAAIACAEgAhHgsQABABABABQAAABAAAAQABABAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIgEgFIgBgBQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAABgAhdgxIAEACIgBgBIgDgDgAA5gwQAAAAAAAAQAAAAAAAAQABAAABAAQABAAABgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABgAAig3QABACAAABQAAABAAAAQABABAAAAQAAgBAAAAIACgIgAAqg3IADgCIgEgBQAAABAAABQABAAAAAAQAAABAAAAQAAAAAAAAgABIgGIAAgCIACAAQABAAAAABQABAAAAAAQAAABAAABQAAAAgBABg");
	this.shape_32.setTransform(38.6,-18.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#45A63A").s().p("AgBgDIADACQACABgEAEQgDgEACgDg");
	this.shape_33.setTransform(52,-15.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#45A63A").s().p("AgBAAIABgDQAAABAAABQABAAAAABQABAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAABAAAAQABABABABQgDgDAAgBg");
	this.shape_34.setTransform(30.8,-27);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#45A63A").s().p("AACAEIgDgIIACAEQAAAAAAAAQAAAAAAAAQAAAAAAABQAAABABAAIAAADIAAgBg");
	this.shape_35.setTransform(39.5,-33.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#45A63A").s().p("AAAgBIABACIgBABg");
	this.shape_36.setTransform(40.9,-32.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#45A63A").s().p("AgBgEQAAAAAAgBQABAAAAAAQAAABAAAAQAAABAAABIACADQAAAAgBAAQAAABgBAAQAAABAAABQAAAAAAACIgBgKg");
	this.shape_37.setTransform(44.4,-36.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#45A63A").s().p("Ag4BxIgCgCQgFgBgDABIgDACIAAgCIgDAAIAAgBQgFACgGgCQgHgCgDACQAAgCAKgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgGgBIgGADQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgHAAgDgCQAEgCgKgFQgLgFAAgBQACgDAEADQAFACADgBQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAgBAAIgEgCIAKAAQABAAAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQgDgCgCABIgHAAIAEgBQAAAAAAAAQABgBgBAAQAAgBAAAAQAAAAgBgBIgDABQAAAAAAABQgBAAAAAAQAAAAAAgBQAAAAAAAAQADgEgDgGQgDgGACgDIgFgBQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIgEAAIAGgEQAEgEAAgDIgGAAIAIgCIgJgCQAFABABgDIAEgGIgGgCIAEgBIgEgBIAGgCQAEgBgBgCQABADgNgGIANgDQgDgFgFAAIAHAAIgFgBQAAgFAFgDIAJgEQAHgCABgBQADgDgEgHIgBgBIAMABIgDgEIgFgGQAEADABgCQABgCAEACIgIgFQgCgGAHgCQAGgDAAgEIAEALIAAAHQAEgBAAgEQAAgEADgCIgGAAQgEgFAGgBQAFgBgGgGQACAAAIADQAIACAAgDIgKgIIACgDIAGAGQABAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAFACADgBQAEgBADABIgDgDIADABIgDgGQAAgCgDgDQgGgBADADQgFgDACgCIAEgDQAAABABABQAAAAAAABQABAAAAAAQABABAAAAIADAAIgDgCQABgDAGAEQAFACgEgHIAGAGIgDgGQAGAGACgBQACgBAFAFQADgBgIgFQABgCAGACQAFABgBgEQACACADgBQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIgFgGIAGABIgCgCQAEABAIgDQgEgHgDAAQAAgEAHACQAHACABgCIgCgDIAFAEIgDgHQAIgIAKAMIgCgEQgBgFgDgCQAFAEAFgBIAJgBIABABIADACIAAgBIgDgCQAGABADAEQgCgIABgDQABAEADgEQADgFADAEIgBgBIgBgDIAPADQAIADAGgFQABAKAFAEQAFAEACACQABgFgCgCQgCgCgBgDQAAAAABAAQAAAAAAgBQAAAAAAgBQABgBAAgBQABgFACAEIAAADQAAACABABQAAAAAAABQAAAAABABQAAAAAAgBIABgHIACAJQADgBAJABQAGABAFgDQAAADgCAEQAAAAADAFQACAFADgEIAAgDQAEgCABAHQABAIACACIgDgCQgCgBgBAFQgBABAAAAQAAABABABQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABgBQAAAAABAAQAAgBABAAIgEAIIAAgFIgBgEIgBAFIgEgHIADAAQAAgBAAgBQAAgBAAgBQAAAAAAgBQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAIgEAGQgDABAAgGQABgKgBgEIABgCIgBgGQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAABgBABIAAAFIABAEQAAAAAAAAQAAAAgBAAQAAgBAAgBQAAAAAAgBQgBgFgBADQgBALAGABIgDAJQgLgVgIAGQABAFgBAAQgBAAAAAGQgBgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAFABADQABACAAADIgGgJQgEgIgDADIABAFIgGgKQgEgGAAAIIAHAPQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAABIACAGQgCABgCgIIgEgOIgBAJQgEAIgKgRQgDACADAHIAHAMQACAFADgBIgBgDQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAAACAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABQAAAAAAABIAAAAIgDAAIgDgDQgCgGAAgBIABgEQgCABgEgCIgGgDQgJgDADAMIAGAHIgEAAQgCABAEAHQAAgFAEAIIACAEQgCgEgKgGIAEAIQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIgCgFIgDgCQgBgBAAAAQAAAAAAABQAAAAAAABQAAAAABABQABAEACACIAEAEIgJgGIABABQgBgBgBAAQgBgBAAAAQAAAAAAAAQAAAAAAABIADAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAEgGgEQgEgEACAHIgDgCIACADIgEgDQgBAAAAAAQAAAAAAABQAAAAAAABQABABABABIAEAIQAAAEADACIgFgDIgJgHQgHgEgEgHQAAAEACACQgBAAADAFQABABABABQAAABAAAAQABABgBAAQAAABgBAAIAEACQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBgBAAIAEAFQgEgFAAAEIAGAFQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABIAFAEQgCAAgDgEQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAABAAAAIgBgGQgDAAgEgFIgIgIQgEgCgCAFQgCADgJgHIAJALQAGABAIAGQAEACgHgIQgGgIAHAEQAGAIgGgDQAFAGAGADQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAFQgIgFACADIgIgFQgFgDgEgFQgCAAAEAGQABABAAAAQAAABgBAAQAAAAgBgBQgBAAgBgBQADADABACQACADAEACQgIgHATAKIAAAGIgDgDIgEgCIAGAFQgIgGACAHQACAHgJgGIABgCQAAgBAEADQgBgDgFgEIgIgGQgDgBgDAEQgDAFgIgDIAGACIADABIgEAAIABAAIAEABIgBgBIADACQABADgJgCIgOgEIAIAFQgBAAgBAAQgBAAAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAIgCgCIgBAAQgBAAAAABQAAAAABAAQAAABABABQAAAAABABQAEACABACQgIgDAFAEQAFAFgEAAIADABQgEAAADAGIACAFIgGgDIgEACIACADIAEACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBgBAAIAAgBIAEADQgFABgFgFIgKgIQAAABAAAAQAAAAAAABQAAAAgBAAQgBAAgBAAIgEAAIAJADQAEACAEADQACADgEAAQgFABgGgCQAJAGgBAEQgBADAHADIgFAAIAEABQACADgHgCQgIgCABABIAHACQABACgKAAQgIAAAEAEIADABQABAAAAAAQABAAgBABQAAAAgBAAQgBAAgBAAIgGgEQgKgCAGAFQAGAHgCAAIAEAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABgKgBQgGgBAFADQACgBAKADIADADQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIAGACQgGAAAFAEIABAAQgJgBADACIAFAEIAFABIgEABQgBAAAAAAQAAABAAAAQAAAAABABQABAAABABIAHAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgCAAIAHABQAFABABABQgEgBgCABQAAAAAAABQAAAAAAAAQABAAAAAAQABABABAAQACAAABAAQABAAAAAAQABAAgBgBQAAAAAAAAIgDAAIAFAAQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAABAAIAJAAIgMAEgAhKBdQABAAAAAAQAAABAAAAQAAAAAAABQgBAAgBAAQAQADgFgDIgOgEIABADIABgBIAAgBIACABgAhCBaIAAgBIgDAAQAAgBAAAAQAAAAAAAAQAAgBABAAQABAAACAAQgIAAgFgBQAEAEAIAAgAhQBUQABAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgCgBgAhNA8IACACIACABQAAAAAAAAQABAAAAgBQAAAAABAAQABAAABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQgBgBgCAAgAh5A6QAFABgDgDIgHAAQgEAAACACIABAAIAGAAgAh0A4QAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACAAIgCgDIgCABgAhLAoIAFADIACgBQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAIgHgFQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgEgCIADADgAg+AoQACABABAAQABAAAAAAQABAAAAAAQAAgBAAAAQgCgDgEgCQABABAAAEgAhOAJQAEACgCgDIAAABQgBgBgFgCQgEgCAAgCQgCAAgBAAQgBAAgBAAQAAAAAAAAQAAABAAAAQADgBAFAEIAAACIABgBIAEACgAhdgCQABAAABABQABAAABAAQAAAAABAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIgHgDIgBAAQAAAAAAAAQAAABAAAAQAAABABAAQAAABABABgAhBgwIACACIAAgCgAAmg1IgHgHIADAEIgEgDQAIANAAgHgAAAhNQABABAAABQABABABAAQAAAAAAAAQABAAAAgBIgDgHgAA7hNQAAgEADgCQABAAAAgBQABAAAAAAQAAgBABAAQAAABABAAQAAgEgFgJQADANgDgDQgBgBgBgBQgBgBAAAAQgBAAAAABQAAAAAAABQACABABADQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAgBgAAYhYQAAAAgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAAAAAAAQABAAABgBQAAgBABgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAgAgxA6IAAAAIAAAAgAA+g5IgBgCIACgCQABAAAAAAQABAAAAAAQABAAAAABQAAABABABIgFAAIABACIgBgBg");
	this.shape_38.setTransform(34.6,-28.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#45A63A").s().p("AgCgCIAEAAQADAAgDAFQgEgCAAgDg");
	this.shape_39.setTransform(48.7,-34.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#45A63A").s().p("AAAgBIABAAIgBADg");
	this.shape_40.setTransform(22.8,-22.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#45A63A").s().p("AAAACQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQAAgBABAAQABAAAAgBQAAAAABAAQAAABAAAAQAAACAFgDQgDADgCAAIAAAAg");
	this.shape_41.setTransform(15.5,-28.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#45A63A").s().p("AAAAAIAAgBIABADg");
	this.shape_42.setTransform(4.9,-34);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#45A63A").s().p("AgBACIAAgDIADADg");
	this.shape_43.setTransform(3.9,-34.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#45A63A").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABgBIABgCIgCAJg");
	this.shape_44.setTransform(1.5,-33.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#45A63A").s().p("AgBgBIACABQABAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIgBgDg");
	this.shape_45.setTransform(0.5,-35.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#45A63A").s().p("AAAAEIgCgEQABAAABgBQAAAAAAAAQAAgBAAgBQAAgBAAgBQACACABAIIgCABIgBgCg");
	this.shape_46.setTransform(-5.4,-32.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#45A63A").s().p("AAAAFQACgDgBgDIgDgFQACABABAEIABAIQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAAAABg");
	this.shape_47.setTransform(-6.5,-33.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#45A63A").s().p("AgBAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIgCABIAAAAIgBgBg");
	this.shape_48.setTransform(-8.8,-33);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#45A63A").s().p("AAAABQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABIABABIgBACIAAABIAAgCg");
	this.shape_49.setTransform(-9.1,-34);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#45A63A").s().p("ABrBcQgBgDAFgBQAFgCACgCQgBgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABIgFABIAIgGQAAgBAAAAQgBAAAAAAQgBAAAAABQgBAAgBABQgBAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQgDABgBABQgCADgDACIACgDQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAgFgFgBQgGAAgBgDIgEAEIAAgCIgCACQABgJgEgCIgEAGIADgIIgGAHQAEgEgCgCIgDgEIgFAEIABgEIgCADIABgFQABgEgCABQADAAgLAKIADgMQgFACgCAFIADgHIgDAEQgEAAgBgEIgBgJQAAgNgLAGIAAACIABgMIgJAJQAAgBABgBQAAgBAAAAQABgBgBAAQAAgBAAAAQgCgBACgEIgFAIQgEADgCgGQgDgFgEABIAKgGIAGgBQgCgEgDABQgEABgBgDIAAAFQgEAFgCgFQgBgEgEAGIAAgJQABgIgDABIgDAMIgDgCIADgIQAAAAAAAAQAAAAgBAAQAAABgBAAQAAABgBABQACgGgCgCQgCgDgBgEIgBAEIAAgDIgEAFQgCABgCADQABAIACgGQgBAGgCgBIgDgCQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgBgDIgBADQgCACABgHQAAgGgFAHIADgIIgEAFQACgHgCgBQgBgBACgHQgCgBAAAIQgCABgCgGQgBgFgDADQAAgDgCgBQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgCAHQAAgCAAAAQgBgBAAgBQAAAAAAgBQgBAAAAAAIAAADQgDgEgGgEQgCAIABACQgDADgCgGQgDgHgDAAIAAAEIgCgGIgCAHQgJABAAgQIgCAGQgBAEABADQgCgGgFgCIgHgEIAAgBIgCgDIAAABIABACQgDgCgBgGQgCAJgCACQAAgEgEADQAAAAgBABQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBACQgDgBgIgGQgIgEgEAEQAAgKgEgEIgGgHQgBAFABACQACACAAADQAAAAAAAAQAAAAAAABQgBAAAAABQAAABAAACQgBAEgDgFIABADQgBAAAAgFQAAgCAAAAQAAgBAAgBQAAAAgBAAQAAAAgBAAIAAAHIgCgJQgDABgHAAQgHABgEAEIABgHIgGgFQgCgEgCAEIABADQgEAEgDgGQgDgHgDgBIADABQACAAAAgFQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABIAAgKQAAAEADABIACADIABAAIgBAAIAAgEIAHAFIgEABQABAFADgCQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAABIAAgIIAAgHQADgCABAGQADAKACADIgBADIACAFQABAAAAABQABAAAAAAQAAAAABgBQAAAAAAgBIAAgFQAAABABAAQAAABAAAAQABAAAAAAQAAAAABgBQgCgMgHAAIAAgIIANAKQAHAFAGgCQgCgGACAAQACAAAAgGQAAABAAABQAAABAAAAQABABAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQAAAAAAAAQACgEgDgDQgCgDABgDIAHAKQAFAIAEgCIgBgGIAEAMQAEAHACgIIgFgQQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAgBIAAgGQACgBAAAIIABAPIAEgIQAEgEADAEQAEAEABAJQAFADgBgKIgBgOQgCgGgDAAQgBAEACADIAAACIgEAAQgBAAAAAAQgBAAAAAAQgBgBAAgBQAAAAAAgBIAFABQABgGgCABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQACgFADACQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBIAAAAIAFACIADAEQgBAGgBABIgDADIALAKQAHAGAGgKIgCgKIAEADQACABACgIQgBABAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgFIgBABQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAFADAFIACAGQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIADgEQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIgDAFIABAEQABABAAAAQAAAAABAAQAAgBABAAQAAgBABgBQABgDAAgDIgCgGIAFAMIABgCQAAAGACgDQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABQACgDADAHQABAGAFgGIABAEIABgEIAAAFQADADABgFIADgJQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIABgDIACAHIACAMQACAHgEAIQAEgCAAgDQABABACgGQACgFADACIAAgDQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIACgGQgCAHAEgDIACgJQgBAGAEgBIAAgGQAAABAAAGQgBAEACgCIgFAEQACACgCAIIgCALQAAAEAGAAQAEABgDALIAHgNQgCgFACgKQgBgFgEAHQACgFAAgJQABACAFgBIAHgBQgBALADgCIgBAIQAAAHgDAFQABACADgFQADgEgBAHQACgEACgCQACgCABgEQgDAEAAgGIABgMIAIgBQgCABgBADIAAAFIAEgHQgDAGACABIAFgCQAJgCgEALQgBgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgCAAADgFQgDABgDAHQgCAHgDACQABAEAHADQAGACgBAIIABgGIAAgDIAAAAIABgBIgBABIABAEIAAgBIAAgEIABgCQADgBAAAJIgBAQIAFgJQgBABAAABQAAABAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABABQAAAAAAABIgCAEQACABADgEQACgEABAAQgBAHADgEQAGgGAAAFIACgDQAAAEAHgBIALgBIgDAAQgDABgDAEIAEAGIADgBQACgBABgEQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAABIADgDQABAEgFAFIgKAIQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAABIgBAFQADgDACgFQABgEAFgDQAEgCAAAFQAAAEgDAGQAIgHAFADQAEADAFgFIgCADQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIACgEQAFgBgFAHQgEAHACAAIAEgHQADABgDAKQgDAJAGgCIACgDQAAgBABAAQAAAAAAAAQAAABAAABQgBABAAACIgGACQgGAJAHgCQAJgCAAADIACgEQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQABABgGAHQgEAFAFgCIAFgFQADgEAAgCIAFABQAAAAAAABQABAAgBAAQAAABAAAAQgBABAAABIAEgDQAAABAAABQgBAAAAABQAAAAAAABQABAAAAAAIAEABIADgDQgIAJAEAAIAHAAIAFgEIgCAFQAAADAFgBIAFgFQgBABAAAAQABAAAAABQAAAAABABQAAABABAAQADACgEAEIAFgDQAFgEABACQgCADAAACQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAQACgBABgBQABAAAAgBQAAAAAAAAQgBAAgBAAIgCABIADgDQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAAAAAAAQAAABABAAIAHgHIgDARQgGACgFAEIgEgCQgEABgCADIgBAEIgDgCIgBACIgBgCQgDAFgHABQgHABgCAEQAAgDAHgFQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgBABIgEABIgEAHQAAgBAAAAQgBgBAAAAQgBAAgBABQgBAAgBABQgFAEgDAAQABgEgKADIgMADIAAAAgABZBGIgEAFQgBABAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAFgFQAAAAAAgBQABAAAAgBQAAAAAAAAQgBgBAAAAIgBABgACUA8IAHgGQADgEgEAAIgMAIQAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAIACAAIAAgBIABgDIACAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABgBABgACPAwIgGAFQAIAAAEgGIgDgBIgBACQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBABAAIABgEIgCAFgACJAqQACgBABgDQABAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAgAApAiQAAABAAAAQAAABAAgBQABAAAAAAQABgBABgBQABgBAAgBQABgBAAAAQAAgBAAAAQAAAAAAAAQgBAAgBABQAAAAAAgBQAAAAgBAAQAAAAABgBgABvAcIAAAGIACgBIADgCIAAgEIgBgBIgEACgAA4ARIABABQgBAAgCAFQgCAEgCAAIgCADQAAABABAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgCACgCIACAAQgBAAAAgBQAAAAAAAAQABgBAAgBQAAgBABgBQAAAAABgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBAAgABaAVIgEAEIAFgCIADgEIgBgCQAAgCACgDIgGAGIAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABAAABgAABAMIgBABIABABIAAgCIAAAAgABcAIQADgFgEABQgDABgDADIADAAIAEAAgAg/gaIADACQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgCABgAhSgeIAAADIACgEIgBAAIgBABgAhPgkQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgFABgAiCgkIAAgDIgBAAQAAAAAAAAQAAABAAAAQAAABAAAAQABAAAAABgAhxgqQABgNABAEQABACABAAQABABAAABQABAAAAAAQAAgBABAAIgBgDIgBgDQAAgBAAAAQABgBAAAAQABAAAAAAQABABAAAAIAAgFQgBAEgDABQgEABgCgBQgCADAEAKgAgCgwQAEgLABAIIgBACQgCAFgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBgAADgzIAAAAIAAABg");
	this.shape_50.setTransform(9.8,-25.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#45A63A").s().p("AAAACIAAgDIABADg");
	this.shape_51.setTransform(-10.1,-31.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#45A63A").s().p("AAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAIABACg");
	this.shape_52.setTransform(-10.3,-30.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#45A63A").s().p("AgEgCQAFgBAEADIgFADIAAAAQgDAAgBgFg");
	this.shape_53.setTransform(-10.8,-32.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#45A63A").s().p("AgCAAIACAAIADACg");
	this.shape_54.setTransform(18.6,-17.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#45A63A").s().p("AAAAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAgBgBgCQACAFgCABIgCACQAAgBAAgBQAAgBAAgBQAAAAAAAAQABAAAAAAg");
	this.shape_55.setTransform(9.8,-15.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#45A63A").s().p("AgBAAIADAAIgCABg");
	this.shape_56.setTransform(-1.8,-12.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#45A63A").s().p("AgCAAIAFAAIgDABg");
	this.shape_57.setTransform(-3.3,-12.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#45A63A").s().p("AgBABQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIADAHg");
	this.shape_58.setTransform(-4.2,-10);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#45A63A").s().p("AgBAAIACgBQAAAAABABQAAAAAAAAQAAAAAAAAQgBABAAABQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_59.setTransform(-6.2,-10.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#45A63A").s().p("AABADIgDgCQABgBgCgDQABAAAGAGQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_60.setTransform(-9.2,-5.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#45A63A").s().p("AACAEQAAgDgCgBIgFgDQACgBADADIAGAFQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_61.setTransform(-10.8,-5.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#45A63A").s().p("AAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAIAAABQAAABAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIAAgBg");
	this.shape_62.setTransform(-12.4,-3.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#45A63A").s().p("AAAABQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAABAAIABABIABABIAAABIgCgBg");
	this.shape_63.setTransform(-13.2,-4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#45A63A").s().p("AisBjQgHgEgDABIADgBQACgBgDgEIgDgCIACAAIgDgDQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAIAEAAIgCADQAEAEABgDQABgBAAgBQAAAAABgBQAAAAAAAAQAAAAABAAIgGgGIgDgGQABgDAFAEQAIAHADABIABADIAFACQADACgBgEIgDgEQABABAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQgJgIgEAEIgGgHIASAAQAJAAADgFQgFgDABgCQACgBgEgFQABABABABQAAAAABAAQAAABABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQgCgEgDgBQgEgBAAgDQABAAALAEQAIADACgDIgFgEIALAGQAHAEgDgIIgNgKIAAgEIgEgFQACgCAFAGIAKAMIgCgJQADgLAPAPQAEgCgFgHIgKgKQgEgEgEACQACAEADABIACACIgDACQgCACgDgDIAFgCQgDgFgBABQAAABAAAAQAAAAAAABQgBAAAAgBQAAAAgBAAQgCgFADAAQABAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAAAIAEgBIAGABQADAGAAABIgBAEIAOABQAKABgBgMIgIgGIAFgBQADAAgEgHQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAgBIgEgDIABABQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQADAEAFACIAGACQgCgCAAgGQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABIABAFIAEACQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQgBgDgCgBIgFgEIAMAFIgBgCQABABAAABQABABAAAAQABAAAAgBQAAAAAAgBIgCgEQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAQABgEAGAFQAFAEgBgIIADACIgBgDIAEADQADABgCgFIgDgIIgBAAQACgGgCgBIAGADIgBAAIAJAIQAGAFADAIQACgCgDgEQACAAgCgFQgCgGADAAIgDgCQABgBAAAAQAAAAABABQAAAAAAAAQABABAAAAIgBgGQACAGACgEIgFgIQADAFACgDIgDgFQACAAACAGQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIgCAHQADAAAEAHIAFAKQADADAFgEQAEgDAFAJIgDgNQgFgCgFgJQgFgEADALQADAKgGgGQgCgGABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABABQgCgHgHgGQADABADgEIAEgFQAHAIABgDIAFAHQAEAEABAHQABAAgBgGQAAgFAEAGQgCgEAAgDQABgDgCgEQAAAFgDgEIgHgJIAEgGQgBADAFAFIgBgHQACAIAEgHQAEgIAEALIgCABQgBABgCgFQgBADACAGQAEAIAAACQADADAGgDQAGgDAFAHIgDgFQgDgCgBgEQACgDAGAHIALALIgDgJQABABAAABQABAAAAAAQAAAAABAAQAAAAAAgBQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAABAAABQAAABAAABQAAAAAAABQABAAAAAAQACgBgBgEQgCgFABgBQAEAHAAgGQAAgIADADIgBgDQADADAEgGIAHgJIgCACQgBACABAGIAGABIABgDQABgDgCgCIgCABIAAgEQAEACAAAHIAAANQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAABIAEADQAAgEgDgFQgCgEAAgFQABgEAEADQAEADADAHQAAgLAFgCQAEgCAAgGIABADQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAgBIgBgDQACgFADAIQACAIABgCIgCgHQACgCAGAIQAFAIADgGIgCgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIACADIgBAGQADAKADgHQAEgJACACIgCgDQgCgCABgDQABAAADAIQACAHABgGQgCgLgBgCIACgDQABAAAAAAQAAAAABAAQAAABAAAAQABABAAABIAAgFQABABAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADgCIgBgEQADALACgEQADgGABAAIgBgFIAEAEQACACACgFIgCgGQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQADgCACAGIgBgHQAAgFACgBIACAFQABAAAAAAQABAAAAAAQAAAAAAgBQABgBAAgBQAAgCAAgBQAAgBgBgBQAAAAAAAAQAAABgBABIAAADIgBgFQAAAAAAgBQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQAAAAABAAQAAgEgCgGIAMALQgBAHABAGIgEACQgBAFACADIADADIgDABIAAACIgCAAQADAFgDAHQgCAGADAEQgCgBgCgJQgBgBAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgBAFIAEAHQgDgCAAAGQABAHgCACQgDgDgCAKIgEAMQgDgBABgEQACgGgCgCQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAABQAAABAAAAQAAABAAAAQAAABgBAAIgBgKQgBgBAAABQAAAAAAAAQAAABAAABQAAAAAAACQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgBADABACIACAHQgDgIgBAGIABACQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQgEgBgEADQgFAFgCgBIABAFIgBgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABIABADQgIgGgEACIADAGIgFgHIABAJQgBgFgDAAIgGABIABAFIgCgDIABAEIgEgEQgBgBgBAAQAAgBgBAAQAAAAgBABQAAAAAAABQACgDABAOIgIgJQgBAFABAEIgDgGIABAFQgDAEgMgIQgLgIgDAMIAAACIgIgJQABAJgBADQgBgEgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABIACAEQgCAFgGgCQgGgCgCADIADgKIAEgGQgEgCgCADQgDAEgCgBIADADQABAHgFgCQgEgCABAHIgHgHQgEgGgCACIAFAMIgEABIgCgIQgBAAAAAAQAAAAAAABQAAAAAAABQAAABAAABQgDgFgDgBQgEAAgDgDIABAEIgBgCQABADgBADQgBACABAEQAFAEgBgEQADAEgDABIgEABQABgDgFgDIACADQgBADgEgGQgDgFABAJIgDgIIAAAHQgDgIgCAAQgCABgDgHQAAAAAAAAQgBAAAAABQAAABABAAQAAABABABIABADQgBACgFgEQgFgCABAEQgCgDgDABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIADAHIgFgCIABACQgFgCgHACQADAHADABQAAAEgGgDQgIgDgBACIACADIgFgEIADAGQgIAHgJgMIACAFQABAFADACQgFgEgFABIgJACIAAgBIgEgCIABABIACACQgEAAgFgEQAEAHAAAEQgBgBAAAAQAAgBgBABQAAAAgBAAQAAABAAABQgCAEgCgBIAAACQgDACgKAAQgIABgCAGQgGgJgFAAIgKgCQACAFADAAQADABACADQgBAAAAAAQAAAAAAABQAAAAAAABQABABAAABQACAEgEgCIgCgCQAAgBgBgBQgBgBAAAAQgBAAAAAAQgBAAAAABIAEAGIgHgHQgBADgHAFQgFAEgBAGQgCgDgBgDIgHgBQgFgBABAEIACACQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgEgBgAhrA9QgHgLAEACQAGADgBgDIgCgBIgDgCQAAgBAAgBQAAgBAAAAQAAAAABgBQABAAAAABIgCgEQAAADgCADQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQABADADADIAFAEIAAAAgAhLAzIADADIgBgEIgBgBIgBACgAhMAtQABABAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAgBQAAAAgBgBgAg8AWQACAGADAEQAEAFAAgDIgHgJQgCgEgDgCIACAGQAAgBgBAAQAAgBAAgBQAAAAAAAAQAAgBABAAIABABgABFAPQABABAAAAQAAAAABAAQAAgBAAgBQAAAAAAgCQgBgBAAgBQgBgBAAAAQAAgBAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAgBIADAGgACFAAIACAGQABABAAAAQAAABAAAAQABAAAAAAQAAgBAAAAIgCgGIgBgCIgBABgABGgBQACADgBACQgBAAAAABQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgCgEIgBgDIABgCIAAAAIAAAAQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAgBgBgBQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBABAAABIACgBIABAGgAAFgEIACAEIABAAIgDgFQAAgBgBAAQAAgBAAAAQgBAAAAABQAAAAAAABIABABIABgBIAAABgACCgDQADADAAgEIgCgCIAAAAIgBADgABegZIABgEIAAgGIgDAAQgCgBAAgEIAAAJIABAAQABAAACAGgABSgqQgCAEABAEQAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIADgBQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIgBABgABwgqIAFAEIABgCIgBgEIgDgCIgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAABAAABgACSg4QACAEgBAEQAFgGgDgIIgCACQAAAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBgBQAAAAAAAAIgCgEIACAFgACahBIABAQQAAAAAAAAQAAAAABAAQAAgBAAAAQABgBAAgBIgBAAIgBgCQACgEACAEQgBgMgCAAIgCABgACfhAIACAJIAAgKg");
	this.shape_64.setTransform(6.1,-11.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#45A63A").s().p("AgCAAQAAgBAAgBQAAAAABAAQAAAAAAAAQABAAAAABIADAEg");
	this.shape_65.setTransform(-7.9,-8.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#45A63A").s().p("AgBAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACABg");
	this.shape_66.setTransform(-12.2,-0.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#45A63A").s().p("AgEAAQAFgDAEABIgDAFIgBAAQgCAAgDgDg");
	this.shape_67.setTransform(-13.7,-1.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#61A3D5").s().p("AABACQgCgCgEgBIALABIgFACIAAAAg");
	this.shape_68.setTransform(-36.4,25.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#61A3D5").s().p("AAAgCQAEgBACgCQgBAIgEgDQgEgCgBAIQgBgHAFgBg");
	this.shape_69.setTransform(-16.7,20.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#61A3D5").s().p("AgDAAIAGgBIABADg");
	this.shape_70.setTransform(10.6,23.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#61A3D5").s().p("AgEAAIAFgBIAEADg");
	this.shape_71.setTransform(13.3,23.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#61A3D5").s().p("AgBAAQgCgGABAAIAFANQgCgCgCgFg");
	this.shape_72.setTransform(15.1,22.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#61A3D5").s().p("AAAAHIgCgNIAFAGQgDAAAAAEIAAADIAAAAg");
	this.shape_73.setTransform(16.6,20.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#61A3D5").s().p("AgBACQgCgCADgBQADABAAACg");
	this.shape_74.setTransform(19.1,22.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#61A3D5").s().p("AgBgHQADgBABAGIABAHIgEgBQgBAAgBAEQgCgDADgMg");
	this.shape_75.setTransform(30.7,22.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#61A3D5").s().p("AgCACIABgNQABAGADABQgFAAABAFIACALQgDgEAAgGg");
	this.shape_76.setTransform(32.5,25.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#61A3D5").s().p("AgEAAIAEAAQACgBADABIgFABg");
	this.shape_77.setTransform(38.3,25.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#61A3D5").s().p("AACADIgFgDIADgCQAAAAAAAAQABgBAAABQAAAAABAAQAAABAAAAQADAEgCAAIgBAAg");
	this.shape_78.setTransform(39,27.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#61A3D5").s().p("AnTA7IAFgGQADgEABgEIAKADQAGgEgCgGIgEgIIAGADQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAEADQgCgJAKgFQAJgEgDgIQAEADgCANQACAEADgDIAFgFIgEgMQAFAFADgHQADgIAGgBQADAGAMgJIAJgIQAEgEABABQAEADgEAFQgGAGABAEQADABACgDQADgFACAAIgDANQADACACgGQAAgCAAAAQAAAAABAAQAAgBAAAAQAAABAAAAQAEgEgBgCQgBgGABgEQAAADACACQACADADgDIgCgFQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAEAEADAAIAHgCQAIgFAEABIAAgHQAAAAABABQAAABABAAQAAAAAAAAQABAAAAAAIgBgFIAHAFQAJADAEgCIgFgIIAIAJIgDgNQADAIAFgCIAMgCIgCgHIAGADIgDgFIAJAEQAGADADgFQgCADgDgGIgEgKIAUAIIACgHQABgDgCgDIAHAHIgCgGQAMgKAfAIQANADAHgBQAJgCAIgLIgBgCIATALQACgBABgHQABgIADgCQAAAGAGgBQAHgBADAFQACgEgCgDIgEgGQALgHATADIASAEQAQABAGAAIgeAJIgRAHQAJADAMgDIALgCIAPADIgLgHQAGgFAHABQAGABAHAFQAGAEADABQAEAAADgGQADACABAFIADAJQADALAEAAIADgSIAGACIgDALQACACADgFQAAAIAEAEQAGADADAGIACgGIABAFQACgFAEgDQADgCABgEQgGgJgBAGQgCgIAGABIAIACQgDADACADIADAEIAAgFQAEgCADAKQADAJAEgMIgBALIAGgIQgBAMAEABQADABAAAJQAEABgBgGIgBgFQACgBADACIAFAEQAHAGAAgGQADAEAFgBQAFAAACABIgBgJIAEADQABABAAAAQABAAAAAAQABAAAAAAQAAAAABAAIgCgEQAKAEAOgFQgEgJgEgBQACgFAMADQAOADAFgEIgCgEIAJAFIgEgKQAagOAOASIgBgGQABgHgGgDQAKAFARAAIANgBQAHAAAFABIAAAAIAHAFIAAgCIgEgDQALACAGAIQAEgNADgCQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAIAIgCQAOgFADAJQAAgBABAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAQAAAAABgBQAEABANAHIATALIARAKIASAGQgGAMAHAKQAJAOABADQAFgFgCgEQgCgFABgEQABACAGgFQAFgEABAJQABgBAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQADABgEAHQgEAFAFABIAGgHIgDANIAMAEIAKAFQALAGAJgEQAAAFgEAEQAAAAABAAQAAAAABABQAAAAABAAQAAABABABIADAFQAFAHAGgGIgCgEQAEgCACABQADABACAEQAJAKAGAAIgHAAQgEAAAAAGQABAFAFAAQAEAAACgFIAAAMQgCgEgEgCIgIgDIACAGIgHgEQgFgBgDgDIAIAAQgCgIgGACQgGACgCgCIABALQAAAEgEAFQgJABgBgJQgBgOgDgGIADgDIgCgIQgCgEgFADIgBAGQgBgGgEADQgBAIAEAHQAEAFAFACQgDAGAAAFQgGgEgSgWQgNgQgMgDQAAAJgDgBQgEgDgDAGQACgFgEgBQgGgBgBgDQgEAEACAGQACAGgEACIgIgVQgFgPgJgBQgCAFACAEIgDgJIgEgKQgFgMgIAJIAGAYQgCgBgEADIgBAJQgFAAABgMQADgQgBgDIgKAJQgEABgEgBQgEAAgDgCQgGgFgHgNQgMAAAEALIAHARIAFAGQACACAEABIAAgFQAAABAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAABAAQAAgBABABQAAAAAAAAQABABAAABQgDAGgEgCQgFgDgCADIABABIgIgCQgDgBgGgEQAAgJACgCQAEgBACgCQgGgBgHgCQgKgFgFgBQgUgFgGASIAMAKIgKAAQgGAAADALQADgFACAEIADAGIgHgEIgMgFQAEADgDAKQgEAAAAgFIAAgIIgHgCQgEgBABAGQgBAFAFACQAGADABACIgVgGIACACQgGgGgBAFQAAAFADABQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQgCAEgEgBIgIgDQgFgCgCABQgDABgBAHIgHgDQAAAEABABIgHgEQgHgCACAIIADAMIABAAQgCACgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIgNgFIAAAAIgQgLQgKgIgBgMQgFAFACAEQgEAAABAIQAAAHgIgBQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIADABQgFACgBgEIgBAIQAAgJgJAEIAFAOQgCgFgDgBQgCgCgFACIAEAIQgFgBAAgIQgBgFgHADIALgIQgHgCgBgKIgDgQQgDgEgGgBIgJAAQgLABgCgQIgDAKIgEAIQAGAFACADQACAFABAJQAFAFACgDIADgHQgBAKAIALQgFgDgLACQgMADgCgBQgCgFgCgEQgEgEgDABQAAgBgEgKQgEgJAFgIQgEgDgFAHQgFAFgCgKQAAAHgEADQgEACAAAGQAEgGAFAJIAHARIgRACQADgBgBgFIgCgHIgGAJQACgIgEgCIgLABQgJABgDgCQgCgBgBgDIAAgIQACABAEgBQADABgCAIQAGgCACgJQACgLADgDQgEgHgPgDQgLgEgFgKIADAJQADAEgBAFQgCACgEgDIgGgIQgKgNgGgEIADAMQgFgFgCADQgCAGgEgCQAAgGgCAAQgEACABAFQABAGgCACQgHgJgBAJQgBAKgHgEIACAFQgHgEgJAJIgPAPIAEgEQAEgDgDgIIgOAAQAAACgCADQgCADAEAEQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIACgCIAAAGQgJgCABgKIACgSQgEADgFgDQgFgFgCABQAAAFAGAGQAFAGgCAHQgCAGgIgDQgIgEgGgHQAAAPgLAEQgKAEACAJIgCgDQgBgBAAAAQgBgBgBAAQAAAAAAABQgBAAAAABIADAEQgEAHgGgJQgHgKgCADQABADAEAGQgFAEgOgJQgNgIgGAIQABABAAAAQABABAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgGgEIADgIQgEgIgDAAQgDAAgEAFIgIAIQgEAEgEgCIAFAFQADADgDAEQgDAAgFgMQgDgJgFAHQACABABAIQABAIADABIgJAEQgEABgBgGQgDABAAAGQgCgEgFAAIgJADIABAFQgDgQgHADIgHAEQgEACgDgBIgBAHIgGgIQgFgEgHAFIABAJQgCgDgKgCQgJgBAAgIIgDAIQgCAHgGgCQABgFgEgDQgDgEgEAEQgCADAAACQAAAAAAABQABAAAAAAQAAAAABAAQABAAAAAAIACgBIAAgDIAAAHQgFABgBgEQgCgFgEgBQgEAEABAJQgGgHgNgWgAlNBHQABAAABABQAAAAABAAQAAAAABAAQAAAAABAAIgGgJQgCAFADADgAljBBIAEAGQgHgMADgHQgHACgCACQgDAEACAIIAHAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIACgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABgAmEBAQAAAGAIgCIACgKQABgEAEgGQgCgDgFAEIADABQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABQgHAEgCgIIgDAOgAmNA+IAFAAIABgNgAlgAuIgDAGIAFgDQABAEADgFIgBgCIgDADIgCgDIAAAAgAkQAxQAFACgBgIIgKgDQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABABABQAAABAAABIABgBIAHACgAjIAYIgHAEQAEAHAEgFQAEgFgCgGQAAADgDACgAjfAZQAFABABAEIgBgMQgCADgEgEQgDgDAAgCIgCAFQgBACACAGIADAAIACAAgAk2gGQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIACACQABAAACgEIgDgCIAAABgAC+gFIgCgFQgBgDgDgCQABAGAFAEIAAAAgAlAgUQABABACAIQACAGADgFQgCgBgCgHQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCACgAB7gUQAGAHAAgEIABgMgAESgQQAEgFAJAAQAHgBAFADQADgDgCgGIgEgKQgCALgBACQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgIgKgEAFIAEADQACACAAADQgFAFgDgEgAimgXQADAFACgFIgEACQACgCgEgGQgDgGADgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQgBAAgBgBQgEgCgCADQABADAEACQADABgBAFIgCACIAAAAQACAAADAFgAFagYQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIgCgCQAAAAAAABQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgCgACKgfQADAGAGgIgAC+gpQgFACAAAFQgBABAOgGQgCgCgDAAIgDAAgAgKgqIACgCIgCgCQgBABAAAAQAAABAAABQAAAAAAAAQAAABABAAgAimgyQADAIADgDQADgDACABIgGgHIgCgCQgCAAgBAGgADFguQAAACAFgEIgEgDIgBAFgAjgg2IAHADIAAgCIgHgDgAAZAuIABgCQACgHABgBQADgCAFAHQgCAIgDABIgBAAQgDAAgDgEgADOAhIAAgBQAEACgBACIgDgDgAEKAJIgCgDIAJAAQAFgBABAGIgLgDIAAAGQAAgDgCgCg");
	this.shape_79.setTransform(-6.5,19.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#61A3D5").s().p("AgBADIABgIIACALIgCAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_80.setTransform(24.1,21.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#61A3D5").s().p("AgCgBIAEgBIABAFg");
	this.shape_81.setTransform(41.3,23.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#61A3D5").s().p("AAAABIgDgCIAHABIgCACIgCgBg");
	this.shape_82.setTransform(41.3,22.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#61A3D5").s().p("AgLADIALgGQAHgDAFAHQgKAEgGAAQgEAAgDgCg");
	this.shape_83.setTransform(43,24.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F8C25D").s().p("AgCAAIACAAQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQgDAAgCgBg");
	this.shape_84.setTransform(-34,-10.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F8C25D").s().p("AAAABQAFgBgCgHQAEAEgEAEIgHAHQgCgGAGgBg");
	this.shape_85.setTransform(-30.5,-6.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F8C25D").s().p("AgDAAIAIAAIgBABg");
	this.shape_86.setTransform(-31.7,-20.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F8C25D").s().p("AgEADIAGgGIACAGQgCgCgDACIgCABIgBgBg");
	this.shape_87.setTransform(-22.9,-18.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F8C25D").s().p("AgCgBQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAABIACACIABABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABg");
	this.shape_88.setTransform(-21.7,-14.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F8C25D").s().p("AgEAAQABAAgBAAQAAAAAAAAQAAgBgBAAQAAgBgBAAQAEgDAKACQgBAEgGABIgIACIADgEg");
	this.shape_89.setTransform(-20.3,0.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F8C25D").s().p("AAAgCIgKAAQAGgCAEABIALADQgGAAgEAEQAFgGgGAAg");
	this.shape_90.setTransform(-24.2,1.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F8C25D").s().p("AgFACQAFgDAGAAIgEACIgFABIgCAAg");
	this.shape_91.setTransform(-30.9,4.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F8C25D").s().p("AgCABQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAABABIAFABIgDACIgBABIgCgCg");
	this.shape_92.setTransform(-31.8,3.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F8C25D").s().p("AACCsQgNgGgKgBIAKAAQAHAAABgFQgCgEgHABQgHAAgDAEIACgKQACADAGACIALABQgCAAgBgEQADACAGAAIANAAIgMADQAEAFAJgDQALgEACAAIgFgHQgDgCADgFQAKgFAGAFQAKAFAJAAIgCAEIALABQAHgBADgGQgCgDgEABIgIAAQAAgCAIABQAJABABgGQgGgCgKACIgRAFQAAgEgEgEQAXgDAWgLQAYgMALgTQgJACACgDQAFgGgGgDQAFACADgGQAEgIACgBQgDgEgGAFQgGADAAgEIAJgHIAFgEIAFgFQANgOgCgOQgDABgDAFQACgGAKgOQAGgOgJgEIgHAKIgHAKQAAgDgDgDIgHAEQgBgIAIgDQALgGACgEIgLgHQgNgVAFgZIgGgHQgGgDgCAGIgEARQgBAJAFAIQAEgBAAgHQAAgBAAAAQAAgBAAgBQAAAAAAAAQABAAAAAAIAGALQAEAHgDAFQgCgJgEgHQgFADACADQADADgBACQgFAAgCgGQgCgIgEgBIAAABQgCgFgEgFIgFgMQAFgFADACQAEADAEABIgLgPQgHgMgFgGQgUgUgTAHIAJAOQgEgCgJgGQgGgDgCAGIACACIABAAIACABQARAOAOASQARAVALAYIACgBQgBAWgLAVQAAACADAIQADAIgCAHQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgFAHQgJAOgFAAQgCAFAEAAIAHgBQgLAWgcANQgQAHggAKIAegUQANgJAHgIQgUAKgHAFQgQAJgOABIAOABQgGAKgXgCIgOgCQgHABgCAEQgLgCgOgMIgLgJIgNgHIADAQIgTgJIAFgIQgIgGgDADQgCgGgMgPQgLgNgCgKIgFAAIABgFQgEABgHgHQgHgHgCABQAAAGADAHQADAIACgCQABAGgCgBQgDgBgDgGIgLgZQAFAHAAgHIgBgMQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgCACQgFgJAGgOQACgGAAgDQgBgEgFgFIAJgDIgEgRQAFABADgDIAEgHQADgLAIADQAEgJgGACIgEAAQACgKAOgLIAJgIQADgDgBgDQAGgDAKgIQAIgHAFgCIgEgGIAJgCQAFgCACgCQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAgBAAIAxgPIgEgFQgCgCgHABQAIgIAVACQAdADAEgBIgBgDIAMAGQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgEQASAAAQAHQARAHADALQAAgBAEgDQAEgDgFgGQAKAKATANQAVAQAHAIIgBAAIAFAJIACAAIgEgHQAKALACANIAHgBQAFAAADACQgCABACAEIAIAIIAIALQAEAHgCAFQABAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAJAYgCAeIgGA6QgKgCgKAPIgFAHIgGAGQgFAFgGADQADAGAFgEQAHgGAEAAQgDADACAGQACAFgKAFQADABACgCQgDAEgEgEQgFgDgEAHIAFAFIgNABQgJAKgHAGQgHAGgKAHIgRALIgRAMQgFgCAEgGQgEADgPAAQgNAAgHAFIAEACQgHAEgGAAQgFAAgEgCgAhtBbQABgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgFgBgAgQAzIgFACIAGABIAFgBIgDgBIgDgBIABgBIgCAAIABABgACuArQACACACgGQgDACABgEIgCAGgAgrAgIADACIAJADQAKACALgDQAKgDAJgIQAEgDAEgHIAEgHIACgIQACgHAAgHIgBgBQgFgDgKgDIAEABQADACAFgFQgDgGgGgFQgBABgEAAQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQABABAAAAQAAAAABAAQAAABABAAQABAAABAAIgEADQgEgHAFgEIAHgEQgEgFgGgEIABACQACAGgGADQgBABgEgCQAJAHACANIABAJIAAACQgBAEgCADIgEAGQgBAEgGAFQgKAJgKACIgMACIgHgBIACAFgAggADIgGAEQgBAHAFACQAEABAFgDIAIgHIACgDIAAgDIACABIABgCIABAAIABABQADACACgBIABAAIAAgCIgBgCIgEAAIAGgFIABADIABgEIAAgBIAAgBIgBgGIACgEIACABIgCgGQgCgHgFgDQgFgDgDADQAAAAAAAAQgBgBABAAQAAAAAAgBQAAAAAAAAIADgEIABgBIgJgHIgBAAQgBAHgEAEIgHAFQgIAGAIAGQgHgEABADIAEACQABAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAIgFAAQgKgBACADIAIgBIgBADQgCADgBAEQgCAEADADQACAEAGgBIgBgDIABgBQABAAACAEgAh+gmQgGAHADASQAEANgGALIAHgCQADgBAEABQgCgJABgKIgDAIQgBgIACgKQgHgCAIgKIACABIACgFIACgEIgBAAIgMACgAgvAHQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQgDAAgBgGQgBgDgFABQAAAEADAGIACAAIACABgAgPAEIAAACIACgDIgCABgAhGgDIACADIADADQgDgFgDgLIABAKgABVgOQACAJgBAEQAFgIABgDQADgIgJgGQgEAHADAFgACNguQAFADAGALQAFAKAAAHQADADAEgHQACgFABgGQgHAEgCgBQgCgBAAgFQADgNgHgDIAAAFQABAEgCACQgGgDAAgIQgBACgDABgABCgWIgDgGQABAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIACgEQACgHAFAIQADAEgBgJQgCgJgFgFQgCACADAHQABAGgFgBIgDgEQACADgDAFQgDAEAFAFIAAAAgAg0gpIgEAHIACAAQABgEAGgDIACgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBgBIgFAEgAgHgyIADADIAEgEIgBAAIgEAAIgCAAIAAABgAgqg0IACgCIgCgBQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAgAhihPIAFgEIgFgCQgCAEACACgAAGhtIADABIACgBIgEgCIgBACgAATh6IAIAEIAAgCQgIgDgJgBgAAvh7IABgDQABgDgEgDQgCAEAEAFgAA7iNIATAGQgCgEgHgDIgGgBQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABgABRiLQgBABAHABIgCgEIgEACgAgpiaQAHAGACgEQADgGADgDgAgQABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgEACIADgBIABgDQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIAEAAIAAgBIAAAAIgBgBIABAAIABAAIAAAAIABgEIADABIAAACIAAABIABABQACgCAAgEIgBgDIAAAAIACAAIgBgBIADgCQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIABgBIgBgCQgCgFgGgDQAIABADAIIAAABIABAAIAAABIAAABIgBABIgBABIAAgCQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgDAAIABAAIACADQABAAAAAAQAAABAAgBQAAAAABAAQAAAAAAAAIAAAFIgBABIABAAIgBACQAAABAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAEgCACIgCgBIAAgCIgCgCIADABIgDgBIAAAAIgBAAIAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAgBABIAAAAIgDgCIAAABIABACQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIACABIgBADIgDgBIgDgBIAAgBIAAABIAAAAIABACQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAABgAgQgFIAAgBIAAAAIgBAAIAAAAIAAABIAAgBgAgQgIIAAAAIABAAIABABIgCgBgAgPABgAgngBIgBgFQAAgBAAAAQABgBAAAAQABAAAAAAQAAgBABAAIACgBIABAGQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCAAgAgLgDIAAAAgAgUgKIABABIAAAAIgBgBgAgUgKIABgEIAAAAQgBgEgFABQAEgDADAFIAAAAIACAAIAAABIAAABIgCAAIAAADIgCAAgAgUgLIAAABIAAAAIAAgBgAgUgLIAAgBIAAABIAAAAgAgYgNQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAIACAEQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAABgAgMgQIgEABQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAAAAIgBACg");
	this.shape_93.setTransform(-31.5,-10);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F8C25D").s().p("AAAgEIACAJQgGgGAEgDg");
	this.shape_94.setTransform(-43.7,-0.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F8C25D").s().p("AgBAAIAAAAIADAAIgCABIgBgBg");
	this.shape_95.setTransform(-34.9,-20.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F8C25D").s().p("AgBgBIACACIgBABg");
	this.shape_96.setTransform(-45.2,-21.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F8C25D").s().p("AgBgBIAFgDIgHAJQgCgFAEgBg");
	this.shape_97.setTransform(-18.3,-8.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F8C25D").s().p("AgCACIABgDIAEADg");
	this.shape_98.setTransform(-35.6,6.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F8C25D").s().p("AgFgBQAEgBABACIAGACIgLgDg");
	this.shape_99.setTransform(-36.2,7.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F8C25D").s().p("AgPgDQARACAOAFIgNAAQgSAAAAgHg");
	this.shape_100.setTransform(-37.4,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.熱帶, new cjs.Rectangle(-53.3,-39.6,106.2,79.4), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFDACC").s().p("AgRBKIAKgLIgBhNIhRg+QATAHBLAAQBAAAAVgHIhYA/IgCBLIANANQgLACgHAAQgJAAgDgDg");
	this.shape.setTransform(9,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,18,15.5), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFDACC").s().p("AgMAOIgrgfQAIACAxAAQAvAAAHgCQgkAagMAGQgGADgEAAQgGAAgEgEg");
	this.shape.setTransform(5.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,11.2,3.6), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_0, null, null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6F0EB").s().p("Ag3AAQAAgBA6AAQA1AAAAABQAAACg1AAQg6AAAAgCg");
	this.shape.setTransform(5.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,11.3,0.5), null);


(lib.狗 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AhHA2QgggIgNgMQgJAAgGgHQgHgGAAgJQAAgKAHgFQAHgHAKAAQAGAAAGAEIANgJIgBgHQAAgMAKgJQAKgIAPAAQALAAAIAFQAJAFAFAHIATgBQABgLAJgHQAKgIAOAAQAOAAAKAJQALAJAAANIgCAHIAWAIQAIgOARAAQALAAAJAJQAIAIAAAMQAAAQgPAIQgEAQgjALQgjALgyAAQgnAAgggIg");
	this.shape.setTransform(-1.1,-55.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231916").ss(0.4,0,0,4).p("AgqAPQAAgOAVgHQALgDAKgBQAKABALAEQAWAHAAAP");
	this.shape_1.setTransform(0,-33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231916").ss(0.4,0,0,4).p("AAAgSIAAAl");
	this.shape_2.setTransform(-0.1,-35.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009D8D").s().p("AgGAIQgDgDAAgFQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEQAAAFgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_3.setTransform(2.8,-24.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009D8D").s().p("AgGAJQgCgEgBgFQABgEACgEQADgDADAAQAEAAADADQACAEAAAEQAAAFgCAEQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(-0.2,-23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009D8D").s().p("AgGAJQgDgEAAgFQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEQAAAFgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(-3.2,-24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#68539D").s().p("AgQAkQgVgCAFgIQAHgNgHgcIgEgLQgCgJAJAEQAJACAKAAQAVACAMgGQANgFABAIQACAGgGAJQgGALAGARQADAJgDAEQgDAGgMACQgLACgKAAIgNAAg");
	this.shape_6.setTransform(-0.5,-24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#97A5D0").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_7.setTransform(6.8,-45.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97A5D0").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_8.setTransform(-8.1,-45.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231916").s().p("AgkAeQgQgNAAgRQAAgQAQgNQAPgMAVAAQAWAAAPAMQAQANAAAQQAAARgQANQgPAMgWAAQgVAAgPgMg");
	this.shape_9.setTransform(17.9,-18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231916").s().p("AgTB3IAAjwIAOAQIAZDjg");
	this.shape_10.setTransform(18.6,-31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231916").s().p("AgkAdQgQgMAAgRQAAgRAQgMQAPgMAVAAQAWAAAPAMQAQAMAAARQAAARgQAMQgPANgWAAQgVAAgPgNg");
	this.shape_11.setTransform(-17.9,-17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231916").s().p("AgTB+IAAj+IANAQIAaDxg");
	this.shape_12.setTransform(-17.2,-31.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.4,0,0,4).p("ABAAAQgHgFgLgGQgXgMgVAAQgUAAgXAMIgSALQAHAGALAGQAXAMAUAAQAVAAAXgMQALgGAHgGg");
	this.shape_13.setTransform(6.7,-45.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3E9DD").s().p("AgqAMQgMgGgHgGIATgLQAWgMAUAAQAVAAAXAMQALAGAHAFQgHAGgLAGQgXAMgVAAQgUAAgWgMg");
	this.shape_14.setTransform(6.9,-45.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.4,0,0,4).p("AA/AAIgSgLQgWgMgWAAQgUAAgWAMQgMAGgHAFQAHAGAMAGQAWAMAUAAQAWAAAWgMQALgGAHgGg");
	this.shape_15.setTransform(-8.2,-45.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3E9DD").s().p("AgrAMQgLgGgHgGQAHgFALgGQAXgMAUAAQAWAAAWAMIASALQgHAGgLAGQgWAMgWAAQgUAAgXgMg");
	this.shape_16.setTransform(-8,-45.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#68539D").s().p("AgWARQgKgHAAgKQAAgJAKgHQAJgHANAAQAOAAAKAHQAKAHgBAJQABAKgKAHQgKAHgOAAQgNAAgJgHg");
	this.shape_17.setTransform(-0.1,-39.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3E9DD").s().p("AgwAuQgYgTAAgbQAAgZAVgTQAWgSAdAAQAeAAAVASQAWATAAAZQAAAXgSATQgWAVghAAQgbAAgVgRg");
	this.shape_18.setTransform(-0.2,-36.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231916").s().p("AiHA+Qg4gsAAgnQAAglA4gZQA4gaBPAAQBQAAA4AaQA4AZAAAlQAAAng4AsQg+AwhKAAQhJAAg+gwg");
	this.shape_19.setTransform(-0.2,-40.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231916").s().p("AB1HnQgQgFgHgOQgHgNACgQQAKgrgHhkQgSgFgLgMQgLgMAAgPQAAgOAJgLQAIgLAOgGIgKhJIgFgeQgrASgugGQgYgDgPgHQgIAagBBJQAQAGAJAMQAKALAAAPQAAAOgJALQgKALgPAGQADBsAHAvQAIArg1gFQgbgDgFgNQgGgQAPgHIARgFQAEgngEhqQgUgEgNgNQgNgNAAgQQAAgPAKgLQAKgMAQgGQgKg5gSg8Qgmh6AThPQANg0ArgtQgNgPAAgRIAAAAQgKgEAAgLQAAgNANgCIAAgEQAAgJAGgFQAGgGAIAAQAIAAAGAFIAFgCIAAgDQAAgHAEgEQAFgEAGAAIADAAQAAhJgYhlQAUgIATAAQAlACgEAuQgKBVAJAuQAEgDAFAAQAHAAAEAFQAHgHAJAAQAKAAAIAIQAHAHAAAKQAAAFgBADIABABQAEgCAEAAQAGAAAEAEQAEAEAAAHIAAADIAAAAQAHAAAEAFQAEAEAAAGQAAALgKADQgBAKgDAGQA5ArAWBbQAVBbgYBfQgMAygEA5QAUAEAMANQANAMAAARQAAAQgNANQgNANgVAEQACA7AIAuQAIArAIADQARAHABARQAAASgcAAQgOAAgLgEg");
	this.shape_20.setTransform(3.8,12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231916").s().p("AgsEdQAAgKAKgGIALgDQAAhDgLhCQgMgDgIgHQgHgHAAgJQAAgPARgIQgYhagIgrQgNhHALg/QALhBBEgfQAigQAhgCQAIA8AFBBQAJCCgTAXQgSATgUAfQgTAegKAXQAQAIAAAPQAAAQgVAJIALBQQAHAzgEAOQgGATgZACIgFAAQgVAAAAgNg");
	this.shape_21.setTransform(-11.9,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231916").s().p("AATEqQgZgCgGgTQgEgOAHgxIAKhQQgMgDgIgHQgIgIAAgJQAAgRAWgJQgKgXgSgdQgTgdgSgTQgTgXAJiCQAEhBAJg8QAgACAjAQQBEAfALBBQALBAgOBIQgIArgYBcQAKAIAAALQAAAPgTAIQgLBGAABCIAKADQALAGAAAKQAAANgVAAIgFAAg");
	this.shape_22.setTransform(5.8,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.狗, new cjs.Rectangle(-23.1,-61.4,46.3,123), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9B5528").s().p("AgBgfIADgDIgCBFg");
	this.shape.setTransform(0.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,0.5,7), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD8B58").s().p("Ag1ABQAkgcAZgIQAsgNACAxQgFAVgQALQgJAGgLAAQgaAAgogmg");
	this.shape.setTransform(5.4,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,10.7,7.8), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C2901").s().p("Ag0gPQgHgJAEgDQA3A0AigTQARgIAGgUQABAGgBAHQgEAVgPALQgJAFgKAAQgbAAgsgrg");
	this.shape.setTransform(5.7,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,11.5,5.7), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD8B58").s().p("AgfAhQgQgLgEgVQACgxArANQAYAIAiAcQgmAmgaAAQgLAAgIgGg");
	this.shape_1.setTransform(5.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,10.5,7.8), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#64320C").s().p("AgkAXQgPgLgEgVIAAgNQAGAUARAIQAhATA2g0QAEADgHAJQgrArgbAAQgKAAgIgFg");
	this.shape_1.setTransform(5.6,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,11.3,5.7), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#64320C").s().p("AgSAdQgkgDgXgWQgMgLgFgKQAIAIANAIQAaAPAegBQAdgCAtgTQAVgKAQgKQgNAQgWAOQgmAbghAAIgGAAg");
	this.shape.setTransform(9.5,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,18.9,5.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD8B58").s().p("AgZAGQgggIghALQACgJAMgGQAagNA0AQIAVgKQAegIAmAOQgNgDgTABQgjAEgZAWQgJgHgPgEg");
	this.shape_1.setTransform(9.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,18.2,3.4), null);


(lib.跑步者 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF212A").s().p("ACSDCQhzhXg8AbQglBPg0AaQglASgpgQQgcgKgcgaIgXAlIgTgRIAlg3IBrAXQAHhQARgsQALgfAXgeIAJhBQAFgpgBgaQgHgNgWAAQgsgBhNBCQAOgqAkghQBHhGBrAmIADgZQgOgIgEgRQgFgQAHgQQAHgPANgFQAPgGANAIQAOAIAEARQAFAQgHAPQgHAQgOAGQgEABgEAAIgFAdQAUAJAMAXQAmAdAggMQAsgRAZhhQADAvgRAtQgjBbhigLIADAwQABAcgFAUQBCAYBDBRQAaAeA1BRIAegaIAOAVIguAqQgtgxg6gqg");
	this.shape.setTransform(0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.跑步者, new cjs.Rectangle(-29.4,-29.3,59.1,56.9), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOgOIgjAGIA+g8IAJA4IhjBRg");
	this.shape_2.setTransform(5,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,10,13.8), null);


(lib.Path_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMgrIBKAJIhhBAIARgiIhbAwg");
	this.shape_1.setTransform(8.6,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(0,0,17.3,8.8), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPgFQAognA/gqQAggVBSghQAqgRAigNQh2A5imCTQhTBKg8A/g");
	this.shape_2.setTransform(21.4,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,42.9,34.2), null);


(lib.行星 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD937").s().p("AgWAOIgmgaIAugBIAOgtIAOAsIAvgBIglAbIAQAsIgngaIgkAcg");
	this.shape.setTransform(-19.8,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD937").s().p("AgHAaIgqAVIAWgpIggghIAtAJIAWgqIAGAuIAuAIIgqAUIAHAvg");
	this.shape_1.setTransform(4.4,-37.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAD937").s().p("AgNAOIgsgOIAsgNIABgvIAaAmIAsgOIgbAkIAbAmIgtgOIgaAlg");
	this.shape_2.setTransform(43.5,-10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#F4F2F8","#CABFDD","#A794C3","#8971AE","#73579F","#614495","#55388E","#4D308B","#4B2E8A"],[0,0.027,0.133,0.239,0.353,0.467,0.584,0.706,0.839,1],8.6,-4.7,0,8.6,-4.7,55.1).s().p("AjiBNQAAhqBMhMQBMhMBqAAQA6AAAzAYQAyAXAkApImvETQgWgwAAg5g");
	this.shape_3.setTransform(-5.7,-6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAE09C").s().p("AmeEDQgUgfBthhQBshiCshqQCrhrCHg2QCIg2ASAeQAUAfhtBiQhsBhisBqQirBriHA3QhWAignAAQgXAAgGgLgAD6jdQiBA0ijBmQijBlhnBcQhnBcARAdQATAdCAg0QCAg0CjhmQCkhkBnhdQBnhcgSgdQgGgKgVAAQglAAhSAhg");
	this.shape_4.setTransform(-3.1,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E97959").s().p("AnKEeQgXgkB3htQB3huC+h1QC9h2CWg7QCXg6AWAkQAXAlh3BtQh3Bti+B1Qi9B3iWA6QhdAkgsAAQgcAAgIgOgADDiyQhmAniBBRQiBBPhRBLQhRBKAQAZQAPAZBmgoQBmgoCBhQQCChQBQhKQBRhKgPgZQgGgKgTAAQgeAAg/AZg");
	this.shape_5.setTransform(-3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#F4F2F8","#CABFDD","#A794C3","#8971AE","#73579F","#614495","#55388E","#4D308B","#4B2E8A"],[0,0.027,0.133,0.239,0.353,0.467,0.584,0.706,0.839,1],4.3,-16.9,0,4.3,-16.9,55.1).s().p("AiaCsQg/gqgfhFIGwkUQAfAkAQArQASAsAAAwQAABrhMBNQhNBLhqABQhPAAhBgsg");
	this.shape_6.setTransform(-1.3,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.行星, new cjs.Rectangle(-49.3,-43.8,98.6,87.7), null);


(lib.沈思者 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D33326").s().p("AApAdIhaggQgCgBAAgJIADgLQAEgGAGADIBWArQACABABADQABADgBACQgBADgDABIgDAAIgDAAg");
	this.shape.setTransform(-32.3,-21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D33326").s().p("Ag9A5QgFgFAFgFIBqhnQAGgFAFAFQACACAEAJQADAIgCACIhyBcQgCACgDAAQgDAAgCgCg");
	this.shape_1.setTransform(26.7,-34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D33326").s().p("AgrBNQgCgBgBgDQgBgDABgDIBFiMQAEgGAGADQAEACAFAGQAHAHgBADIhRCEQgCAEgEAAIgEgBg");
	this.shape_2.setTransform(13.7,-41.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D33326").s().p("AgBBTQgDgCAAgDIgKiZQAAgHAHgBQAWAAAAAEIgFCcQAAAHgHAAIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(-4.6,-43.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D33326").s().p("AAzBfIhxiwQgEgHAGgDQAEgDAJgCQALgEACADIBhC4QAEAGgGAFIgFABQgDAAgCgEg");
	this.shape_4.setTransform(-25.5,-39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#BB0718","#C41520","#D1272E","#DA3239","#DF3941","#E03A43","#E78D7B","#8177B3","#00A5AB","#8177B3","#E1292A"],[0,0.016,0.047,0.082,0.114,0.149,0.298,0.471,0.639,0.788,1],-22.5,0,18.7,0).s().p("AgLCNQgLgNgQAIIggARQgXAHgagPQgggTgVgnQgWgngDgvQgJhuBdhDQBLg2BqAPQBXAMAiAhQAXAYgdAaQgdAbhDAQQg9APgEAaQgDAUAfATQATAMgYAiQgdAoADANQAGAfgDBWQgUg8gNgSg");
	this.shape_5.setTransform(-4.1,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFF69E").ss(2,0,0,4).p("AAWDgQADhXgGgfQgDgMAdgpQAYgigTgMQgfgSADgVQAEgaA9gOQBDgQAdgbQAdgbgXgXQgighhXgMQhqgPhLA2QhdBDAJBuQADAuAWAoQAVAnAgASQAaAQAXgIQAXgMAJgFQAQgIALAOQANARAUA9g");
	this.shape_6.setTransform(-4,-4.7,1,1,0,0,0,0,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231916").s().p("Ag9D0IhZiIQgygUgvgxQhfhiAPiUQAHhKA/g5QA+g4BXgSQBcgTBSAfQBdAkA6BcQAEATgHACQAkAZAiAbQBEA3ggAOQgaAMgMACIgHgBQAdAngGAJIhAAFQgyADArAaQAKAFAsACQAfABgHAOQgDAHgEAaIgCAZIAGARQACATgXALQgmAQhfAYIgCAcIAEAKQAEALACAJQADAOgRAVIhlDDg");
	this.shape_7.setTransform(4.5,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.沈思者, new cjs.Rectangle(-37.4,-52.1,75,104.3), null);


(lib.大人與小孩 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgQhvIBODaIg7gfIhCi7g");
	this.shape.setTransform(0.6,-8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AAEBOIhCi7IAvAAIBODbg");
	this.shape_1.setTransform(0.5,-8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgnAAQAAAQAMAMQAMAMAPAAQAQAAAMgMQAMgMAAgQQAAgQgMgLQgMgMgQAAQgPAAgMAMQgMAMAAAPg");
	this.shape_2.setTransform(18.9,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231916").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_3.setTransform(18.9,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgtAIIAAikIBbAAIAAE5IggAAIAAiQIgaAAIAACQIghAAIAAiVg");
	this.shape_4.setTransform(18.8,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231916").s().p("AAOCdIAAiQIgaAAIAACQIghAAIAAiVIAAAAIAAikIBbAAIAAE5g");
	this.shape_5.setTransform(18.8,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgNhAIAACBIAbAAIAAiBg");
	this.shape_6.setTransform(24.8,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231916").s().p("AgNBBIAAiBIAbAAIAACBg");
	this.shape_7.setTransform(24.8,8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("ABCATIiChFIgCAhICCBFg");
	this.shape_8.setTransform(7.6,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231916").s().p("AhCgSIACggICDBEIgCAhg");
	this.shape_9.setTransform(7.6,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("ABDAAQAAAcgTAUQgUATgcAAQgbAAgUgTQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbg");
	this.shape_10.setTransform(-13.8,-26.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231916").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_11.setTransform(-13.8,-26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("ABOEKIAAoTIibAAIAAITIA3AAIAAj1IAtAAIAAD1g");
	this.shape_12.setTransform(-13.6,6.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231916").s().p("AAXEKIAAj1IgsAAIAAD1Ig4AAIAAoTICbAAIAAITg");
	this.shape_13.setTransform(-13.6,6.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AAYhxIAADjIgvAAIAAjjg");
	this.shape_14.setTransform(-23.8,-8.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231916").s().p("AgXByIAAjjIAvAAIAADjg");
	this.shape_15.setTransform(-23.8,-8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.大人與小孩, new cjs.Rectangle(-27.2,-34.3,54.5,68.7), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595857").s().p("AgSAzIgHhYIABAAQAAgTAPgFQALAEAIAKQAIALACANIAAAAIAGBVg");
	this.shape.setTransform(2.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,5.1,12.4), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AhGg0IBVgDIA4BIIgUAnQhvhZgKgTg");
	this.shape_1.setTransform(7.1,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,14.2,11.2), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B5B6").s().p("AgDgZIAGgBIgCAsIAGAGIgNADg");
	this.shape_1.setTransform(0.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,1.4,5.4), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#231916"],[0,1],0.1,4.5,0,-0.9).s().p("AgwgPIBigLIgJAIIhSAKIgCAiIgGABg");
	this.shape_1.setTransform(5,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,10.1,5.4), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5B5B6").s().p("AgEgfIAHgBIgCA3IAIAGIgRAEg");
	this.shape_2.setTransform(0.9,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,1.8,6.6), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#231916"],[0,1],0.2,5.6,0,-1.1).s().p("Ag8gUIB7gNIgLAKIhoAMIgBArIgJABg");
	this.shape_3.setTransform(6.3,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,12.5,6.7), null);


(lib.Path_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231916").s().p("AjDB2Qg2hjg0igIAKgsICTE+IG9g8IgEAgInABRQgRgSgbgyg");
	this.shape_2.setTransform(30.2,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_3, new cjs.Rectangle(0,0,60.3,37.3), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231916").s().p("AgoAKIBQgWIhIAZg");
	this.shape_3.setTransform(4.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,8.1,2.7), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#898989").s().p("AAVgVIgsAHIABgHIAugHIgDA4IgDABg");
	this.shape.setTransform(2.4,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,4.8,5.8), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgzEgIg1gXIgBgKIAAgCIgBgMIgBgLIAAgCIAAgHIgCgPIAAgEIAAgDIAAgDIgBgDIAAgLIgBgDIgBgWIgCgbIgBgEIgBgaIgBgDIAAgEIAAgCIAAgGIgBgCIAAgKIgBgDIgBgYIgBgDIAAgDIAAgCIgBgOIAAgDIgCgYIgBgRIgBgDIgBgaIgBgDIAAgDIAAgDIAyiaIAAgBIABgEIAFgNIAAgDIAmh1IAcgTICHCyIgJBOIAAABIgBAGIAAACIgDAZIAAACIgBAFIAAADIgFApIAAADIgBANIgBACIgBANIAAADIgBADIAAACIgGBBIAAACIgBALIAAADIgDAbIAAACIgBAMIAAACIgCAfIgBADIgCAmIgCAkIAAACIAAAKIgBACIAAALIAAACIAAANIgBACIAAAQIAAAmIABAfIAAAAQhHgzhDgfg");
	mask.setTransform(12.9,37);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E28E37","#944E1B"],[0,1],4.1,25.2,-2.1,-20.7).s().p("AgzEgIg1gXIgBgKIAAgCIgBgMIgBgLIAAgCIAAgHIgCgPIAAgEIAAgDIAAgDIgBgDIAAgLIgBgDIgBgWIgCgbIgBgEIgBgaIgBgDIAAgEIAAgCIAAgGIgBgCIAAgKIgBgDIgBgYIgBgDIAAgDIAAgCIgBgOIAAgDIgCgYIgBgRIgBgDIgBgaIgBgDIAAgDIAAgDIAyiaIAAgBIABgEIAFgNIAAgDIAmh1IAcgTICHCyIgJBOIAAABIgBAGIAAACIgDAZIAAACIgBAFIAAADIgFApIAAADIgBANIgBACIgBANIAAADIgBADIAAACIgGBBIAAACIgBALIAAADIgDAbIAAACIgBAMIAAACIgCAfIgBADIgCAmIgCAkIAAACIAAAKIgBACIAAALIAAACIAAANIgBACIAAAQIAAAmIABAfIAAAAQhHgzhDgfg");
	this.shape.setTransform(12.9,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,25.9,74), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjagpQANh/AOhwIGsBsQgTC4gGCNQhDAKhOAfIAMi+IhcAQIAAAAIgIACIgNDKQgKAAgeAHQg8AOhkAkQgHhHAXj7g");
	mask.setTransform(23.7,28.1);

}).prototype = getMCSymbolPrototype(lib.ClipGroup, null, null);


(lib.小孩 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgnAAQAAARAMALQAMAMAPAAQARAAAMgMQALgLAAgRQAAgPgLgMQgMgMgRAAQgPAAgMAMQgMAMAAAPg");
	this.shape.setTransform(23.2,-15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAARgMALQgLAMgRAAQgPAAgMgMg");
	this.shape_1.setTransform(23.2,-15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgtCeIAAk7IBbAAIAAE7IghAAIAAiRIgaAAIAACRg");
	this.shape_2.setTransform(23.1,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231916").s().p("AANCdIAAiRIgaAAIAACRIggAAIAAk6IBbAAIAAE6g");
	this.shape_3.setTransform(23.1,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgPg2IBABuIgigBIg/hqg");
	this.shape_4.setTransform(31.4,-6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231916").s().p("AAQA3IhAhqIAhgDIBABtg");
	this.shape_5.setTransform(31.4,-6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AANg2Ig6BtIAhAAIA6hqg");
	this.shape_6.setTransform(15.1,-6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231916").s().p("AgtA3IA6htIAhADIg6Bqg");
	this.shape_7.setTransform(15.1,-6.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgnAAQAAARAMALQAMAMAPAAQARAAALgMQAMgLAAgRQAAgPgMgMQgLgMgRAAQgPAAgMAMQgMAMAAAPg");
	this.shape_8.setTransform(-22.9,-15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231916").s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAARgMALQgLAMgRAAQgPAAgMgMg");
	this.shape_9.setTransform(-22.9,-15.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgtCeIAAk7IBbAAIAAE7IghAAIAAiRIgaAAIAACRg");
	this.shape_10.setTransform(-23,4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231916").s().p("AAOCdIAAiRIgaAAIAACRIghAAIAAk6IBbAAIAAE6g");
	this.shape_11.setTransform(-23,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgPg2IBABtIgiABIg/hrg");
	this.shape_12.setTransform(-14.8,-6.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231916").s().p("AgwgzIAhgDIBABtIgiAAg");
	this.shape_13.setTransform(-14.8,-6.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AAQg2IhABuIAigBIA/hqg");
	this.shape_14.setTransform(-31.3,-6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231916").s().p("AAPg2IAiADIhABqIghAAg");
	this.shape_15.setTransform(-31.3,-6.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgnAAQAAARAMALQALAMAQAAQAQAAAMgMQAMgLAAgRQAAgPgMgMQgMgMgQAAQgQAAgLAMQgMAMAAAPg");
	this.shape_16.setTransform(0.4,-15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231916").s().p("AgbAcQgMgLAAgRQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_17.setTransform(0.4,-15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgtAIIAAilIBbAAIAAE7IggAAIAAiRIgaAAIAACRIghAAIAAiWg");
	this.shape_18.setTransform(0.3,4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231916").s().p("AAOCdIAAiRIgaAAIAACRIghAAIAAiVIAAAAIAAilIBbAAIAAE6g");
	this.shape_19.setTransform(0.3,4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AgPg2IA/BuIghgBIg/hqg");
	this.shape_20.setTransform(8.6,-6.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231916").s().p("AAPA3Ig/hqIAigDIA/Btg");
	this.shape_21.setTransform(8.6,-6.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.7,0,0,4).p("AAQg2IhABuIAigBIA/hqg");
	this.shape_22.setTransform(-8,-6.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231916").s().p("AAQg2IAhADIg/BqIgiAAg");
	this.shape_23.setTransform(-8,-6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.小孩, new cjs.Rectangle(-37.2,-20.7,74.5,41.5), null);


(lib.道路 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9C120").s().p("AhwFHQANh2AVhFIAgAFQgGA2ADA8QAAAQAGA0IAAABIhFABIAAgCgAhGAmQAAgMAMgyQAQhDAVglIAPAGQgLAkgKAtQgLA2ABAcgAAajkQAkg+AtgmIAHAGQgbAXgYArIgSAng");
	this.shape.setTransform(4.7,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AAEFhQgFg1AAgPQgEg8AGg2IgfgFQgVBFgOB2IiUAAQAIh9AxiWQBhksDMiCIBFAAIAABNQg6BvgRCzQgVDRA9CBgAgKABQgMAzAAALIAgADQgBgbALg3QAKgsALglIgPgFQgVAlgPBCgABKjKIATALIASgoQAYgqAagXIgGgGQgtAmgkA+g");
	this.shape_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.道路, new cjs.Rectangle(-21.5,-35.3,42.8,70.8), null);


(lib.feet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AieANQgLgvAsgKIA7gNQAPgEA6ALQA8ALA0AVQA0AUgMAZQgMAYhcAEIiSAEIgDAAQg1AAgLgug");
	this.shape.setTransform(16.9,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.feet, new cjs.Rectangle(0.9,-0.8,32.1,11.9), null);


(lib.arm_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbEmQgVgCgPgRQgNgRABgWIAvngQACgWARgPQAQgOAVACQAWACAOARQAOARgCAWIgvHhQgBAVgSAOQgNANgSAAIgGAAg");
	this.shape.setTransform(6.6,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arm_upper, new cjs.Rectangle(-1,1,15.2,58.9), null);


(lib.arm_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHEaQgLgKgCgNIAAgDIggnXQgDgeAPgXQAMgUATgCIAFAAQAWAAAQAYQANATACAbIABAHIAEHUQAAAOgLALQgJAJgMACIgEAAIgBAAQgPAAgJgJg");
	this.shape.setTransform(5.4,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arm_lower, new cjs.Rectangle(0.1,0.4,10.8,58.3), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Tween71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween68("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-355.2,190.6);

	this.instance_1 = new lib.Tween65("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(358.7,192.9);

	this.instance_2 = new lib.Tween67("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(155.7,-154.4,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450.2,-253.8,900.6,507.8);


(lib.Tween70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween68("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-355.2,190.6);

	this.instance_1 = new lib.Tween65("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(358.7,192.9);

	this.instance_2 = new lib.Tween67("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(155.7,-154.4,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450.2,-253.8,900.6,507.8);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(116.8,-4.9,1,1,-135);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Al3h4IBChCIHwHwIhCBCgAi6k1IBChCIHwHwIhCBCg");
	this.shape.setTransform(116.5,-3);

	this.instance_1 = new lib.Tween25("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-135,-9.1,1,1,-45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai6E2IHwnwIBCBCInwHwgAl3B5IHwnwIBCBCInwHwg");
	this.shape_1.setTransform(-136.9,-9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnF9QAlgMAhgRQAjgRAfgWIA+gyIA3g6QgWhOgThXQgThVgNheIo9AAIAAhKID0AAIAAhQIjGAAIAAhKIDGAAIAAhQIBOAAIAABQICyAAIAABKIiyAAIAABQIDyAAQgKhTgJiOIBPAJQACBNAPCLIDjAAIAABKIjZAAQAcC6AUBKQAWgpARg5QATg7ANhLIBLAVQgcBxgTAzQgrBigcArIAdBUQARAnAGAAQAUAAADiSIBLAVQgDBAgMAyQgKAwgRAgQgTAfgbAAQgVAAgTgPIgYgWQgdg1gXg9QhDBEgnAbQhSAxguARgAmnFrICDgVIAAiiQg8Amg3AVIglhHQBBgZA0gkQA2gkAnguIiuAAIAAhJIDaAAIAAhFIBSAAIAABFIC+AAIAABJIjXAAQgjAvgvAvIAADNQBLgWA4gXIAfBGQhEAbhXAWQhWAVhoASgAi4CXIAyg4IA+A2QBAg4ApgwIA0A1QgnAvg/A5IBEBMIg0AzQhqh3hNg7gAD+l6IBDgxQAuAxAuBTIhFAtQggg4g6hIg");
	this.shape_2.setTransform(47.6,-112.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ACHGjIgFhcQAxASBDAJQBeAAAQibQAJiXAAhJQAAgqgCgNQgDgTgJAAIjtAAIAAA3ICaAAQAMAAAAAKIAAC7QAAALgcAAQAUAoAlBxIhIAYIgOgsQkEAhhsAFIgMhSIDFgOIAAhLIicAAQgMAAAAgLIAAi7QAAgKAMAAICcAAIAAg3Ih6AAQgPAUgjAhIg9g0QBEg3AihEIg3AAQgJAAAAgMIAAi/QAAgKAJAAIIyAAQAMAAgBAKIAAC/QABAMgMAAImsAAIgUAvIG8AAQARAAAJAOQAFAMAABAIgHD2QgICBgZA2QgVArghAXQgSANgWAGQgYAHgcAAQg0AAhGgSgAByDnIBRgMIgQgiIAygVIhzAAgAByBeIBYAAIADgEIAAg9IgDgEIhYAAgAg1AdIAAA9IADAEIBaAAIAAhFIhaAAQgFAAACAEgAEBkjIBZAAIADgEIAAhCIgDgDIhZAAgABckjIBbAAIAAhJIhbAAgAhNlpIAABCIACAEIBdAAIAAhJIhdAAQgEAAACADgAmtGbIAAhWQBBAUAdAAQAXAAAQgVQANgVAJgqQALgtAEgvQAFgygCg1IhDBFQghAdgcASIg3g6QA0ghAsgrQAsgrAhgyQgHgxgbhTQgiAtgrAqIhBguQA+g8Aqg9QgXgohIhOIBEgwQAqAsAeAwQAXgsAWg9IBIAcQgjBXglBCQAhBKAQA/QANA6AFA4QAHA2gBA1QgGCHgWBHQgSA5gaAgQgPASgRAKQgSAKgWAAQglgBhJgYg");
	this.shape_3.setTransform(-48.9,-111.3);

	this.instance_2 = new lib.Tween25("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.7,131.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AmvGsIAAhVIGHAAIAAjuIlSAAIAAhUIFSAAIAAjSIloAAIAAhWIFtAAQgvg+gkggIBBg6QBGBLAnA1IgeAYIF0AAIAABWIljAAIAADSIFQAAIAABUIlQAAIAADuIGFAAIAABVg");
	this.shape_4.setTransform(205.9,128.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AESGXQgrgXglgfQgmghgggpQgggqgagyQgagzgVg7IkpAAIAADzQCPgcCLgmIAYBSQiAAnhMAPQifAdhaALIgUhTIBWgNIAArjQAAgZAZAAIKjAAQAZAAAAAZIAAD3QAAAbgZAAIkoAAIAgCAIFHAAIAABQIkuAAQASAwAgAyQAdAsAjAnQAiAkAfAVQAfAWAUgBQAYAAAFgZQAKg4gDhAIBOAYIgMBrQgHAqgLAVQgPAcgQALQgOAHgXABQgiAAgogZgAgFgDIghiAIjwAAIAACAIERAAgAkWlJIAAB0IInAAQAMAAAAgNIAAhnQAAgTgUgBIoLAAQgUABAAATg");
	this.shape_5.setTransform(110,130.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AleC0IAAhdIK9AAIAABdgAlehXIAAhcIK9AAIAABcg");
	this.shape_6.setTransform(0,130.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Am4GbIAihLQAOgkAJglQAMg0AFiIIAAi2QAAgUAVAAIBhAAIgUg8QBAgIBygaIh3gdIAUg9IjRAAIAAhLIFxAAIAAg2IBQAAIAAA2IFrAAIAABLIiNAAIiVBSQBIAVBTAgIgTAxICkAAIAABKIkyAAIAABPIEeAAIAABKIkeAAIAABTIEHAAIAABKIkHAAIAABbIFDAAIAABKIquAAIAAhKIEZAAIAAhbIjwAAIAAhKIDwAAIAAhTIi/AAQgxBEgdAZIg4gyQgKBwgNAyQgfBfgYApgAkggrIAACzQAjgiAmg6QAUgkAPg7IBLASIgRA7ICeAAIAAhPIk6AAQgJAAgBAKgADSh/Qg7gZh7gkQiUAxg8AMIGGAAIAAAAgAAVkDIAAABIADAAIBwg1IkyAAg");
	this.shape_7.setTransform(-111.2,129.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AD0EvQhAg8g2glIA2g+QB3BVCMCXIg6A8QhKhQg/g5gAm3FrQAzgYBZhDQAqgjBGhVIBCAxQhUBjgsAnQhZBFguAYgAm2BrIAAhRIDKAAIAAj8IidAAIAAhRICdAAIAAiFIBVAAIAACFIEtAAIAAiFIBWAAIAACFICfAAIAABRIifAAIAAD8IDMAAIAABRgAiXAaIEtAAIAAj8IktAAg");
	this.shape_8.setTransform(-206.3,130.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.2,-183.1,512.4,366.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween66("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.983,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-132.5,-114.8,265.1,229.6), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ik_man
	this.ikNode_8 = new lib.hand();
	this.ikNode_8.parent = this;
	this.ikNode_8.setTransform(205.2,188.9,0.984,0.984,11.5,0,0,3.6,3.5);

	this.ikNode_7 = new lib.arm_lower();
	this.ikNode_7.parent = this;
	this.ikNode_7.setTransform(215.1,139.4,0.983,0.987,13.2,0,0,4.3,4.7);

	this.ikNode_6 = new lib.arm_upper();
	this.ikNode_6.parent = this;
	this.ikNode_6.setTransform(236,90.7,0.986,0.986,16.6,0,0,9.4,2.6);

	this.ikNode_14 = new lib.feet();
	this.ikNode_14.parent = this;
	this.ikNode_14.setTransform(277.6,318.4,0.988,0.988,33.8,0,0,4.5,4.4);

	this.ikNode_13 = new lib.leg_lower();
	this.ikNode_13.parent = this;
	this.ikNode_13.setTransform(306.2,232.7,0.988,0.988,18.6,0,0,9.8,2.6);

	this.ikNode_12 = new lib.leg_upper();
	this.ikNode_12.parent = this;
	this.ikNode_12.setTransform(240.3,179.9,0.983,0.983,-46.9,0,0,6,4.3);

	this.ikNode_5 = new lib.head();
	this.ikNode_5.parent = this;
	this.ikNode_5.setTransform(255.1,51.7,0.988,0.988,24.3,0,0,24,25.2);

	this.ikNode_4 = new lib.neck();
	this.ikNode_4.parent = this;
	this.ikNode_4.setTransform(243.8,83.3,0.988,0.988,24.3,0,0,5,12.5);

	this.ikNode_2 = new lib.pelvis();
	this.ikNode_2.parent = this;
	this.ikNode_2.setTransform(240.5,179.9,0.99,0.99,-1.8,0,0,22.2,19.6);

	this.ikNode_3 = new lib.torso();
	this.ikNode_3.parent = this;
	this.ikNode_3.setTransform(232,95.6,0.987,0.987,-1.8,0,0,13.7,16.1);

	this.ikNode_1 = new lib.ghost();
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(248.6,421.8,1,1,0,0,0,20.5,20.5);
	this.ikNode_1.alpha = 0;

	this.ikNode_11 = new lib.hand();
	this.ikNode_11.parent = this;
	this.ikNode_11.setTransform(283.4,178,0.982,0.982,-41.1,0,0,4,3.5);
	this.ikNode_11.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 25.5, 25.5, 25.5, 0)];
	this.ikNode_11.cache(-2,-2,12,27);

	this.ikNode_10 = new lib.arm_lower();
	this.ikNode_10.parent = this;
	this.ikNode_10.setTransform(249.1,140.6,0.982,0.987,-39.5,0,0,4.9,4.9);
	this.ikNode_10.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 25.5, 25.5, 25.5, 0)];
	this.ikNode_10.cache(-2,-2,15,62);

	this.ikNode_9 = new lib.arm_upper();
	this.ikNode_9.parent = this;
	this.ikNode_9.setTransform(236.8,91.1,0.984,0.984,-19.6,0,0,8.6,3.6);
	this.ikNode_9.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 25.5, 25.5, 25.5, 0)];
	this.ikNode_9.cache(-3,-1,19,63);

	this.ikNode_17 = new lib.feet();
	this.ikNode_17.parent = this;
	this.ikNode_17.setTransform(232.5,355.5,0.988,0.988,3,0,0,1.9,6.2);
	this.ikNode_17.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 25.5, 25.5, 25.5, 0)];
	this.ikNode_17.cache(-1,-3,36,16);

	this.ikNode_16 = new lib.leg_lower();
	this.ikNode_16.parent = this;
	this.ikNode_16.setTransform(238.6,264.1,0.989,0.989,4.2,0,0,7.2,1.9);
	this.ikNode_16.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 25.5, 25.5, 25.5, 0)];
	this.ikNode_16.cache(-1,-2,20,100);

	this.ikNode_15 = new lib.leg_upper();
	this.ikNode_15.parent = this;
	this.ikNode_15.setTransform(239.5,179.7,0.984,0.984,2.9,0,0,5.8,4.4);
	this.ikNode_15.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 25.5, 25.5, 25.5, 0)];
	this.ikNode_15.cache(-5,-2,29,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_15,p:{rotation:2.9,x:239.5,y:179.7,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:4.2,x:238.6,y:264.1,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:3,x:232.5,y:355.5,regX:1.9}},{t:this.ikNode_9,p:{rotation:-19.6,x:236.8,y:91.1,regX:8.6,regY:3.6}},{t:this.ikNode_10,p:{regY:4.9,rotation:-39.5,x:249.1,y:140.6,regX:4.9}},{t:this.ikNode_11,p:{rotation:-41.1,x:283.4,y:178,regY:3.5}},{t:this.ikNode_1,p:{x:248.6,y:421.8}},{t:this.ikNode_3,p:{regX:13.7,x:232,y:95.6}},{t:this.ikNode_2,p:{regY:19.6,x:240.5,y:179.9}},{t:this.ikNode_4,p:{x:243.8,y:83.3}},{t:this.ikNode_5,p:{regX:24,regY:25.2,x:255.1,y:51.7}},{t:this.ikNode_12,p:{rotation:-46.9,x:240.3,y:179.9,regY:4.3}},{t:this.ikNode_13,p:{rotation:18.6,x:306.2,y:232.7,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:33.8,x:277.6,y:318.4,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:16.6,x:236,y:90.7,regX:9.4,regY:2.6}},{t:this.ikNode_7,p:{rotation:13.2,x:215.1,y:139.4,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:11.5,x:205.2,y:188.9,regY:3.5}}]}).to({state:[{t:this.ikNode_15,p:{rotation:7,x:239.7,y:183.2,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:9,x:232.9,y:267.2,regX:7.2}},{t:this.ikNode_17,p:{regY:6.1,rotation:7.8,x:219,y:357.7,regX:1.9}},{t:this.ikNode_9,p:{rotation:-19.8,x:236.9,y:94.5,regX:8.6,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-43.7,x:249.6,y:143.9,regX:4.9}},{t:this.ikNode_11,p:{rotation:-45.3,x:286.3,y:178.7,regY:3.5}},{t:this.ikNode_1,p:{x:248.8,y:425.1}},{t:this.ikNode_3,p:{regX:13.8,x:232.3,y:98.8}},{t:this.ikNode_2,p:{regY:19.7,x:240.8,y:183.3}},{t:this.ikNode_4,p:{x:244,y:86.7}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:255.2,y:54.9}},{t:this.ikNode_12,p:{rotation:-45.2,x:240.4,y:183.2,regY:4.3}},{t:this.ikNode_13,p:{rotation:13.1,x:304.8,y:237.9,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:26.4,x:284.6,y:326.1,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:18.7,x:236.3,y:94.2,regX:9.4,regY:2.6}},{t:this.ikNode_7,p:{rotation:15.7,x:213.6,y:142,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:14,x:201.6,y:190.9,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:11,x:239.9,y:186.6,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:13.9,x:227.1,y:270,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:12.6,x:205.6,y:359,regX:1.9}},{t:this.ikNode_9,p:{rotation:-20,x:237.3,y:97.9,regX:8.7,regY:3.7}},{t:this.ikNode_10,p:{regY:5,rotation:-47.9,x:250,y:147.2,regX:4.9}},{t:this.ikNode_11,p:{rotation:-49.5,x:289.2,y:179.1,regY:3.5}},{t:this.ikNode_1,p:{x:249,y:428.4}},{t:this.ikNode_3,p:{regX:13.8,x:232.5,y:102.2}},{t:this.ikNode_2,p:{regY:19.7,x:241,y:186.7}},{t:this.ikNode_4,p:{x:244.2,y:90}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:255.5,y:58.2}},{t:this.ikNode_12,p:{rotation:-43.5,x:240.8,y:186.4,regY:4.3}},{t:this.ikNode_13,p:{rotation:7.5,x:303.3,y:243,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:19,x:291.9,y:332.8,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:20.9,x:236.4,y:97.4,regX:9.4,regY:2.6}},{t:this.ikNode_7,p:{rotation:18.2,x:212,y:144.4,regX:4.2,regY:4.7}},{t:this.ikNode_8,p:{rotation:16.5,x:197.9,y:192.9,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:15.1,x:240.1,y:189.9,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:18.7,x:221.4,y:272.3,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:17.5,x:192.6,y:359.1,regX:1.9}},{t:this.ikNode_9,p:{rotation:-20.1,x:237.5,y:101.2,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-52.1,x:250.3,y:150.5,regX:4.9}},{t:this.ikNode_11,p:{rotation:-53.7,x:291.7,y:179.5,regY:3.5}},{t:this.ikNode_1,p:{x:249.3,y:431.7}},{t:this.ikNode_3,p:{regX:13.8,x:232.7,y:105.5}},{t:this.ikNode_2,p:{regY:19.7,x:241.2,y:190}},{t:this.ikNode_4,p:{x:244.5,y:93.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:255.7,y:61.5}},{t:this.ikNode_12,p:{rotation:-41.8,x:240.9,y:189.7,regY:4.2}},{t:this.ikNode_13,p:{rotation:1.9,x:301.9,y:248.2,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:11.6,x:299,y:338.7,regX:4.4,regY:4.4}},{t:this.ikNode_6,p:{rotation:23,x:236.7,y:100.8,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:20.7,x:210.6,y:146.8,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:19.1,x:194.3,y:194.5,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:19.1,x:240.3,y:193.3,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:23.6,x:215.9,y:274.1,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:22.3,x:179.7,y:358.2,regX:1.9}},{t:this.ikNode_9,p:{rotation:-20.3,x:237.8,y:104.4,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-56.3,x:250.6,y:153.8,regX:4.9}},{t:this.ikNode_11,p:{rotation:-57.9,x:294.1,y:179.6,regY:3.5}},{t:this.ikNode_1,p:{x:249.5,y:435.1}},{t:this.ikNode_3,p:{regX:13.8,x:232.9,y:108.8}},{t:this.ikNode_2,p:{regY:19.7,x:241.4,y:193.3}},{t:this.ikNode_4,p:{x:244.7,y:96.7}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:255.9,y:64.8}},{t:this.ikNode_12,p:{rotation:-40,x:241.2,y:193.2,regY:4.3}},{t:this.ikNode_13,p:{rotation:-3.6,x:300.2,y:253.3,regX:9.7,regY:2.6}},{t:this.ikNode_14,p:{rotation:4.3,x:306.3,y:343.8,regX:4.5,regY:4.5}},{t:this.ikNode_6,p:{rotation:25.1,x:237,y:104.1,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:23.2,x:209,y:149.1,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:21.6,x:190.8,y:196.2,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:23.2,x:240.6,y:196.7,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:28.4,x:210.4,y:275.6,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:27.2,x:167.4,y:356.3,regX:1.9}},{t:this.ikNode_9,p:{rotation:-20.5,x:238,y:107.7,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-60.5,x:251,y:157.1,regX:4.9}},{t:this.ikNode_11,p:{rotation:-62.1,x:296.4,y:179.7,regY:3.5}},{t:this.ikNode_1,p:{x:249.7,y:438.4}},{t:this.ikNode_3,p:{regX:13.8,x:233.1,y:112.1}},{t:this.ikNode_2,p:{regY:19.7,x:241.6,y:196.7}},{t:this.ikNode_4,p:{x:244.9,y:100}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.2,y:68.1}},{t:this.ikNode_12,p:{rotation:-38.3,x:241.5,y:196.4,regY:4.3}},{t:this.ikNode_13,p:{rotation:-9.2,x:298.6,y:258.3,regX:9.7,regY:2.6}},{t:this.ikNode_14,p:{rotation:-3.1,x:313.5,y:347.7,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:27.2,x:237.2,y:107.5,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:25.7,x:207.6,y:151.5,regX:4.3,regY:4.8}},{t:this.ikNode_8,p:{rotation:24.1,x:187.3,y:197.5,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:27.2,x:240.8,y:200,regY:4.3,regX:5.8}},{t:this.ikNode_16,p:{rotation:33.3,x:205.1,y:276.6,regX:7.2}},{t:this.ikNode_17,p:{regY:6.1,rotation:32,x:155.5,y:353.3,regX:1.9}},{t:this.ikNode_9,p:{rotation:-20.7,x:238.1,y:111.1,regX:8.6,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-64.7,x:251.3,y:160.4,regX:4.9}},{t:this.ikNode_11,p:{rotation:-66.4,x:298.3,y:179.6,regY:3.5}},{t:this.ikNode_1,p:{x:249.9,y:441.7}},{t:this.ikNode_3,p:{regX:13.8,x:233.4,y:115.4}},{t:this.ikNode_2,p:{regY:19.7,x:241.8,y:200}},{t:this.ikNode_4,p:{x:245.2,y:103.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.4,y:71.4}},{t:this.ikNode_12,p:{rotation:-36.6,x:241.7,y:199.8,regY:4.3}},{t:this.ikNode_13,p:{rotation:-14.8,x:297,y:263.4,regX:9.7,regY:2.6}},{t:this.ikNode_14,p:{rotation:-10.5,x:320.4,y:350.8,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:29.4,x:237.4,y:110.8,regX:9.4,regY:2.6}},{t:this.ikNode_7,p:{rotation:28.2,x:206.3,y:153.6,regX:4.4,regY:4.7}},{t:this.ikNode_8,p:{rotation:26.6,x:183.8,y:198.8,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:31.3,x:241.2,y:203.4,regY:4.3,regX:5.9}},{t:this.ikNode_16,p:{rotation:38.1,x:200.1,y:277.3,regX:7.3}},{t:this.ikNode_17,p:{regY:6.2,rotation:36.9,x:144,y:349.6,regX:1.9}},{t:this.ikNode_9,p:{rotation:-20.8,x:238.4,y:114.4,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-68.9,x:251.8,y:163.6,regX:4.9}},{t:this.ikNode_11,p:{rotation:-70.6,x:299.9,y:179.4,regY:3.5}},{t:this.ikNode_1,p:{x:250.2,y:445}},{t:this.ikNode_3,p:{regX:13.8,x:233.6,y:118.7}},{t:this.ikNode_2,p:{regY:19.7,x:242,y:203.3}},{t:this.ikNode_4,p:{x:245.4,y:106.7}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.6,y:74.7}},{t:this.ikNode_12,p:{rotation:-34.9,x:242,y:203.1,regY:4.3}},{t:this.ikNode_13,p:{rotation:-20.3,x:295.3,y:268.2,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:-17.9,x:327.1,y:353.2,regX:4.5,regY:4.5}},{t:this.ikNode_6,p:{rotation:31.5,x:237.6,y:114.2,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:30.8,x:205,y:155.8,regX:4.4,regY:4.7}},{t:this.ikNode_8,p:{rotation:29.1,x:180.7,y:199.8,regY:3.4}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:35.3,x:241.3,y:206.9,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:43,x:195.1,y:277.6,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:41.7,x:133.3,y:344.8,regX:2}},{t:this.ikNode_9,p:{rotation:-21,x:238.6,y:117.8,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-73.1,x:252.1,y:167,regX:4.9}},{t:this.ikNode_11,p:{rotation:-74.8,x:301.2,y:179,regY:3.5}},{t:this.ikNode_1,p:{x:250.4,y:448.4}},{t:this.ikNode_3,p:{regX:13.8,x:233.8,y:122.1}},{t:this.ikNode_2,p:{regY:19.7,x:242.2,y:206.6}},{t:this.ikNode_4,p:{x:245.6,y:110}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.9,y:78}},{t:this.ikNode_12,p:{rotation:-33.2,x:242.2,y:206.4,regY:4.3}},{t:this.ikNode_13,p:{rotation:-25.9,x:293.5,y:273,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:-25.3,x:333.3,y:354.6,regX:4.4,regY:4.4}},{t:this.ikNode_6,p:{rotation:33.6,x:237.9,y:117.5,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:33.3,x:203.6,y:157.9,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:31.6,x:177.4,y:200.9,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:39.4,x:241.5,y:210.1,regY:4.3,regX:5.8}},{t:this.ikNode_16,p:{rotation:47.8,x:190.5,y:277.4,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:46.6,x:123.2,y:339.2,regX:1.9}},{t:this.ikNode_9,p:{rotation:-21.2,x:239,y:121.1,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-77.4,x:252.4,y:170.2,regX:4.9}},{t:this.ikNode_11,p:{rotation:-79,x:302.3,y:178.8,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:451.7}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:125.4}},{t:this.ikNode_2,p:{regY:19.7,x:242.4,y:210}},{t:this.ikNode_4,p:{x:245.9,y:113.3}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257.1,y:81.3}},{t:this.ikNode_12,p:{rotation:-31.5,x:242.5,y:209.6,regY:4.3}},{t:this.ikNode_13,p:{rotation:-31.5,x:291.7,y:278,regX:9.7,regY:2.6}},{t:this.ikNode_14,p:{rotation:-32.7,x:339.3,y:355.1,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:35.7,x:238,y:120.9,regX:9.4,regY:2.6}},{t:this.ikNode_7,p:{rotation:35.8,x:202.4,y:159.9,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:34.1,x:174.3,y:201.8,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:30.3,x:241.3,y:207.5,regY:4.4,regX:5.9}},{t:this.ikNode_16,p:{rotation:44.6,x:201.9,y:281.9,regX:7.3}},{t:this.ikNode_17,p:{regY:6.2,rotation:44.9,x:137.9,y:347.3,regX:1.9}},{t:this.ikNode_9,p:{rotation:-18,x:238.9,y:118.1,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-67.9,x:249.7,y:168,regX:4.9}},{t:this.ikNode_11,p:{rotation:-69.6,x:297.4,y:184.4,regY:3.4}},{t:this.ikNode_1,p:{x:250.6,y:448.7}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:122.4}},{t:this.ikNode_2,p:{regY:19.7,x:242.5,y:207}},{t:this.ikNode_4,p:{x:245.9,y:110.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257.1,y:78.3}},{t:this.ikNode_12,p:{rotation:-28.1,x:242.4,y:206.7,regY:4.3}},{t:this.ikNode_13,p:{rotation:-28.1,x:287.7,y:277.7,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:-29.3,x:330.7,y:357.6,regX:4.5,regY:4.5}},{t:this.ikNode_6,p:{rotation:31.2,x:238,y:118,regX:9.5,regY:2.7}},{t:this.ikNode_7,p:{rotation:27,x:205.6,y:159.7,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:25.4,x:184.2,y:205.2,regY:3.4}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:21.1,x:241.1,y:204.5,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:41.5,x:214,y:284.3,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:43.2,x:153.7,y:353.1,regX:1.9}},{t:this.ikNode_9,p:{rotation:-14.8,x:238.8,y:115.1,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-58.5,x:246.8,y:165.4,regX:4.9}},{t:this.ikNode_11,p:{rotation:-60.1,x:291.3,y:189.5,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:445.8}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:119.4}},{t:this.ikNode_2,p:{regY:19.7,x:242.5,y:204}},{t:this.ikNode_4,p:{x:245.9,y:107.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257.1,y:75.3}},{t:this.ikNode_12,p:{rotation:-24.8,x:242.4,y:203.8,regY:4.3}},{t:this.ikNode_13,p:{rotation:-24.7,x:283.5,y:277.3,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:-26,x:321.6,y:359.5,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:26.6,x:238.1,y:114.9,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:18.3,x:209,y:159.1,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:16.6,x:194.8,y:207.5,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:12,x:240.7,y:201.5,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:38.3,x:226.8,y:284.4,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:41.5,x:170.4,y:356.5,regX:1.9}},{t:this.ikNode_9,p:{rotation:-11.5,x:238.9,y:112,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-49.1,x:244,y:162.8,regX:4.9}},{t:this.ikNode_11,p:{rotation:-50.7,x:283.9,y:193.9,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:442.8}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:116.4}},{t:this.ikNode_2,p:{regY:19.7,x:242.5,y:201}},{t:this.ikNode_4,p:{x:245.9,y:104.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257.1,y:72.3}},{t:this.ikNode_12,p:{rotation:-21.4,x:242.5,y:200.8,regY:4.3}},{t:this.ikNode_13,p:{rotation:-21.4,x:279,y:276.6,regX:9.7,regY:2.6}},{t:this.ikNode_14,p:{rotation:-22.6,x:312.4,y:360.9,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:22.1,x:238.1,y:111.8,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:9.5,x:212.6,y:158.4,regX:4.3,regY:4.8}},{t:this.ikNode_8,p:{rotation:7.8,x:206,y:208.3,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:2.8,x:240.4,y:198.2,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:35.1,x:239.8,y:282.3,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:39.9,x:187.6,y:357.3,regX:1.9}},{t:this.ikNode_9,p:{rotation:-8.3,x:238.8,y:109,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:4.9,rotation:-39.6,x:241.1,y:159.9,regX:4.9}},{t:this.ikNode_11,p:{rotation:-41.3,x:275.4,y:197.2,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:439.8}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:113.5}},{t:this.ikNode_2,p:{regY:19.7,x:242.5,y:198.1}},{t:this.ikNode_4,p:{x:245.9,y:101.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257.1,y:69.4}},{t:this.ikNode_12,p:{rotation:-18,x:242.3,y:197.6,regY:4.2}},{t:this.ikNode_13,p:{rotation:-18,x:274.6,y:275.7,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:-19.3,x:302.9,y:361.8,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:17.5,x:238.2,y:108.9,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:0.8,x:216.6,y:157.3,regX:4.4,regY:4.7}},{t:this.ikNode_8,p:{rotation:-0.9,x:217.4,y:207.7,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-6.3,x:240.2,y:194.8,regY:4.3,regX:5.8}},{t:this.ikNode_16,p:{rotation:32,x:253.3,y:277.9,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:38.2,x:205.2,y:355.6,regX:1.9}},{t:this.ikNode_9,p:{rotation:-5.1,x:238.9,y:106.2,regX:8.7,regY:3.7}},{t:this.ikNode_10,p:{regY:4.9,rotation:-30.2,x:238.2,y:157,regX:4.9}},{t:this.ikNode_11,p:{rotation:-31.8,x:265.9,y:199.3,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:436.8}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:110.5}},{t:this.ikNode_2,p:{regY:19.7,x:242.5,y:195.1}},{t:this.ikNode_4,p:{x:245.9,y:98.5}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257.1,y:66.4}},{t:this.ikNode_12,p:{rotation:-14.7,x:242.3,y:194.8,regY:4.3}},{t:this.ikNode_13,p:{rotation:-14.7,x:269.9,y:274.5,regX:9.7,regY:2.6}},{t:this.ikNode_14,p:{rotation:-15.9,x:293.1,y:362.2,regX:4.5,regY:4.5}},{t:this.ikNode_6,p:{rotation:13,x:238.1,y:105.9,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-8,x:220.4,y:155.9,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-9.7,x:229,y:205.5,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-15.5,x:240.3,y:191.6,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:28.8,x:266.5,y:271.5,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:36.5,x:222.7,y:351.9,regX:2}},{t:this.ikNode_9,p:{rotation:-1.9,x:238.7,y:103,regX:8.6,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-20.8,x:235.3,y:153.8,regX:4.9}},{t:this.ikNode_11,p:{rotation:-22.4,x:255.8,y:200.1,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:433.9}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:107.5}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:192.1}},{t:this.ikNode_4,p:{x:245.9,y:95.5}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257.1,y:63.4}},{t:this.ikNode_12,p:{rotation:-11.3,x:242.4,y:191.8,regY:4.3}},{t:this.ikNode_13,p:{rotation:-11.3,x:265.2,y:272.9,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:-12.6,x:283.2,y:361.8,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:8.4,x:237.9,y:102.9,regX:9.4,regY:2.6}},{t:this.ikNode_7,p:{rotation:-16.8,x:224.4,y:154.3,regX:4.3,regY:4.8}},{t:this.ikNode_8,p:{rotation:-18.4,x:240.5,y:201.9,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-24.6,x:240.5,y:188.5,regY:4.4,regX:5.9}},{t:this.ikNode_16,p:{rotation:25.6,x:279,y:263.1,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:34.8,x:239.7,y:345.8,regX:2}},{t:this.ikNode_9,p:{rotation:1.3,x:238.7,y:100.1,regX:8.6,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-11.3,x:232.4,y:150.6,regX:4.8}},{t:this.ikNode_11,p:{rotation:-13,x:245.1,y:199.5,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:430.9}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:104.5}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:189.1}},{t:this.ikNode_4,p:{x:245.9,y:92.5}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257.1,y:60.4}},{t:this.ikNode_12,p:{rotation:-8,x:242.4,y:189,regY:4.4}},{t:this.ikNode_13,p:{rotation:-8,x:260.5,y:271.2,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:-9.2,x:273.2,y:361,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:3.9,x:238.1,y:99.9,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-25.5,x:228.4,y:152.3,regX:4.2,regY:4.8}},{t:this.ikNode_8,p:{rotation:-27.2,x:251.6,y:196.8,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-33.7,x:240.5,y:185.4,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:22.5,x:290.7,y:252.8,regX:7.3}},{t:this.ikNode_17,p:{regY:6.2,rotation:33.2,x:255.8,y:337.5,regX:1.9}},{t:this.ikNode_9,p:{rotation:4.5,x:238.9,y:97,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-1.9,x:229.6,y:147.1,regX:4.9}},{t:this.ikNode_11,p:{rotation:-3.5,x:234,y:197.5,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:427.9}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:101.6}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:186.2}},{t:this.ikNode_4,p:{x:245.9,y:89.5}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257,y:57.4}},{t:this.ikNode_12,p:{rotation:-4.6,x:242.3,y:185.7,regY:4.2}},{t:this.ikNode_13,p:{rotation:-4.6,x:255.6,y:269.1,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:-5.9,x:263.1,y:359.5,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-0.7,x:238.1,y:96.9,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-34.3,x:232.7,y:149.8,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-35.9,x:262.4,y:190.4,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-42.9,x:240.5,y:182.3,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:19.3,x:300.8,y:240.8,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:31.5,x:270.7,y:327.2,regX:1.9}},{t:this.ikNode_9,p:{rotation:7.7,x:238.8,y:94,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:7.5,x:226.7,y:143.4,regX:4.8}},{t:this.ikNode_11,p:{rotation:5.9,x:222.9,y:193.9,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:424.9}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:98.6}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:183.2}},{t:this.ikNode_4,p:{x:245.9,y:86.6}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257,y:54.4}},{t:this.ikNode_12,p:{rotation:-1.3,x:242.3,y:182.9,regY:4.3}},{t:this.ikNode_13,p:{rotation:-1.3,x:250.7,y:266.8,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:-2.5,x:252.8,y:357.5,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-5.2,x:238.1,y:93.9,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-43,x:237,y:147.1,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-44.7,x:272.4,y:182.7,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-52,x:240.6,y:179.3,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:16.1,x:309.6,y:227.4,regX:7.3}},{t:this.ikNode_17,p:{regY:6.1,rotation:29.8,x:284.2,y:315.3,regX:1.9}},{t:this.ikNode_9,p:{rotation:10.9,x:238.8,y:91,regX:8.6,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:16.9,x:224.1,y:139.7,regX:4.9}},{t:this.ikNode_11,p:{rotation:15.3,x:212,y:188.8,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:422}},{t:this.ikNode_3,p:{regX:13.8,x:234,y:95.6}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:180.2}},{t:this.ikNode_4,p:{x:245.9,y:83.6}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257,y:51.5}},{t:this.ikNode_12,p:{rotation:2.1,x:242.3,y:179.8,regY:4.2}},{t:this.ikNode_13,p:{rotation:2.1,x:245.8,y:264.2,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:0.8,x:242.6,y:354.9,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-9.8,x:238.1,y:90.9,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-51.8,x:241.2,y:144,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-53.5,x:281.6,y:173.9,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-49.8,x:240.7,y:182.1,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:11.6,x:307.5,y:232.9,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:24.2,x:289.3,y:322.6,regX:1.9}},{t:this.ikNode_9,p:{rotation:13.3,x:238.9,y:93.8,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:18.2,x:222,y:141.8,regX:4.8}},{t:this.ikNode_11,p:{rotation:16.6,x:208.9,y:190.7,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:424.8}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:98.5}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:183.1}},{t:this.ikNode_4,p:{x:245.9,y:86.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257,y:54.3}},{t:this.ikNode_12,p:{rotation:5.8,x:242.2,y:182.7,regY:4.3}},{t:this.ikNode_13,p:{rotation:6.4,x:240,y:267.1,regX:9.7,regY:2.6}},{t:this.ikNode_14,p:{rotation:5.2,x:230.1,y:357.3,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-11,x:238.1,y:93.7,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-55,x:242.3,y:146.7,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-56.6,x:284.5,y:174.3,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-47.6,x:240.7,y:184.9,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:7,x:305.4,y:238.4,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:18.5,x:294.5,y:329.3,regX:1.9}},{t:this.ikNode_9,p:{rotation:15.7,x:238.9,y:96.6,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:19.5,x:220.1,y:144,regX:4.9}},{t:this.ikNode_11,p:{rotation:17.8,x:205.9,y:192.5,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:427.6}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:101.3}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:185.9}},{t:this.ikNode_4,p:{x:245.9,y:89.3}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257,y:57.1}},{t:this.ikNode_12,p:{rotation:9.6,x:242.3,y:185.6,regY:4.3}},{t:this.ikNode_13,p:{rotation:10.8,x:234.5,y:269.6,regX:9.7,regY:2.6}},{t:this.ikNode_14,p:{rotation:9.6,x:217.7,y:358.9,regX:4.5,regY:4.5}},{t:this.ikNode_6,p:{rotation:-12.3,x:238,y:96.5,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-58.2,x:243.6,y:149.4,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-59.8,x:287.2,y:174.7,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-45.3,x:240.7,y:187.8,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:2.4,x:303.3,y:243.9,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:12.8,x:299.8,y:335.3,regX:2}},{t:this.ikNode_9,p:{rotation:18,x:238.9,y:99.4,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:20.8,x:218.1,y:146,regX:4.9}},{t:this.ikNode_11,p:{rotation:19.1,x:202.8,y:194.1,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:430.5}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:104.1}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:188.7}},{t:this.ikNode_4,p:{x:245.9,y:92.1}},{t:this.ikNode_5,p:{regX:24,regY:25.1,x:257,y:60}},{t:this.ikNode_12,p:{rotation:13.3,x:242.2,y:188.4,regY:4.3}},{t:this.ikNode_13,p:{rotation:15.2,x:229.1,y:271.9,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:13.9,x:205.4,y:359.3,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-13.6,x:238,y:99.4,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-61.3,x:244.7,y:152.2,regX:4.2,regY:4.7}},{t:this.ikNode_8,p:{rotation:-63,x:289.6,y:174.8,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-43.1,x:240.7,y:190.7,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-2.2,x:301,y:249.2,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:7.1,x:304.8,y:340.7,regX:1.9}},{t:this.ikNode_9,p:{rotation:20.4,x:238.9,y:102.3,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:22,x:216.2,y:147.9,regX:4.9}},{t:this.ikNode_11,p:{rotation:20.4,x:199.9,y:195.7,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:433.3}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:107}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:191.6}},{t:this.ikNode_4,p:{x:245.9,y:94.9}},{t:this.ikNode_5,p:{regX:24,regY:25.1,x:257,y:62.8}},{t:this.ikNode_12,p:{rotation:17.1,x:242.2,y:191.4,regY:4.3}},{t:this.ikNode_13,p:{rotation:19.5,x:223.6,y:273.6,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:18.3,x:193.4,y:359.3,regX:4.5,regY:4.5}},{t:this.ikNode_6,p:{rotation:-14.9,x:238,y:102.2,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-64.5,x:245.9,y:154.8,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-66.2,x:292.1,y:175,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-40.9,x:240.9,y:193.4,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-6.8,x:298.7,y:254.4,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:1.5,x:309.9,y:345.3,regX:2}},{t:this.ikNode_9,p:{rotation:22.8,x:238.9,y:105.1,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:23.3,x:214.2,y:149.7,regX:4.8}},{t:this.ikNode_11,p:{rotation:21.7,x:196.9,y:197.2,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:436.1}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:109.8}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:194.4}},{t:this.ikNode_4,p:{x:245.9,y:97.8}},{t:this.ikNode_5,p:{regX:24,regY:25.1,x:257,y:65.6}},{t:this.ikNode_12,p:{rotation:20.9,x:242.2,y:194.2,regY:4.3}},{t:this.ikNode_13,p:{rotation:23.9,x:218.2,y:275.1,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:22.7,x:181.7,y:358,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-16.2,x:238,y:105,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-67.7,x:247.1,y:157.3,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-69.4,x:294.3,y:175,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-38.6,x:240.8,y:196.3,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-11.3,x:296.3,y:259.6,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:-4.2,x:314.6,y:349.2,regX:1.9}},{t:this.ikNode_9,p:{rotation:25.1,x:238.8,y:107.8,regX:8.6,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:24.6,x:212.5,y:151.5,regX:4.9}},{t:this.ikNode_11,p:{rotation:22.9,x:194,y:198.6,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:439}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:112.6}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:197.2}},{t:this.ikNode_4,p:{x:245.9,y:100.6}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257,y:68.4}},{t:this.ikNode_12,p:{rotation:24.6,x:242.2,y:197.1,regY:4.3}},{t:this.ikNode_13,p:{rotation:28.3,x:213,y:276.2,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:27,x:170,y:356,regX:4.4,regY:4.4}},{t:this.ikNode_6,p:{rotation:-17.4,x:238,y:107.9,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-70.9,x:248.3,y:159.8,regX:4.4,regY:4.7}},{t:this.ikNode_8,p:{rotation:-72.5,x:296.4,y:175,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-36.4,x:240.9,y:199.1,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-15.9,x:293.9,y:264.7,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:-9.9,x:319.2,y:352.6,regX:1.9}},{t:this.ikNode_9,p:{rotation:27.5,x:238.9,y:110.8,regX:8.7,regY:3.7}},{t:this.ikNode_10,p:{regY:5,rotation:25.8,x:210.7,y:153.2,regX:4.9}},{t:this.ikNode_11,p:{rotation:24.2,x:191.2,y:199.8,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:441.8}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:115.5}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:200.1}},{t:this.ikNode_4,p:{x:245.9,y:103.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:257,y:71.2}},{t:this.ikNode_12,p:{rotation:28.4,x:242.2,y:199.9,regY:4.2}},{t:this.ikNode_13,p:{rotation:32.6,x:207.8,y:276.9,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:31.4,x:159,y:353.3,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-18.7,x:237.9,y:110.7,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-74.1,x:249.4,y:162.5,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-75.7,x:298.3,y:174.8,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-34.2,x:240.9,y:202,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-20.5,x:291.3,y:269.6,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:-15.5,x:323.5,y:355.2,regX:1.9}},{t:this.ikNode_9,p:{rotation:29.9,x:239,y:113.4,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:27.1,x:208.9,y:154.8,regX:4.9}},{t:this.ikNode_11,p:{rotation:25.5,x:188.4,y:201,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:444.6}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:118.3}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:202.9}},{t:this.ikNode_4,p:{x:245.9,y:106.3}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.9,y:74.1}},{t:this.ikNode_12,p:{rotation:32.1,x:242.2,y:202.8,regY:4.4}},{t:this.ikNode_13,p:{rotation:37,x:202.9,y:277.4,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:35.8,x:148.4,y:349.8,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-20,x:238,y:113.5,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-77.3,x:250.6,y:165.1,regX:4.3,regY:4.8}},{t:this.ikNode_8,p:{rotation:-78.9,x:300.2,y:174.6,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-31.9,x:241,y:204.9,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-25.1,x:288.7,y:274.5,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:-21.2,x:327.6,y:357.2,regX:1.9}},{t:this.ikNode_9,p:{rotation:32.2,x:239,y:116.3,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:4.9,rotation:28.4,x:207.3,y:156.3,regX:4.9}},{t:this.ikNode_11,p:{rotation:26.7,x:185.7,y:202.1,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:447.5}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:121.1}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:205.7}},{t:this.ikNode_4,p:{x:245.9,y:109.1}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.9,y:76.9}},{t:this.ikNode_12,p:{rotation:35.9,x:242.3,y:205.5,regY:4.2}},{t:this.ikNode_13,p:{rotation:41.4,x:198,y:277.4,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:40.1,x:138.2,y:345.5,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-21.3,x:238,y:116.4,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-80.4,x:251.6,y:167.6,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-82.1,x:301.8,y:174.4,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-29.7,x:240.9,y:207.6,regY:4.3,regX:5.8}},{t:this.ikNode_16,p:{rotation:-29.7,x:286,y:279.2,regX:7.3}},{t:this.ikNode_17,p:{regY:6.2,rotation:-26.9,x:331.4,y:358.6,regX:1.9}},{t:this.ikNode_9,p:{rotation:34.6,x:239,y:119.1,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:29.6,x:205.5,y:157.9,regX:4.9}},{t:this.ikNode_11,p:{rotation:28,x:183.1,y:203,regY:3.5}},{t:this.ikNode_1,p:{x:250.6,y:450.3}},{t:this.ikNode_3,p:{regX:13.8,x:233.9,y:124}},{t:this.ikNode_2,p:{regY:19.7,x:242.6,y:208.6}},{t:this.ikNode_4,p:{x:246,y:111.9}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.9,y:79.7}},{t:this.ikNode_12,p:{rotation:39.7,x:242.2,y:208.5,regY:4.3}},{t:this.ikNode_13,p:{rotation:45.7,x:193.4,y:277.3,regX:9.8,regY:2.7}},{t:this.ikNode_14,p:{rotation:44.5,x:128.5,y:340.6,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-22.6,x:238,y:119.2,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-83.6,x:252.8,y:170.1,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-85.3,x:303.2,y:174.1,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-26.4,x:240.9,y:204.9,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-26.3,x:281.7,y:278.9,regX:7.3}},{t:this.ikNode_17,p:{regY:6.1,rotation:-23.9,x:322.4,y:360.7,regX:1.9}},{t:this.ikNode_9,p:{rotation:29.2,x:238.7,y:116.3,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:22.7,x:209.2,y:158,regX:4.9}},{t:this.ikNode_11,p:{rotation:21.1,x:192.3,y:205.6,regY:3.5}},{t:this.ikNode_1,p:{x:250.4,y:447.4}},{t:this.ikNode_3,p:{regX:13.8,x:233.7,y:121.1}},{t:this.ikNode_2,p:{regY:19.7,x:242.4,y:205.7}},{t:this.ikNode_4,p:{x:245.7,y:109.1}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.7,y:76.9}},{t:this.ikNode_12,p:{rotation:31,x:241.9,y:205.7,regY:4.3}},{t:this.ikNode_13,p:{rotation:43,x:204.1,y:280.9,regX:9.7,regY:2.6}},{t:this.ikNode_14,p:{rotation:43.4,x:142.4,y:347.3,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-18.6,x:237.7,y:116.4,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-73.9,x:249.1,y:168.2,regX:4.2,regY:4.7}},{t:this.ikNode_8,p:{rotation:-75.6,x:298.2,y:180.6,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-23.2,x:240.7,y:202.1,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-22.9,x:277.1,y:278.4,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:-20.9,x:313.1,y:362.5,regX:1.9}},{t:this.ikNode_9,p:{rotation:23.7,x:238.5,y:113.6,regX:8.7,regY:3.7}},{t:this.ikNode_10,p:{regY:5,rotation:15.8,x:213.1,y:157.9,regX:4.9}},{t:this.ikNode_11,p:{rotation:14.2,x:202,y:207.2,regY:3.5}},{t:this.ikNode_1,p:{x:250.2,y:444.6}},{t:this.ikNode_3,p:{regX:13.8,x:233.5,y:118.3}},{t:this.ikNode_2,p:{regY:19.7,x:242.2,y:202.9}},{t:this.ikNode_4,p:{x:245.5,y:106.2}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.5,y:74.1}},{t:this.ikNode_12,p:{rotation:22.3,x:241.8,y:202.8,regY:4.3}},{t:this.ikNode_13,p:{rotation:40.3,x:215.7,y:283,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:42.4,x:157.2,y:352.1,regX:4.4,regY:4.4}},{t:this.ikNode_6,p:{rotation:-14.7,x:237.5,y:113.6,regX:9.4,regY:2.7}},{t:this.ikNode_7,p:{rotation:-64.3,x:245.4,y:166,regX:4.3,regY:4.8}},{t:this.ikNode_8,p:{rotation:-65.9,x:291.6,y:186.5,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-19.9,x:240.4,y:199.2,regY:4.3,regX:5.8}},{t:this.ikNode_16,p:{rotation:-19.5,x:272.5,y:277.4,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:-17.9,x:303.5,y:363.6,regX:1.9}},{t:this.ikNode_9,p:{rotation:18.3,x:238.3,y:110.7,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:8.9,x:217.2,y:157.3,regX:4.9}},{t:this.ikNode_11,p:{rotation:7.3,x:212.2,y:207.5,regY:3.5}},{t:this.ikNode_1,p:{x:250,y:441.7}},{t:this.ikNode_3,p:{regX:13.8,x:233.3,y:115.4}},{t:this.ikNode_2,p:{regY:19.7,x:242,y:200}},{t:this.ikNode_4,p:{x:245.3,y:103.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.3,y:71.3}},{t:this.ikNode_12,p:{rotation:13.7,x:241.6,y:200,regY:4.3}},{t:this.ikNode_13,p:{rotation:37.6,x:227.9,y:283.1,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:41.3,x:172.8,y:355,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-10.8,x:237.4,y:110.6,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-54.6,x:241.5,y:163.5,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-56.2,x:283.5,y:191.5,regY:3.4}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-16.7,x:240.3,y:196.5,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-16.1,x:267.9,y:276.3,regX:7.2}},{t:this.ikNode_17,p:{regY:6.1,rotation:-14.9,x:293.7,y:364,regX:1.9}},{t:this.ikNode_9,p:{rotation:12.9,x:238.1,y:107.9,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:2,x:221.6,y:156.3,regX:4.9}},{t:this.ikNode_11,p:{rotation:0.4,x:222.6,y:206.8,regY:3.5}},{t:this.ikNode_1,p:{x:249.8,y:438.9}},{t:this.ikNode_3,p:{regX:13.8,x:233.1,y:112.6}},{t:this.ikNode_2,p:{regY:19.7,x:241.8,y:197.2}},{t:this.ikNode_4,p:{x:245.1,y:100.5}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:256.1,y:68.4}},{t:this.ikNode_12,p:{rotation:5,x:241.4,y:197,regY:4.2}},{t:this.ikNode_13,p:{rotation:34.9,x:240.5,y:281.4,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:40.2,x:188.8,y:355.8,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:-6.9,x:237.2,y:107.8,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-44.9,x:237.6,y:160.8,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-46.6,x:274.5,y:195.5,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-13.4,x:240.1,y:193.7,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-12.7,x:263.1,y:275,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:-12,x:283.7,y:364.2,regX:1.9}},{t:this.ikNode_9,p:{rotation:7.5,x:237.9,y:105.1,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-4.9,x:226,y:154.9,regX:4.9}},{t:this.ikNode_11,p:{rotation:-6.6,x:233.1,y:204.8,regY:3.5}},{t:this.ikNode_1,p:{x:249.6,y:436}},{t:this.ikNode_3,p:{regX:13.8,x:233,y:109.7}},{t:this.ikNode_2,p:{regY:19.7,x:241.6,y:194.3}},{t:this.ikNode_4,p:{x:244.9,y:97.7}},{t:this.ikNode_5,p:{regX:24,regY:25.1,x:256,y:65.7}},{t:this.ikNode_12,p:{rotation:-3.6,x:241.2,y:194.2,regY:4.3}},{t:this.ikNode_13,p:{rotation:32.2,x:253,y:277.7,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:39.2,x:204.8,y:354.4,regX:4.4,regY:4.4}},{t:this.ikNode_6,p:{rotation:-3,x:237,y:104.9,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-35.2,x:233.9,y:157.9,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-36.9,x:264.2,y:198.2,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-10.1,x:240,y:190.9,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-9.4,x:258.3,y:273.3,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:-9,x:273.6,y:363.6,regX:1.9}},{t:this.ikNode_9,p:{rotation:2.1,x:237.5,y:102.3,regX:8.6,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-11.8,x:230.6,y:153,regX:4.9}},{t:this.ikNode_11,p:{rotation:-13.5,x:243.6,y:201.8,regY:3.5}},{t:this.ikNode_1,p:{x:249.4,y:433.2}},{t:this.ikNode_3,p:{regX:13.8,x:232.8,y:106.9}},{t:this.ikNode_2,p:{regY:19.7,x:241.4,y:191.4}},{t:this.ikNode_4,p:{x:244.6,y:94.8}},{t:this.ikNode_5,p:{regX:24,regY:25.1,x:255.8,y:62.9}},{t:this.ikNode_12,p:{rotation:-12.3,x:241.1,y:191.4,regY:4.3}},{t:this.ikNode_13,p:{rotation:29.5,x:265.3,y:272.1,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:38.1,x:220.8,y:351.1,regX:4.4,regY:4.4}},{t:this.ikNode_6,p:{rotation:0.9,x:236.8,y:102.1,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-25.5,x:229.9,y:154.8,regX:4.2,regY:4.8}},{t:this.ikNode_8,p:{rotation:-27.2,x:253.2,y:199.5,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-6.9,x:239.8,y:188,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-6,x:253.5,y:271.5,regX:7.3}},{t:this.ikNode_17,p:{regY:6.2,rotation:-6,x:263.4,y:362.5,regX:1.9}},{t:this.ikNode_9,p:{rotation:-3.3,x:237.4,y:99.5,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-18.7,x:235.2,y:150.6,regX:4.8}},{t:this.ikNode_11,p:{rotation:-20.4,x:254,y:197.5,regY:3.5}},{t:this.ikNode_1,p:{x:249.2,y:430.3}},{t:this.ikNode_3,p:{regX:13.8,x:232.6,y:104.1}},{t:this.ikNode_2,p:{regY:19.7,x:241.2,y:188.6}},{t:this.ikNode_4,p:{x:244.4,y:91.9}},{t:this.ikNode_5,p:{regX:24,regY:25.1,x:255.6,y:60}},{t:this.ikNode_12,p:{rotation:-20.9,x:240.8,y:188.4,regY:4.3}},{t:this.ikNode_13,p:{rotation:26.8,x:276.9,y:264.8,regX:9.8,regY:2.7}},{t:this.ikNode_14,p:{rotation:37,x:236.4,y:345.7,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:4.9,x:236.7,y:99.3,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-15.9,x:226.1,y:151.2,regX:4.2,regY:4.7}},{t:this.ikNode_8,p:{rotation:-17.5,x:241.6,y:199.4,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-3.6,x:239.7,y:185.3,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:-2.6,x:248.5,y:269.3,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:-3,x:253,y:360.7,regX:1.9}},{t:this.ikNode_9,p:{rotation:-8.8,x:237.2,y:96.7,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-25.6,x:240,y:147.7,regX:4.9}},{t:this.ikNode_11,p:{rotation:-27.3,x:264.2,y:192.1,regY:3.5}},{t:this.ikNode_1,p:{x:249,y:427.5}},{t:this.ikNode_3,p:{regX:13.8,x:232.4,y:101.2}},{t:this.ikNode_2,p:{regY:19.7,x:241,y:185.7}},{t:this.ikNode_4,p:{x:244.2,y:89.1}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:255.4,y:57.2}},{t:this.ikNode_12,p:{rotation:-29.6,x:240.7,y:185.6,regY:4.3}},{t:this.ikNode_13,p:{rotation:24.1,x:287.8,y:255.5,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:35.9,x:251.2,y:338.3,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:8.8,x:236.5,y:96.5,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:-6.2,x:222.4,y:147.5,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:-7.8,x:229.5,y:197.4,regY:3.4}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:-0.4,x:239.6,y:182.5,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:0.8,x:243.4,y:266.9,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:0,x:242.8,y:358.5,regX:1.9}},{t:this.ikNode_9,p:{rotation:-14.2,x:237,y:93.9,regX:8.7,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-32.6,x:244.6,y:144.4,regX:4.9}},{t:this.ikNode_11,p:{rotation:-34.2,x:274.1,y:185.6,regY:3.5}},{t:this.ikNode_1,p:{x:248.8,y:424.6}},{t:this.ikNode_3,p:{regX:13.8,x:232.2,y:98.4}},{t:this.ikNode_2,p:{regY:19.7,x:240.8,y:182.9}},{t:this.ikNode_4,p:{x:244,y:86.2}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:255.2,y:54.4}},{t:this.ikNode_12,p:{rotation:-38.3,x:240.5,y:182.7,regY:4.3}},{t:this.ikNode_13,p:{rotation:21.4,x:297.6,y:244.8,regX:9.8,regY:2.6}},{t:this.ikNode_14,p:{rotation:34.9,x:264.9,y:329.2,regX:4.4,regY:4.4}},{t:this.ikNode_6,p:{rotation:12.7,x:236.3,y:93.6,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:3.5,x:218.6,y:143.6,regX:4.2,regY:4.7}},{t:this.ikNode_8,p:{rotation:1.8,x:217.3,y:194,regY:3.5}}]},1).to({state:[{t:this.ikNode_15,p:{rotation:2.9,x:239.5,y:179.7,regY:4.4,regX:5.8}},{t:this.ikNode_16,p:{rotation:4.2,x:238.6,y:264.1,regX:7.2}},{t:this.ikNode_17,p:{regY:6.2,rotation:3,x:232.4,y:355.5,regX:1.9}},{t:this.ikNode_9,p:{rotation:-19.6,x:236.8,y:91.1,regX:8.6,regY:3.6}},{t:this.ikNode_10,p:{regY:5,rotation:-39.5,x:249.2,y:140.7,regX:4.9}},{t:this.ikNode_11,p:{rotation:-41.1,x:283.4,y:178.1,regY:3.5}},{t:this.ikNode_1,p:{x:248.6,y:421.8}},{t:this.ikNode_3,p:{regX:13.8,x:232.1,y:95.5}},{t:this.ikNode_2,p:{regY:19.7,x:240.5,y:180}},{t:this.ikNode_4,p:{x:243.8,y:83.4}},{t:this.ikNode_5,p:{regX:23.9,regY:25.1,x:255,y:51.6}},{t:this.ikNode_12,p:{rotation:-46.9,x:240.3,y:179.8,regY:4.4}},{t:this.ikNode_13,p:{rotation:18.6,x:306.1,y:232.8,regX:9.8,regY:2.7}},{t:this.ikNode_14,p:{rotation:33.8,x:277.6,y:318.4,regX:4.5,regY:4.4}},{t:this.ikNode_6,p:{rotation:16.6,x:236,y:90.8,regX:9.5,regY:2.6}},{t:this.ikNode_7,p:{rotation:13.2,x:215.2,y:139.4,regX:4.3,regY:4.7}},{t:this.ikNode_8,p:{rotation:11.5,x:205.2,y:188.9,regY:3.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(198,19.3,119,423);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_209 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(209).call(this.frame_209).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhGzAQuMAAAghbMCNnAAAMAAAAhbg");
	mask.setTransform(7.7,-401.5);

	// Layer 1
	this.instance = new lib.Tween49("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,50.2);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},14).to({startPosition:0},50).to({y:-197.5},15).to({startPosition:0},50).to({y:-394.8},15).to({startPosition:0},50).to({y:-597},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.1,-439.8,840.2,145.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// Layer 7
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(312,0);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.movieClip_1 = new lib.Symbol4();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(288,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance}]},10).to({state:[{t:this.movieClip_1}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({rotation:360,x:288,alpha:1},10).to({_off:true,mode:"independent"},11).wait(1));

	// Layer 6
	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(204.1,-22);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(192,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},10).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({_off:true,rotation:360,x:192,y:0,alpha:1},10).wait(22));

	// Layer 5
	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(124.6,28.6);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(96,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},39).to({state:[{t:this.instance_4}]},10).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({_off:true,rotation:360,x:96,y:0,alpha:1},10).wait(32));

	// Layer 4
	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3.5,-18.7);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},29).to({state:[{t:this.instance_6}]},10).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({_off:true,rotation:360,x:0,y:0,alpha:1},10).wait(42));

	// Layer 3
	this.instance_7 = new lib.Tween14("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-77.3,-19.8);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween15("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-96,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},10).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({_off:true,rotation:360,x:-96,y:0,alpha:1},10).wait(52));

	// Layer 2
	this.instance_9 = new lib.Tween16("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-187.8,26.5);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween17("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-192,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_10}]},10).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({_off:true,rotation:360,x:-192,y:0,alpha:1},10).wait(62));

	// Layer 1
	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-317.7,-30.8);
	this.instance_11.alpha = 0.012;

	this.instance_12 = new lib.Tween6("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-288,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},9).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,rotation:360,x:-288,y:0,alpha:1},9).wait(72));

	// FlashAICB
	this.instance_13 = new lib.Symbol3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(145.5,-63.5,1.371,1.371,0,0,0,-0.1,-0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70).to({_off:false},0).to({x:9,y:-65.5,alpha:0.281},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.8,-80.8,100.2,100);


(lib.男性剪影 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B4D16B").ss(0.6,1,1).p("ABRhvQgBAEg+BpQg1BbAGAXQgUgqgOgxQgehgAZgh");
	this.shape.setTransform(1.5,-27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8ED3F3").s().p("AgSAjQgJgOABgVQgBgUAJgOQAIgPAKAAQAMAAAHAPQAJAOgBAUQABAUgJAPQgHAPgMAAQgKAAgIgPg");
	this.shape_1.setTransform(-2.3,-11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231916").s().p("AgTAjQgHgOgBgVQABgUAHgOQAJgPAKAAQALAAAJAPQAHAOABAUQgBAUgHAPQgJAPgLAAQgKAAgJgPg");
	this.shape_2.setTransform(-1.3,-11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8979B4").s().p("AgEABQAOgMgIAQQgCgDgEgBg");
	this.shape_3.setTransform(43.4,-49.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8979B4").s().p("AgEABQAOgMgIAQQgCgDgEgBg");
	this.shape_4.setTransform(41.9,-49.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8979B4").s().p("AgEABQANgMgHAQQgCgDgEgBg");
	this.shape_5.setTransform(41,-50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#97A5D0").s().p("AgKATQgHgFADgFIAPgZQABgDAEAAQADgBACACQAHAEgDAGIgPAZQgCADgEAAIgEgBg");
	this.shape_6.setTransform(44.2,-50.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#97A5D0").s().p("AgMAYQgDgBgBgEQgBgDACgDIARghQABgDAEgBQADgBADABQAGAEgDAIIgRAgQgDAFgEAAIgEgBg");
	this.shape_7.setTransform(42.7,-51.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97A5D0").s().p("AgIAXQgHgDACgHIANgfQAAgDAEgBQADgBADABQAGADgCAHIgNAfQgBADgCABIgDABIgDgBg");
	this.shape_8.setTransform(41.6,-52.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004D72").s().p("AAAB8QhXgagLgYQgNgcgBgaQAAgaAPgMICYBbIAUjYIAmAFQAABFgCBFQgECLgJAEQgDABgFAAQgXAAhDgUg");
	this.shape_9.setTransform(30.6,-31.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8979B4").ss(1.1,0,0,4).p("AAkAAQAAAGgLAEQgKAEgPAAQgOAAgKgEQgLgEAAgGQAAgEALgFQAKgEAOAAQAPAAAKAEQALAFAAAEg");
	this.shape_10.setTransform(-3.1,-54.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231916").s().p("AgYAKQgLgEAAgGQAAgEALgFQAKgEAOAAQAPAAAKAEQALAFAAAEQAAAGgLAEQgKAEgPAAQgOAAgKgEg");
	this.shape_11.setTransform(-3.1,-54.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0084B5").s().p("AgqgNIBVgEIgMAhIg/ACg");
	this.shape_12.setTransform(5.1,-75.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0084B5").s().p("AgkgPIBHAAIACAdIg6ACg");
	this.shape_13.setTransform(-7,-75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231916").s().p("AgqA2QAGgLADgLIgSgaQgSgdACgWQACgVAfgHQAPgDAPAAQBgAOghAvQgKAOgWAQIgUANQgMAbgdAOQgOAHgMABQAIgBAKgWgAABAPQAEgCAbgSQAWgQAAgLQgBgLgRAAQgTAAgRgKQgHgFgEgFQgDAIgRAGQgVAGgDACQgHAGAJATQAJARALAHQAJAFAFgEQADgCABgDQAKANAGgCg");
	this.shape_14.setTransform(-2.5,-52);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231916").s().p("AgPgCIgBgMIAhAUIgFAJg");
	this.shape_15.setTransform(13.5,-76.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#97A5D0").s().p("AgGAgIgFgFIgGgmIAOgQQAOgOAEAJQAFAKgGAdQgGAdgGABIAAAAQgDAAgFgFg");
	this.shape_16.setTransform(15.6,-73.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231916").s().p("AAPAdIgKgkIgSAAIgJAkIhFAAIgUgqIgLgDIgBgKIBegCIAQAJIALADIAIgMIB2AAIAAAMIgQAHIgNAmg");
	this.shape_17.setTransform(-0.6,-75.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#68539D").s().p("AgRBNQgKgFgEgJIAmiOIgUCKIAtAIQgVANgOAAQgIAAgGgDg");
	this.shape_18.setTransform(-2.3,-68.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231916").s().p("AhWApQgmgLADgeQACgaAoALQAZAHAfARQgHgeAHgFIAFAEQgDAVABAMIACABQAogYAlgRQBMgjgPAqQgOAphPASQgmAIglABIgGAAQgQAAgQgFg");
	this.shape_19.setTransform(3.9,-88.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#97A5D0").s().p("AhkAfIAsj+QAjgGAqABQApAAAGAGQALAMAXESQgiAngoApQhNBRgYAEQghikAGgig");
	this.shape_20.setTransform(5.8,-64.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7389C0").s().p("AgWCaQgQgkgMgkIAOhGIAFhgIARgQIgLgoIAehCIACADQABgPArgIIgsD+QgGAiAhCkIgEABQgUgCgghHg");
	this.shape_21.setTransform(-5,-64.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#005D87").s().p("AgEFjQh5gEgigXQgngZAOhVQAHgrAOgmIgXkrQAXgLAYgOQAvgcADgNQAGgVgIgsQAmABAugfQAXgPAPgQQgNAgAQA1IASAuIBxAyQAOByAGB3QAODvgkAcQgjAchpAAIgbAAg");
	this.shape_22.setTransform(4.2,-15.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#004D72").s().p("AAACnQgMgCgwhgQgYgvgWgvIAVgPIBXCEIA5kCIAwCSQgWAvgYAwQgwBcgNAAIAAAAg");
	this.shape_23.setTransform(-20.3,-15.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CF7C53").s().p("ABvFdQgQgBgQgGIABkEQgKgMAAgVQAAgTAIgLIgijOQgaAPgygIQgZgEgUgHIg0DrIBQEcQgpAEgcgJIgqkBQgHgJAAgPQAAgOAGgJIgElTIEogcQAtBCgJA8QgEAegNARIggDXIAiEsQgNAJgVAAIgHAAg");
	this.shape_24.setTransform(4.4,46.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231916").s().p("AhYAaQgEgOArgNQAtgOABgFQADgLAcgOQAFAIAEABQAHAEAhgLIAAACIACABQAVAugWAIIgWAEQgQADgHAHQgTARgxAAQgxAAgEgTg");
	this.shape_25.setTransform(11.2,88.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BFDACC").s().p("AgNAdQgEgBgFgIIAAAAIgDgjQAKADAHgCQAJgCAQgMIAJAyQgZAHgJAAIgFAAg");
	this.shape_26.setTransform(16.3,82);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231916").s().p("AhmAXQgUgVAzgEIA3AAIArgiQAQALALgBQANgBATgGIAAABIADACQAQAOADAJQADAHgIAHQgMAIgjAFQggAJgiAFQgWADgSAAQgmAAgOgOg");
	this.shape_27.setTransform(-9.9,86.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BFDACC").s().p("AgYAbIgBg6IAMABQAKABAPgBIAOA3QgTAGgMABIgCAAQgHAAgKgFg");
	this.shape_28.setTransform(-4,81);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#97A5D0").s().p("AgEArIgQgkIAGgnQABgFAKgCIAWgFQABAKgKAFIgKADQABAGgBAIIAAAHIARAQQAKAKgMAXg");
	this.shape_29.setTransform(39,-49.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8979B4").s().p("AgfArIgJgWIAAgVQABgYADgIQACgGAPAEQAPADAEgKQABgGAMAJQASANAKADQgFAWgSAYIgSAVg");
	this.shape_30.setTransform(41.5,-49.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8979B4").s().p("AgIAmQgCgBgCgEIgCgFIAQg5QACgJAGAAQAFAAAAAGIgKA+QgCAGgEACIgEABIgDgBg");
	this.shape_31.setTransform(40.6,-55.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#97A5D0").s().p("AAKAXQgNgGABgLIACgMIgGgBQgGgCgDgCIgMgBQgLgBACgIIABgBIAjgDIAYAPIANAfIgMAFg");
	this.shape_32.setTransform(-32.6,-21.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8979B4").s().p("AAEgCQgBACABADQgPgDAPgCg");
	this.shape_33.setTransform(-37.8,-18.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8979B4").s().p("AAEgCQgCACACADQgPgDAPgCg");
	this.shape_34.setTransform(-37.9,-19.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8979B4").s().p("AAEgCQgCACACADQgPgDAPgCg");
	this.shape_35.setTransform(-37.9,-21.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8979B4").s().p("AAEgCQgCACACADQgPgDAPgCg");
	this.shape_36.setTransform(-37.9,-22.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#97A5D0").s().p("AgFAHQgGAAAAgHQAAgGAGAAIALAAQAGAAAAAGQAAAHgGAAg");
	this.shape_37.setTransform(-38,-18.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#97A5D0").s().p("AgHAHQgIAAAAgHQAAgGAIAAIAQAAQAHAAAAAGQAAAHgHAAg");
	this.shape_38.setTransform(-38.4,-19.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#97A5D0").s().p("AgIAHQgIAAAAgHQAAgGAIAAIARAAQAIAAAAAGQAAAHgIAAg");
	this.shape_39.setTransform(-38.5,-21.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#97A5D0").s().p("AgGAHQgIAAABgHQgBgGAIAAIAOAAQAGAAAAAGQAAAHgGAAg");
	this.shape_40.setTransform(-38.2,-22.6);

	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(-36.3,-22.2,1,1,0,0,0,9,7.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BFDACC").s().p("AgEgBQAEAAADABIABACQgIAAAAgDg");
	this.shape_41.setTransform(-35.4,-28.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E6F0EB").s().p("AgBABIABgHIACAAIgCAHIgBAGg");
	this.shape_42.setTransform(-36.9,-25.3);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36.3,-26.1,1,1,0,0,0,5.6,1.8);

	this.instance_2 = new lib.Path_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30.7,-28);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A9504C").s().p("AgFAAQAAgGAFgBQAGABAAAGQAAAIgGAAQgFAAAAgIg");
	this.shape_43.setTransform(-35.1,-27.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E6F0EB").s().p("AgJAkIAMhGIAEgCIACADIgNBFIgCABg");
	this.shape_44.setTransform(-35.6,-32.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00A741").s().p("AgFAPQgHgBgEgEQgEgEAAgGQAAgFAGgFQAGgEAIAAIAAgBIADABQAIABAFAEQAFAEAAAFQAAAHgGAEQgGAFgJAAg");
	this.shape_45.setTransform(-36.4,-27.5);

	this.instance_3 = new lib.Path();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-36.3,-28,1,1,0,0,0,5.7,0.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B4D16B").s().p("AgtAAQAGgEAnAAQAoAAAGAEQgGAFgoAAQgnAAgGgFg");
	this.shape_46.setTransform(-36.5,-14.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B4D16B").s().p("AAAAAQgngBgGAEIgBgBQAAgCAOAAQAOgCASAAQATAAAOACQAOAAAAACIAAABQgHgEgoABg");
	this.shape_47.setTransform(-36.5,-14.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#D4E6DD").ss(0.1,0,0,4).p("AAuAAQgGAFgoAAQgnAAgGgFIgBABQAAAFAuAAQAuAAAAgFg");
	this.shape_48.setTransform(-36.5,-14.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B4D16B").s().p("AgugBIABgBQAGAEAnAAQAoAAAHgEIAAABQgBAEguAAQguAAAAgEg");
	this.shape_49.setTransform(-36.5,-14.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("ABeAAQAAAEgYACQgaADgnAAQgnAAgegDQgdgCAAgEQAAgDAdgDQAdgCAoAAQAnAAAaACQAYADAAADg");
	this.shape_50.setTransform(-36.2,-30.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B4D16B").s().p("Ag/AGQgegCAAgEQAAgDAegDQAcgCAnAAQAoAAAZACQAYADAAADQAAAEgYACQgZADgoAAQgnAAgcgDg");
	this.shape_51.setTransform(-36.2,-30.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8979B4").s().p("AgZAXQgEABgEgCQgEgCgDAAIgCgBIgBABIAEgvQAKAAAMABQAZAEAOALQAPAKAFAIIACAGIgWALIgUADIgKABQgNAAgEgFg");
	this.shape_52.setTransform(-33.3,-20.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#B4D16B").ss(0.6,1,1).p("AhKARQAbgkBBAEQAaACARAIQARAIgDAL");
	this.shape_53.setTransform(2.1,-39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_3},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.instance_2},{t:this.instance_1},{t:this.shape_42},{t:this.shape_41},{t:this.instance},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.男性剪影, new cjs.Rectangle(-46.6,-93,92.3,186.1), null);


(lib.毛利族茅屋 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC8965").s().p("ABWjAIAMgEIgRBBIAWgPIiJEAIB2kOIi6Fmg");
	this.shape.setTransform(-63.6,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEBB24").s().p("AADgOIAGAOIgRAPg");
	this.shape_1.setTransform(32.6,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEBB24").s().p("AgFgOIAHgKIAEAIIgDApg");
	this.shape_2.setTransform(30.8,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEBB24").s().p("AALARQgDgEgKgKIgKgIIAHgMIASAjg");
	this.shape_3.setTransform(29.6,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEBB24").s().p("AgLABIACgMIAWAXg");
	this.shape_4.setTransform(29,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEBB24").s().p("AgWgHIAtAFIgXAKg");
	this.shape_5.setTransform(31,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E09032").s().p("AgWADIAGgEQAJgFAJAAIAVANg");
	this.shape_6.setTransform(31,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E09032").s().p("AgQAVIgBgGIASgmIARAoIgCAHg");
	this.shape_7.setTransform(31.3,17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9504C").s().p("AgKAGQgFgDAAgDQAAgDAFgCQAEgCAGAAQAHAAAEACQAFACAAADQAAADgFADQgEACgHAAQgFAAgFgCg");
	this.shape_8.setTransform(33.6,14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09032").s().p("AgPAIQgHgDAAgFQAAgEAHgDQAHgDAIAAQAKAAAGADQAHADAAAEQAAAFgHADQgGADgKAAQgIAAgHgDg");
	this.shape_9.setTransform(33.6,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A9504C").s().p("AgNAAQAAgCAEgCQAEgCAFAAQAGAAAEACQAEACAAACQAAAHgOAAQgNAAAAgHg");
	this.shape_10.setTransform(28.7,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E09032").s().p("AgPAIQgHgDAAgFQAAgEAHgDQAHgDAIAAQAKAAAGADQAHADAAAEQAAAFgHADQgGADgKAAQgIAAgHgDg");
	this.shape_11.setTransform(28.7,14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A9504C").s().p("AgsAAQAAg1Asg0QAtA1AAA0QAAA1gtA1Qgsg0AAg2g");
	this.shape_12.setTransform(31.2,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#765C33").s().p("AgBBPQgZgpgBgmQABgmAZgoQALgUANgNIAEAGQgrA0gBA1QABA2ArA0IgEAFQgNgMgLgUg");
	this.shape_13.setTransform(28.4,15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#765C33").ss(2.6,1,1).p("AATACIgmgD");
	this.shape_14.setTransform(-3.4,58.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B9927A").ss(2.6,1,1).p("AgxAIIBjgP");
	this.shape_15.setTransform(31.2,39.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B9927A").ss(2.6,1,1).p("AhKAJICVgS");
	this.shape_16.setTransform(31.4,42.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A08268").ss(2.6,1,1).p("AgmghIBNBD");
	this.shape_17.setTransform(42.1,38.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#765C33").ss(2.6,1,1).p("AgzgqIBnBV");
	this.shape_18.setTransform(40.8,41.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A08268").ss(2.6,1,1).p("AghAvIBChd");
	this.shape_19.setTransform(18.4,44.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#64320C").s().p("AAEAeIgIgpIgBgqIADArIAIApIgEAYg");
	this.shape_20.setTransform(-40.8,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#64320C").s().p("AgDAKIAFgKIAAgMIgDgLIAFALIgBAMIgEAJIAAAPg");
	this.shape_21.setTransform(-45.3,3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#64320C").s().p("AABgiIADApIgHAbg");
	this.shape_22.setTransform(-32.1,-2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#64320C").s().p("AgChGIAFACIAACLg");
	this.shape_23.setTransform(-33.8,-22.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#64320C").s().p("AAAAyIgBhkIADBlg");
	this.shape_24.setTransform(-44.1,66.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#64320C").s().p("AAAgcIABA3IgBACg");
	this.shape_25.setTransform(-27,69.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#64320C").s().p("AAAA1IAAhrIABBtg");
	this.shape_26.setTransform(-34,67.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#64320C").s().p("AAAAtIgBhaIADBbg");
	this.shape_27.setTransform(-31.5,68.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#64320C").s().p("AAAgNIABAaIgBABg");
	this.shape_28.setTransform(-31.9,52.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#64320C").s().p("AAAgEIABgOIgBAlg");
	this.shape_29.setTransform(-33.2,51.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#64320C").s().p("AAAgIIgCgDIACgVIAAAWIADABIAAAqg");
	this.shape_30.setTransform(-40.3,56.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#64320C").s().p("AgHgCIAPgMIgNANIgCAQg");
	this.shape_31.setTransform(-41.2,39.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#64320C").s().p("AAAADIgBhFIABBAQADBAgCAFIAAAAQgBAAAAhAg");
	this.shape_32.setTransform(-28.6,-10.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#64320C").s().p("AABAdQgBgFgBg0IACAeQABAbgBAAIAAAAg");
	this.shape_33.setTransform(-30.1,-23.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#64320C").s().p("AgBAQIACgoIAAAnIABAKg");
	this.shape_34.setTransform(-39.1,29.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#64320C").s().p("AAAgOQACAHgBALIgBALg");
	this.shape_35.setTransform(-31.7,9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#64320C").s().p("AAAgMQACACgBAMIAAAMQgCgHABgTg");
	this.shape_36.setTransform(-34.8,5.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#64320C").s().p("AAAgVIABASQABASgCAHg");
	this.shape_37.setTransform(-35.2,-0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#64320C").s().p("AgCAJIgBgtIAHBJg");
	this.shape_38.setTransform(-45,-1.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#64320C").s().p("AgBgnIACAlQACAlgCAGg");
	this.shape_39.setTransform(-43.3,33.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#64320C").s().p("AABAsQgBgFgBhTQABALABAoQABAmgBAAIAAgBg");
	this.shape_40.setTransform(-43.8,22.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#64320C").s().p("AgGhrQAEARAEBkIAFBhg");
	this.shape_41.setTransform(-45.7,25.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9B5528").s().p("AABAgIAAgNIgBgHIgCgqIAFA+g");
	this.shape_42.setTransform(-47.1,-4.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#511C00").s().p("AABAoIgBgIIgBhGIgBgHIABgJIgCgZIACgEIAAAEIACAYIgBAHIABAHIAAAIIABALIAAAMIgBAsIADAXIAAAbg");
	this.shape_43.setTransform(-47.9,-18.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8E4113").s().p("AAAAtIAAgDIAAgEIAAgDIAAgJIAAgCIAAgGIABgFIgDgQIABgGIABgCIgCgHIABgDIgBgEIAAgEIAAgEIAAgDIABgEIgBgFIAAgGIABgEIAAAFIABAJIgBAHIABAEIAAAEIAAAEIAAAHIAAAOIAAADIABAFIACAGIgCATIAAAEIABAEIABAHIgBAFIAAAEg");
	this.shape_44.setTransform(-43.1,66.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8E4113").s().p("AAEA+IgCgHIgBgEIABgIIgCgFIgBgSIAAgRIgBgKIgCgHIAEgYIgBgKIgBgDIACgLIgBgGIABAJIAAAGIAAADIAAAJIAAAEIAAAQIgCAGIACATIAAAEIAAAEIAAADIAAAGIABABIAAAFIABAJIACAKIgBAEIABAGIABAMg");
	this.shape_45.setTransform(-39.1,-22.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9B5528").s().p("AACA4IgDh2IABAAIACB9g");
	this.shape_46.setTransform(-42.7,-22.9);

	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(-45.6,-25,1,1,0,0,0,0.2,3.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#622725").s().p("AAFAoQgogDgJhMQAHAUAPATQAcAjAngIIgMAHQgNAGgLAAIgEAAg");
	this.shape_47.setTransform(-31.2,17.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9B5528").s().p("AguAiIABgDQAMAFARgIQAhgQAeg7IgXA9QgSAigWAAQgOAAgQgOg");
	this.shape_48.setTransform(-43.2,17.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#72312E").s().p("AgngZQAjAFAqAdIACARQgJgahGgZg");
	this.shape_49.setTransform(-42.9,-16.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D19464").s().p("AgegOIgPgFQAYgCAjATIAgASIAAAEQgqgdgigFg");
	this.shape_50.setTransform(-43.7,-17.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#72312E").s().p("AgngZQAjAFAqAdIACARQgJgahGgZg");
	this.shape_51.setTransform(-42.9,-12.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D19464").s().p("AgegOIgPgFQAYgCAjATIAgASIAAAEQgqgdgigFg");
	this.shape_52.setTransform(-43.7,-13.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#72312E").s().p("AgngZQAjAEAqAeIACARQgJgahGgZg");
	this.shape_53.setTransform(-42.9,-9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D19464").s().p("AgegOIgPgFQAYgCAjATIAgASIAAAEQgrgeghgEg");
	this.shape_54.setTransform(-43.7,-10.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#72312E").s().p("AgngZQAjAFAqAdIACARQgJgahGgZg");
	this.shape_55.setTransform(-42.9,-5.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D19464").s().p("AgegOIgPgFQAYgCAjATIAgASIAAAEQgqgdgigFg");
	this.shape_56.setTransform(-43.7,-6.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#72312E").s().p("AglAJQAqgdAjgFQhGAZgJAag");
	this.shape_57.setTransform(-32.4,-16.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C06C36").s().p("AgtAQQAOgKASgIQAjgTAYACIgOAFQgjAFgqAdg");
	this.shape_58.setTransform(-31.6,-17.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#72312E").s().p("AglAJQAqgdAjgFQhGAZgJAag");
	this.shape_59.setTransform(-32.4,-12.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C06C36").s().p("AgtAQQAOgKASgIQAjgTAYACIgOAFQgjAFgqAdg");
	this.shape_60.setTransform(-31.6,-13.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#72312E").s().p("AglAJQAqgeAjgEQhGAZgJAag");
	this.shape_61.setTransform(-32.4,-9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C06C36").s().p("AgtAQQAOgKASgIQAjgTAYACIgOAFQgiAEgrAeg");
	this.shape_62.setTransform(-31.6,-10.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#72312E").s().p("AglAJQAqgdAjgFQhGAZgJAag");
	this.shape_63.setTransform(-32.4,-5.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C06C36").s().p("AgtAQQAOgKASgIQAjgTAYACIgOAFQgjAFgqAdg");
	this.shape_64.setTransform(-31.6,-6.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#81390D").s().p("AghgVIABAAIBCAEIg5Amg");
	this.shape_65.setTransform(-33.5,32.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9B5528").s().p("AgjgNIA9gIIAKAqIgBABg");
	this.shape_66.setTransform(-39.4,32.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C77C47").s().p("AgdBkIgHjLIAkC2IAlAXIgDACg");
	this.shape_67.setTransform(-33.5,20.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CD8B58").s().p("AghBrIAcgcIAfi7IABAGIAHDLIgDAAIg9AIg");
	this.shape_68.setTransform(-39.9,20.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B2784C").s().p("AgIANQgDgFAAgIQAAgHADgFQAEgGAEAAQAFAAAEAGQADAFAAAHQAAAIgDAFQgEAGgFAAQgEAAgEgGg");
	this.shape_69.setTransform(-31.1,9.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7E4E47").s().p("AgIAOQgEgFgBgJQABgIAEgFQADgHAFAAQAGAAADAHQAEAFAAAIQAAAJgEAFQgDAHgGAAQgFAAgDgHg");
	this.shape_70.setTransform(-31.1,9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#380700").s().p("AgiADQASgPARgJQAkgQgCAmIgNAVQgGAEgHAAQgRAAgagXg");
	this.shape_71.setTransform(-31.7,8.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A56F46").s().p("Ag0ADQAoggASgHQArgQAFA3IgFAMQgGANgKAHQgJAGgLAAQgaAAgngmg");
	this.shape_72.setTransform(-31.3,8.8);

	this.instance_1 = new lib.Path_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.2,9,1,1,0,0,0,5.4,3.9);
	this.instance_1.alpha = 0.719;

	this.instance_2 = new lib.Path_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.6,11.4,1,1,0,0,0,5.8,2.8);
	this.instance_2.alpha = 0.672;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B78C69").s().p("AALgKQgZAIgjAcIgHgHQAegZAcgNQA6gZgDBGQgCgxgsANg");
	this.shape_73.setTransform(-31.6,6.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CD8B58").s().p("AgIANQgDgFAAgIQAAgHADgFQAEgGAEAAQAFAAAEAGQADAFAAAHQAAAIgDAFQgEAGgFAAQgEAAgEgGg");
	this.shape_74.setTransform(-43.7,9.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B18A81").s().p("AgIAOQgEgFgBgJQABgIAEgFQADgGAFgBQAGABADAGQAEAFAAAIQAAAJgEAFQgDAHgGAAQgFAAgDgHg");
	this.shape_75.setTransform(-43.7,9.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#64320C").s().p("AgVAWQgKgHgDgOQgCgmAkAQIAjAYQgaAXgRAAQgHAAgGgEg");
	this.shape_76.setTransform(-43,8.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CD8B58").s().p("AgfAjQgQgLgEgVQAEg3AqAQQASAHAnAgQgmAmgaAAQgLAAgIgGg");
	this.shape_77.setTransform(-43.3,8.9);

	this.instance_3 = new lib.Path_2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-43.3,9.1,1,1,0,0,0,5.2,3.9);
	this.instance_3.alpha = 0.719;

	this.instance_4 = new lib.Path_1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-42.9,11.5,1,1,0,0,0,5.7,2.8);
	this.instance_4.alpha = 0.672;

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D9A67D").s().p("AgBgTQARAIAWAPIASAPIgHAHQgigcgYgIQgrgNgCAxQgDhGA4AZg");
	this.shape_78.setTransform(-43,6.6);

	this.instance_5 = new lib.Path_0_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-35.7,54.4,1,1,0,0,0,9.5,3);
	this.instance_5.alpha = 0.672;

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-36.5,39,1,1,0,0,0,9.1,1.7);
	this.instance_6.alpha = 0.719;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9C7454").s().p("AgGgEIAPgEIABALQgJAEgKACg");
	this.shape_79.setTransform(-33.4,50.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9C7454").s().p("AgNgCIACgIIAVAKIAEALQgOgGgNgHg");
	this.shape_80.setTransform(-42.7,49.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9C7454").s().p("AgQACIADgJQANAEANAAIAEALQgPAAgSgGg");
	this.shape_81.setTransform(-39.3,50.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9C7454").s().p("AgKgFIATgBIAEALQgLACgOAAg");
	this.shape_82.setTransform(-36.1,51);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9C7454").s().p("AgLAAQALgEAQgLIACAKQgSANgRAIg");
	this.shape_83.setTransform(-30.2,49.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#9C7454").s().p("AgEgEIAJgCIgDANIgDAAg");
	this.shape_84.setTransform(-34.6,50.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#9C7454").s().p("AgXAQQAcgSASgXQABAAAAAAQAAABAAAAQgBABAAAAQAAABgBABIgBAFIgLAOQgNAPgRANg");
	this.shape_85.setTransform(-26.3,46);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9C7454").s().p("AAAAGIgDgLIAHAAIgCALg");
	this.shape_86.setTransform(-37.6,51.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9C7454").s().p("AgSgKQgFgFACgDQAWATAVALIgCAIQgTgNgTgRg");
	this.shape_87.setTransform(-46.1,47.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9C7454").s().p("AAAAFIgEgKIAIACIgCAJg");
	this.shape_88.setTransform(-41.2,50.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9C7454").s().p("AgFgDIALgFIgGAQIgDABg");
	this.shape_89.setTransform(-32,50);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#DB9A67").s().p("AAFgWIAJAdQgPALgMAEg");
	this.shape_90.setTransform(-30,46.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DB9A67").s().p("AACgVIAGAnIgPAFg");
	this.shape_91.setTransform(-33.4,47.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEB78A").s().p("AgKANIAIgjIANAtIgVgKg");
	this.shape_92.setTransform(-42.8,47.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EEB78A").s().p("AgNAXIAMgyIAPA3QgNgBgOgEg");
	this.shape_93.setTransform(-39.4,47.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DB9A67").s().p("AgBgXIALAuIgTABg");
	this.shape_94.setTransform(-36.1,48);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#231916").s().p("AAGgYIAHAgQgNALgNAGg");
	this.shape_95.setTransform(-29.7,46.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#231916").s().p("AACgYIAGAsIgPAFg");
	this.shape_96.setTransform(-33.1,47.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#231916").s().p("AgLAPIAJgoIAOAzQgMgFgLgGg");
	this.shape_97.setTransform(-42.5,47.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#231916").s().p("AgNAaIAMg4IAPA9QgLAAgQgFg");
	this.shape_98.setTransform(-39.1,47.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#231916").s().p("AgCgaIAMAzQgIACgLAAg");
	this.shape_99.setTransform(-35.9,48.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#231916").s().p("AgRAFQAPgMATgCIgDAJQgOABgMAJg");
	this.shape_100.setTransform(-44.6,42.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#231916").s().p("AgMAFQAMgLAMgFIgCAKQgKAEgJAJg");
	this.shape_101.setTransform(-34.4,42.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#231916").s().p("AgLADIgCgIQANgBAOAFIgDAHQgLgDgLAAg");
	this.shape_102.setTransform(-41.2,42.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#231916").s().p("AgJAAIgCgJQALAFAMAHIgCAHQgLgHgIgDg");
	this.shape_103.setTransform(-38,43.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#231916").s().p("AgMABIgBgIQANACAOAGIgEAHQgMgFgKgCg");
	this.shape_104.setTransform(-27.3,42.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#231916").s().p("AgSgBQARgHAUADIgEAIQgRgCgPAFg");
	this.shape_105.setTransform(-30.9,41.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#231916").s().p("AAAgDIACgBIACAIIgHABg");
	this.shape_106.setTransform(-42.8,42.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#231916").s().p("AgKAAIADgHQAJAEAJAFIgEAGg");
	this.shape_107.setTransform(-25.1,43);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#231916").s().p("AgFACIADgHIAFACIACAJg");
	this.shape_108.setTransform(-39.5,42.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#231916").s().p("AgBgDIAEgCIABAIIgHADg");
	this.shape_109.setTransform(-33,42.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#231916").s().p("AgDADIADgHIADAAIABAJg");
	this.shape_110.setTransform(-29,41.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#231916").s().p("AgGACIABgGIAFADIAFgFIADAGIgIAHg");
	this.shape_111.setTransform(-36.2,44.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#231916").s().p("AgLAKQAHgMAMgKIAEAFQgKAHgJANg");
	this.shape_112.setTransform(-47.2,44.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EEB78A").s().p("AgNgGQANgJAOgCIgLAjg");
	this.shape_113.setTransform(-44.6,44.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#DB9A67").s().p("AgPgTQAPgFAQABIgYAvg");
	this.shape_114.setTransform(-31,44.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EEB78A").s().p("AgJgUQAIADALAHIgJAfg");
	this.shape_115.setTransform(-38,45.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EEB78A").s().p("AgLgUQALAAAMADIgMAmg");
	this.shape_116.setTransform(-41.2,44.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DB9A67").s().p("AgLgTQALABAMAGIgRAgg");
	this.shape_117.setTransform(-27.4,44.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#DB9A67").s().p("AgJgJQAJgJAKgEIgKAtg");
	this.shape_118.setTransform(-34.5,45);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#231916").s().p("AgPAAIAPgNQAKgJAGgBIgPAvg");
	this.shape_119.setTransform(-44.1,44.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#231916").s().p("AgRgPIARgHQALgGAHABIgbA4g");
	this.shape_120.setTransform(-30.6,44.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#231916").s().p("AgKgUQAIADAFAAQAFgBADACIgLAlg");
	this.shape_121.setTransform(-37.6,46.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#231916").s().p("AgNgRIANgEQAIgEAFACIgPAvg");
	this.shape_122.setTransform(-40.7,45.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#231916").s().p("AgNgSIANgBQAJgDAFADIgWAog");
	this.shape_123.setTransform(-26.9,44.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#231916").s().p("AgKgDIAKgNQAGgJAFgDIgMA5g");
	this.shape_124.setTransform(-34.1,45.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#64320C").s().p("Ah1gEQAPgWAWgIQAkgMAsAfQAKgOAUgIQAngRAxAdQgkArguARQgXAJgWAAQg2AAg2gwg");
	this.shape_125.setTransform(-36.2,46.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A0582A").s().p("AghAAIgUghQAwgCA4AfIADAnQgigUg1gPg");
	this.shape_126.setTransform(-42.8,2.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#72312E").s().p("Ag0AmIgDgnIADABQADgIAPgLQAfgTA7gBIgBACQAAAKgPAKQhDARgXAog");
	this.shape_127.setTransform(-32.1,2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#AA6D40").s().p("AhOFuQgRiBAgj9QAGgvgEhNQgDhMgKg7QgDgOgBgUIACACQAXgoBDgSQgFADgFACIAXAcQAMAQADAMQADALgMCbIgMCXQAQAGAQAJQAgATAAATQAAATgaAgQgNARgOAMQAKAdAGBRQAHBQgGAKQgGAIgwAHQglAFgYAAIgMAAg");
	this.shape_128.setTransform(-29.5,36.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CD8956").s().p("AACFeQgKgEgLgJQgLgJAHizQgOgLgOgOQgcgdABgRQABgRAZgUIAZgRQgjkJgBgmQgBgXAPgcIAPgXIgDgEQAqAMAwAcQACAUACAPQAMBEAGBEQAHBSgGAsIgUCiQgNCHALBRQgigCgSgGg");
	this.shape_129.setTransform(-42.8,37.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#AA6D40").s().p("Ag4CdQgGhxAAjKQAoAAAiALQAkALANASQAFBAgLCsQg7ABgfAUQgPAKgDAKg");
	this.shape_130.setTransform(-32,-13.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CD8956").s().p("AgtCAIgNjTQgBglAjgUQAdgRAwAAQAADKAGBxQg5gggvACg");
	this.shape_131.setTransform(-43.6,-14);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#BC8965").s().p("AguBfIgUAdIgOgfIjCgsIgRAMIgJgOIgbAaIAAgkIgsAxIARgxIg6A/IAMg/IgWAWIgEgPIgZAlIAZhJIFXBJIIXkCIhVCUIAsh+IgxA/IAGgeIgJgCIkbC2IgWAxIgXgiIgfAsIABgfIg+Bcg");
	this.shape_132.setTransform(-11.8,-14.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#782A00").s().p("AiKF5QiqgNiGgTQiNgUgLgPQgCgJB1j+QB1j8gDgLQAMALCxApQCyApgGgPQACAFEBiAQEJiDAVACQAMACAqA8QgYAbgcAjIgBAAQAAgEggA+QglBJgkBSQhtD5gbCnQgEAciWAAQhqAAizgOg");
	this.shape_133.setTransform(-18.5,5.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#765C33").s().p("AiFAHIDog+IAAAKIAyAiIkpBDg");
	this.shape_134.setTransform(43.8,-15.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#B9927A").s().p("Ah4ALIEAhEIglAfIgCAVIjoA+g");
	this.shape_135.setTransform(44,-20.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EBC9A5").s().p("AgjAOIACgeIAkgfIACAAIAfAcIgQBCIgGABg");
	this.shape_136.setTransform(57.3,-21.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#782A00").s().p("AiFj3QAdgjAYgbQBOBvBRDwQBVD8gwAQQhFi6i0lzg");
	this.shape_137.setTransform(49.2,3.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#765C33").ss(2.6,1,1).p("AhKhNICVCb");
	this.shape_138.setTransform(-54.3,54.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#A08268").ss(2.6,1,1).p("AgigHIBFAP");
	this.shape_139.setTransform(-58.1,53.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#765C33").ss(2.6,1,1).p("AgrgGIBWAN");
	this.shape_140.setTransform(-57.3,56.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#A08268").ss(2.6,1,1).p("AgygHIBlAP");
	this.shape_141.setTransform(-55.8,60.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#765C33").ss(2.6,1,1).p("AhPhXICgCv");
	this.shape_142.setTransform(-53.1,48.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#A08268").ss(2.6,1,1).p("AhVhcICrC5");
	this.shape_143.setTransform(-53,51.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#765C33").ss(2.6,1,1).p("AAChoIgDDQ");
	this.shape_144.setTransform(-62.8,50);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#A08268").ss(2.6,1,1).p("AgHhnIAPDP");
	this.shape_145.setTransform(-65.1,49.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#765C33").ss(2.6,1,1).p("AgIhjIARDH");
	this.shape_146.setTransform(-67.4,49.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#A08268").ss(2.6,1,1).p("AgsAAIBZAA");
	this.shape_147.setTransform(-5.4,61.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#765C33").ss(2.6,1,1).p("Ag8AAIB5AB");
	this.shape_148.setTransform(-7.2,64.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#A08268").ss(2.6,1,1).p("AhNgEICbAJ");
	this.shape_149.setTransform(-8.7,67.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#765C33").ss(2.6,1,1).p("ABfhBIi9CD");
	this.shape_150.setTransform(-10.7,59.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#B9927A").ss(2.6,1,1).p("ABuhPIjbCf");
	this.shape_151.setTransform(-12.5,57.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#A08268").ss(2.6,1,1).p("Ah9BbID7i1");
	this.shape_152.setTransform(-14.3,56);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#765C33").ss(2.6,1,1).p("ACJhmIkRDN");
	this.shape_153.setTransform(-16,54.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#765C33").ss(2.6,1,1).p("AAKB0IgTjn");
	this.shape_154.setTransform(-0.1,55.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#A08268").ss(2.6,1,1).p("AAHB2IgNjr");
	this.shape_155.setTransform(3,55.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#765C33").ss(2.6,1,1).p("AAIByIgPjj");
	this.shape_156.setTransform(6,55.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CD7C31").s().p("AADB6Qk7gzgqgDQAThEgYhSIgdhFIL9AdIgKBHQgEBcAaBtQgeACggAAQiIAAi8geg");
	this.shape_157.setTransform(-30.9,52.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A08268").s().p("Ag1hpIBcgiIAPEMIhZALg");
	this.shape_158.setTransform(10.3,53.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B9927A").s().p("AjDAEIFpg/IAdATQAWAVggAQImEA/g");
	this.shape_159.setTransform(27.5,30.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#AB835F").s().p("AjEAEIFqg/IAdATQAWAVghAQImDA/g");
	this.shape_160.setTransform(32,35);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A9504C").s().p("AAzFDIjToeIA4hpQBJCWBECcQCLE2gQAhg");
	this.shape_161.setTransform(45.3,2.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E09032").s().p("AAgkuIC3IbImtBCg");
	this.shape_162.setTransform(30.1,5.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B9927A").s().p("AgmCDIgIj6IBKgSIATEIIg/ALg");
	this.shape_163.setTransform(48.8,47.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#765C33").ss(2.6,1,1).p("Ag5BNIBziZ");
	this.shape_164.setTransform(20.8,45.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#765C33").s().p("Ag6AEIgPgdICTAUIgGAfg");
	this.shape_165.setTransform(-62.4,-9.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#B9927A").s().p("AhMgBIAAgBIAigOIB2ALIgEAWg");
	this.shape_166.setTransform(-62.1,-11.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#503D1C").s().p("AiphoIFIgsIALENIlPAcg");
	this.shape_167.setTransform(30.1,48);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CD9680").s().p("AgJAUQgFgIAAgMQAAgLAFgIQAEgJAFABQAGgBAEAJQAFAIAAALQAAAMgFAIQgEAJgGgBQgFABgEgJg");
	this.shape_168.setTransform(53.8,0.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CD9680").s().p("AgNATQgFgIAAgLQAAgKAFgIQAGgIAHAAQAIAAAGAIQAFAIAAAKQAAALgFAIQgGAIgIAAQgHAAgGgIg");
	this.shape_169.setTransform(50.8,1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#CD9680").s().p("AgLAUQgEgIAAgMQAAgLAEgIQAFgJAGAAQAHAAAFAJQAEAIAAALQAAAMgEAIQgFAJgHAAQgGAAgFgJg");
	this.shape_170.setTransform(55.7,2.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#8DB637").s().p("ABoBSQgBgBACgOQACgNgBgBQgBgBgIAIQgIAJgBgBQgBgBACgNQADgNgBgBQgCgCgHAJQgIAJgBgBQgBgBACgNQADgNgBgBQgBgBgIAJQgIAIgBgBQgBAAACgNQACgNgBgBQgCgBgHAJQgHAJgBAAQgBgBACgNQACgNgCgBQgBAAgHAJQgHAKgBgBQgBAAABgNQACgMgCgBQgBgBgHAJQgHAKgBAAQgBgBABgNQABgMgBgBQgBAAgGALQgFAJgCAAQgBgBAAgMQAAgNgBgBQgCAAgFALQgGAKgBgBQgCAAAAgMQAAgNgBgBQgCAAgFALQgGALgBAAQgBAAgBgNQgBgNgBgBQgCAAgFAMQgFALgBAAQgBAAgBgNQgCgNgBAAQgCgBgEAMQgFAMgBAAQgCAAgBgNQgCgNgCAAQgBAAgEAMQgFAMgBAAQgCAAgBgNQgCgNgCAAQgCAAgEANQgEAMgBAAQgCAAgBgNQgCgNgBAAQgCAAgFAMQgFANgBAAQgCgBABgSIAAgBIgBgFIAAgCQgIgRADgBQABgBAJAJQAIAJACgBQACAAgCgNQgBgNACgBQACgBAHALQAHALABgBQACAAAAgNQABgNACAAQACgBAFAMQAGAMABgBQACAAACgMQACgNACAAQACAAAEAMQAEAMACAAQABAAAEgMQADgNACAAQACABADAMQADANABAAQACABAEgMQAEgMACAAQACABACANQACANABAAQACAAAGgLQAFgLACAAQABABAAANQABANABABQACAAAGgKQAGgLACABQACABgBANQAAANACABQABABAIgKQAHgKABABQACABgCANQgBANABABQACABAIgJQAIgJACABQABACgCAMQgDANABABQACABAJgHQAJgIABACQACABgEAMQgEANABABQACAAAJgFQAKgHABACQACACgFAKQgFAMABABQABABALgEQAKgFABACQABACgGAKQgGAKABACQABACALgDQALgDABABQABACgIAJQgIAJABABQABACALAAQAMAAAAACQABACgFADIgJAEIgBgBQgBAAgGAKQgGAJgCAAIAAAAg");
	this.shape_171.setTransform(69.7,5.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#8DB637").s().p("AABgBQAGgEACABIABACIAAAEIgJACIgKABIAKgGg");
	this.shape_172.setTransform(56,1.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#8DB637").s().p("AAAABIgGgHQAAgBAFgDIAIAVIgHgKg");
	this.shape_173.setTransform(81.9,12.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#B4D16B").s().p("AimBKQAGgNADgDQAGAFAAABQgBACgMALIgHAGIAFgJgAiUBGQgGgOgBABIgCABIgFgEQgLgIACgDQABgBANACQAOADABgDQABgBgIgMQgIgMACgCQABgCANAGQAMAGACgCQABgCgGgOQgGgMACgCQABgCAMAHQALAIACgCQACgBgFgOQgEgPACgBQACgCAKAKQALAJACgBQABgBgCgQQgDgPACgCQACgBAJALQAKALACgBQABgBgBgQQgBgQACgBQACgBAIAMQAJANACgBQABgBAAgQQAAgQACgBQADgBAHAOQAHANACgBQACAAACgQQABgQACgBQACAAAGAOQAGAOACgBQACAAACgPQACgQACAAQADAAAEAOQAFAPACgBQACAAAEgPQAEgPACAAQADAAADAPQAEAPABAAQADAAAFgOQAFgPACAAQADABACAPQACAPACABQACAAAHgOQAGgOACABQADAAAAAQQABAQACAAQACABAIgNQAIgNACABQACABgBAPQgBAQACABQACABAKgMQAJgLACABQACABgDAPQgDAPABABQACACAMgJQAMgJABABQACACgHANIgDAGQADAAALAKIAHAHIgIgDQgMgDgDgCIABgHQgDAFABABIABABIgBAHQgBAOgCAAQgCAAgEgPQgEgPgCgBQgCAAgEAPQgDAOgCgBQgCAAgDgOQgDgQgCAAQgCAAgEAPQgEANgCAAQgBAAgEgOQgDgQgCAAQgCAAgEAPQgEAOgBAAQgCAAgEgOQgDgPgCAAQgCAAgDAPQgEAOgBAAQgCAAgEgOQgEgPgCAAQgCABgDAPQgDAOgBAAQgCAAgFgNQgEgPgCAAQgCABgCAPQgCAPgBAAQgCAAgFgNQgFgOgCAAQgCABgBAPQgBAPgCAAQgBABgGgOQgGgNgCAAQgCABAAAOQAAAQgCAAQgCABgGgNQgHgNgBABQgCABAAAOQAAAQgBAAQgCABgHgNQgHgNgCABQgBABAAAPQABAQgCABQgBAAgIgMQgHgNgCABQgCABACAQQABAQgCABQgBABgIgNQgIgMgCABQgCABACAQQABAQgBABQgCABgIgMQgIgMgCABQgCACACAPQACAQgCABQgCACgIgMQgIgMgBABQgCABABARQABAQgBABIgBAAQgCAAgGgMg");
	this.shape_174.setTransform(35.8,1.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B4D16B").s().p("AiBCKQABgSACgDIgGAAQgMgCAAgDQAAgCANgGQANgFABgDQAAgCgLgGQgMgHABgDQABgCANgCQANgCABgDQAAgCgKgJQgKgJABgCQABgDANABQANAAABgCQABgCgJgLQgKgLACgCQABgCANACQAMADABgDQABgCgIgMQgIgKABgDQACgCAMAEQANAFABgCQABgCgHgNQgHgNABgCQACgCAMAGQAMAGABgCQABgCgFgOQgGgOABgCQACgCALAIQALAIACgCQABgBgEgPQgFgPABgBQACgCALAJQALAIABgBQACgBgDgQQgDgPABgCQACgBAKAKQAJAKACgBQABgBgBgQQgCgQACgBQACgCAHAMQAJAMACgBQACgBgBgRQAAgQACgBQACgBAIANQAHAMACAAQACgBABgQQABgQACgBQADgBAGAOQAGANACAAQACgBADgQQACgQACAAQADgBAEAPQAFAPACgBQACAAAEgQQAFgPACAAQACAAACAPQADAPABAAQACABAHgPQAIgOABAAQADAAgCAQIgBAGIgCABQgBABAEAPQAFAPgCABQgCAAgJgLQgKgMgCABQgBABACAPQACAQgCABQgCAAgIgLQgJgMgCABQgCAAACAQQACAPgCABQgBABgJgMQgIgLgCABQgCABACAPQADAPgCABQgBABgJgLQgJgMgCACQgCABADAPQADAPgBABQgCABgJgLQgJgLgCACQgBABADAPQADAPgBABQgBABgKgKQgJgKgCABQgBABAEAPQADAPgBABQgBABgJgKQgKgJgBABQgCACAFAOQAFAOgBABQgCACgKgJQgLgJgBACQgCABAGAOQAFAOgBABQgBABgLgIQgLgHgBACQgCABAGANQAGAOgBABQgBACgLgIQgLgHgBACQgCACAHANQAGAOgBABQgBACgMgHQgLgHgBACQgCACAHANQAHAOgBABQgBACgLgGQgMgHgBACQgCACAIANQAHAOgBABQgBACgLgGQgMgFgBABQgCACAIAOQAHANAAABQgCACgLgGQgLgGgBACQgCACAHAOQAHAOgBACQgBACgKgJIgFgEQAAAEgGAOIgFALIABgMgAB4hzQgBgBABgJQAEAAALACIAKABIgJADQgLAEgEAAIgBAAgAB4h9IAAAAg");
	this.shape_175.setTransform(66.8,-14);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#A3C84E").s().p("ABaB8QgBgBAHgMQAGgNgBgCQgBgBgLAFQgLAGgBgCQgBgBAHgMQAIgLgCgCQgBgCgLAFQgLAFgBgCQgBgBAHgMQAHgLgBgCQgBgCgLAGQgMAFgBgBQgBgCAHgLQAHgMgCgCQgBgBgLAGQgLAFgBgBQgBgBAGgMQAHgMgCgCQgBgBgLAGQgKAHgCgCQgBgBAGgMQAGgMgCgCQgBgBgKAHQgKAIgCgCQgBgBAFgMQAFgMgBgBQgBgCgLAIQgJAHgBgCQgBgBAEgLQAEgNgBgBQgCgBgIAIQgKAJgBgBQgBgBADgNQAEgNgBgCQgCgBgJAJQgJAJgBgBQgCgBAEgNQADgNgCgBQgBgBgJAJQgJAKgBgBQgCgBADgNQADgOgCgBQgBgBgJAKQgJAKgBAAQgCgBADgOQACgOgCAAQgCgBgIAKQgIAKgCAAQgBgBACgOQABgNgBgBQgCgBgIALQgJAKgBgBQgCgBACgNQACgOgCAAQgCgBgJAKQgJAKgBAAQgCgBAEgNQAEgNgBgBIgCAAIgBgNQgBgHACgBQABAAAHANQAHANACAAQACAAACgOQACgNACAAQACAAAFANQAEAOACAAQACABAEgNQAFgNACAAQACABADAOQACAOACAAQACABAGgMQAGgMACAAQACABABAOQABAPACAAQACABAHgLQAHgLACABQACABAAAOQAAAOABABQACABAJgKQAIgKACABQABABgBAOQgCAOACABQABABAJgJQAJgJACABQACACgEANQgDAOACABQABABALgHQAKgIACABQABACgEANQgFANABABQACABALgGQAKgHACABQABACgFANQgGAMACACQABABAMgFQALgGABACQACACgHAMQgHAKABACQABABANgDQALgDACACQABABgIAKQgIALABACQABABANgCQAMgCABACQABACgJAKQgIAJAAACQABACANAAQANgBAAACQABADgKAIQgJAIAAABQABADANABQAMACABACQAAADgLAFQgKAGAAACQAAADANAEQANAFAAACQAAACgHABIgLACIgCAAQgBAAgBAAQAAAAgBAAQgBABAAAAQAAAAgBABIABABIgKAHIgFACIgBAAg");
	this.shape_176.setTransform(40.2,-12.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A3C84E").s().p("AACACIgNgDQATgDAEABQABAGgBABIgBAAIgJgCg");
	this.shape_177.setTransform(26.5,-22.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#A3C84E").s().p("AgEgKIAEgCIABgBQACACAAAKIACAPQgJgSAAgGg");
	this.shape_178.setTransform(51.3,-0.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#A9504C").s().p("AhBEhIAFgIQADgEAAgFQABgGgDgGQgDgHABgFQABgGAEgGQAEgFAAgGQABgGgDgHQgCgGAAgGQABgGAEgGQAEgFABgHQABgGgDgGQgDgHAAgFQABgGAEgGQAEgFABgGQABgGgDgGQgDgHABgGQABgGAEgFQAEgGAAgGQABgGgDgHQgDgGABgGQABgGAEgGQAEgFAAgGQABgGgDgHQgCgGAAgHQABgGAEgEQAEgGABgGQABgGgDgHQgDgGABgHQAAgGAEgFQAFgFAAgGQABgHgDgGQgDgHABgGQABgGAEgFQAEgGAAgGQABgGgDgGQgCgHAAgGQABgGAEgFQAEgGABgGQAAgGgCgHQgDgGAAgGQABgGAEgGQAEgFABgGQABgGgDgHQgDgHABgGQABgGAEgFQADgGAAgGQABgGgCgHQgCgGAAgHIABADIACACIAAgIIAAAIIAAgIIACAIIAAgJIABAJIAAgJIABAJQABAAgBgJQABAAABAIIABgIIABAIIAAgJIACAJIAAgJIAAAEIAAABQABAFAEAFQADAFABAGQAAAFgDAGQgDAGABAGQAAAGAEAFQAEAGABAFQAAAGgCAHQgDAGAAAGQABAGAEAGQAEAFAAAGQABAGgDAHQgDAGAAAGQABAGAEAFQAEAGAAAGQABAGgDAGQgDAHABAGQAAAGAEAGQAEAFABAGQAAAGgCAHQgDAGAAAHQABAGAEAFQAEAGAAAGQABAGgDAGQgDAHAAAFQABAGAEAGQAEAFAAAGQABAGgDAHQgDAHABAGQAAAGAEAFQAEAGABAGQAAAGgCAHQgDAGAAAGQABAHAEAFQAEAGAAAGQABAGgDAGQgDAHAAAGQABAGAEAGQAEAFAAAGQABAGgDAHQgDAGABAGQAAAGAEAGQAEAFABAHQAAAGgCAGQgDAGAAAHQABAGAEAFQAEAGAAAGQABAGgDAGQgDAGAAAFg");
	this.shape_179.setTransform(52.2,30.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#CD9680").s().p("AgOAYQgHgKAAgOQAAgNAHgKQAGgKAIAAQAJAAAGAKQAHAKAAANQAAAOgHAKQgGAKgJAAQgIAAgGgKg");
	this.shape_180.setTransform(-1.4,-44.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CD9680").s().p("AgTAXQgIgKAAgNQAAgMAIgJQAIgJALAAQAMAAAIAJQAIAJAAAMQAAANgIAKQgIAIgMABQgLgBgIgIg");
	this.shape_181.setTransform(2.9,-43.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#CD9680").s().p("AgQAYQgHgKAAgOQAAgNAHgKQAHgKAJAAQAKAAAHAKQAHAKAAANQAAAOgHAKQgHAKgKAAQgJAAgHgKg");
	this.shape_182.setTransform(-4.1,-41.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#8DB637").s().p("AiiBVQgJgMgCABIgBABIgNgGQgHgDABgCQAAgCARAAQARAAABgCQABgCgLgKQgLgKABgDQACgCAQAEQAPADACgCQABgCgJgMQgJgMACgCQACgCAPAFQAPAGACgCQABgBgHgOQgHgNACgCQACgCAOAIQAOAHACgBQACgCgGgOQgFgOACgCQACgCANAJQANAJACgBQACgBgEgPQgDgPACgCQADgBALAKQAMALACgCQACgBgCgPQgCgPACgBQADgCAKAMQALALACgBQACAAAAgQQAAgQADgBQACgBAJANQAJANACgBQACAAAAgQQABgQADAAQACgBAIANQAIAOACgBQADAAADgQQACgPADAAQADgBAGAOQAGAOACAAQADAAAEgPQAFgPACAAQADAAAFAOQAEAPADAAQACAAAHgPQAGgOACAAQADAAADAPQADAPACAAQADABAIgOQAIgOACAAQADABABAPQABAPACABQACAAALgMQAKgNACABQADABgCAPQgCAPACABQADABANgLQAMgLACABQACACgDAHIgGANQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAABQgDAEACABIABABQAAAWgCAAQgCAAgHgOQgHgPgDAAQgCABgCAPQgCAPgDAAQgCAAgGgPQgGgOgCAAQgCAAgDAPQgDAPgCAAQgCAAgGgOQgHgOgCAAQgCAAgDAPQgCAPgCAAQgCABgHgOQgGgOgDAAQgCAAgCAPQgCAQgCAAQgCAAgHgOQgHgNgCAAQgCABgBAPQgBAPgDABQgCAAgHgNQgIgOgCABQgCAAAAAQQgBAPgCAAQgBAAgJgMQgIgNgCABQgDABABAPQAAAPgCAAQgBABgIgMQgJgMgCAAQgCABACAPQABAPgCAAQgBABgKgMQgKgKgCAAQgCABACAPQACAPgBABQgCAAgKgLQgKgMgCABQgCACADAPQACAPgBABQgCABgLgLQgKgLgCABQgCABADAPQADAPgBABQgCABgLgKQgLgKgCABQgCACAEAPQAEAPgCABQgCABgLgKQgLgKgCABQgDACAFAPQAEAPgCABQgCACgLgLQgMgKgBABQgCACADAQQAEAQgCABIAAAAQgDAAgJgLg");
	this.shape_183.setTransform(-24.6,-38.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#8DB637").s().p("AAAAFQgLgBgDgCIAAgFIABgCQAEgBAYAMIgPgBg");
	this.shape_184.setTransform(-4.6,-42.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#8DB637").s().p("AgDAAQADgKADgCQAIADgBABQAAADgIAGIgMAMIAHgNg");
	this.shape_185.setTransform(-42.4,-29.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#B4D16B").s().p("ADxBaQgRgMgBgDQgBgBAJgGIgCgBQgCgBgJAQQgJAQgDgCQgCgBABgTQACgTgDgCQgCgBgMAOQgMAOgDgCQgCgBADgSQACgTgDgCQgCgBgMAOQgMAOgCgBQgCgBACgTQACgSgDgCQgCgBgMAOQgLAOgDgBQgCgBACgSQACgTgDgBQgCgBgLAPQgLAPgDgBQgCgBABgSQABgTgDgBQgCAAgKAPQgKAPgDgBQgCAAAAgTQAAgRgCgBQgDgBgJAPQgKAQgCgBQgCgBgBgSQgBgRgCgBQgDAAgIAPQgJAQgCAAQgCgBgCgRQgCgSgCgBQgDAAgHAQQgIAQgDAAQgCgBgDgRQgCgSgDAAQgDAAgHARQgHAQgCgBQgDAAgDgRQgEgSgDAAQgDAAgGARQgGARgCAAQgDAAgEgRQgFgSgDAAQgDAAgFASQgGARgCAAQgDAAgFgRQgFgRgDAAQgDAAgFASQgFARgDAAQgCABgGgRQgGgRgCAAQgDABgFASQgFARgCAAQgDABgFgRQgGgRgCAAQgDAAgGATQgGARgCAAQgDAAgCgRIgBgIIABgBQABgBgEgGIACAIQgFACgSAEIgNAEIALgIQASgNAEABIgFgIQgLgPAEgCQACgBARAKQARAKADgBQACgBgFgSQgFgSADgBQADgCAOAOQAPANACgBQADgBgCgSQgBgSADgBQADgBAMAPQAMAPADgBQACAAABgTQABgSAEgBQADAAAKAQQAJAQADAAQADgBADgSQADgSADAAQAEAAAHARQAIARADAAQADAAAFgSQAFgSADAAQAEAAAFASQAGASADAAQADAAAHgRQAHgRAEAAQADABADASQADASADABQACAAAJgQQAJgRADABQADABACASQADATACAAQADABALgPQALgPADAAQADABAAATQAAASACABQADABAMgOQANgOADABQADACgCASQgCATACABQADABAOgNQAOgNADACQADABgFASQgEASADACQACABAQgLQAPgLADACQADACgHARQgGARACABQADACARgJQAQgIADACQACACgIAPQgJAQACACQACACASgHQATgGABACQADACgMAOQgLAOABACQACADAUgDQAUgDABACQACAEgQAJIgHAEQAEAEAJAOIAIAMIgLgIgAjXgLIAAAAg");
	this.shape_186.setTransform(24.8,-42.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#B4D16B").s().p("AC5ClQgJgRgBgFIAGgEQgGABAAACIAAABIgHAFQgPAKgCgCQgBgCAKgQQAKgRgCgDQgBgCgRAIQgRAHgBgCQgBgCAKgQQALgPgBgDQgCgCgRAHQgRAHgBgCQgCgCALgQQAKgPgCgDQgBgCgRAIQgRAHgCgCQgBgCAKgQQAKgPgCgDQgCgCgQAIQgRAIgBgCQgCgCAJgQQAKgQgCgCQgCgCgQAJQgRAJgBgCQgCgBAJgRQAIgPgCgCQgCgCgPAJQgQAJgCgBQgBgCAHgQQAIgQgCgCQgCgCgPAKQgQALgCgCQgCgBAHgRQAHgRgCgCQgCgBgOALQgOALgBgBQgDgBAGgSQAGgRgCgCQgCgBgOAMQgOAMgCgBQgCgBAFgSQAFgSgCgBQgDgCgNANQgOAMgCgBQgCgBAEgSQAFgRgDgCQgCgBgNANQgOAOgCgBQgCgBADgSQAEgSgDgCQgCgBgNAOQgNANgCAAQgCgBADgTQACgSgCgBQgDgBgNAOQgNAOgCgBQgCgBADgSQADgSgDgBQgDgBgNAOQgOANgCgBQgDgBAGgRQAGgSgCgBIgCAAIgBgIQgEgSAEgBQADAAAKARQALARADgBQACAAAEgSQADgSADAAQADABAHASQAGASADAAQADABAHgRQAGgRAEAAQADABAEASQAEATADABQACABAKgQQAJgQADAAQADABABATQACATADABQACABAMgPQALgPADACQADABgBATQAAATACABQADABAMgNQAMgOADACQADABgDATQgDASADACQACABAOgMQAOgMADACQADACgFASQgFASACABQADACAQgKQAPgKADACQACACgHARQgHARACACQACABARgIQAQgJACACQADACgJARQgIAQACACQACACARgHQASgHACACQACADgKAPQgLAQACACQACACASgFQASgFACACQACADgMANQgMAOACADQABACATgDQATgDABADQACADgOAMQgNANABACQACADATAAQATgBABADQACADgPAKQgPALABADQABADATACQAUACAAADQABADgQAIQgRAIABACQAAADATAGQATAHAAACQABAEgTACIgJABQADADACAVIABANIgFgLgAjGiLIgMgDIANgCQARgCAGABQABAKgBAAIgCAAQgGAAgQgEg");
	this.shape_187.setTransform(-20.3,-61.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A3C84E").s().p("AiZCHIAAgBQAAgBgHgBQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABIgSgCQgJgBABgDQAAgCASgGQASgFABgDQABgCgQgHQgRgHABgDQABgDATgCQATgCABgCQAAgCgOgKQgPgJACgDQABgCATAAQASABABgDQABgCgMgLQgNgLABgDQACgCASACQASADACgCQABgCgMgMQgLgNACgBQACgCARADQASAFABgDQACgBgKgNQgKgOACgCQACgCARAHQARAGACgCQACgCgIgPQgJgOADgCQACgCAQAIQAQAIACgCQABgBgGgQQgHgPACgBQADgCAPAJQAPAJACgCQADgBgFgQQgFgQADgCQADgBANAKQANALACgBQADgBgDgRQgDgQADgCQADgBAMAMQAMAMADgBQACgBAAgRQgBgRADgBQADgBAKANQALANADAAQADgBABgRQACgRACgBQAEgBAIAPQAJAOADgBQACAAAEgRQAEgQADgBQADAAAHAPQAGAPADAAQADgBAGgQQAHgQACAAQAEAAADAQQADAQACAAQADAAAKgPQAKgPADAAQADABgBAIIgDAPIgCAAQgCABAGAQQAGAPgDABQgCABgNgMQgNgMgDABQgCABACAQQADAQgCAAQgCABgNgMQgMgNgDABQgCABADAQQADAQgDABQgCABgMgMQgNgMgCABQgCABADAQQADAQgCABQgCABgNgMQgMgMgDABQgCACAEAPQAEAQgCABQgCABgNgLQgNgLgCABQgDABAFAQQAFAPgCABQgCABgNgKQgOgLgCACQgCABAGAPQAFAQgCABQgBABgOgKQgNgKgCACQgCABAGAPQAGAOgBABQgCABgOgIQgPgJgCACQgCABAIAOQAHAPgCABQgBACgPgJQgPgIgCABQgCACAIAOQAIAPgBABQgCACgQgIQgPgIgCACQgCACAJAOQAJAOgBACQgCACgQgHQgQgHgCABQgCACAKAOQAKAOgCACQgBABgQgGQgRgGgBACQgCACAKANQAKAOgBACQgCACgQgGQgQgGgCABQgCADALANQAKAOgBABQgBACgQgGQgQgGgCACQgCACAKAOQAKAPgBABIgBAAQgFAAgRgLg");
	this.shape_188.setTransform(18.5,-59.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#A3C84E").s().p("AgQAFQgCgBACgIIAiADQgZAGgHAAIgCAAg");
	this.shape_189.setTransform(38.5,-71.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#A3C84E").s().p("AgFgBQACgMACgCIACAAIAGAEQAAADgGAJIgHAPIABgRg");
	this.shape_190.setTransform(2.4,-44.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#A9504C").s().p("AhYFTQAAgFgEgHQgEgHABgHQABgHAGgHQAGgHAAgHQABgHgEgHQgEgIAAgIQABgHAGgGQAGgGAAgIQABgHgEgIQgEgHABgHQABgHAFgHQAGgHABgGQABgIgFgHQgEgIABgHQABgHAGgHQAGgGAAgIQABgHgEgHQgEgIAAgHQABgHAGgHQAGgGAAgIQABgIgEgHQgEgIABgHQABgHAFgHQAGgGABgHQAAgHgEgHQgEgIABgHQABgHAGgGQAGgHAAgHQABgHgEgIQgEgHAAgIQABgHAGgHQAGgGAAgHQABgIgEgHQgEgIABgHQABgHAFgHQAGgGABgHQABgGgFgIQgEgHABgIQABgGAFgHQAGgGABgIQABgHgEgHQgEgIAAgHQABgHAGgGQAGgHAAgGQABgHgEgHQgEgHAAgHQABgGAFgGQAGgGABgHIgBgBIABgDIAAAJIACgJIAAAKIADgKQABAAgBAKIADgKQABAAAAAKIACgKIgBAKIACgKIAAALIABgKQABAAAAAIIAAgIIABAKQACAAACgFQABAHgEAHQgDAIAAAIQABAGAGAHQAGAHABAHQABAHgEAIQgEAIABAHQABAHAGAHQAGAFABAIQABAHgEAIQgEAHABAIQABAGAGAHQAGAGAAAIQABAHgEAHQgEAIABAIQABAGAGAHQAGAGABAHQABAHgEAIQgEAIABAHQABAHAGAHQAGAGABAHQABAHgEAJQgEAHABAIQABAGAGAHQAGAFABAIQABAHgEAHQgEAIABAIQABAGAFAHQAGAGABAIQABAGgEAJQgEAHABAHQABAHAGAHQAGAGABAHQABAIgEAHQgEAIABAHQABAHAGAGQAGAGABAHQABAHgEAIQgEAHAAAIQABAGAGAHQAGAGABAIQABAHgEAHQgEAIABAHQABAIAGAFQAGAHABAHQABAHgEAIQgEAHABAGQABAHAEAFQAGAFABADg");
	this.shape_191.setTransform(0.9,-8.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A9504C").s().p("AAAgEIABACIgBAHIAAgJg");
	this.shape_192.setTransform(-0.8,-42.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F5D5B1").s().p("AotBoQj/gaAygxQAPgQAxgRIA5gTQAVgIgogbQgcgTgtgVQgagMBBgFIBGgDQRlAWDdgCQCOgCkJA3QjfAtiQATQhJAKgEAFQAAABAdAXQANAKg6AOQg8APhlAKQh9AMiAAAQiMAAiOgPg");
	this.shape_193.setTransform(-5.8,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.instance_6},{t:this.instance_5},{t:this.shape_78},{t:this.instance_4},{t:this.instance_3},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.instance_2},{t:this.instance_1},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.instance},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.毛利族茅屋, new cjs.Rectangle(-82.9,-78.8,166,157.7), null);


(lib.火箭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1_2();
	this.instance.parent = this;
	this.instance.setTransform(9.4,8.7,1,1,0,0,0,5,6.9);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_0_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.7,-9.4,1,1,0,0,0,8.7,4.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.7,-19.2,1,1,0,0,0,21.4,17.1);
	this.instance_2.alpha = 0.32;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AiCB1QgDgDBGhEICzigQAHgGAFAGQAGAGgGAHIi0CgQhHA7gHAAIAAgBg");
	this.shape.setTransform(-2.1,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#168BCA").s().p("AgqA9IARg9IgpguICihZIACBjIjDCsg");
	this.shape_1.setTransform(5.7,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#168BCA").s().p("AAwhWIBjANIhsCWIgoguIg/ALIhSAtg");
	this.shape_2.setTransform(-9.8,-6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231916").s().p("AgZASQgWgWgSgeQBHggA8AEQgEA5gnBEQgagTgWgag");
	this.shape_3.setTransform(36.4,-30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DCDDDD").s().p("AgQAOQgbgdgSghQAUgKAQgHQASAdAVAYQAVAYAbAUIgWAiQgggYgYgcg");
	this.shape_4.setTransform(32.4,-27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2392A").s().p("AjpCwIDPkTIAtgoQA5guA4gfQASAhAbAeQAZAcAgAYQgkA0g1AzIgtAoIkoCug");
	this.shape_5.setTransform(13,-10.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1A75D").s().p("AhMA4QBqhmAMgiQARgvAtgRIAogIQAKAEAJAIQATAOgBAPQgEAjgZAYQgbAagtAFQgmAEhyBVQg6ArgyAqQAzgtA1g0g");
	this.shape_6.setTransform(-24.8,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.火箭, new cjs.Rectangle(-42.8,-37.2,85.8,74.5), null);


(lib.房屋 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5B5B6").s().p("AhFBzIAMjcIB7gQIAEABIh5ASIgODgg");
	this.shape.setTransform(10.5,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AADA6IgIh0IADABIAIB0g");
	this.shape_1.setTransform(-26.6,-8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231916").s().p("AgVgCIgBgDIAtAIIAAADg");
	this.shape_2.setTransform(-26.3,-7.9);

	this.instance = new lib.Path_6_1();
	this.instance.parent = this;
	this.instance.setTransform(-26.2,-8.5,1,1,0,0,0,2.6,6.2);
	this.instance.alpha = 0.441;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D3CDB5","#D7D1B8","#E2DDC0","#F7F1CD","#FFFBD3","#E8CFA4"],[0,0.192,0.341,0.475,0.529,1],-3.9,2.7,3.3,-1.5).s().p("AgSAzIgHhYIABAAQAAgTAPgFQALAEAIAKQAIALACANIAAAAIAGBVg");
	this.shape_3.setTransform(-26.2,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595857").s().p("AgaAyIgGhYQAAgNAIgGQAIgHAMACIACAAQgPAFAAATIgBAAIAGBYIAsALIABADg");
	this.shape_4.setTransform(-26.9,-8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#898989").s().p("AgDAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAABABQAEAAAAAGQgBAGgEAAQgEgBABgGg");
	this.shape_5.setTransform(13.6,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231916").ss(0.3,0,0,4).p("AAFABQgBAGgEAAQgEgBABgGQAAgCABgCQACgCABABQAEAAAAAGg");
	this.shape_6.setTransform(13.6,22);

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.1,15.4,1,1,0,0,0,2.4,2.9);
	this.instance_1.alpha = 0.371;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D3CDB5","#D7D1B8","#E2DDC0","#F7F1CD","#FFFBD3","#E8CFA4"],[0,0.192,0.341,0.475,0.529,1],-3.7,2.1,3.6,-2.2).s().p("AgVgZIAugHIgCA3IgvAKg");
	this.shape_7.setTransform(10.9,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231916").s().p("AgkgBIA3gBIASADIg7ACg");
	this.shape_8.setTransform(9.4,-43.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5B5B6").s().p("AgIAXIgBhvIATAKIgBCng");
	this.shape_9.setTransform(5.8,-35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFBD3","#BA6C51"],[0,1],3.4,-8.5,-3.4,8).s().p("AgnBUIABimIBLgEIADABIgDClIhLAHg");
	this.shape_10.setTransform(10.7,-34.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFBD3").s().p("AgvgDIAAgBIBBgBIAeAHIhLAEg");
	this.shape_11.setTransform(9.6,-43.5);

	this.instance_2 = new lib.Path_5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.7,-31.7,1,1,0,0,0,7.1,5.6);
	this.instance_2.alpha = 0.27;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5B5B6").s().p("AgBglIAEAAIgBBKIgEABg");
	this.shape_12.setTransform(24.4,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5B5B6").s().p("AgpAEIBSgLIAAAEIhSALg");
	this.shape_13.setTransform(24.2,12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B5B5B6").s().p("AgBguIAFgBIgCBdIgFACg");
	this.shape_14.setTransform(-3.7,16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5B5B6").s().p("AgyAEIBlgNIAAAFIhlAOg");
	this.shape_15.setTransform(-4,16.5);

	this.instance_3 = new lib.Path_4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.8,15.4,1,1,0,0,0,0.7,2.6);
	this.instance_3.alpha = 0.199;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#D3CDB5","#D7D1B8","#E2DDC0","#F7F1CD","#FFFBD3","#E8CFA4"],[0,0.192,0.341,0.475,0.529,1],-1.2,0.8,8.3,-4.8).s().p("AgBgVIAFgBIgCAsIgGABg");
	this.shape_16.setTransform(19.6,15.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#D3CDB5","#D7D1B8","#E2DDC0","#F7F1CD","#FFFBD3","#E8CFA4"],[0,0.192,0.341,0.475,0.529,1],-4.9,2.6,4.6,-3).s().p("AgngQIBRgLIgDAlIhQASg");
	this.shape_17.setTransform(24,14.5);

	this.instance_4 = new lib.Path_3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24.4,10.1,1,1,0,0,0,5,2.6);
	this.instance_4.alpha = 0.57;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#D3CDB5","#D7D1B8","#E2DDC0","#F7F1CD","#FFFBD3","#E8CFA4"],[0,0.192,0.341,0.475,0.529,1],-4.6,2.7,4.5,-2.6).s().p("AgogMIBTgJIgDAhIhSAKg");
	this.shape_18.setTransform(24.3,10.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFBD3").s().p("AgyAuIBYgTIAFhOIAIgBIgGBVIhfAUg");
	this.shape_19.setTransform(24.2,12.8);

	this.instance_5 = new lib.Path_2_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.4,20.5,1,1,0,0,0,0.9,3.3);
	this.instance_5.alpha = 0.199;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#D3CDB5","#D7D1B8","#E2DDC0","#F7F1CD","#FFFBD3","#E8CFA4"],[0,0.192,0.341,0.475,0.529,1],-1.5,0.9,10.4,-6).s().p("AgBgbIAHgBIgCA3IgIACg");
	this.shape_20.setTransform(-9.7,20.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#D3CDB5","#D7D1B8","#E2DDC0","#F7F1CD","#FFFBD3","#E8CFA4"],[0,0.192,0.341,0.475,0.529,1],-6.2,3.2,5.7,-3.7).s().p("AgxgUIBlgOIgDAvIhkAWg");
	this.shape_21.setTransform(-4.1,19.3);

	this.instance_6 = new lib.Path_1_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-3.8,14,1,1,0,0,0,6.2,3.4);
	this.instance_6.alpha = 0.57;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#D3CDB5","#D7D1B8","#E2DDC0","#F7F1CD","#FFFBD3","#E8CFA4"],[0,0.192,0.341,0.475,0.529,1],-5.7,3.3,5.6,-3.3).s().p("AgygPIBngMIgDApIhmAOg");
	this.shape_22.setTransform(-3.9,14.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFBD3").s().p("Ag+A5IBtgXIAHhiIAKgBIgIBpIh3Aag");
	this.shape_23.setTransform(-3.9,17.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FFFBD3","#F5F2E9"],[0,1],-6.8,0,6.8,0).s().p("Ag1hmIB3gSIACgBIgMDMIgKAFIAKjEIhiARIgLDQIgOAFg");
	this.shape_24.setTransform(10.7,20.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B5B5B6").s().p("AgLBgIAMjAIALgCIgPDFg");
	this.shape_25.setTransform(15.5,19.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#D4DCD8","#616F6E"],[0,1],-11.3,-7.4,0,-11.3,-7.4,25.5).s().p("AhbAFQgKgWhHgdIBmgdQAbgCArADQBYAGBVAYQghAkhpAjIiYAyQAjgxgJgXg");
	this.shape_26.setTransform(22.3,36.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#CCDCE2","#4C95C2"],[0,1],0.1,-14.1,-0.2,14.1).s().p("AijCvIgPghIAAAAIgEgJIAAgBIgBAAIgDgIIAAAAIgIgRIAAgBIgZg2IAAgBIgBAAIgBgFIgBgBIAAAAIgCgFIgBAAIgWgyIAAAAIgBgBIgBgDIAAAAIAAgBIgMgZIgBAAIgBgEIgBgBIgKgZIgBAAIAAAAIgBgCIAAgBIgMgZIAAAAIAAgBIgEgHIAAgBIAAAAIgNgdIAAAAIgOgeIA2ACIAAAAIATACIABAAIAxACIBDABIBPgBIABAAIASgBIAWAAIAAgBIApgCIAAAAIAJgBIAFAAIABAAIABAAIA1gEIApgFIAFAJIAAAAIAKAWIABABIALAVIAAABIAJARIAAAAIACADIABABIAAAAIALAVIABAAIAEAJIAAABIABAAIAGALIAAABIABAAIAMAUIAAABIABAAIAQAaIAAABIABABIAAABIANATIABABIAGAJIABABIAIAMIABABIADAFIAAABIAPAVIABABIAKANIABABIAMAQIAAABIABAAIAMAPIAAAAIgbAEIgBAAIgNACIgCAAIgoAFIgBAAIgMACIgBAAIgBAAIggAEIgCAAIgBABIgVACIgBABIgBAAIgvAGIgBAAIgBAAIgHABIgDAAIgRADIgBABIAAgBIgBAAIgBAAIhCAJIgCAAIgBAAIgBAAIglAFIgBAAIgEABIgBAAIgBAAIg5AIIgBAAIgLABIgCAAIg2AIIgDAAIgBAAIgEABg");
	this.shape_27.setTransform(4.1,-21.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBC39E").s().p("AAqAHQgdhFgWg9IgLgYIhiEfIgCgBIgQgGIB1lCICbFUIABAAIgEAdQAEgjgGAtQgfgrg6iMg");
	this.shape_28.setTransform(-25.9,-18.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F5F2E9").s().p("AjtAMIHhg+IgCAbInlBKg");
	this.shape_29.setTransform(11.6,-4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#898989").s().p("Ag1CPIBhkfIAKAZIhbEIg");
	this.shape_30.setTransform(-32.4,-19.1);

	this.instance_7 = new lib.Path_0_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(2.1,-14.7,1,1,0,0,0,30.2,18.7);
	this.instance_7.alpha = 0.199;

	this.instance_8 = new lib.ClipGroup_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-23.6,0.6,1,1,0,0,0,13,37);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#E28E37","#944E1B"],[0,1],1.8,8.2,-1.3,-6.3).s().p("AgpheIALgFIBTgLIgNDCIhcAbg");
	this.shape_31.setTransform(10.3,20.7);

	this.instance_9 = new lib.ClipGroup();
	this.instance_9.parent = this;
	this.instance_9.setTransform(8.6,9.5,1,1,0,0,0,23.7,28.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#E28E37","#944E1B"],[0,1],1.8,8.2,-1.3,-6.3).s().p("AgpheIALgFIBTgLIgNDCIhcAbg");
	this.shape_32.setTransform(10.3,20.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#E5B15F","#E9DABB"],[0,1],1.5,-10,-4.2,28.6).s().p("AjZgpQAMh/AOhwIGrBsQgSC4gGCNQgqAGg3ASIgwARIANi+IhdAQIAAAAIgJACIgMDKQgKAAgeAHQg8AOhjAkQgJhHAZj7g");
	this.shape_33.setTransform(8.5,9.4);

	this.instance_10 = new lib.Path_8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(9,30.8,1,1,0,0,0,4,1.3);
	this.instance_10.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.shape_33},{t:this.shape_32},{t:this.instance_9},{t:this.shape_31},{t:this.instance_8},{t:this.instance_7},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_6},{t:this.shape_21},{t:this.shape_20},{t:this.instance_5},{t:this.shape_19},{t:this.shape_18},{t:this.instance_4},{t:this.shape_17},{t:this.shape_16},{t:this.instance_3},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.房屋, new cjs.Rectangle(-39.6,-44.1,79.2,88.3), null);


(lib.Tween79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.火箭 = new lib.火箭();
	this.火箭.parent = this;
	this.火箭.setTransform(0,0,2.114,2.114);

	this.timeline.addTween(cjs.Tween.get(this.火箭).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-78.7,181.3,157.4);


(lib.Tween78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.火箭 = new lib.火箭();
	this.火箭.parent = this;
	this.火箭.setTransform(0,0,2.114,2.114);

	this.timeline.addTween(cjs.Tween.get(this.火箭).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-78.7,181.3,157.4);


(lib.Tween61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(84.3,47.9);

	this.instance_1 = new lib.Tween59("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(136.1,-19,1.336,1.336,0,0,0,0.4,0.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.6,-66.9,567.2,134);


(lib.Tween60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(84.3,47.9);

	this.instance_1 = new lib.Tween59("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(136.1,-19,1.336,1.336,0,0,0,0.4,0.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.6,-66.9,567.2,134);


// stage content:
(lib.CH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2560 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2560).call(this.frame_2560).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(480,350);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(2561));

	// 遮罩
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("EhOyCiYMAAAhS3MhnvAAAMAAAidlMBrsAAAMAAAhUTMCdlAAAMAAABrsMBjzAAAMAAACdmMhnwAAAMAAAA7dgEhK1A2rMCVrAABMAAAhtXMiVrAAAg");
	this.shape.setTransform(479,350);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2561));

	// FlashAICB
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(726.8,148.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween80("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1077.3,303.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween81("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(845.5,152.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1223).to({_off:false},0).to({x:830.8,y:80.8,alpha:1},13).wait(33).to({y:-65.6},12).to({_off:true},1).wait(1279));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1409).to({_off:false},0).to({_off:true,rotation:360,x:845.5,y:152.2},18).wait(1134));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1409).to({_off:false,rotation:720},18).wait(59).to({startPosition:0},0).to({x:1104},16).to({_off:true},1).wait(1058));

	// FlashAICB
	this.instance_3 = new lib.Tween64("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(425.6,212.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween65("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(376.6,212.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween68("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(655,286.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween69("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(655,205.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween74("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(549.6,146.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween75("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(713.1,146.9);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween67("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(894.6,217.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.小孩 = new lib.小孩();
	this.小孩.parent = this;
	this.小孩.setTransform(-122.5,530.4,3.38,3.38);
	this.小孩._off = true;

	this.房屋 = new lib.房屋();
	this.房屋.parent = this;
	this.房屋.setTransform(185.3,190.4,2.864,2.864);
	this.房屋.alpha = 0;
	this.房屋._off = true;

	this.沈思者 = new lib.沈思者();
	this.沈思者.parent = this;
	this.沈思者.setTransform(-127.5,567.9,2.611,2.611,-20.7);
	this.沈思者._off = true;

	this.跑步者 = new lib.跑步者();
	this.跑步者.parent = this;
	this.跑步者.setTransform(-58.7,561.3,1.992,1.992,0,0,0,0.1,-0.8);
	this.跑步者._off = true;

	this.毛利族茅屋 = new lib.毛利族茅屋();
	this.毛利族茅屋.parent = this;
	this.毛利族茅屋.setTransform(173.9,577.8,1.549,1.549,0,0,0,0,0.1);
	this.毛利族茅屋.alpha = 0;
	this.毛利族茅屋._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(151).to({_off:false},0).to({_off:true,x:376.6,alpha:1},13).wait(2397));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(151).to({_off:false},13).wait(35).to({startPosition:0},0).to({y:159.1,alpha:0},13).to({_off:true},1).wait(102).to({_off:false,x:731.9,y:173.5},0).to({x:638.9,y:211.5,alpha:1},18).wait(33).to({startPosition:0},0).to({scaleX:2.74,scaleY:2.74,rotation:360,alpha:0},12).to({_off:true},1).wait(2182));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240).to({_off:false},0).to({_off:true,y:205.3,alpha:1},16).wait(2305));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(240).to({_off:false},16).wait(37).to({startPosition:0},0).to({y:276.3,alpha:0},12).to({_off:true},10).wait(2246));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(545).to({_off:false},0).to({_off:true,x:713.1,alpha:1},21).wait(1995));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(545).to({_off:false},21).wait(51).to({startPosition:0},0).to({x:571.7,alpha:0},14).to({_off:true},1).wait(1929));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(764).to({_off:false},0).to({x:796.6,alpha:1},19).to({startPosition:0},1).wait(63).to({startPosition:0},0).to({rotation:360,x:978.7,y:126.7,alpha:0},16).to({_off:true},1).wait(1697));
	this.timeline.addTween(cjs.Tween.get(this.小孩).wait(875).to({_off:false},0).to({x:241.6},12).wait(65).to({y:581.4,alpha:0},12).to({_off:true},1).wait(1596));
	this.timeline.addTween(cjs.Tween.get(this.房屋).wait(1083).to({_off:false},0).to({y:157.3,alpha:1},22).wait(58).to({y:527.9,alpha:0},18).to({_off:true},1).wait(1379));
	this.timeline.addTween(cjs.Tween.get(this.沈思者).wait(1196).to({_off:false},0).to({x:133.6},16).wait(57).to({x:1129.5},12).to({_off:true},1).wait(1279));
	this.timeline.addTween(cjs.Tween.get(this.跑步者).wait(1319).to({_off:false},0).to({x:1016.9},30).to({_off:true},1).wait(1211));
	this.timeline.addTween(cjs.Tween.get(this.毛利族茅屋).wait(1402).to({_off:false},0).to({y:556,alpha:1},21).wait(63).to({x:275.7,alpha:0},16).to({_off:true},1).wait(1058));

	// FlashAICB
	this.instance_10 = new lib.Tween66("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(803.5,178.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween67("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(622.5,178.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween69("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(230.5,179.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween70("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(493.4,318.4,0.645,0.645,0,0,0,0.1,0);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween71("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(493.3,318.4);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween72("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(600.9,143.4);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween73("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(152.6,143.4);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween76("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(820.8,242.6);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween77("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(820.8,271.9);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween64("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(75.2,524.7);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.小孩_1 = new lib.小孩();
	this.小孩_1.parent = this;
	this.小孩_1.setTransform(-122.5,530.4,3.38,3.38);
	this.小孩_1._off = true;

	this.instance_20 = new lib.Tween37("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(443.3,351.4);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.大人與小孩 = new lib.大人與小孩();
	this.大人與小孩.parent = this;
	this.大人與小孩.setTransform(1028.3,563.6,2.443,2.443);
	this.大人與小孩._off = true;

	this.instance_21 = new lib.Tween40("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(430.1,337.1);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween78("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(25.5,728.5);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween79("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(771.8,161.8);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween43("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(371.5,328.6);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween44("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(567.6,333.5);
	this.instance_25.alpha = 0;

	this.狗 = new lib.狗();
	this.狗.parent = this;
	this.狗.setTransform(1015.1,562.5,1.853,1.853);
	this.狗.alpha = 0;
	this.狗._off = true;

	this.instance_26 = new lib.Tween47("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(415.8,340.6);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween48("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(549.7,338.2);
	this.instance_27.alpha = 0;

	this.instance_28 = new lib.Tween50("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(432.5,358.6);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween52("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(421.8,358.6);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.instance_30 = new lib.Tween53("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(524.6,358.6);
	this.instance_30.alpha = 0;

	this.instance_31 = new lib.Tween56("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(476.6,313.1);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.instance_32 = new lib.Tween57("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(476.8,358.6);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},160).to({state:[{t:this.instance_11}]},13).to({state:[{t:this.instance_11}]},33).to({state:[{t:this.instance_11}]},10).to({state:[{t:this.instance_11}]},19).to({state:[{t:this.instance_11}]},19).to({state:[{t:this.instance_11}]},39).to({state:[{t:this.instance_11}]},12).to({state:[{t:this.instance_12}]},10).to({state:[{t:this.instance_12}]},18).to({state:[{t:this.instance_12}]},33).to({state:[{t:this.instance_12}]},12).to({state:[]},1).to({state:[{t:this.instance_13}]},22).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_14}]},78).to({state:[{t:this.instance_14}]},12).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},14).to({state:[{t:this.instance_16}]},90).to({state:[{t:this.instance_16}]},14).to({state:[]},1).to({state:[{t:this.instance_17}]},34).to({state:[{t:this.instance_18}]},16).to({state:[{t:this.instance_18}]},49).to({state:[{t:this.instance_18}]},11).to({state:[]},1).to({state:[{t:this.instance_19}]},15).to({state:[{t:this.instance_19}]},19).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},76).to({state:[{t:this.instance_19}]},18).to({state:[]},1).to({state:[{t:this.小孩_1}]},10).to({state:[{t:this.小孩_1}]},11).to({state:[{t:this.小孩_1}]},58).to({state:[{t:this.小孩_1}]},12).to({state:[]},1).to({state:[{t:this.instance_20}]},10).to({state:[{t:this.instance_20}]},15).to({state:[{t:this.instance_20}]},85).to({state:[{t:this.instance_20}]},13).to({state:[]},1).to({state:[{t:this.大人與小孩}]},12).to({state:[{t:this.大人與小孩}]},17).to({state:[{t:this.大人與小孩}]},43).to({state:[{t:this.大人與小孩}]},19).to({state:[]},1).to({state:[{t:this.instance_21}]},9).to({state:[{t:this.instance_21}]},13).to({state:[{t:this.instance_21}]},67).to({state:[{t:this.instance_21}]},12).to({state:[]},1).to({state:[{t:this.instance_22}]},29).to({state:[{t:this.instance_23}]},20).to({state:[{t:this.instance_23}]},36).to({state:[{t:this.instance_23}]},20).to({state:[{t:this.instance_24}]},4).to({state:[{t:this.instance_24}]},15).to({state:[{t:this.instance_24}]},74).to({state:[{t:this.instance_25}]},13).to({state:[]},1).to({state:[{t:this.狗}]},3).to({state:[{t:this.狗}]},18).to({state:[{t:this.狗}]},46).to({state:[{t:this.狗}]},19).to({state:[{t:this.instance_26}]},11).to({state:[{t:this.instance_26}]},14).to({state:[{t:this.instance_26}]},70).to({state:[{t:this.instance_27}]},12).to({state:[]},1).to({state:[{t:this.instance_28}]},318).to({state:[{t:this.instance_28}]},12).to({state:[{t:this.instance_28}]},64).to({state:[{t:this.instance_28}]},11).to({state:[]},1).to({state:[{t:this.instance_29}]},83).to({state:[{t:this.instance_29}]},12).to({state:[{t:this.instance_29}]},60).to({state:[{t:this.instance_30}]},12).to({state:[]},1).to({state:[{t:this.instance_31}]},83).to({state:[{t:this.instance_32}]},15).to({state:[{t:this.instance_32}]},53).to({state:[{t:this.instance_32}]},32).to({state:[]},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).to({_off:true,x:622.5,alpha:1},13).wait(2388));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(160).to({_off:false},13).wait(33).to({startPosition:0},0).to({x:503.5,alpha:0},10).wait(19).to({scaleX:0.82,skewY:180,x:247.8},0).to({x:350.8,alpha:1},19).wait(39).to({startPosition:0},0).to({x:1105.8},12,cjs.Ease.get(1)).to({_off:true},10).wait(2246));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(315).to({_off:false},0).to({x:327.5,y:213.8,alpha:1},18).wait(33).to({startPosition:0},0).to({regY:0.2,scaleX:3.93,scaleY:3.93,rotation:360,y:214.6,alpha:0},12).to({_off:true},1).wait(2182));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(401).to({_off:false},0).to({_off:true,regX:0,scaleX:1,scaleY:1,x:493.3,alpha:1},21).wait(2139));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(401).to({_off:false},21).wait(78).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.9,alpha:0},12).to({_off:true},1).wait(2048));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(513).to({_off:false},0).to({_off:true,x:152.6,alpha:1},14).wait(2034));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(513).to({_off:false},14).wait(90).to({startPosition:0},0).to({x:439.2,alpha:0},14).to({_off:true},1).wait(1929));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(666).to({_off:false},0).to({_off:true,y:271.9,alpha:1},16).wait(1879));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(666).to({_off:false},16).wait(49).to({startPosition:0},0).to({y:224.8,alpha:0},11).to({_off:true},1).wait(1818));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(758).to({_off:false},0).to({x:145.2,alpha:1},19).to({startPosition:0},1).wait(76).to({startPosition:0},0).to({y:-76.4,alpha:0},18).to({_off:true},1).wait(1688));
	this.timeline.addTween(cjs.Tween.get(this.小孩_1).wait(883).to({_off:false},0).to({x:486.4},11).wait(58).to({y:581.4,alpha:0},12).to({_off:true},1).wait(1596));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(975).to({_off:false},0).to({x:476.8,y:358.6,alpha:1},15).to({startPosition:0},85).to({x:550.9,y:349,alpha:0},13).to({_off:true},1).wait(1472));
	this.timeline.addTween(cjs.Tween.get(this.大人與小孩).wait(1101).to({_off:false},0).to({x:809.3},17).wait(43).to({x:292.2,alpha:0},19).to({_off:true},1).wait(1380));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1190).to({_off:false},0).to({x:476.8,y:358.6,alpha:1},13).to({startPosition:0},67).to({x:530.6,y:345.4,alpha:0},12).to({_off:true},1).wait(1278));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1312).to({_off:false},0).to({_off:true,x:771.8,y:161.8},20).wait(1229));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1312).to({_off:false},20).wait(36).to({startPosition:0},0).to({x:1026.5,y:-72.6},20,cjs.Ease.get(-1)).to({_off:true},4).wait(1169));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1392).to({_off:false},0).to({x:476.8,y:358.6,alpha:1},15).to({startPosition:0},74).to({_off:true,x:567.6,y:333.5,alpha:0},13).wait(1067));
	this.timeline.addTween(cjs.Tween.get(this.狗).wait(1498).to({_off:false},0).to({x:867.3,alpha:1},18).wait(46).to({y:813.8,alpha:0},19).to({_off:true},11).wait(969));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1592).to({_off:false},0).to({x:476.8,y:358.6,alpha:1},14).to({startPosition:0},70).to({_off:true,x:549.7,y:338.2,alpha:0},12).wait(873));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(2007).to({_off:false},0).to({x:476.8,alpha:1},12).to({startPosition:0},64).to({x:524.6,alpha:0},11).to({_off:true},1).wait(466));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(2178).to({_off:false},0).to({x:476.8,alpha:1},12).to({startPosition:0},60).to({_off:true,x:524.6,alpha:0},12).wait(299));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(2346).to({_off:false},0).to({_off:true,x:476.8,y:358.6,alpha:1},15).wait(200));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(2346).to({_off:false},15).wait(53).to({startPosition:0},0).to({scaleX:1.59,scaleY:1.59,rotation:360,alpha:0},32,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// FlashAICB
	this.instance_33 = new lib.Symbol1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(484.5,351.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjXEZIFfpgIBQAvIlfJgg");
	this.shape_1.setTransform(484.5,351.1);

	this.instance_34 = new lib.Tween19("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(484.5,351.1);
	this.instance_34._off = true;

	this.instance_35 = new lib.Tween20("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(1243.5,351.1);

	this.instance_36 = new lib.Tween22("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(484.5,351.1);
	this.instance_36._off = true;

	this.instance_37 = new lib.Tween23("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(1213.5,351.1);

	this.instance_38 = new lib.Tween25("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(484.5,351.1);
	this.instance_38._off = true;

	this.instance_39 = new lib.Tween26("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(1223.5,351.1);

	this.instance_40 = new lib.Tween30("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(480.2,541.7);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.instance_41 = new lib.Tween31("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(480.2,361.7);
	this.instance_41._off = true;

	this.instance_42 = new lib.Tween35("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(369.2,350.2);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.instance_43 = new lib.Tween36("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(476.8,358.6);
	this.instance_43._off = true;

	this.instance_44 = new lib.Tween38("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(426.6,345.4);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.instance_45 = new lib.Tween39("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(537.7,337.1);
	this.instance_45.alpha = 0;

	this.instance_46 = new lib.Symbol7();
	this.instance_46.parent = this;
	this.instance_46.setTransform(796.6,274.5);
	this.instance_46.alpha = 0;
	this.instance_46._off = true;

	this.instance_47 = new lib.Tween41("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(425.3,337);
	this.instance_47.alpha = 0;
	this.instance_47._off = true;

	this.instance_48 = new lib.Tween42("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(553.3,340.6);
	this.instance_48.alpha = 0;

	this.instance_49 = new lib.Tween45("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(418.2,343);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	this.instance_50 = new lib.Tween46("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(540.2,340.6);
	this.instance_50.alpha = 0;

	this.instance_51 = new lib.Symbol5();
	this.instance_51.parent = this;
	this.instance_51.setTransform(482.7,776.4);
	this.instance_51._off = true;

	this.instance_52 = new lib.Tween51("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(413.4,358.6);
	this.instance_52.alpha = 0;
	this.instance_52._off = true;

	this.instance_53 = new lib.Tween54("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(455.3,358.6);
	this.instance_53.alpha = 0;
	this.instance_53._off = true;

	this.instance_54 = new lib.Tween59("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(509.1,314.4,0.841,0.841,0,0,0,0.4,0.4);
	this.instance_54._off = true;

	this.instance_55 = new lib.Tween62("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(476.8,314,2.181,2.181);
	this.instance_55.alpha = 0;
	this.instance_55._off = true;

	this.instance_56 = new lib.Tween63("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(476.8,314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33,p:{x:484.5}}]},159).to({state:[{t:this.shape_1}]},12).to({state:[{t:this.instance_34}]},30).to({state:[{t:this.instance_35}]},20).to({state:[]},1).to({state:[{t:this.instance_33,p:{x:483.5}}]},18).to({state:[{t:this.shape_1}]},11).to({state:[{t:this.instance_36}]},36).to({state:[{t:this.instance_37}]},14).to({state:[]},1).to({state:[{t:this.instance_33,p:{x:483.5}}]},18).to({state:[{t:this.shape_1}]},11).to({state:[{t:this.instance_38}]},28).to({state:[{t:this.instance_39}]},19).to({state:[]},1).to({state:[{t:this.instance_40}]},255).to({state:[{t:this.instance_41}]},22).to({state:[{t:this.instance_41}]},87).to({state:[{t:this.instance_41}]},21).to({state:[]},1).to({state:[{t:this.instance_42}]},89).to({state:[{t:this.instance_43}]},22).to({state:[{t:this.instance_43}]},75).to({state:[{t:this.instance_43}]},17).to({state:[]},1).to({state:[{t:this.instance_44}]},113).to({state:[{t:this.instance_44}]},13).to({state:[{t:this.instance_44}]},74).to({state:[{t:this.instance_45}]},13).to({state:[]},1).to({state:[{t:this.instance_46}]},25).to({state:[{t:this.instance_46}]},13).to({state:[{t:this.instance_46}]},48).to({state:[{t:this.instance_46}]},12).to({state:[]},1).to({state:[{t:this.instance_47}]},11).to({state:[{t:this.instance_47}]},7).to({state:[{t:this.instance_47}]},6).to({state:[{t:this.instance_47}]},6).to({state:[{t:this.instance_47}]},60).to({state:[{t:this.instance_48}]},12).to({state:[]},1).to({state:[{t:this.instance_49}]},103).to({state:[{t:this.instance_49}]},13).to({state:[{t:this.instance_49}]},72).to({state:[{t:this.instance_50}]},12).to({state:[]},1).to({state:[{t:this.instance_51}]},106).to({state:[{t:this.instance_51}]},294).to({state:[{t:this.instance_51}]},14).to({state:[]},1).to({state:[{t:this.instance_52}]},87).to({state:[{t:this.instance_52}]},12).to({state:[{t:this.instance_52}]},59).to({state:[{t:this.instance_52}]},11).to({state:[]},1).to({state:[{t:this.instance_53}]},85).to({state:[{t:this.instance_53}]},14).to({state:[{t:this.instance_53}]},55).to({state:[{t:this.instance_53}]},13).to({state:[]},1).to({state:[{t:this.instance_54}]},35).to({state:[{t:this.instance_54}]},11).to({state:[{t:this.instance_54}]},22).to({state:[{t:this.instance_54}]},32).to({state:[]},1).to({state:[{t:this.instance_55}]},95).to({state:[{t:this.instance_56}]},12).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(201).to({_off:false},0).to({_off:true,x:1243.5},20,cjs.Ease.get(-1)).wait(2340));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(287).to({_off:false},0).to({_off:true,x:1213.5},14,cjs.Ease.get(-1)).wait(2260));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(359).to({_off:false},0).to({_off:true,x:1223.5},19,cjs.Ease.get(-1)).wait(2183));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(634).to({_off:false},0).to({_off:true,y:361.7,alpha:1},22).wait(1905));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(634).to({_off:false},22).wait(87).to({startPosition:0},0).to({y:181.7,alpha:0},21).to({_off:true},1).wait(1796));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(854).to({_off:false},0).to({_off:true,x:476.8,y:358.6,alpha:1},22).wait(1685));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(854).to({_off:false},22).wait(75).to({startPosition:0},0).to({x:522.2,y:351.4,alpha:0},17).to({_off:true},1).wait(1592));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1082).to({_off:false},0).to({x:476.8,y:358.6,alpha:1},13).to({startPosition:0},74).to({_off:true,x:537.7,y:337.1,alpha:0},13).wait(1379));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(1208).to({_off:false},0).to({y:210.8,alpha:1},13).wait(48).to({y:-65.6},12).to({_off:true},1).wait(1279));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1293).to({_off:false},0).to({x:453,y:348.6,alpha:0.539},7).to({x:476.8,y:358.6,alpha:1},6).to({startPosition:0},6).to({startPosition:0},60).to({_off:true,x:553.3,y:340.6,alpha:0},12).wait(1177));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(1488).to({_off:false},0).to({x:476.8,y:358.6,alpha:1},13).to({startPosition:0},72).to({_off:true,x:540.2,y:340.6,alpha:0},12).wait(976));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(1692).to({_off:false},0).wait(294).to({y:723.7,alpha:0},14).to({_off:true},1).wait(560));
	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(2088).to({_off:false},0).to({x:476.8,alpha:1},12).to({startPosition:0},59).to({x:519.8,alpha:0},11).to({_off:true},1).wait(390));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(2256).to({_off:false},0).to({x:476.8,alpha:1},14).to({startPosition:0},55).to({x:533,alpha:0},13).to({_off:true},1).wait(222));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(2374).to({_off:false},0).to({x:240,y:404.1},11).wait(22).to({startPosition:0},0).to({scaleX:1.34,scaleY:1.34,rotation:360,x:100.4,y:430.9,alpha:0},32,cjs.Ease.get(1)).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(2535).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,rotation:360,alpha:1},12).wait(14));

	// FlashAICB
	this.instance_57 = new lib.Tween1("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(-256.2,340.5);
	this.instance_57._off = true;

	this.instance_58 = new lib.Tween21("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(-261.7,340.5);
	this.instance_58._off = true;

	this.instance_59 = new lib.Tween24("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(-256.2,340.5);
	this.instance_59._off = true;

	this.instance_60 = new lib.Tween27("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(498.2,337.9,4.641,4.641,0,0,0,0.2,0.2);
	this.instance_60.alpha = 0;
	this.instance_60._off = true;

	this.instance_61 = new lib.Tween28("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(480.2,456.2);
	this.instance_61.alpha = 0;
	this.instance_61._off = true;

	this.instance_62 = new lib.Tween29("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(480.2,361.7);
	this.instance_62._off = true;

	this.instance_63 = new lib.Tween33("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(480.2,541.7);
	this.instance_63.alpha = 0;
	this.instance_63._off = true;

	this.instance_64 = new lib.Tween34("synched",0);
	this.instance_64.parent = this;
	this.instance_64.setTransform(480.2,361.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(471.3,361.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(469.9,349.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(468.7,337.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");
	this.shape_5.setTransform(467.6,325.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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");
	this.shape_6.setTransform(466.5,313.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("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");
	this.shape_7.setTransform(466.3,302);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(466.8,290.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("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");
	this.shape_9.setTransform(467.2,278.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("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");
	this.shape_10.setTransform(467.7,266.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("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");
	this.shape_11.setTransform(468.2,254.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("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");
	this.shape_12.setTransform(468.6,242.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(469.1,230.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("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");
	this.shape_14.setTransform(469.6,218.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("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");
	this.shape_15.setTransform(502.2,206.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AvgFZIAKgBIA3gMIABgOIAFhLIAEhNIAChQIAIg8IgDhDIAIhQIAHg+QACgLAJgDIAJgEIDPgaIDkAAQAQABgCARIAAAgIgKAAIiuAAIgOAHIggAAIgyAcQgQgBgOgEQgOgDgOgFIgPgJIgXgDIgTAJIgUAIIgTAIQgLAEgEAOIAAACIAAABIAGAUIAGAKIAGALIAHAZIAFAMIANABIAhACIAqABIBHAAIARgIIAiAAIATgLIBcAAIAOgIIAbAAIATgKIAcAAQAMAAADgJIADgFIAFAtQACASgPAAIizAAIAiBYID0AAIAKABIAAA5IgBAGIjrAAQAHAiARAhIAEAHQASAgAWAbIAKANQAVARAUAMQAYAPARAAQASAAAFgRQAMgoAEgsIA5AQIAEABIgCAOIAZAAIABAAIgBgxIAQAAIAAgwICvAAIAAgOIABAAIAAAOIAxAAIAAgKIAAgEIAAgHIAAgBIgZAAIABgaIATAAIgTAAIAAgCIgCAAIgXAAIAAACIAAAAIAAAEIAAAQIAAAHIhEAAIABgbIAVAAIAAgNIgVAAIAAgHIhfAAIACg7IDrAAIAAgQIiBAAIAAgUICCAAIgBAUIAJAAIABgXIABAAIAAAXIATAAIABgpIgdAAIAAgNIAAAAIgBANIjDAAIABglIA4AAIAAAEIA6AAIAAAJIAyAAIAAgGIAfAAIAAAGIAAAAIAAgGIAZAAIAAgDIgOAAIABgaIgLAAIAAgDIALAAIABgKIgMAAIAAgIIgzAAIAAgJIBQAAIAAACIARAAIAAgCIAvAAIAAASIgWAAIAAAFIgFAAIAHABIAUAAIAAADIgDAAIAXADIAAAAIAAAGIgVAAIAAgCIgSAAIAAACIgDAAIAAgJIAAAAIgBAJIgUAAIAAgOIgEAAIAAgIIgMAAIgBAQIgGAAIgDAaIAaAAIAAADIAUAAIAAAGIAAAAIAAgGIAEAAIAAAGIABAAIAAAKIABAAIgBAYIgBAAIABgRIgGAAIgBAwIAOAAIAAAaIgGAAIgIABIgBAAIgBAMIABAAIAAABIgBAAIAAAKIAPAAIAAABIg4AAIABgTIgSAAIAAAHIgiAAIAiAAIAAAAIALAAIAEAAIAAAMIhMAAIAAAUIgBAAIgBALIgKAAIgBAHIANAAIAAgOIAkAAIAAAHIAAAAIAAAHIAZAAIAOAAIAAgOIADAAIgBAOIAeAAIAAADIAaAAIAAADIgKgBIgQAAIgeAAIgCAAIgOAAIgZABIgBAAIgBAUIABAAIAAAGIgBAAIgBAaIACAAIAAAAIAaAAIAAgZIANAAIAAAHIgEAAIAAASIAIAAIAQAAIALAAIABAAIAAgOIAaAAIAAAIIAAAAIABgIIAOAAIAAACIAKAAIAAgCIAQAAIAAAAIgEAAIgMAAIAAAAIgKAAIABgSIgFAAIAHgBIABgHIgDAAIAAgHIAEAAIAAgDIgEgBIABgJIAGABIAUAAIAAACIABAAIAAAAIACAAIAAgCIgCAAIAAgIIACAAIAAgdIgDAAIAAAYIgUAAIACgPIABgJIgIAAIAAgMIARAAIAAgKIgQAAIABgdIAQAAIAAgBIAKAAIAAgHIgKAAIAAgKIgEAAIAAgNIgLAAIABgoIAiAAIAAAGIAHAAIgBgIIgcAAIAAgBIADAAIAAgJIAAgDIAAgEIABgEIgBAAIAAgGIgDAAIAEAAIAAgDIAAgBIgBAAIAAgCIAFAAIAAgGIgFAAIABgFIgEAAIAAgCIAEAAIAAgLIAfAAIAAgMIgJAAIAAgMIgEAAIAAAMIgOAAIAAgMIgDAAIABgKIAGAAIACACIACAEIgCgEIgCgCIAKABIAAgDIgMgBIgDgEIADAEIgEAAIAAgFIAQgBIAAgaIAFAAIAIAJIACgFIgFgEIgFAAIgFgGIgFgFIAAgBIAFAAIAAABIAYgBIgHAMIAFgBIgFAFIAIAIIAKgBIAFAGIADADIgHAAIgBABIAJAAIACADIgIAAIALAJIAAABIAEADIACABIADABIAAgBIAJABIAAAAIABAAIAMAAIAAAAIABgDIgBgBIgNgBIAAgBIgEAAIgDgEIgFgGIAEAAIgBgCIgEAAIgCgCIgGgHIgCgCIAFgBIgJgKIgIgJIgBgCIAGAAIAAgBIAGAAIAAABIgEAAIAKALIAFAGIAHgGIAAAEIAGAAIAAgEIgGAAIAGgFIAAgDIADAAIABgBIgKAAIAAgCIAOgBIALAAIADADIgCAAIABABIAHAHIABAAIAAABIAEAEIABAAIAKALIAHgBIACAAIABAAIAFgFIADAEIAEgBIgBgHIAAgBIAAAAIgBgBIgEgEIAFAAIgBgHIACAAIAAgBIgCAAIAAgCIgBgBIgMAAIAAAAIgBgBIgO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AFAAIAAgHIgFAAgAJwDcIAAgBIgEAAIAEABgAIPDRIAAAHIAKAAIABgHIABgDIgMAAIAAADgAGKDOIAJAAIAAACIALABIAhACIAAgEIAAgBIghAAIACgMIAAAAIgWAAgADmDRIAMgBIAAgCIAIAAIAAgGIgHAAIAAgOIAHAAIAAgIIgHAAIAAgCIAAAAIAAACIgcAAIAAAHIAOAAIAAABIAOAAIgBAPIAAACIgMAAIAAACIAMABIgMAAIAAADgABCDIIALAAIAAAIIAaAAIAAgHIAIAAIAAgCIgigCIAAADIgLAAgAFcDOIACAAIAAgCIAOABIAIABIAFAAIgDAAIAFAAIABgMIgagBIAAgFIAkgBIAAAEIAAAAIAAgFIgKAAIAAABIgaAAIALgBIgLAAIABgCIAMAAIgMAAIABgKIgDAAIACAAIAAgBIABAAIAAAAIAIAAIAQgBIAAABIAAAAIAKAAIAAgEIAAAAIAEAAIADAAIAGAAIAAADIALAAIAEgBIAAACIgPAAIAAAFIgNAAIAAgFIgKAAIAAAFIAAAGIAKABIAAAAIAAgBIAJAAIgEABIAIAAIAAACIgJgBIAAAGIAMABIArAAIAAgFIAAgBIAAgBIgBAAIAAgBIABAAIAAAAIAAgBIgBAAIAAgCIgfABIAAgFIAUAAIAAgHIAKgBIAAgBIAAgDIgKAAIgCAAIACAAIAAgDIgBAAIAAgDIgRABIAAgBIAAgCIABAAIAAgBIAQgBIAAAEIABAAIAAgEIALAAIAAgEIgLAAIAAgHIALAAIAAgCIACAAIAAgGIgBAAIAAAAIgMgBIAAAAIAAgBIgFAAIAAAAIgLACIgBAAIAAgDIAAAAIAAAAIARAAIAAABIAAAAIAMgCIAAABIABAAIAAgBIgBAAIAAgCIAAgFIgMAAIAAgDIAAAAIAAgBIAAAAIAAgBIANAAIAAgCIgNAAIAAgBIAAAAIgCAAIAAABIgOAAIAAACIAOAAIAAABIgBABIAAADIgOAAIAAgEIAAAAIAAgBIAAgCIAAgBIgCAAIAAAFIgRAAIAAADIAAAFIADAAIAAADIgDAAIAAAFIAAAAIAAAEIAAAOIADAAIgBAHIguAAIAAgBIAAAAIgCAAIAAgBIACAAIABgEIAggBIAAgSIgFAAIAAAEIgFAAIAAgEIgUAAIAAgDIAUgCIAAgDIgTAAIAAgBIgDgBIADAAIABgGIAAAAIAAgEIANAAIgNAAIABgCIARABIAAgBIgRgBIAAAAIAWABIACAAIAAgJIAAgBIgBAAIgGAAIgQAAIABgNIAAgBIAIAAIANABIAAAAIAAgKIAAgLIgBAAIAAgGIAAgEIAAAAIAAgBIAAAAIAAgEIgXAAIAAgIIAXAAIAAgBIgBgJIAAgDIgMAAIAAgBIAAgDIgJAAIAAADIAAABIAJAAIgBADIgBAAIgHgBIgCAAIAAgCIAAgBIgFAAIAAADIgNAAIgBAKIAOAAIAAAJIgKAAIAAAFIAKAAIAAAJIgKAAIAAABIAKAAIgBAeIgEAAIAAgFIgBAAIAAAFIABAAIAAAEIgBAAIAAABIgEAAIAAAHIAFABIAAAAIAEAAIAAADIgEAAIgCAAIAAAEIACgBIAAABIgCAAIAAAGIACAAIAAACIgFAAIAAADIAEAAIAAAGIgEAAIAAgBIgCAAIAAABIgDAAIAAgBIgoAAIAAABIgPAAIAAADIAPAAIAAAJIgPAAIAAALIAPAAIAAgCIArAAIAAACIggAAIgDAAIgIABIAAAAIgCAAIAAALIAUgBIAGAAIAAADIgOABIAOAAIAAAGIgYAAIAYADIgZgBIAAACIAZAAIAAgBIAAAAIAIABIALAAIAAACIAAAAIAAgDIAEAAIAAABIABAAIAAAAIABAAIAAAFIgBAAIAAAHIgBAAgAFFDDIgYACIAAAHIAYABIAAABIATAAIAAgBIgTAAIAAgFIATAAIAAgHIAAAAIAAAAIgTAAgALjDHIAHAAIAAAFIARAAIAAgHIgPABIAAABIgCAAIAAgBgAETDMIACAAIAAgEIgCAAIAAAEgAJoDFIAlABIAAgEIglAAgAG/DDIAAACIACAAIAAAAIAAgCIAAgBIgCAAIAAABgALZC+IAAACIARAAIAAABIABAAIAAgBIAQAAIAAAAIAEAAIAxgEIgnAAIgGAAIAGAAIAAghIAGAAIABgMIABgMIgZAAIAAAAIggAAIAAABIAAALIAAAMIAPAAIAAAIIgOAAIAAAGIAAABIAAAHIgPAAIgBgHIgEAAIADAAIgEAAIAAAHIglAAIAAgGIATgBIAAAAIgTAAIAAgFIAAAAIAAAFIgCAAIAAABIAAABIACAAIgBAMIgBAAIAAACIABAAIATABIgTA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CAAIAAADIAAAAIAAgDIAEAAIAAADIAKAAIAAgDIAPAAIAAACIAAAIIAKABIgBATIgWAAIAAAFIAAABIAAAEIAAAGIAAAJIAWgBIAAADIgMAAIAMAAIAAAKIgLAAIALABgAJqBhIAWgBIAAgKIgJgBIgNABIAAAIIgGAAIAAADIADAAIADAAgAJbBhIACAAIAEAAIAAgDIgEAAIAAgfIAEAAIgBgGIgNAAIAAAGIgCAQIAAAAIALAAgAJPBhIABgDIAAAAIAAgIIAAAIIgQAAIAAADIAIAAIAHAAgAIpBWIAAAIIAAADIAXAAIAAgDIAAgIIgXAAgAIiBhIAGAAIABgDIgHAAgAHvBgIABgKIgCAAIAAACIgBAGIAAACIABAAIAAAAIAAAAIABAAgAH+BgIAAgCIgKAAIAAACIAFAAIABAAIACAAIABAAIABAAgAGhBUIAAAKIADAAIAAgKIAOAAIABAAIAKAAIgBgLIgHAAIAAgKIAHAAIAAAEIAIAAIAAgFIgBAAIAAgFIgIAAIABAFIgHAAIAAgFIAAAAIAAAFIgCAAIAAgFIgPAAIAAAFIAAAAIAAgFIgCAAIAAAGIgBAAIAAAEIADAAIAAAGIgDAAIAAALgAGSBSIAAACIAIAAIgBAKIAEAAIABgVIgMAAIAAAJgAChBeIApAAIAAgBIgpAAgAFSBaIADABIABAAIAAgHIgEAAgAHDBUIAAAAIABgLIgBAAgAEBBSIAAACIAVAAIAAgDgACiBQIgBADIApgCIAAgJIgQAAIABgRIgYAAIAZAAIAAgIIAPAAIAAgIIgOAAIAAgFIgCAAIAAgDIAAAAIAAgKIAAAKIgbAAIAAADIAAAFIgBAAIAAAFIABAAIAAADIADAAIAAAIIAAABIgFAAIgCAYIACAAIAAADIABAAIAAgDgAEABQIAWAAIAAgQIgUAAIAAgIIgEAAgAEtBJIAAAGIABABIABAAIAAgHIAdAAIAAgBIgdAAIAAgPIgCAAIAAAFIABAAIAAAKIgBAAgAIqA/IAWAAIAAAQIAAAAIABgQIAAgGIgWAAIgBAGgAFSBPIAEAAIAAgHIgEAAgAJqBPIAWgBIAAgPIgdAAIACAQIADAAIACAAgAKhBOIABAAIADAAIAAgFIgEAAgAIjBDIAHAAIAAgEIAAAAIAAgGIgBAAIABAGIgBAAIAAgGIgGAAgAH4BDIAEAAIAAgKIgCAAIAAAGIgCAAgAGSAxIAAABIAAAHIAAAFIAAABIAAAEIAKAAIAAgEIAAAAIABgXIgLAAIAAAJgAEBA3IABAAIAAgFIAUAAIAAgLIgUAAIAAgCIAAAAIAAACIgwAAIgBAIIAxAAIAAADgAB6A3IADAAIAAgVIgEAAgAGzAyIAIAAIAAgBIAIAAIAAgJIgJAAIABAJIgGAAIAAgLIAAAAIAAALIgCAAgAGkAyIAPAAIAAgNIgPAAgAGfAyIADAAIAAgBIgDAAgAEtAxIAAABIACAAIAAgBIAdAAIAAgKIgcAAIAAgCIgCAAIAAACIgRAAIAAAKIAJAAIAAABIAFAAIAAgBgAg8ApIA5AAIAAgEIg4AAgAHuAnIABAAIgBgCIAAgGgAJdAmIABAAIAAgDIABAAIAAAAIgBAAIAAgFIgBAAIgHAAIAAAFIAAAAIAHAAgAKiAkIAEAAIAAgIIABAAIABgIIgCAAIAAgCIgDAAIAAAOIgBAAIgQgBIAAADIAAAAIAQgBgAEAAiIAAABIACAAIAAgEIAAAAIAAgCIAAAAIAAACIgCAAgAJiAjIAAAAIAJAAIAFAAIAAgBIAAgEIgFAAIgJAAIAAAFgAGAAiIAAgFIAAgCIAAAAIgBgHIAMAAIAAgHIgMAAIAAgEIAAAAIAAAAIAAAAIAAgEIAAAAIAAgBIAAgEIAAAAIgBgDIAAAAIAAgKIgEAAIgBAKIgIAAIgBAIIgFAAIABgFIgBAAIAAAAIABAAIAAgDIgBAAIAAgKIAAAAIAAAKIgGAAIAAADIgLAAIAAAFIAKAAIAAAEIgKAAIAAABIAKAAIAAADIgKAAIAAAQIAOgBIACAAIALgBIgBAGIAMABIAAAAgAEuAhIACgBIAAgBIgCAAgAEtAdIAfAAIAAgQIAAgDIAAAAIAAgFIAAgFIAAAAIABgIIgeAAIAAAAIgrgBIAAAAIgBAAIAAAAIgggBIAAAHIAAADIAAAEIACAAIAAgHIAXAAIABAHIAFAAIAAAJIgEAAIABAOIADABIABAAIAAgYIATAAIAAgEIgTAAIAAgDIAsAAIAAADIgBAAIAAAFIABAAIAAAIIgCAAgAJiAWIAAgCIgFAAIAAAAIgGAAIADAAIgPAAIAAABIAEAAIABAAIANAAIAAgBIAAABIABAAIAEABgAC7AVIAAAAIABgRIAWAAIAAgEIAAgDIgEAAIAAgHIAFAAIAAgNIAAgDIAAgGIAAgGIgFAAIAAgFIAAAAIAAAAIgDAAIAAABIADAAIAAACIgDAAIAAACIgNAAIAAgBIgBAAIAAAAIgBAAIAAgLIABAAIAAAGIAAgGIABAAIANAAIAAAGIADAAIAAgIIAWAAIAAAAIABgIIgJAAIAAgJIAKgBIABgIIgZgDIAZAAIgLAAIAAgKIgQAAIAAAGIgCAAIAAgGIgIAAIgFABIAAgGIAAgCIANgBIAAgCIgEAAIgJAAIAAABIgPAAIgBACIAQAAIAAAAIgVABIAAACIASAAIAAAEIgcAAIAAACIAYAAIAEgBIgDABIADAAIAAAEIgcAAIABAEIAAAAIAAABIAAACIAbAAIAAAJIgbABIAAACIABAAIACAQIAEAAIAUAAIAAAHIgUAAIgBAFIgCAAIACAAIAAAAIALgBIAKAAIAAABIACAAIgBADIgVgDIgBAAIAAAMIgEAAIAAADIAAAMIAEAAIAAgMIABAMIAVAAIAAAIIgaAAIAAAHIAAAOIADAAIAFABIgBgPIASAAIAAARIABgBIAAABgALUAUIAGAAIABgIIBKAAIgBgMIhJALIAAABIgHAAIAAAIgAJrARIAAADIAGAAIAAgDIgGAAgAKSANIARAAIADAAIABgBIABAAIAAgGIABgbIgDAAIAAAbIgTAAIgBAHgALUAGIAAAFIAHAAIAAgGIALgCIAAgYIgLAAIAAgIIBJAAIg9gEIAAACIgMAAIAAgCIgCAAIAAgBIAOABIAAgJIgBAAIgCAAIgLADIAAgFIANAAIAAACIABAAIAAAAIALAAIgLAAIAAgCIgBAAIAAgFIgNAAIAAgCIgfAAIABgOIgKAAIAAAAIgBAAIgBAfIAZAAIAAgBIACAAIAGgCIgGACIAAgDIAKAAIAAgGIAAgFIADAAIAAAKIgCABIACAAIAAAFIgDAAIAAACIgMAAIAAgCIgBAAIAAACIABAAIAAACIAMAAIAAAAIAAAIIgMAAIABAbIAJAAIACAAgAGdAFIAAAEIAFAAIAAgBIAAAAIAAgDIAAAAIgDAAIgCAAgAG4AIIAAABIANgBIAAgCIgBAAIgNAAgAGdAFIAIAAIAAADIAOAAIAAgDIASAAIABgFIgCAAIAAgDIgNAAIAAADIANAAIAAAEIgPAAIAAgEIAAAAIAAAAIgCAAIAAAAIgWAAgAHQAIIAQAAIAAAAIgBAAIAAgCIgDAAIgMAAgAHUAEIAMAAIAAACIAMABIAAgDIgMAAIAAAAgAJLAGIASAAIAAgCIgCAAIgDgRIgIAAIAAAKIgFAAgAHsAAIAAAAIABAGIAiAAIAAgCIADAAIAAgHIgDAAIAAgKIgjAAgAInAEIAIAAIABgHIgJAAgAHUAAIAIAAIAAgDIgIAAgAGdAAIAFAAIAAgDIgFAAgAEHgJIAOAAIAAgOIABAAIAAgDIgBAAIAAgIIACAAIAAgEIgTgFIAAAAIAAAAIAFAAIgHAAIACAAIgBAFIgGAAIAEAMIACAAIAAADIgBAAgAEugTIABAAIAPABIABAAIAAgFIAVAAIAAgPIgUAAIAAgBIgFABIAFAAIgBAMIgRgFgAFrgSIAAAAIAAgKIAAAKgAHcgWIAhAAIAAgIIAIAAIgGAAIATAAIAAAAIADAAIAAAAIgDAAIAAgBIAdAAIAAgGIgIAAIAAgBIgDAAIAAABIhQAAIAAAKIAIAAgAHEgWIACAAIAAgEIgCAAgAGOgeIAQAAIAAAIIAAgIIAEAAIAAABIACAAIAAgBIgGAAIAAgCIAEAAIACABIAAAAIAEABIABAAIAAAAIAKADIAAgBIAEAAIAAgCIABAAIAAAAIgBAAIAAgIIgNAAIAAABIgGAAIAAgBIgDAAIAAgBIgDAAIAAAAIgRgCIABADIAAABIAAABIAQAEIAAACIgQAAgAF9gWIAOAAIAAgOIgDgBIADAAIAAgBIgHAAIABAAIAAABIgJAAIAAgBIAAgBIgBAAIAAABIgPAAIAAgGIAAgBIACAAIABgNIgCAAIAAgCIACAAIAAgBIgCAAIAAgFIACAAIABgGIgDAAIAAgMIACAAIgCAAIAAgCIADAAIABgKIgEAAIAAgBIgBAAIAAABIABAAIAAAKIgCAAIAAAHIgQAAIAAAHIgBAAIAAgHIgFAAIAAAHIgDAAIAAAAIgBAGIAJAAIAAgGIABAAIAAAGIAQAAIAAAIIgZAAIgBgCIAEAAIAAgBIgEAAIAAABIgVAAIAAACIgCAAIAAgIIgUAAIAAAOIAaAAIAAADIAUACIAAgFIAXAAIAAABIAAAGIAAABIABAAIgBAAIAAABIgMAAIAKABIACAAIAAABIAAACIAAABIABAAIAAAIIAHAAIgBAIIALAAIAAgIIAAAIgAHGgcIAAgCIgCAAIAAgGIACABIAAgHIgLAAIAAAEIgDAAIAAABIAMAAIAAABIgJAAIABAGIAAAAIAIAAIAAACIABAAIABAAgAIygeIAwAAIADAAIgDAAIAAgBIgSAAIAJAAIgJAAIAAgFIgMAAIAAgBIgRAAIgBAGIAVAAIgGABIALgBIAEAAIAAABIgeAAgAIkgeIADAAIAAAAIgDAAgAJ9gjIAJAAIABgFIgBACIgJAAIAAADgAJEglIAMAAIAAABIAlABIABgFIgmAAIAAACIgMAAgADbgpIAAADIAJAAIAAgEIgJABgAFUgoIAAgBIADAAIgLAAgAGegqIAAAAIAAgBIAAAAgAF5grIACAAIAAgBIADAAIgDAAIAGAAIAEAAIAAgBIAGAAIAAgHIACAAIgBgGIgBAAIAAgCIgGAAIAAACIgSAAIAAAGIAIAAIAAAIIAAAAIgCABgAFAgrIAUAAIAAgCIgUAAgAGNgtIAIAAIAAAAIAJgBIAAAAIAAAAIADAAIAFgBIAAgLIgRAAIAAAFIAAABIgIAAgAD5g0IALAAIAAAHIAAAAIABgHIANAAIAAgGIgNAAIAAgCIgBAAIAAACIgLAAgAI0gzIgBAGIAAAAIABgGIAAgBIgGAAIAAgBIgBgFIABAFIgHAAIAAACIAHAAIAAAFIAAgFgAJEgzIAMAAIAAAFIARAAIAKAAIAMgBIAAgEIAAgBIgMAAIAAgFIgBAAIgKAAIABAEIgdAAgAG6g0IAAAAIAAAEIAHAAIAFAAIAAgFIgMAAgAHOgwIAGgBIAKAAIAWAAIAAgCIAPAAIAAgBIAAgBIgPAAIABgGIAPAAIAAgCIgDAAIAAgSIADAAIAAgEIAAgDIAAgCIAAgBIgDAAIABgMIgCAAIAAAFIgGAAIAAAGIgFAAIAAgKIgCAAIAAgRIACAAIAAgBIAIAAIABgCIgJAAIAAgHIAJAAIAAgFIABAAIAAAFIACAAIAAAKIAAAAIAAgBIABAAIAAgJIADAAIAAgRIAAAAIAAgIIgCAAIAAAIIgOAAIAAgOIgCAAIAAAOIgCAAIAAgIIAAAAIAAgDIABAAIAAgDIgBAAIAAgBIgOABIAAAAIgBAAIgBAAIAAAAIgVABIAAAAIgEABIAAgBIAEAAIgDgDIABAAIgBAAIAAAAIgBAAIAAAAIgOgBIAAgEIgCAAIAAAJIgBAAIAAABIABAAIAAAKIgBAAIAAABIABADIAAAJIgBAAIgEAAIAEALIAAAAIAAABIAAABIADAAIAAgCIABAAIAAACIAAgCIANABIAAACIAOAAIALAAIAAABIACAAIAAgBIAMAAIABgJIgNgBIAAgEIANAAIAAAFIAAAAIAAAOIgPgBIAAABIgZgBIAAAJIAZAAIAAADIACAAIAAgDIgCAAIAAgCIACABIALAAIACAAIAAAKIgCAAIgBAGIAAABIgKAAIAAgKIgCAAIgBADIgBAAIAAAGIAAACIAAACIAEAAIAAgCIAKAAIAAACIAAABIgOAAIAAACIAAAEIAEAAIAAgEIAKAAIgBAEIABAAIgBANIgJAAIAAgGIgEAAIAAAGIAEAAIAAADIgEAAIAAACIAEAAIAAAIIgFAAIAAABIgQAAgAIUgzIADAAIAAgBIgDAAgAGmhCIAAAFIADAAIAAADIAQAAIAAgDIABAAIgBgDIAAgCIACAAIAAgGIAAAAIAAgHIgBAAIAAAHIgBAAIAAAGIgQAAIAAgGIgDAAIAAgHIgCAAIAAAHIgHAAIAAAGIAEAAIAAAFIACAAIAAgFgAGdg8IACAAIAAgBIgCAAgAGLg8IAAAAIAAgBIAAAAgAG6g9IABAAIAAgEgAJdhTIADAAIAAAQIAKAAIAAACIACAAIAAgCIAMAAIACgQIgOAAIAAgEIAOAAIAAgCIgIAAIAAgWIAgAAIAIAcIAAgbIATAAIAAgBIgTAAIAAAAIgIAAIgCgGIgRAAIgNAAIgFAAIgBAAIAAAGIgGAAIAAAAIAGAAIAAAGIABAAIgBAGIgBAAIAAAKIgFAAIAAABIAFAAIAAAFIgLAAIgBgGIgCAAgAFzhCIAYAAIAAgGIgGAAIAAgHIgSAAgAEmhTIAAAQIAWABIAAgPIgBAAIAAgCgAEFhSIgBAPIAOAAIAAgEIgIgBIAIAAIAAgKgAKwhDIABAAIAAgBIgBAAgALBhOIAWAAIAAAHIAQABIAAgIIBHAAIAAgBIgDgfIhpAAIgBAVIAGAAIAAAKIgGAAgAKqhOIASAAIAAgBIABgIIgMAAIAAgYIAAAAIAAAMIgEAAIAAAMIgCAAIgBAJgACHhRIAFAAIgBgEIgEAAgAG4hTIAAABIAEAAIAAgBIABgFIgCAAIAAgPIgBAAIAAAHIgDAAIAAADIADABIAAAHIgZAAIAAACIgCAAIAAABIAFAAIAAgBIACAAIAAABIADAAIAAgBgAEFhTIAAAAIAAgCIAAAAgAEmhTIAVgBIAAgDIgVgCgAF5hVIAMAAIAAAAgAGmhWIADAAIAAgCIgDAAgAGhhWIADAAIAAgCIgDAAIAAACgAFzhWIAXAAIAAgKIgXAAgAIXhYIADAAIAAgBIgDAAgADMhcIACgBIAEAAIAFgBIAFAAIAAgCIgSAAIAAABIACAAgAFrhfIABAAIAAgBIgBAAgAEmhfIAWAAIAAgBIgBAAIAAgBIgVAAgAEFhfIAAgBIgLAAgAGlhiIABAAIAAACIADAAIAAgJIgDAAIgBAAgAFthiIABgEIgBAAgAE6hiIAAAAIABAAIAAgFIgBAAIAAAFgAIAhmIABAAIAAgDIAAAAIAAgCIAAgDIAAAFIgBAAgAG6hpIABAAIAAgHIABACIAAgEIAAAAIgBAAIAAgCIgBAAIAAACIgDAAIAAAAIAAAAIAAAJIADAAgAEYhwIAiAAIAAAGIAJAAIABgHIgBAAIAAgBIAAAAIAAABIgDAAIAAgBIgGAAIAAABIgfgBIgDACgAFthsIAFAAIAAgEIgEAAIAAgCIgBAAIAAACIAAAAgAGJhsIALgCIAAgEIgMAAgAIBhwIAAACIAAgDIABAAIAAgBIgBAAgABHhvIAQgBIgQAAgADdhwIADAAIAGgEIgMAAIADAEgAH1hxIAIAAIAAgBIgIAAgAGdhzIAAABIATAAIgBgDIgGAAIgMAAIAAACgAGWh6IAKABIgDACIAJAAIAAABIADABIAAgEIAFAAIgCgIIgDADIAAgEIADgCIAEAAIACgCIgCgKIAAgBIAAgBIgIAAIAAAAIgBAAIAAgIIACAAIAAgDIAMABIAAgFIgLAAIADgEIgBgBIgCgDIAAgJIgDAAIAAgDIADAAIAAgBIAIAAIAAgCIgIAAIAAgHIAHAAIgHgHIAAgCIgBAAIgBAAIAAAAIgUAAIAAAAIgYAAIAAgDIACgBIACgCIgBgBIADAAIgCABIACACIARAAIAAgDIgIAAIgDgFIgFgGIgBgBIgFgGIAAgGIgBAAIAAgHIABAAIABAAIARgBIgRgBIAAgCIAnAAIgCACIAFAAIAAABIgGAAIgGAFIAMAAIAAACIAQABIAAgGIgQgCIAPAAIAAAAIgDgDIgPAAIADgEIADgCIgtgBIAAgJIAEAAIABgCIgFAAIAAAAIAGAAIAAgBIgGAAIAAgJIALAAIgFAAIgGAAIAAgXIgCgCIgbAAIAGAIIAJAKIgHAGIAMAAIABACIABACIAAACIgLAAIADAEIABABIAHAAIAAAAIgHAAIAHAAIAAACIAAAGIgEADIgMAAIAEAEIABACIAAABIgGAAIAAAFIAMgBIAEAGIAAABIgDAAIADAAIAAADIAEAAIAAAAIACACIgBAIIABAAIAAAHIgBgBIAAAFIgLAAIgEgFIgEADIgGAFIAGAAIAAADIAHAAIAAgDIADAAIAAADIAAAAIAEAAIADAAIABAAIgCACIgGAFIAAADIgDAAIAAgBIgCABIgDADIAFADIADACIABABIAUAAIgCgCIASAAIAAACIAAAAIAAABIAKAAIACADIAAABIABAAIgNAAIAAAFIAQABIAAAMIgCACIgKAAIAEAEIAAAAIgIABIAAAGIAAABIgCAAIABAMIAMAAIACADIgOgBgACmh9IACAAIAAABIAAABIAAABIAEAEIAHABIACgHIABgBIAZAAIgFgHIgEgFIgNAAIgBAAIAAgBIgEAAIgMAAIAAABIgMAAIAKAMgACkh2IAEAAIAAgDgAGIh3IANAAIABgMIgBAJIgNAAgAFuh5IAAAAIAAACIAFAAIAAgCIgFgBIAAgGIAAAFIAAABIAAAAIAAABIAAAAgAE7h8IAAACIAIAAIAAABIABAAIAAgBIABgBIgBAAIAAgCIgBAAIAAACIgIgBIAAgCIAAAAIAAACgAFbh7IASABIAAgBIgKgLIgBgCIgHgIIAAgDIgCAAIAAAAIACADIAAAJIAIABIgIAAgAFEiDIAAgFIAAAAgAKyiFIAAAAIAAgMIAAAAgAJziGIAZABIgCgIIgXgBgAJmiHIALABIAAgIIgDAAIAAgGIgBAAIAAAGIgHAAgAFCiHIAAgBIgHgBIAAAAIAAACIAAAAIAAAAIAEAAIADAAgAEQiIIAAAAIAAgDIAAgBIgLAAIgXgCIgBAFIAgABIACAAIABAAgADKiJIACAAIAKAAIAAAAIgHAAIgFAAgAFEiTIAAAJIABAAIAAgJIAFAAIgBAAIAEAAIg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");
	this.shape_16.setTransform(470.5,195.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("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CAAIAAgBIgCAAIAAgBIgFAAIAAAAIAAABIgZAAIAAABIAJAAIAAAEIgJAAIAAADIAJAAIAAADIAAAAIAAABIAAAAIAAABIgJAAIAAADIAJAAIAAAAgACtEUIALAAIAAgDIgLAAgAJJERIAAABIAAABIAeABIABAAIAAgEgAC4EQIAWABIAAACIAHAAIAAgDIAiAAIgiAAIAAAAIgHAAIAAAAIgWAAIAAAAIgJAAIAJAAgAHEESIAKABIAAgBIgKAAgAI5ESIACAAIAAgBIgCAAIAAABgAEUESIAEAAIAAgBIgEAAgAD+ESIAHAAIAAAAIADAAIgDAAIAAgBIAAAAIAAABIgHAAgAFKESIAAgBIAAAAgAEFERIAAAAIAAgCIAAAAgAGXENIAEAAIAAAAIACAAIAAACIACAAIAAgCIAAAAIAAgDIABgCIAAgBIgCAAIAAgCIAAgBIACAAIAAAAIgCAAIAAgBIAAgBIgDAAIAAABIgEAAgAG8EIIAAACIAAABIAAABIAAABIASAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIABgCIgTAAIAAABgAEYENIAAAAIACAAIAAAAIgBAAIgBAAgAFeEKIAAACIABAAIAAABIATAAIAAgFIgTAAIAAgEIATAAIAAAAIgTAAIgBAAIAAAAIAAABIAAAAIAAADIgDAAIAAAAIgRAAIAJAAIAIgBIAAgCIAAgBIgRAAIANAAIAEAAIAAgBIgRAAIAAAAIAAAAIgNAAIANABIAAAAIgNABIAAADIANAAIAAACIgNAAIAAABIANAAIAAABIgGAAIAGAAIARAAIAAgBIAAgBgAD+EKIAHAAIAAADIAAAAIAPAAIAAgBIAGAAIAAgBIAAgBIgVAAIAPgBIAAgFIgWAAgADjEMIAXABIAAgCIAAgBIAAgBIAAgBIgJAAIAJgBIAAgCIAAgBIgWAAIAAAEIAHAAIAAABIgIAAIAAAAIgOAAIAAAAIgSAAIALABIAAABIghAAIAhABIAAgBIAHAAIAAAAIAIAAIADAAIADAAIAAgBIAIAAIAAABIgIAAgAE0EMIAJAAIAAAAIgCAAIgHAAgAGvEKIADAAIAAgCIgCAAIgBACgAEaEJIgBgDIAAgCIgBAAIAAACIAAACIAAABIABAAIABAAgAC4EJIAWAAIAHAAIAOgBIAAgEIgiAAIAAgCIgJAAgACJEIIAAABIAAAAIAkAAIAAgBIgIAAIAAgEIgcAAIAAAEgALSEFIAAACIAPAAIAAgDIgBAAIAAABIgOAAgALjEHIAGAAIAAgCIAHAAIAAgBIgHAAIgBAAIgFAAgAG8EDIAAABIAAABIAAAAIASABIAAgBIABAAIAAgBIAAAAIAAAAIgBAAIAAgBIgJAAIgJAAgAKBEFIA5AAIAAAAIAAgBIgWAAIAAABIgjgBgAAeEEIAEAAIAAgCIgEAAgAGxEEIABAAIAAAAIgBAAIAAAAgACsEDIAAgeIAqAAIAAgEIAOAAIAAAEIAQAAIAAgIIgeAAIAAgBIgHAAIgOAAIAAAAIArAAIAAAAIAIAAIAAgGIgIAAIAAAAIAIgBIAGAAIAAAAIAAAAIAAgGIgGAAIAAAAIgIAAIAAAAIgHAAIAAAHIgPAAIAAAAIAOAAIAAgHIgNAAIgBAHIgHAAIgOAAIgNAAIAAACIgJABIAAADIANAAIAAAAIgNABIgFAAIAAAAIgBAAIgBAIIACAAIgBAdIgcAAIAAABIAjAAgAD+ECIAHAAIAAAAIAPAAIAAglIgOAAIAAgCIgBAAIAAACIgHAAgAE9DdIAAAEIAAAEIANAAIAAAdIAAAAIABgdIAQAAIAAgEIADAAIAAAEIABAAIABgIIABAAIAAgCIgBAAIAAAAIgBAAIAAAAIgBAAIAAACIgBAAIAAgCIggAAIAAACgAEYD2IABgVIASAAIAAANIAAgNIACAAIAAgEIgCAAIAAgCIAAAAIAAACIgSAAIAAgCIgDAAgAKgDlIAEAAIAGAAIgGAAIAAgDIgEAAgAH/DeIAAAEIAZACIAAABIAGAAIAAgBIgBAAIAAgDIABADIADAAIAAgDIATAAIAAAAIgTAAIAAgDIAAgBIATAAIAAgDIgTAAIAAgDIAAAAIAAgBIAAAAIAAgGIATgBIAAgIIgQAAIgCAAIgBAAIAAAAIgiAAIAAADIAeAAIAAAGIABAAIAAACIgfABIAAAEIAMAAIAGAAIAHAAIAAgBIAFAAIABAAIAAABIgBAAIAAADIgeAAIAAAEIAZgBIAAgDIAFAAIAAAHIAAgDgAGXDlIAKAAIAAgDIgKAAgAI/DjIAyAAIAQAAIAAgCIAfAAIAAABIAEAAIAAgBIAWAAIAAgEIgaAAIAAADIgfAAIAAgDIhCAAIAAAEIgGAAIAAAAIAGAAIAAACgAGDDjIAMgBIAAAAIgMAAIABgBIALAAIABgFIgMABIAAAAIgFAAIAAAFIAEAAgAGiDiIAkAAIAAgBIAJAAIAAABIAUAAIAAgCIgMAAIAAABIgIAAIAAgBIgJAAIAAABIgkAAgAGbDhIAGAAIgGAAgAHXDeIAGAAIABgEIgGAAIgBAEgAHJDeIAAgJIAPAAIAAACIAAgCIAFAAIAAACIgFAAIAAACIAGAAIAAgCIAEAAIABAAIAOAAIADAAIABgCIAAgCIgXAAIAAgBIABAAIAEhMIgBgNIgDAAIgEAAIAAAOIgDBAIgPAAIAAgjIAAAIIgCAbIgGAAIAAgGIgEAAIgBAHIAAACIAAAIIAFAAIAAgIIAGAAIgBAIIADAAIAAAAIAAgIIAGAAIAAgCIAJAAIAAACIAAAIIAFAAIAAABIgFAAIAAAAIAAAAIgJAAIAAAAIgJAAIAAACIAAACIgFABIAAgFIgFAAIAAACIAAADIAAABIAAACIAKgBIAAAEIABAAIACAAgAGiDcIAPgBIABgCIAAgBIAAgDIgBAAIAAgBIAAgBIgEAAIAAAHIgKAAgAKBDWIAAADIhCABIAAAAIBCAAIAAABIAjgBIAAAAIAWAAIAAgBIgWAAIAAgDIgjAAgAGXDZIAAABIAFAAIAAAAIAFAAIgFAAIAAgBIgFAAgAHjDaIAOAAIAAAAgAGLDZIAAAAIAFAAIAAgEIAAgBIgFAAIAAgBIAFAAIAAgJIAAgCIgFAAIAEhQIADAAIAAgGIgCAAIAAgEIAAgBIABgHIAAgBIABgDIAAAAIAAAAIAAAAIAAgBIAAAAIAAgEIAJAAIAAgCIAAgEIgIAAIgBAEIAAAAIAAgEIABAAIABgHIgCAAIgHAAIgBAAIgFAAIgCAAIAAAFIgBAAIAAABIABAAIACAAIAFAAIABAAIAAACIgBAAIgFgBIgCAAIAAAEIgCAAIAAgEIgCAAIAAAIIACAAIAAADIACAAIAAACIgCAAIAAACIACAAIAAgCIACAAIAAACIAFAAIAAAAIgFAAIgCAAIAAAAIgCAAIAAACIAAAAIgBAFIABAAIAAAFIgBAAIAAAGIABAAIACAAIACAAIgBBJIgDAAIAAACIgCAAIAAAWIAFAAIAHAAgAFfDWIAAADIACAAIAAgEIgBAAIAAgBIABAAIAAgKIgBAAIAAgCIgBAAIAAACIAAAAIgBALIgTAAIAAgBIAAgGIAQAAIAAgFIgQABIAAgBIAQgBIAAAAIgQAAIAAgDIALgBIAAgBIgLAAIAAgCIgEAAIAAAEIAAAAIAAAAIgKABIAAACIAKAAIAAABIAAAAIAAABIgJAAIAJAAIAAAEIAEAAIAAAGIgBAAIgDAAIAAABIgKAAIAAABIAAADIAOAAIAAgDgAErDZIACAAIAAgEIgCAAIAAABIAAAAIAAADgAEADWIAFAAIAAADIABAAIAAgKIAAAAIgBAGIgFAAgAClDZIABAAIAAgDIgBAAgAGbDVIAAADIABAAIAAgDIAHAAIAAgCIgIAAIAAACgAEZDVIAMAAIgQAAIAAAAIACAAIACAAgAGhDTIAAgJIAAgCIAAgBIgGAAIAAABIAAACIAAAJIABAAIAFAAgAGkDKIAAAHIAAACIABAAIABgJIAAgCIgCAAIAAACgADBDPIAOAAIgOAAgAClDPIABAAIAAAAIAOAAIAAAAIANAAIAAgDIAJgBIgJAAIAAABIgBAAIgFAAIAAACIgHAAIAAgCIgOABIgBAAgAHmCOIgCA5IAAABIAAACIAAAAIAOAAIAAgDIAAAAIAAhOIgLAAgAGyDKIABAAIAAgCIgBAAIAAACgAEADKIABAAIAAAAIAFAAIAAAAIgFAAIAFAAIAAAAIAFAAIAJAAIABAAIAEAAIASgBIAAgBIAAgCIgSABIAAACIgIAAIADAAIAAgBIgOAAIAAgDIAOgBIAAgBIgOAAIAAgCIgFAAIAAACIgBAAIAAACIABAAIAAADIgBAAgADlDKIAPAAIAGAAIAAgCIABAAIAAAAIgBAAIAAgDIABAAIAAgCIgWAAgAFfDIIABAAIABAAIAAAAIgBAAIAAgEIABAAIAAgBIgBAAIAAgCIgBAAIAAAHIAAAAgAEZDEIASAAIAAgBIgSAAgAEZDBIAEAAIADhPIgGAAgAIiB5IABAAIABAAIAAgBIgBAAIgBAAgAHPB2IABAAIAAACIAPABIAAgCIATAAIAAgFIAAgCIgLAAIAAgCIALAAIAAgDIgLAAIAAADIAAgDIgBAAIAAAHIgHAAIAAgIIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgHIACAAIAAgCIAFAAIAAACIAAAAIAAAEIABAAIAAgEIALAAIAAgNIgJAAIgBAAIAAAFIgIAAIAAgFIgBAAIgPAAIgCAAIgEAAIgBAAIgCAAIAAAFIgGAAIAAgFIgCAAIAAAFIgSAAIAAAIIAHAAIAAACIANAAIAAgCIAAgCIABAAIAAACIAFAAIAAAFIACAAIAAAAIgCAAIgFABIAFAAIAAADIACAAIABAAIAAgCIAEAAIAAgBIgEAAIAAgEIAVAAIAAADIgMAAIgDAAIAAAGIgBAAIAAACIABAAIAAAIIgBAAgAHJB4IABAAIAAgCIADAAIAAgEIAAgCIAAgCIABgFIgEAAIAAgBIgBAAIgCAAIAAAHIACAAIAAABIgCAAIAAAIIABAAIABAAgAFxB4IADAAIAAgGIgDAAIAAAGgAFgB4IABAAIAAgGIgBAAgAFcB4IAAAAIABAAIAAgGIgBAAgAFXB4IAAgGIAAgCIAAgCIAAgDIAAgDIAAgBIAAgBIgLAAIAAAAIAAgBIAAAAIAAgGIgEAAIAAgDIAEABIAAAAIALAAIAAgCIAAgEIgPAAIAAgCIAPAAIAAAAIAAgEIgPAAIAAgCIAAAAIAAAIIgQAAIANAEIACAAIAAABIABAAIAAALIgBAAIAAADIAFABIgBAFIgDAAIAAAAIAAACIgBAAIAAAGIABAAIADAAIABAAIALAAIAAAAgAG7B2IAGAAIAAgGIgCAAIAAACIgEAAIAAAEgAGuB2IAFAAIAAgEIgFAAgAGoByIAAADIAAgDIAAgCIAAACgAGgBuIAAACIAAACIAAADIACAAIAAgHIgCAAgAC0BrIAHAAIAAAKIACAAIAAgDIAUAAIABgHIASAAIABgEIgTAAIAAgBIgUAAIAAgNIAWABIAAgBIAAAAIAAgCIgWAAIAAgIIgCAAIAAAIIgIAAIAAABIAIAAIAAABIgIgBIAAAEIAIAAIgBAKIgHAAgAIDBuIAAAEIAfAAIAAABIASAAIAAgFIgQgBIAAgFIAQABIAAgEIgQAAIAAgCIAQAAIAAgBIgQAAIABgqIgNAAIAAACIALAAIAAAAIgFAAIgGAAIgBAjIgSAAIAAAHIASAAIAAAEIgUAAIAAAAIAUAAIAAAFIgUgBIAAACgAKUByIACAAIAAgCIgCAAgADnBrIAGAAIAAAHIAHAAIAGAAIABgHIACAAIAAgDIAAgBIABAAIAAAEIAFAAIAAgEIAEAAIAAABIAGAAIAAgBIgGAAIAAgBIgBAAIAAgEIgDAAIAAAEIgGAAIAAgEIgCAAIAAAEIgUAAgAGbBwIACAAIAAgCIgCAAIAAACgAG7BvIAGAAIAAgBIgGAAIAAABgAEDBvIADAAIABAAIAAgEIgEAAgAI+BuIAKAAIAAgFIgKAAIAAAFgAGtBuIAGAAIAAgGIgGAAgAFvBuIAFAAIAAgCIgDAAIAAgEIgBAAIABAEIAAAAIAAAAIgCAAIAAACgAGbBuIACAAIABgGIgDAAIAAAGgAFgBrIABAAIAAgDIgBAAgAFcBrIABAAIAAgDIgBAAgAKUBqIACAAIAAgJIgCAAgAFgBnIAAAAIAAAAIAAAAgAHhBjIAFAAIAAABIABAAIAAgBIAAgBIgGAAgAI+BjIAKAAIAAgBIgKAAIAAABgAGeBjIABAAIgEAAIADAAgADnBhIAGABIAAgDIAHAAIAJABIAAgBIgCAAIAAAAIgHAAIgHAAIAAAAIgGAAgAEGBfIABAAIAAAAIgBAAgAGkBfIAEAAIAAgCIgEAAIAAACgAI+BdIADAAIAHAAIAAgBgAD0BcIAHAAIACABIAAgCIgCAAIAAgCIACAAIAAABIAGABIAeAAIABgEIglAAIAAgCIgCAAIAAACIgWAAIAAACIAIAAIAAACIAHAAgAA3BZIBDAAIAAACIAtABIAAgFIgGAAIAGABIgtAAIAAAAIhDAAgAFcBbIAEAAIAAgEIgEAAgAA3BYIAxAAIAAgGIARAAIAAgCIgRABIAAABIgBAAIAAgEIgwAAgAAPBWIANAAIAAgEIAAgEIgNAAgAEDBVIAEAAIAAAAIgEAAgAD7BVIACAAIAAAAIAAgGIgCAAgADUBQIAAAFIAgAAIAAgGgAGWA7IAAgBIAAgBIABgFIADAAIgIAAIAAgMIAMAAIACABIAAgBIABAAIAAgBIgBAAIAAABIgCAAIgNgCIgHAAIAAgBIADAAIgBAAIAGAAIAAAAIAKAAIAEAAIAAAAIABAAIAAgDIgBAAIAAgEIABAAIAAgBIAAgDIgHAAIAAgDIAAAAIAGAAIAAAAIABAAIAAgCIgBAAIAAABIgGAAIAAgBIgIAAIAAgCIgIAAIAAADIgLAAIAAABIADAAIAAAAIAEAAIAAAAIAEAAIAAADIgLAAIAAAEIALAAIAAACIAIAAIAAABIgIgBIAAAEIgFAAIAAAAIgPgEIAAACIgHAAIAAACIgdAAIAAgEIgKAAIAAAEIAAgBIAAADIAAAAIAIAAIACAAIAAgBIAdAAIAAABIATgBIADAAIABAAIAAADIgBAAIAAABIABAAIAAABIgBAAIAAAAIABAAIAAADIgDAAIAAgGIACAAIAAgBIgWAAIAAABIgKAAIAAACIAKAAIAAABIAAAAIAAADIgPAAIAAADIAPAAIAAAAIAAAAIAAABIAAABIAAACIASAAIAAADIADAAIAAgDIgBAAIAAgBIABAAIAAgCIgBAAIAAgBIABAAIACAAIAAAHIAMAAIAAACIgMgBIAAADIAEAAIABAAIAHAAIACAAIACAAgAGDA7IAAgDIgCAAIAAADIABAAIABAAgAHBA7IAAgDIgBAAIAAADIAAAAIABAAgAHfA5IAAABIAHAAIAAgBIAAgEIgHABIAAADIAHAAIgDAAIgEAAgAHIA6IACAAIAAgCIgCAAgAFCA0IAGAAIAAAFIAAAAIAAABIAAAAIAAgBIAPAAIAAgFIAAgDIgGAAIgFgBIALAAIAAAAIAAgDIAAgDIAAAAIAAgBIAAgBIgFAAIAAgBIgBgBIgJAAIAAABIAAAAIAAACIAAAAIAAABIAAAAIAAAGIAAAAIAEAAIgEAAIAAAAIAAABIgGAAIAAADgAKXA3IAAAAIAQAAIgQAAIAAAAIgIAAIAEAAIAEAAgAHIA0IAAACIABAAIABAAIAAgBIAWAAIAGAAIABAAIAAgBIAWAAIAGAAIAAgEIgZABIAAgBIgDAAIAAgCIgBAAIAAgBIABgDIAAAAIgBAAIgHAAIgBAAIgOgBIAAgBIAOAAIAAABIABAAIAIAAIAAgHIgKAAIAAACIgNAAIAAgEIgIAAIAAAAIAVAAIAAAAIAKAAIAAgCIADAAIAAAEIgDAAIAAACIADAAIAAABIgDAAIAAAEIASAAIAAgEIgDAAIAAgHIAEAAIAAgEIgEAAIAAgEIgMAAIAAABIgDAAIAAgBIgPAAIAAgBIgIAAIgLAAIAAABIAAAAIAAABIAAAAIAAADIAAAAIAAAEIAAAAIAAAHIADAAIAAAHIABAAIAAACIgBAAIAAADIgHAAIAAgBIABAAIAAgCIgBAAIAAgEIABAAIAAgBIgCAAIAAAIIg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IAAACIgFAAIgFgBIAAAAIgEgBIgCAAIAAAAIgBgBIgGAAIAAABIgLAAIAAgBIgMABIAAgBIgBAAIAAABIgKAAIAHACIgHAAIAAABIAAADIAAABIAKAAIAAgBIAMAAIABAAIAAAAIAAAAIAAgDIAAgBIAYAAIAAABIgGAAIAAADIAGAAIAAABIAAAAIAAACIAKAAIAAgCIABAAIAAgBIANAAIAAABIAFAAIAAACIAJAAgAEEAdIAAABIAJAAIAAACIAAAAIAAgDIADAAIAAgEIgDAAIAAgCIADAAIAAgBIgDAAIAAAAIgIAAIAIAAIAAADIgaAAIAAAFIARAAIAAgBgADnAcIABAAIAAgBIABAAIAAgCIgBAAIAAgEIgBAAIAAAAIABAAIAAgBIALAAIAAABIABAAIAAgFIgBAAIAAADIAAAAIAAgDIgGAAIAAADIgEAAIAAgDIgBAAIAAgCIgBAAIABgXIAAAAIACAAIADgBIAHAAIAAAAIAAgCIAaAAIgBAbIAAAAIABgbIACAAIAAgPIgNAAIAAAEIgCAAIAAgBIgBAAIAAgEIgMAAIAAAFIANAAIAAACIADAAIAAAFIgQAAIAAgHIgTAAIAAgBIgNAAIgBAIIAOAAIgBAgIAHAAIAAAAIgHAAIAAAFIAHAAIAAAEIgoAAIAAgCIAhAAIAAgBIghAAIAAADIgIAAIABADIAHAAIAAAAIAhAAIAAgBIACAAIABABIACAAIACAAgAAMAaIBWAAIAAgBIgSAAIAAgCIAAAAIAAAAIhEAAgAJ/gJIAAAgIAAAAIAAgBIAWAAIAAgfIgWAAgAG0AXIAMAAIAAAAIACAAIAAgBIgOAAgABQAVIAAgBIARAAIAAgCIgRABIAAABIg0AAgAELAUIACAAIAAAAIAAAAIAAAAIADAAIAAgBIgDAAIAAgCIAAAAIAAACIgEAAgAFlAUIADAAIAAgBIgDAAgAFSAUIAOAAIAAgCIgOAAIAAABIAAAAgAEjAUIANAAIAAgBIgBAAIgCAAIACAAIgMAAgABQAQIARAAIABgoIgTAAgAFmgMIAAACIAAADIgBALIAAALIADAAIABgfIgIAAIAAgHIgOAAIAAgBIAAAAIAAABIgDAAIAAgBIgNAAIAAABIgTAAIAAgEIgWAAIAAADIAAAAIAAABIAAACIAAAFIAWAAIAAgFIAgAAIAAAFIADAAIAAAAIgDAAIAAAFIADAAIgBAaIABAAIAAgaIAOABIAAgCgAEZAPIAKAAIAAgbIgJAAIgBAbgACzAOIAAgjIABAAIAAgCIgFAAIAAgBIAAAAIAAABIgJAAgAGZgMIAAAGIAHAAIAAALIABgOIABAAIAAgGIgBAAIAAADIgIAAIgBgGIABAAIAAgBIgBAAIAAAAIABAAIAAgCIgBAAIAAgDIgLAAIAAABIgFAAIAAgMIABAAIAAgHIgBAAIAAgDIAAAAIgDAAIgBAAIgEAAIAAADIAAADIAFAAIAAABIgFAAIAAADIAFAAIAAAMIgGAAIAAACIAJAAIAAADIAAAAIAAgDIAFAAIAAACIgCABIACAAIAAACIgOAAIAAAEIAJAAIAAACIAAAAIAAgCgADJgGIAAAAIAAgKIAAAAgAJvgJIAQAAIAAgBIgQABgAIpgKIgLAAIALAAIAAABIANAAIAAgBIgNAAgAIBgJIAAgBIgHABIAAgBIAAgCIgEAAIAAADIAEAAIADAAIAEAAgAHEgMIAWAAIgBACIAQAAIAAAAIAAgDIAAAAIAAgBIAAAAIAAABIgDAAIAAgBIgigBgAGvgKIABAAIAAgCIgBAAgAJBgNIA6AAIgQACIAUAAIAAgFIg+AAgAITgNIAWAAIAAABIANAAIAAgBIgNAAIAAgDIABAAIAAgEIAMAAIAAgEIgMAAIAAgEIAMAAIAAgGIAAgEIAAgBIAAgzIAAgHIgMAAIgBAPIAAAQIgCAbIgTAAIAAgKIAAALIAUAAIAAAEIACAAIgBAGIgVgBgAIBgNIAAAAIACAAIAAAAIAAgDIAAgEIgJAAIAAgEIgGAAIAAAIIACAAIAAADIAEAAIAAAAgAHDgUIABAAIAAAEIAIAAIAOAAIAMAAIAAgEIADAAIAAgEIglAAIAAADIgBAAgAGcgTIAAACIAFAAIAAgCIABAAIAAgFIgBAAIAAADIgFAAIAAACIAFAAIgFAAgAFlgUIABAAIAAgBIAQAAIAAgCIgNAAIAAgBIgEAAgADJgVIAAAAIAAgCIAAAAgADqgbIADAAIAAgBIgDAAgADUgbIANAAIAAgBIgNAAgAFTgbIAAAAIAAgGgAEDghIALAAIAAAFIAAAAIAAgIIACAAIAAgEIgEAAIAAACIAAABIgJAAgAC1gcIAUAAIAAgMIgIAAIAAADIgMAAgAHqgnIAAAEIAKAAIAAAGIAPAAIgBgPIAAAFIgYAAIAAgLIAAALIgEAAIACg9IgBAAIgBA9IgaAAIAAg+IAGAAIABgIIgBAAIAAgBIABAAIAAgJIAAgBIgBAAIAAgGIACAAIAAgBIgCAAIAAgGIACAAIABgCIgLAAIAAAIIgGAAIAAgEIABAAIAAgCIAAgCIgDAAIAAAIIgEAAIAAABIAAADIAHAAIAAgDIAFAAIAAADIACAAIAAADIgCAAIAAAAIgFAAIAAABIgBAAIAAgBIAAAAIAAgBIgCAAIAAABIgEAAIgBALIAFAAIAAAKIACAAIAAgDIAAAAIAAgCIAAAAIAAgBIAAAAIAAgEIAAAAIAAgFIAGAAIAAANIABAAIAAACIgBAAIAAA8IgHAAIAAgGIgBAAIgHAAIAAAHIgNAAIAAgBIgIAAIAAABIgEAAIAAgBIgGAAIAAABIgMAAIAAgEIAEAAIAAgDIgEAAIAAADIgEAAIAAAHIAvAAIAAACIAIAAIAAgCIABAAIAAACIAIAAIAAgCIAaAAIAAAGIADAAIAAgGIABAAIAAgEgAD0ghIANAAIAAgEIgNAAgADighIASAAIAAgFIgSgBgAFlgjIAEAAIABgDIAAgBIgFgBgAFDglIAAACIAbAAIAAgFIgLgBIAAADIgEAAIAAgCIgCAAIAAACIgKAAIAAABgAEZglIALAAIAAACIAMAAIAAgDIgXAAgAD0gmIANABIAAgBIgBAAIAAgCIgMAAgADBgpIAGAAIAAgCIgGAAgAFQgqIAOAAIAAgDIgLgBIALAAIAAg2IgKAAIAAAAIgBA2IAAAEIgDAAgAFNguIAAAEIAAAAIACAAIAAAAIgBAAIAAgbIgBAXgAEMgqIAEAAIAAgBIgEAAgAD0gqIANAAIAAAAIgBAAIAAgBIgMAAgADegqIgIAAIAUAAIAAAAIgIAAIAAgBIgEABgAEkgqIAAAAIgFAAgAEOgtIAAACIACAAIAAgCIgBAAIgBAAgADBgtIAGAAIAAgBIgGAAgAGjgtIABg1IgDAAIAAgGIAIAAIAAgBIAEAAIAAgEIABAAIAAAFIAFAAIAAACIAAAAIAAgCIAAAAIAAgBIAAAAIAAgEIAAgFIAAgFIgKAAIAAgBIgMAAIAAAGIgOAAIAAgHIgCAAIAAAHIgCAAIAAAEIAAgEIgCAAIAAgHIAAAAIAAgCIABAAIAAgDIAAgBIgBAAIAAgDIABAAIAAgDIgBAAIAAgCIAAAAIAAgDIgEAAIAAADIgBAAIAAAIIgDAAIAAABIADAAIAAADIABAAIAAACIgEAAIAAABIAAAAIADAAIAAAGIgDAAIAAACIAAADIADAAIAAAFIgDAAIAAAEIADAAIAAACIAFAAIAAgCIACAAIAAgEIgCAAIAAgCIACAAIAAgEIAAABIAAADIACAAIAAACIgBAAIAAAEIABAAIAAACIABAAIAAgCIAAAAIABgEIgBAAIAAgFIATAAIAAALIgEAAIAAAdIAAAYIAEAAIACAAgAGUhkIACAAIAAgEIgCAAgAFlhkIADAAIABgEIgEAAgAFShkIAMAAIAAgOIgKAAIAAgFIgCAAIAAAFIAAAHIACAAIAAADIgCAAIAAAEgAFOhkIAAAAIAAgEIAAAAIAAAEgAElhkIAMAAIAAgEIgMAAgAIWhoIAVAAIAAADIAHAAIAAgJIgCAAIAAABIgFAAIAAgBIgCAAIAAgCIACAAIAAgFIAAAAIAAgCIABAAIgBACIAHAAIAAgJIgGAAIABgHIgCAAIAAgCIgCAAIAAACIgZAAIgBAHIAaAAIAAAGIgaAAIAAABIAaAAIAAACIgSAAIAAAFIAAAAIAAADIAAAAgADPhxIAAAAIAAACIAUAAIAAAIIAIAAIAAgIIAAgCIAAgEIgcAAgAHshnIAAAAIABgHIgDAAIAAgEIAYAAIAAACIAAAAIAAgCIAAgFIAAgBIgYAAIAAAAIgDAAIAAAAIgHAAIAAABIgCAAIAAAFIAJAAIAAAFIgJAAIAAAFIAJAAIAAABIABAAIAAgBIAAAAIAAABIACAAIACAAgAHzhoIASAAIAAgFIgSAAgAFOhyIAAAHIAAAAIABgMIgBAAIAAAFgAEPhsIAAAAIAIAAIAAgFIAAgCIgIgBIAAgDIAIAAIAAAAIAAgCIAAgCIAAgEIgIAAIAAgCIgCAAIAAAAIgNAAIAAgBIANAAIgDgDIADAAIAAgFIgFAAIACAFIgVAAIAAADIAKAAIgLABIAAAIIABAAIAAgGIALAAIAAAEIgBAAIAAACIAAACIABAAIAAACIgBAAIAAAGIABAAIAAADIANAAIACAAgADwhxIAEAAIAAAFIABAAIAAgDIABAAIAAgHIgBAAIAAABIgFAAIAAAEgAF2htIAJAAIAAgFIgJAAgAFlhtIAFAAIAAgFIgBAAIAAgGIgDAAIAAAGIgBAAgAIwhwIACAAIAAgCIgBAAgAIFhyIAAAAIAAgFIAAAAgAJNh4IAAABIBeAAIAAACIAFAAIAAgQIgFAAIAAgbIgLABIAHAaIAAAAIhIAAIAAAHIgSAAIAAAGgAD1h3IABAAIAAAAIAAgCIgBAAgAFSh4IAAAAIAMAAIAAAAIgKAAIAAgBIgCAAIAAABgAFOh4IAAAAIABAAIAAgBIgBAAIAAABgAFmh4IADAAIAAAAIAAgBIgDAAgADIh5IABAAIAAgCIgBAAgACNh9IAjACIAAgDIgjABgAHfh+IAIAAIAAADIABAAIAAgDIALAAIAAgBIgLAAIAAgEIgBAAIAAAEIgIAAgAGdh7IAMAAIAAgDIAAAAIAAgBIgMAAgAGUh+IAAADIACAAIAAgEIgIAAIAAgDIACAAIAAgFIgEAAIgBAFIACAAIAAADIgCAAIAAAEIADAAIAAgDgAFlh7IABAAIAAgDIADAAIAAgBIgEAAgAB2h/IA6AAIAAgBIAHAAIAAAAIALAAIAAgBIABAAIAAABIAFAAIAAgBIABAAIAAAAIgSAAIAAgBIgHAAIAAgHIgZAAIAAAHIghAAIAAABIgKAAIAAABIAKAAIAAABgAAxiDIAtADIAAgKIgEAAIAAABIgpAAgADriBIAFAAIAAAAgAFOiCIgMAAIAOAAIAAgBIgCAAIAAABgAGUiCIACAAIAAgDIgCAAgAGpiCIABAAIAAgFIgBAAgAE3iDIAXgBIACAAIAAgBIgCAAIAAgDIAAgBIgXAAgAHniFIABAAIAAgCIgBAAgAJfifIAAAYIAFAAIACgYIgHAAIAAgBIgNAAIANABgAIxiaIAAAAIABACIAAAAIgBgCIAAgGIgBAAgAIpigIACAAIAAgCIAAAAIgCgBgAH9imIADAAIAAACIAAACIAAACIADAAIAAgBIAAgBIAAgCIAAAAIABgCIAAAAIAAgBIAAAAIAAgBIAAAAIAAgCIgEAAIAAADIgEAAgAHLihIAHABIAAgFIADAAIAAgBIAAgCIAAAAIAAgBIgDAAIAAgBIADAAIAAgBIAAAAIgDAAIAAgEIADAAIAAgBIAAgBIAAgBIAAgEIgDAAIABgNIABAAIAAAAIgBgCIgBAAIgCgDIgLAAIAAADIAAACIAGAAIAAAEIAAAHIgGAAIAAgBIgDAAIgMAAIgBAAIgFAAIgGAAIAAAAIAAAAIAAAAIgSAAIASAAIAAgBIgRAAIASgBIABgBIABgBIgCgBIAFAAIABgBIgGAAIgBgBIAAAAIgCgDIAGAAIgCgDIgCgCIg4AAIAAAAIABACIAHAAIAAADIAKAAIAAADIAJAAIAAAAIgHAAIAAABIAHAAIAAAGIgJAAIAAADIgDAAIABACIAAAAIACADIAAAAIABAAIACAAIAAAEIgDAAIAAgDIgKgBIAAADIAAABIAKAAIAAADIgKAAIAAABIAKAAIAAAEIABAAIAAgCIADgBIAAgBIABAAIAAADIAAAAIAAABIAAAAIAAABIAEAAIAAABIABAAIAAgBIAHAAIAAgBIAIAAIAAgBIgIAAIAAgDIAIAAIAAgBIgEAAIADgDIABAAIAFgEIgCAAIABAAIABAAIAEgFIAEAAIAAAFIACAAIABAAIAAAAIADAAIAAgCIgBAAIABgBIAAgCIgGAAIAAgDIAGAAIAAADIASAAIgDADIgCACIgCACIAHAAIAAAFIgGAAIAGAAIAAACIgOgBIgBABIgEAAIAAACIACAAIACgCIAAACIAPAAIAAAFIACAAIAAgFIAGAAIAAACIABAAIABAAIAAADIgBAAgAIuimIABACIACAAIAAgCIA1AAIAAAAIAxAAIAAgBIgEAAIAAgBIgtAAIAAABIg4gBIgBgDIAAAAIAAADIgCAAIABgDIgDAAIAGAAIAAgBIgDAAIAAgBIADAAIAAgBIAAgBIgDAAIgBgBIAEAAIAAgBIgEAAIAAgBIgCAAIgDAAIgFABIgOAAIAAABIAAABIAWAAIAAAEIAAAEIgkAAIAAABIAkAAIAAACIACAAIAAAAIAAgCgAHcioIAAACIAMAAIAAABIALAAIAAgDIgJgBIAAABIgOAAgAEBilIANAAIAAgFIARAAIgBgBIAAAAIAIAAIABgBIABgBIACgFIgFAAIgMAAIgCAAIgBgCIAAAAIACAAIAOABIAFAAIABgBIAAgBIgEAAIABgBIgQAAIAAAAIgLAAIAIAAIgDgEIgCAAIgBgBIAAgBIgBAAIAAgBIgBgBIAAAAIAAAAIAAAAIAAADIAAABIgSAAIADADIAPABIg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AAIgBgBIgFAAIABABIgFAAIABABIgFAAIAAgBIgNABIAAAAIgIAAIgBAAIgCAAIgBAAIgCAAIAAABIAgAAIABAAIAJAAIAAAAgABDjGIAEAAIAAgBIgEAAgACqjHIAOAAIAAAAIgOAAgACXjHIAMAAIAAAAgADUjHIATAAIAAgBIgGAAIAAgCIgBAAIAAgBIgHAAIABABIABABIAAABIgHAAgACqjHIANAAIABAAIAFAAIAAAAIgCgBIgEAAIAAAAIgNAAgACKjHIAZAAIgZgBgAFbjJIAAAAIABAAIAAAAIgBAAgAFSjJIABAAIACAAIAAAAIACgBIgGAAIABABgAFqjKIgPgQIAAAAIgDgEIADADIgEgEIgHgKIAFAAIgCgDIgGAAIgEgEIgCAAIADAEIgCAAIgDgEIgGAAIAAgBIgDAAIACAAIAGAAIACAAIgBgBIgBgBIgBAAIgCgCIAAAAIAAgBIAEAAIABABIADAAIAAgBIAAAAIABAAIgBgBIgCgDIgDgDIAAABIgDgEIgCgCIABAAIAJAAIgJgBIABAAIgCAAIAAAAIgBAAIABABIgBAAIAAgBIgFAAIAAAAIgBgCIAFABIABAAIgBgBIAEAAIABgBIgGgBIgBAAIABACIgFAAIgBgCIgDAAIABgBIABAAIAAAAIACgDIgDgDIgFAFIgeggIAFgEIgOgOIgFAEIAHAJIgBACIADADIACADIACgBIALAOIgMgMIgSAQIADADIACgBIAIAJIABgBIACACIgBAAIALgKIgCgCIACgBIACACIAMANIACAAIAGgBIACgBIABABIABABIgFAAIAAABIABABIABACIgFAAIgCgCIgBAAIACACIABABIAHAHIABAAIAAABIgBAAIACACIABgBIABABIgDACIAEAAIAAAAIACAAIABABIADAAIACACIgGAAIABABIgDAAIAAgBIgHAAIgBABIgDAAIADAAIgNAAIABABIALAAIABgBIAMAAIAAABIABAAIgBAAIAAAAIABAAIAEAFIgNAAIgFgFIgPAAIAEAFIAEAAIABABIgEAAIACACIAcAAIAJALIAGAGIAFAFIAFAHIAAAAIAAAAIABACIAQAAIAAAAgAC1jKIAEAAIAAAAIgEAAIAAAAgAF3jpIAKAAIgBACIALAAIAXAdIACAAIgWgdIgBgCIAAgBIgDgCIgCgCIgBABIgBAAIgBABIgRAAIADADgADgjQIAAABIABAAIAAgFIgBgBIAAAAgAHcjjIgDgEIAFAAIgFAAIAAAAIADAEIAAAAIAAAAgAGajmIABABIALABIAAAAIgCgDIgBgBIgBgBIgCgCIgCgDIgLAAIgCgDIgCAAIAEAFIgFAAIADADIAGAAIgGAAIABACIAHAAIABABgAHpjmIgGgBIgEAAIAKABgAG2jpIAAABIABAAIAEAAIAAgBIgFAAIgEgEIAEAEgAHRjpIAKAAIgCgDIgFAAIgDADgACujsIAMAAIABAAIAAAAIAAgBIgNAAgAGIjuIAAgBIgBgCIgCAAIADADgAHJj1IgFAGIAAAAIAEAAIAKAAIgBgBIAAAAIAAgBIgDgEIgBgCIgHAAIAEgDIAHgGIAGAAIgBAAIAIAJIABACIAHAAIgCABIAKAAIACgBIAAAAIACgBIgEAAIgDgEIAHgGIABAAIAEAAIAFAAIACgBIgCgCIgNAAIgBgBIgIgKIAIAKIgJAAIgBgDIgCgDIgCABIABABIgCAAIgDACIgCACIAEAAIAAABIAAAAIgJAAIAFAAIAAgBIgFAAIAAABIgCABIAAAAIgBgBIgBAAIAAgBIgCgCIACACIAAABIgEAAIAAgBIgCgDIgBAAIABABIgCAAIgGAAIABACIABABIAIAAIgBABIgDACIAAAAIgCACIADAEIgEgDIgIAGIgCAAIgCACIgBABIAAAAIABABIAAAAIACACIAEAAIAFgEgAGOjzIAAABIABABIAAAAIABAAIABAAIAFAAIAAABIAGAAIAAgBIgBAAIAAAAIgFAAIABAAIgHgBIgCgCIAAAAIABAAIADgDIgBAAIAAAAIABAAIACgCIAAgBIgFgGIgCgBIACAAIgBgBIgBgBIgBAAIgBAAIgBgCIgBgBIgBAAIgGAAIgEAAIAAAAIAAgBIgDgCIgDADIgBAAIgCACIABgBIADAAIgBgBIADAAIABABIAAABIABABIAAABIgCAAIABAAIACAAIACACIAEAFIgCABIADADIAAAAIACAAIAAAAIABACIABABIABABIgBAAIAAABIAAABIABAAIACAAIAAAAIgBAAIABgBIABgBIABAAgAFvjyIAVABIABAAIACAAIgBAAIAAgBIgXAAgAFOjxIAAgBIAAAAIgHgBIABABIABABIAEAAIABAAgAGZjzIABAAIgBgBIAAABgAF/jzIACAAIgCgCIgBAAIABACgAH8j0IAPAAIAAgBIgQAAIABABgAGbj1IgBAAIABAAIACgCIgCACgACyj1IAFgDIgIgBIAAABIgBADIACAAIACAAgAGuj3IABAAIACACIAHAAIAAAAIgBgCIAAAAIgBAAgAEJj1IAAgBIgBgBIgDAAIgDgEIgBgBIABAAIgCgCIAAAAIgCgCIgEAEIAEAAIADAAIgDAAIgHAGIAPAAIABABIACAAIAAAAgAEnj2IgFABIAOgBIgDAAIgRAAIAAAAIgDAAIAAAAIAAABIAAgBgADsj3IABAAIAAgBIgBAAIAAABIgBAAIABAAgAF/j3IAAAAIgDgCIADACgAGAj3IABAAIgBgBgADNj4IgDgEIgDAAIgBgBIgBgBIgDgEIgFAEIgCABIACABIACADIABABIAJAAIAAgBIAEABgACvj8IAAAAIAAADIAJAAIACgDIABAAIAAAAIgBAAIgDAAIgCgBIgGAAgAFLkCIAAAAIAGAGIAFgEIACgBIgBgBIAAAAIAAAAIgBgBIgCgCIgBgBIgDAAIgIAAIgCAAIgCAAIgBABIAGAAIACACIAKAAIABABIgLAAIAAgBgADjkGIAAABIACACIABABIAAAAIADAEIAFgEIAEAAIACgDIAAgBIgDAAIACgBIAAAAIACgBIgBgBIAAAAIgFAAIgGAAIAAAAIgEACIAAAAIgDAAIABABgAGokCIAAAAIABABIABABIAGAAIgBgBIgCgBIAAgBIgBAAIABABIgFAAIAAAAgAGfkAIgCgBIAJAAIgCgBIgBgBIgJAAIABABIACABIACABIAAAAIAAAAgAGYkAIgBgBIgBgBIgBgBIgBgCIAFAAIgBgBIgFAAIABABIgDAAIgBgBIADAAIgBgCIgCABIgDgEIgEAAIAEAFIABABIgBAAIABABIAAgBIABACIgBAAIABABIABABIABAAIABABIAGAAIAAAAgAG1kAIgBgBIAMAAIgBAAIAAgBIgBAAIAAgBIgBAAIABABIgLAAIABABIABABIAAAAgAHFkBIABAAIgBgBIgCAAIACABgAFzkCIABAAIAEAAIgBAAIgDAAIAAgBgAFdkCIADAAIAAAAIgDAAgAD3kFIABAAIACABIABACIATAAIgBgBIAQAAIADgCIABgBIgJgBIgKAAIABABIAAABIgEAAIAAgBIgCAAIABgBIgCABIgEAAIAAABIgGAAIgBgBIgGAAgAH8kDIAEAAIgBgBIgDAAgAG/kEIAAABIADAAIAAgBIgBgBgAFykDIABAAIgCgCIAAAAIABACgAH6kEIABAAIAAgBgAG3kEIAGAAIgBgCIgBgCgAC7kGIAAAAIgLAAgAEKkHIADAAIAAAAIgDgBgAE6kTIADADIgGAFIADADIAJgBIgGgHIACgCIgDgDgAFHkJIAAAAIAAAAIAAAAgAE/kSIAHAJIAGgGIgHgIgAGVkLIAAAAIgBAAgAFwkSIAGAHIAEAAIgGgGIgCgDgAFskLIAAAAIgEgEIAEAEgADuklIAIAJIgKAJIABABIACADIADADIAAAAIgDgDIALgJIABABIAOgMIgBgBIgEgEIgJAHIgHgJgADgkcIAGAFIABgCIgFgFgAEYk1IACABIACACIAJgHIgCgEIgGAGIgBgBgAGUlJIACACIABgCIgBgBIgCABgAK3EeIAAAAIgTgBIAAABIg5AAIAAgDIgEAAIABgDIA8ABIAAABIATgBIAAADIAFAAIAAACgABOEWIAAgEIAAgCIANAAIAAACIAEAAIAAAEgAggEPIA/ABIg/AAgAIYEMIAAgFIAAAAIABACIAEAAIAAABIgEAAIAAABIAAABgAIdEJgAI/DhgAFKDKIAAgBIABAAIAAABgAFKDFIAAAAIABAAIAAAAgAHKBwIAAgBIADABIgCAAIgBAAgAHNBwIAAAAgAFMBwIAAgFIAAAAIAAAFgAA3BmIAdAAIgdABgAHBBbIAAgDIAAAAIAAADgAG0BbIAAgDIAAAAIAAADgAGSA5IAAAAIAEAAIgEAAgAHmAxIAAgBIABAAIAAABgAHeAxIAAgBIABAAIAAABgAHQAsIAOABIABAAIAHABIgHAAIgBAAIgOAAgAHmAuIAAAAgADoArIAAgCIAMAAIAAACgAB6AnIAAgGIAAAGgADnAmIAAgCIABAAIAAACgAHQAlIAAAAIANAAIAAAAgADoAkgAGSAeIAAgBIAIAAIAAABgAFiAdIgNgDIALAAIAAADIADAAgAHmAaIAAgDIABAAIAAADgAEjAaIAAgBIABAAIAAABIABAAgAB6AaIAAgBIAKABgAFTAZIAAgCIANAAIAAAAIAFAAIAAAAIAAACgACQAZIAAgDIABAAIAAADgAHnAXgAEjAXIAAAAIABAAIAAAAgAEkAXgAGZgJIAAgBIAHAAIAAABgALCgKIAAgBIABAAIAAABgAJ/gUgAARhnIgYAAIABgKIANAAIAAACICpAAIAAAIIhkAAIg7ABIAAgBgAHohtIAAgBIACAAIAAABgAHqhugAIuimIAAgBIABAAIAAABgAHFioIAAgCIAAAAIgBAAIAAgFIABAAIAAgBIAFAAIAAADIABAAIAAADIgBAAIAAACgAGIiqIAAgBIABABIAAAAgAGHixIAAAAIADAAIgDAAgAGYi5IgDAAIAAgEIAGAAIgCADIgBABgAAxi6IAAAAIASgBIAAABgAM3i/IAAgnIACAngAEVjBIAFAAIgFAAgAEajBgAEQjBIAFAAIAAAAgALTjEIAAAAIAAAAIAAAAgAESjGgAB7jIIAHgBIAAABgAGZjnIgCgCIALAAIAAABIABABgADljpIABgCIAAAAIAAgBIAAAAIABAAIABAAIgBAAIACADgAGEjqIADgCIABAAIABACgAJQjwIAAgDIgiABIACgCIAgAAIAAAAIgMgBIgMgBIBJABIACAEIgJAAIgFgBIAAACgADpjxIABgBIgEAAIAEAAIAAAAIABAAIABABgADljzIgBgCIAEAAIACACIgFAAgAFAj2IAAAAIAAAAIAAAAIABAAgAE/j3IAAAAIACgDIADADgABvj7IAAgBIALABIAIAAgAI4kEIgEgFIADAAIBCACIAxADIhyAAgADQkGIAAgBIAGAAIAAABgAHKktIgJAIIgEgHIAEgEIgEgFIAEgDIAEAFIABgBIAMAQIABABIAFAIIgOgSgAFnlQIABAAIgDgDIgBABIgFAFIgBgBIAGgFIgDgDIgGAFIgDgEIAGgFIABAAIADADIAdgbIAEAFIgRAPIADADIADAEIgNAMIgEgFgAGPlXIAAgBIAFAGIgFgFg");
	this.shape_17.setTransform(470.9,183.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AibFLQgjgSgdgZQgegagZggQgagigUgnQgWgogQgvIjsAAIAADBQBygXBugeIATBBQhmAeg8ANQh+AXhIAIIgQhBIBFgKIAApKQAAgUATAAIIZAAQATAAAAAUIAADEQAAAVgUAAIjqAAIAZBkIEDAAIAABBIjuAAQANAnAZAnQAXAiAdAfQAaAcAYARQAZASAQgBQAUAAACgTQAIgugCgyIA/ATIgKBVQgFAhgJAQQgMAXgNAIQgKAHgUgBQgbABgegUgAl6AFIgahkIi+AAIAABkIDYAAgApSj7IAABcIG1AAQAKAAAAgLIAAhRQgBgQgQAAImeAAQgPAAgBAQgAArFHIAAhEIE1AAIAAi8IkLAAIAAhCIELAAIAAinIkcAAIAAhDIEhAAQglgxgdgZIAzgvQA4A6AfArIAAABIgYATIEnAAIAABDIkYAAIAACnIEJAAIAABCIkJAAIAAC8IEzAAIAABEg");
	this.shape_18.setTransform(471.4,171.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AlcFGIAbg7QALgdAHgeQAJgpAFhsIAAiPQAAgQAQAAIBOAAIgQgwQAxgGBagVIhdgWIAPgxIimAAIAAg7IElAAIAAgrIA/AAIAAArIEgAAIAAA7IhwAAIh2BBQA5ARBCAZIgQAnICDAAIAAA6IjyAAIAAA/IDiAAIAAA6IjiAAIAABCIDQAAIAAA6IjQAAIAABJID/AAIAAA6IofAAIAAg6IDfAAIAAhJIi/AAIAAg6IC/AAIAAhCIiXAAQgnA3gXATIgtgoQgHBZgKAnQgZBMgTAggAjkgiIAACOQAcgbAeguQAQgcALgvIA8AOIgNAvIB9AAIAAg/Ij4AAQgIAAgBAIgACnhkQgvgThhgeQh2AogwAJIE2AAIAAAAgAARjNIAAABIACAAIBZgqIjyAAg");
	this.shape_19.setTransform(-110.3,185.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ADBDvQgzgugqgeIArgxQBeBDBuB4IgtAwQg7hAgygugAlcEgQApgUBGg0QAigcA3hEIA0AoQhCBOgjAeQhGA3gkATgAlbBVIAAhBIChAAIAAjHIh9AAIAAhAIB9AAIAAhpIBDAAIAABpIDuAAIAAhpIBDAAIAABpIB+AAIAABAIh+AAIAADHICiAAIAABBgAh3AUIDuAAIAAjHIjuAAg");
	this.shape_20.setTransform(-185.6,186.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ArKEZIgBgDIBBgKIAFosQAAgTASAAIDGgBIE4gBQASgBAAATIABC4QABAUgTAAIjcgCIANA1IALAqID2ABIABA+IhDAAIifABQANAlAYAlQAVAhAaAdQAZAbAXAQQAYARAOAAQASAAADgTQAHgqgCgwIA7ATIgKBRQgFAfgIAPQgMAWgMAIQgKAGgSAAQgaAAgdgSQghgRgcgXQgPgNgNgNQgNgOgMgPQgYgfgUglQgUgmgQgsIjgABIgBC3QBqgUBogdIAIAcIAKAiQhiAcg5ALQh3AVhEAHgAnXhUQg8ADg6ABIACA+IACAjIBRgDQBBgCBDgGIgQg2IgMgnIhHADgAmKj2QhaAChZABQgQABAAAPIACBZIASAAQBogBBpgDQBigBBigEQAJAAAAgKIABgZIgBg1QgBgQglgBQhlAEhkACgAA5E4IgUAAIAAgFIgZgBIAAhCIAwAAIAAA9IJsAGIAAgKIAIAAIAAAKIATABIAAgLIAFAAIgBARIgXgCIAAADIn3gCIgzADQgmADgmACIgBgJgABCEhIAAgpIgBAAIAAgIIABAAIAAgDIBAgBIC3AAIAAgDIASAAIASAAIAAACIgMABIATAAIAAgDIAEAAIAAgIIABiKIAAggIAAAAIgEAAIAAgDIgjAAIAAgBIgWAAIAWABIAAACIgRAAIjDAAIAAgDIgDAAIAAAIIDOAAIAAAaIAJABIAAgbIAjAAIgBCmIgrAAIAAiMQh0gRh0ABIAAgSIgaAAIgBgrIApgKIAAgOIAagCIDAAAIAAiCIAQAAIAHAAIgBCCIAcAAIABgrIAAArIgBAAIAAAEIgzAAIAAAAIiwAAIgNAEIgNAAIAAAHIgCAAIAAAKIACAAIABAAIAAgKID8AAIAAgGIACAAIABg1IAAhpIgBAAIAAgGIkKAAIAAgCIgeABIAAgkIAdAAIABAAIAIAAIgBgOIEJADIgFgHIATAAIACgCIgGgIQgPgRgNgNQgQgQgOgLIAsgsIACACQAZAeATAaIAXAfIgKAJIgYgBIAMAQIgDACIAFAAIgDADIAKAAIACgCICiABIgQABIB2ADIAAAuIkBABIAAACIggAAIAAAMIAXAAIgBCWIAUABIgIAAIAAADIBeAAIANAAIAFABIB+AAIAAAQIgBAgIgEAEIgSAAIgEgiIgIAAIgBAiIjQgBIAAAOIguAAIgCCwIATAAIABiiIAGAAIAAgMIAWgBIAAANIACAAIAKAAIAEgOIgOABIAAgBIDdAAIgBgCIADAAIASAAIAAgGIAMAAIABgpIACAAIANABIgCBBIkOAAIgJCkIDOAAIAvAAIAAAGIALAAIAAgGIgLAAIAAAAIALAAIAAAAIAZABIAAAFIAJAAIgDAogAGKj8IAHAKIABgBIgHgKgAFCA0IAAAAgAGygNIACiQIDeAAIAAgCIAfABIAAgGIAMAAIgBAKIgdABIAAAMIjjABIgJB/gAA9inIAAgHIAIAAIAAAHgAAxjsIAxAAIAAAAIDgAAQgVgagSgQIAEgEIgPgOIAGgFIAJAIIAFAGQASAVAWAeIgKAAIABAAIAEAAIAFAGIgFAAIACACIABABIjggCIAAgBIgGAAIAAABIgngBIAAA4IgNABgAK/jaIACAAIgCATgAGwjlIAIgHIgIAAIAFgFIADgDIACADIDgAFIAAAIIjqgBgAE5kxIATgQIACADIgSAQIgDgDg");
	this.shape_21.setTransform(470,171.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ArDESIgBgDIA+gJIAIoOQABgSARAAIC8gCIEngEQASAAAAASIACCrQAAATgRAAIjOgDIANAxIALAoIDpACIABA6Ig/ABIiWACQAMAjAWAjQATAgAZAbQAYAaAVAPQAWAQANAAQASABACgSQAHgngDgtIA3ASIgKBMQgFAegIAOQgKAVgMAHQgKAGgRABQgYAAgcgRQgfgQgbgVIgagZQgMgMgMgPQgXgdgTgiQgTgjgPgqIjVADIgCCsQBjgSBhgaIAIAaIAIAgQhcAZg2AKQhxAThBAGgAnXhJQg9AGg5ACIAEA9IAEAgIBQgGQBAgEBDgKIgTg1IgNgjQgjAFgiACgAmPjiQhZAFhWACQgPABAAAOIAEBWIARABQBkgCBngGQBegDBggHQAIAAABgJIABgZIgDgzQgBgPgkgCQhiAIhgADgABCEuIAAgFIgnAAIAAgKIgygCIAAhBIBgAAIAAA2IJhAOIAAgWIANAAIgGAiIgsgHIgBAAIgBAKInFgFIgxAGQglAGglAEIgBgMgAJ2D7IABgHIgVAAIAAAHIoOgBIAAgPIgBAAIAAgPIABAAIAAgHIA3gBICCAAIAAgHIAjAAIAAAHIAhAAIgBAHIAmgBIACiIIAMAAIAAgZIAsgDIAAAVIgCAHIABAAIAAAFIgBAAIgSB1IAAAUIB6ADIAxAAIAbABIAAAQIAVgDIABgNIAyABIAAAFIAAAGIARAAIgCAMgAFRDNIAFAAIAAAGIgFABgAFRC+IADiJIARAAIgDCJgAEbC+IAChvIAVADIgBBsgAG0BXIAAgcIABgFIA0gBIB7AAIgBgCIAEAAIAmgBIAAgLIAXAAIABgRIATAAIANACIAAAgIgFAfgABIBCIAAgjIgzAAIgDgoIBNgaIAGAAIAAgDIAYgEICPAAIABgRIAAhMIAgAAIAPgBIgCBeIAyAAIAGgBIABAAIgBAHIg4AAIAAgGIgPAAIAAAGIggAAIAAABIiJAAIAAAIIgdAAIAAAJIAEAaIAVAAIAEAAIABAAIAAAPIDpAAIAAAOIgIAAIhGgBIAAgFIhvAAIBLAFIh3AAIAAgFIgFAAIgBAOICQAAIAAAgQhigMhjABgAF/gFIA/AAIABgMICaAMIAFAbIAvAAIAAAFIhHAAIAAgBIgaABIh8gBIAAACIgyABIABgigACDAIIAAgVIC3AAIAAAXIi3gCgAFygWIAAgCIADAAIABhCIABhAIABgOIAAgFIgDAAIAAgLIjhAAIgBgHIgVAAIAAgDIAAgZIAQABIgCgOIgNAAIAAACIgEAAIAAAnIgVgBIgkADIAAARIgQAAIAAgQIgbACIACg5IBjAAIAAgBICoAAIABABIAJALIgBAAIgJAAIAFAHIAJAKIATAYIA4AAIANgNIgLgOIgIgKIgDgDIAQAAIgKgNIAGAAIgIgLIgJgLQgPgTgNgOIAHgHIAKAMIAegiIABgBIADAEQAUAbAOAXIAPAXIAIgHIAHAJIgOgBIAFAHIgOAAIAHgHIgPgCIAOAUIgVASIAUAAIAPgPIgPAAIALgKIAFgEIBNAAIANABIBUAAIAEA8IgTAAIAAAAIjjAHIgDAWIApAAIgCCIgAJOjWIAWADIAAgDIgWAAIgEgBIgVAAgAG9ggIACh6ICjAAIAAgDIA/ABIAAgMIAZAAIgDAUIgJAAIguAHIgEAAIAAAUIisACIgOBXgAK9jQIADAAIgDATgAEtj0IgQgYIgIAHQgPgRgNgMIAtgnIAjAnIgKAJQAQAOAUAXgAFkj/IABgCIABACg");
	this.shape_22.setTransform(469,172.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ArEEgIgBgDIA7gJQAFj3AHj5QABgRAQAAICygDIEXgFQAQgBABARIADCfQAAASgQgBIjAgEIANAuIAKAlIDdAEIABA3Ig6ABIiOADQALAhAUAhQASAeAXAaQAWAZAUAOQAUAPANAAQAQABACgRQAGgkgDgqIAzARIgJBJQgFAcgIANQgKAUgLAHQgJAFgQABQgXAAgbgPQgdgPgZgUQgNgLgMgMQgMgLgLgOQgWgagSghQgSgggPgnIjJAEIgDCjQBbgRBagYIAIAYIAIAeQhXAXg0AJQhqARg9AFgAnggqQg9AIg5AEIAIA7IAGAeIBPgJQA+gFBCgPIgUg0IgPgeQgjAHghADgAmdi6QhWAIhTADQgPABgBAOIAGBUIARABQBggDBlgJQBagFBdgKQAIgBABgJIACgYIgFgxQgBgOgigDQhgAMhdAEgABEE9IgDgPIg4gBIgBgOIgoAAIgigEIAAg/ICQAAIAAAuIAbgGIAYgFIB9AAIBWADIAAgDIhWAAIihgGIAAgdIABAAIAAgKIAvgBIBMAAIAAgKIA1gBIAAALIAOAAIAAALIBCgDIACgTIAFAAIABg0IABgnIABgrIBEAAIAAABIgFAAQgGAWgFAVIAPAAIAAAHIgCAAIgaBlIgBAAIAAAHIAAAEICGAEIiHAAIAAAXIABABIDLAAIAWgFIAZAAIAAAFIgvAAIgJADIgBAcIA5ACIAAghIAZAAIgNAzIgqgKIgbAAIAAAPImWgHQgWAFgWADQgkAKgkAFIgBgKgAIdEJIAAgDIhjAAgAIdDnIAAAAIAhAAIAAABIghgBgAE8DRIAKgDIAAgIIAQAAIgBALgAEeCvIAEhvIA7AAIgEBvgADZCvIAAhVQhRgIhRABIABg1IhNAAIgEglIBHgcIA0AAIAAgFIAXgGIBfAAIABgMIAAgrIijADIABg3IBWABIAAAMIBMgCIAAgJIAwACIAAgKIAcgBIAIALIgkAAIAAAHIBNAAIgBAMIAfAAIgCBSIAAAAIgBAMIgOAAIAAADIgBAOIAAAFIgTgDIAAgTIgaAAIAAgKIhdAAIgCALIh0AAIAAAPIAKAmIAcAAIgBAiIBSAAIAAAmIAYADIAfAEIgBBOgAGwBzIACgyIAtgBIAoAAIABgWIBqAAIAAAIIBIAAIAMADIAAAhIgIAdgAFaAoIhngBIAAgJIhjAAIAAgMIDSAAIgBAWIgHAAgAHFgCIAAAAIAIAAgAFigCIAAgMIAOABIAAALgAG/ggIADhiIBpAAIAAgGIBdADIAAgSIApAAIgIAeIgIAAIgrALIgjAAIgBAdIh5ACIgMAwgAF4iCIAAgMIABgRIgFAAIgHAAIgVgBIgTAAIggAAIgNgQIiHAAIABgQIAAgBIAcABIgGgWIgWAAIAAAGIhzgEIAAAdIgnAFIADg1IENAAIgBgBIAMAAIARgOIAOAOIASAUIABABIAEABIgBACIgDgDIgHgBIg2gBIgLAAIgFAEIAGAFIAOAPIBNACIACABIAuAAIgGAWIA1AAIAAAXIg6gBIgBADIAAAJgAFsikIAIAAIABgMIgSAAIAJAMgAKziyIAFAAIgFATgAIsiuIAdAAIgBgNIAJAAIAmAJIARAAIAAAEIhcABgAG5i7IABgCIgcgBIARgOIgDgEIgNgTIgNgJIgIgHQgMgKgMgHIAcgmIACADQAbAcATAXIgNAMIAEAAIAKARIgGAFIAJAAICDACIADAVgAE9joQgXgegiglIgbAWIgDgEIgNgOIArgtIAvArIAeAgIgQARIADAAIARAQg");
	this.shape_23.setTransform(468.9,170.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ArFEfIgBgCIA4gIQAGjoAKjqQABgQAPgBICngDQCDgDCEgFQAQAAAAAPIAFCTQAAAQgPAAIiygGIAMArIALAjIDQAEIABA0Ig1ABIiGAFQAKAfATAfQAQAcAVAZQAUAYATANQATAOALAAQAPABACgPQAFgigDgmIAvAQIgJBEQgFAagHANQgKATgKAGQgJAGgPAAQgWABgYgPQgcgNgYgSQgMgKgLgLIgWgXQgVgZgRgeQgRgegOgkIi9AEIgGCaQBVgPBTgWIAHAXIAHAbQhRAWgxAHQhkAPg6AEgAnpgZQg+ALg3AFIAKA7QADAOAFAMQAmgEAogIQA8gGBDgTIgWgzIgQgaQgjAJghAEgAmqifQhUAKhQAEQgPABgBAOIAIBRIAQACQBcgEBjgNQBWgFBbgOQAIgBAAgIIADgYIgGgwQgCgNghgDQheAPhYAGgABFE/IgHgZIhHgBIAAgTIhFAAIgggGIAAg9IAzAAIAAALICOAHIAAALIBxgDIAFgCQARgHASgJIABglIBIgBIACgeIhKAAIACgxIgBAAIACglIBUAAIABgQIAGAAIgEANIAAADIAPAAIgBASIAMAAIABAAIgBApIgBAAIgNgBIgCAcIgHAAIgIAtIgWAAIgYAIIAtABIgEAVIBGAAIACgGIBTAEIAAALIhYAAIgBABIAAAIIBZAEIAAgNICPAAIAAAQIAiAAIgSA0IgogNIg0AAIAAAUIlmgKQgVAHgUAEQgjANgiAIIgCgJgADrDnIAAAAIgaAAgAH+DeIAGAAIAAAAIgGAAgAGLB5QAEgWAGgWIASAAIgCA1IgBAAIgZBFIgLAAQADgnAIgngAGtCCIAChEIAegBIAMgBIArgBIABACIgqAAIAJADIDYAAIALAFIAAAhIgKAcgAAmBXIACgzIBpADIABgMIATAEIAAA7Qg/gFhAACgAGvA9IABgcIAaAAIgBAcgAFQAdIgLAAIhHgBIABgPIgcgCIgbgLIBAAAIgBAJIBcAAIgBAUIgSAAgAg/AQIgGgjIBDgdIBiAAIAAgIIAVgIIAvAAIgCAOIgHAAIgBAPIiVAAIgDAzgAHLAIIACgGIgqgGIAtgBIgDAHIAkAGgAEIgFIABgVIAjAAIAbAAIAAgWIAqgBIgCAWIgoABIgBAGIApAHIgBAIgAF5hxIAbABIAjABIANAAIABgJIAuAAIABgKIB8AGIAAgYIA4AAIABgNIAGAAIgTA0IgJAAIgoAPIhCAAIgBAnIiyAFIADg/gAEsgyIAAgOIghAAIgBAOIgqAAIABgOIg9AAIABgGIAAgLIh6AEIABgzIB5ADIA/ABIAwACIgKgOIgUgWQgKgMgJgIIABgBIgngCIAqAAIgDACIBLAEIAKALIADAFIgEAAIgEAXIAbAAIADAFIgLALIgGAFIAxACIgBA/gAF0hxIAEAAIgFANgAF4hxIABgCIAAACgAF5h4IABgnIgHAAIABgFIAwAAIAUgEIAAAkIgjgBIAAANgAG+iuIAKgPIgCgBIgFgLIggAAQgNgTgTgXIAOADIgKgGIAVgjIAAAAIACADIAgAkIgIAIIAPAAIACACIAJAMIgOAPIAAACIBYABICBABIAAAWIisACIgSADgAG+jLIACAAIgBgCIgBACgADni1IAhgbIgmgBIgdAAIgHgSIAZAGIgKgLIAVAAIgBgCIAqAAQgSgWgYgaIgUAQIgIgMIgMgOIAogtIAsAlIAeAdIgOARIAdAAIAeAEIgRAQIg8AAIAPAUIAxAFIAWAIIAFAAIAGAHIgzAAIglANgAEejBIAGgGIgFgJIgPAAIAOAPgACki2IABgQIAAAAIAAAQgAgojQIAEgYIDDAAIgBAhIiSgIIAAAOIg0AJg");
	this.shape_24.setTransform(468.7,170.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ArHEdIA0gIQAIjYANjcQAAgPAPAAICdgFID2gJQAPgBAAAOIAGCIQAAAOgOAAIijgHIAMAlIAJAiIDEAGIACAxIgxACIh9AFQAJAdARAdQAPAbATAXQASAWARANQARANALABQAOAAABgNQAFgggDgjIArAQIBsAAIB/AIIAAAaIAGABIBggEIALgGIABgJIANABIAFgEIgSAAIADhsIgRgCIglgDIglgDQgugCguACIABgvIBbADIAAgbIhMgSIB3AAIgDAvIBHACIAAgMIBcAAIgBADIACAaIApgKIA8AAIAAABIgYABIgJAjIglABIgCAAIgQAAIgFA8IgbAAIgEAAIgBANIADAAIgEARIgQAAIgBAVIB/AAIAAAFIA3AAIgJApIAPABIAZgBIAAADIBdAGIAAgNIANgGIAeAAIgXAxIglgRIg5AAIgUgJIgBAiIk3gKQgSAHgSAFQgiAQghAJIgCgGIgOgjIhUgCIgBgXIhgAAIgdgHIAAgQIgDAUQgFAYgHANQgJARgKAGQgIAFgOABQgUAAgXgNQgagMgXgRIgWgTIgUgVQgUgXgQgbQgRgcgNghIiyAGIgGCPQBNgNBMgUIAHAWIAGAYQhMATguAHQhdANg3ADgAnygIQg/AOg2AFIAMA8QAEAMAGALQAmgGAogJQA7gIBCgXIgYgzQgJgKgIgLQgjALggAFgAm4iEQhSAMhNAGQgOABgCANIAKBOIAQADQBYgFBhgQQBSgHBXgSQAIAAABgJIADgWIgIguQgBgNghgEQhaAThVAIgAF0CpIAFgkIAvACIAAAIIgKAAIgMAbgAJ1CPIAAgTIjNACIADhDIANgBIgWAAIACg4IAhAIIAEANIAFAAIgDAGIAKAdIgVAAIAAAFIAjAQIDaAAIALAFIAAAiIgNAZgAGiA6gAEpARIhIgBIAAgGIgHAAIABgRIAAgBIAHAAIAAgJIABgQIgGAAIADggIAEAAIgBAgIAmgBIBlgBIgBAMIgyACIAQAEIghAAIAAAJIA0AAIgBASIgTAAIgEAIIgdgBgAhqACIgIggIA/ghIBSAAIACgpIBQADIBMADIAlABIAYABIgLgOIAdAAIAEgTIgrAAIgGAAIgSgSIANgKIANgKIAZABIgDgEIA4AEIgdAAIgEAWIANAPIBRAAIgDBAIiPAAIABgQIglAAIgBAQIgVAAIAAAUIi6AAIgDAvgACpgIIABgJIAfAAIAQAJgAHmgZIAPgfIgxgBIAEhDICPAJIAAgtIifAAIAAgTIAMgCIgGgNIgoAAIAMATIgDACIgbAHIgDAEIAAABIgEAAIgEgFIgGgHIABgNIhCAAIAigQIhjgCIgNAAIgNgXIAaAKQAvAEAyAGIAMACIAFADIAAAAIAtABIADADIACgEIgDAAQgNgTgMgOIAQAAIgWgdIAbgXIAXAXIAAgBIACADQAFAQADAOIA0AAIAIAjICgADIAVAAIgCAwIghAAIADACIAmAAIgYAwIgIAAIgmATIg+AAIgiAQIgCAAIAAAFIBvACIgBAdgABxjBIAAgOIgagGIg+AAIhiAXIAAgVIAFgVIDiAAIARAPIgBAcgACwjoIAAgDIALAAIABADgADZjrIgagfIgPAMIgLgWIgMgOIAmgsIAoAeIAeAcIgLAPIAcAAIBQASIgIAIg");
	this.shape_25.setTransform(468.6,170.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ArIEeIAxgIQAKjJAOjNQABgOAOAAICSgGQBzgFB0gHQANAAABANIAHB7QAAANgNAAIiUgJQBAgJBFgRQAHgBABgHIAEgWIgJgsQgCgMgggFQhXAXhRAJQhRAOhKAIQgNABgCAMIAMBLIAPADQBUgGBfgSIAdgEIALAiIAKAgIC3AHIACAtIgtADIh0AGQAIAbAPAcQANAZASAWQARAUAPAMQAQANAJAAQANABABgNQAEgcgDggIATAHIAAgIIDnAAIALgEIAwAFIAAAaIBKAHIADhNIBJgBIAgAAIABgBIghABIhJgBIACgkIgkgDIAEgqIA3AAIABgXIABgVIABgHIABgPIgRAAIACgYIAQAAIAAgFIgQAAIAAAFIhJAAIgEgFIBHgEIABgcIADABIADgcIAAgBIAQAAIgQgPIAKgIIAbgVIAQARIADAFIADgBIB7AAIAAAVIgEACIAFAAIgBAVIhZAAIAFAHIgOAOIBiAEIgBALIiHACIAAABICRAqIAogCIgCAiIgKgXIgcgJIgfACIgBADIgcAAIgCAEIgKAQIAFAjIAPgFIgGBOIgnABIAAABIAmABIgBAUIguAAIgBAAIgIAZIgQAAIgBAMIBaAIIAAgBIBCAAIgMApIBOAAIAgAVIAsAAIAmgYIAVAAIgdAtIgigUIglAAIgDgBIg+AAIgCAfIkHgMQgQAJgQAFQggATggALIgDgEIgUgqIAAgBIADgBIhkgEIgBgcIh8AAIgOgEIgCAOQgEAWgHAMQgIAQgKAGQgHAFgNAAQgTABgWgMQgYgLgWgPIgUgRIgTgUQgTgUgPgZQgQgagNgeIimAHIgHCGQBGgLBFgSIAGATIAFAXQhHARgqAFQhXALgzACgAn7AJQg/ARg1AHIAOA7QAFALAHAIQAlgGApgLQA4gKBDgcIgbgyQgJgGgJgJQgjALgfAHgAGJC3IAQgZIDJAAIgBAZgAJiCeIABgUIgIAAIADgqIi4ADIACgsIAhgDIgHALIAAALIAgAUIDdAAIAKAGIAAAjIgPAXgAJiCegAA9BeIg5ABIACgrIA3ADIAAgtIhGgUIB5AAIgJBpIgqgBgAGcA3IABgVIAJAVgAHTgJIACgoIgOAAIABgUICUADIgBAjIhdAAIgQAZIgbgDgAiVgKIgJgfIA6gjIB6AAIAAgDIAhACIAGgSIAAhEIBggDIgJBvIgzAAIAJAPIhXAEIACgTIhCAAIgEAtgAmEgUIABAAIgBAAgAFuh7IAAgIIADgEIgBAMgAJsiOIgHgFIieAAIADgMIgCgBIgKgYIgBgDIgYAAIgeAJIAEgHIgBgCIADAAIAFgJIAGAAIgDgEIgIgLIgSgWIAzAAIADgPIABADIABAMIAHAWIAVAMIABABQAJAAALAEIAAADICYADIAaABIgDAtgAA9i8IAAgcIgYgHIgzAAIhcAcIAAgSIAGgUIDrAAIgNALQATAOAZAdgAF2jEIgbgBIAIgFIgOgCIAWgXIANAQIAMAPIgOAAgAEFjHIgFgIIgQgUIATANQAoAEAqAGIgHAHIhJgCgAFVjMIAAAAgACcj5IgKAIIAEAIIgPAAIALgIIgOggIgKgOIAigsIAmAYIAdAaIgJANIAcAAIBrAgIAbAAIADADIgUAAIgKgDIibAAIgCAfQgPgVgVgXgACHjpg");
	this.shape_26.setTransform(468.5,169.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ArJEeIAugIQALi5ARi+QABgNANgBICIgHQBqgFBsgIQANgBABAMIAHBvQABAMgMgBIhggGQAqgKAtgNQAHgBACgIIAEgVIgLgqQgCgLgegFQhWAahMALQhPAQhHAJQgNACgDALIAOBIIAPADQAygEA3gKIgSAFQg/AUg1AIIASA7QAFAJAJAHQAkgIAogNQA3gLBDggIgdgyIgLgFIAMgDIAigFIAHAVIAJAdICqAJIADAqIgoACIhsAIQAHAZANAaQAMAXAQAVQAPATAOALQAOALAJABQALACABgMIACgQIgBAAIAAgaIgBgNIABABIAAgTIDjAAIAYgJIAAg9QAlgBAmABIgIBGIAUgDIAAAYIAkAFIACghICCgOIAAANIgbAAIgNAiIB1AAIgJAWIB5AOIAHAAIAgAaIASAAIAOAKIAFAAIAkgdIAKAAIghApIgSgMIiNAAIgCAZIjYgNQgOAJgOAGQgfAWgeANIgEgCIgXgpIAAAAIAUgLIiFgHIgDggIiSAAIgDAVQgFAWgGAKQgIAPgJAGQgHAEgMAAQgSACgUgLQgWgJgUgOQgKgIgJgIIgSgRQgSgTgOgXQgPgWgMgbIibAIIgJB7QA/gJA/gQIAFASIAFAVQhCAOgoAEQhQAJgwABgAFVC3IACgXIArADIABgEIDHAAIADgpIitAAIAEguICigDIgDAoIgyAAIAyABIAAgBIB+AAIAJAHIAAAiIgRAWIklAAIgNAQIgygFgACJBnIgCAAIAAgCIgCgiIAfACIABgIIAAgJIBMAAIABgRIA1gDIgDgUIALgQIACgCIAhALIgCAYIAFAAIACgWIALAFIAVAoIg8AAIgBAJIgUAAIgaAgQgDADgBAJIgGAAIgEALIAIgBIAAASIAtgDIgCAKIigAAIgKABgAgMBZIACgdIATABIAAAkIgVABIAAgJgAAJA9IAAg9IhAgYIiIAAIgLgcIA1gmICXAAIAHgRIAAg1IA/gHIAyAAIgGAyIBgAAIAAAFIAsgFIBPAAIgCAXIh5AAIAEAEQASAUANARIADAEIBbgCIgCAlIgcAAIgGAIIgVgIIhaAAIACgdIg8gEIgCAXIhBAEIgKBUIgygDgADEgwIAAABIAXAIIgKgJIgNAAgACJg1IAzAAIADglIAEAAIAAgSIgZASIgdAAgAGoAYIAAAAIACgVIBTAAIgiArIg2AFgAmPgHIAmADIgjAGIgDgJgAlpgEIAAAAgAJJgrIAAgBIACgiIiAgEIACgYIBaAKIgBglIBGAAIAcAWIANAAIghAqIgJAAIggAagAGGiFIAQgNQgHgNgMgRIgLgOIADgBIgEgBIgFgGIgCACIgPAAIgEAEIh+gDIgCAcIgEAAIgKAZIgvgFIAOgQQgSgdgigoIggAXQASAMAXAaIh6gNIAAgpIgVgIIgqAAIhUAfIAAgOIAHgSIDzAAIgMglIgKgNIAggsIAiASIAeAXIgHANIAbAAIBrAoIBKAAIAHARIACgCIAWAAIgNARIAIALIgRAAIgCACIAIAIIAmAAIAAgHIABAAIgDgGQAGgQABgTIAAgCIACAcIAWAJIgGAFIAQAAIAGADQAIgCAKABIgBADICWADIgDAqIi6AAIAAAGgAFljJIAMACIgGgIg");
	this.shape_27.setTransform(468.3,169.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABKFGIgbgmIAAgBIAfgUIihgJIgEgmIiZAAIgHAiQgDATgHAKQgHAOgIAFQgHAEgLABQgQABgSgJQgWgJgSgMIgSgOIgRgPQgQgRgOgUQgNgUgMgZIiPAKIgKByQA3gIA5gOIAEARIAEASQg9AMgkADQhLAIgrgBIgMgoIAqgHQAOiqATiwQABgMALgBIB+gHQBjgGBkgKQALAAABAKIADAjIgGgTQgDgLgcgGQhTAehJANQhNAThEAJQgMACgDALIAQBFIAOAEIApgFQgmALghAGIAUA7QAGAHAJAFQAkgJApgOQA1gNBCgkIgcgsIAhgHIgHgTIA7AGQgbAHgZAGIACAJIAKAbICdAKIADAmIgkAEIhjAIQAFAXANAYQAKAWAOATQANARAMALQANALAIABQAKABABgKIABgUIgTgIIAAg4IDcAAIAYgLIAAgPIBEAKIgDAPIA5gHIAUACIABAAIBeAOIAAgbIAgAAIgSASIB4gKIACgIIDnAAIABgMICQAAIAIAJIAAAjIgUATIkoAAIgWAWIAwAHIAeAAIAdAdIgBAAIAXAVIiwAAIAAgBIgCAUIiogMQgMAJgLAGQgfAZgdAPIgDgBgAH6EJIALAAIgFAFgAIFEJIANgMIgMAMgAIFEJgADRB7IACgbIAAgCIACgWIhEgBIgBgWIA/AAIACgRIBjAAIgDAZIglACIgPAPQgFAEgCARIgBAVIgHAHgAgaBEIA9AEIgEAcQgegBgfADIAEgigAGdBhIACgVIAwAAIgKAKIAAALIABAAgAAjBIIADgXIBjAAIgDAdIhjgGgAAjBIIAAAAgAgqBBIAAhLIg7gcIB/AAIgPBngAFRAGIAIABIAnADIgDAoIAAABIgxAEIAFgxgAEbATIgCgRIhBgDIALgNIgDgDIAAAAIgKgNIgHgDIgBAPIAMABIgeAAIgEAdIgsAAIABgTIg2AEIAMhNIADAAIgRgRIAAgWIAPgPIAkAAIgOgCIANgOQgRgdgfglIgdAUQAQAKAVAYIgKgCIAAgEIggAAIAgAEIgMBZIipAAIgGAlIiEAAIgNgaIAxgoICUAAIAIgPIAAglIBUgMIALAAIhfgOIAAg0IgBgBIB1AAIgHghIgJgOIAdgsQASAIAOAEIAdAWIgEALIAaAAIBhAuIBIAAIAQAiIArAAIAFgFIAPAVIgHAAIgdgBIgMgBIgvgBIgpAUIgrAAIgBAOIBqgDIAUARIAAABIgEAFIhxAAIgSgDIAAADIg9AAIgIARIAAAlIApAAIgBAJIAHAAIAKAOIB2gDIgDArIgnAAIgDACIAqACIgCATIgugDIAVAJIAEAHgAkjAPIg9gFQAcgJAegJQAHgBACgHIABgHIADAcQAAAKgIAAIgCAAgAIrgGIAWgVIgBAAIAOgOIgEAjgAGzh4IAFhIIAZgBIACAEIAEACIgHAIIAfABIATABIAIgDIgCADIB6ADIgDAmIisAAIgCAQgABVikgAirjaIAIgRIAyAAIg6AcgAHIjUIAAgDIADAGIgDgDgAhxjrIASgJIAhAAIATAJg");
	this.shape_28.setTransform(468.2,169.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAtEhIAAgBIAmgcIi4gNIgFgkIAAgBIA1gFIjWAAIgJAtQgEASgGAJQgGANgIAFQgGAEgKAAQgPACgRgIQgUgIgRgKIgQgMIgPgOQgQgOgMgSQgOgSgKgWIiEALIgLBoQAwgGAxgMIAEAPIAEAQQg4AKghACQhFAGgogCIgLglIAngHQAMh9ARiCIARA/IAJADIgbAHIAVA5QAIAHAKACQAkgKApgQQAygPBDgoIgWggIAYgGIAAgDIgKgZIBHAJIAngPIADgCIACAMQABAKgKgBIgjgEQgfALgeAIIAIAVICQAMIAEAjIgfADIhbAKQAEAVALAWQAJAUAMASQALAQALAKQALAKAHABQAJABABgJQABgNgBgPIgQAAIgVgMIAAg3IDXAAIAUgMIAAgaIBIANIgEAZIBJgNIA8AKIAAALIBAAMIAKgRIADgYIABgJIAQAAIADgEIgzAAIgDgdIA5gBIAAgKIAigUIALAAIARgNIhPgHIAKgMIgCgCIBqAAIgMA9Ig8ACIgBAMIA8gFIgEAYIg+AAIgpAzIgDAEIAiAHIBTgKIgCAYICZAbIAAgZIABgDQhFgJhDgMQACgYAFgaICJAAIAWAcIDmAAIAHAJIAAAkIgWARIj0AAIAaAhIgTAAIAaAeIAqgiIALAAIgdAkIi+AAIgCgCIBPg/IhQAAQgoAcgfAKIgugVQgQAYgRARIBXgIIAcgDIgDAfIh6gLQgJAJgJAGQgdAcgbARIgFABgAE3ECIAEADIgEADgAgrBJIAbACIgEAaIgaACIADgegAgQBLIAGgfIB3AAIgEApIh5gKgAgQBLIAAAAgAFGAoIABgEIAPACIAAACgAhfAmIAAg9Ig0ggIiCAAIgNgXIArgqICRAAIAHgOIAAhoIhGAAIAfgSIAWAAIARAKIAAAIICDAAQgCgSABgMIgIgNIAagsQAQAFAMABIAdATIgCAKIAaAAIBYA0IAYAAIAAgEICfAAQgPgZgNgMIAegXQAfAdATAVIgKAKICWADIgDAjIiaAGIgCAdIAGAAIAAgBQANgNAKgQIALANIgJALIAcABIApACIADgCIgCACIBdADIgDAiIifAAIgDAaIgigCIAFg6IgDAAIgJgUIgJgCIgpgIIgNAKIAAAFIhagDIgMgBIgBAIIgNAIIhfAAIgbAvIAAAiIBTAAIAKATIhdAAIAAgTIgNAAIgdgYIAAgWIAIgLQgOgXgYgfIgaARQAIAFAJAIIggAAIgTAEIA2AKIgMBGIicAAIgGAhIBuAAIgRBdgAhUiaIBNgOIhNgOgAFyjIIABgIIgzAAIAyAIgAGMjZIAEAEIAdgYIgCgCIgfAWgAgKgGIA2AEIgDANIA0AAIhrAMIAEgdgAp/gnQABgLAKAAIB0gJQBTgGBUgKQhPAihFAOQhLAWhBAKQgJABgEAGIAHgzgABdALIAUgCIAAACgAAsgCIAMhGIBFAAIAAAHIBJAsIgEAXIgDAAQgRgUgYgaIgeAUQAMAKAQAVIhogJgAAsgCIAAAAgAEWgdIATgSQACgDAHgGIhSgKIBqgEIgEArIgwgCgAlYhLIAOgBQALgBABAJIAAAEQgHgGgTgFgAB9hIgAHVhsIgBgBIAVABgAFfiaIAFgGIAHABIAAAAIgEAFgAjLjfIAJgPIAdAAIgmAXg");
	this.shape_29.setTransform(468.1,169.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AArEiIAmghIADgDQhmgKhlgIIgGghIAAAAIBzgOIlZAAIgSgNIAAgzIgSACQADAUAJATQAHATALAQQAKAPAJAJQAKAJAFACQAIABABgIQAAgRgDgUIAYAMIgJArQgDAQgGAIQgGAMgHAEQgGAEgJABQgNACgQgHQgSgGgPgJIgPgLIgOgLQgPgNgLgPQgNgQgJgSIh5ALIgMBeQApgEApgJIAEANIADAOQgyAIgfAAQg9AEglgDIgLghIAkgHQAMhoARhtIAOAuIgUAFIAYA5QAJAFALABQAjgLApgSQAwgRBDgsIgPgWIARgFIADAIICDANIAEAgIgbADIg2AHIDHAAIARgNIAAgnIBMAQIgIAkIBmgXIgiAAQgaACgbADIADgPIgKgDIAKgvIAkAAIAEgYIBmALIADgBIAAABIABAAIADgRIhbAAIAQhJIBdAAIA5ArIADAWICAAEIgNA5IAUADIgFAiIhpALIgRAcIDDArIg/AAQgmAfgeALIgugXQgRAegRAUIAtgGIAYgDIgEAbIhKgIIgOAMQgcAggaASIgFACgAAXBkIANABIgBAKIAWAFIAAgXgADQBVIBEAAIAAgDIhCAAgACfA0IADAeIASAAIAAgUIALgIIgQgCIgQAAgAEoEBIAHAFIAFAAIgMAHgAE0EGIBRgzIBKAAIAFAIIgnAAIAZAgIAvgeIAUAAIgaApgAE0EGgAHPDTIgSgdIgfAAIAAgLIABgDQg6gJg7gOQADgfAJggIC1AAIgjAWIAAALIAWAiIDpAAIAGAKIAAAkIgZAQgAmpAuIgJgWIBLAMQggAOgdAKgAlXAnIgQgDIAWgJIABAEQABAIgGAAIgCAAgAlnAkIAAAAgAqAgKQACgKAJgBIBqgKQBFgGBFgIQhBAeg5ANQhIAXg/AMIgFACIAHgtgAiTAMIAAgwIgugjIh+AAIgQgUIAngtICNAAIAIgMIAAhcIhBAAIAlgcIANAAIAPALIAAARICSAAQABgRACgKIgGgOIAWgrQAOABALgBIAeAQIABAKIAYAAIBOA6IBFAAIAPAWIAAADIADAAIgDgDIAEgbICRAAQgOgWgKgLIAagVQAdAaARATIgIAJIAeAAIgUAeIgLAAIgOgNIgUANIgJAFQAHAHAIAMIgzgLIgHgCIAAAZIgEAFIjuAAIgeApIAAAaIgsgKIALgNQgOgZgZggIgUAMIgPAAIgiAIIg0gLIAAAXIA0gMIA8ANIgLA2IiRAAIgGAdIBdAAIgSBTgAEJgrIAYgTIAQgKIgkgFIA3gDIgFAoIg2gDgAHQhpIgDgBIgFgSIgYgBIAIhPIATgBIAUAVIADADIgIAKIAZABIA6ADIADgCIgCACIBBADIgFAeIiQAAIgGAhgAjsjjIAKgNIAOAAIgYARg");
	this.shape_30.setTransform(467.9,169.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AApEmIAlglIgFABIACgGQhrgOhqgKIgGgdIAAgBICKgTIAAgDImBAAQAFANAHAMQAIANAIAJQAIAJAEABQAHABAAgHQAAgOgDgQIAUALIgJAmQgDAOgFAJQgGAJgGAFQgFAEgJABQgMABgOgGQgQgEgOgIIgNgIIgNgKQgNgKgLgOQgMgNgJgQIhtANIgOBVQAigCAjgIIADALIACAMQgtAGgcgBQg3ACghgEIgKgdIAAgBIAggGQAKhDAMhFIAYAzQAKAEAMgBQAigNApgUQAvgSBDgwIglgvQgNAFgLACQgiAXgcAMQg2AagpANIgKgdIAHgmIAJgsQABgJAJgBIBggKQA5gFA6gKIAigFQAJgBAAAHIANA9IAAADQgBAEgFAAIgBAAQgaANgYAKIBtANIADAVIBdAAIAQgPIAAg0IBQAWIgMAsIA1gPIACgHIATACIApAFIAEABIAAgTIgiAJIhJgUIAIgcICDAAIAHgaIhKAAIAShAIBzAAIBdBVIAVgBQgCAKAAAQIgOAcIAxAGIAZAFIgEAfIgpAFICAAkIgpAAQgnAigdAMIgbgPIgCALIgagDQgLAVgLAPIAUgCIgEAWIgdgEIgIAJQgbAigYAVIgGAEgAEaEEIAHADIAVAAIgcAOgAE2EHIBJglIAdAAIgKgRIA6AAIgUgoIg7AAIAAgGIAAgDQgxgKgwgPQAFglAMgnIC/AAIAFgaIhfAAIACgMIAGgCIACggIgBAAIACgHIBGADIADgXIA3AAIAFgZIhSAAIAEgXIgDgBIgDgBIgDgPIANAAIgEARIAKAGICqAAIASAkIgoAAIg0AaIgKAAIgUAnIA/AAIgTAkIgJAAIh5A9IAAAMIATAkIDsAAIAFAMIAAAkIgbAOIi8AAIgTAlgAE2EHgAjHgKIAAgjIgpgnIh6AAIgRgSIAigvICIAAIAKgLIAAhQICgAAQAEgPAFgJIgGgNIAUgrQANgCAIgFIAeAPIADAIIAYAAIBEBAIBDAAIAYAaIgBAAIgZAYICiAAIADgGIAAgHIgLgCIALgQIAAgGIAngUIAAAOIAsgXIANAAIACADIgHAHIA0AAIgNAaIhLAAIgTgJIgeAAIgGAIIAAASIAHABIgEAaIhAgDIgFAZIg3AAIgDAZIBXAAIgFAhIgkgKIAAARIg/gJIgHgfIhjAAIgjgSIAAgQIgXAYIAAAvIgvgNIAJgLQgMgYgVgdIgIAEIACgKIgZAAIgqAMIgigJIAAATIAigKIA8ARIgKAlIiFAAIgHAZIBLAAIgUBKgADzg3IAFgcIA2gDIAOAAIgFAfgAIHiCIAAgBIhYgGIAGgyIAbAHIADAXIAGAAIALgGIAHgFIAKAGIBKADIAEgBIgBACIAiABIgEAbgAkMjlIALgLIACAAIgNAMgAj/jwIAogmIADAAIANANIAAAZgAj/jwg");
	this.shape_31.setTransform(467.8,169.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAnEqIAjgoIAFgFIgIgBIgfAHIADgLQhkgQhkgMIgGgaIAAgBIB6gVIABgIIlzAAIADAJQAEAPAHANQAGAMAHAIQAGAHAEACQAFABAAgFQAAgMgEgNIARAKIgJAjQgEAMgEAIQgGAJgFADQgFAEgHABQgLABgMgEQgPgDgMgGIgMgHIgMgIQgMgIgKgLQgLgKgJgOIhhAOIgPBLQAaAAAdgGIACAKIACAJQgoAEgZgCQgxAAgegFIgJgaIAAgBIAdgHQAJg0ANg4IAXAsQAKACAOgDQAhgNApgWQAkgPAxglIAbgUIgFgFIAFgDIgHAAIgggmQgOAIgMAEQgiAZgbANQg2AcgpAOIgGgNIALguIAKgqQABgHAIgCIBWgLQAugGAwgJQAWgMAZgPQAYAKAEAHIATAhIgIARQgCAGgFACIgoAXIBLALIBJAAIANgQIAAhCIBWAeIgSA0IBSgdIhAgXIAEgLIB4AAIAHgWIg5AAIAUg2IB9AAIAIgXIgLAAIhQgdIAIgKQgLgWgSgbIgRAHQAJACANALIgYgIIAMgjIgUAAIgtAQIgUgHIAAAPIAUgIIA1ATIgIAVIh4AAIgIAWIA6AAIgWA/IhSAAIAAgVIgjgqIh3AAIgSgPIAdgyICEAAIALgJIAAhFIgmAAIgMAKIAAgDIAqgyIAIAKIAAAhICuAAQAHgMAIgJIgFgNIARgrQALgFAIgHIAeAMIAEAHIAXAAIA6BGIBBAAIAbAWIADAAIgkArIhEAAIAAANIAnAQIBkAAIADAhIBYAPIgSAGIgaACIgCAHIhNAAIAAABIAEAXIAxABIAJAmIgzAUQgGABgDAMIgIAAIABAAIAFAVIAAAHIgYA8ICcA3IgVAAQgnAlgcAMIgugbQgWA8gZAaQgZAmgXAWIgHAGgAB3A5IAAAdIAJADIAAgbIAIgJQgJABgIADgAhlBFIAUAHIAAgPgAEMEFIAIAEIArAAIgzAUgAE/EJIA7gYIBoAAIgJAYgAHiDxIAKgZIgpAAIg5AWIgTgmIBNAAIgRgsIhXAAIAAgBIAAgDQgngLgngQQAGgoARgsIAYgGICYAAIAGgWIhMAAIAQg9IAsAAIAAAAIBDAAIAFgTIgwAAIgIgDIA5AAIgBADIB8AAIAPAmIg0AAIg5AXIgKAAIgRArIBTAAIgQAnIgJAAIiEA0IAAALIAQAoIDvAAIAEAOIAAAkIgdAMgAHiDxgAHShKIgDgBIgIgtIAXABIgLAtgAJIh/IhVAAIADgPIgOgCIAMgFIgQAAIAAgIIBrAHIAHgDIgCAEIgIAWIAAABIgEgBgAhFiMgAHbixIAIACIAAAGIgIgIgAFvjKIAZgaIAggDIAUAHIBNAAIAIgWIAaADIgEAZIhvAIIgCAOIgMAGIg7gMgAGSj3IgmAAIAmgPIAAAPIAFAAIgFACgAkDkbIgDgFIAHAAIgEAFg");
	this.shape_32.setTransform(467.6,168.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAlEuIAigrIARgZIgRAGIgFAOIgagFIghAKIAFgPQhegShdgOIgGgXIAAAAIBqgXIACgPIliAAQAAAMAEANQADANAFALIAJASIAIAJQAEABAAgEQgBgJgEgKIANAKIgJAeQgDALgEAGQgFAIgFAEQgEADgHAAQgJADgLgDQgNgDgLgEIgLgFIgKgGQgLgGgJgJQgKgHgIgLIhWAPIgQBBQATACAWgEIABAIIABAIQgiABgXgEQgqgCgagFIgJgYIAAAAIAZgGIAVhTIAXAnQALAAAPgEQAggPApgXQAcgOAmgdQAVgQAXgUIAAAAQgfASgaAKIgHgJIAAgwIAlAAIgOgPQgOAJgMAHQgiAbgbAOQg3AfgpAQIgBgDIAOgxIAMgpQABgGAHgBIBLgNQAmgGAogJQAagPAdgVQAXAKAFAIIATAfIgIAQQgCAFgEACIgDADIBQAAIALgSIAAhRIBoAvIBfAAIAIgTIgoAAIAWgtIByAAIAHgTIgHAAIhDggIAGgJQgIgVgQgYIgOAEIgLgGIARgmIgOAAIgrAUIgLgFIAAAKIALgFIAoASIgEAJIhtAAIgIASIAoAAIgYA0IhYAAIAAgGIgdguIhzAAIgUgNIAYg0ICAAAIAMgIIAAg6IgRAAIgNAJIAAgGIAdguIgIgNIARAAIgJANIABACIAAApIC8AAQAKgJAKgHIgEgNIAOgrQAJgJAHgKIAeAKIAHAGIAXAAIAwBLIA+AAIAZAQIDmAAIABgDIANAAIgNAvIhdAAIgFASIA3AAIgNAzIgBABIhsAAIAAABIAEATIAtACIgTAJIAMAuIg4ARQgMADAAAmIgDALIgMAAQgQABgLAFIAAAaICiBLQgnAogbAOIgtgdQgUBAgWAcQgZAqgVAXIgHAJgAjrBWIBKgjIALAFIAAgKIgLAFIgmgRIgNAAgAD9EHIAJADIBQAAIhZAbgAFWEKIAfgKIBcAAIgDAKgAHREAIANgqIg0AAIg9ASIgQgqIBgAAIgPgwIh3AAQgcgLgcgQQAHgkAQgnQAogMAmgQIBaAAIAGgSIg5AAIASg0IA4AAIATAEICuAAIAMArIhBAAIg9ASIgLAAIgOAvIBoAAIgNAqIgJAAIiPAsIAAALIANAsIDyAAIADAOIAAAlIgfAKgAHREAgAHVg6IgCAAIgDgBIgIg5QAegIAdgJIAnAKIhHAAIgPAvIAxAAIgGASgAIzh4IgJgDIAhAAIAGgTIAOAAIAKgDIgIAhIgugIgAhuiJgAH0iOIABgHIBcAHgAGBjHIAggcIAjgIIAWAHIBBAAIgCAGIhhAJIgFAZIgygLgAFmj3IAAgPIAugPIAAAWIAJgDIAFALg");
	this.shape_33.setTransform(467.5,168.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAjEyIAgguQANgUAKgVIgvAMIgEAPIAQAEIAPgHIgFAKIgKgDIgYANIAIgRIgVgFIgFAJIgLgDIgcAOIAJgTQhagWhXgQIgHgTIAAgBIBbgYIAEgVIkbAAIgCABIgxAOQgBAMADANQABALAEALIAGAPIAFAIQABABAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIgGgOIAJAKIgJAaQgDAJgEAFQgEAHgFADQgDADgGABQgIACgJgCQgLgBgKgCIgJgEIgKgEIgSgKQgJgGgHgHIhKAQIgSA3QAMAEAPgCIABAHIAAAFQgdgBgUgFQgjgDgXgHIgIgUIAAgBIAWgGIATg7IAWAkQAMgBAQgHQAggPApgaQAjgTA1gvIAHgEIgCAAIAPgOIgrgsIgbAVIgdAXIgCgFIAAgRIgLAFQg1AagqARIAOglQACgGAGgBIBBgNIATgFIAAgQIAzAAQAZgRAcgXQAWALAFAIIAQAVIAmAAIAJgSIAAhmICABOIgjAAIgaAqIBAgoIAFADIAAgFIA0AAIAJgOIgXAAIAYglIBlAAIAJgPIgEAAIg2ghIAFgJQgHgRgKgUIABAAIgCgBIgBgCIgDAAIghgVIADAAIAWglIgHAAIgnAYIgFgDIAAAGIAFgDIAVANIhdAAIgKAPIAXAAIgZAqIhjAAIgUgqIhvAAIgWgKIAUg3IB8AAIANgGIAAgtIADgBIDHAAQAMgIAOgGIgEgNIAMgqQAHgMAFgOIAeAJIAKAEIAWAAIAmBSIA8AAIAUAJIADgKID/AAIgDAJIApAAIgNAlIhRAAIgEAPIAmAAIgPApIhdAAIAAABIAFAQIBIAFIgXAGIgtARIAMAuIg8AOQgMACAAAnIgDANQgLABgIAEIAAAXICPBaQghAjgYAOIguggQgRBGgTAeQgYAtgUAZIgHALgADuEJIAKACIDKAAIANg4Ig+AAIhCAPIgOguIBzAAIgLgzIiSAAIgDAEQgSgNgRgQQAHgeAPgkQAigMAggSIACgSIBbAAIAHgPIgmAAIATgqIA0AAIADAYIADAAIAYAEICwAAIAKAsIhOAAIhCAPIgKAAIgMA0IB9AAIgLAtIgJAAIiaAjIAAAMIALAvID0AAIADAOIAAAmIgiAIIk/AAIiCAdgAJGhpIg4gKIguAJIAGgNIBbAAIAFgPIAqAAIALgCIgGAmIgvgHgAIEiGIABgGIBBAGgAGSjEIAogeIAmgMIAXAGIAVAAIgBAHIhTAJIgIAbIgegHgAlujzIALgXIAAgYIgIgRIAbAAIgTApIAAAbIgLAFgAFlj3IAAgCIAAgfIAxgMIAAAaIARgEIgJAGIAHARg");
	this.shape_34.setTransform(467.4,168.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAhE2IAfgxIALgWIg8AVIgCAEIAGACIgRAQIAJgKIACgIIg2gSIABgBQhYgdhUgUIgIgQIAAAAIBLgbIAJgeIgHgCIgEAFIAEgFIgPAFIj+AAIAFANIgEAGIgpAQQgCAKABALQAAAKACAIIADAOIACAFIACACQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIAAgCIgFgFIAFAIIgJAWQgDAHgDAFQgEAGgEADQgDACgEABQgHADgIgBIgSgBIgHgCIgJgCIgQgFIgPgIQgfAJgfAIIgTAtQAFAFAIABIAAAFIgBADQgXgDgRgGQgdgFgUgIIgHgSIAAAAIATgFIAQgnIAXAkQANgDARgJQAggQApgcQAbgRApgkQAagSAfgbIhnAAIAKgJIAQgPIgUAIIgZAQIgQAKQguAZglARIAPghQACgEAFgCIAxgNIgBAAIgHgUIAAgtICzAAIAHgUIAAh9IgSg0IhsAAIgXgIIAPg5IB4AAIAOgFIAAhdIgGgRIAlAAIgWBEIAAANIAPgFIDAAAQAPgGAQgEIgCgOIAIgqQAGgPAEgQIAdAGIAMAEIAWAAIAdBXIA6AAIAhALIASAAIgSA2IhOAAIgtAPIAAAyIArCAIAmALIBAAAIgLAiIAAAbIhIAZIhmAAIgLADIgBAFIA9ASIgIAIIAGgFIBJAYIgCgEIANgCIAZAdIgBAFIA0ARIADADIABgEQARgiAOhaIAQhiQAAgoANgBIBBgLIgOguIAxgPIA5gPIg/gNICOALIgLAUIhJAJIgGANIAQAJIgUAkQgtAGgnACIAHAMIAsAAIgGAGIAFAAIgcAeIhLAAQgMAAgHAGIAAAUIByBmIAAgCIABgBQgLgOgKgUQAIgaAOgfQAbgOAagSIADgUIgQgSIA5AAIAGAHIAFgCIACgFIAOAAIANAGIACACIACAAIgEgCIgHgGIAUAAIAHgMIgSAAIAUgfIA2AAIAEAwIAEAAIAbADICyAAIAIAwIhcAAIhGALIgLAAIgJA3ICSAAIgIAxIgJAAIilAaIAAAMIAIAyID3AAIACAQIAAAmIgkAGIlDAAIiLAWIAAgpIAKACIDNAAIAKg9IhJAAIhGALIgMgwICHAAIgJg3IiTAAQgnAtgaARIgtgiQgPBKgRAhQgWAwgTAbIgIAMgAoABmIARgGIABAAIgFgFIgNALIAAAAgAlUA8IAjgfIBMAAIAJgLIgFAAIAZgbIBYAAIAKgLIgBAAIgogkIADgIQgFgRgJgTIgIgCQAEgEAHABIgwgqIAAAAIAAAAIgBgBIAAABIhJAAIgKALIAFAAIgcAfIhhAAIAAAVIByBjIgQAOIgHAAgAFjgXIgBgCIAAAAgAFdgZIAFAAIgCgBgAjHiTIAJAAIAYgcIgBAAgAATEKIAGgGIgFAGIgBAAgAgsD1IADABIgSAPIAPgQgAhLCNIAPgPIgOAPIgBAAgAJZhaIg/gIIhBAJIARgaIBMAAIAHgLIBFAAIAMgCIgEArIgxgFgAIUh+IACgFIAnAFgADWidIAAgCIABACgAGkjBIAOgKIgEAMIgKgCgAHTjhIApgQIAFABIgEALIgtAGg");
	this.shape_35.setTransform(467.2,167.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAfE6IAdg0QANgaAJgbQAPgkALhgIAKhoQAAgpAOgBIBFgHIgOgvIAzgNIBCgPIhcgUIAJgsIhoAAIg0gFIADg3IEeAAIAAgpIA5gGIAAAjIA/gGICuAAIgFA0IhQAAIgbgDIgrATIg3AjQA5AOBAAXIgJAgIANACIBgAAIAPgBIgEAwIgxgDIhIgFIhVAHIADA8IAEABIDTACIAFAyIhoAAIhMAIIgKAAIgGA6ICmAAIgFA0IgKAAIiwASIAAAMIAGA1ID6AAIABA4IgnAEIlHAAIiTAPIAAgvIALABIDPAAIAGhBIhSAAIhMAIIgJg0ICaAAIgGg7IiVAAQgnAxgYARIgugkQgMBPgPAkQgVAzgRAdIgJAOgACKgGIAAAQIBMBsIAAADIABgBIgCgkQAIgWAOgbQAUgOAUgUIAEgRIgLgXIAFAEIALgGIgOAAIgCACIgIAGIgNAAIgeAVIg/AAQgLAAgFAGgAGKgKIgYgjIAAgDIAGgJIAAAAIAHgHIACAAIAVgVIA8AAIAIgIIAAAAIATgSIA/AAIAHgIIgOAAIABgCIgwgIIgCgEIgYgQIgOACQgCABgCAEIg/gKIgHAFIABgCIACgEIgCgBIAAAFIgRAVIg8AKIgHAKIAAAJIgVAaQgnAGgfADIABAAIAHAHICQAAIgXAQIgZAAIANAcIgCADIAOAAIAHgDQAIgEAEgHIAFAFQALADAMAGIAEAAgAEcgpIAiAAIgCgEIgSgDgAFpioIAHgHIgEADIANgNIAyAGIADAAIAEgJIgHgKIANgYIA2gLIAGgKIgEgGIghAAIgBgCIgWgLIgMAFIgBAIIg6AAIgGAIIAGAAIgPATIg2AAIgGAHIAGAAIgRAVIg+AAIAAAAIAGAJICHAPIACgCgAqEFMQgTgFgNgHQgXgHgQgKIgHgOIAAAAIAPgFIAMgUIAbAlQANgEATgLQAegRApgdQAUgOAdgbQAdgWAkgjQAEgCADgFIADgEIADABIAGANIAAAGIggAQQgDAJAAAIIgCAQIAAAMIAAAGQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgHgCIABAIIgIARIgGAKIgHAHIgGADQgFADgGAAIgPACIgGAAIgIAAIgOgBIgNgCIgzASIgUAkQgDAGABADIAAAEgAgUEWIgFACIg0gXIgQAFIAHgTIABgFIgGACQhIgehEgWIgIgNIA8gcIANgiQABAIgBALIAGgCIA4AVIAPgFIgFAZIAGgBIA6AZQAAAAAAgBQABAAAAABQAAAAAAAAQABAAAAABIAMABIAUAYIAAAFIApARIADAHIgGAOIg3AZIgEAKIgJACIAGgXgAqBCwQACgDAEgCIAsgPIAkgPQgRAOgPAIQgoAZggAQIASgcgAoaCEIATgTIAMgLIABABIAGAAIAGAJIAEABIgNAAIADANQAAABABAAQAAAAAAABQAAAAgBAAQAAAAAAgBIgSgCQgBgBgEACIgSAJIADgDgAm6BxIgRgRQgGgGgTgMIgmAjIhuAAIgEgVIAAgsICsAAIAFgVIAAh5IgMg4IhoAAIgZgFIAKg7IB0AAIAPgDIAAhaIgEgTIAvAAIgPBJIAAAQIAQgEIC6AAQASgEATgCIgCgNIAGgqIAGgmIAeAEIAOADIAVAAIATBcIA5AAIAkAIIAWAAIgMA5IhLAAIgxALIAAAwIAdCJIAnAHIBSAAIgHAkIAAAbIhNAQIiBAAIgkAHgAmyhvIBMBsIAAADIgiAwIAegVIBHAAIAKgHIAMAAIAbgTIBLAAIAKgGIADAAIgbgnIACgHQgDgPgGgRIgGgFQADgGAEgCIgggtIAAgEIAWgfIgEAAIgaATIhIAAIgKAHIgMAAIgeAVIhTAAg");
	this.shape_36.setTransform(467.1,167.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAcE/IAdg4QAMgbAIgdQAMgmAIhmIAFhvQAAgpAPgBIBJgEIgPgvQAXgDAggIQAfgGArgKIhdgWIAMguIihgDIACg4IEhAAIAAgrIA9gCIAAAmIBCgDIDEAAIgCA4IhugBIhsA7QA4APBCAYIgNAlIBwAAIAQAAIgCA1IgzgCIhPgDIheAEIACA9IADAAIDYABIADA3IjQADIgDA/IC8AAIgDA3IjFAJIACBFID9AAIABA5Il0ACIicAHIAAg1IALABIDRAAIADhEIitADIgFg3ICsAAIgDg+IiXAAQgnA0gXASIgtgmQgKBUgNAlQgUA2gQAgIgJAPgACPgVIAAAMIAmBzIAAAHIABgBIAQgnIAWgnQAPgPANgVIAEgOIgCgXIgLAAIggALIg1AAQgJgBgCAIgAGPADIgLgjIAAgHIADgNIgWAAIgcAJIg8AAIgLAEIgNAAIgHgCIAAACIAHAAIAFACIAbgCIAQACIACAjIgCAFIAhAAIAGgBIASgEIAJACIAUADIAIAAgAGIiXIgVAQIguAJIgIAHIgRAJIgWARQgfAHgYACIABAAIAIAEIB5AAIAHgEIAVAAIAXgKIAvAAIAIgEIASAAIATgKIAxAAIAIgDIgvgLIgDgDIgUgLIgMAAQgEAAgEAAIgxgKIgHABIgNgIIgCACgAGajBIACAAIAcghIAogKIAGgHIAEgGIgaAAIgBgBIgSgFIgKACIgFAEIgrAAIgIAEIgLAAIgQAJIgoAAIgGAEIgKAAIgSALIgvAAIAFAFIBlAQIAHgCIALAIIARgGgAqYFRQgNgIgLgIQgQgJgNgKIgHgMIANgEIAEgFIAhAqQANgGAVgMQAdgTApgfQAOgKASgRQAcgZAngpIAHgGIAGgIIgGgHIgrgWIgFgGIgCABIgEACIgIAZQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgTAKIgDACIgQALIATgTIATgVIAMgNIALgMIitAAIgDgXIAAgrICnAAIADgWIAAh0IgHg8IhkAAIgagCIAFg+IBwAAIAQgCIAAhXIgCgTIA5AAIgIBNIAAAUIARgDIC0AAIAqgDIgBgNIADgpIADgtIAeADIAlABIAJBiIB5AFIgGA9IhKAAIgzAEIAAAvIAOCSICNADIgCBAIhTAIIidAAIglAEIjiAAIAAgBIgBABIABAAIAYASIAaAXIgEAGIAFAJIgXASIgHAMIgEANIgEAKIgCAFQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgIAEIgDAIIgIAMIgGAIIgFAGIgEADIgJAEIgMAFIgFABIgGACIgMAEIgMACIgnAUIgWAaIgPAOIgBABgAnRiJIAmByIAAAHIgRAzIAfgKIA7AAIALgDIAeAAIAbgKIA/AAIALgEIAGAAIgOgnIABgHIgEgbIgDgJIAEgNIgRgwIAAgIIALggIgKAAIgbAJIg7AAIgMADIgdAAIgfAKIhFAAgAg4FBIgJgZIgGgCIgmgYIgRgHIgIgVIgDgEIgGgCQg4ghgygXIgJgJIAAgBIAsgdIAOgbQAKAMAHAKIAGADIArAWIAQAGIAMAaIAHADQAVAMAXAOIAFAGIAKAEIARATIACAEIAdATIgDAHIgFAKIgpAbIgEAHIgLgEgAqCDQIAFgEIAjgRIAZgOIgXASQgiAXgcAQIAUgWg");
	this.shape_37.setTransform(467,167.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ai3DyQgzgtgrgeIArgyQBfBDBvB4IguAwQg7g/gygvgAAaFDIAbg7QAMgdAHgeQAJgoAFhsIAAiQQAAgQAQAAIBNAAIgQgwQAygFBbgVIhegXIAPgxIilAAIAAg7IEkAAIAAgrIBAAAIAAArIEgAAIAAA7IhwAAIh2BCQA5AQBDAZIgQAnICBAAIAAA6IjyAAIAAA/IDiAAIAAA6IjiAAIAABCIDQAAIAAA7IjQAAIAABIIEBAAIAAA6IohAAIAAg6IDgAAIAAhIIi/AAIAAg7IC/AAIAAhCIiZAAQgmA3gXATIgtgoQgIBZgKAoQgYBLgSAhgACTglIAACOQAcgbAfguQAOgcAMgvIA9AOIgOAvIB+AAIAAg/Ij6AAQgHAAgBAIgAIfhnQgvgThigeQh1AogxAJIE3AAIAAAAgAGKjQIAAABIABAAIBZgqIjzAAgArUEkQAogVBHg0QAhgcA4hEIAzAoQhDBOgiAeQhGA4glASgArUBYIAAhBICgAAIAAjGIh8AAIAAhBIB8AAIAAhoIBEAAIAABoIDuAAIAAhoIBEAAIAABoIB/AAIAABBIh/AAIAADGICiAAIAABBgAnwAXIDuAAIAAjGIjuAAg");
	this.shape_38.setTransform(466.8,166.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgxEOIAHADIAYAAIAHAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBAAIAAAFIAfAfIAgghIALAOIAEAFIgrAnQglgjgkgegAEOEYIA1AEICOgEIgFhCIi7AAIgEg1ICkADIgFg8IiKgKQgjAvgVAOIgpgpIgHA7QgGAigHAUQgUA0gRAeIgJAQIg3gaIAdg2QAMgbAIgcQAIgWAGgsIAJhHIAIhxQACgkAPAAIBHgCIgSgrQApgFBNgTIhcgVIAKgsIhSAAIhKgGIAFg1IEdAAIACgpIA7gEIAAAKIgDAcID1gDIABAzIheAAIhiA8IARAEQAnAJAsANIAOAFIgMAjIB4AHIAFA1IioAAIggACIgDA2IA9gDIBRAEIBEAEIgEA2Ih3AHIhUAAIAEA8IC5AFIgEA1IiSAAIg4ACIgFBFIBXADICXAAIADA1IidAAIgYABIkrAXgADVgyIAECFQAagXAcgoQAPgZANgsIA4AMIgKApIB1gEIgCg4IjuAAQgHAAgCAGgAEWhJIApAGIEMgCIgmgUIhkgcQh2Akg1AIgAEdjYIAfANIB/AdIAAABIACAAIBfgoIgfgEIjYAAIgIABgAqpE1IABgBIAOgIIAQgFIAQgLIgZANIgEgGQAUgLAfgVIAngdQAXgSAogsIAEAGIgGAMIgDAEIgDAEIgBABIgIAJIgBABIgFADIAFgDIgFAFIAXgNIACAAIAagdIgCgJIAAAAIAGAFIgEAEIABABIAAABIAAADIAAAEIABAFIgFAAIABAKQAAAJgGgEQgFgCgGABIgQATQgWAYgRAQIAIgPIgSARQgwAlghASIgDACIgBAIIgGgBIgKACIgDABgApZEGIgGACIAGgCIABAAIgBAAgAq3E6IgCgBIgRgaIgUgMIgQgQQASgKASgPQAKgKAJgPIATgNIAYgHIARgPIAXgPQAIgFAKgKIAEgBIAKgGIAEgCIADgCIgDACQATgTAWgaIAIAHIgUAXIgSATIgPAPIAZgNIADgCQgSAUgQAQIAAgDIABgNIgVASIgYARQgwAhgfAPIAAgBIAHgKIgWAMIAHAJIgPAKIAJAKIADABIAFABIAKAFIgEACIAOATIABgIIgJgMIAFADIAEAIIAAABIANARIgFACIgEACIgCAAIgDABgAqpE1gAo6ELIAOgMIgDAFIgEACQgEAIgEANIgLAGIgEAAIgiAOQAXgPAbgVgAA5EQIgSgUQg1gwgygmIgCAAIAAgBQgcgVgbgRIgJgEIgGAAIgCgGIgBgBIgmAlIgIAIIAGAGIgFAEIgKgDIgKgLIAAAAIAagRIAHgFIAcgXIgBgBIgegCIgegCIg8gIIhLgMIhQgNIj/AAIgFgdIAAgjIB7AAIAjgGIgIhPIAAglIALhGIgNAAIgjgGIgcAAIgdAFIAJg6IAdAAIAfAFIAvAAIgDgUIAAgdIAHgoIBIAAIgBBQIAEgBIAoABQAuAFAvAKIBlAAIABgLIAAgbIgIg0IAkAAIATAEIAEBuIACAAIAvgHIA+gKIAJABIAFAbIgCAmIgwAGQglAHgkADIABAtIACAYIACA1IAFAiIAAAeIAXAEIAiAFQALACALAAIAQgBIALgBIAbgFIgBAVIgEAnIgeADIg2ADQAmAgApApIAHAEIADAHIAKALIAfAQQAJAGAJACIAKAKQAAAKACAJIgKALIAAAGIgHgIgAmmi3IAGC+IDegDIgHi/gAg2EMIgBgDIAGAFIgFgCgAg+EDIAFADIACADIgHgGgAh+DlIgEABIgMgGIgRgdIALALQAXAQAaATIgbgMgApKC6IgKgCIAKgJIABALIAAAAIgBAAgAoJB2IgFAGIAAAAIAAAAIgJALIgCgCIgBgCIAMgHIgHgGIgIAJIgBgBIAWgYIAgAdIgGAIIgBABg");
	this.shape_39.setTransform(465.5,167);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AABDzIAcAJIAbAIIACAJIARAEIABgBIAFgGIgJgBIAZgWIAFgDQACgBgBABIgEAFIAOANIASgSIAPALIAHAKIAKAOIgLAJIAPAIIAEgFIACADIg0AoQg/gyg5glgAFlETIAvAIIA7AAIAmgGIAXAAIgKg8Ii4AAIgIgwIBWAAIAmAHIANAAIgJg2Ih8gVQggAmgTAJIglgpQgCAbgEAUQgHAfgJATQgWAvgSAcIgFAIIgIgMIAKgIIgIgKIgWgeIANgNIgGgIIgEAIIgGAKQhOg8hHgoIglgVIgpAhQgFAEgDAFIALANIgEADIgBgFIgggDIgMgQIAAgBIAVgKIgLgDIgVgEIgWgGIgtgPQgkgLgjgNIhKgaIiMAAIgDgCIgCACIgqAAIgDgDIgDADIhNAAIgJgaIAAglICCAAIAfgLIgYhIIAAgnIAYg/IgJAAIgggMIgTAAIgaAKIASgzIAeAAIAdAKIAgAAIgHgSIAAgUIANgkIBMAAIgBA3IADgCIArACQApALAsAUIBqAAIAEgKIAAgSIgRgvIAYAAIASAGIAGB0IADABQAXgGAXgIQAdgJAcgKIAJAAIAJAaIgDAnQgXAJgVAFQglAOgjAGIAEAvIADAZIADAkIALAgIgBAfIAUAIIAUAJIAegTIAVASIAPgGIgDAPIAAACQAXAVAZAaIAIACIACAIIAPAQIAqAOQALAEALgCIACgGQAJgUAIgpQAHgcAHglIAQhoQAEgiAPgBIBBgCIgUgoQAfgEBAgRIhagTIAFgoIhQAAIhCgLIAIgwIEXAAIADgUIAAgSIA1gJIAAAIIgEAaICqAAIAfgFIAAAeIACAMIhMAAIhOA1IARAEQAjAFAnAIIAOAEIgHAgIAdAAIBQANIAJAwIiIAAIgcAFIAAAOIhWgVIgyANIihAAQgHAAgCAGIADB/QAagVAbgjQALgQAKgYIAEABIA3gBIgFAXIBugIIgCgQIB3AAIgEgDIALgBIBOAHIA4AIIgFA1Qg6AIg4AEIhEAAIAJA2IAhAAIBCALIA/AAIgIAwIiPAAIg2AEIgJBAQAjAEAlADICTAAIAIAvIiAAAQgJAAgMADIkMAtgAlejKQAIBcAFBaIDNgGIgNi3gAFIjDIAbASICIAaIAAABIACAAIBkglIgcgJIjlAAQgFAAgDABgAqcEpIAGgBIgCgCIADACIAGgBIAEAFIAWgHQgSAKgNAFgAq1EtIgCgHIgFgUIgCAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBQgEABgDgDIgCgCIgSggIgYgEIgTgSQAUgOAUgSQAIgMACgUIAWgPIAcABIARgUQAQgLALgDQAFADAGgEIAPABQAZgWAggiIAGAAIALAMQgPARgOANIgNANIADAFIACAEIAQgFIAIgDIgSATIAIAQIgFAEIAAABIAAAAIgPgKIgGgEIgDgEIgfAIQgzAighAPIAWAfIgTALIgOAJIAPAFIgBAAIAKAPQATgIAXgPIAEAGQAjgOA6gpIgCAIIABABIADgDIAGgMIABAAIAJgDIAfgKQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIAAAAQACAAACAFIAAAAIAJgNIgDgDIAIgJIgPgPIAKgMIADAKIAJAlQAAAJgCAFIgDAGIgEADIAAgBQgFgNgHgEIgZAkIgeAcIAHgVIgVAUQhAAugkAPIgagnIgKAFIAKAPIgLAAIANASIAJgEIAHAJIgWAEIgBAAIgCAAgAohC8IgBACIABgCgAptEgQAYgPAegWIAVgSIgCAGQAAADgFABQgDAKAAAUIgPAIIgGgEIg0AQIAIgFgAgqDnIgDAEIgSgFIgQguIARATQAdARAeAUIAEADIgrgMgAnjDDIgEgEQAFgBADgDQADAKgDAAIgEgCgAnnC/IgGgIIAGAHIAAABIAAAAgAoGBnIAOgOIACgBQADgBACABQADgBACAHIACAEIgQARg");
	this.shape_40.setTransform(464.4,168.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("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");
	this.shape_41.setTransform(463.9,168.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("ADSEBIhcgNIgCALIgcgEIgUhxIgDAIQgSAIgPAEQgtAOgkAFIgmgTIgEgJIgFgLIgPgfQgfgWgfgaQgggYgfgbIjYAAIgcgnIgbAfIgVgWIgUARIANANIAkAAIADAEIgZAYIABAGIAFAYQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgigGIAVgTIg1AJIgFACIgEgBQAUgPAXgUIAGgFIgLgOIAGgFIgHgHIAAgqICQAAIAZgXIg1g4IAAgsIAugxIAAAAIgZgXIgBAAIgUAUIAjgmIAhAAIAXAWIACAAIgOgPIAAgBIAbgcIBUAAIAAACIAuACQAcATAeAgIhDAFQARBUAJBQICsgNIgXiQIAPAAIAJBeIACACQAVgMAUgQQAagSAZgVIALABIAQAXIgFArQgVASgTAJQglAcgfAMIAHA0IAHAaQAGAWABgVIAVAeIgBAjIAGAHIAWgIQAegMAegOIAYgOIgngFIAPgDIAEgOIAHABIgDgEIBXgfIAdAdIAEABIABAFIAaAeIANACIAOgkIAfhXQAJgdAOgBIApgGIABAAIACBjIgCABIAAAAIACACIAAAGIAFgDIAWARIEbgCIAGAOIAgAAIA0AWIAhAAIgQAlIiJAAIgyAIIgRA4QATAIAWAFICMAAIAQAlIhEAAQgEAAgIAFIhuAvIgKgVIiuAAIgQgmIAtAAIAeANIAHAAIgSgqIhhgqQgNALgKAFIAeAHIgEAaIhDAKIAAABIgHAhIgKAsIABABIAngXIARAkIg5AgQg0gdgwgWgABVBzQgGADgCAFIAUAhIAEAGIBGAfIAZALIAcggIAsAUIAQgFIAMgTIAEgFIAJgPIgNANIgTgJIgZgSIgDAEQg7gcg6gVgAIMEVIAYAKIgYALgAIxElIgNgGIBMggIAKAZIgLAAIgeANgAq6EOIAuADIgEgPIAIANQANgBASgJQAWgMAagRQARgLAWgUIgBAIQgBAEgIABIAAAAQABAPAHAjIgZALIgGgLIh/AaIgIgUgAIkEfgArLEBIgCgPIgEgaIgFAFQgNAMgNAIIgZgKQAHgFAHgIQAEgHADgLIgCgFIgTgtQgPAHgSAFIgagWQAbgWAXgYQACgRgLgdIAdgUQASAIAQAJQAKgNAJgQQAVgLAPAAIgEAaIADADIANgCIgIAGQglAagVALIAcA2QAPgIAZgRIAJAPQAMgCASgJIABABIACAMIAAABIADANIADAPIACAJQgkATgbAJIAQAfIgKAHIgGACIABABIARAbIg2AFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBgAq4DwIABgBIgCgCgAqSD/IABAAIABADgAqTDcQAVgJAZgOIAFgLIgBgDQAZgRAggcIASAEIAKACQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgCAQQgSAUgNALQg5AjgkAMgAn+DbIAAgCIgFgVQAMAJARAFQAWAGAAgoQgDglgFgQQgBgLgCgCQgBgFgEABIgUADIgSgXIAFgDQARgQAdggIADABQADACACAQIAEAkIAFAiQADApgCAUQgEAOgHAIQgEAFgFADQgGADgGABIgNABIgQgBgAovB1IAGAAIgHAFIABgFgApqAwIAaAGIgeAFIAEgLgAA5AgIA0AHIg5ALIAFgSgABtAnIAAAAgAKeiPIj+AAIAXgIIhWgPIgFgfIhNAAIgzgWIAQglIELAAIAGgQIAAgRIApgSIAAAEIgJAUIBbAAIAYgKIAAAQIAEAJIgpAAIgmAqIARADQAbgFAfgCIANAEIABAYIAcAAIA/AbIARAlIhIAAIgRAIgAgWjeIgDgbIARASIAAABIgHAIgAiGjeIgLgMIBogJIAEAVgAgqkMIACAAIAPANIAAAGg");
	this.shape_42.setTransform(462.7,169.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AJ1ErIgWgOIA0ghIATAfIgFAAIgaAQgAE8EJIiAgNIgCAPIghgEIgSiSIgtAFIADAGIgSAiQgSAJgPAGQgwARgkAGIgmgYIAEgKIAEgOIACgSIgBgVQgegcgdggQgdgegdghIkVAAIgUAVIARgCQAGgBAEAEQADADACAVIADAwIADAnQACAygEAXQgGARgKAKQgGAGgGADQgHADgKABQgPACgXgEIAAgCIgFgcQAQAKAWAFQAeAFACgzQgCgxgEgWQgBgOgCgEQgBgGgFAAIgtAFIgHgLIgMANIgXAZIgWgkQAhgLAvgaIAEgEIhDgIIgOgCIgcgEIgJADIACAFIgYADIABgCIAFgNIANACQAZgPAdgXIgEgJIA0gEIAAgmICYAAIAVgdIhFgwIAAguIA7gqIAEAAIgNgRIAagSIAjAAIAGAKIAQgMIBYAAQgBgBgDgTIADgEIAxAEQAUATAVAdIBwgNIADAQIAgAXIgEADIgWAAIAXBvQAOgLAOgOQAYgWAXgbIALACIAUAVIgGAtQgUAWgSAMQgkAigeAQIAJA1IAIAbQAIATABgiIAbAcIgBAVIA1gRQAkgNAkgPIAggTIgggFIhmAMIAEgYICLAOIgRgYIg3AHIAEgYIAvAFIBCgSIAAgFIANACIAPgFQARATASAYIAihDQALgbAMgCIAogHIACAAIAAgDIAEADIgEAAIABBVQAZgOAagYQAIgHAIgKIBdAKIAAAAIADAAIB0gfIgWgWIg1AAIgGgPIjAAAQgFAAgCAEIAAALIgJAAIgNgNQAEgDAZgLIhUgNIgKgaIhLAAIgsgcIAVggIEEAAIAHgNIAAgRIAjgWIAAACIgKARIAzAAIAUgNIAAAJIAFAIIgXAAIgSAkIARADQAXgKAagHIANADIAFAVIAcAAIA1AiIAWAgIgpAAIgTAMIAMAQIAxgQIBGASQALALANAJIgMAuQg0AUguALIgTAAIAWAjIAfAAIAsAcIATAAIgUAfIiFAAIgxALIgWA0QALAKAQAGICIAAIAUAgIgmAAQgBAAgIAFIh1BKIgFgJIiqAAIgVggIAaAAIAZAQIAEAAIgXgkIhLgvIgOABIgFAAQgGACgGAAIAUAJIAPgCQAFgBAAAFIgCAGIgHA2Qg5gZg3gVQgLAOgLAKQA1AVA4AZIAXgMIgIA8IgBADIgDgBIgNAGQgngSgmgPgAChBqQgGACgCAGIAUAqIAFABIAxASIAXgXIALgLQAQgQAMgQQgngOgngLgAHoAQQgfADgaACIAAAAIAZAcIEygBQgKgSgNgTIhygQQhNAOg8AHgAoKgZIAFADIADgCIgFgFIgDAEgAAahlIAHgBIgBgEIgGAFgAJVEXIAKAGIgKAGgArXEDIA+ABIgDgYIgKAAQgGAIgIAFQgIAFgJABQgSAGgegEIgHgYIAaAQQAHACADgGIABgFIgHAAQgEAAAAgDIgBgUIgEgmIgaAZQgPANgPAJIgbgPQAMgIALgLQAIgLAHgQIgCgGIgUg0QgRALgUAKIgegYQAegaAYgbQgBgTgRghIAggXQAVAMARAMQAKgOAKgSQAYgLARABIgDANIgDALIAqgDIgKAEIggAVIgdATIAYA1QAPgHAYgSIAHALIACAKIAJAgIAAACIAAABIACAKIgNAGIgRALIACASIgmAGIgJAFIAYA0QARgIAegWIAIASIgCADIgQAGIAXAqQAMABAPgGQAVgKAZgQQATgLAagWIADgGIgBAMQgBAEgKABIgBAAIAOA9IgdALIgHgOQhpATguAIIgJgbgAJfEdgABhCcIAAgIIACgGIADAIQAAALgCAAQgCAAgBgFgABjCOIgGgOIADgGIAHAEIgEAQIAAAAgAAjjcIAFgDIAAAHgAAjjcgAl5kEIgDgGIAHAAIgEAGIAFAGIgSANg");
	this.shape_43.setTransform(463,170.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("ALAEzIgZgXIAbgXIAZAbIgCAAIgVATgAHjErIAAgJIgrgPIgQgBIiegLIgCARIgngCIgOiqIhGAJIgJgUIgCAXIAIAYIAHAjQgDANgFAAQgFAAgDgHIgDgJIABgaIgJgLIgYApQgTALgQAGQgzAWgjAHIgngdQAIgFAGgHQAGgIAFgJIAKgWIAGgZQgcgigaglQgbglgZgoIlIAAIgOgHIgMANIAAAJIAcgCQAIgBAEAGQAEADABAaIACA7IADAuQAAA7gHAaQgHAUgNAMQgHAGgJADQgJAEgMAAQgLABgPgBIACAGIghANIgJgSQh4AUg2AHIgDgPIgMADQgUAEgjgGIgGgfQAZANAKADQAIACAFgIQAEgHACgQQABgQgBgSIgBgFQgCgQgEgRIgkAjQgSAPgPALIgfgVQASgKAOgQQANgOAKgVIgCgHQgIgYgNgiQgSAPgWAOIgigaQAhgeAagfQgEgUgYgmIAkgZQAXAPASARQALgRALgVQAZgKATADIgFAQIBIgEQgRAJgPAFQggAXgSAKIgCABIAUA0IAMgFQAPgJAXgRIANgFIALAVQALADASgFIAUgJIAMgBIAKAdQAhgIAtgUIAJgFIAGgFIg/AGIgkgDQAbgOApgjIAHgEQALgIAPgQIAQgSIAIAOICLAAIARgiIhTgoIAAgwIBGgjIAIAAIgFgKIAqgTIAlAAIAKATIBZAAIgEguIACgEIAzAEQAOATAQAdIBygSIAQA5IANAGIgLAAIAWBVIgoAGIAHAzIACADQAUgRAUgaQAWgZAVghIALACIAZAVIgIAuQgSAagRAPQgjApgdASIALA4IAKAcQAJAQABgwIAcAXQApgKAogNQAqgOApgRIAngVIgqgEIh/ALIADgeICqAMIABgMIgOgXIhZAIIADgfIByAJIANgDIADghIAmADIACAWIAWgFIALAQIAGgJQANgYAMgCIAmgIIACAAIgcgWQgGgDAMgJIhSgKIgPgXIhIAAIglghIAYgbID9AAIAKgLIAAgQIAdgbIAAABIgMAOIAKAAIASgQIAAACIAGAHIgFAAIACAeIAQACQATgOAWgMIAMACIAKASIAbAAIBFBDIgIAAIgQAOIAQAHIAvgUIBCAXQAGANAIALIgQAsQgxAXgqANIgEAAIAbAeIAeAAIAlAgIAEAAIgYAbIiCAAIguAMIgRAhIgJAPQADAMAIAHICGAAIAYAbIgIAAQABAAgHAGIh5BvIgFgGIieAAIAEAMIgYAIIgCAbIgmgDgAqJDBIgUAGIAUApQAIACANgDIAsgWQATgKAYgSIANgnIgHgTIALgMIACgVIAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgDAAIgjgDQgLALgIAGIgGADIgXgvQgtAfgjANIgCABIABAOIgZACIgaARIAUAzQALgFASgMIAUgPIAKgEgAFGCsIAEABQBMAVBQAdIAagLIARAGIABgOIARgHQgEgOgJgSIgEAnIgSAIIgMgEQhRgdhPgUIgogJIgXAHIgOgDIAHAGIAHgDIAxAPgAD1BiQgIACgBAHIARAsIAKADIgBgBIAAgBIAnggIAggfIgkgJgAHpBTIByAAIACgVIhNgHIALgLIg1AEIALgLQgagsgWgiIgSgCIghAwIgTAbQAnASApAYIAPgPgAJNglIBCAGIABAAIACAAIB6gdIgUgaIi1AAQAIgIAJgLIAHABIAhgEIAEANIBMgWIgRgdIi0AAQgFAAgDAEIABA4IggAAQgHAAgBAFIAPAjIAaADIAAAEIAHgEIAZACQALgFALgKIAWATgAKmEbIABABIgBACgAKnEcgABNjRIAJAAIAMgGIAAARgAlHkIIgJgRIARAAIgIARIAEAIIgKAFg");
	this.shape_44.setTransform(462.5,170.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AMCE8IAEgHIgPgVIAAgHIACgDIAVAPIAFAAIgNAQIAFAHgAJOE1IgBgXIhCgEIi0gJIgCAWIgrgDIgMjCIhPAMIgSgmIgBgDQAxgLAxgPQAvgOAwgTIArgWIgygEIiZAJIACglIDBAKIACgrIAAgBIh+AIIACglICPAIIADggIgEAAIgTgSIhHAAIgdgnIAcgWID2AAIAMgIIAAgQIAWgeIgBgBIADgCIAAABIgCACIANAPIAQABQAQgSARgRIAMABIAOAPIAaAAIAjAvIAeAWIAXAAIgMAQIATgCIAsgXIA/AaIADAcIgSApQgvAcgmAPIALAAIAhAYIAdAAIAdAmIgLAAIgcAVIh+AAIgsAOIgXAgIB4ALIAMAhIAPAMIAVAAQAEgBgFAIIh1CbIgOgLIhvAAIgDAsIgrgCgAE/CwIAPAyIBMARQBQARBUAXIA3gQIgsAAIgcgVIgOAAIARAWIgCAAIgfgYIgyhBQAyALAzAOIAHgDIArANIAJAiIgBARIAFgCIgEgPIAIiDIhMAAIA0AOQAPAdAFAWIg4ATQg4gOg3gMQgsgJgsgIIAAAAgAIJB1IAwAAIgfgIIgWgFIgGgNIAegPIgkABIAAABIAGANIgQAIQgVAJgRAHIA/gFgAFIBbQgIACgBAHIADAKIARgLIAVgQgAIRhXQgMAEgPAVIgwA3QAsAPAvAWIAlgiIgBgDIBzAHIACABIACAAIB/gaIgSgfIj7AAIgQggIgGAAgAI6idIABBhQAWgJAYgPIABgBQATgLARgRIAHABIAegGIAHAHIBDgZIgUgXIioAAQgFAAgCACgAtcEaIgFgmQAeANANACQAKABAGgJQAFgIAEgUQACgUAAgWIAAgHQgCgTgDgUIgoAmQgTARgRALIghgZQAWgOATgTQARgTANgYIgCgJQgHgagOgmQgVATgYASIgmgcQAlgiAcghQgIgXgegrIAogcQAYAUAUAVQALgTALgXQAdgLAUAEIgDAJIBogDQgfAPgaAHIgpAcIAQA1QAOgGAZgUQARgEAUgJIAJAVQAJAGAPgBIALgFIArADIAFAQQARgCATgHIANgEIAjgOQAJgHAPgRIADAjIgBADIAUgBQAIgBAFAHQAEAEABAfIABBGIABA1QgBBEgJAdQgJAXgQANQgIAHgLAEQgLADgOABQgSABgXgEIgHACIgCgEIgHgBIAAgCIgBgOQiKAWg7AGIgDgNQgHAIgIAEQgKAGgLACIgNAAQgUAAgdgGgAoeCJQgZAQgVAIQgqATggAHIAPAmQAIAEAKAAIApgTQASgHAXgQIAIgkIgDgVIAAAHgAqHCrQAkgGAwgVQANgMAZgdIgTguIgIAKQgQAQgKAIIgfALIgSguQgjAUgdAKIAAAGIgRABIgXAPIgRALIAQAyIACgBQAOgGAYgSQAQgFASgIgAgzDaQALgGAKgJQAMgIAIgMIARgZIAOgdQgagngXgsQgYgrgXguIlWAAIgjgMIAAgyICmAAIANgnIhighIAAgxIBSgdIANAAIgPgoIAaAAIgLAiIA9gRIAnAAIAMAlIgsAAIgXgIIAAAaIAugQIBgAAIgEhHIABgEIA2AEQAJAUAMAcIBygXQAPAnAOAtIAPAAIAOgEIAAAZIgZgJIANAsIhAAMIAPBiIACADQATgUASgdQAWgfASgmIAMADIAdATIgJAwQgSAegQASQgiAvgbAWIANA6IALAdQALANABg+IAmAZIgCAnIAEAcQACAZgBAQQgFAPgIAAQgHAAgHgIIgFgLIgFgfIgKgQIgcApQgUANgQAHQg2AZgjAJgAJGkAIAOgSIAAgEIAHAFIANAAIAIAIIgMAJg");
	this.shape_45.setTransform(462.1,170.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AM4FEIAMgYIgBgBIABAAIAAABIALAYgAKxE/IgBgaIhJgCIjKgIIgBAZIgxgBIgHiqIgbgkIgBgBIAVgLIhTAOIgTgrIgCgDQA3gMA3gQQA1gOA1gUIAxgZIg6gDIi0AHIACgrIDXAIIACg0IiUAHIACgsIANAAIgOgbIAggQICEAAIAAgCIAxABIAAABIA8AAIAMgHIAAgPIASgkIAAgDIgRAIIhFAAIALgVIAAgLIAIADIAeAAIAqASIAQACQAMgXAMgXIAMACIASALIAZAAIAbA2IAiAPIA3AAIgKATIAYgLIApgbIA8AeIgHAgIgVAnQgtAggjARIAcAAIAlASIAcAAIAWAtIgaAAIggAQIh0AAIAAgLIhrgDIADgDIAhgjIA6hIIgPgMIAYgMIgXgRIicAAQgFAAgDACIABAsIh0AMIAAABIAhACQANAFAZACIAgANIAJAAIgkALQgLAEgRASIgVASIA1AQIgnAAQgJAAAAAGIAJArIC4AJIABAAIADAAIAFgBIgMAPQgMAPgHAKIB/AAIAgAQIA0AAQAGAAgEAIIhZC1IAAAQIADAHIgIAAIgogUIgwAAIAFiAICJgBIgLgxIh7gJIAAgGQAAgJgKAAIi8AIIgXABIAIgDIhIgKIg6ALQgIABgBAHIAHAiIAYgPQASgKARgOIADAVIAMAsIAAABIAGAPIgQgCIhHAOIALA1IBPANIAoAGIBDALIAGAAIAfAQIBuAAIgCAqIgwgCgAuXEmIgDguQAjAOAPACQAMACAIgMQAGgLAFgXQAEgYAAgZIAAgIQAAgXgCgYIgsAqQgUATgSAMIgkgfQAbgRAWgXQAVgWARgdIgCgKQgIgcgOgqQgWAXgbAVIgpgeQAngkAdglQgJgZglgxIArgeQAaAYAVAZQAMgVAMgaQAfgLAWAGIgBACQCmgECmgFQAHgBAAAHIAFBqQAAAHgHAAQh2gEh2gFIgLAaIEJgLQAKgBAGAJQADAGAAAjIAABRIABA8QgCBMgMAhQgLAagTAOQgJAIgNAEQgNAEgPAAQgcACgogKIAAgCIgCgfQiMAUg+AGIgFgYIgDAGIgJAPIgDADQgJALgLAGQgLAHgNAAIgIABQgXAAglgKgApRCbQgnANgfAGIAMAkQAFAGAIADIAmgPQATgHAVgMIACgiIADgLIAGgDIgEgEIgCAHQgUAJgSAGgAqLCUQAjgEAtgQQAKgJATgXIgOguQgQASgLAHQgeAKgaAFIgMgqQgqATgjAIIggAVIAMAyQALgDATgPQAbgGAfgNgAo5hJQAkgFAtgPQAKgJATgWIgOgyQgQASgKAHQggAKgbAGIgLgXQgHgBgGgDQgPAHgNAEQgXAJgUAGIgLgpQgqASgkAIIggAVIAMA1QALgEAUgOQAcgGAhgOIAGASQAGAIALADIAagJQAUgFAYgPgALjEXgAgsDvQAQgHAPgKQAOgKANgMIAZgdIAWgiQgZgsgVgzQgVgwgUg2IllAAIgngJIAAg0ICsAAIALguIhxgYIAAgzIBdgWIARAAIgLgvIAjAAIgJAoIBGgLIAoAAIAKArIg7AAIgbgGIAAAjIA1gMIBlAAQgCgegFhBIABgGIA3AFQAPAuAXBPICNAAIAQgDIAAAhIgRgEIhVAVQAMBdAKAxIABAEQATgXASgiQAUgiAQgrIAMACIAhASIgKAxQgRAkgOAUQgiA2gaAYIAQA9QAJAbADADQAMAJAChLIAsAXIgEApIACAgQgBAbgDATQgJASgLAAQgJAAgJgJIgJgNIgJgjIgMgXIggAqQgVAPgQAIQg4AdgkAKgALmAcIAUgXIAqgOIAHAAIgCAjIgwACIgWADIADgDgAMrgJg");
	this.shape_46.setTransform(462.3,171.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ANtFMIAJgdIgPAAIgdgIIgBAjIg2gBIAAgdIhRgCIh3gDIAEANIgJAAIgogMIgBgCIg7gBIgBAcIg2gBIgFjRIggANIgHgIIgRgcIgqAIIgVgwIgCgDQA+gMA8gRQA7gQA7gVIAWgLIAZgQIg7gCIjOAFIABgxIDuAFIAAgOIgEAAIhNgEIgdgJIhDAAIgPgyIAYgHIABgUICyAEIABgvIgjAAIAHgYIAAgTIAJADIAwAAIA+AMIAQABIARg3IAKABIAXAHIAZAAIASA9IAlAKIBXAAIgGAWIBBgzIA4AiIgQAjIgYAlQgrAjggAUIAtAAIApAMIAbAAIAPAyIgoAAIgkALIgoAAIgBAYIiBADIgMAKIB8AAIAOAnIg3AJIAZAHIBSAAQAIAAgCAKIg8DLIAAAZIAKAkgAHvBtIAIAtIAEAYIglAFIAIA4IAxAFIAhAEQBZAIBbAMIBJgMIgGg3QhIgJhIgHID9gBIgIg2Ig+gCIgmgCQgEgOgGgPQiCgRiAgLIg9AIQgJABAAAHIABAEIAWgLIACAfgAI1AJIAGAxIDFAGIBKgMIgFAAIjyAFQApgSBAgkIh/AAQgIAAAAAGgAKfi7IABAgIhOAFIAMAzIAMABIAiAIIAOAAIgiANIgHADQAnAIAnAJIAjgeIgCgiIATgIIAGABIAlgQIAyghIgZgLIiRAAQgEAAgDABgAvSEyIgDg1QApAPASABQAOABAJgNQAIgNAFgbQAGgbABgdIABgKQABgbgDgcIgvAvQgWAUgTANIgngkQAggUAbgbQAZgaAUggIgCgMQgHgegQguQgYAbgdAZIgsggQAqgoAfgpQgNgcgrg0IAughQAdAbAVAeQANgXANgdIAMgEQAXgFATAFQACgEAEAAIF2gHQAIAAAAAHIADB5QAAAIgHAAQiIgCiHgEIgNAdIEmgHQAMAAAFAJQAEAHABApIgCBdIAABCQgEBVgOAkQgNAcgVAQQgLAIgOAEQgPAFgSABQghAAgtgLIAAgCIgDgxQiPATg/AFIgJgwIgBADQgNAogRAVQgKANgMAHQgNAGgOABIgFAAQgaAAgrgNgApYCUQgiAJgeAEIAIAiQADAIAFAGIAkgLQASgGATgJIgCggIAIgLIALgEQgEABgEgBIgDAEQgQAFgPADgApLA6QgpAKgkAEIAIA2QAjgEApgKIAVgWIgKgvQgLAMgHADgArvA6QgQAKgHAGIAIAxQAIgCAOgJQAkgFAqgPIgJgzQgoAMgkAFgAnujBQgpAJglAEIAIA5QAkgEApgKIAVgWIgJgyQgMALgHAFgAr/jBIgWAOIAIA1QAIgCANgJQAlgFAqgPIgJg2QgpANgkAFgApqjBQghAJgcAEIAAABIAIAfQAEAKAIAHIAYgGQAbgFAigTIgJgcQgFgFgEgHIgaAIgAgmEDQAVgHASgMQATgLARgOIAhggIAdgmQgWgygUg5QgTg2gQg9IlzAAIgsgGIAAg2ICzAAIAHg0Ih/gQIAAg2IBpgOIAUAAIgHg0IAsAAIgGAsIB4gEIAHAwIhKAAIgfgEIAAAtIA8gIIBoAAQgBgqgGhPIABgGIA6AGIAdCMIA0AAIAKAYIBJgYIAMAAIARgDIAAAqIhNgKIg3AAIAIAcQAPBoAMAzIABAEQASgaARglQARgnAPgxIANAEIAlAQIgMAzQgPAogNAVQgiA+gYAcIARA/QAMAcADACQANAHAChZIAxAVIgDArIgCAkQgDAegHAVQgLAUgPAAQgLAAgLgKIgMgOQgIgTgGgVQgIgNgGgQIglArQgVAQgQAKQg7AggkALg");
	this.shape_47.setTransform(462.6,171.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AOjFVIAAgBIgtgBIAAggIhZgBIjCgBIADAYIgMAAIgqgFIgBAMIg7gBIgCj+IgHABQgiAMgiAKIgGgMIgEgGIgXAEIgWg0IgCgEQBEgNBCgSQAwgLAvgQIBBgeIASgLIhAgBIjpACIABg3IAcAAIgFgkIApgFIDFAAIAAgWIi+ACIAAg3IBJABIADgSIAAgaIAKABIBuADIAAgaIA5ABIAFgkIAKABIAbADIAYAAIAJBEIApAFIBzAAIAPgPIAOAMIAmglIA2AmIgcAnIgaAjQgpAngcAWIA9AAIAtAGIAbAAIAHA3Ig3AAIgDABIAAARIifABIgTAAIgOAHIgqAgQgdASgVANIB4AAIAWADIBFgBQAHAAADADIAzAAQALAAgCALIgdDhIAAAjIAFAogAJQCiIAAABIACAVIgwADIADA7IBWAEIC8AKIBMgHIgCgiIA1AAIgDgyIgBgJIiEgCQhyADhsABgAJRAoIABAbIgnADQgKAAABAIIADA3IBbAFQBdAEBfAGIBHgMQgBgWgKgdIA5gIIgMgsIlLAAQgKAAABAHgALSjJIAAARIgnABIAJBJQAtAEAtAGIAigdIAEgMIAcgSIAqglIgcgGIiGAAIgGABgAwOE/IgBg8QAuAPAVABQAQAAAKgPQAKgOAGgfQAHgfADghIAAgLQACgfgCgfIgyAyQgYAWgVANIgpgoQAlgYAegeQAfgeAXglIgDgLQgHghgQgzQgaAggfAdIgwgiQAugtAfgsQgPgegyg5IAygjQAfAfAWAiQAOgZANgfQAjgMAaAKQgYA9gZAuQAYA1ANArIADAPQAngjAVgqIgnAAQgHAAAAgJIACiKQAAgIAHAAIGZgDQAJAAAAAIIABCIQAAAJgIAAIkxgDIgOAhIFDgEQAMAAAHAKQAEAIAAAuIgCBoIgBBJQgGBegRAnQgOAfgYARQgNAJgQAFQgQAFgVAAQgkABgzgNIAAgDIgDg/QAcALAmAHIgKgcQi+AZhPAEIgJg6ICNgKIAAg1Ih0ABQgIAAAAgIIAAgoIgBhgQAAgIAIAAIBxgBIAAgnIhagBQgLAPgaAXIgXgVIAFAdIABAGIACAZQADAbABAaQgDBjgOAzQgPAsgSAWQgLAOgNAHQgNAHgQAAIgBAAQgdAAgzgQgApeCOQgfAFgcACIAEAfQABALADAJIAigIIAjgKIgIgeIASgMIAMgDIgoAFgApQArQgmAFgjABIAEA2QAjgBAmgFIALgNIgEgwQgHAGgEABgAsGArQgKAFgDAEIAEAxQAFgBAHgDQAlgDAngHIgFg1QgmAGgkADgAnojtQgnAFgkACIAEA5QAkgCAmgFIAMgNIgFgzQgGAFgEACgAsYjtQgJAFgDADIAEA1QAFAAAHgEQAlgDAngHIgEg4QgnAGglADgApyjtQgdAFgbACIAAAAIAEAdIAGAYIAXgDQAagDAegMIgFgaIgEgUIgYAEgAgfEZQAZgJAWgMQAXgNAWgQIAogjIAlgrQgVg3gRg/QgQg9gOhDImBAAIgxgDIAAg5IC7AAIADg5IiPgIIAAg5ICOgHIgEg6IA1AAIgDAxICCADIADA2Ih6gCIAAA1ICugEQgBgzgGheIAAgHIA8AGQAHA4APBkICsgBIAAAyIiZgFIAHAfQARBtAMA0IACAEQARgdAQgpQAQgrAMg2IA3ASIgNA1QgOAsgMAYQghBFgXAfIATBCQANAdAEACQAOADAChnIA3ATIgEAtQgCAVgDATQgFAigKAXQgOAXgSAAQgOAAgNgMIgPgQQgLgVgJgWQgIgRgHgTIgoArQgWATgRAKQg9AjglANg");
	this.shape_48.setTransform(462.9,171.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYEuQAcgJAbgOQAcgNAZgSIAwgoIAsguQgSg9gPhFQgOhDgKhLInGAAIAAg7IDCAAIAAg/IieAAIAAg6ICeAAIAAhAIA9AAIAABAICMAAIAAA6IiMAAIAAA/IC/AAQgJhAgGhyIA+AHQACA+AMBtIC0AAIAAA7IisAAQAWCUAQA6QARggAOguQAPgvAKg7IA8ARQgWBZgQApQgiBNgWAiIAXBDQAOAfAEAAQAQAAACh0IA8ARQgDAygJAoQgIAmgNAZQgQAZgVAAQgQAAgQgNIgSgRQgYgpgRgwQg1A1ggAWQhAAnglANgAqLFTIgDhJQAnAPA1AGQBKAAANh6QAIh4AAg5QAAgigCgKQgDgPgHAAIi7AAIAAArIB5AAQAKAAgBAIIAACVQAAAIgVAAQAQAgAdBZIg5ATIgLgjQjPAahVAFIgKhCICdgLIAAg7Ih9AAQgJAAAAgIIAAiVQAAgIAJAAIB9AAIAAgrIhiAAQgMARgbAZIgwgqQA1gqAbg2IgrAAQgHAAAAgKIAAiXQAAgIAHAAIG9AAQAKAAgBAIIAACXQABAKgKAAIlTAAIgQAlIFhAAQANAAAHALQAEAJAAAzIgFDCQgHBngUAqQgQAigbATQgOAKgRAFQgTAGgXAAQgpAAg4gPgAqaC+IBAgJIgNgcIAogQIhbAAgAqaBRIBFAAIADgDIAAgwIgDgDIhFAAgAsgAeIAAAwIACADIBJAAIAAg2IhJAAQAAAAgBABQgBAAAAAAQAAAAAAABQAAAAAAABgAoqjfIBHAAIADgDIAAg1IgDgCIhHAAgAqsjfIBIAAIAAg6IhIAAgAszkXIAAA1IADADIBJAAIAAg6IhJAAQgBAAgBABQgBAAAAAAQAAAAAAABQAAAAAAAAgAxJFMIAAhDQAzAPAXAAQASAAAMgQQALgRAIgiQAIgjAEgkQAEgpgCgpIg2A2QgZAXgWAOIgsguQApgaAjgiQAigiAbgoQgGgmgVhCQgbAkgiAhIgzgkQAwgwAigwQgTgfg4g/IA1glQAhAjAYAmQASgjATgxIA4AWQgbBFgeA1QAaA6ANAyQAJAtAGAtQAEArAAAqQgFBrgRA3QgOAugVAZQgMAPgNAIQgPAHgRAAQgeAAg5gUgAPYFeIAAgjIlrAAIAAAjIhAAAIAAkiIh1AYIgZg9QBJgNBIgSQBHgSBGgYIBBggIlWAAIAAg9IEbAAIAAhJIjTAAIAAg9IDTAAIAAhKIBBAAIAABKIDEAAIAAAaIBEhMIAxApQhWBlgrAqICZAAIAAA9IjjAAQhdA6g4AaIEvAAQANAAAAAMIAAFQgAJtD9IFrAAIAAg+IlrAAgAJtBHIAAA7IFrAAIAAg7QABgHgKgBIlZAAQgKABABAHgAMEiPIBYAAIAhgbIAsguIilAAgAlIEfIBogQIAAiBQgwAfgrAQIgeg4QAzgUAqgcQArgdAfgkIiLAAIAAg5ICuAAIAAg3IBBAAIAAA3ICWAAIAAA5IiqAAQgcAmglAlIAACiQA6gRAtgTIAaA4Qg2AUhGASQhEARhSAOgAiMB4IApgsIAxAqQAygsAhgmIApAqQgeAkgyAuIA2A8IgrApQhShfg/gugADQkrIA1gnQAkAnAlBCIg3AkQgZgtgug5g");
	this.shape_49.setTransform(463.3,172.2);

	this.instance_65 = new lib.Tween58("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(463.3,172.2);
	this.instance_65._off = true;

	this.instance_66 = new lib.Tween59("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(509.1,314.4,0.841,0.841,0,0,0,0.4,0.4);
	this.instance_66._off = true;

	this.instance_67 = new lib.Symbol2();
	this.instance_67.parent = this;
	this.instance_67.setTransform(476.3,355.2);

	this.instance_68 = new lib.Tween60("synched",0);
	this.instance_68.parent = this;
	this.instance_68.setTransform(392,307.3);
	this.instance_68._off = true;

	this.instance_69 = new lib.Tween61("synched",0);
	this.instance_69.parent = this;
	this.instance_69.setTransform(392,266.6);
	this.instance_69.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_57}]},140).to({state:[{t:this.instance_57}]},19).to({state:[{t:this.instance_57}]},42).to({state:[{t:this.instance_57}]},20).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},18).to({state:[{t:this.instance_58}]},47).to({state:[{t:this.instance_58}]},14).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},18).to({state:[{t:this.instance_59}]},39).to({state:[{t:this.instance_59}]},19).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},25).to({state:[{t:this.instance_60}]},92).to({state:[{t:this.instance_60}]},16).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},21).to({state:[{t:this.instance_62}]},100).to({state:[{t:this.instance_62}]},22).to({state:[]},1).to({state:[{t:this.instance_63}]},86).to({state:[{t:this.instance_64}]},21).to({state:[{t:this.shape_2}]},74).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18},{t:this.shape_20},{t:this.shape_19}]},421).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},388).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.instance_65}]},662).to({state:[{t:this.instance_66}]},14).to({state:[{t:this.instance_66}]},39).to({state:[{t:this.instance_66}]},32).to({state:[{t:this.instance_66},{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},81).to({state:[{t:this.instance_69}]},14).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(140).to({_off:false},0).to({x:485.3},19,cjs.Ease.get(1)).wait(42).to({startPosition:0},0).to({x:1244.3},20,cjs.Ease.get(-1)).to({_off:true},1).wait(2339));
	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(222).to({_off:false},0).to({x:485.3},18,cjs.Ease.get(1)).to({startPosition:0},47).to({x:1214.2},14,cjs.Ease.get(-1)).to({_off:true,x:-256.2},1).wait(2259));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(301).to({_off:false},1).to({x:485.3},18,cjs.Ease.get(1)).to({startPosition:0},39).to({x:1224.2},19,cjs.Ease.get(-1)).to({_off:true,regX:0.2,regY:0.2,scaleX:4.64,scaleY:4.64,x:498.2,y:337.9,alpha:0},1).wait(2182));
	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(378).to({_off:false},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:360,x:497.3,y:336.9,alpha:1},25).to({startPosition:0},92).to({y:272.4,alpha:0},16).to({_off:true,x:480.2,y:456.2},1).wait(2048));
	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(512).to({_off:false},1).to({_off:true,y:361.7,alpha:1},21).wait(2027));
	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(513).to({_off:false},21).wait(100).to({startPosition:0},0).to({y:181.7,alpha:0},22).to({_off:true},1).wait(1904));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(743).to({_off:false},0).to({_off:true,y:361.7,alpha:1},21).wait(1797));
	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(2354).to({_off:false},0).to({_off:true,regX:0.4,regY:0.4,scaleX:0.84,scaleY:0.84,x:509.1,y:314.4},14).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(2354).to({_off:false},14).wait(39).to({startPosition:0},0).to({scaleX:1.34,scaleY:1.34,rotation:360,x:528.1,y:288.3,alpha:0},32,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({_off:true},81).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(2521).to({_off:false},0).to({_off:true,y:266.6,alpha:0},14).wait(26));

	// FlashAICB
	this.instance_70 = new lib.Symbol2();
	this.instance_70.parent = this;
	this.instance_70.setTransform(476.3,355.2);

	this.道路 = new lib.道路();
	this.道路.parent = this;
	this.道路.setTransform(743.3,110.3,8.714,6.677,-90,0,0,0.1,0.2);
	this.道路.alpha = 0;
	this.道路._off = true;

	this.小孩_2 = new lib.小孩();
	this.小孩_2.parent = this;
	this.小孩_2.setTransform(1087.2,530.4,3.38,3.38);
	this.小孩_2._off = true;

	this.instance_71 = new lib.Symbol6("synched",0);
	this.instance_71.parent = this;
	this.instance_71.setTransform(-308.8,325.3);
	this.instance_71._off = true;

	this.instance_72 = new lib.Symbol7();
	this.instance_72.parent = this;
	this.instance_72.setTransform(796.6,210.8);
	this.instance_72.alpha = 0;
	this.instance_72._off = true;

	this.行星 = new lib.行星();
	this.行星.parent = this;
	this.行星.setTransform(1113.4,160.3,2.463,2.463);
	this.行星.alpha = 0;
	this.行星._off = true;

	this.男性剪影 = new lib.男性剪影();
	this.男性剪影.parent = this;
	this.男性剪影.setTransform(-78.2,501.8,2.044,1.876,0,0,180);
	this.男性剪影._off = true;

	this.熱帶 = new lib.熱帶();
	this.熱帶.parent = this;
	this.熱帶.setTransform(517.9,301.1,5.525,5.525,0,0,0,-0.2,0);
	this.熱帶.alpha = 0;
	this.熱帶._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(120).to({y:374.2,alpha:0},19).to({_off:true},1).wait(2421));
	this.timeline.addTween(cjs.Tween.get(this.道路).wait(655).to({_off:false},0).to({alpha:1},18).wait(62).to({y:39,alpha:0},11).to({_off:true},1).wait(1814));
	this.timeline.addTween(cjs.Tween.get(this.小孩_2).wait(893).to({_off:false},0).to({x:729.2},13).wait(50).to({y:581.4,alpha:0},12).to({_off:true},1).wait(1592));
	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(992).to({_off:false},0).to({x:806.8,startPosition:24},77).to({_off:true},1).wait(1491));
	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(1214).to({_off:false},0).to({x:726.8,y:148.6,alpha:1},14).wait(41).to({y:-121.4},12).to({_off:true},1).wait(1279));
	this.timeline.addTween(cjs.Tween.get(this.行星).wait(1300).to({_off:false},0).to({x:204.1,y:159.1,alpha:1},21).wait(47).to({x:-142.3},19,cjs.Ease.get(1)).to({_off:true},1).wait(1173));
	this.timeline.addTween(cjs.Tween.get(this.男性剪影).wait(1498).to({_off:false},0).to({x:81},18).wait(58).to({scaleX:1.83,skewY:0,x:-89.4},15).to({_off:true},1).wait(971));
	this.timeline.addTween(cjs.Tween.get(this.熱帶).wait(1607).to({_off:false},0).to({x:655.4,alpha:0.48},17).to({_off:true},936).wait(1));

	// Layer 6
	this.instance_73 = new lib.Symbol8();
	this.instance_73.parent = this;
	this.instance_73.setTransform(59.8,484);
	this.instance_73.alpha = 0;
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(1607).to({_off:false},0).to({x:142.6,alpha:0.449},17).wait(937));

	// 背景
	this.instance_74 = new lib.shutterstock_115560229();
	this.instance_74.parent = this;
	this.instance_74.setTransform(1228.5,0,0.199,0.2,0,0,180);

	this.instance_75 = new lib.shutterstock_115560229();
	this.instance_75.parent = this;
	this.instance_75.setTransform(-277,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_75},{t:this.instance_74}]}).wait(2561));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.2,-339.2,2336.5,2078.4);
// library properties:
lib.properties = {
	width: 960,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CH_atlas_.png?1515519508221", id:"CH_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;