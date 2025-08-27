var ii = Object.defineProperty;
var En = (t) => {
  throw TypeError(t);
};
var li = (t, e, r) => e in t ? ii(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var pt = (t, e, r) => li(t, typeof e != "symbol" ? e + "" : e, r), Hr = (t, e, r) => e.has(t) || En("Cannot " + r);
var T = (t, e, r) => (Hr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ht = (t, e, r) => e.has(t) ? En("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), yt = (t, e, r, a) => (Hr(t, e, "write to private field"), a ? a.call(t, r) : e.set(t, r), r), ve = (t, e, r) => (Hr(t, e, "access private method"), r);
const si = "5";
var Fn;
typeof window < "u" && ((Fn = window.__svelte ?? (window.__svelte = {})).v ?? (Fn.v = /* @__PURE__ */ new Set())).add(si);
const Sr = 1, Pr = 2, qn = 4, oi = 8, ui = 16, fi = 1, ci = 4, vi = 8, di = 16, hi = 2, Hn = "[", tn = "[!", en = "]", be = {}, ft = Symbol(), Wn = !1;
var rn = Array.isArray, pi = Array.prototype.indexOf, nn = Array.from, kr = Object.keys, Le = Object.defineProperty, me = Object.getOwnPropertyDescriptor, _i = Object.prototype, bi = Array.prototype, mi = Object.getPrototypeOf, Cn = Object.isExtensible;
function zn(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function gi() {
  var t, e, r = new Promise((a, i) => {
    t = a, e = i;
  });
  return { promise: r, resolve: t, reject: e };
}
const Ct = 2, an = 4, jn = 8, je = 16, Qt = 32, ue = 64, Un = 128, Nt = 256, $r = 512, bt = 1024, It = 2048, fe = 4096, Dt = 8192, ke = 16384, ln = 32768, sn = 65536, Sn = 1 << 17, wi = 1 << 18, Ue = 1 << 19, yi = 1 << 20, Ur = 1 << 21, on = 1 << 22, ge = 1 << 23, Qe = Symbol("$state"), Yn = Symbol("legacy props"), un = new class extends Error {
  constructor() {
    super(...arguments);
    pt(this, "name", "StaleReactionError");
    pt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), fn = 3, Fe = 8;
function ki() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function $i() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ti(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function xi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ei(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ci() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Si() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Pi(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ai() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ri() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Bi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function or(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let L = !1;
function Xt(t) {
  L = t;
}
let F;
function xt(t) {
  if (t === null)
    throw or(), be;
  return F = t;
}
function qe() {
  return xt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ te(F)
  );
}
function z(t) {
  if (L) {
    if (/* @__PURE__ */ te(F) !== null)
      throw or(), be;
    F = t;
  }
}
function Yr() {
  for (var t = 0, e = F; ; ) {
    if (e.nodeType === Fe) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === en) {
        if (t === 0) return e;
        t -= 1;
      } else (r === Hn || r === tn) && (t += 1);
    }
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ te(e)
    );
    e.remove(), e = a;
  }
}
function Vn(t) {
  if (!t || t.nodeType !== Fe)
    throw or(), be;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Gn(t) {
  return t === this.v;
}
function Ni(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Kn(t) {
  return !Ni(t, this.v);
}
let Ii = !1, Lt = null;
function Tr(t) {
  Lt = t;
}
function Jn(t, e = !1, r) {
  Lt = {
    p: Lt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Xn(t) {
  var e = (
    /** @type {ComponentContext} */
    Lt
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var a of r)
      ba(a);
  }
  return t !== void 0 && (e.x = t), Lt = e.p, t ?? /** @type {T} */
  {};
}
function Zn() {
  return !0;
}
const Oi = /* @__PURE__ */ new WeakMap();
function Di(t) {
  var e = P;
  if (e === null)
    return B.f |= ge, t;
  if (e.f & ln)
    cn(t, e);
  else {
    if (!(e.f & Un))
      throw !e.parent && t instanceof Error && Qn(t), t;
    e.b.error(t);
  }
}
function cn(t, e) {
  for (; e !== null; ) {
    if (e.f & Un)
      try {
        e.b.error(t);
        return;
      } catch (r) {
        t = r;
      }
    e = e.parent;
  }
  throw t instanceof Error && Qn(t), t;
}
function Qn(t) {
  const e = Oi.get(t);
  e && (Le(t, "message", {
    value: e.message
  }), Le(t, "stack", {
    value: e.stack
  }));
}
let tr = [], Vr = [];
function ta() {
  var t = tr;
  tr = [], zn(t);
}
function Mi() {
  var t = Vr;
  Vr = [], zn(t);
}
function ea(t) {
  tr.length === 0 && queueMicrotask(ta), tr.push(t);
}
function Li() {
  tr.length > 0 && ta(), Vr.length > 0 && Mi();
}
function Fi() {
  for (var t = (
    /** @type {Effect} */
    P.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && ki(), t;
}
// @__NO_SIDE_EFFECTS__
function Ar(t) {
  var e = Ct | It, r = B !== null && B.f & Ct ? (
    /** @type {Derived} */
    B
  ) : null;
  return P === null || r !== null && r.f & Nt ? e |= Nt : P.f |= Ue, {
    ctx: Lt,
    deps: null,
    effects: null,
    equals: Gn,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ft
    ),
    wv: 0,
    parent: r ?? P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function qi(t, e) {
  let r = (
    /** @type {Effect | null} */
    P
  );
  r === null && $i();
  var a = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = er(
    /** @type {V} */
    ft
  ), s = null, o = !B;
  return Ki(() => {
    try {
      var f = t();
    } catch (m) {
      f = Promise.reject(m);
    }
    var c = () => f;
    i = (s == null ? void 0 : s.then(c, c)) ?? Promise.resolve(f), s = i;
    var d = (
      /** @type {Batch} */
      at
    ), p = a.pending;
    o && (a.update_pending_count(1), p || d.increment());
    const g = (m, v = void 0) => {
      s = null, p || d.activate(), v ? v !== un && (l.f |= ge, rr(l, v)) : (l.f & ge && (l.f ^= ge), rr(l, m)), o && (a.update_pending_count(-1), p || d.decrement()), ia();
    };
    if (i.then(g, (m) => g(null, m || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
  }), new Promise((f) => {
    function c(d) {
      function p() {
        d === i ? f(l) : c(i);
      }
      d.then(p, p);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function $t(t) {
  const e = /* @__PURE__ */ Ar(t);
  return Ca(e), e;
}
// @__NO_SIDE_EFFECTS__
function ra(t) {
  const e = /* @__PURE__ */ Ar(t);
  return e.equals = Kn, e;
}
function na(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      jt(
        /** @type {Effect} */
        e[r]
      );
  }
}
function Hi(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & Ct))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function vn(t) {
  var e, r = P;
  oe(Hi(t));
  try {
    na(t), e = Ra(t);
  } finally {
    oe(r);
  }
  return e;
}
function aa(t) {
  var e = vn(t);
  if (t.equals(e) || (t.v = e, t.wv = Pa()), !$e)
    if (ie !== null)
      ie.set(t, t.v);
    else {
      var r = (le || t.f & Nt) && t.deps !== null ? fe : bt;
      Et(t, r);
    }
}
function Wi(t, e, r) {
  const a = Ar;
  if (e.length === 0) {
    r(t.map(a));
    return;
  }
  var i = at, l = (
    /** @type {Effect} */
    P
  ), s = zi(), o = Fi();
  Promise.all(e.map((f) => /* @__PURE__ */ qi(f))).then((f) => {
    i == null || i.activate(), s();
    try {
      r([...t.map(a), ...f]);
    } catch (c) {
      l.f & ke || cn(c, l);
    }
    i == null || i.deactivate(), ia();
  }).catch((f) => {
    o.error(f);
  });
}
function zi() {
  var t = P, e = B, r = Lt;
  return function() {
    oe(t), Ut(e), Tr(r);
  };
}
function ia() {
  oe(null), Ut(null), Tr(null);
}
const Ke = /* @__PURE__ */ new Set();
let at = null, ie = null, Pn = /* @__PURE__ */ new Set(), xr = [];
function la() {
  const t = (
    /** @type {() => void} */
    xr.shift()
  );
  xr.length > 0 && queueMicrotask(la), t();
}
let ye = [], Rr = null, Gr = !1, gr = !1;
var Ie, Oe, ne, ar, ir, pe, De, _e, ae, Me, lr, sr, Mt, sa, wr, Kr;
const Cr = class Cr {
  constructor() {
    ht(this, Mt);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    pt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ht(this, Ie, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    ht(this, Oe, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    ht(this, ne, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    ht(this, ar, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    ht(this, ir, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    ht(this, pe, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    ht(this, De, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    ht(this, _e, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    ht(this, ae, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    ht(this, Me, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    ht(this, lr, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    ht(this, sr, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    pt(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var l;
    ye = [];
    var r = null;
    if (Ke.size > 1) {
      r = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
      for (const [s, o] of this.current)
        r.set(s, { v: s.v, wv: s.wv }), s.v = o;
      for (const s of Ke)
        if (s !== this)
          for (const [o, f] of T(s, Ie))
            r.has(o) || (r.set(o, { v: o.v, wv: o.wv }), o.v = f);
    }
    for (const s of e)
      ve(this, Mt, sa).call(this, s);
    if (T(this, pe).length === 0 && T(this, ne) === 0) {
      ve(this, Mt, Kr).call(this);
      var a = T(this, _e), i = T(this, ae);
      yt(this, _e, []), yt(this, ae, []), yt(this, Me, []), at = null, An(a), An(i), at === null ? at = this : Ke.delete(this), (l = T(this, ar)) == null || l.resolve();
    } else
      ve(this, Mt, wr).call(this, T(this, _e)), ve(this, Mt, wr).call(this, T(this, ae)), ve(this, Mt, wr).call(this, T(this, Me));
    if (r) {
      for (const [s, { v: o, wv: f }] of r)
        s.wv <= f && (s.v = o);
      ie = null;
    }
    for (const s of T(this, pe))
      Ne(s);
    for (const s of T(this, De))
      Ne(s);
    yt(this, pe, []), yt(this, De, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, r) {
    T(this, Ie).has(e) || T(this, Ie).set(e, r), this.current.set(e, e.v);
  }
  activate() {
    at = this;
  }
  deactivate() {
    at = null;
    for (const e of Pn)
      if (Pn.delete(e), e(), at !== null)
        break;
  }
  neuter() {
    yt(this, ir, !0);
  }
  flush() {
    ye.length > 0 ? oa() : ve(this, Mt, Kr).call(this), at === this && (T(this, ne) === 0 && Ke.delete(this), this.deactivate());
  }
  increment() {
    yt(this, ne, T(this, ne) + 1);
  }
  decrement() {
    if (yt(this, ne, T(this, ne) - 1), T(this, ne) === 0) {
      for (const e of T(this, lr))
        Et(e, It), We(e);
      for (const e of T(this, sr))
        Et(e, fe), We(e);
      yt(this, _e, []), yt(this, ae, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    T(this, Oe).add(e);
  }
  settled() {
    return (T(this, ar) ?? yt(this, ar, gi())).promise;
  }
  static ensure() {
    if (at === null) {
      const e = at = new Cr();
      Ke.add(at), gr || Cr.enqueue(() => {
        at === e && e.flush();
      });
    }
    return at;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    xr.length === 0 && queueMicrotask(la), xr.unshift(e);
  }
};
Ie = new WeakMap(), Oe = new WeakMap(), ne = new WeakMap(), ar = new WeakMap(), ir = new WeakMap(), pe = new WeakMap(), De = new WeakMap(), _e = new WeakMap(), ae = new WeakMap(), Me = new WeakMap(), lr = new WeakMap(), sr = new WeakMap(), Mt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
sa = function(e) {
  var d;
  e.f ^= bt;
  for (var r = e.first; r !== null; ) {
    var a = r.f, i = (a & (Qt | ue)) !== 0, l = i && (a & bt) !== 0, s = l || (a & Dt) !== 0 || this.skipped_effects.has(r);
    if (!s && r.fn !== null) {
      if (i)
        r.f ^= bt;
      else if (a & an)
        T(this, ae).push(r);
      else if (!(a & bt))
        if (a & on) {
          var o = (d = r.b) != null && d.pending ? T(this, De) : T(this, pe);
          o.push(r);
        } else Br(r) && (r.f & je && T(this, Me).push(r), Ne(r));
      var f = r.first;
      if (f !== null) {
        r = f;
        continue;
      }
    }
    var c = r.parent;
    for (r = r.next; r === null && c !== null; )
      r = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
wr = function(e) {
  for (const r of e)
    (r.f & It ? T(this, lr) : T(this, sr)).push(r), Et(r, bt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Kr = function() {
  if (!T(this, ir))
    for (const e of T(this, Oe))
      e();
  T(this, Oe).clear();
};
let He = Cr;
function Z(t) {
  var e = gr;
  gr = !0;
  try {
    for (var r; ; ) {
      if (Li(), ye.length === 0 && (at == null || at.flush(), ye.length === 0))
        return Rr = null, /** @type {T} */
        r;
      oa();
    }
  } finally {
    gr = e;
  }
}
function oa() {
  var t = Be;
  Gr = !0;
  try {
    var e = 0;
    for (Bn(!0); ye.length > 0; ) {
      var r = He.ensure();
      if (e++ > 1e3) {
        var a, i;
        ji();
      }
      r.process(ye), se.clear();
    }
  } finally {
    Gr = !1, Bn(t), Rr = null;
  }
}
function ji() {
  try {
    Ci();
  } catch (t) {
    cn(t, Rr);
  }
}
let he = null;
function An(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var a = t[r++];
      if (!(a.f & (ke | Dt)) && Br(a) && (he = [], Ne(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? Ta(a) : a.fn = null), he.length > 0)) {
        se.clear();
        for (const i of he)
          Ne(i);
        he = [];
      }
    }
    he = null;
  }
}
function We(t) {
  for (var e = Rr = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (Gr && e === P && r & je)
      return;
    if (r & (ue | Qt)) {
      if (!(r & bt)) return;
      e.f ^= bt;
    }
  }
  ye.push(e);
}
const se = /* @__PURE__ */ new Map();
function er(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Gn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ot(t, e) {
  const r = er(t);
  return Ca(r), r;
}
// @__NO_SIDE_EFFECTS__
function ua(t, e = !1, r = !0) {
  const a = er(t);
  return e || (a.equals = Kn), a;
}
function w(t, e, r = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!qt || B.f & Sn) && Zn() && B.f & (Ct | je | on | Sn) && !(mt != null && mt.includes(t)) && Bi();
  let a = r ? Ht(e) : e;
  return rr(t, a);
}
function rr(t, e) {
  if (!t.equals(e)) {
    var r = t.v;
    $e ? se.set(t, e) : se.set(t, r), t.v = e;
    var a = He.ensure();
    a.capture(t, r), t.f & Ct && (t.f & It && vn(
      /** @type {Derived} */
      t
    ), Et(t, t.f & Nt ? fe : bt)), t.wv = Pa(), fa(t, It), P !== null && P.f & bt && !(P.f & (Qt | ue)) && (Rt === null ? Xi([t]) : Rt.push(t));
  }
  return e;
}
function _r(t, e = 1) {
  var r = n(t), a = e === 1 ? r++ : r--;
  return w(t, r), a;
}
function Wr(t) {
  w(t, t.v + 1);
}
function fa(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var a = r.length, i = 0; i < a; i++) {
      var l = r[i], s = l.f, o = (s & It) === 0;
      o && Et(l, e), s & Ct ? fa(
        /** @type {Derived} */
        l,
        fe
      ) : o && (s & je && he !== null && he.push(
        /** @type {Effect} */
        l
      ), We(
        /** @type {Effect} */
        l
      ));
    }
}
function Ht(t) {
  if (typeof t != "object" || t === null || Qe in t)
    return t;
  const e = mi(t);
  if (e !== _i && e !== bi)
    return t;
  var r = /* @__PURE__ */ new Map(), a = rn(t), i = /* @__PURE__ */ ot(0), l = we, s = (o) => {
    if (we === l)
      return o();
    var f = B, c = we;
    Ut(null), In(l);
    var d = o();
    return Ut(f), In(c), d;
  };
  return a && r.set("length", /* @__PURE__ */ ot(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ai();
        var d = r.get(f);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ ot(c.value);
          return r.set(f, p), p;
        }) : w(d, c.value, !0), !0;
      },
      deleteProperty(o, f) {
        var c = r.get(f);
        if (c === void 0) {
          if (f in o) {
            const d = s(() => /* @__PURE__ */ ot(ft));
            r.set(f, d), Wr(i);
          }
        } else
          w(c, ft), Wr(i);
        return !0;
      },
      get(o, f, c) {
        var m;
        if (f === Qe)
          return t;
        var d = r.get(f), p = f in o;
        if (d === void 0 && (!p || (m = me(o, f)) != null && m.writable) && (d = s(() => {
          var v = Ht(p ? o[f] : ft), b = /* @__PURE__ */ ot(v);
          return b;
        }), r.set(f, d)), d !== void 0) {
          var g = n(d);
          return g === ft ? void 0 : g;
        }
        return Reflect.get(o, f, c);
      },
      getOwnPropertyDescriptor(o, f) {
        var c = Reflect.getOwnPropertyDescriptor(o, f);
        if (c && "value" in c) {
          var d = r.get(f);
          d && (c.value = n(d));
        } else if (c === void 0) {
          var p = r.get(f), g = p == null ? void 0 : p.v;
          if (p !== void 0 && g !== ft)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return c;
      },
      has(o, f) {
        var g;
        if (f === Qe)
          return !0;
        var c = r.get(f), d = c !== void 0 && c.v !== ft || Reflect.has(o, f);
        if (c !== void 0 || P !== null && (!d || (g = me(o, f)) != null && g.writable)) {
          c === void 0 && (c = s(() => {
            var m = d ? Ht(o[f]) : ft, v = /* @__PURE__ */ ot(m);
            return v;
          }), r.set(f, c));
          var p = n(c);
          if (p === ft)
            return !1;
        }
        return d;
      },
      set(o, f, c, d) {
        var E;
        var p = r.get(f), g = f in o;
        if (a && f === "length")
          for (var m = c; m < /** @type {Source<number>} */
          p.v; m += 1) {
            var v = r.get(m + "");
            v !== void 0 ? w(v, ft) : m in o && (v = s(() => /* @__PURE__ */ ot(ft)), r.set(m + "", v));
          }
        if (p === void 0)
          (!g || (E = me(o, f)) != null && E.writable) && (p = s(() => /* @__PURE__ */ ot(void 0)), w(p, Ht(c)), r.set(f, p));
        else {
          g = p.v !== ft;
          var b = s(() => Ht(c));
          w(p, b);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, f);
        if (y != null && y.set && y.set.call(d, c), !g) {
          if (a && typeof f == "string") {
            var S = (
              /** @type {Source<number>} */
              r.get("length")
            ), N = Number(f);
            Number.isInteger(N) && N >= S.v && w(S, N + 1);
          }
          Wr(i);
        }
        return !0;
      },
      ownKeys(o) {
        n(i);
        var f = Reflect.ownKeys(o).filter((p) => {
          var g = r.get(p);
          return g === void 0 || g.v !== ft;
        });
        for (var [c, d] of r)
          d.v !== ft && !(c in o) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        Ri();
      }
    }
  );
}
var Rn, ca, va, da;
function Jr() {
  if (Rn === void 0) {
    Rn = window, ca = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    va = me(e, "firstChild").get, da = me(e, "nextSibling").get, Cn(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Cn(r) && (r.__t = void 0);
  }
}
function zt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Wt(t) {
  return va.call(t);
}
// @__NO_SIDE_EFFECTS__
function te(t) {
  return da.call(t);
}
function Y(t, e) {
  if (!L)
    return /* @__PURE__ */ Wt(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(F)
  );
  if (r === null)
    r = F.appendChild(zt());
  else if (e && r.nodeType !== fn) {
    var a = zt();
    return r == null || r.before(a), xt(a), a;
  }
  return xt(r), r;
}
function Je(t, e) {
  if (!L) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Wt(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ te(r) : r;
  }
  return F;
}
function st(t, e = 1, r = !1) {
  let a = L ? F : t;
  for (var i; e--; )
    i = a, a = /** @type {TemplateNode} */
    /* @__PURE__ */ te(a);
  if (!L)
    return a;
  if (r && (a == null ? void 0 : a.nodeType) !== fn) {
    var l = zt();
    return a === null ? i == null || i.after(l) : a.before(l), xt(l), l;
  }
  return xt(a), /** @type {TemplateNode} */
  a;
}
function ha(t) {
  t.textContent = "";
}
function pa() {
  return !1;
}
function _a(t) {
  var e = B, r = P;
  Ut(null), oe(null);
  try {
    return t();
  } finally {
    Ut(e), oe(r);
  }
}
function Ui(t) {
  P === null && B === null && Ei(), B !== null && B.f & Nt && P === null && xi(), $e && Ti();
}
function Yi(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function ee(t, e, r, a = !0) {
  var i = P;
  i !== null && i.f & Dt && (t |= Dt);
  var l = {
    ctx: Lt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | It,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      Ne(l), l.f |= ln;
    } catch (f) {
      throw jt(l), f;
    }
  else e !== null && We(l);
  if (a) {
    var s = l;
    if (r && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Ue) && (s = s.first), s !== null && (s.parent = i, i !== null && Yi(s, i), B !== null && B.f & Ct && !(t & ue))) {
      var o = (
        /** @type {Derived} */
        B
      );
      (o.effects ?? (o.effects = [])).push(s);
    }
  }
  return l;
}
function de(t) {
  Ui();
  var e = (
    /** @type {Effect} */
    P.f
  ), r = !B && (e & Qt) !== 0 && (e & ln) === 0;
  if (r) {
    var a = (
      /** @type {ComponentContext} */
      Lt
    );
    (a.e ?? (a.e = [])).push(t);
  } else
    return ba(t);
}
function ba(t) {
  return ee(an | yi, t, !1);
}
function Vi(t) {
  He.ensure();
  const e = ee(ue | Ue, t, !0);
  return () => {
    jt(e);
  };
}
function Gi(t) {
  He.ensure();
  const e = ee(ue | Ue, t, !0);
  return (r = {}) => new Promise((a) => {
    r.outro ? dn(e, () => {
      jt(e), a(void 0);
    }) : (jt(e), a(void 0));
  });
}
function ma(t) {
  return ee(an, t, !1);
}
function Ki(t) {
  return ee(on | Ue, t, !0);
}
function ga(t, e = 0) {
  return ee(jn | e, t, !0);
}
function nt(t, e = [], r = []) {
  Wi(e, r, (a) => {
    ee(jn, () => t(...a.map(n)), !0);
  });
}
function wa(t, e = 0) {
  var r = ee(je | e, t, !0);
  return r;
}
function ze(t, e = !0) {
  return ee(Qt | Ue, t, !0, e);
}
function ya(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = $e, a = B;
    Nn(!0), Ut(null);
    try {
      e.call(null);
    } finally {
      Nn(r), Ut(a);
    }
  }
}
function ka(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && _a(() => {
      i.abort(un);
    });
    var a = r.next;
    r.f & ue ? r.parent = null : jt(r, e), r = a;
  }
}
function Ji(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & Qt || jt(e), e = r;
  }
}
function jt(t, e = !0) {
  var r = !1;
  (e || t.f & wi) && t.nodes_start !== null && t.nodes_end !== null && ($a(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), r = !0), ka(t, e && !r), Er(t, 0), Et(t, ke);
  var a = t.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  ya(t);
  var i = t.parent;
  i !== null && i.first !== null && Ta(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function $a(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ te(t)
    );
    t.remove(), t = r;
  }
}
function Ta(t) {
  var e = t.parent, r = t.prev, a = t.next;
  r !== null && (r.next = a), a !== null && (a.prev = r), e !== null && (e.first === t && (e.first = a), e.last === t && (e.last = r));
}
function dn(t, e) {
  var r = [];
  hn(t, r, !0), xa(r, () => {
    jt(t), e && e();
  });
}
function xa(t, e) {
  var r = t.length;
  if (r > 0) {
    var a = () => --r || e();
    for (var i of t)
      i.out(a);
  } else
    e();
}
function hn(t, e, r) {
  if (!(t.f & Dt)) {
    if (t.f ^= Dt, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || r) && e.push(s);
    for (var a = t.first; a !== null; ) {
      var i = a.next, l = (a.f & sn) !== 0 || (a.f & Qt) !== 0;
      hn(a, e, l ? r : !1), a = i;
    }
  }
}
function pn(t) {
  Ea(t, !0);
}
function Ea(t, e) {
  if (t.f & Dt) {
    t.f ^= Dt, t.f & bt || (Et(t, It), We(t));
    for (var r = t.first; r !== null; ) {
      var a = r.next, i = (r.f & sn) !== 0 || (r.f & Qt) !== 0;
      Ea(r, i ? e : !1), r = a;
    }
    if (t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || e) && l.in();
  }
}
let Be = !1;
function Bn(t) {
  Be = t;
}
let $e = !1;
function Nn(t) {
  $e = t;
}
let B = null, qt = !1;
function Ut(t) {
  B = t;
}
let P = null;
function oe(t) {
  P = t;
}
let mt = null;
function Ca(t) {
  B !== null && (mt === null ? mt = [t] : mt.push(t));
}
let _t = null, Tt = 0, Rt = null;
function Xi(t) {
  Rt = t;
}
let Sa = 1, nr = 0, we = nr;
function In(t) {
  we = t;
}
let le = !1;
function Pa() {
  return ++Sa;
}
function Br(t) {
  var p;
  var e = t.f;
  if (e & It)
    return !0;
  if (e & fe) {
    var r = t.deps, a = (e & Nt) !== 0;
    if (r !== null) {
      var i, l, s = (e & $r) !== 0, o = a && P !== null && !le, f = r.length;
      if ((s || o) && (P === null || !(P.f & ke))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < f; i++)
          l = r[i], (s || !((p = l == null ? void 0 : l.reactions) != null && p.includes(c))) && (l.reactions ?? (l.reactions = [])).push(c);
        s && (c.f ^= $r), o && d !== null && !(d.f & Nt) && (c.f ^= Nt);
      }
      for (i = 0; i < f; i++)
        if (l = r[i], Br(
          /** @type {Derived} */
          l
        ) && aa(
          /** @type {Derived} */
          l
        ), l.wv > t.wv)
          return !0;
    }
    (!a || P !== null && !le) && Et(t, bt);
  }
  return !1;
}
function Aa(t, e, r = !0) {
  var a = t.reactions;
  if (a !== null && !(mt != null && mt.includes(t)))
    for (var i = 0; i < a.length; i++) {
      var l = a[i];
      l.f & Ct ? Aa(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (r ? Et(l, It) : l.f & bt && Et(l, fe), We(
        /** @type {Effect} */
        l
      ));
    }
}
function Ra(t) {
  var b;
  var e = _t, r = Tt, a = Rt, i = B, l = le, s = mt, o = Lt, f = qt, c = we, d = t.f;
  _t = /** @type {null | Value[]} */
  null, Tt = 0, Rt = null, le = (d & Nt) !== 0 && (qt || !Be || B === null), B = d & (Qt | ue) ? null : t, mt = null, Tr(t.ctx), qt = !1, we = ++nr, t.ac !== null && (_a(() => {
    t.ac.abort(un);
  }), t.ac = null);
  try {
    t.f |= Ur;
    var p = (
      /** @type {Function} */
      t.fn
    ), g = p(), m = t.deps;
    if (_t !== null) {
      var v;
      if (Er(t, Tt), m !== null && Tt > 0)
        for (m.length = Tt + _t.length, v = 0; v < _t.length; v++)
          m[Tt + v] = _t[v];
      else
        t.deps = m = _t;
      if (!le || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & Ct && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = Tt; v < m.length; v++)
          ((b = m[v]).reactions ?? (b.reactions = [])).push(t);
    } else m !== null && Tt < m.length && (Er(t, Tt), m.length = Tt);
    if (Zn() && Rt !== null && !qt && m !== null && !(t.f & (Ct | fe | It)))
      for (v = 0; v < /** @type {Source[]} */
      Rt.length; v++)
        Aa(
          Rt[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (nr++, Rt !== null && (a === null ? a = Rt : a.push(.../** @type {Source[]} */
    Rt))), t.f & ge && (t.f ^= ge), g;
  } catch (y) {
    return Di(y);
  } finally {
    t.f ^= Ur, _t = e, Tt = r, Rt = a, B = i, le = l, mt = s, Tr(o), qt = f, we = c;
  }
}
function Zi(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var a = pi.call(r, t);
    if (a !== -1) {
      var i = r.length - 1;
      i === 0 ? r = e.reactions = null : (r[a] = r[i], r.pop());
    }
  }
  r === null && e.f & Ct && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (_t === null || !_t.includes(e)) && (Et(e, fe), e.f & (Nt | $r) || (e.f ^= $r), na(
    /** @type {Derived} **/
    e
  ), Er(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Er(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var a = e; a < r.length; a++)
      Zi(t, r[a]);
}
function Ne(t) {
  var e = t.f;
  if (!(e & ke)) {
    Et(t, bt);
    var r = P, a = Be;
    P = t, Be = !0;
    try {
      e & je ? Ji(t) : ka(t), ya(t);
      var i = Ra(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Sa;
      var l;
      Wn && Ii && t.f & It && t.deps;
    } finally {
      Be = a, P = r;
    }
  }
}
async function Qi() {
  await Promise.resolve(), Z();
}
function n(t) {
  var e = t.f, r = (e & Ct) !== 0;
  if (B !== null && !qt) {
    var a = P !== null && (P.f & ke) !== 0;
    if (!a && !(mt != null && mt.includes(t))) {
      var i = B.deps;
      if (B.f & Ur)
        t.rv < nr && (t.rv = nr, _t === null && i !== null && i[Tt] === t ? Tt++ : _t === null ? _t = [t] : (!le || !_t.includes(t)) && _t.push(t));
      else {
        (B.deps ?? (B.deps = [])).push(t);
        var l = t.reactions;
        l === null ? t.reactions = [B] : l.includes(B) || l.push(B);
      }
    }
  } else if (r && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), o = s.parent;
    o !== null && !(o.f & Nt) && (s.f ^= Nt);
  }
  if ($e) {
    if (se.has(t))
      return se.get(t);
    if (r) {
      s = /** @type {Derived} */
      t;
      var f = s.v;
      return (!(s.f & bt) && s.reactions !== null || Ba(s)) && (f = vn(s)), se.set(s, f), f;
    }
  } else if (r) {
    if (s = /** @type {Derived} */
    t, ie != null && ie.has(s))
      return ie.get(s);
    Br(s) && aa(s);
  }
  if (t.f & ge)
    throw t.v;
  return t.v;
}
function Ba(t) {
  if (t.v === ft) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (se.has(e) || e.f & Ct && Ba(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Na(t) {
  var e = qt;
  try {
    return qt = !0, t();
  } finally {
    qt = e;
  }
}
const tl = -7169;
function Et(t, e) {
  t.f = t.f & tl | e;
}
const Ia = /* @__PURE__ */ new Set(), Xr = /* @__PURE__ */ new Set();
function el(t) {
  for (var e = 0; e < t.length; e++)
    Ia.add(t[e]);
  for (var r of Xr)
    r(t);
}
let On = null;
function br(t) {
  var N;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), a = t.type, i = ((N = t.composedPath) == null ? void 0 : N.call(t)) || [], l = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  On = t;
  var s = 0, o = On === t && t.__root;
  if (o) {
    var f = i.indexOf(o);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    f <= c && (s = f);
  }
  if (l = /** @type {Element} */
  i[s] || t.target, l !== e) {
    Le(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var d = B, p = P;
    Ut(null), oe(null);
    try {
      for (var g, m = []; l !== null; ) {
        var v = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var b = l["__" + a];
          if (b != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l))
            if (rn(b)) {
              var [y, ...S] = b;
              y.apply(l, [t, ...S]);
            } else
              b.call(l, t);
        } catch (E) {
          g ? m.push(E) : g = E;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        l = v;
      }
      if (g) {
        for (let E of m)
          queueMicrotask(() => {
            throw E;
          });
        throw g;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Ut(d), oe(p);
    }
  }
}
function Oa(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Zt(t, e) {
  var r = (
    /** @type {Effect} */
    P
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function q(t, e) {
  var r = (e & hi) !== 0, a, i = !t.startsWith("<!>");
  return () => {
    if (L)
      return Zt(F, null), F;
    a === void 0 && (a = Oa(i ? t : "<!>" + t), a = /** @type {Node} */
    /* @__PURE__ */ Wt(a));
    var l = (
      /** @type {TemplateNode} */
      r || ca ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    return Zt(l, l), l;
  };
}
function Dn(t = "") {
  if (!L) {
    var e = zt(t + "");
    return Zt(e, e), e;
  }
  var r = F;
  return r.nodeType !== fn && (r.before(r = zt()), xt(r)), Zt(r, r), r;
}
function Xe() {
  if (L)
    return Zt(F, null), F;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = zt();
  return t.append(e, r), Zt(e, r), t;
}
function R(t, e) {
  if (L) {
    P.nodes_end = F, qe();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const rl = ["touchstart", "touchmove"];
function nl(t) {
  return rl.includes(t);
}
function At(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r + "");
}
function Da(t, e) {
  return Ma(t, e);
}
function al(t, e) {
  Jr(), e.intro = e.intro ?? !1;
  const r = e.target, a = L, i = F;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Wt(r)
    ); l && (l.nodeType !== Fe || /** @type {Comment} */
    l.data !== Hn); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ te(l);
    if (!l)
      throw be;
    Xt(!0), xt(
      /** @type {Comment} */
      l
    ), qe();
    const s = Ma(t, { ...e, anchor: l });
    if (F === null || F.nodeType !== Fe || /** @type {Comment} */
    F.data !== en)
      throw or(), be;
    return Xt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== be && console.warn("Failed to hydrate: ", s), e.recover === !1 && Si(), Jr(), ha(r), Xt(!1), Da(t, e);
  } finally {
    Xt(a), xt(i);
  }
}
const Se = /* @__PURE__ */ new Map();
function Ma(t, { target: e, anchor: r, props: a = {}, events: i, context: l, intro: s = !0 }) {
  Jr();
  var o = /* @__PURE__ */ new Set(), f = (p) => {
    for (var g = 0; g < p.length; g++) {
      var m = p[g];
      if (!o.has(m)) {
        o.add(m);
        var v = nl(m);
        e.addEventListener(m, br, { passive: v });
        var b = Se.get(m);
        b === void 0 ? (document.addEventListener(m, br, { passive: v }), Se.set(m, 1)) : Se.set(m, b + 1);
      }
    }
  };
  f(nn(Ia)), Xr.add(f);
  var c = void 0, d = Gi(() => {
    var p = r ?? e.appendChild(zt());
    return ze(() => {
      if (l) {
        Jn({});
        var g = (
          /** @type {ComponentContext} */
          Lt
        );
        g.c = l;
      }
      i && (a.$$events = i), L && Zt(
        /** @type {TemplateNode} */
        p,
        null
      ), c = t(p, a) || {}, L && (P.nodes_end = F), l && Xn();
    }), () => {
      var v;
      for (var g of o) {
        e.removeEventListener(g, br);
        var m = (
          /** @type {number} */
          Se.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, br), Se.delete(g)) : Se.set(g, m);
      }
      Xr.delete(f), p !== r && ((v = p.parentNode) == null || v.removeChild(p));
    };
  });
  return Zr.set(c, d), c;
}
let Zr = /* @__PURE__ */ new WeakMap();
function il(t, e) {
  const r = Zr.get(t);
  return r ? (Zr.delete(t), r(e)) : Promise.resolve();
}
function V(t, e, r = !1) {
  L && qe();
  var a = t, i = null, l = null, s = ft, o = r ? sn : 0, f = !1;
  const c = (m, v = !0) => {
    f = !0, g(v, m);
  };
  var d = null;
  function p() {
    d !== null && (d.lastChild.remove(), a.before(d), d = null);
    var m = s ? i : l, v = s ? l : i;
    m && pn(m), v && dn(v, () => {
      s ? l = null : i = null;
    });
  }
  const g = (m, v) => {
    if (s === (s = m)) return;
    let b = !1;
    if (L) {
      const x = Vn(a) === tn;
      !!s === x && (a = Yr(), xt(a), Xt(!1), b = !0);
    }
    var y = pa(), S = a;
    if (y && (d = document.createDocumentFragment(), d.append(S = zt())), s ? i ?? (i = v && ze(() => v(S))) : l ?? (l = v && ze(() => v(S))), y) {
      var N = (
        /** @type {Batch} */
        at
      ), E = s ? i : l, G = s ? l : i;
      E && N.skipped_effects.delete(E), G && N.skipped_effects.add(G), N.add_callback(p);
    } else
      p();
    b && Xt(!0);
  };
  wa(() => {
    f = !1, e(c), f || g(null, null);
  }, o), L && (a = F);
}
function Pe(t, e) {
  return e;
}
function ll(t, e, r) {
  for (var a = t.items, i = [], l = e.length, s = 0; s < l; s++)
    hn(e[s].e, i, !0);
  var o = l > 0 && i.length === 0 && r !== null;
  if (o) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    ha(f), f.append(
      /** @type {Element} */
      r
    ), a.clear(), Ft(t, e[0].prev, e[l - 1].next);
  }
  xa(i, () => {
    for (var c = 0; c < l; c++) {
      var d = e[c];
      o || (a.delete(d.k), Ft(t, d.prev, d.next)), jt(d.e, !o);
    }
  });
}
function Ae(t, e, r, a, i, l = null) {
  var s = t, o = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, f = (e & qn) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      t
    );
    s = L ? xt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Wt(c)
    ) : c.appendChild(zt());
  }
  L && qe();
  var d = null, p = !1, g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ ra(() => {
    var S = r();
    return rn(S) ? S : S == null ? [] : nn(S);
  }), v, b;
  function y() {
    sl(
      b,
      v,
      o,
      g,
      s,
      i,
      e,
      a,
      r
    ), l !== null && (v.length === 0 ? d ? pn(d) : d = ze(() => l(s)) : d !== null && dn(d, () => {
      d = null;
    }));
  }
  wa(() => {
    b ?? (b = /** @type {Effect} */
    P), v = /** @type {V[]} */
    n(m);
    var S = v.length;
    if (p && S === 0)
      return;
    p = S === 0;
    let N = !1;
    if (L) {
      var E = Vn(s) === tn;
      E !== (S === 0) && (s = Yr(), xt(s), Xt(!1), N = !0);
    }
    if (L) {
      for (var G = null, x, k = 0; k < S; k++) {
        if (F.nodeType === Fe && /** @type {Comment} */
        F.data === en) {
          s = /** @type {Comment} */
          F, N = !0, Xt(!1);
          break;
        }
        var C = v[k], K = a(C, k);
        x = Qr(
          F,
          o,
          G,
          null,
          C,
          K,
          k,
          i,
          e,
          r
        ), o.items.set(K, x), G = x;
      }
      S > 0 && xt(Yr());
    }
    if (L)
      S === 0 && l && (d = ze(() => l(s)));
    else if (pa()) {
      var ut = /* @__PURE__ */ new Set(), O = (
        /** @type {Batch} */
        at
      );
      for (k = 0; k < S; k += 1) {
        C = v[k], K = a(C, k);
        var Yt = o.items.get(K) ?? g.get(K);
        Yt ? e & (Sr | Pr) && La(Yt, C, k, e) : (x = Qr(
          null,
          o,
          null,
          null,
          C,
          K,
          k,
          i,
          e,
          r,
          !0
        ), g.set(K, x)), ut.add(K);
      }
      for (const [ct, re] of o.items)
        ut.has(ct) || O.skipped_effects.add(re.e);
      O.add_callback(y);
    } else
      y();
    N && Xt(!0), n(m);
  }), L && (s = F);
}
function sl(t, e, r, a, i, l, s, o, f) {
  var j, U, J, it;
  var c = (s & oi) !== 0, d = (s & (Sr | Pr)) !== 0, p = e.length, g = r.items, m = r.first, v = m, b, y = null, S, N = [], E = [], G, x, k, C;
  if (c)
    for (C = 0; C < p; C += 1)
      G = e[C], x = o(G, C), k = g.get(x), k !== void 0 && ((j = k.a) == null || j.measure(), (S ?? (S = /* @__PURE__ */ new Set())).add(k));
  for (C = 0; C < p; C += 1) {
    if (G = e[C], x = o(G, C), k = g.get(x), k === void 0) {
      var K = a.get(x);
      if (K !== void 0) {
        a.delete(x), g.set(x, K);
        var ut = y ? y.next : v;
        Ft(r, y, K), Ft(r, K, ut), zr(K, ut, i), y = K;
      } else {
        var O = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        y = Qr(
          O,
          r,
          y,
          y === null ? r.first : y.next,
          G,
          x,
          C,
          l,
          s,
          f
        );
      }
      g.set(x, y), N = [], E = [], v = y.next;
      continue;
    }
    if (d && La(k, G, C, s), k.e.f & Dt && (pn(k.e), c && ((U = k.a) == null || U.unfix(), (S ?? (S = /* @__PURE__ */ new Set())).delete(k))), k !== v) {
      if (b !== void 0 && b.has(k)) {
        if (N.length < E.length) {
          var Yt = E[0], ct;
          y = Yt.prev;
          var re = N[0], ce = N[N.length - 1];
          for (ct = 0; ct < N.length; ct += 1)
            zr(N[ct], Yt, i);
          for (ct = 0; ct < E.length; ct += 1)
            b.delete(E[ct]);
          Ft(r, re.prev, ce.next), Ft(r, y, re), Ft(r, ce, Yt), v = Yt, y = ce, C -= 1, N = [], E = [];
        } else
          b.delete(k), zr(k, v, i), Ft(r, k.prev, k.next), Ft(r, k, y === null ? r.first : y.next), Ft(r, y, k), y = k;
        continue;
      }
      for (N = [], E = []; v !== null && v.k !== x; )
        v.e.f & Dt || (b ?? (b = /* @__PURE__ */ new Set())).add(v), E.push(v), v = v.next;
      if (v === null)
        continue;
      k = v;
    }
    N.push(k), y = k, v = k.next;
  }
  if (v !== null || b !== void 0) {
    for (var Vt = b === void 0 ? [] : nn(b); v !== null; )
      v.e.f & Dt || Vt.push(v), v = v.next;
    var Te = Vt.length;
    if (Te > 0) {
      var ur = s & qn && p === 0 ? i : null;
      if (c) {
        for (C = 0; C < Te; C += 1)
          (J = Vt[C].a) == null || J.measure();
        for (C = 0; C < Te; C += 1)
          (it = Vt[C].a) == null || it.fix();
      }
      ll(r, Vt, ur);
    }
  }
  c && ea(() => {
    var gt;
    if (S !== void 0)
      for (k of S)
        (gt = k.a) == null || gt.apply();
  }), t.first = r.first && r.first.e, t.last = y && y.e;
  for (var Nr of a.values())
    jt(Nr.e);
  a.clear();
}
function La(t, e, r, a) {
  a & Sr && rr(t.v, e), a & Pr ? rr(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function Qr(t, e, r, a, i, l, s, o, f, c, d) {
  var p = (f & Sr) !== 0, g = (f & ui) === 0, m = p ? g ? /* @__PURE__ */ ua(i, !1, !1) : er(i) : i, v = f & Pr ? er(s) : s, b = {
    i: v,
    v: m,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: a
  };
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = zt());
    }
    return b.e = ze(() => o(
      /** @type {Node} */
      t,
      m,
      v,
      c
    ), L), b.e.prev = r && r.e, b.e.next = a && a.e, r === null ? d || (e.first = b) : (r.next = b, r.e.next = b.e), a !== null && (a.prev = b, a.e.prev = b.e), b;
  } finally {
  }
}
function zr(t, e, r) {
  for (var a = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : r, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : r, l = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); l !== null && l !== a; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ te(l)
    );
    i.before(l), l = s;
  }
}
function Ft(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function jr(t, e, r = !1, a = !1, i = !1) {
  var l = t, s = "";
  nt(() => {
    var o = (
      /** @type {Effect} */
      P
    );
    if (s === (s = e() ?? "")) {
      L && qe();
      return;
    }
    if (o.nodes_start !== null && ($a(
      o.nodes_start,
      /** @type {TemplateNode} */
      o.nodes_end
    ), o.nodes_start = o.nodes_end = null), s !== "") {
      if (L) {
        F.data;
        for (var f = qe(), c = f; f !== null && (f.nodeType !== Fe || /** @type {Comment} */
        f.data !== ""); )
          c = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ te(f);
        if (f === null)
          throw or(), be;
        Zt(F, c), l = xt(f);
        return;
      }
      var d = s + "";
      r ? d = `<svg>${d}</svg>` : a && (d = `<math>${d}</math>`);
      var p = Oa(d);
      if ((r || a) && (p = /** @type {Element} */
      /* @__PURE__ */ Wt(p)), Zt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wt(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), r || a)
        for (; /* @__PURE__ */ Wt(p); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ Wt(p)
          );
      else
        l.before(p);
    }
  });
}
function ol(t, e) {
  ma(() => {
    var r = t.getRootNode(), a = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!a.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, a.appendChild(i);
    }
  });
}
function ul(t, e, r) {
  var a = t == null ? "" : "" + t;
  return a = a ? a + " " + e : e, a === "" ? null : a;
}
function fl(t, e) {
  return t == null ? null : String(t);
}
function Ze(t, e, r, a, i, l) {
  var s = t.__className;
  if (L || s !== r || s === void 0) {
    var o = ul(r, a);
    (!L || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = r;
  }
  return l;
}
function Re(t, e, r, a) {
  var i = t.__style;
  if (L || i !== e) {
    var l = fl(e);
    (!L || l !== t.getAttribute("style")) && (l == null ? t.removeAttribute("style") : t.style.cssText = l), t.__style = e;
  }
  return a;
}
function Mn(t, e) {
  return t === e || (t == null ? void 0 : t[Qe]) === e;
}
function Ln(t = {}, e, r, a) {
  return ma(() => {
    var i, l;
    return ga(() => {
      i = l, l = [], Na(() => {
        t !== r(...l) && (e(t, ...l), i && Mn(r(...i), t) && e(null, ...i));
      });
    }), () => {
      ea(() => {
        l && Mn(r(...l), t) && e(null, ...l);
      });
    };
  }), t;
}
let mr = !1;
function cl(t) {
  var e = mr;
  try {
    return mr = !1, [t(), mr];
  } finally {
    mr = e;
  }
}
function rt(t, e, r, a) {
  var N;
  var i = (r & vi) !== 0, l = (r & di) !== 0, s = (
    /** @type {V} */
    a
  ), o = !0, f = () => (o && (o = !1, s = l ? Na(
    /** @type {() => V} */
    a
  ) : (
    /** @type {V} */
    a
  )), s), c;
  if (i) {
    var d = Qe in t || Yn in t;
    c = ((N = me(t, e)) == null ? void 0 : N.set) ?? (d && e in t ? (E) => t[e] = E : void 0);
  }
  var p, g = !1;
  i ? [p, g] = cl(() => (
    /** @type {V} */
    t[e]
  )) : p = /** @type {V} */
  t[e], p === void 0 && a !== void 0 && (p = f(), c && (Pi(), c(p)));
  var m;
  if (m = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E === void 0 ? f() : (o = !0, E);
  }, !(r & ci))
    return m;
  if (c) {
    var v = t.$$legacy;
    return (
      /** @type {() => V} */
      function(E, G) {
        return arguments.length > 0 ? ((!G || v || g) && c(G ? m() : E), E) : m();
      }
    );
  }
  var b = !1, y = (r & fi ? Ar : ra)(() => (b = !1, m()));
  i && n(y);
  var S = (
    /** @type {Effect} */
    P
  );
  return (
    /** @type {() => V} */
    function(E, G) {
      if (arguments.length > 0) {
        const x = G ? n(y) : i ? Ht(E) : E;
        return w(y, x), b = !0, s !== void 0 && (s = x), E;
      }
      return $e && b || S.f & ke ? y.v : n(y);
    }
  );
}
function vl(t) {
  return new dl(t);
}
var Jt, Bt;
class dl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    ht(this, Jt);
    /** @type {Record<string, any>} */
    ht(this, Bt);
    var l;
    var r = /* @__PURE__ */ new Map(), a = (s, o) => {
      var f = /* @__PURE__ */ ua(o, !1, !1);
      return r.set(s, f), f;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, o) {
          return n(r.get(o) ?? a(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === Yn ? !0 : (n(r.get(o) ?? a(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, f) {
          return w(r.get(o) ?? a(o, f), f), Reflect.set(s, o, f);
        }
      }
    );
    yt(this, Bt, (e.hydrate ? al : Da)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((l = e == null ? void 0 : e.props) != null && l.$$host) || e.sync === !1) && Z(), yt(this, Jt, i.$$events);
    for (const s of Object.keys(T(this, Bt)))
      s === "$set" || s === "$destroy" || s === "$on" || Le(this, s, {
        get() {
          return T(this, Bt)[s];
        },
        /** @param {any} value */
        set(o) {
          T(this, Bt)[s] = o;
        },
        enumerable: !0
      });
    T(this, Bt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, T(this, Bt).$destroy = () => {
      il(T(this, Bt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    T(this, Bt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    T(this, Jt)[e] = T(this, Jt)[e] || [];
    const a = (...i) => r.call(this, ...i);
    return T(this, Jt)[e].push(a), () => {
      T(this, Jt)[e] = T(this, Jt)[e].filter(
        /** @param {any} fn */
        (i) => i !== a
      );
    };
  }
  $destroy() {
    T(this, Bt).$destroy();
  }
}
Jt = new WeakMap(), Bt = new WeakMap();
let Fa;
typeof HTMLElement == "function" && (Fa = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, a) {
    super();
    /** The Svelte component constructor */
    pt(this, "$$ctor");
    /** Slots */
    pt(this, "$$s");
    /** @type {any} The Svelte component instance */
    pt(this, "$$c");
    /** Whether or not the custom element is connected */
    pt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    pt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    pt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    pt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    pt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    pt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    pt(this, "$$me");
    this.$$ctor = e, this.$$s = r, a && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, r, a) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(r), this.$$c) {
      const i = this.$$c.$on(e, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(e, r, a);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, r, a) {
    if (super.removeEventListener(e, r, a), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(i) {
        return (l) => {
          const s = document.createElement("slot");
          i !== "default" && (s.name = i), R(l, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, a = hl(this);
      for (const i of this.$$s)
        i in a && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), r.default = !0) : r[i] = e(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = yr(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = vl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Vi(() => {
        ga(() => {
          var i;
          this.$$r = !0;
          for (const l of kr(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const s = yr(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, s);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const s = this.$$c.$on(i, l);
          this.$$l_u.set(l, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, r, a) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = yr(e, a, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return kr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function yr(t, e, r, a) {
  var l;
  const i = (l = r[t]) == null ? void 0 : l.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !a || !r[t])
    return e;
  if (a === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function hl(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function pl(t, e, r, a, i, l) {
  let s = class extends Fa {
    constructor() {
      super(t, r, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return kr(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return kr(e).forEach((o) => {
    Le(s.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(f) {
        var p;
        f = yr(o, f, e), this.$$d[o] = f;
        var c = this.$$c;
        if (c) {
          var d = (p = me(c, o)) == null ? void 0 : p.get;
          d ? c[o] = f : c.$set({ [o]: f });
        }
      }
    });
  }), a.forEach((o) => {
    Le(s.prototype, o, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[o];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
const _l = {
  background: "#0d1117",
  foreground: "#c9d1d9",
  border: "#30363d",
  headerBg: "#161b22",
  headerFg: "#8b949e",
  prompt: "#58a6ff",
  command: "#79c0ff",
  output: "#c9d1d9",
  error: "#ff7b72",
  warning: "#ffa657",
  info: "#58a6ff",
  success: "#56d364",
  selection: "#264f78",
  cursor: "#58a6ff"
}, bl = {
  background: "#ffffff",
  foreground: "#24292f",
  border: "#d0d7de",
  headerBg: "#f6f8fa",
  headerFg: "#57606a",
  prompt: "#0969da",
  command: "#0550ae",
  output: "#24292f",
  error: "#cf222e",
  warning: "#9a6700",
  info: "#0969da",
  success: "#1a7f37",
  selection: "#b6e3ff",
  cursor: "#0969da"
};
function ml(t, e) {
  const r = e.style;
  r.setProperty("--terminal-bg", t.background), r.setProperty("--terminal-fg", t.foreground), r.setProperty("--terminal-border", t.border), r.setProperty("--terminal-header-bg", t.headerBg), r.setProperty("--terminal-header-fg", t.headerFg), r.setProperty("--terminal-prompt", t.prompt), r.setProperty("--terminal-command", t.command), r.setProperty("--terminal-output", t.output), r.setProperty("--terminal-error", t.error), r.setProperty("--terminal-warning", t.warning), r.setProperty("--terminal-info", t.info), r.setProperty("--terminal-success", t.success), r.setProperty("--terminal-selection", t.selection), r.setProperty("--terminal-cursor", t.cursor);
}
function gl(t, e) {
  return { ...t, ...e };
}
var wl = /* @__PURE__ */ q('<div class="terminal-buttons svelte-103tpek"><span class="terminal-button close svelte-103tpek"></span> <span class="terminal-button minimize svelte-103tpek"></span> <span class="terminal-button maximize svelte-103tpek"></span></div>'), yl = /* @__PURE__ */ q('<button class="control-button svelte-103tpek"> </button>'), kl = /* @__PURE__ */ q('<button class="control-button svelte-103tpek">↺</button>'), $l = /* @__PURE__ */ q('<button class="control-button svelte-103tpek"> </button>'), Tl = /* @__PURE__ */ q('<div class="terminal-controls svelte-103tpek"><!> <!> <!></div>'), xl = /* @__PURE__ */ q('<div class="terminal-header svelte-103tpek"><!> <div class="terminal-title svelte-103tpek"> </div> <!></div>'), El = /* @__PURE__ */ q('<span class="tab-icon svelte-103tpek"> </span>'), Cl = /* @__PURE__ */ q('<span class="tab-badge svelte-103tpek"> </span>'), Sl = /* @__PURE__ */ q('<span class="tab-close svelte-103tpek" role="button" tabindex="0">×</span>'), Pl = /* @__PURE__ */ q('<button><!> <span class="tab-title svelte-103tpek"> </span> <!> <!></button>'), Al = /* @__PURE__ */ q('<button class="terminal-tab tab-add svelte-103tpek">+</button>'), Rl = /* @__PURE__ */ q('<div class="terminal-tabs svelte-103tpek"><!> <!></div>'), Bl = (t, e) => {
  (t.key === "Enter" || t.key === " ") && e();
}, Nl = /* @__PURE__ */ q("<div> </div>"), Il = /* @__PURE__ */ q('<div class="terminal-table-row svelte-103tpek"></div>'), Ol = /* @__PURE__ */ q('<div><div class="terminal-table svelte-103tpek"></div></div>'), Dl = /* @__PURE__ */ q('<div class="rich-text-segment svelte-103tpek"><!></div>'), Ml = /* @__PURE__ */ q('<span class="rich-text-segment svelte-103tpek"><!></span>'), Ll = /* @__PURE__ */ q('<span class="typing-cursor svelte-103tpek">▊</span>'), Fl = /* @__PURE__ */ q('<div><pre class="svelte-103tpek"><!><!><!></pre></div>'), ql = /* @__PURE__ */ q('<div class="terminal-cursor svelte-103tpek">▊</div>'), Hl = /* @__PURE__ */ q('<span class="tab-icon svelte-103tpek"> </span>'), Wl = /* @__PURE__ */ q('<span class="tab-badge svelte-103tpek"> </span>'), zl = /* @__PURE__ */ q('<span class="tab-close svelte-103tpek" role="button" tabindex="0">×</span>'), jl = /* @__PURE__ */ q('<button><!> <span class="tab-title svelte-103tpek"> </span> <!> <!></button>'), Ul = /* @__PURE__ */ q('<button class="terminal-tab tab-add svelte-103tpek">+</button>'), Yl = /* @__PURE__ */ q('<div class="terminal-tabs terminal-tabs-bottom svelte-103tpek"><!> <!></div>'), Vl = /* @__PURE__ */ q('<div class="terminal svelte-103tpek"><!> <!> <div class="terminal-content svelte-103tpek" role="button" aria-label="Terminal output - click to skip typing animation" tabindex="0"><!> <!></div> <!></div>');
const Gl = {
  hash: "svelte-103tpek",
  code: `:host {display:block;font-family:'Cascadia Code', 'Fira Code', 'Monaco', 'Consolas', monospace;font-size:14px;line-height:1.5;}.terminal.svelte-103tpek {width:100%;height:100%;min-height:300px;background:var(--terminal-bg);color:var(--terminal-fg);border:1px solid var(--terminal-border);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;transition:all 0.3s ease;}.terminal-header.svelte-103tpek {background:var(--terminal-header-bg);color:var(--terminal-header-fg);padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--terminal-border);}.terminal-buttons.svelte-103tpek {display:flex;gap:8px;}.terminal-button.svelte-103tpek {width:12px;height:12px;border-radius:50%;display:inline-block;}.terminal-button.close.svelte-103tpek {background:#ff5f56;}.terminal-button.minimize.svelte-103tpek {background:#ffbd2e;}.terminal-button.maximize.svelte-103tpek {background:#27c93f;}.terminal-title.svelte-103tpek {flex:1;text-align:center;font-weight:500;}.terminal-controls.svelte-103tpek {display:flex;gap:8px;}.control-button.svelte-103tpek {background:transparent;color:var(--terminal-header-fg);border:1px solid var(--terminal-border);padding:4px 8px;border-radius:4px;cursor:pointer;font-size:12px;transition:all 0.2s;}.control-button.svelte-103tpek:hover:not(:disabled) {background:var(--terminal-border);color:var(--terminal-fg);}.control-button.svelte-103tpek:disabled {opacity:0.5;cursor:not-allowed;}.terminal-content.svelte-103tpek {flex:1;padding:16px;overflow-y:auto;font-family:inherit;}.terminal-line.svelte-103tpek {margin:4px 0;white-space:pre-wrap;word-break:break-word;}.terminal-line.svelte-103tpek pre:where(.svelte-103tpek) {margin:0;font-family:inherit;display:block;white-space:pre-wrap;}.step-command.svelte-103tpek {color:var(--terminal-command);font-weight:bold;}.step-output.svelte-103tpek {color:var(--terminal-output);}.step-error.svelte-103tpek {color:var(--terminal-error);}.step-warning.svelte-103tpek {color:var(--terminal-warning);}.step-info.svelte-103tpek {color:var(--terminal-info);}.step-success.svelte-103tpek {color:var(--terminal-success);}.terminal-cursor.svelte-103tpek {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-103tpek-blink 1s infinite;}.typing-cursor.svelte-103tpek {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-103tpek-blink 1s infinite;margin-left:2px;}

  @keyframes svelte-103tpek-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }.terminal-content.svelte-103tpek::-webkit-scrollbar {width:8px;}.terminal-content.svelte-103tpek::-webkit-scrollbar-track {background:var(--terminal-bg);}.terminal-content.svelte-103tpek::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:4px;}.terminal-content.svelte-103tpek::-webkit-scrollbar-thumb:hover {background:var(--terminal-header-fg);}

  /* Tab styles */.terminal-tabs.svelte-103tpek {display:flex;background:var(--terminal-header-bg);border-bottom:1px solid var(--terminal-border);gap:4px;overflow-x:auto;align-items:center;}.terminal-tabs-bottom.svelte-103tpek {border-bottom:none;border-top:1px solid var(--terminal-border);}.terminal-tab.svelte-103tpek {display:flex;align-items:center;gap:6px;padding:8px 12px;background:transparent;color:var(--terminal-header-fg);border:none;border-top:2px solid transparent;cursor:pointer;font-family:inherit;font-size:13px;transition:all 0.2s;white-space:nowrap;position:relative;}.terminal-tabs-bottom.svelte-103tpek .terminal-tab:where(.svelte-103tpek) {border-top:none;border-bottom:2px solid transparent;}.terminal-tab.svelte-103tpek:hover {background:rgba(255, 255, 255, 0.05);}.terminal-tab.active.svelte-103tpek {background:var(--terminal-bg);border-top-color:var(--terminal-command);}.terminal-tabs-bottom.svelte-103tpek .terminal-tab.active:where(.svelte-103tpek) {border-top-color:transparent;border-bottom-color:var(--terminal-command);}.tab-icon.svelte-103tpek {font-size:14px;}.tab-title.svelte-103tpek {flex:1;}.tab-badge.svelte-103tpek {padding:2px 6px;background:var(--terminal-command);color:var(--terminal-bg);border-radius:10px;font-size:11px;font-weight:bold;min-width:18px;text-align:center;}.tab-close.svelte-103tpek {margin-left:4px;padding:0 4px;background:transparent;border:none;color:var(--terminal-header-fg);cursor:pointer;font-size:18px;line-height:1;opacity:0.6;transition:opacity 0.2s;}.tab-close.svelte-103tpek:hover {opacity:1;color:var(--terminal-error);}.tab-add.svelte-103tpek {padding:8px 16px;font-weight:bold;opacity:0.7;}.tab-add.svelte-103tpek:hover {opacity:1;background:rgba(255, 255, 255, 0.1);}

  /* Tab status indicators */.tab-status-running.svelte-103tpek .tab-icon:where(.svelte-103tpek)::after {content:'●';color:var(--terminal-warning);position:absolute;top:6px;left:8px;font-size:8px;
    animation: svelte-103tpek-pulse 1.5s infinite;}.tab-status-error.svelte-103tpek .tab-icon:where(.svelte-103tpek)::after {content:'●';color:var(--terminal-error);position:absolute;top:6px;left:8px;font-size:8px;}.tab-status-success.svelte-103tpek .tab-icon:where(.svelte-103tpek)::after {content:'●';color:var(--terminal-success);position:absolute;top:6px;left:8px;font-size:8px;}

  @keyframes svelte-103tpek-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Scrollbar for tabs */.terminal-tabs.svelte-103tpek::-webkit-scrollbar {height:4px;}.terminal-tabs.svelte-103tpek::-webkit-scrollbar-track {background:transparent;}.terminal-tabs.svelte-103tpek::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:2px;}

  /* Rich text segment styling */.rich-text-segment.svelte-103tpek {display:inline;}

  /* Ensure rich text inherits terminal font properties */.terminal-line.svelte-103tpek .rich-text-segment:where(.svelte-103tpek) {font-family:inherit;font-size:inherit;line-height:inherit;}

  /* Table layout styling */.terminal-table.svelte-103tpek {display:block;width:100%;font-family:inherit;margin:0;padding:0;}.terminal-table-row.svelte-103tpek {display:grid !important;grid-template-columns:60px 100px 180px 1fr !important;gap:16px;min-height:1.5em;align-items:baseline;font-family:inherit;}.terminal-table-cell.svelte-103tpek {overflow:visible;}

  /* Semantic column styling with fixed positioning */.terminal-table-row.svelte-103tpek .terminal-table-cell.col-position:where(.svelte-103tpek) {grid-column:1;text-align:right;white-space:nowrap;}.terminal-table-row.svelte-103tpek .terminal-table-cell.col-type:where(.svelte-103tpek) {grid-column:2;text-align:right;white-space:nowrap;}.terminal-table-row.svelte-103tpek .terminal-table-cell.col-rule:where(.svelte-103tpek) {grid-column:3;white-space:nowrap;}.terminal-table-row.svelte-103tpek .terminal-table-cell.col-message:where(.svelte-103tpek) {grid-column:4;white-space:normal;word-break:break-word;}`
};
function Kl(t, e) {
  Jn(e, !0), ol(t, Gl);
  let r = rt(e, "theme", 7, "dark"), a = rt(e, "session", 23, () => []), i = rt(e, "autoplay", 7, !1), l = rt(e, "playbackSpeed", 7, 1), s = rt(e, "showHeader", 7), o = rt(e, "title", 7, "Terminal"), f = rt(e, "colors", 23, () => ({})), c = rt(e, "typingSpeed", 7, 40), d = rt(e, "enableTyping", 7, !0), p = rt(e, "showPlayButton", 7), g = rt(e, "showResetButton", 7), m = rt(e, "showThemeToggle", 7), v = rt(e, "showWindowButtons", 7), b = rt(e, "tabs", 23, () => []), y = rt(e, "activeTab", 7, 0), S = rt(e, "showTabs", 7, !1), N = rt(e, "allowTabClose", 7, !0), E = rt(e, "allowTabAdd", 7, !1), G = rt(e, "tabBarPosition", 7, "top"), x, k, C = /* @__PURE__ */ ot(Ht(y() || 0)), K = /* @__PURE__ */ ot(Ht(/* @__PURE__ */ new Map())), ut = /* @__PURE__ */ $t(() => S() && b() && b().length > 0 ? b()[n(C)] || b()[0] : null), O = /* @__PURE__ */ $t(() => n(ut) ? n(ut).session : a()), Yt = /* @__PURE__ */ $t(() => n(ut) ? n(ut).title : o());
  function ct(u, h = !0, D = "") {
    return console.log(`[parseBooleanProp] ${D}:`, {
      raw: u,
      type: typeof u,
      isUndefined: u === void 0,
      isNull: u === null,
      defaultValue: h
    }), u == null ? h : typeof u == "boolean" ? u : typeof u == "string" ? u.toLowerCase() === "false" ? !1 : (u.toLowerCase() === "true", !0) : h;
  }
  console.log("[Terminal Props] Raw values:", {
    showPlayButton: p(),
    showResetButton: g(),
    showThemeToggle: m(),
    showWindowButtons: v(),
    showHeader: s()
  });
  let re = /* @__PURE__ */ $t(() => ct(p(), !0, "showPlayButton")), ce = /* @__PURE__ */ $t(() => ct(g(), !0, "showResetButton")), Vt = /* @__PURE__ */ $t(() => ct(m(), !0, "showThemeToggle")), Te = /* @__PURE__ */ $t(() => ct(v(), !0, "showWindowButtons")), ur = /* @__PURE__ */ $t(() => n(re) || n(ce) || n(Vt));
  de(() => {
    console.log("[Terminal Computed] Button visibility:", {
      showPlayButtonComputed: n(re),
      showResetButtonComputed: n(ce),
      showThemeToggleComputed: n(Vt),
      showWindowButtonsComputed: n(Te),
      hasControlButtons: n(ur)
    });
  });
  let Nr = /* @__PURE__ */ $t(() => ct(s(), !0)), j = /* @__PURE__ */ ot(0), U = /* @__PURE__ */ ot(!1), J = /* @__PURE__ */ ot(Ht([])), it = /* @__PURE__ */ ot(-1), gt = /* @__PURE__ */ ot(""), Ye = /* @__PURE__ */ ot(!1), Ir = /* @__PURE__ */ ot(!1), Or = /* @__PURE__ */ ot(Ht(i())), vt = null, lt = null, _n = -1, fr = "", bn = /* @__PURE__ */ $t(() => gl(r() === "dark" ? _l : bl, f()));
  de(() => {
    x && n(bn) && ml(n(bn), x);
  }), de(() => {
    const u = n(J).length;
    k && u > 0 && Qi().then(() => {
      k && (k.scrollTop = k.scrollHeight);
    });
  });
  function cr() {
    n(U) || !n(O) || n(j) >= n(O).length || (w(U, !0), Ve());
  }
  function Ve() {
    if (!n(O) || n(j) >= n(O).length) {
      w(U, !1), vt = null;
      return;
    }
    const u = n(O)[n(j)], h = (u.delay || 1e3) / l();
    vt = setTimeout(
      () => {
        if (!n(O)) {
          w(U, !1), vt = null;
          return;
        }
        u.type === "command" && d() && !u.skipTyping ? qa(u) : (w(J, [...n(J), u], !0), _r(j), n(j) < n(O).length && n(U) ? Ve() : (w(U, !1), vt = null));
      },
      h
    );
  }
  function qa(u) {
    w(it, n(J).length, !0), w(gt, ""), w(J, [...n(J), { ...u, content: "" }], !0);
    const h = Wa(u.content);
    let D = 0;
    const dt = 1e3 / (u.typingSpeed || c());
    function X() {
      if (!n(U) || !n(O) || n(it) < 0) {
        lt = null, w(it, -1), w(gt, "");
        return;
      }
      if (D < h.length) {
        w(gt, n(gt) + h[D]), w(J, n(J).map((I, et) => et === n(it) ? { ...u, content: n(gt) } : I), !0), D++;
        const M = dt * 0.2, tt = dt + (Math.random() - 0.5) * M;
        lt = setTimeout(
          () => {
            requestAnimationFrame(() => X());
          },
          tt
        );
      } else
        w(it, -1), w(gt, ""), lt = null, _r(j), n(j) < n(O).length && n(U) ? Ve() : w(U, !1);
    }
    requestAnimationFrame(() => X());
  }
  function vr() {
    vt && (clearTimeout(vt), vt = null), lt && (clearTimeout(lt), lt = null), w(j, 0), w(J, [], !0), w(U, !1), w(it, -1), w(gt, "");
  }
  function Ha() {
    if (n(U))
      w(U, !1), vt && (clearTimeout(vt), vt = null), lt && (clearTimeout(lt), lt = null);
    else {
      if (!n(O) || n(O).length === 0)
        return;
      n(j) >= n(O).length ? (vr(), setTimeout(() => cr(), 10)) : cr();
    }
  }
  function mn(u) {
    return `step-${u}`;
  }
  function Dr(u) {
    return Array.isArray(u);
  }
  function Wa(u) {
    return typeof u == "string" ? u : u.map((h) => h.text).join("");
  }
  function za(u) {
    return Dr(u) ? u.some((h) => h.isTableRow || h.tableColumn) : !1;
  }
  function ja(u) {
    const h = [];
    let D = [];
    for (const Q of u)
      Q.isTableRow && D.length > 0 ? (h.push([...D]), D = [Q]) : D.push(Q);
    return D.length > 0 && h.push([...D]), h;
  }
  function gn() {
    n(it) >= 0 && n(it) < n(J).length && (lt && (clearTimeout(lt), lt = null), w(
      J,
      n(J).map((u, h) => h === n(it) ? {
        ...u,
        content: n(O)[n(j)].content
      } : u),
      !0
    ), w(it, -1), w(gt, ""), _r(j), n(j) < n(O).length && n(U) ? Ve() : w(U, !1));
  }
  let dr = null;
  de(() => {
    if (x && typeof IntersectionObserver < "u") {
      const u = new IntersectionObserver(
        (h) => {
          h.forEach((D) => {
            w(Ir, D.isIntersecting, !0);
          });
        },
        { threshold: 0.1 }
        // Trigger when 10% visible
      );
      return u.observe(x), () => {
        u && u.disconnect();
      };
    }
  }), de(() => {
    i() !== n(Or) && (!n(Or) && i() && w(Ye, !1), w(Or, i()));
  }), de(() => {
    i() && n(Ir) && !n(Ye) && !n(U) && n(O) && n(O).length > 0 && n(j) === 0 && (w(Ye, !0), setTimeout(() => cr(), 300));
  }), de(() => {
    if (x) {
      if (S() && b() && b().length > 0) {
        const h = b()[n(C)] || b()[0];
        h && (fr = h.id);
      }
      const u = () => {
        const h = n(O);
        !S() && h && h.length !== _n && (_n = h.length, (n(J).length > 0 || n(j) > 0) && (vr(), w(
          Ye,
          !1
          // Reset autoplay flag for new session
        ))), S() && n(ut) && n(ut).id !== fr && !n(K).has(n(ut).id) && (fr = n(ut).id, n(K).has(n(ut).id) || w(Ye, !1));
      };
      u(), dr = setInterval(u, 500);
    }
    return () => {
      dr !== null && (clearInterval(dr), dr = null), vt && (clearTimeout(vt), vt = null), lt && (clearTimeout(lt), lt = null);
    };
  });
  function Ua() {
    const u = r() === "dark" ? "light" : "dark";
    x == null || x.dispatchEvent(new CustomEvent("theme-change", { detail: u }));
  }
  function Ya() {
    n(ut) && n(K).set(n(ut).id, {
      currentStepIndex: n(j),
      isPlaying: n(U),
      displayedSteps: [...n(J)],
      typingStepIndex: n(it),
      typedContent: n(gt),
      lastUpdateTime: Date.now()
    });
  }
  function Va(u) {
    const h = n(K).get(u);
    if (h) {
      const D = Date.now() - h.lastUpdateTime;
      if (w(j, h.currentStepIndex, !0), w(U, h.isPlaying, !0), w(J, [...h.displayedSteps], !0), w(it, h.typingStepIndex, !0), w(gt, h.typedContent, !0), h.isPlaying && n(O) && n(j) < n(O).length) {
        let Q = n(j), dt = 0;
        for (; Q < n(O).length && dt < D; ) {
          const X = n(O)[Q], M = (X.delay || 1e3) / l();
          if (dt + M <= D)
            w(J, [...n(J), X], !0), Q++, dt += M;
          else
            break;
        }
        w(j, Q, !0), n(j) < n(O).length ? Ve() : w(U, !1);
      }
    } else
      n(K).has(u) || (vr(), i() && n(Ir) && n(O) && n(O).length > 0 && setTimeout(() => cr(), 300));
  }
  function Mr(u) {
    if (u === n(C) || !b() || u < 0 || u >= b().length) return;
    Ya(), vt && (clearTimeout(vt), vt = null), lt && (clearTimeout(lt), lt = null), w(C, u, !0);
    const h = b()[u];
    h && (Va(h.id), fr = h.id), x == null || x.dispatchEvent(new CustomEvent("tab-change", { detail: { index: u, tab: h } }));
  }
  function hr(u) {
    if (!b() || b().length <= 1) return;
    const h = b()[u];
    if (h.closable !== !1 && N())
      if (h && n(K).delete(h.id), x == null || x.dispatchEvent(new CustomEvent("tab-close", { detail: { index: u, tab: h } })), u === n(C)) {
        const Q = u > 0 ? u - 1 : 0;
        b().length > 1 && Mr(Q);
      } else u < n(C) && _r(C, -1);
  }
  function wn() {
    E() && (x == null || x.dispatchEvent(new CustomEvent("tab-add", { detail: {} })));
  }
  function yn(u) {
    return u ? `tab-status-${u}` : "";
  }
  var pr = Vl(), kn = Y(pr);
  {
    var Ga = (u) => {
      var h = xl(), D = Y(h);
      {
        var Q = (I) => {
          var et = wl();
          R(I, et);
        };
        V(D, (I) => {
          n(Te) && I(Q);
        });
      }
      var dt = st(D, 2), X = Y(dt, !0);
      z(dt);
      var M = st(dt, 2);
      {
        var tt = (I) => {
          var et = Tl(), kt = Y(et);
          {
            var wt = (H) => {
              var _ = yl();
              _.__click = Ha;
              var $ = Y(_, !0);
              z(_), nt(() => {
                _.disabled = !n(O) || n(O).length === 0, At($, n(U) ? "⏸" : "▶");
              }), R(H, _);
            };
            V(kt, (H) => {
              n(re) && H(wt);
            });
          }
          var St = st(kt, 2);
          {
            var Ot = (H) => {
              var _ = kl();
              _.__click = vr, nt(() => _.disabled = n(J).length === 0), R(H, _);
            };
            V(St, (H) => {
              n(ce) && H(Ot);
            });
          }
          var Gt = st(St, 2);
          {
            var Pt = (H) => {
              var _ = $l();
              _.__click = Ua;
              var $ = Y(_, !0);
              z(_), nt(() => At($, r() === "dark" ? "☀" : "🌙")), R(H, _);
            };
            V(Gt, (H) => {
              n(Vt) && H(Pt);
            });
          }
          z(et), R(I, et);
        };
        V(M, (I) => {
          n(ur) && I(tt);
        });
      }
      z(h), nt(() => At(X, n(Yt))), R(u, h);
    };
    V(kn, (u) => {
      n(Nr) && u(Ga);
    });
  }
  var $n = st(kn, 2);
  {
    var Ka = (u) => {
      var h = Rl(), D = Y(h);
      Ae(D, 17, b, Pe, (X, M, tt) => {
        var I = Pl();
        I.__click = () => Mr(tt);
        var et = Y(I);
        {
          var kt = (_) => {
            var $ = El(), W = Y($, !0);
            z($), nt(() => At(W, n(M).icon)), R(_, $);
          };
          V(et, (_) => {
            n(M).icon && _(kt);
          });
        }
        var wt = st(et, 2), St = Y(wt, !0);
        z(wt);
        var Ot = st(wt, 2);
        {
          var Gt = (_) => {
            var $ = Cl(), W = Y($, !0);
            z($), nt(() => At(W, n(M).badge)), R(_, $);
          };
          V(Ot, (_) => {
            n(M).badge !== void 0 && _(Gt);
          });
        }
        var Pt = st(Ot, 2);
        {
          var H = (_) => {
            var $ = Sl();
            $.__click = (W) => {
              W.stopPropagation(), hr(tt);
            }, $.__keydown = (W) => {
              (W.key === "Enter" || W.key === " ") && (W.stopPropagation(), W.preventDefault(), hr(tt));
            }, R(_, $);
          };
          V(Pt, (_) => {
            n(M).closable !== !1 && N() && b().length > 1 && _(H);
          });
        }
        z(I), nt(
          (_) => {
            Ze(I, 1, `terminal-tab ${tt === n(C) ? "active" : ""} ${_ ?? ""}`, "svelte-103tpek"), At(St, n(M).title);
          },
          [() => yn(n(M).status)]
        ), R(X, I);
      });
      var Q = st(D, 2);
      {
        var dt = (X) => {
          var M = Al();
          M.__click = wn, R(X, M);
        };
        V(Q, (X) => {
          E() && X(dt);
        });
      }
      z(h), R(u, h);
    };
    V($n, (u) => {
      S() && b() && b().length > 0 && G() === "top" && u(Ka);
    });
  }
  var xe = st($n, 2);
  xe.__click = gn, xe.__keydown = [Bl, gn];
  var Tn = Y(xe);
  Ae(Tn, 17, () => n(J), Pe, (u, h, D) => {
    var Q = Xe(), dt = Je(Q);
    {
      var X = (tt) => {
        var I = Ol(), et = Y(I);
        Ae(et, 21, () => ja(n(h).content), Pe, (kt, wt) => {
          const St = /* @__PURE__ */ $t(() => n(wt)[0]), Ot = /* @__PURE__ */ $t(() => {
            var H;
            return ((H = n(St)) == null ? void 0 : H.columnGap) || "16px";
          }), Gt = /* @__PURE__ */ $t(() => {
            var H;
            return ((H = n(St)) == null ? void 0 : H.rowGap) || "4px";
          });
          var Pt = Il();
          Ae(Pt, 21, () => n(wt), Pe, (H, _) => {
            var $ = Nl(), W = Y($, !0);
            z($), nt(
              (Lr) => {
                Ze($, 1, `terminal-table-cell ${n(_).tableColumn ? `col-${n(_).tableColumn}` : ""}`, "svelte-103tpek"), Re($, `${n(_).color ? `color: ${n(_).color};` : ""}${n(_).backgroundColor ? `background-color: ${n(_).backgroundColor};` : ""}${n(_).fontWeight ? `font-weight: ${n(_).fontWeight};` : ""}${n(_).textDecoration ? `text-decoration: ${n(_).textDecoration};` : ""}${n(_).fontStyle ? `font-style: ${n(_).fontStyle};` : ""}${n(_).width ? `width: ${n(_).width};` : ""}${n(_).align ? `text-align: ${n(_).align};` : ""}`), At(W, Lr);
              },
              [() => n(_).text.trim()]
            ), R(H, $);
          }), z(Pt), nt(() => Re(Pt, `gap: ${n(Ot) ?? ""}; margin-bottom: ${n(Gt) ?? ""};`)), R(kt, Pt);
        }), z(et), z(I), nt(
          (kt) => {
            Ze(I, 1, `terminal-line ${kt ?? ""}`, "svelte-103tpek"), Re(I, `${n(h).marginTop ? `margin-top: ${n(h).marginTop};` : ""}${n(h).marginBottom ? `margin-bottom: ${n(h).marginBottom};` : ""}`);
          },
          [() => mn(n(h).type)]
        ), R(tt, I);
      }, M = (tt) => {
        var I = Fl(), et = Y(I), kt = Y(et);
        {
          var wt = (_) => {
            var $ = Dn();
            nt(() => At($, `${n(h).prompt || "$"} `)), R(_, $);
          };
          V(kt, (_) => {
            n(h).type === "command" && _(wt);
          });
        }
        var St = st(kt);
        {
          var Ot = (_) => {
            var $ = Dn();
            nt(() => At($, n(gt))), R(_, $);
          }, Gt = (_) => {
            var $ = Xe(), W = Je($);
            {
              var Lr = (Ee) => {
                var Ge = Xe(), Fr = Je(Ge);
                Ae(Fr, 17, () => n(h).content, Pe, (ei, A) => {
                  var xn = Xe(), ri = Je(xn);
                  {
                    var ni = (Ce) => {
                      var Kt = Dl(), qr = Y(Kt);
                      jr(qr, () => n(A).text.replace(/\n/g, "<br>")), z(Kt), nt(() => Re(Kt, `${n(A).color ? `color: ${n(A).color};` : ""}${n(A).backgroundColor ? `background-color: ${n(A).backgroundColor};` : ""}${n(A).fontWeight ? `font-weight: ${n(A).fontWeight};` : ""}${n(A).textDecoration ? `text-decoration: ${n(A).textDecoration};` : ""}${n(A).fontStyle ? `font-style: ${n(A).fontStyle};` : ""}${n(A).marginTop ? `margin-top: ${n(A).marginTop};` : ""}${n(A).marginBottom ? `margin-bottom: ${n(A).marginBottom};` : ""}${n(A).marginLeft ? `margin-left: ${n(A).marginLeft};` : ""}${n(A).marginRight ? `margin-right: ${n(A).marginRight};` : ""}`)), R(Ce, Kt);
                    }, ai = (Ce) => {
                      var Kt = Ml(), qr = Y(Kt);
                      jr(qr, () => n(A).text.replace(/\n/g, "<br>")), z(Kt), nt(() => Re(Kt, `${n(A).color ? `color: ${n(A).color};` : ""}${n(A).backgroundColor ? `background-color: ${n(A).backgroundColor};` : ""}${n(A).fontWeight ? `font-weight: ${n(A).fontWeight};` : ""}${n(A).textDecoration ? `text-decoration: ${n(A).textDecoration};` : ""}${n(A).fontStyle ? `font-style: ${n(A).fontStyle};` : ""}${n(A).marginLeft ? `margin-left: ${n(A).marginLeft};` : ""}${n(A).marginRight ? `margin-right: ${n(A).marginRight};` : ""}`)), R(Ce, Kt);
                    };
                    V(ri, (Ce) => {
                      n(A).display === "block" ? Ce(ni) : Ce(ai, !1);
                    });
                  }
                  R(ei, xn);
                }), R(Ee, Ge);
              }, ti = (Ee) => {
                var Ge = Xe(), Fr = Je(Ge);
                jr(Fr, () => n(h).content.replace(/\n/g, "<br>")), R(Ee, Ge);
              };
              V(
                W,
                (Ee) => {
                  Dr(n(h).content) ? Ee(Lr) : Ee(ti, !1);
                },
                !0
              );
            }
            R(_, $);
          };
          V(St, (_) => {
            D === n(it) ? _(Ot) : _(Gt, !1);
          });
        }
        var Pt = st(St);
        {
          var H = (_) => {
            var $ = Ll();
            R(_, $);
          };
          V(Pt, (_) => {
            D === n(it) && _(H);
          });
        }
        z(et), z(I), nt(
          (_) => {
            Ze(I, 1, `terminal-line ${_ ?? ""}`, "svelte-103tpek"), Re(I, `${n(h).marginTop ? `margin-top: ${n(h).marginTop};` : ""}${n(h).marginBottom ? `margin-bottom: ${n(h).marginBottom};` : ""}`);
          },
          [() => mn(n(h).type)]
        ), R(tt, I);
      };
      V(dt, (tt) => {
        Dr(n(h).content) && za(n(h).content) ? tt(X) : tt(M, !1);
      });
    }
    R(u, Q);
  });
  var Ja = st(Tn, 2);
  {
    var Xa = (u) => {
      var h = ql();
      R(u, h);
    };
    V(Ja, (u) => {
      n(U) && n(it) === -1 && u(Xa);
    });
  }
  z(xe), Ln(xe, (u) => k = u, () => k);
  var Za = st(xe, 2);
  {
    var Qa = (u) => {
      var h = Yl(), D = Y(h);
      Ae(D, 17, b, Pe, (X, M, tt) => {
        var I = jl();
        I.__click = () => Mr(tt);
        var et = Y(I);
        {
          var kt = (_) => {
            var $ = Hl(), W = Y($, !0);
            z($), nt(() => At(W, n(M).icon)), R(_, $);
          };
          V(et, (_) => {
            n(M).icon && _(kt);
          });
        }
        var wt = st(et, 2), St = Y(wt, !0);
        z(wt);
        var Ot = st(wt, 2);
        {
          var Gt = (_) => {
            var $ = Wl(), W = Y($, !0);
            z($), nt(() => At(W, n(M).badge)), R(_, $);
          };
          V(Ot, (_) => {
            n(M).badge !== void 0 && _(Gt);
          });
        }
        var Pt = st(Ot, 2);
        {
          var H = (_) => {
            var $ = zl();
            $.__click = (W) => {
              W.stopPropagation(), hr(tt);
            }, $.__keydown = (W) => {
              (W.key === "Enter" || W.key === " ") && (W.stopPropagation(), W.preventDefault(), hr(tt));
            }, R(_, $);
          };
          V(Pt, (_) => {
            n(M).closable !== !1 && N() && b().length > 1 && _(H);
          });
        }
        z(I), nt(
          (_) => {
            Ze(I, 1, `terminal-tab ${tt === n(C) ? "active" : ""} ${_ ?? ""}`, "svelte-103tpek"), At(St, n(M).title);
          },
          [() => yn(n(M).status)]
        ), R(X, I);
      });
      var Q = st(D, 2);
      {
        var dt = (X) => {
          var M = Ul();
          M.__click = wn, R(X, M);
        };
        V(Q, (X) => {
          E() && X(dt);
        });
      }
      z(h), R(u, h);
    };
    V(Za, (u) => {
      S() && b() && b().length > 0 && G() === "bottom" && u(Qa);
    });
  }
  return z(pr), Ln(pr, (u) => x = u, () => x), R(t, pr), Xn({
    get theme() {
      return r();
    },
    set theme(u = "dark") {
      r(u), Z();
    },
    get session() {
      return a();
    },
    set session(u = []) {
      a(u), Z();
    },
    get autoplay() {
      return i();
    },
    set autoplay(u = !1) {
      i(u), Z();
    },
    get playbackSpeed() {
      return l();
    },
    set playbackSpeed(u = 1) {
      l(u), Z();
    },
    get showHeader() {
      return s();
    },
    set showHeader(u) {
      s(u), Z();
    },
    get title() {
      return o();
    },
    set title(u = "Terminal") {
      o(u), Z();
    },
    get colors() {
      return f();
    },
    set colors(u = {}) {
      f(u), Z();
    },
    get typingSpeed() {
      return c();
    },
    set typingSpeed(u = 40) {
      c(u), Z();
    },
    get enableTyping() {
      return d();
    },
    set enableTyping(u = !0) {
      d(u), Z();
    },
    get showPlayButton() {
      return p();
    },
    set showPlayButton(u) {
      p(u), Z();
    },
    get showResetButton() {
      return g();
    },
    set showResetButton(u) {
      g(u), Z();
    },
    get showThemeToggle() {
      return m();
    },
    set showThemeToggle(u) {
      m(u), Z();
    },
    get showWindowButtons() {
      return v();
    },
    set showWindowButtons(u) {
      v(u), Z();
    },
    get tabs() {
      return b();
    },
    set tabs(u = []) {
      b(u), Z();
    },
    get activeTab() {
      return y();
    },
    set activeTab(u = 0) {
      y(u), Z();
    },
    get showTabs() {
      return S();
    },
    set showTabs(u = !1) {
      S(u), Z();
    },
    get allowTabClose() {
      return N();
    },
    set allowTabClose(u = !0) {
      N(u), Z();
    },
    get allowTabAdd() {
      return E();
    },
    set allowTabAdd(u = !1) {
      E(u), Z();
    },
    get tabBarPosition() {
      return G();
    },
    set tabBarPosition(u = "top") {
      G(u), Z();
    }
  });
}
el(["click", "keydown"]);
customElements.define("terminal-session", pl(
  Kl,
  {
    showPlayButton: { attribute: "show-play-button" },
    showResetButton: { attribute: "show-reset-button" },
    showThemeToggle: { attribute: "show-theme-toggle" },
    showWindowButtons: { attribute: "show-window-buttons" },
    showTabs: { attribute: "show-tabs", type: "Boolean" },
    allowTabClose: { attribute: "allow-tab-close", type: "Boolean" },
    allowTabAdd: { attribute: "allow-tab-add", type: "Boolean" },
    autoplay: { attribute: "autoplay", type: "Boolean" },
    enableTyping: { attribute: "enable-typing", type: "Boolean" },
    showHeader: { attribute: "show-header" },
    playbackSpeed: { attribute: "playback-speed", type: "Number" },
    typingSpeed: { attribute: "typing-speed", type: "Number" },
    activeTab: { attribute: "active-tab", type: "Number" },
    theme: { attribute: "theme" },
    title: { attribute: "title" },
    tabBarPosition: { attribute: "tab-bar-position" },
    session: {},
    colors: {},
    tabs: {}
  },
  [],
  [],
  !0
));
export {
  Kl as default
};
